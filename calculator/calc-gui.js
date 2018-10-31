'use strict';

var calc = {};

calc.list = '';

calc.click = function (e) {
    var target = e.target;
    var val = target.textContent
    this.pushList(val);
}

calc.pushList = function (val) {
    var listLast = this.list.substr(this.list.length - 1);
    if (!Number(val) && this.list.length === 0) {
        throw new Error("맨처음 연산자를 넣을수 없습니다.")
    }

    if (Number(listLast) === Number(val)) {
        alert('연산자를 연속으로 입력할수 없습니다.');
        return false;
    } else {
        if (!Number(listLast) && !Number(val) || val == '=') {
            return false;
        } else {
            this.list += val;
        }
    }
}

calc.filterList = function () {
    var getList = this.list;
}

calc.add = function (a, b) {
    return Number(b) + Number(a);
}

calc.subtract = function (a, b) {
    return Number(b) * Number(a);
}

calc.multiply = function (a, b) {
    return Number(b) * Number(a);
}

calc.divide = function (a, b) {
    return Number(b) / Number(a);
}

function eventListener() {
    var ele = document.getElementById('calc_wrap');
    ele.addEventListener('click', function (e) {
        calc.click(e);
    })
}
eventListener();
