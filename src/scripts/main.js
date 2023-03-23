

document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    const heroSection = document.querySelector('.hero');


    const alturaHero = heroSection.clientHeight;


    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (alturaHero > posicaoAtual) {
            ocultarElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }


    })

    function ocultarElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden')
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden')
    }

})

