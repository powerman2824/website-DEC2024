// JavaScript to load specific YouTube videos from your channel, add dark mode toggle functionality, and enable a sliding navigation menu for mobile screens

document.addEventListener('DOMContentLoaded', function () {
    const youtubeVideosContainer = document.getElementById('youtube-videos');
    
    // Array of YouTube video IDs from your channel
    const videoIds = [
        'n0o0HSmh2G4', // Replace with your actual YouTube video ID
        'JKpFBlF-Udw',
        'jFwI8lepYuE'
    ];

    if (youtubeVideosContainer) {
        videoIds.forEach(videoId => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            youtubeVideosContainer.appendChild(iframe);
        });
    }

    // Dark mode toggle functionality
    const toggleInput = document.getElementById('dark-mode-toggle');
    if (toggleInput) {
        toggleInput.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);

            // Add flame effect to header in dark mode
            const header = document.querySelector('header');
            if (header) {
                if (isDarkMode) {
                    header.style.backgroundImage = "url('https://i.gifer.com/5GpM.gif')"; // Replace with the URL of your flame animation image
                    header.style.backgroundSize = 'cover';
                } else {
                    header.style.backgroundImage = '';
                }
            }
        });

        // Load dark mode preference from localStorage
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            toggleInput.checked = true;
            const header = document.querySelector('header');
            if (header) {
                header.style.backgroundImage = "url('https://i.gifer.com/5GpM.gif')"; // Replace with the URL of your flame animation image
                header.style.backgroundSize = 'cover';
            }
        }
    }

    // Sliding navigation menu for mobile screens
    const nav = document.querySelector('nav');
    if (nav) {
        const navToggle = document.createElement('div');
        navToggle.classList.add('nav-toggle');
        navToggle.innerHTML = '&#9776;'; // Hamburger icon
        document.body.prepend(navToggle);

        navToggle.addEventListener('click', function () {
            nav.classList.toggle('nav-open');
        });
    }
});