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

