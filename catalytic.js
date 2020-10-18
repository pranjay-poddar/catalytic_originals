function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
  function greet()
  {
      let name = document.querySelector('#name').value;
      alert('Hello, ' + name + '!' + ' ' + 'Welcome to Catalytic Originals Official Page '+'.');
  }

  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(document.getElementById("dark").innerHTML=="Dark Mode")
    document.getElementById("dark").innerHTML="Light Mode";
    else
    document.getElementById("dark").innerHTML="Dark Mode";


    if(document.getElementById("darknav").innerHTML=="Dark Mode")
    document.getElementById("darknav").innerHTML="Light Mode";
    else
    document.getElementById("darknav").innerHTML="Dark Mode";
  }

/*

  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

*/
