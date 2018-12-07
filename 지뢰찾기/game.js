var tbody = document.querySelector('#table tbody');

var dataset = [];
function init() {
    tbody.innerHTML = '';
    dataset = []
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    //지뢰 위치 뽑기
    var boom = Array(hor * ver)
        .fill()
        .map(function (item, idx) {
            return idx;
        });
    var shuffle = [];
    while (boom.length > 80) {
        var result = boom.splice(Math.floor(Math.random() * boom.length), 1)[0];
        shuffle.push(result);
    }

    //지뢰 테이블 그리기
    for (var i = 0; i < ver; i++) {
        var arr = [];
        dataset.push(arr);
        var tr = document.createElement('tr');
        for (var j = 0; j < hor; j++) {
            arr.push(1)
            var td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    }

    //지뢰 심기
    for (var k = 0; k < shuffle.length; k++) {
        var col = Math.floor(shuffle[k] / 10); //세로
        var row = shuffle[k] % 10; //가로
        tbody.children[col].children[row].textContent = "X";
        dataset[col][row] = "X";
    }
    console.log(dataset)
}
document.querySelector('#exec').addEventListener('click', function () {
    init();
})


tbody.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (e.target.tagName === 'TD') {
        var targetTd = e.target; //현재 클릭 td
        var parentTr = e.target.parentNode; //현재 클릭한 td의 부모 tr
        var parentTbody = e.target.parentNode.parentElement; //tbody
        var targetCol = Array.prototype.indexOf.call(parentTr.children, targetTd); //현재 클릭한 td의 세로 칸
        var targetRow = Array.prototype.indexOf.call(parentTbody.children, parentTr); //현재 클릭한 tr의 가로 칸

        if (targetTd.textContent === '' || targetTd.textContent === 'X') {
            targetTd.textContent = '!';
        } else if (targetTd.textContent === '!') {
            targetTd.textContent = '?';
        } else if (targetTd.textContent === '?') {
            if (dataset[targetRow][targetCol] === 1) {
                targetTd.textContent = '';
            } else if (dataset[targetRow][targetCol] === 'X') {
                targetTd.textContent = 'X';
            };
        }
    }
});

tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'TD') {
        e.preventDefault();
        //클릭시 주변 지뢰 개수
        var targetTd = e.target; //현재 클릭 td
        var parentTr = e.target.parentNode; //현재 클릭한 td의 부모 tr
        var parentTbody = e.target.parentNode.parentElement; //tbody
        var targetCol = Array.prototype.indexOf.call(parentTr.children, targetTd); //현재 클릭한 td의 세로 칸
        var targetRow = Array.prototype.indexOf.call(parentTbody.children, parentTr); //현재 클릭한 tr의 가로 칸

        if (dataset[targetRow][targetCol] === 'X') {
            alert('Game Over!!');
            init();
        } else if (dataset[targetRow][targetCol] !== 'X') {
            /*
                현재 클릭한 배열에서 Row줄의 -1 을 기준으로 3개 탐색, Col줄의 -1을 한뒤 3번 탐색해서 주변의 모든 것들을 탐색한뒤
                boomCount로 갯수를 새고 현재 클릭한 칸에다 폭탄이랑 근접한 갯수를 적어준다.
            */
            var boomCount = 0;
            for (var i = targetRow - 1; i < targetRow + 2; i++) {
                if (i < 0 || i === 10) {
                    continue;
                }
                for (var j = targetCol - 1; j < targetCol + 2; j++) {
                    if (j < 0) {
                        continue;
                    }
                    if (dataset[i][j] === "X") {
                        boomCount++;
                    }
                }
            }
            targetTd.textContent = boomCount;
        }
    }
})



