function loadCategories() {
  // Fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((ref) => ref.json())
    .then((data) => displayCategories(data.categories));
}



function displayCategories(categorie) {
  // get container
  const categoriesContiner = document.getElementById("categories-continer");

  // loop operation on Array of object
  for (let cat of categorie) {
    // create Element
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick="loadCategoriesVideo(${cat.category_id})" class="btn btn-sm">${cat.category}</button>
    `;
    // Append element
    categoriesContiner.append(div)
  }
}

loadCategories();
