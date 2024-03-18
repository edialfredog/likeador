const perroActualElement = document.getElementById("perroActual");
const API = "https://dog.ceo/api/breeds/image/random";
const spinner = document.getElementById("spinner");
spinner.classList.add("escondido");
document.getElementById("like").addEventListener("click",()=>rankingPerros("+"));
document.getElementById("dislike").addEventListener("click",()=>rankingPerros("-"));
const contenedorLikePerros = document.getElementById("contenedorLikePerros");
const contenedorDislikePerros = document.getElementById("contenedorDislikePerros");
contenedorLikePerros.classList.add("escondido");
contenedorDislikePerros.classList.add("escondido");

document.getElementById("saltear").addEventListener("click",nuevoPerro);

perroActualElement.addEventListener("load",()=>{
    perroActualElement.classList.toggle("escondido",false);
    spinner.classList.toggle("escondido",true);
})

async function nuevoPerro(){
    spinner.classList.toggle("escondido",false);
    perroActualElement.classList.toggle("escondido",true);
    const res = await fetch(API);
    const resJson = await res.json();
    perroActualElement.src = resJson.message;
    
}

function rankingPerros(ranking){
    //console.log(ranking)
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = perroActualElement.src;
    if (ranking === "+"){
        contenedorLikePerros.appendChild(nuevaImagen);
    } else{
        contenedorDislikePerros.appendChild(nuevaImagen);
    }
    contenedorDislikePerros.classList.toggle("escondido",false);
    contenedorLikePerros.classList.toggle("escondido",false);
    nuevoPerro();
}

//Ejecución
nuevoPerro();
