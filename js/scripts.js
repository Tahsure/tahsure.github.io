// Function to open the sidebar with project details
function openSidebar(title, description, videoUrl) {
    // Set the title and description in the sidebar
    document.getElementById('sidebar-title').innerText = title;
    document.getElementById('sidebar-description').innerText = description;

    // Set the Instagram embed in the sidebar
    document.getElementById('sidebar-video').innerHTML = `
        <blockquote class="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="${videoUrl}" 
            data-instgrm-version="14">
            <a href="${videoUrl}" target="_blank">View on Instagram</a>
        </blockquote>
    `;

    // Display the sidebar
    document.getElementById('sidebar').style.display = 'block';

    // Load the Instagram embed script to render the video
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
}

// Function to close the sidebar
function closeSidebar() {
    // Hide the sidebar
    document.getElementById('sidebar').style.display = 'none';
}