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

    // Gallery Lightbox Functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close');
    
    if (galleryItems.length > 0 && lightbox && lightboxImg && closeLightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function () {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
            });
        });

        closeLightbox.addEventListener('click', function () {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    // Dark mode toggle with music
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const audio = new Audio('suno-music.mp3');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);

            const header = document.querySelector('header');
            if (header) {
                if (isDarkMode) {
                    header.style.backgroundImage = "url('https://i.gifer.com/5GpM.gif')"; 
                    header.style.backgroundSize = 'cover';
                    audio.play();
                } else {
                    header.style.backgroundImage = '';
                    audio.pause();
                    audio.currentTime = 0;
                }
            }
        });

        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
            const header = document.querySelector('header');
            if (header) {
                header.style.backgroundImage = "url('https://i.gifer.com/5GpM.gif')";
                header.style.backgroundSize = 'cover';
                audio.play();
            }
        }
    }

    // Sliding navigation menu for mobile screens
    const nav = document.querySelector('nav');
    if (nav) {
        const navToggle = document.createElement('div');
        navToggle.classList.add('nav-toggle');
        navToggle.innerHTML = '&#9776;'; 
        document.body.prepend(navToggle);

        navToggle.addEventListener('click', function () {
            nav.classList.toggle('nav-open');
        });
    }
});
