

const openaiApiKey = 'sk-y32ruKzz29bWIH9UgSA7AiK7mgleXKXPzEhdAMZ6i3T3BlbkFJtXrbeUOyZXj3MsYbT3uNX3I7tZ285nKk69FKOvDsMA';
const showMoreBtn = document.getElementById('show-more-btn');
let currentPage = 1; // Track the current page
let query = ""; // Track the current search query

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    query = document.getElementById('search-box').value;
    currentPage = 1; // Reset to the first page on new search

    if (query) {
        searchArticles(query, currentPage);  // Initial search
    }
});

// Function to generate articles using OpenAI API
async function searchArticles(query, page) {
    const url = `https://api.openai.com/v1/completions`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'text-davinci-003', // Specify the model
            prompt: `Write a detailed article about: ${query}`,
            max_tokens: 1500 // Adjust based on desired length
        })
    });

    const data = await response.json();
    
    const articleResult = document.getElementById('search-result');

    // If it's the first page, clear the previous results
    if (page === 1) {
        articleResult.innerHTML = ''; 
    }

    // If there are articles, display them
    if (data.choices && data.choices.length > 0) {
        const article = data.choices[0].text;
        
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        
        const contentElement = document.createElement('p');
        contentElement.textContent = article;

        articleElement.appendChild(contentElement);
        
        articleResult.appendChild(articleElement);

        // Show the 'Show More' button if more results are available
        showMoreBtn.style.display = "block";
    } else {
        // If no more articles are found, hide the button
        showMoreBtn.style.display = "none";
    }
}

// Add event listener to the "Show More" button to load more articles
showMoreBtn.addEventListener('click', () => {
    currentPage++;  // Increment the page number
    searchArticles(query, currentPage);  // Fetch the next set of articles
});
