import { API_KEY } from "./apikey.js";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const searchDispArea = document.getElementById("search-disp-area");
const listMoreImages = document.getElementById("list-more");

let keyword = "";
let page = 1;

async function getImages() {
    try {
        keyword = searchInput.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}`; //&client_id=${API_KEY}
        const response = await fetch(url, { headers: { Authorization: `Client-ID ${API_KEY}` } });
        const data = await response.json();
        // console.log(data.errors[0]);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

searchButton.addEventListener("click", function () {
    getImages();
});

listMoreImages.addEventListener("click", function () {
    page += 1;
    console.log(page);
});