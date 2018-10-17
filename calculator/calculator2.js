"use strict";

function main() {
    var out = document.getElementById('output');
    out.innerHTML = "계산된 값 출력:" + "<br/>";

    var inp = document.getElementById("optTxt").value;

    console.log(inp)
    var op = [];
    var num = [];
    var count = 0;
    var inp1;
    var inp2;
    var total;

    for (var i = 0; i < inp.length; i++) {
        total = Number(inp[0]);
        if (i > 0) {
            if (i % 2 === 1) {
                op.push(inp[i]);
            } else {
                num.push(inp[i])
            }
        }
    }

    while (count <= num.length) {
        if (num.length !== op.length) {
            alert("연산할수 없습니다.");
            break;
        } else {
            inp2 = num[count];
            if (op[count] === "+") {
                total = total + Number(inp2);
            } else if (op[count] === "-") {
                total = total - Number(inp2);
            } else if (op[count] === "*") {
                total = total * Number(inp2);
            } else if (op[count] === "/") {
                total = total / Number(inp2);
            }
            count++;
        }
    }
    out.innerHTML += total;
}
