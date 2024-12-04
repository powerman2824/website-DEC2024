// JavaScript to load specific YouTube videos from your channel

document.addEventListener('DOMContentLoaded', function () {
    const youtubeVideosContainer = document.getElementById('youtube-videos');
    
    // Array of YouTube video IDs from your channel
    const videoIds = [
        'n0o0HSmh2G4', // Replace with your actual YouTube video ID
        'JKpFBlF-Udw',
        'jFwI8lepYuE'
    ];

    videoIds.forEach(videoId => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        youtubeVideosContainer.appendChild(iframe);
    });

   // Dark mode toggle functionality
   const toggleInput = document.getElementById('dark-mode-toggle');
   if (toggleInput) {
       toggleInput.addEventListener('change', function () {
           document.body.classList.toggle('dark-mode');
           const isDarkMode = document.body.classList.contains('dark-mode');
           localStorage.setItem('darkMode', isDarkMode);
       });

       // Load dark mode preference from localStorage
       if (localStorage.getItem('darkMode') === 'true') {
           document.body.classList.add('dark-mode');
           toggleInput.checked = true;
       }
   }

   // Sliding navigation menu for mobile screens
   const nav = document.querySelector('nav');
   const navToggle = document.createElement('div');
   navToggle.classList.add('nav-toggle');
   navToggle.innerHTML = '&#9776;'; // Hamburger icon
   document.body.prepend(navToggle);

   navToggle.addEventListener('click', function () {
       nav.classList.toggle('nav-open');
   });
});
