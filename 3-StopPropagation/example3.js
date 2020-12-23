////////////////////////////////////////////////////////////////////////////
// // Múltiples clicks:
////////////////////////////////////////////////////////////////////////////

const imYourFather = document.getElementById('container'),
    redButton = document.getElementById('red');

imYourFather.addEventListener('click', pressButton, false);
redButton.addEventListener('click', pressRedButton, false);

function pressButton(e) {
    if(e.target !== e.currentTarget){
        console.log('Soy Button', e.target.id);
    }
}

function pressRedButton(e) {
    redButton.disabled = true;
    redButton.style.color = 'grey';
}

////////////////////////////////////////////////////////////////////////////
// // Manipular múltiples eventos click, con stopPropagation():
////////////////////////////////////////////////////////////////////////////

// const imYourFather = document.getElementById('container'),
//     redButton = document.getElementById('red');

// imYourFather.addEventListener('click', pressButton, false);
// redButton.addEventListener('click', pressRedButton, false);

// function pressButton(e) {
//     if(e.target !== e.currentTarget){
//         console.log('Soy Button', e.target.id);
//     }
//     e.stopPropagation();
// }

// function pressRedButton(e) {
//     redButton.disabled = true;
//     redButton.style.color = 'grey';
// }
