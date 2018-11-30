var wrap = document.createElement('div');
wrap.classList = 'wrap';
var flag = true;
var baseArr = [];
var AllchkArr = [];
var rows = [];
var cols = [];
var clickArr = [];

for (var i = 0; i < 3; i++) {
    var rowItem = document.createElement('div');
    rowItem.classList = 'row-item';
    rows.push(rowItem);
    cols.push([]);
    AllchkArr.push([]);
    for (var j = 0; j < 3; j++) {
        var col = document.createElement('div');
        col.classList = 'col';
        cols[i].push(col);
        AllchkArr[i].push(col);
        rowItem.append(col);
    }
    wrap.append(rowItem);
}
document.body.append(wrap);


var col = document.querySelectorAll('.col');
col.forEach(function (el) {
    baseArr.push(el);
    el.addEventListener('click', function (e) {
        var whatRow = rows.indexOf(e.target.parentNode);
        console.log("몇줄", whatRow);
        var whatCol = cols[whatRow].indexOf(e.target);
        console.log('몇칸', whatCol);

        baseArr.splice(baseArr.indexOf(el), 1);
        if (!clickArr.includes(el)) {
            clickArr.push(el);
            if (flag) {
                el.textContent = 'X';
                flag = false;
                setTimeout(function () {
                    var rndIdx = Math.floor(Math.random() * baseArr.length);
                    baseArr[rndIdx].textContent = 'O';
                    var whatRow = rows.indexOf(baseArr[rndIdx].parentNode);
                    console.log("몇줄", whatRow);
                    var whatCol = cols[whatRow].indexOf(baseArr[rndIdx]);
                    console.log('몇칸', whatCol);
                    baseArr.splice(rndIdx, 1);
                    flag = true;
                }, 100)
            }
        }
    })
})

