const container = document.querySelector('.container');
const divs = document.querySelectorAll('.content');
let size = 16;
const btn = document.getElementById('btn');



function draw (size) {
    clearDiv();
    for (let i = 0; i < size*size; i++) {
        const j = document.createElement('div');
        j.classList.add('content');
        j.style.width = 100/(size) + "%" 

        container.appendChild(j)
    }
}



function paint() {
    const divs = document.querySelectorAll('.content');
    divs.forEach((test) => {
        test.addEventListener(
            "mouseover",
            (event) => {
            // highlight the mouseenter target
            event.target.classList.add('hover')
            }
        );
    });
};




btn.onclick = () => {
    const dim = prompt('how many');
    console.log(dim);
    draw(dim);
    paint(divs);
};

function clearDiv() {
    // access the div element and use the replaceChildren() method to clear the div content
    const ele = document.querySelector('.container');
    ele.replaceChildren();
 }

draw(16);
paint(divs);
