console.log("working?");
let headline = document.getElementById("headline");
function changeHeadline() {

    console.log(headline);
    headline.classList.add("background");
}

function resetHeadline() {
    headline.classList.remove("background");
}
