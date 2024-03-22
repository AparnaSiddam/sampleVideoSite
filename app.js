const timer = document.querySelector('.timer');


let x = setInterval(function(){
    const dateNow = new Date();
const upDate = new Date('Oct 5, 2026 08:30:00');

const diff = upDate.getTime() - dateNow.getTime();

    const days = Math.floor(diff / (1000 * 24 * 60 * 60));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    timer.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;

    if(diff < 0){
        clearInterval(x);
        timer.textContent = 'Expired';
    }

}, 1000);

