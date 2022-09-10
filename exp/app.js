window.addEventListener('load', () => {
    // Как только страница загрузилась, добавляем на контейнер класс
    const containers = document.querySelectorAll( '.is-not-active' )
    // Небольшая задержка чтобы все исходные шрифты стили успели примениться корректно
    setTimeout( () => {
        containers.forEach(( container ) => {
            container.classList.remove( 'is-not-active' )
        })
    }, 1000 )
})
