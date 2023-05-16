const container = document.querySelector('.container');


for (let i = 0; i < 256; i++) {
    const j = document.createElement('div');
    j.classList.add('content');
    j.textContent = 'text';

    container.appendChild(j)

    
}

const divs = document.querySelectorAll('.content')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('onmouseover', addHover(divs[i]))
};


function addHover(x) {
    x.classList.add('hover')
};
