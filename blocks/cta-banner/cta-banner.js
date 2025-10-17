export default function decorate(block) {
  // Extract elements
  const titleEl = block.querySelector(':scope > div:nth-child(1)');
  const linkEl = block.querySelector(':scope > div:nth-child(2)');
  const labelEl = block.querySelector(':scope > div:nth-child(3)');

  // Safely extract text content
  const getTextContent = (element) => (element ? element.textContent.trim() : '');

  const title = getTextContent(titleEl);
  const link = getTextContent(linkEl);
  const label = getTextContent(labelEl);

  // Clean out old content
  block.textContent = '';

  // Create action banner content
  const createActionBannerContent = () => {
    const content = document.createElement('div');
    content.classList.add('action-banner-content');

    if (title) {
      const titleElement = document.createElement('h2');
      titleElement.classList.add('action-banner-title');
      titleElement.textContent = title;
      content.appendChild(titleElement);
    }

    if (link && label) {
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.classList.add('button');
      linkElement.title = label;
      linkElement.textContent = label;
      content.appendChild(linkElement);
    }

    return content;
  };

  // Create and append banner
  const banner = document.createElement('div');
  banner.appendChild(createActionBannerContent());
  block.append(banner);
}
