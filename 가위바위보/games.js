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
}, 100)

/*버튼을 눌렀을때 멈춰있는  position의 값을 뽑아서 가위,바위,보 인지 구분후 누가 이겼는지 결정*/

var btns = document.querySelectorAll('button');
var flag = false;
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (!flag) {
            var btnTxt = e.target.textContent;
            var stopCmpTxt;
            var userTxt
            clearInterval(computerImg);
            if (left === 0) {
                stopCmpTxt = "바위"
            } else if (left === -142) {
                stopCmpTxt = "가위"
            } else {
                stopCmpTxt = "보"
            }

            if (stopCmpTxt === btnTxt) {
                alert('무승부 입니다.')
            } else {
                if (btnTxt == '바위' && stopCmpTxt == '가위') {
                    alert('축하합니다. 유저 승리!!');
                } else if (btnTxt == '바위' && stopCmpTxt == '보') {
                    alert('아쉽습니다. 컴퓨터 승리!!')
                } else if (btnTxt == '가위' && stopCmpTxt == '보') {
                    alert('축하합니다. 유저 승리!!');
                } else if (btnTxt == '가위' && stopCmpTxt == '바위') {
                    alert('아쉽습니다. 컴퓨터 승리!!');
                } else if (btnTxt == '보' && stopCmpTxt == '바위') {
                    alert('축하합니다. 유저 승리!!');
                } else if (btnTxt == '보' && stopCmpTxt == '가위') {
                    alert('아쉽습니다. 컴퓨터 승리!!');
                }
            }
            flag = true;
        }
    })
})

setTimeout(function () {
    setInterval(function () {
        if (left === 0) {
            left = -142;
        } else if (left === -142) {
            left = -284;
        } else {
            left = 0;
        }
        computer.style.backgroundPosition = (left + 'px') + ' 0';
        flag = false;
    }, 100)
}, 1500)
