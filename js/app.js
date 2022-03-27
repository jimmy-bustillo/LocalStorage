// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
  formulario.addEventListener("submit", agregarTweet);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault();

  // Text area donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  // Validación...
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vacio");
    return; // evita que se ejecuten más lineas de código
  } else {
    console.log(tweet);
  }
}

//Mostrar mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  // Insertar en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  // Elimina el error del contenido después de 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }),
    3000;
}
