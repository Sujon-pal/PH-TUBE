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

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }
