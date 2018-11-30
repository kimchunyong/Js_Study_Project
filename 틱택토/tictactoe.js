var wrap = document.createElement('div');
wrap.classList = 'wrap';
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
        var whatCol = cols[whatRow].indexOf(e.target);
        var checkLine = false;
        baseArr.splice(baseArr.indexOf(el), 1);
        if (!clickArr.includes(el)) {
            clickArr.push(el);
            el.textContent = 'X';

            //가로 3칸 확인
            if (cols[whatRow][0].textContent == 'X' && cols[whatRow][1].textContent == 'X' && cols[whatRow][2].textContent == 'X') {
                checkLine = true;
            }

            //세로 3칸 확인
            if (cols[0][whatCol].textContent == 'X' && cols[1][whatCol].textContent == 'X' && cols[2][whatCol].textContent == 'X') {
                checkLine = true;
            }

            //대각선 3칸 확인
            if (cols[0][0].textContent == 'X' && cols[1][1].textContent == 'X' && cols[2][2].textContent == 'X' || cols[0][2].textContent == 'X' && cols[1][1].textContent == 'X' && cols[2][0].textContent == 'X') {
                checkLine = true;
            }

            // 다 찼을때
            if (checkLine) {
                alert('X 승리');
                return false;
            }
            setTimeout(function () {
                var rndIdx = Math.floor(Math.random() * baseArr.length);
                baseArr[rndIdx].textContent = 'O';
                var whatRow = rows.indexOf(baseArr[rndIdx].parentNode);
                var whatCol = cols[whatRow].indexOf(baseArr[rndIdx]);
                var checkLine = false;
                //가로 3칸 확인
                if (cols[whatRow][0].textContent == 'O' && cols[whatRow][1].textContent == 'O' && cols[whatRow][2].textContent == 'O') {
                    checkLine = true;
                }

                //세로 3칸 확인
                if (cols[0][whatCol].textContent == 'O' && cols[1][whatCol].textContent == 'O' && cols[2][whatCol].textContent == 'O') {
                    checkLine = true;
                }

                //대각선 3칸 확인
                if (cols[0][0].textContent == 'O' && cols[1][1].textContent == 'O' && cols[2][2].textContent == 'O' || cols[0][2].textContent == 'O' && cols[1][1].textContent == 'O' && cols[2][0].textContent == 'O') {
                    checkLine = true;
                }

                // 다 찼을때
                if (checkLine) {
                    alert('O' 승리');
                    return false;
                }
                clickArr.push(baseArr[rndIdx]);
                baseArr.splice(rndIdx, 1);
            }, 100)

        }

    })
})

