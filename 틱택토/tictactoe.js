var wrap = document.createElement('div');
wrap.classList = 'wrap';

for (var i = 0; i < 3; i++) {
    var rowItem = document.createElement('div');
    rowItem.classList = 'row-item';
    for (var j = 0; j < 3; j++) {
        var col = document.createElement('div');
        col.classList = 'col';
        rowItem.append(col);
    }
    wrap.append(rowItem);
}
document.body.append(wrap);

var flag = true;
var baseArr = []
var clickArr = [];

var col = document.querySelectorAll('.col');
col.forEach(function (el) {
    baseArr.push(el);
    el.addEventListener('click', function () {
        baseArr.splice(baseArr.indexOf(el), 1);
        if (!clickArr.includes(el)) {
            clickArr.push(el);
            if (flag) {
                el.textContent = 'X';
                flag = false;
                setTimeout(function () {
                    var rndIdx = Math.floor(Math.random() * baseArr.length);
                    baseArr[rndIdx].textContent = 'O';
                    baseArr.splice(rndIdx, 1);
                    flag = true;
                }, 500)
            }
        }
    })
})


