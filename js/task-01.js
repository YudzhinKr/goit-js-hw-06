const categoriesList = document.querySelectorAll("ul#categories > li.item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
