function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideo(data.videos));
}

const displayVideo = (videos) => {
  console.log(videos);
};
loadVideo();
