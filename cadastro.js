import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
// Quando o botão de login é clicado, faça o seguinte:
document.getElementById("login_button").addEventListener("click", function(){
  // Pegue o valor que a pessoa digitou no campo de email
  const email = document.getElementById("username").value; 
  // Pegue o valor que a pessoa digitou no campo de senha
  const senha = document.getElementById("password").value;
  // Pegue o valor que a pessoa digitou no campo de confirmar senha
  const confirmeSenha = document.getElementById("confirm_password").value;
  
  // Se a senha e a confirmação da senha forem iguais, faça o seguinte:
  if (senha == confirmeSenha) {
      // Tente criar um usuário com o email e a senha
      createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
          // Se deu certo, pegue os detalhes do usuário
          const user = userCredential.user;
          // Mostre uma mensagem no console dizendo que deu certo
          console.log("Deu certo!");
          // Leve a pessoa para a página principal
          window.location = "index.html";
      })
      .catch((error) => {
          // Se deu errado, pegue o código do erro e a mensagem do erro
          const errorCode = error.code;
          const errorMessage = error.message;
          // Mostre o código do erro e a mensagem do erro no console
          console.log(errorCode + " " + errorMessage);
      }); 
  } else {
      // Se as senhas não forem iguais, mostre uma mensagem de erro
      document.getElementById("resultado").innerHTML = "Email ou senha inválidos!!!";
      // Mude a cor da mensagem de erro para vermelho
      document.getElementById("resultado").style.color = "red";
  }
});
