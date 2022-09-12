window.addEventListener( 'load', () => {

    // С этими элементами работаю постоянно пи скролле, их надо прикопать в замыкание
    const elementsToActivateOnScroll = document.querySelectorAll( '.is-not-active-on-scroll' )
    const activateOnWindowLoad = () => {
        // С этими элементами работаю один раз, не надо их прикапывать
        document.querySelectorAll( '.is-not-active-on-window-load' ).forEach( ( element ) => {
            element.classList.remove( 'is-not-active-on-window-load' )
        } )
    }

    const intersectionOptions = {
        rootMargin: '0px',
        threshold: 0.4
    }
    const onIntersect = ( entries, observer ) => {
        entries.forEach( entry => {
            if ( entry.isIntersecting ) {
                entry.target.classList.remove( 'is-not-active-on-scroll' )
            } else {
                entry.target.classList.add( 'is-not-active-on-scroll' )
            }
        } )
    }
    const intersectionObserver = new IntersectionObserver( onIntersect, intersectionOptions )

    elementsToActivateOnScroll.forEach( ( element ) => {
        intersectionObserver.observe(element)
    } )

    // Небольшая задержка чтобы все исходные шрифты стили успели примениться корректно
    setTimeout( () => {
        activateOnWindowLoad()
    }, 500 )

    console.info('%cНу-ка, нах, не крути тут ничего!', 'font-size: 30px; color: #f0210d');
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
