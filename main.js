// function removeTransition(e){
//     if (e.propertyName !=='transform') return;
//     this.classList.remove('playing');
// }
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drumKey = document.querySelector(`.drumKey[data-key="${e.keyCode}"]`);
    const instrKey = document.querySelector(`.instrKey[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    drumKey.classList.add('playing');
    instrKey.classList.add('playing');
    
}
const drumKeys = document.querySelectorAll('.drumKey');
// drumKeys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);

const instrKeys = document.querySelectorAll('.instrKey');
// instrKeys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);