const cat = document.querySelector('.cat');
const pipe = document.querySelector('.pipe');

const jump = () => {
    cat.classList.add('jump');
    setTimeout(() => {
        cat.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {


    const pipePosition = pipe.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');

    console.log(catPosition);

    if (pipePosition <= 120 && pipePosition > 0 && catPosition < 110) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition}px`;
    }

}, 10);


document.addEventListener('keydown', jump);

