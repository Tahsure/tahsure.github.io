document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.getElementById("projects-grid");

    const projects = [
        { type: "instagram", embed: "<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/p/Cexample/' data-instgrm-version='14'></blockquote>" },
        { type: "instagram", embed: "<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/p/Cexample2/' data-instgrm-version='14'></blockquote>" },
        // Add more projects here
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        
        if (project.type === "instagram") {
            projectDiv.innerHTML = project.embed;
        }

        projectsGrid.appendChild(projectDiv);
    });

    // Load Instagram embed script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
});
