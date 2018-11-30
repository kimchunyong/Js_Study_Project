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
var clickArr = [];

var col = document.querySelectorAll('.col');
col.forEach(function (el) {
    el.addEventListener('click', function () {
        console.log(!clickArr.includes(el))
        if (!clickArr.includes(el)) {
            clickArr.push(el);
            if (flag) {
                el.textContent = 'X';
                flag = false;
            } else {
                el.textContent = 'O';
                flag = true;
            }
        }
    })
})