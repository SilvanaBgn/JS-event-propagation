////////////////////////////////////////////////////////////////////////////
// // Etapas de Capturing, Target y Bubbling:
////////////////////////////////////////////////////////////////////////////

const oneButton = document.getElementById('one'),
      twoButton = document.getElementById('two'),
      threeButton = document.getElementById('three'),
      isCapturing = true;

oneButton.addEventListener('click', displayEventPhase, isCapturing);
// twoButton.addEventListener('click', displayEventPhase, isCapturing);
threeButton.addEventListener('click', displayEventPhase, isCapturing);

function displayEventPhase(e) {
    const phase = e.eventPhase;
    let typePhase;
    if(phase === 1) {
        typePhase = 'capturing';
    } else if(phase === 2) {
        typePhase = 'target';
    } else { //phase === 3
        typePhase = 'bubbling';
    }
    console.log('----Event Phase:', typePhase,'----');
    console.log('Element current: button', e.currentTarget.id);
    console.log('Element target: button', e.target.id);
}







////////////////////////////////////////////////////////////////////////////////////

// const oneButton = document.getElementById('one'),
//       twoButton = document.getElementById('two'),
//       threeButton = document.getElementById('three'),
//       isCapturing = true;

// oneButton.addEventListener('click', displayEventPhase, isCapturing);
// // twoButton.addEventListener('click', displayEventPhase, isCapturing);
// threeButton.addEventListener('click', displayEventPhase, isCapturing);

// function displayEventPhase(e) {
//     const phase = e.eventPhase;
//     let typePhase;
//     if(phase === 1) {
//         typePhase = 'capturing';
//     } else if(phase === 2) {
//         typePhase = 'target';
//     } else { //phase === 3
//         typePhase = 'bubbling';
//     }
//     console.log('----Event Phase: ', typePhase,'----');
//     console.log('Element current: button', e.currentTarget.id);
//     console.log('Element target: button', e.target.id);
//     if (e.currentTarget.id === e.target.id) {
//         console.log('The event is on the pressed button');
//     }
// }
