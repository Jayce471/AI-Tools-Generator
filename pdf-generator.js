const editor = document.getElementById('editor');
const alignmentSelect = document.getElementById('alignmentSelect');

// Clear Editor
function clearEditor() {
    editor.innerHTML = '';
    editor.focus();
    alignmentSelect.value = '';
}

// Format Text (Bold, Italic, Underline, etc.)
function formatText(command) {
    document.execCommand(command, false, null);
    editor.focus();
}

// Align Text
function alignText(alignment) {
    if (alignment) {
        document.execCommand('justify' + alignment.charAt(0).toUpperCase() + alignment.slice(1), false, null);
    }
    editor.focus();
}

// Change Font Size
function changeFontSize(size) {
    document.execCommand("fontSize", false, size);
    editor.focus();
}

// Change Text Color
function changeColor(color) {
    document.execCommand('foreColor', false, color);
    editor.focus();
}

// Change Background Color
function changeBackgroundColor(color) {
    document.execCommand('hiliteColor', false, color);
    editor.focus();
}

// Handle File Input (DOCX and TXT)
document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file.name.endsWith('.docx')) {
        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            mammoth.convertToHtml({arrayBuffer: arrayBuffer})
                .then(result => {
                    editor.innerHTML = result.value;
                })
                .catch(error => {
                    console.error(error);
                    alert('Error reading the Word document');
                });
        };
        reader.readAsArrayBuffer(file);
    } else if (file.name.endsWith('.txt')) {
        reader.onload = function(e) {
            editor.innerText = e.target.result;
        };
        reader.readAsText(file);
    } else {
        alert('Unsupported file type. Please upload a .docx or .txt file.');
    }
    alignmentSelect.value = '';
});

// Save as PDF
function savePDF() {
    const opt = {
        margin: 10,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(editor).set(opt).save();
}

// Ensure the editor always has focus when interacting with it
editor.addEventListener('click', () => editor.focus());




















// const accessKey = "aa74MTQzMzE6MTQzODg6MU9wYVk4aTVXWEtKOWpEaA="; // Replace with your actual API key

// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn");

// let keyword = "";
// let page = 1;

// async function generatePDF() {
//     keyword = searchBox.value;
//     const url = `https://api.craftmypdf.com/v1/create`; // Replace with CraftMyPDF's actual endpoint

//     const requestBody = {
//         api_key: accessKey,
//         content: keyword,
//         page: page,
//         per_page: 12 // Number of pages or sections per request if applicable
//     };

//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(requestBody)
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();

//         if (page === 1) {
//             searchResult.innerHTML = "";
//         }

//         // Assuming `data.files` contains URLs of generated PDFs
//         const files = data.files;

//         files.map((file) => {
//             const pdfLink = document.createElement("a");
//             pdfLink.href = file.url;
//             pdfLink.target = "_blank";
//             pdfLink.textContent = "Download PDF";

//             searchResult.appendChild(pdfLink);
//             searchResult.appendChild(document.createElement("br"));
//         });

//         showMoreBtn.style.display = "block";

//     } catch (error) {
//         console.error('Error generating PDF:', error);
//         searchResult.innerHTML = "An error occurred while generating the PDF.";
//     }
// }

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1;
//     generatePDF();
// });

// showMoreBtn.addEventListener("click", () => {
//     page++;
//     generatePDF();
// });
