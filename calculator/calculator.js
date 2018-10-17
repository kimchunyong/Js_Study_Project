"use strict";

function main(inp1, inp2, opt) {
    var out = document.getElementById('output');
    out.innerHTML = "계산기 구현하기" + "<br/>";

    if (opt === "+") {
        out.innerHTML += "더하기: " + (inp1 + inp2) + "<br/>";
    } else if (opt === "-") {
        out.innerHTML += "빼기: " + (inp1 - inp2) + "<br/>";
    } else if (opt === "*") {
        out.innerHTML += "곱하기: " + (inp1 * inp2) + "<br/>";
    } else if (opt === "/") {
        out.innerHTML += "나누기: " + (inp1 / inp2) + "<br/>";
    } else {
        alert("잘못 입력 헀습니다.")
    }

}

function calc() {
    var inp1 = document.getElementById('userInp1').value;
    var inp2 = document.getElementById('userInp2').value;
    var opt = document.getElementById('opt').value;
    inp1 = Number(inp1);
    inp2 = Number(inp2);

    main(inp1, inp2, opt);
}