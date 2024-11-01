let contenedorimagenGrande = document.getElementById("contenedorimagenGrande");
let contenedotimagenPequenia = document.getElementById("contenedotimagenPequenia");
let img = document.querySelectorAll("img");
let titulo = document.getElementById("titulo");
let nombreimg = document.getElementById("nombreimg");
let inputTitulo = document.getElementById("inputTitulo");
let modo = document.getElementsByName("modoTema");
let main = document.querySelector("main"); 
let arribaAbajo = document.getElementById("arribaAbajo");
let derechaIzquierda = document.getElementById("derechaIzquierda");

arribaAbajo.addEventListener("input", () => {
  titulo.style.marginTop = arribaAbajo.value + "px";
});

derechaIzquierda.addEventListener("input", () => {
  titulo.style.marginLeft = derechaIzquierda.value + "px";
});





function inicio() {
  main.style.backgroundImage = "url('img/white.png')";
titulo.style.color = "black";
nombreimg.style.color = "black";
}
inicio();

modo.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (document.getElementById("modoOscuro").checked) {
      main.style.backgroundImage = "url('img/black.png')";
      titulo.style.color = "white";
      nombreimg.style.color = "white";


    } else {
      main.style.backgroundImage = "url('img/white.png')";
      titulo.style.color = "black";
      nombreimg.style.color = "black";

    }
  });
});


inputTitulo.addEventListener("input", () => {
  titulo.textContent = inputTitulo.value;
  if (inputTitulo.value.length ==10) {
alert("Maximo 10 caracteres");
}
});

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("dragstart", (event) => {
    console.log("dragstart");
    //se guarda la url de la imagen
    event.target.style.opacity = "0.4";
    event.target.style.cursor = "grabbing";
    event.target.style.transform = "scale(1.5)";
    event.dataTransfer.setData("text/plain", event.target.src);
  });
}

function dropear() {
    let rutaCompleta = event.dataTransfer.getData("text/plain");
    let nombreArchivo = rutaCompleta.split("/").pop().replace(/\.[^/.]+$/, "");
  
    let imagenGrande = contenedorimagenGrande.querySelector("img");
    if (imagenGrande) {
      imagenGrande.src = rutaCompleta;
    } else {
      let imagenGrande=document.createElement("img");
      imagenGrande.src=rutaCompleta;
      imagenGrande.style.width="200px";
      contenedorimagenGrande.appendChild(imagenGrande);
    }

    let imagenPequenia=contenedotimagenPequenia.querySelector("img");
    if(imagenPequenia){
      imagenPequenia.src=rutaCompleta;
    }else{
      let imagenPequenia=document.createElement("img");
      imagenPequenia.src=rutaCompleta;
      imagenPequenia.style.width="100px";
      contenedotimagenPequenia.appendChild(imagenPequenia).classList.add("imagenEspejo");
    }

    nombreimg.textContent = nombreArchivo;
    nombreimg.style.color = "white";
    nombreimg.style.textAlign = "center";
  }
function prevent(event) {
  event.preventDefault();
}

contenedorimagenGrande.addEventListener("drop", dropear);

contenedorimagenGrande.addEventListener("dragover", prevent);

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("dragend", (event) => {
    event.target.style.opacity = "1";
    event.target.style.transform = "scale(1)";
  });
}


//evento para cambiar el color del fondo
const colorRange = document.getElementById('colorRange');
colorRange.addEventListener('input', function() {
  const hue = colorRange.value; 
  main.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; 
});