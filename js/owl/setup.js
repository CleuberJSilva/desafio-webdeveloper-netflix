$('.owl-carousel').owlCarousel({
    loop:false, /* TRUE permite que o carrosel volte ao início e FALSE deixa o carrosel finito */
    margin:10,
    nav:false, /* Desativa o navegador do carrosel */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
