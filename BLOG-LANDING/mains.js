const btn = document.querySelector('.btn');
const links = document.querySelector('.links');
const text = document.querySelector('.text');

btn.addEventListener('click', () => {
    links.classList.toggle('active');
    text.classList.toggle('active');

})