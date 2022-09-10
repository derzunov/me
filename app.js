window.addEventListener('load', () => {
    // Как только страница загрузилась, добавляем на контейнер класс
    const elementsToActivate = document.querySelectorAll( '.is-not-active' )
    // Небольшая задержка чтобы все исходные шрифты стили успели примениться корректно
    setTimeout( () => {
        elementsToActivate.forEach(( element ) => {
            element.classList.remove( 'is-not-active' )
        })
    }, 1000 )
})

$( document.body ).on( 'click', 'a.scrollTo', function() {
    let href = $( this ).attr( 'href' )

    $( 'html, body' ).animate( {
        scrollTop: $( href ).offset().top
    }, {
        duration: 400,
        easing: 'swing'
    } )
} )




