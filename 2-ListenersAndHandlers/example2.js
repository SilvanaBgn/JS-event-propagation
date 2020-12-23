////////////////////////////////////////////////////////////////////////////
// // Si queremos implementar click para cada botón:
////////////////////////////////////////////////////////////////////////////

const redButton = document.getElementById('red'),
      blueButton = document.getElementById('blue'),
      greenButton = document.getElementById('green');

redButton.addEventListener('click', pressButton, false);
blueButton.addEventListener('click', pressButton, false);
greenButton.addEventListener('click', pressButton, false);

function pressButton(e) {
    console.log('Soy button', e.target.id);
}


////////////////////////////////////////////////////////////////////////////
// // Si queremos implementarlo SÓLO con UN listener click:
////////////////////////////////////////////////////////////////////////////

// const imYourFather = document.getElementById('container');

// imYourFather.addEventListener('click', pressButton, false);

// function pressButton(e) {
//   console.log(imYourFather.id,':', e.target.id, ', Im your father!!');
//   console.log('BTN', e.target.id,': NOOOOOOOO!!  --> Soy button', e.target.id);
// }
// // Pero qué sucede cuando presionamos en el container?



////////////////////////////////////////////////////////////////////////////
// // Para que no muestre el click del padre:
////////////////////////////////////////////////////////////////////////////

// const imYourFather = document.getElementById('container');

// imYourFather.addEventListener('click', pressButton, false);

// function pressButton(e) {
//   // currentTarget --> es quien escucha
//   // target --> es quien lanzó el click
//     if(e.target !== e.currentTarget){
//         console.log(imYourFather.id,': Im your father!!');
//         console.log('BTN', e.target.id,': NOOOOOOOO!!  --> Soy button', e.target.id);
//     }
// }
