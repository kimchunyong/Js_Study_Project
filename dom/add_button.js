"use strict";

/*
var test = document.getElementById('test');
var menu = document.createElement('ul');
var item1 = document.createElement('li');

item1.innerHTML = "치킨";

menu.appendChild(item1);

var item2 = document.createElement('li');

item2.innerHTML = "짜장면";

menu.appendChild(item2);
*/

var readInput = function () {
    var input = document.getElementById('input1');
    console.log(input.value)
}

var btn2 = document.createElement('button')
btn2.onclick = readInput;
btn2.innerHTML = "버튼2"
var test = document.getElementById('test');
test.appendChild(document.createElement('br'));
test.appendChild(btn2);
