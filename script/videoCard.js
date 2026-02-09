function loadVideo(searchBtn = "") {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchBtn}`,
  )
    .then((response) => response.json())
    .then((data) => {
      removeActiveClass();
      const remoce = document.getElementById("btn-all").classList.add("active");

      displayVideo(data.videos);
    });
}

const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  if (videos.length == 0) {
    videoContainer.innerHTML = `
    <div class=" col-span-full flex flex-col items-center justify-center py-18 text-center">
      <img src="Icon.png" alt="">
      <h1 class="text-xl font-bold mt-5">Oops!! Sorry, There is no <br> content here</h1>
    </div>
    `;

    return;
  }
  videos.forEach((video) => {
    const videocard = document.createElement("div");
    videocard.innerHTML = `
        
          <div class="card bg-base-100 shadow-sm">
        <figure class="relative">
          <img class="w-full h-[160px] object-cover" src="${video.thumbnail}" />
          <span
            class="absolute bottom-2 right-2 bg-gray-900 text-white rounded-lg px-2 text-sm"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="mt-5 flex gap-3 px-1">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-1"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="info mb-2">
            <h1 class="font-semibold text-xl mb-3">${video.title}</h1>
            <p class="text-gray-600 text-sm flex gap-1 mb-2">
            ${video.authors[0].profile_name} 
            ${video.authors[0].verified == true ? ` <img class="w-5 h-5" src="verifid.png" alt="">` : ``} 
            
           
            </p>
            <p class="text-gray-600 text-sm">${video.others.views} views</p>
          </div>
        </div>
        <button onclick ="loadVideoDetails('${video.video_id}')" class="btn btn-outline btn-info ">Info</button>
      </div>
        `;
    videoContainer.append(videocard);
  });
};
loadVideo();


