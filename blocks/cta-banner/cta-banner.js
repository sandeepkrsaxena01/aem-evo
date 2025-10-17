export default function decorate(block) {
  // Extract data attributes from authored content
  const title = block.dataset.title || 'Action Title';
  const desc = block.dataset.description || '';
  const link = block.dataset.ctaLink || '#';
  const label = block.dataset.ctaText || 'Learn More';
  const variant = block.dataset.variant || 'primary';

  // Render HTML structure
  block.innerHTML = `
    <div class="action-banner ${variant}">
      <div class="action-banner-content">
        <h2 class="action-banner-title">${title}</h2>
        <p class="action-banner-desc">${desc}</p>
        ${
  link && label
    ? `<a href="${link}" class="button ${variant}" title="${label}">
                ${label}
              </a>`
    : ''
}
      </div>
    </div>
  `;
}
