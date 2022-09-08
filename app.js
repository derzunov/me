window.addEventListener('load', () => {
    // Как только страница загрузилась, добавляем на контейнер класс
    const container = document.querySelector('.card')
    // Небольшая задержка чтобы все исходные шрифты стили успели примениться корректно
    setTimeout(() => container.classList.remove('is-not-active'), 1000)
})
