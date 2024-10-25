let IndiceAtual = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = 2;
// const intervalo = 5000

function MostrarSlide(Indice){
    const carrosselSlides = document.querySelector('.carrossel');
    carrosselSlides.style.transform = `translateX(-${Indice * 100}%)`;}

function anterior (){
    IndiceAtual = (IndiceAtual + 1 )% totalSlides;
    MostrarSlide(IndiceAtual)};

function proximo () {
    IndiceAtual = (IndiceAtual - 1 + totalSlides) % totalSlides;
    MostrarSlide(IndiceAtual)};

function avancar (){
    IndiceAtual = (IndiceAtual + 1) %totalSlides;
    MostrarSlide(IndiceAtual);}

// setInterval(avancar, intervalo)