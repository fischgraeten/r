const breadcrumbData = {
    '/': 'Home',
    '/Year 12': 'Year 12',
    // Add more paths as needed
};

function updateBreadcrumb(path) {
    const breadcrumb = document.querySelector('.breadcrumb');
    breadcrumb.innerHTML = ''; // Clear existing breadcrumb

    const paths = path.split('/').filter(Boolean); // Get individual paths
    let currentPath = '';

    // Always start with Home
    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = breadcrumbData['/'];
    breadcrumb.appendChild(homeLink);

    // Add a separator after Home if there are more paths
    if (paths.length > 0) {
        const separator = document.createElement('span');
        separator.textContent = ' > ';
        breadcrumb.appendChild(separator);
    }

    // Loop through each segment to create links
    paths.forEach((segment, index) => {
        // Skip 'index.html'
        if (segment === 'index.html') {
            return;
        }

        currentPath += `/${segment}`;
        const link = document.createElement('a');
        link.href = currentPath;
        link.textContent = decodeURIComponent(breadcrumbData[currentPath] || segment); // Decode segment for display
        breadcrumb.appendChild(link);

        // Add separator if not the last item
        if (index < paths.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = ' > ';
            breadcrumb.appendChild(separator);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the current pathname
    const path = window.location.pathname;
    
    // Initialize the breadcrumb
    updateBreadcrumb(path);
});
