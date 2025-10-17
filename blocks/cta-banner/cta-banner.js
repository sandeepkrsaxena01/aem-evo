export default function decorate(block) {
  // Collect all elements in the authored block
  const titleEl = block.querySelector(':scope > div:nth-child(1)');
  const descEl = block.querySelector(':scope > div:nth-child(2)');
  const linkEl = block.querySelector(':scope > div:nth-child(3)');
  const labelEl = block.querySelector(':scope > div:nth-child(4)');
  const variantEl = block.querySelector(':scope > div:nth-child(5)');

  // Extract text content safely
  const title = titleEl ? titleEl.textContent.trim() : '';
  const desc = descEl ? descEl.textContent.trim() : '';
  const link = linkEl ? linkEl.textContent.trim() : '';
  const label = labelEl ? labelEl.textContent.trim() : '';
  const variant = variantEl ? variantEl.textContent.trim() : 'primary';

  // Clean out old HTML before rendering
  block.textContent = '';

  // Create structure
  const banner = document.createElement('div');
  banner.className = `action-banner ${variant}`;

  banner.innerHTML = `
    <div class="action-banner-content">
      ${title ? `<h2 class="action-banner-title">${title}</h2>` : ''}
      ${desc ? `<p class="action-banner-desc">${desc}</p>` : ''}
      ${
  link && label
    ? `<a href="${link}" class="button ${variant}" title="${label}">
               ${label}
             </a>`
    : ''
}
    </div>
  `;

  block.append(banner);
}
