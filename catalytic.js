function myFunction() {
    var x = document.getElementById("audioclick");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function greet() {
    var x = document.getElementById("audioclick");
    x.play();
    let name = document.querySelector('#name').value;
    swal('Hello, ' + name + '!' + ' ' + 'Welcome to Catalytic Originals Official Page ' + '.');

}

function sound() {
    var x = document.getElementById("audioclick");
    x.play();
}

function darkmode() {
    var x = document.getElementById("audioclick");
    var element = document.body;
    element.classList.toggle("dark-mode");
    x.play();
    if (document.getElementById("darknav").innerHTML == "Dark Mode")
        document.getElementById("darknav").innerHTML = "Light Mode";
    else
        document.getElementById("darknav").innerHTML = "Dark Mode";
}



document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);