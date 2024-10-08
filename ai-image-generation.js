const accessKey = "wGfpn95g8dxLjKhvaZztFgjfu48fSThKnz-dS4JLdcY";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.forEach((result) => {
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description || "Image";

        // Create the download button
        const downloadButton = document.createElement("button");
        downloadButton.className = "download-button";
        downloadButton.innerHTML = '<i class="fa-solid fa-download"></i>';

        // Add click event listener to the download button
        downloadButton.addEventListener("click", (e) => {
            e.preventDefault();
            downloadImage(result.urls.full, `${result.id}.jpg`);
        });

        // Append image and download button to container
        imageContainer.appendChild(image);
        imageContainer.appendChild(downloadButton);
        searchResult.appendChild(imageContainer);
    });

    showMoreBtn.style.display = "block";
}

// Function to handle image download
async function downloadImage(imageUrl, fileName) {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});