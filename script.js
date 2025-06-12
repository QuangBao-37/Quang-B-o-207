function openApp(appName) {
  const modal = document.getElementById('appModal');
  const video = document.getElementById('videoPlayer');

  if (appName === 'rickroll') {
    video.src = 'assets/rickroll.mp4';
    modal.classList.remove('hidden');
  } else {
    alert('App này chưa được cài đặt!');
  }
}

function closeApp() {
  const modal = document.getElementById('appModal');
  const video = document.getElementById('videoPlayer');
  video.pause();
  modal.classList.add('hidden');
}
