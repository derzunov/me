window.addEventListener('load', () => {
    // Как только страница загрузилась, добавляем на контейнер класс
    const container = document.querySelector('.container')
    setTimeout(() => container.classList.remove('is-not-loaded'), 500)
})
