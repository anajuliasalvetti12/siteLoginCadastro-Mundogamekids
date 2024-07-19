import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVyxbDPeR_vAkuynCE6whvKte3ahZXN-0",
  authDomain: "app-login-74451.firebaseapp.com",
  projectId: "app-login-74451",
  storageBucket: "app-login-74451.appspot.com",
  messagingSenderId: "772270886329",
  appId: "1:772270886329:web:6d7b8f67e05068953bfa68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Adiciona um ouvinte de eventos ao botão de login que executa a função quando o botão é clicado
document.getElementById("login_button").addEventListener("click", function() {
  // Obtém o valor do campo de entrada de email
  const email = document.getElementById("username").value; 
  // Obtém o valor do campo de entrada de senha
  const senha = document.getElementById("password").value;
  
  // Tenta fazer o login com o email e a senha fornecidos
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Se o login for bem-sucedido, obtém o usuário autenticado
      const user = userCredential.user;
      console.log("Deu certo!"); // Exibe uma mensagem no console indicando sucesso
      
      // Esconde o contêiner do formulário de login
      document.getElementById("container").style.display = "none";
      // Mostra uma mensagem de boas-vindas com o email do usuário
      document.getElementById("concluido").innerHTML = "Bem vindo \n" + email + " !!!";
      // Define a cor do texto da mensagem de boas-vindas para branco
      document.getElementById("concluido").style.color = "white";
    })
    .catch((error) => {
      // Se o login falhar, obtém o código e a mensagem de erro
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + " " + errorMessage); // Exibe o código e a mensagem de erro no console
      
      // Mostra uma mensagem de erro indicando que o email ou a senha são inválidos
      document.getElementById("concluido").innerHTML = "Senha ou email inválidos!" + errorMessage + errorCode;
      // Define a cor do texto da mensagem de erro para vermelho
      document.getElementById("concluido").style.color = "red";
    });
})
