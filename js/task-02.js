const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

const listTitle = document.createElement("h2");
listTitle.textContent = "Ingredients:";
listTitle.style.color = "red";
document.body.insertBefore(listTitle, ingredientsList);

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ingredientsList.appendChild(li);
});
