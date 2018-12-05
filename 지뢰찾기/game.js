document.querySelector('#exec').addEventListener('click', function () {
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
    var dataset = [];
    var tbody = document.querySelector('#table tbody');
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
        dataset[col][row] = "x";
    }
    console.log(dataset)

})

