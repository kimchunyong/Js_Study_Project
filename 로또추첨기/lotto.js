var lottoNum = Array(45);
var fill = lottoNum.fill();

fill.forEach(function (item, idx) {
    fill[idx] = idx + 1
})


console.log(fill);