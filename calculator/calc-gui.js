'use strict';

var calc = {};

calc.list = '';

calc.click = function (e) {
    var target = e.target;
    var val = target.textContent
    this.pushList(val);
}

calc.pushList = function (val) {
    console.log(val);

    this.list += val;
    console.log(this.list)
    console.log(this.list[this.list.length - 1])
}

var ele = document.getElementById('calc_wrap');
ele.addEventListener('click', function (e) {
    calc.click(e);
})
