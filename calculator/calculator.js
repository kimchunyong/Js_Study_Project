"use strict";

function main(inp1, inp2) {
    var out = document.getElementById('output');
    out.innerHTML = "계산기 구현하기" + "<br/>";

    out.innerHTML += "더하기: " + (inp1 + inp2) + "<br/>";
    out.innerHTML += "빼기: " + (inp1 - inp2) + "<br/>";
    out.innerHTML += "곱하기: " + (inp1 * inp2) + "<br/>";
    out.innerHTML += "나누기: " + (inp1 / inp2) + "<br/>";

}

function calc() {
    var inp1 = document.getElementById('userInp1');
    var inp2 = document.getElementById('userInp2');
    inp1 = Number(inp1.value);
    inp2 = Number(inp2.value);

    main(inp1, inp2);
}