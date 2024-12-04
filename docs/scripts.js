// JavaScript to dynamically load YouTube videos from your channel

document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube API Key
  const channelId = 'mr.caf2824'; // Replace with your YouTube Channel ID
  const maxResults = 6;
  const youtubeVideosContainer = document.getElementById('youtube-videos');

  fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`)
      .then(response => response.json())
      .then(data => {
          data.items.forEach(item => {
              if (item.id.kind === 'youtube#video') {
                  const videoId = item.id.videoId;
                  const iframe = document.createElement('iframe');
                  iframe.src = `https://www.youtube.com/embed/${videoId}`;
                  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                  iframe.allowFullscreen = true;
                  youtubeVideosContainer.appendChild(iframe);
              }
          });
      })
      .catch(error => console.error('Error fetching YouTube videos:', error));
});
