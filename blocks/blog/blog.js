export default async function decorate(block) {
  try {
    const res = await fetch('/blogs-index.json');
    const json = await res.json();

    const filteredData = json.data.filter((item) => item.title && item.description);

    // Do not clear the existing content
    const container = document.createElement('div');
    container.classList.add('block-container');

    filteredData.forEach((item) => {
      const { path, title, image } = item;

      const blogBox = document.createElement('div');
      blogBox.classList.add('blog-box');

      const titleLink = document.createElement('a');
      titleLink.href = path;
      titleLink.classList.add('blog-title');
      titleLink.textContent = title;

      const imageLink = document.createElement('a');
      imageLink.href = path;
      const img = document.createElement('img');
      img.src = image;
      img.alt = title;
      img.loading = 'lazy';
      imageLink.appendChild(img);

      // Create description (if needed)
      // const desc = document.createElement('p');
      // desc.classList.add('blog-description');
      // desc.textContent = description;

      // Append elements to blog box
      blogBox.appendChild(imageLink);
      blogBox.appendChild(titleLink);
      // blogBox.appendChild(desc);

      container.appendChild(blogBox);
    });

    // Append new container to the existing block
    block.appendChild(container);
  } catch (error) {
    block.innerHTML = '<p>Failed to load blog posts.</p>';
  }
}
