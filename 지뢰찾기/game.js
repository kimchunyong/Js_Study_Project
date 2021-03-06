var tbody = document.querySelector('#table tbody');
var dataset = [];
var midFlag = false;
var sucess = 0;
var hor = parseInt(document.querySelector('#hor').value);
var ver = parseInt(document.querySelector('#ver').value);
var mine = parseInt(document.querySelector('#mine').value);

//초기화 함수
function init() {
    tbody.innerHTML = '';
    dataset = [];
    midFlag = false;
    sucess = 0;
    document.querySelector('#result').textContent = '';
    //지뢰 위치 뽑기
    var boom = Array(hor * ver)
        .fill()
        .map(function (item, idx) {
            return idx;
        });
    var shuffle = [];
    while (boom.length > ((hor * ver) - mine)) {
        var result = boom.splice(Math.floor(Math.random() * boom.length), 1)[0];
        shuffle.push(result);
    }

    //지뢰 테이블 그리기
    for (var i = 0; i < ver; i++) {
        var arr = [];
        dataset.push(arr);
        var tr = document.createElement('tr');
        for (var j = 0; j < hor; j++) {
            arr.push(0);
            var td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    }

    //console.log(shuffle)
    //지뢰 심기
    for (var k = 0; k < shuffle.length; k++) {
        var col = Math.floor(shuffle[k] / 10); //세로
        var row = shuffle[k] % 10; //가로
        //console.log("col:" + col)
        //console.log("row:" + row)
        tbody.children[col].children[row].textContent = "X";
        dataset[col][row] = "X";
    }
}
document.querySelector('#exec').addEventListener('click', init);


tbody.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (midFlag) {
        return;
    }
    if (e.target.tagName === 'TD') {
        var targetTd = e.target; //현재 클릭 td
        var parentTr = e.target.parentNode; //현재 클릭한 td의 부모 tr
        var parentTbody = e.target.parentNode.parentElement; //tbody
        var targetCol = Array.prototype.indexOf.call(parentTr.children, targetTd); //현재 클릭한 td의 세로 칸
        var targetRow = Array.prototype.indexOf.call(parentTbody.children, parentTr); //현재 클릭한 tr의 가로 칸

        if (targetTd.textContent === '' || targetTd.textContent === 'X') {
            targetTd.textContent = '!';
        } else if (targetTd.textContent === '!') { //깃발
            targetTd.textContent = '?';
        } else if (targetTd.textContent === '?') { //물음표
            if (dataset[targetRow][targetCol] === 1) {
                targetTd.textContent = '';
            } else if (dataset[targetRow][targetCol] === 'X') {
                targetTd.textContent = 'X';
            };
        }
    }
});

tbody.addEventListener('click', function (e) {
    if (midFlag) {
        return;
    }
    if (e.target.tagName === 'TD') {
        e.preventDefault();
        //클릭시 주변 지뢰 개수
        var targetTd = e.target; //현재 클릭 td
        var parentTr = e.target.parentNode; //현재 클릭한 td의 부모 tr
        var parentTbody = e.target.parentNode.parentElement; //tbody
        var targetCol = Array.prototype.indexOf.call(parentTr.children, targetTd); //현재 클릭한 td의 세로 칸
        var targetRow = Array.prototype.indexOf.call(parentTbody.children, parentTr); //현재 클릭한 tr의 가로 칸

        if (targetTd.textContent !== '!' && targetTd.textContent !== '?' && targetTd.classList[0] !== 'opend') {
            targetTd.classList.add('opend');
            sucess += 1;
            if (sucess === hor * ver - mine) {
                midFlag = true;
                document.querySelector('#result').textContent = '승리';
            }
        }

        if (dataset[targetRow][targetCol] === 'X' && targetTd.textContent !== '!' && targetTd.textContent !== '?') {
            targetTd.textContent = '펑';
            document.querySelector('#result').textContent = '실패 ㅠ';
            midFlag = true;
        } else if (dataset[targetRow][targetCol] !== 'X') {
            /*
                현재 클릭한 배열에서 Row줄의 -1 을 기준으로 3개 탐색, Col줄의 -1을 한뒤 3번 탐색해서 주변의 모든 것들을 탐색한뒤
                boomCount로 갯수를 새고 현재 클릭한 칸에다 폭탄이랑 근접한 갯수를 적어준다.
            */
            dataset[targetRow][targetCol] = 1;
            if (targetTd.textContent === '!' || targetTd.textContent === '?') {
                return false;
            } else {
                var clickArea = [];
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
                        clickArea.push(tbody.children[i].children[j]);
                    }
                }
                targetTd.textContent = boomCount || '';
                if (boomCount === 0) { //폭탄 갯수가 0일때
                    //0이 많아질수록 속도 느려지는 현상 발생.어느정도 해소는되었지만 중복해서 클릭됨. 시간나면 알고리즘 배열탐색으로 속도측면 개선하기.
                    clickArea
                        .filter(function (n) {
                            if (n) {
                                return 1;
                            }
                        })
                        .forEach(item => {
                            if (item && item.classList[0] !== 'opend') {
                                item.click();
                            }
                        })
                    clickArea = [];
                }
            }
        }

    }
})





