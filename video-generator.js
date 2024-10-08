const pexelsApiKey = 'haqeCYcrs2vlh228YfElbfyLa3CXY2zixa5glHb8BoyEap5C6z8rQ2qL';  // Replace with your Pexels API Key
const showMoreBtn = document.getElementById('show-more-btn');
let currentPage = 1; // Track the current page
let query = ""; // Track the current search query

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    query = document.getElementById('search-box').value;
    currentPage = 1; // Reset to the first page on new search

    if (query) {
        searchVideos(query, currentPage);  // Initial search
    }
});

// Function to search videos using Pexels API
async function searchVideos(query, page) {
    const url = `https://api.pexels.com/videos/search?query=${query}&per_page=9&page=${page}`;

    const response = await fetch(url, {
        headers: {
            Authorization: pexelsApiKey
        }
    });

    const data = await response.json();
    
    const videoResult = document.getElementById('search-result');

    // If it's the first page, clear the previous results
    if (page === 1) {
        videoResult.innerHTML = ''; 
    }

    // If there are videos, display them
    if (data.videos.length > 0) {
        data.videos.forEach(video => {
            const videoElement = document.createElement('video');
            videoElement.src = video.video_files[0].link;
            videoElement.controls = true;
            videoElement.setAttribute("type", "video/mp4");

            const downloadButton = document.createElement('button');
            downloadButton.innerHTML = '<i class="fa-solid fa-download"></i> Download';
            downloadButton.className = 'download-button';
            downloadButton.onclick = () => downloadVideo(video.video_files[0].link, `${video.id}.mp4`);

            const videoContainer = document.createElement('div');
            videoContainer.className = 'video-container';
            videoContainer.appendChild(videoElement);
            videoContainer.appendChild(downloadButton);

            videoResult.appendChild(videoContainer);
        });

        // Show the 'Show More' button if more results are available
        showMoreBtn.style.display = "block";
    } else {
        // If no more videos are found, hide the button
        showMoreBtn.style.display = "none";
    }
}

// Function to download video
function downloadVideo(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Add event listener to the "Show More" button to load more videos
showMoreBtn.addEventListener('click', () => {
    currentPage++;  // Increment the page number
    searchVideos(query, currentPage);  // Fetch the next set of videos
});
