export default function decorate(block) {
  const titleEl = block.querySelector(':scope > div:nth-child(1)');
  const linkEl = block.querySelector(':scope > div:nth-child(2)');
  const labelEl = block.querySelector(':scope > div:nth-child(3)');

  // Extract text content safely
  const title = titleEl ? titleEl.textContent.trim() : '';
  const link = linkEl ? linkEl.textContent.trim() : '';
  const label = labelEl ? labelEl.textContent.trim() : '';

  // Clean out old HTML before rendering
  block.textContent = '';

  // Create structure
  const banner = document.createElement('div');

  banner.innerHTML = `
    <div class="action-banner-content">
      ${title ? `<h2 class="action-banner-title">${title}</h2>` : ''}
      ${
  link && label
    ? `<a href="${link}" class="button" title="${label}">
          ${label}
        </a>`
    : ''
}
  </div>
  `;
  block.append(banner);
}
