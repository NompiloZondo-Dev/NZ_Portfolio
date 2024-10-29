
function toggleDetails(projectId) {
    const description = document.getElementById(projectId);
    description.style.display = description.style.display === 'none' || description.style.display === '' ? 'block' : 'none';
}

let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project-card');
const totalProjects = projects.length;
const projectsPerPage = 3; // Number of projects to show at a time

function showProjects() {
    projects.forEach((project, index) => {
        project.style.display = (index < currentProjectIndex + projectsPerPage) ? 'block' : 'none';
    });

    // Update button states
    document.getElementById('prev-btn').disabled = currentProjectIndex === 0;
    document.getElementById('next-btn').disabled = currentProjectIndex + projectsPerPage >= totalProjects;
    document.getElementById('see-more-btn').style.display = (currentProjectIndex + projectsPerPage < totalProjects) ? 'inline-block' : 'none';
}

function showNext() {
    if (currentProjectIndex + projectsPerPage < totalProjects) {
        currentProjectIndex += projectsPerPage;
        showProjects();
    }
}

function showPrevious() {
    if (currentProjectIndex - projectsPerPage >= 0) {
        currentProjectIndex -= projectsPerPage;
        showProjects();
    }
}

function seeMore() {
    if (currentProjectIndex + projectsPerPage < totalProjects) {
        currentProjectIndex += projectsPerPage;
        showProjects();
    }
}

// Initialize the project view
showProjects();
