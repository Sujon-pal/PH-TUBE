function removeActiveClass() {
  const activeBtn = document.getElementsByClassName("active");
  for (let btn of activeBtn) {
    btn.classList.remove("active");
  }
}

const loadCategoriesVideo = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();

      const clickedBtn = document.getElementById(`btn-${id}`);

      clickedBtn.classList.add("active");
      displayVideo(data.category);
    });
};
