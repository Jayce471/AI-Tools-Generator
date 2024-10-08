document.addEventListener("DOMContentLoaded", function () {
    const colorControls = document.getElementById('colorControls');
    const angle = document.getElementById('angle');
    const output = document.getElementById('output');
    const downloadBtn = document.getElementById('downloadBtn');
    const savePresetBtn = document.getElementById('savePresetBtn');
    const loadPresetBtn = document.getElementById('loadPresetBtn');
    const addColorBtn = document.getElementById('addColorBtn');
    const removeColorBtn = document.getElementById('removeColorBtn');
    const paletteContainer = document.getElementById('paletteContainer');
    const backgroundPreview = document.getElementById('backgroundPreview'); // Use the container for preview
    let currentColorInputIndex = 0; // Track the currently selected color input

    // Function to set the gradient background
    function setGradient() {
        const colorInputs = document.querySelectorAll('.color-input');
        const colors = Array.from(colorInputs).map(input => input.value);
        const backgroundStyle = `linear-gradient(${angle.value}deg, ${colors.join(', ')})`;
        backgroundPreview.style.background = backgroundStyle; // Apply gradient to the preview container
        output.textContent = `background: ${backgroundStyle};`;
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to generate color palette
    function generateColorPalette() {
        const constantColors = [
            '#FF5733', // Red-Orange
            '#33FF57', // Green
            '#3357FF', // Blue
            '#FF33A1', // Pink
            '#33FFF6', // Light Blue
            '#FFBD33', // Yellow
            '#8D33FF', // Purple
            '#FF3333', // Red
            '#33FFB8', // Aqua
            '#B833FF'  // Violet
        ];

        paletteContainer.innerHTML = ''; // Clear existing palettes
        constantColors.forEach(colorSuggestion => {
            const paletteBox = document.createElement('div');
            paletteBox.classList.add('color-box');
            paletteBox.style.backgroundColor = colorSuggestion;
            paletteBox.addEventListener('click', function () {
                const colorInputs = document.querySelectorAll('.color-input');
                colorInputs[currentColorInputIndex].value = colorSuggestion; // Apply the selected palette color to the active input
                setGradient();
            });
            paletteContainer.appendChild(paletteBox);
        });
    }

    // Add event listeners to existing color inputs
    function addColorInputListeners() {
        const colorInputs = document.querySelectorAll('.color-input');
        colorInputs.forEach((input, index) => {
            input.addEventListener('input', setGradient); // Listen for manual color changes
            input.addEventListener('click', function () {
                currentColorInputIndex = index; // Set the clicked color input as active
                updateActiveInputHighlight();
            });
        });
    }

    // Update the style of the currently selected color input
    function updateActiveInputHighlight() {
        const colorInputs = document.querySelectorAll('.color-input');
        colorInputs.forEach((input, index) => {
            if (index === currentColorInputIndex) {
                input.classList.add('active-color-input'); // Highlight the active input
            } else {
                input.classList.remove('active-color-input'); // Remove highlight from others
            }
        });
    }

    // Add a new color input field
    addColorBtn.addEventListener('click', function () {
        const newColorInput = document.createElement('input');
        newColorInput.type = 'color';
        newColorInput.classList.add('color-input');
        newColorInput.value = getRandomColor(); // Random initial color

        // Add event listeners to the new input
        newColorInput.addEventListener('input', setGradient);
        newColorInput.addEventListener('click', function () {
            currentColorInputIndex = document.querySelectorAll('.color-input').length - 1; // Set new input as active
            updateActiveInputHighlight();
        });
        colorControls.appendChild(newColorInput);
        setGradient(); // Update gradient with the new color
        updateActiveInputHighlight(); // Update active input style
    });

    // Remove the last color input field
    removeColorBtn.addEventListener('click', function () {
        const colorInputs = document.querySelectorAll('.color-input');
        if (colorInputs.length > 2) { // At least two colors must remain
            colorControls.removeChild(colorInputs[colorInputs.length - 1]);
            setGradient(); // Update gradient after removal
            currentColorInputIndex = colorInputs.length - 2; // Update the index to the last existing input
            updateActiveInputHighlight();
        } else {
            alert('You must have at least two colors.');
        }
    });

    // Save preset to local storage
    function savePreset() {
        const colorInputs = document.querySelectorAll('.color-input');
        const colors = Array.from(colorInputs).map(input => input.value);
        const preset = {
            colors: colors,
            angle: angle.value
        };
        localStorage.setItem('gradientPreset', JSON.stringify(preset));
        alert('Preset saved!');
    }

    // Load preset from local storage
    function loadPreset() {
        const preset = localStorage.getItem('gradientPreset');
        if (preset) {
            const { colors: savedColors, angle: savedAngle } = JSON.parse(preset);
            const colorInputs = document.querySelectorAll('.color-input');

            savedColors.forEach((color, index) => {
                if (index < colorInputs.length) {
                    colorInputs[index].value = color;
                } else {
                    // If more colors are saved than inputs, add new inputs
                    const newColorInput = document.createElement('input');
                    newColorInput.type = 'color';
                    newColorInput.classList.add('color-input');
                    newColorInput.value = color;
                    newColorInput.addEventListener('input', setGradient);
                    newColorInput.addEventListener('click', function () {
                        currentColorInputIndex = document.querySelectorAll('.color-input').length - 1;
                        updateActiveInputHighlight();
                    });
                    colorControls.appendChild(newColorInput);
                }
            });
            angle.value = savedAngle;
            setGradient();
            alert('Preset loaded!');
        } else {
            alert('No preset found.');
        }
    }

    // Event listeners for input changes
    angle.addEventListener('input', setGradient);

    // Download button functionality
    // downloadBtn.addEventListener('click', function () {
    //     const canvas = document.createElement('canvas');
    //     const ctx = canvas.getContext('2d');
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;

    //     canvas.width = width;
    //     canvas.height = height;

    //     const colors = Array.from(document.querySelectorAll('.color-input')).map(input => input.value);
    //     const gradient = ctx.createLinearGradient(0, 0, width * Math.cos((angle.value - 90) * Math.PI / 180), height * Math.sin((angle.value - 90) * Math.PI / 180));
        
    //     colors.forEach((color, index) => {
    //         gradient.addColorStop(index / (colors.length - 1), color);
    //     });

    //     ctx.fillStyle = gradient;
    //     ctx.fillRect(0, 0, width, height);

    //     const link = document.createElement('a');
    //     link.download = 'background.png';
    //     link.href = canvas.toDataURL('image/png');
    //     link.click();
    // });


    downloadBtn.addEventListener('click', function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = 1920;  // Set canvas width
        const height = 1080; // Set canvas height (you can customize these values as needed)

        canvas.width = width;
        canvas.height = height;

        const colors = Array.from(document.querySelectorAll('.color-input')).map(input => input.value);
        const angleValue = parseFloat(angle.value); // Convert angle to float

        // Convert the angle to radians and calculate x and y coordinates
        const angleInRadians = (angleValue * Math.PI) / 180;
        const x1 = 0;
        const y1 = 0;
        const x2 = width * Math.cos(angleInRadians);
        const y2 = height * Math.sin(angleInRadians);

        // Create linear gradient for the canvas
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        
        // Add color stops for each selected color
        colors.forEach((color, index) => {
            gradient.addColorStop(index / (colors.length - 1), color);
        });

        // Apply the gradient and fill the canvas
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Convert canvas to image and trigger download
        const link = document.createElement('a');
        link.download = 'background.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });

    // Button event listeners
    savePresetBtn.addEventListener('click', savePreset);
    loadPresetBtn.addEventListener('click', loadPreset);

    // Initialize
    addColorInputListeners(); // Attach listeners to existing color inputs
    setGradient();
    generateColorPalette();
    updateActiveInputHighlight(); // Initially highlight the first color input
});
