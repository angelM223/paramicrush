function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - 
        elm.offsetHeight) + 'px';
    
    elm.style.left = Math.random() * (window.innerWidth - 
        elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo =  document.getElementById("btn-no"); 
let divModoDiablo = document.getElementsByClassName("modo-diablo") [0];        //Manda a llamar a la clase de html


btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('sabia que dirias que si, casemonos ya y tengamos hijos. TE AMO <3');

    divModoDiablo.style.display = 'block';
    const cancion  = new Audio('img\\modo_hot.mp3')/*para poner musica cuando le de click que SI
    cancion.play();            new Audio('img\\modo-diablo.mp3')*/
    cancion.play();
});