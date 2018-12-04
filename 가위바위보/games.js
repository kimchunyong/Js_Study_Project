var computer = document.getElementsByClassName('computer')[0];
var left = 0;
var computerImg = setInterval(function () {
    if (left === 0) {
        left = -142;
    } else if (left === -142) {
        left = -284;
    } else {
        left = 0;
    }
    computer.style.backgroundPosition = (left + 'px') + ' 0';
}, 300)

/*버튼을 눌렀을때 멈춰있는  position의 값을 뽑아서 가위,바위,보 인지 구분후 누가 이겼는지 결정*/

var btns = document.querySelectorAll('button');
var flag = false;
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (!flag) {
            var btn = e.target.textContent;
            var stopCmpTxt;
            var userTxt
            clearInterval(computerImg);
            console.log(btn)
            if (left === 0) {
                stopCmpTxt = "바위"
            } else if (left === -142) {
                stopCmpTxt = "가위"
            } else {
                stopCmpTxt = "보"
            }
            flag = true;
        }
    })

})