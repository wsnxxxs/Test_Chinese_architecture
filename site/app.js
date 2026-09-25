const cards = document.querySelector('#cards');
const count = document.querySelector('#count');

try {
  const response = await fetch('./results.json');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const entries = await response.json();
  count.textContent = `${String(entries.length).padStart(2, '0')} 个作品`;
  for (const [index, entry] of entries.entries()) {
    const card = document.createElement('article');
    card.className = 'card';
    const link = document.createElement('a');
    link.href = `./results/${entry.id}/`;
    link.className = 'card-link';
    const image = document.createElement('img');
    image.src = `./results/${entry.id}/${entry.cover}`;
    image.alt = `${entry.title}场景预览`;
    image.loading = index === 0 ? 'eager' : 'lazy';
    const imageWrap = document.createElement('div');
    imageWrap.className = 'card-image';
    imageWrap.append(image);
    const content = document.createElement('div');
    content.className = 'card-content';
    const meta = document.createElement('p');
    meta.className = 'card-meta';
    meta.textContent = `${String(index + 1).padStart(2, '0')} / ${entry.model}`;
    const title = document.createElement('h3');
    title.textContent = entry.title;
    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = entry.description;
    const action = document.createElement('span');
    action.className = 'card-action';
    action.textContent = '进入场景 ↗';
    content.append(meta, title, description, action);
    link.append(imageWrap, content);
    card.append(link);
    cards.append(card);
  }
} catch (error) {
  cards.textContent = `作品清单加载失败：${error.message}`;
}
