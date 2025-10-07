export default async function decorate(block) {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();

    block.innerHTML = '';
    block.classList.add('product-container');

    // Create the grid container
    const grid = document.createElement('div');
    grid.classList.add('product-grid-wrapper');

    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
          <img class="max-w-full h-auto object-contain mb-3" src="${product.thumbnail}" alt="${product.title}" />
          <h3 class="mb-2 text-[1.1rem]">${product.title}</h3>
          <p class="text-[0.9rem] text-[#333] mb-3 leading-[1.4]">${product.description}</p>
          <p class="font-bold text-base text-[#111] mt-auto">$${product.price}</p>
        `;

      grid.appendChild(productCard);
    });

    block.appendChild(grid);
  } catch (error) {
    block.innerHTML = '<p>Failed to load products.</p>';
  }
}
