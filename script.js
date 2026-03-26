function NavbarLateral() { 
    const navbar = document.getElementById('nav-lateral');
    navbar.classList.toggle('nav-close');
    navbar.classList.toggle('nav-open');


}
function NavbarLateralclose() {
    const navbar = document.getElementById('nav-lateral');
    navbar.classList.add('nav-close');
    navbar.classList.remove('nav-open');
}

function mostrarseçao(classname) {
    const secoes = document.querySelectorAll('#secao-comodis');
    


    secoes.forEach(secao => {
       secao.style.display = 'none';
    });
    const secaoSelecionada = document.querySelector('.' + classname);
    if (secaoSelecionada) {
    secaoSelecionada.style.display = 'flex';
   
    
    
    }else {        console.log('Secao nao encontrada');
    }
}
function Reservar(){
    const urlWaMe = 'https://wa.me/558586165221?text=Olá%20gostaria%20de%20fazer%20uma%20reserva';

     window.open(urlWaMe, '_blank');
}

