const cadastroButton = document.getElementById("cadastroButton");
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault(); 
      setTimeout(function() {
        window.location.href = "home.html";
      }, 2000);
    });