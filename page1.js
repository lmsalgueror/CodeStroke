let nihssEl = document.getElementById("nihsslabel")
let closeBtn = document.getElementById("close-btn")

nihssEl.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
})

closeBtn.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})