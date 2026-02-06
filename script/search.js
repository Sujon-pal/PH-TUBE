document.getElementById("search_btn").addEventListener("keyup", e => {
    const inout = e.target.value;
    loadVideo(inout);
});
