
var lottoNum = Array(45)
    .fill()
    .map(function (item, idx) {
        return idx + 1;
    });


var shuffle = [];
while (lottoNum.length > 0) {
    var mvNum = lottoNum.splice(Math.floor(Math.random() * lottoNum.length), 1)[0]
    shuffle.push(mvNum);
}

var bonus = shuffle[shuffle.length - 1];
var resultNum = shuffle.slice(0, 6).sort(function (a, b) {
    return a - b;
})

