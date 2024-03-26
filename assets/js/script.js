function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"
    }
}

var button = document.getElementById("action-btn");
var button2 = document.getElementById("action-btn2");

var verMais = document.getElementById("ver-mais");
var verMenos = document.getElementById("ver-menos");

var projetosCard = document.getElementById("projetos-card");
var projetosCard1 = document.getElementById("projetos-card1")

button.addEventListener("click", function() {

    projetosCard.classList.toggle("hide");
    projetosCard1.classList.toggle("hide")
    verMenos.classList.toggle("hide");

    verMais.classList.toggle("hide")

})

button2.addEventListener("click", function() {

    projetosCard.classList.toggle("hide");
    projetosCard1.classList.toggle("hide")
    verMais.classList.toggle("hide");

    verMenos.classList.toggle("hide");

})