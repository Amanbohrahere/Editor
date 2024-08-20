function loadVideos(genre) {
    const videoGallery = document.getElementById('video-gallery');
    videoGallery.innerHTML = ''; // Clear existing videos

    const videos = {
        'action': ['Gaming.mp4'],
        'documentary': ['Podcast.mp4'],
        'Vlogs': ['Vlog.mp4'],
        'Shorts': ['Shorts.mp4']}

    videos[genre].forEach(video => {
        let videoElement = document.createElement('video');
        videoElement.src = video;
        videoElement.controls = true;
        videoElement.className = 'video-item slide-in';
        videoGallery.appendChild(videoElement);
    });
}
