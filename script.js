function f() {
    function ActivePage() {
        let x = window.location.href;
        //var menuButton = document.getElementsByClassName("nav-button-wrapper");
        let n = document.getElementsByTagName("a");
        for(let i = 0; i < n.length; i++) {
            let menuButtonLink = document.getElementsByTagName("a");
            console.log(menuButtonLink[i].innerHTML);
            if(menuButtonLink[i].href == x) {
                if(window.location.pathname == '/illustrations.html') {
                    menuButtonLink[i-1].style.color = "black";
                }
                if(window.location.pathname == '/fanart.html') {
                    menuButtonLink[i-2].style.color = "black";
                }
                menuButtonLink[i].style.color = "black";
            }
        }  
    }
    ActivePage();
}

window.onload = f;