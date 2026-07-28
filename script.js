// Loading screen

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {
            loading.style.display = "none";
        }, 500);

    }, 1500);

});



// Heart effect

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        Math.random() * 3 + 2 + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 5000);

}


setInterval(createHeart, 800);
