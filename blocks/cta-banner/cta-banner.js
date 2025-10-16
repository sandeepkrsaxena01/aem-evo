import { div, span } from '../../scripts/dom-builder.js';
import { decorateIcons, getMetadata } from '../../scripts/aem.js';

export const applyClasses = (element, classes) => element?.classList.add(...classes.split(' '));

export default async function decorate(block) {
  const isProductCategoryTemplate = getMetadata('template') === 'product-category';
  if (isProductCategoryTemplate) {
    let numberOfProducts;
    setTimeout(() => {
      numberOfProducts = document.querySelector('.total-category-products');
      const text = numberOfProducts.innerHTML;
      const match = text.match(/of\s+(\d+)/);
      if (match) {
        const total = match[1];
        const ctabannercontent = block.querySelector('.ctabannercontent');
        ctabannercontent.innerHTML += `(${total})`;
      }
    }, 1000);
  }
  applyClasses(
    block,
    'cta-container flex md:items-center flex-col md:flex-row justify-between gap-6 md:gap-8 w-full p-6 mt-10 mb-14 rounded-xl bg-[#edf6f7]',
  );
  const description = block.querySelector('p');
  const descriptionDiv = div();
  const title = block.querySelector('h3');
  if (
    description
    && (!description.parentElement || !description.parentElement.classList.contains('button-container'))
  ) {
    applyClasses(descriptionDiv, 'cta-desc flex-grow text-[#378189] text-sm break-words');
    descriptionDiv.appendChild(description);
    applyClasses(description, 'my-0 !text-lg font-semibold');
  }
  applyClasses(
    title,
    `title mt-0 ${descriptionDiv.classList.contains('cta-desc') ? 'mb-4' : 'mb-0'} !font-bold !text-xl text-[#378189] break-words`,
  );
  block.querySelectorAll('div').forEach((parent) => {
    if ([...parent.children].every((child) => child.tagName === 'DIV' && !child.innerHTML.trim())) {
      parent.remove();
    }
  });
  const ctaBanner = block.querySelector('.button-container');
  if (ctaBanner) {
    const icon = span({ class: 'arrow-icon icon icon-chevron-down-white w-4 rotate-0' });
    applyClasses(ctaBanner, 'flex items-center !px-4 !py-2 gap-2');
    ctaBanner.append(icon);
    decorateIcons(ctaBanner.parentElement);
    ctaBanner.querySelector('img').style.cssText = 'transform: rotate(270deg)';
    ctaBanner.querySelector('img')?.classList.add('w-4');
  }
}
