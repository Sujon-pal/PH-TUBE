function loadVideoDetails(videoId) {
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  fetch(url)
    .then((ref) => ref.json())
    .then((data) => displayVideoDetails(data.video));
}

const displayVideoDetails = (video) => {
    document.getElementById('video_details').showModal();
    const videoDetailsContainer = document.getElementById('videoDetails-Container');
    videoDetailsContainer.innerHTML = `
  <div class="card bg-base-100 shadow-sm w-full">

    <div class="flex gap-4">

      
      <div class="w-[40%] h-[260px] overflow-hidden rounded-lg">
        <img 
          src="${video.thumbnail}" 
        
          class="w-full h-full object-cover"
        />
      </div>

 
      <div class="w-[60%] p-2">
        <h2 class="text-2xl font-bold mb-2">
          ${video.title}
        </h2>

        <p class="text-gray-600 leading-relaxed text-sm">
          ${video.description || 'No description available'}
        </p>

        <p class="text-sm text-gray-500 mt-4">
          👁️ ${video.others?.views || '0'} views
        </p>
      </div>

    </div>

  </div>
`;

   
};
