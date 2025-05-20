const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const searchDispArea = document.getElementById("search-disp-area");
const listMoreImages = document.getElementById("list-more");

searchButton.addEventListener("click", function() {
  searchDispArea.innerText = searchInput.value
});

