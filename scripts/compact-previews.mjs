import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync, gzipSync } from 'node:zlib';

const types = { Float32Array, Float64Array, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array };

// Card-sized views need far less than 32-bit position/colour precision.
// Position error is at most half a 1/65535 geometry span; original pages are intact.
export function compactModel(compressed) {
  const buffer = gunzipSync(compressed), headerSize = buffer.readUInt32LE(0);
  const data = JSON.parse(buffer.subarray(4, 4 + headerSize));
  if (data.version < 2 || data.compact) return compressed;
  const sourceOffset = Math.ceil((4 + headerSize) / 8) * 8;
  const chunks = []; let size = 0;
  function repack(spec, name = '') {
    if (!spec) return;
    const Type = types[spec.type];
    let array = new Type(buffer.buffer, buffer.byteOffset + sourceOffset + spec.offset, spec.length);
    if (spec.type === 'Float32Array' && spec.itemSize === 3 && name === 'position') {
      const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
      for (let i = 0; i < array.length; i++) { const axis = i % 3; min[axis] = Math.min(min[axis], array[i]); max[axis] = Math.max(max[axis], array[i]); }
      const span = max.map((value, axis) => value - min[axis]);
      const packed = new Uint16Array(array.length);
      for (let i = 0; i < array.length; i++) packed[i] = span[i % 3] ? Math.round((array[i] - min[i % 3]) / span[i % 3] * 65535) : 0;
      array = packed; spec.quantized = { min, span }; spec.normalized = false;
    } else if (spec.type === 'Float32Array' && spec.itemSize === 3 && ['normal', 'color'].includes(name)) {
      const isNormal = name === 'normal';
      if (array.every(value => value >= (isNormal ? -1.00001 : 0) && value <= 1.00001)) {
        array = isNormal ? Int8Array.from(array, value => Math.round(value * 127)) : Uint8Array.from(array, value => Math.round(value * 255));
        spec.normalized = true;
      }
    }
    spec.type = array.constructor.name; spec.offset = Math.ceil(size / 8) * 8;
    const bytes = Buffer.from(array.buffer, array.byteOffset, array.byteLength);
    chunks.push({ offset: spec.offset, bytes }); size = spec.offset + bytes.length;
  }
  for (const geometry of data.geometries) {
    for (const [name, spec] of Object.entries(geometry.attributes)) repack(spec, name);
    repack(geometry.index);
  }
  for (const mesh of data.meshes) { repack(mesh.instances); repack(mesh.colors); }
  data.compact = true;
  const header = Buffer.from(JSON.stringify(data)), offset = Math.ceil((4 + header.length) / 8) * 8;
  const output = Buffer.alloc(offset + size); output.writeUInt32LE(header.length, 0); header.copy(output, 4);
  for (const chunk of chunks) chunk.bytes.copy(output, offset + chunk.offset);
  return gzipSync(output, { level: 9 });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../site/assets/scenes');
  let before = 0, after = 0, count = 0;
  for (const file of readdirSync(root, { recursive: true }).filter(file => file.endsWith('.sbox'))) {
    const path = join(root, file), original = readFileSync(path), compact = compactModel(original);
    if (compact === original) continue;
    writeFileSync(path, compact); before += original.length; after += compact.length; count++;
  }
  console.log(`Compacted ${count} previews: ${(before / 1048576).toFixed(2)} → ${(after / 1048576).toFixed(2)} MiB`);
}
