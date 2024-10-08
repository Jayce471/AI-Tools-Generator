// // Sample data for newspaper articles
// const articles = [
//     {
//         title: "Breaking News: Market Hits All-Time High",
//         content: "The stock market reached an all-time high today, fueled by...",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Local Community Comes Together for Charity",
//         content: "The annual charity event raised over $50,000 for local schools.",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Sports Update: Team Wins Championship",
//         content: "The local team clinched the championship title with a thrilling...",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Weather Forecast: Sunny Days Ahead",
//         content: "The forecast indicates sunny weather for the upcoming week.",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Health Alert: New Guidelines Released",
//         content: "Health officials have released new guidelines regarding...",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Technology: New Gadget Released",
//         content: "The latest gadget promises to revolutionize the way we...",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Politics: Upcoming Elections",
//         content: "Candidates are preparing for the upcoming elections...",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Entertainment: Movie Premieres",
//         content: "The latest blockbuster film premiered last night to rave reviews.",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Travel: Top Destinations for 2024",
//         content: "Explore the top travel destinations for the coming year...",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Opinion: The Importance of Community",
//         content: "Community engagement is essential for a thriving society.",
//         image: "https://via.placeholder.com/300"
//     },
//     {
//         title: "Education: New Learning Initiatives",
//         content: "Schools are adopting new initiatives to enhance learning...",
//         image: "https://via.placeholder.com/300"
//     }
// ];

// // Function to generate newspaper articles dynamically
// function generateArticles() {
//     const container = document.getElementById('newsContainer');

//     articles.forEach((article, index) => {
//         const articleDiv = document.createElement('div');
//         articleDiv.classList.add('article', `layout-${index + 1}`);
        
//         const title = document.createElement('h2');
//         title.textContent = article.title;
        
//         const content = document.createElement('p');
//         content.textContent = article.content;
        
//         const img = document.createElement('img');
//         img.src = article.image;
//         img.alt = `Image for ${article.title}`;
        
//         articleDiv.appendChild(title);
//         articleDiv.appendChild(content);
//         articleDiv.appendChild(img);
        
//         container.appendChild(articleDiv);
//     });
// }

// // Call the function to generate articles on page load
// window.onload = generateArticles;

















// document.addEventListener('DOMContentLoaded', () => {
//     const articleTitleInput = document.getElementById("articleTitleInput");
//     const articleContentInput = document.getElementById("articleContentInput");
//     const articleImageInput = document.getElementById("articleImageInput");

//     // Trigger article generation whenever the user types in the input fields
//     articleTitleInput.addEventListener("input", generateArticles);
//     articleContentInput.addEventListener("input", generateArticles);
//     articleImageInput.addEventListener("input", generateArticles);

//     // Array of article layouts with background and font options
//     const articleTemplates = [
//         { layout: 'layout-1', bgColor: '#e3f2fd', font: 'Arial, sans-serif', textColor: '#333' },
//         { layout: 'layout-2', bgColor: '#ffe0b2', font: 'Courier New, monospace', textColor: '#333' },
//         { layout: 'layout-3', bgColor: '#ffccbc', font: 'Georgia, serif', textColor: '#4A90E2' },
//         { layout: 'layout-4', bgColor: '#c8e6c9', font: 'Verdana, sans-serif', textColor: '#00796b' },
//         { layout: 'layout-5', bgColor: '#f8bbd0', font: 'Helvetica Neue, sans-serif', textColor: '#6a1b9a' },
//         { layout: 'layout-6', bgColor: '#d1c4e9', font: 'Arial, sans-serif', textColor: '#000' },
//         { layout: 'layout-7', bgColor: '#ffecb3', font: 'Courier, monospace', textColor: '#000' },
//         { layout: 'layout-8', bgColor: '#b2dfdb', font: 'Georgia, serif', textColor: '#00695c' },
//         { layout: 'layout-9', bgColor: '#f3e5f5', font: 'Verdana, sans-serif', textColor: '#9c27b0' },
//         { layout: 'layout-10', bgColor: '#212121', font: 'Helvetica, sans-serif', textColor: '#fff' },
//         { layout: 'layout-11', bgColor: 'transparent', font: 'Arial, sans-serif', textColor: '#333' } // For image background
//     ];

//     // Function to generate articles dynamically
//     function generateArticles() {
//         const articleTitle = articleTitleInput.value || "Sample Title";
//         const articleContent = articleContentInput.value || "Sample article content goes here. This is just placeholder text.";
//         const articleImage = articleImageInput.value || "";

//         const articleGrid = document.getElementById("articleGrid");
//         articleGrid.innerHTML = ''; // Clear grid before rendering new articles

//         // Loop through each template and generate an article layout
//         articleTemplates.forEach(template => {
//             const articleCard = document.createElement("div");
//             articleCard.classList.add("article-card", template.layout);
//             articleCard.style.backgroundColor = template.bgColor;
//             articleCard.style.fontFamily = template.font;
//             articleCard.style.color = template.textColor;
//             articleCard.style.padding = "20px";
//             articleCard.style.borderRadius = "10px";
//             articleCard.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//             articleCard.style.margin = "10px";

//             const titleElement = document.createElement("h2");
//             titleElement.innerText = articleTitle;

//             const contentElement = document.createElement("p");
//             contentElement.innerText = articleContent;

//             // Add image if a URL is provided
//             if (articleImage) {
//                 const imageElement = document.createElement("img");
//                 imageElement.src = articleImage;
//                 imageElement.alt = articleTitle;
//                 imageElement.style.width = "100%";
//                 imageElement.style.borderRadius = "10px";
//                 imageElement.style.marginBottom = "15px";
//                 articleCard.appendChild(imageElement);
//             }

//             // Append title and content to the article card
//             articleCard.appendChild(titleElement);
//             articleCard.appendChild(contentElement);

//             // Append the article card to the grid
//             articleGrid.appendChild(articleCard);
//         });
//     }

//     // Initialize articles with default text on page load
//     generateArticles();
// });
document.addEventListener('DOMContentLoaded', () => {
    const articleTitleInput = document.getElementById("articleTitleInput");
    const articleContentInput = document.getElementById("articleContentInput");
    const articleImageInput = document.getElementById("articleImageInput");

    // Trigger article generation whenever the user types in the input fields
    articleTitleInput.addEventListener("input", generateArticles);
    articleContentInput.addEventListener("input", generateArticles);
    articleImageInput.addEventListener("input", generateArticles);

    // Array of article layouts with different styles
    const articleTemplates = [
        { layout: 'layout-1', bgColor: '#e3f2fd', font: 'Arial, sans-serif', textColor: '#333' },
        { layout: 'layout-2', bgColor: '#ffe0b2', font: 'Courier New, monospace', textColor: '#333' },
        { layout: 'layout-3', bgColor: '#ffccbc', font: 'Georgia, serif', textColor: '#4A90E2' },
        { layout: 'layout-4', bgColor: '#c8e6c9', font: 'Verdana, sans-serif', textColor: '#fff' },
        { layout: 'layout-5', bgColor: '#f8bbd0', font: 'Helvetica Neue, sans-serif', textColor: '#6a1b9a' },
        { layout: 'layout-6', bgColor: '#f1f8e9', font: 'Arial, sans-serif', textColor: '#333' },
        { layout: 'layout-7', bgColor: '#ffecb3', font: 'Courier, monospace', textColor: '#000' },
        { layout: 'layout-8', bgColor: '#d1c4e9', font: 'Georgia, serif', textColor: '#333' },
        { layout: 'layout-9', bgColor: '#ffccbc', font: 'Verdana, sans-serif', textColor: '#4A90E2' },
        { layout: 'layout-10', bgColor: '#f8bbd0', font: 'Helvetica Neue, sans-serif', textColor: '#6a1b9a' },
        { layout: 'layout-11', bgColor: '#ffe0b2', font: 'Courier New, monospace', textColor: '#333' },
    ];

    // Function to generate articles dynamically
    function generateArticles() {
        const articleTitle = articleTitleInput.value || "Sample Title";
        const articleContent = articleContentInput.value || "Sample article content goes here.";
        const articleImage = articleImageInput.value || ""; // Use empty string for optional image

        const articleGrid = document.getElementById("articleGrid");
        articleGrid.innerHTML = ''; // Clear grid before rendering new articles

        // Loop through each template and generate an article layout
        articleTemplates.forEach(template => {
            const articleCard = document.createElement("div");
            articleCard.classList.add("article-card", template.layout);
            articleCard.style.backgroundColor = template.bgColor;
            articleCard.style.fontFamily = template.font;
            articleCard.style.color = template.textColor;

            const titleElement = document.createElement("h2");
            titleElement.innerText = articleTitle;

            const contentElement = document.createElement("p");
            contentElement.innerText = articleContent;

            // Image logic based on layout
            if (articleImage) {
                const imageElement = document.createElement("img");
                imageElement.src = articleImage;
                imageElement.alt = articleTitle;

                // Conditional rendering based on layout
                switch (template.layout) {
                    case 'layout-7':
                        articleCard.appendChild(imageElement);
                        articleCard.appendChild(titleElement);
                        articleCard.appendChild(contentElement);
                        break;
                    case 'layout-8':
                        const verticalSplitContainer = document.createElement("div");
                        verticalSplitContainer.appendChild(imageElement);
                        verticalSplitContainer.appendChild(titleElement);
                        verticalSplitContainer.appendChild(contentElement);
                        articleCard.appendChild(verticalSplitContainer);
                        break;
                    case 'layout-9':
                        const horizontalSplitContainer = document.createElement("div");
                        const contentContainer = document.createElement("div");
                        contentContainer.className = "content-container";
                        contentContainer.appendChild(imageElement);
                        contentContainer.appendChild(contentElement);
                        articleCard.appendChild(titleElement);
                        articleCard.appendChild(contentContainer);
                        break;
                    case 'layout-10':
                        const caption = document.createElement("div");
                        caption.className = "caption";
                        caption.innerText = "Caption for the image"; // You can customize this caption
                        articleCard.appendChild(imageElement);
                        articleCard.appendChild(caption);
                        articleCard.appendChild(titleElement);
                        articleCard.appendChild(contentElement);
                        break;
                    case 'layout-11':
                        articleCard.appendChild(imageElement);
                        articleCard.appendChild(titleElement);
                        articleCard.appendChild(contentElement);
                        break;
                    default:
                        articleCard.appendChild(imageElement);
                        articleCard.appendChild(titleElement);
                        articleCard.appendChild(contentElement);
                }
            } else {
                // If no image, just append title and content
                articleCard.appendChild(titleElement);
                articleCard.appendChild(contentElement);
            }

            // Append the article card to the grid
            articleGrid.appendChild(articleCard);
        });
    }

    // Initialize articles with default text on page load
    generateArticles();
});

