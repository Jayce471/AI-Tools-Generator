document.addEventListener('DOMContentLoaded', () => {
    const userNameInput = document.getElementById("userNameInput");
    const addressInput = document.getElementById("addressInput");
    const serviceInput = document.getElementById("serviceInput");
    const socialMediaInput = document.getElementById("socialMediaInput");
    const contactInput = document.getElementById("contactInput");

    // Set limits for the fields
    const maxUserNameLength = 15;
    const maxAddressLength = 20;
    const maxServiceLength = 19;
    const maxSocialMediaLength = 11;
    const maxContactLength = 7;

    // Trigger mockup generation whenever the user types in the input fields
    userNameInput.addEventListener("input", generateMockups);
    addressInput.addEventListener("input", generateMockups);
    serviceInput.addEventListener("input", generateMockups);
    socialMediaInput.addEventListener("input", generateMockups);
    contactInput.addEventListener("input", generateMockups);

    // Function to enforce character limits
    function enforceLimits() {
        const userName = userNameInput.value.trim();
        const address = addressInput.value.trim();
        const service = serviceInput.value.trim();
        const social = socialMediaInput.value.trim();
        const contact = contactInput.value.trim();

        // Check username character limit
        if (userName.length > maxUserNameLength) {
            alert(`Username cannot exceed ${maxUserNameLength} characters.`);
            userNameInput.value = userName.slice(0, maxUserNameLength);
        }

        // Check address character limit
        if (address.length > maxAddressLength) {
            alert(`Address cannot exceed ${maxAddressLength} characters.`);
            addressInput.value = address.slice(0, maxAddressLength);
        }

        // Check service character limit
        if (service.length > maxServiceLength) {
            alert(`Service cannot exceed ${maxServiceLength} characters.`);
            serviceInput.value = service.slice(0, maxServiceLength);
        }

        // Check social media character limit
        if (social.length > maxSocialMediaLength) {
            alert(`Social Media cannot exceed ${maxSocialMediaLength} characters.`);
            socialMediaInput.value = social.slice(0, maxSocialMediaLength);
        }

        // Check contact number length
        if (contact.length > maxContactLength) {
            alert(`Contact number cannot exceed ${maxContactLength} digits.`);
            contactInput.value = contact.slice(0, maxContactLength);
        }
    }

    // Array of card templates with font and color options
    const cardTemplates = [
        { layout: 'layout-1', bgColor: '#e3f2fd', font: 'Arial, sans-serif', textColor: '#333' },
        { layout: 'layout-2', bgColor: '#ffe0b2', font: 'Courier New, monospace', textColor: '#333' },
        { layout: 'layout-3', bgColor: '#ffccbc', font: 'Georgia, serif', textColor: '#4A90E2' },
        { layout: 'layout-4', bgColor: '#c8e6c9', font: 'Verdana, sans-serif', textColor: '#00796b' },
        { layout: 'layout-5', bgColor: '#f8bbd0', font: 'Helvetica Neue, sans-serif', textColor: '#6a1b9a' },
        { layout: 'layout-6', bgColor: '#d1c4e9', font: 'Arial, sans-serif', textColor: '#000' },
        { layout: 'layout-7', bgColor: '#ffecb3', font: 'Courier, monospace', textColor: '#000' },
        { layout: 'layout-8', bgColor: '#b2dfdb', font: 'Georgia, serif', textColor: '#00695c' },
        { layout: 'layout-9', bgColor: '#f3e5f5', font: 'Verdana, sans-serif', textColor: '#9c27b0' },
        { layout: 'layout-10', bgColor: '#212121', font: 'Helvetica, sans-serif', textColor: '#fff' },
        { layout: 'layout-11', bgColor: 'transparent', font: 'Arial, sans-serif', textColor: '#333' } // For image background
    ];

    // Function to generate mockups based on input text
    function generateMockups() {
        enforceLimits();

        const userName = userNameInput.value || "John Doe";
        const address = addressInput.value || "123 Main St.";
        const service = serviceInput.value || "Web Development";
        const social = socialMediaInput.value || "@john_doe";
        const contact = contactInput.value || "1234567";

        const mockupGrid = document.getElementById("mockupGrid");
        mockupGrid.innerHTML = '';

        // Loop through each template and generate a mockup
        cardTemplates.forEach(template => {
            const card = document.createElement("div");
            card.classList.add("card", template.layout);
            card.style.backgroundColor = template.bgColor;
            card.style.fontFamily = template.font;
            card.style.color = template.textColor;
            card.style.padding = "20px";
            card.style.borderRadius = "10px";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            card.style.margin = "10px";

            const nameElement = document.createElement("h2");
            nameElement.innerText = userName;

            const addressElement = document.createElement("p");
            addressElement.innerText = `Address: ${address}`;

            const serviceElement = document.createElement("p");
            serviceElement.innerText = `Service: ${service}`;

            const socialElement = document.createElement("p");
            socialElement.innerText = `Social: ${social}`;

            const contactElement = document.createElement("p");
            contactElement.innerText = `Contact: ${contact}`;

            card.appendChild(nameElement);
            card.appendChild(addressElement);
            card.appendChild(serviceElement);
            card.appendChild(socialElement);
            card.appendChild(contactElement);

            // Append the card to the grid
            mockupGrid.appendChild(card);
        });
    }

    // Initialize mockups with default text on page load
    generateMockups();
});
