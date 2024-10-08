document.addEventListener('DOMContentLoaded', () => {
    const userNameInput = document.getElementById("userNameInput");
    const postContentInput = document.getElementById("postContentInput");

    // Set limits for the username and content
    const maxUserNameLength = 15; // Character limit for username
    const maxPostContentLength= 50; // Word limit for post content

    // Trigger mockup generation whenever the user types in the input fields
    userNameInput.addEventListener("input", generateMockups);
    postContentInput.addEventListener("input", generateMockups);

    // Predefined mockup templates for social media posts with different layouts
    const mockupTemplates = [
        {
            layout: 'Layout 1',
            avatar: '<i class="fa fa-instagram" aria-hidden="true"></i>',
            bgColor: '#f0f0f0'
        },
        {
            layout: 'Layout 2',
            avatar: '<i class="fa fa-facebook" aria-hidden="true"></i>',
            bgColor: '#fafafa'
        },
        {
            layout: 'Layout 3',
            avatar: '<i class="fa fa-linkedin" aria-hidden="true"></i>',
            bgColor: '#fff8e1'
        },
        {
            layout: 'Layout 4',
            avatar: '<i class="fa fa-pinterest" aria-hidden="true"></i>',
            bgColor: '#e8f5e9'
        },
        {
            layout: 'Layout 5',
            avatar: '<i class="fa fa-reddit" aria-hidden="true"></i>',
            bgColor: '#fce4ec'
        },
        {
            layout: 'Layout 6',
            avatar: '<i class="fa fa-snapchat" aria-hidden="true"></i>',
            bgColor: '#f3e5f5'
        },
        {
            layout: 'Layout 7',
            avatar: '<i class="fa fa-soundcloud" aria-hidden="true"></i>',
            bgColor: '#ffebee'
        },
        {
            layout: 'Layout 8',
            avatar: '<i class="fa fa-spotify" aria-hidden="true"></i>',
            bgColor: '#e3f2fd'
        },
        {
            layout: 'Layout 9',
            avatar: '<i class="fa fa-telegram" aria-hidden="true"></i>',
            bgColor: '#ffccbc'
        },
        {
            layout: 'Layout 10',
            avatar: '<i class="fa fa-tumblr" aria-hidden="true"></i>',
            bgColor: '#f1f8e9'
        }
    ];

    // Assuming you have an element to display the mockup
    const mockupGrid = document.getElementById("mockupGrid");

    // Function to enforce character/word limits
    function enforceLimits() {
        const userName = userNameInput.value.trim();
        const postContent = postContentInput.value.trim();

        // Check username character limit
        if (userName.length > maxUserNameLength) {
            alert(`Username cannot exceed ${maxUserNameLength} characters.`);
            userNameInput.value = userName.slice(0, maxUserNameLength); // Trim excess characters
        }

        // Check post content word limit
        if (postContent.length > maxPostContentLength) {
            alert(`Post content cannot exceed ${maxPostContentLength} characters.`);
            postContentInput.value = postContent.slice(0, maxPostContentLength); // Trim excess characters
        }
    }

    // Function to generate mockups based on input text
    function generateMockups() {
        // First enforce limits on input fields
        enforceLimits();

        const userName = userNameInput.value || "Jane Smith"; // Default name
        const postContent = postContentInput.value || "Another example post to show multiple entries on the feed."; // Default content

        // Clear the grid before generating new mockups
        mockupGrid.innerHTML = '';

        // Loop through each template and generate a mockup
        mockupTemplates.forEach(template => {
            const postItem = document.createElement("div");
            postItem.classList.add("post");
            postItem.style.backgroundColor = template.bgColor;

            // Create the post header
            const postHeader = document.createElement("div");
            postHeader.classList.add("post-header");

            const avatar = document.createElement("div");
            avatar.classList.add("avatar");
            avatar.innerHTML = template.avatar; // Set avatar icon directly

            const nameElement = document.createElement("strong");
            nameElement.innerText = userName;

            postHeader.appendChild(avatar);
            postHeader.appendChild(nameElement);

            // Create the post content
            const postContentElement = document.createElement("div");
            postContentElement.classList.add("post-content");

            const postText = document.createElement("p");
            postText.innerText = postContent;

            postContentElement.appendChild(postText);

            // Create post actions
            const postActions = document.createElement("div");
            postActions.classList.add("post-actions");

            const likeButton = document.createElement("button");
            likeButton.classList.add("action-button");
            likeButton.innerHTML = '<i class="far fa-thumbs-up"></i>';

            const commentButton = document.createElement("button");
            commentButton.classList.add("action-button");
            commentButton.innerHTML = '<i class="far fa-comment"></i>';

            const shareButton = document.createElement("button");
            shareButton.classList.add("action-button");
            shareButton.innerHTML = '<i class="far fa-share-square"></i>';

            postActions.appendChild(likeButton);
            postActions.appendChild(commentButton);
            postActions.appendChild(shareButton);

            // Layout 1: Standard layout (Header, Content, Actions)
            if (template.layout === 'Layout 1') {
                postItem.appendChild(postHeader);
                postItem.appendChild(postContentElement);
                postItem.appendChild(postActions);
            }

            // Layout 2: Content on the left, avatar on the right
            if (template.layout === 'Layout 2') {
                const layoutContainer = document.createElement("div");
                layoutContainer.classList.add("layout-container");
                layoutContainer.appendChild(postContentElement);
                layoutContainer.appendChild(postHeader); // Avatar and name on the right
                postItem.appendChild(layoutContainer);
                postItem.appendChild(postActions);
            }

            // Layout 3: Card-style layout with content first, header below, and actions at the bottom
            if (template.layout === 'Layout 3') {
                const cardContainer = document.createElement("div");
                cardContainer.classList.add("card-container");
                cardContainer.appendChild(postContentElement); // Content first
                cardContainer.appendChild(postHeader); // Header below content
                cardContainer.appendChild(postActions); // Actions at the bottom
                postItem.appendChild(cardContainer);
            }

            // Layout 4: Sidebar layout (Avatar and name on the left, content on the right)
            if (template.layout === 'Layout 4') {
                const sidebarContainer = document.createElement("div");
                sidebarContainer.classList.add("sidebar-container");

                const sidebar = document.createElement("div");
                sidebar.classList.add("sidebar");
                sidebar.appendChild(postHeader); // Avatar and name in sidebar

                const contentArea = document.createElement("div");
                contentArea.classList.add("content-area");
                contentArea.appendChild(postContentElement); // Content on the right
                contentArea.appendChild(postActions); // Actions below content

                sidebarContainer.appendChild(sidebar);
                sidebarContainer.appendChild(contentArea);
                postItem.appendChild(sidebarContainer);
            }

            // Layout 5: Split post view (Header on top, Content and Actions split horizontally)
            if (template.layout === 'Layout 5') {
                const splitContainer = document.createElement("div");
                splitContainer.classList.add("split-container");

                splitContainer.appendChild(postHeader); // Header on top

                const splitContentActions = document.createElement("div");
                splitContentActions.classList.add("split-content-actions");

                splitContentActions.appendChild(postContentElement); // Content on left
                splitContentActions.appendChild(postActions); // Actions on right

                splitContainer.appendChild(splitContentActions);
                postItem.appendChild(splitContainer);
            }

            // Layout 6: Circular avatar overlay (Avatar floats on top of content)
            if (template.layout === 'Layout 6') {
                const overlayContainer = document.createElement("div");
                overlayContainer.classList.add("overlay-container");

                overlayContainer.appendChild(postContentElement); // Content first

                const floatingAvatar = document.createElement("div");
                floatingAvatar.classList.add("floating-avatar");
                floatingAvatar.innerHTML = template.avatar; // Avatar floats above the content

                overlayContainer.appendChild(floatingAvatar);
                overlayContainer.appendChild(postActions); // Actions at the bottom
                postItem.appendChild(overlayContainer);
            }

            // Layout 7: Actions at the top (Header on top, Actions above content)
            if (template.layout === 'Layout 7') {
                postItem.appendChild(postHeader); // Header on top
                postItem.appendChild(postActions); // Actions below header
                postItem.appendChild(postContentElement); // Content at the bottom
            }

            // Layout 8: Minimalistic (Avatar on top, content in center, actions at the bottom)
            if (template.layout === 'Layout 8') {
                const minimalContainer = document.createElement("div");
                minimalContainer.classList.add("minimal-container");

                minimalContainer.appendChild(postHeader); // Header on top
                minimalContainer.appendChild(postContentElement); // Content in the center
                minimalContainer.appendChild(postActions); // Actions at the bottom
                postItem.appendChild(minimalContainer);
            }

            // Layout 9: Bold header layout (Header is bold and centered)
            if (template.layout === 'Layout 9') {
                postHeader.classList.add("bold-header");
                postItem.appendChild(postHeader); // Header on top
                postItem.appendChild(postContentElement); // Content below
                postItem.appendChild(postActions); // Actions below content
            }

            // Layout 10: Image-based layout (Only for illustration)
            if (template.layout === 'Layout 10') {
                const stackedContainer = document.createElement("div");
                stackedContainer.classList.add("stacked-container");
    
                stackedContainer.appendChild(postContentElement); // Content on the left
    
                const rightStack = document.createElement("div");
                rightStack.classList.add("right-stack");
                
                rightStack.appendChild(postHeader); // Header with avatar on the right
                rightStack.appendChild(postActions); // Actions stacked below the avatar
    
                stackedContainer.appendChild(rightStack);
                postItem.appendChild(stackedContainer);
            }

            // Append the post item to the grid
            mockupGrid.appendChild(postItem);
        });
    }


    // Initialize mockups with default text on page load
    generateMockups();
});
