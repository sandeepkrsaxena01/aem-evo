export default async function decorate(block) {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();

    block.innerHTML = '';
    block.classList.add('product-container');

    // Create heading (in a separate row)
    const headingRow = document.createElement('div');
    headingRow.className = 'product-heading-row';
    headingRow.innerHTML = '<h2 class="product-heading">Featured Products</h2>';
    block.appendChild(headingRow);

    // Create the grid container
    const grid = document.createElement('div');
    grid.className = 'product-grid-wrapper';

    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p class="description">${product.description}</p>
          <p class="price">$${product.price}</p>
        `;

      grid.appendChild(productCard);
    });

    block.appendChild(grid);
  } catch (error) {
    block.innerHTML = '<p>Failed to load products.</p>';
  }
}
