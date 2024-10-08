document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('uploaded-image').src = e.target.result;
            document.getElementById('uploaded-image').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById('remove-bg-btn').addEventListener('click', function () {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload an image first!');
        return;
    }

    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': 'pSb6JzupypfZmEDRGVmSW3D6', // Replace with your remove.bg API key
        },
        body: formData,
    })
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            document.getElementById('output-image').src = url;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
