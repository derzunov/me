const container = document.querySelector('.container')
window.addEventListener('load', () => {
    // Как только страница загрузилась, добавляем на контейнер класс
    setTimeout(() => container.classList.add('loaded'), 500)
})
