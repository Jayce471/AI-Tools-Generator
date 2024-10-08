// Select all input fields and the slide preview container
const slideInputs = document.querySelectorAll('input, textarea');
const slidesContainer = document.getElementById('slides');

// Updated Array of design classes for each set (7 total now)
const designClasses = [
    'vintage-slide',    // Set 1
    'tech-slide',       // Set 2
    'nature-slide',     // Set 3
    'artistic-slide',   // Set 4
    'minimalist-slide', // Set 5
    'modern-bold-slide',// Set 6
    'retro-slide'       // Set 7
];

// Function to generate slides based on input values
function generateSlides() {
    slidesContainer.innerHTML = ''; // Clear previous slides

    for (let slideIndex = 1; slideIndex <= 11; slideIndex++) {
        // Get input values
        const title = document.getElementById(`slide${slideIndex}-title`)?.value || '';
        const content = document.getElementById(`slide${slideIndex}-content`)?.value || '';
        const quote = document.getElementById(`slide${slideIndex}-quote`)?.value || '';
        const imageUrl = document.getElementById(`slide${slideIndex}-image`)?.value || '';
        const points = document.getElementById(`slide${slideIndex}-points`)?.value.split(',').filter(Boolean);

        // Check if any input fields have values
        if (title || content || quote || imageUrl || points.length) {
            // Loop through each design class and create 7 slides per input
            designClasses.forEach((designClass) => {
                const slide = document.createElement('div');
                slide.classList.add('slide', designClass); // Add specific design class

                slide.innerHTML = `
                    <h3>${title || 'Slide Title ' + slideIndex}</h3>
                    <p>${content || 'Slide Content ' + slideIndex}</p>
                    <blockquote>${quote || 'Slide Quote ' + slideIndex}</blockquote>
                    ${imageUrl ? `<img src="${imageUrl}" alt="Slide Image" />` : ''}
                    <ul>
                        ${points.map(point => `<li>${point.trim()}</li>`).join('')}
                    </ul>
                `;

                slidesContainer.appendChild(slide);
            });
        }
    }
}

// Add event listeners to all input fields to call generateSlides on input
slideInputs.forEach(input => {
    input.addEventListener('input', generateSlides);
});

// Initial call to generate slides if there are already input values
generateSlides();
