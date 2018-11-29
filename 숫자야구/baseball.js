var body = document.body;
var numArr;
var baseArr;

function numSelct() {
    numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    baseArr = [];
    for (var i = 0; i < 4; i++) {
        var RandomNum = Math.floor(Math.random() * numArr.length);
        var getArr = numArr.splice(RandomNum, 1)[0];
        baseArr.push(getArr);
    }
} numSelct();


var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
input.type = 'number';
input.maxLength = 4;
input.setAttribute('oninput', 'maxLengthCheck(this)');

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}




form.append(input);
var btn = document.createElement('button');
btn.textContent = '입력'
form.append(btn);

var inputFalse = 0;
form.addEventListener('submit', function callBack(e) {
    e.preventDefault();
    var getInput = input.value;
    var baseStr = baseArr.join("");

    if (getInput === baseStr) {
        result.textContent = '홈런'
        input.value = '';
        input.focus();
        numSelct();
        inputFalse = 0;
    } else {
        var resultArr = getInput.split('');
        var strike = 0;
        var ball = 0;
        inputFalse++;
        if (inputFalse > 10) {
            result.textContent = '10번 넘게 틀려서 실패! 답은' + baseArr.join() + '입니다.'
            input.value = '';
            input.focus();
            numSelct();
            inputFalse = 0;
        } else {
            for (var i = 0; i < 4; i++) {
                if (resultArr[i] === baseArr[i]) {
                    strike++;
                } else if (baseArr.indexOf(Number(resultArr[i])) > -1) {
                    ball++;
                }
            }
            result.textContent = '스트라이크' + strike + '볼' + ball + '입니다.'
        }
    }
})



