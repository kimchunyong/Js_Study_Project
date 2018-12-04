var computer = document.getElementsByClassName('computer')[0];

var left = 0;
setInterval(function () {
    if (left === 0) {
        left = -142;
    } else if (left === -142) {
        left = -284;
    } else {
        left = 0;
    }
    computer.style.backgroundPosition = (left + 'px') + ' 0';
}, 300)