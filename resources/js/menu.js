function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
 
      toastr.success('Login realizado com sucesso!', 'Sucesso');
      
      setTimeout(function() {
        window.location.href = "home.html";
      }, 2000);
    } else {
    
      toastr.error('Credenciais inválidas. Por favor, tente novamente.', 'Erro');
    }
  });