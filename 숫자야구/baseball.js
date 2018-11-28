var body = document.body;

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var baseArr = [];
for (var i = 0; i < 4; i++) {
    var RandomNum = Math.floor(Math.random() * numArr.length);
    var getArr = numArr.splice(RandomNum, 1)[0];
    baseArr.push(getArr);
}

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



form.addEventListener('submit', function callBack(e) {
    e.preventDefault();
    var result = input.value;
    console.log(result);

})



