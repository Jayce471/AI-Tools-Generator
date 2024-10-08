document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById("menuContainer");
    const menuTitleInput = document.getElementById("menuTitleInput");
    const menuDescriptionInput = document.getElementById("menuDescriptionInput");
    const menuImageInput = document.getElementById("menuImageInput");
    const startersInput = document.getElementById("startersInput");
    const mainCoursesInput = document.getElementById("mainCoursesInput");
    const dessertsInput = document.getElementById("dessertsInput"); // New input for desserts
    const beveragesInput = document.getElementById("beveragesInput"); // New input for beverages

    // Array of food and drink menu layouts
    const menuLayouts = [
        { layout: 'layout-1', bgColor: '#e3f2fd' },
        { layout: 'layout-2', bgColor: '#ffe0b2' },
        { layout: 'layout-3', bgColor: '#ffccbc' },
        { layout: 'layout-4', bgColor: '#c8e6c9' },
        { layout: 'layout-5', bgColor: '#f8bbd0' },
        { layout: 'layout-6', bgColor: '#d1c4e9' },
        { layout: 'layout-7', bgColor: '#ffecb3' },
        { layout: 'layout-8', bgColor: '#b2dfdb' },
        { layout: 'layout-9', bgColor: '#f3e5f5' },
        { layout: 'layout-10', bgColor: '#212121', textColor: '#fff' },
        { layout: 'layout-11', bgColor: 'transparent', textColor: '#333', imageUrl: '/mnt/data/image.png' } // Using uploaded image for layout-11
    ];

    // Default menu items (will be updated with user input)
    let menuItems = {
        starters: ["Bruschetta", "Stuffed Mushrooms", "Garlic Bread"],
        mainCourses: ["Grilled Salmon", "Steak Frites", "Vegetable Stir-Fry"],
        desserts: ["Cheesecake", "Chocolate Mousse", "Tiramisu"], // Will be dynamically updated
        beverages: ["Red Wine", "Sparkling Water", "Mojito"] // Will be dynamically updated
    };

    // Function to generate menu based on user inputs
    function generateMenu() {
        // Get user inputs
        const userTitle = menuTitleInput.value || "Default Menu Title";
        const userDescription = menuDescriptionInput.value || "Default Menu Description";
        const userImageURL = menuImageInput.value;

        // Clear the previous menu items
        menuContainer.innerHTML = '';

        // Loop through each layout and create a menu
        menuLayouts.forEach((layout, index) => {
            const menuSection = document.createElement("div");
            menuSection.classList.add("menu-section", layout.layout);

            // Handle background image if the user input an image URL
            if (userImageURL) {
                menuSection.style.backgroundImage = `url(${userImageURL})`;
                menuSection.style.backgroundSize = 'cover';
                menuSection.style.backgroundPosition = 'center';
            } else if (layout.imageUrl) {
                menuSection.style.backgroundImage = `url(${layout.imageUrl})`;
                menuSection.style.backgroundSize = 'cover';
                menuSection.style.backgroundPosition = 'center';
            } else {
                menuSection.style.backgroundColor = layout.bgColor;
            }

            // Set text color if defined
            if (layout.textColor) {
                menuSection.style.color = layout.textColor;
            }

            // Use user-provided title and description, or defaults if not provided
            const menuTitle = document.createElement("h3");
            menuTitle.innerText = `${userTitle} (Menu Layout ${index + 1})`;
            menuSection.appendChild(menuTitle);

            const menuDescription = document.createElement("p");
            menuDescription.innerText = userDescription;
            menuSection.appendChild(menuDescription);

            // Create sections for different categories (starters, mainCourses, etc.)
            for (const category in menuItems) {
                const categoryTitle = document.createElement("h4");
                categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1);
                menuSection.appendChild(categoryTitle);

                const ul = document.createElement("ul");
                ul.classList.add("menu");

                // Add menu items
                menuItems[category].forEach(item => {
                    const menuItem = document.createElement("li");
                    menuItem.innerText = item;
                    ul.appendChild(menuItem);
                });

                menuSection.appendChild(ul);
            }

            // Append the generated menu section to the container
            menuContainer.appendChild(menuSection);
        });
    }

    // Function to update starters based on user input
    function updateStarters() {
        const userStarters = startersInput.value.split(',').map(item => item.trim());
        if (userStarters.length > 0 && userStarters[0] !== '') {
            menuItems.starters = userStarters;
        } else {
            menuItems.starters = ["Bruschetta", "Stuffed Mushrooms", "Garlic Bread"];
        }
        generateMenu();
    }

    // Function to update main courses based on user input
    function updateMainCourses() {
        const userMainCourses = mainCoursesInput.value.split(',').map(item => item.trim());
        if (userMainCourses.length > 0 && userMainCourses[0] !== '') {
            menuItems.mainCourses = userMainCourses;
        } else {
            menuItems.mainCourses = ["Grilled Salmon", "Steak Frites", "Vegetable Stir-Fry"];
        }
        generateMenu();
    }

    // Function to update desserts based on user input
    function updateDesserts() {
        const userDesserts = dessertsInput.value.split(',').map(item => item.trim());
        if (userDesserts.length > 0 && userDesserts[0] !== '') {
            menuItems.desserts = userDesserts;
        } else {
            menuItems.desserts = ["Cheesecake", "Chocolate Mousse", "Tiramisu"];
        }
        generateMenu();
    }

    // Function to update beverages based on user input
    function updateBeverages() {
        const userBeverages = beveragesInput.value.split(',').map(item => item.trim());
        if (userBeverages.length > 0 && userBeverages[0] !== '') {
            menuItems.beverages = userBeverages;
        } else {
            menuItems.beverages = ["Red Wine", "Sparkling Water", "Mojito"];
        }
        generateMenu();
    }

    // Automatically update the menu when user inputs change
    menuTitleInput.addEventListener('input', generateMenu);
    menuDescriptionInput.addEventListener('input', generateMenu);
    menuImageInput.addEventListener('input', generateMenu);
    startersInput.addEventListener('input', updateStarters);
    mainCoursesInput.addEventListener('input', updateMainCourses);
    dessertsInput.addEventListener('input', updateDesserts); // Listen to desserts input changes
    beveragesInput.addEventListener('input', updateBeverages); // Listen to beverages input changes

    // Initialize the menu on page load
    generateMenu();
});
