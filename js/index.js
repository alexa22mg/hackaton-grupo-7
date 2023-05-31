//inicie el carrusel cuando inicie la pagina, 
//()=> lo que esta adentro es lo que queremos que se ejecute en el carousel
document.addEventListener('DOMContentLoaded', ()=> {
    //trae todos los elementos que trae la clase carousel
    const elementosCarousel = document.querySelectorAll('.carousel');
    //M es materialize se llama para poder realizar ajustes
    //que inicie el carousel por cada uno de los elementos
    //{}hace referencia a un objeto
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist:-80,
        //distancia de la imagen a los costados
        shift:5,
        padding:5,
        //cuantas imagenes quiero que se vean
        numVisible:4,
        //los puntos del slayer
        indicators:true,
        //que siempre aparezca una imagen en el lado poniendo false
        nowrap: false,  
    });

});
//inicializamos variables
const $player = document.getElementById("player");
const $player2 = document.getElementById("player2");
let x = 0;
let y = 0;
let x2= 0;
let y2 = 0;
let ban=0;
let ban2=0;
//la funcion permite por medio de un evento que los carros avancen con el teclado
document.addEventListener("keydown",(e)=>{
    console.log(e.code);
    if(e.code === "ArrowRight"){
        x =x+100;
        $player.style.left = x + "px";
        console.log(x);
        if(x>=1200){
            x=x-100;
            ban = 1;
            if(ban==1 && ban2==0){
                alert("ganaste!!, fin del juego, ganador player 1");
            }
            if(ban2==1){
                alert("eres un looser!!!");
            }
        }
    }

    if(e.code === "KeyD"){
        x2 =x2+100;
        $player2.style.left = x2 + "px";
        console.log(x2);
        if(x2>=1200){
            x2=x2-100;
            if(ban==1){
                alert("perdiste!!,fin del juego");
                x2=x2-100;
            }
            else{
            alert("Eres un ganardor!!,fin del juego,player 2");
            ban2=1;
            }
        }   

    } 
    

});