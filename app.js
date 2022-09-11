window.addEventListener( 'load', () => {
    // С этими элементами работаю постоянно пи скролле, их надо прикопать в замыкание
    const elementsToActivateOnScroll = document.querySelectorAll( '.is-not-active-on-scroll' )
    const activateOnWindowLoad = () => {
        // С этими элементами работаю один раз, не надо их прикапывать
        document.querySelectorAll( '.is-not-active-on-window-load' ).forEach( ( element ) => {
                element.classList.remove( 'is-not-active-on-window-load' )
        } )
    }
    const activateOnScroll = () => {
        const windowCenter = ( window.innerHeight / 2 ) + window.scrollY

        elementsToActivateOnScroll.forEach( ( element ) => {
            let scrollOffset = element.offsetTop + ( element.offsetHeight / 8 )
            if ( windowCenter >= scrollOffset ) {
                element.classList.remove( 'is-not-active-on-scroll' )
            } else {
                element.classList.add( 'is-not-active-on-scroll' )
            }
        } )
    }

    // Небольшая задержка чтобы все исходные шрифты стили успели примениться корректно
    setTimeout( () => {
        activateOnWindowLoad()
        activateOnScroll()
    }, 500 )

    // Дальше слушаем скролл
    window.addEventListener( 'scroll', () => {
        activateOnScroll()
    } )
} )

try {
    $( document.body ).on( 'click', 'a.scrollTo', function () {
        let href = $( this ).attr( 'href' )

        $( 'html, body' ).animate( {
            scrollTop: $( href ).offset().top
        }, {
            duration: 400,
            easing: 'swing'
        } )
    } )
} catch ( error ) {
    console.info( 'jQuery is not imported' )
}
