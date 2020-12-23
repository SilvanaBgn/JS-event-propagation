//  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

const anchorJS = document.getElementById('anchorJS')

anchorJS.addEventListener('click', eventPreventDefault, false);

function eventPreventDefault(e) {
    e.preventDefault();
    console.log('Se ha detenido el comportamiento por default');
};
