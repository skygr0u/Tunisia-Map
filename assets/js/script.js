document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("background-video");
  var muteButton = document.getElementById("mute-toggle");
  var volumeIcon = document.getElementById("volume-icon");

  // Set the video to start muted
  video.muted = true;
  // Update the volume icon to the muted state
  volumeIcon.classList.remove("ri-volume-up-line");
  volumeIcon.classList.add("ri-volume-mute-line");

  muteButton.addEventListener("click", function() {
      if (video.muted) {
          video.muted = false;
          volumeIcon.classList.remove("ri-volume-mute-line");
          volumeIcon.classList.add("ri-volume-up-line");
      } else {
          video.muted = true;
          volumeIcon.classList.remove("ri-volume-up-line");
          volumeIcon.classList.add("ri-volume-mute-line");
      }
  });
});
