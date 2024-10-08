const app = {
    api: function(endpoint) {
        return 'https://iconfinder-api-auth.herokuapp.com/v4/' + endpoint;
    },

    search: function() {
        const query = $('#query').val().trim();
        if (query.length > 0) {
            $.getJSON(app.api('icons/search?query=' + query + '&count=30'), function(result) {
                app.renderResults(result);
            });
        }
    },

    renderResults: function(data) {
        let html = '';
        if (data.total_count > 0) {
            $.each(data.icons, function(index, icon) {
                const file = icon.raster_sizes[icon.raster_sizes.length - 1];
                html += `
                    <div class="icon-container" style="position: relative;">
                        <img src="${file.formats[0].preview_url}" alt="Icon" data-icon-id="${icon.icon_id}">
                        <button class="download-button" data-download-url="${file.formats[0].preview_url}" data-filename="${icon.icon_id}.png">
                            <i class="fa-solid fa-download"></i> Download
                        </button>
                    </div>`;
            });
        } else {
            html = `<p>No icons found for "${data.query}".</p>`;
        }
        $('#search-result').html(html);
    },

    downloadIcon: async function(url, filename) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Error downloading icon:', error);
        }
    },

    bindEvents: function() {
        $('#search').on('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            app.search();
        });

        $('#query').on('keypress', function(e) {
            if (e.which === 13) { // Enter key
                app.search();
            }
        });

        // Event delegation for download buttons
        $('#search-result').on('click', '.download-button', function() {
            const downloadUrl = $(this).data('download-url');
            const filename = $(this).data('filename');
            app.downloadIcon(downloadUrl, filename);
        });
    },

    init: function() {
        this.bindEvents();
    }
};

$(function() {
    app.init();
});
