function f() {
    // Cere vizitatorului sa isi introduca numele, iar apoi il afiseaza in titlul site-ului timp de 2 secunde
    function HelloVisitor() {
        let visitorName = prompt("What's your name?");
        let pageTitle = document.title;
        function showName() {
            document.title = "Hello, " + visitorName;
        }
        showName();
        function showTitle() {
            document.title = pageTitle;
        }
        setTimeout(showTitle, 2000);
    }
    HelloVisitor();

    // Afiseaza titlul site-ului printr-o animatie
    function SiteNameAnimation() {
        let siteName = document.getElementsByClassName('brand-letter');

        let text = "Andreea Art Studio";
        let l = text.length;

        let x = 0;
        let y = text.length - 1;
        function Writer() {
            if(x < l/2) {
                siteName[x].style.color = "black";
                siteName[y-x].style.color = "black";
                x++;
                setTimeout(Writer, 100);   
            }
        }
        Writer();
    }
    SiteNameAnimation();

    // Marcheaza pagina activa
    function ActivePage() {
        let x = window.location.href;
        var menuButton = document.getElementsByClassName("nav-button-wrapper");
        for(let i = 0; i <= menuButton.length+1; i++) {
            let menuButtonLink = document.getElementsByTagName("a");
            //console.log(menuButtonLink[i].innerHTML);
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

    // Animatie de obiecte
    function Square1() {
        var sq1 = document.getElementById("square1");   
        var position = 0;
        var i = setInterval(frame, 1);
        function frame() {
          if (position == 450) {
            clearInterval(i);
          } else {
            position++; 
            sq1.style.top = position + 'px'; 
            sq1.style.left = position + 'px'; 
          }
        }
      }
    Square1();
    function Square2() {
        var sq2 = document.getElementById("square2");   
        var position = 0;
        var i = setInterval(frame, 1);
        function frame() {
          if (position == 400) {
            clearInterval(i);
          } else {
            position++; 
            sq2.style.top = position + 'px'; 
            sq2.style.left = position + 'px'; 
          }
        }
    }
    setTimeout(Square2, 1800);
    function Square3() {
        var sq3 = document.getElementById("square3");   
        var position = 0;
        var i = setInterval(frame, 1);
        function frame() {
          if (position == 350) {
            clearInterval(i);
          } else {
            position++; 
            sq3.style.top = position + 'px'; 
            sq3.style.left = position + 'px'; 
          }
        }
    }
    setTimeout(Square3, 3500);
}

window.onload = f;

function ShowAge() {
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day =  date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var birthYear = document.getElementById('year').value;
    var birthMonth = document.getElementById('month').value;
    var birthDay =  document.getElementById('day').value;

    var years = 0;
    var months = 0;
    var days = 0;
    
    if(birthMonth <= month) {
        years = year - birthYear;
        months = month - birthMonth;
    } else {
        years = year - birthYear - 1;
        months = 12 + month - birthMonth;
    }

    if(birthDay <= day) {
        days = day - birthDay;
    } else {
        months--;
        days = 31 + day - birthDay;
    }

    document.getElementById("age").innerHTML = years + " ani " + months + " luni " + days + " zile " + hours + " ore " + minutes + " minute " + seconds + " secunde ";
    setInterval(ShowAge, 1000);
}


var ctxmenu = document.getElementById('context-menu');
window.addEventListener("contextmenu", e => {
    e.preventDefault();
    ctxmenu.style.display = 'block';
    ctxmenu.style.top = e.pageY + 'px';
    ctxmenu.style.left = e.pageX + 'px';
});
document.onclick = function(e){
    ctxmenu.style.display = 'none';
}
function ChangeContainerColor() {
    let container = document.getElementById('animation-container');
    let defaultColor = container.style.backgroundColor;
    if(defaultColor == 'rgb(243, 243, 243)') {
        container.style.backgroundColor = '#674c9c';
    } else {
        container.style.backgroundColor = 'rgb(243, 243, 243)';
    }
}
function ChangeBackgroundColor() {
    let background = document.getElementsByTagName('body')[0];
    let defaultColor = background.style.backgroundColor;
    if(defaultColor == 'rgb(44, 44, 44)') {
        background.style.backgroundColor = '#4f3a78';
    } else {
        background.style.backgroundColor = 'rgb(44, 44, 44)';
    }
}
function GoUp() {
    document.documentElement.scrollTop = 0;
}

//Ascundere/afisare imagini
/* SE GASESTE IN ILLUSTRATIONS.JS
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
}*/