//Ascundere/afisare imagini
function HideShowImages() {
    let images = document.getElementsByTagName('img');
    let button = document.getElementsByTagName('button')[0];
    for(let i = 0; i < images.length; i++) {
        if(images[i].style.visibility == "visible") {
            images[i].style.visibility = "hidden";
            button.innerText = "Show images";
        } else {
            button.innerText = "Hide images";
            images[i].style.visibility = "visible";
        }
    }
}