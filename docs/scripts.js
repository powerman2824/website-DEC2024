// JavaScript to load specific YouTube videos from your channel

document.addEventListener('DOMContentLoaded', function () {
    const youtubeVideosContainer = document.getElementById('youtube-videos');
    
    // Array of YouTube video IDs from your channel
    const videoIds = [
        'https://youtube.com/live/n0o0HSmh2G4?feature=share', // Replace with your actual YouTube video ID
        'https://youtube.com/live/JKpFBlF-Udw?feature=share',
        'https://youtu.be/jFwI8lepYuE'
    ];

    videoIds.forEach(videoId => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        youtubeVideosContainer.appendChild(iframe);
    });
});
