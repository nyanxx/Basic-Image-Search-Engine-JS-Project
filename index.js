import { API_KEY } from "./apikey.js";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const searchDispArea = document.getElementById("search-disp-area");
const listMoreImages = document.getElementById("list-more");

let keyword = "";  
let page = 1;
let entry = "";

async function getImages(entry) {
    try {
        (searchInput.value) ? (keyword = encodeURIComponent(searchInput.value)) : keyword = "Vanilla Sky";
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=9`;
        const response = await fetch(url, { headers: { Authorization: `Client-ID ${API_KEY}` } });
        const data = await response.json();
        (entry == "main") && (searchDispArea.innerHTML = "");
        data.results.map(function (result) {
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = "Image From Unsplash.com"
            imageLink.appendChild(image);
            searchDispArea.appendChild(imageLink);
        });
        listMoreImages.style.display = "block";
    } catch (error) {
        console.log(error);
    }
}

searchButton.addEventListener("click", function () {
    getImages("main");
});

listMoreImages.addEventListener("click", function () {
    page++;
    getImages();
});