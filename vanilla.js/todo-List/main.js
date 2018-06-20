"use strict";
var btnNew = document.getElementById("btnAdd");
var inputText = document.getElementById("inputText");

function renameItem() {
  console.log(this);
  var newText = prompt("수정할 문구를 입력해 주세요.");
  if (!newText || newText === "" || newText === " ") {
    throw new Error("아무것도 입력되지 않았습니다.");
  }

  this.innerText = newText;
}

function removeItem() {
  var listItemId = this.id.replace("li", "");
  document.getElementById("li_" + listItemId).style.display = "none";
}

function updateItemStatus() {
  var chId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + chId);

  if (this.checked) {
    itemText.className = "checked";
  } else {
    itemText.className = "";
  }
}

//DOM이 다 그려지고 나서 코드가 실행되라
document.addEventListener("DOMContentLoaded", function() {
  inputText.focus();
});

inputText.addEventListener("keydown", function(event) {
  console.log(event.which);
  if (event.which === 13) {
    var itemText = inputText.value;

    if (!itemText || itemText === "" || itemText === " ") {
      throw new Error("아무것도 입력되지 않았습니다.");
    }
    addNewItem(document.getElementById("todolist"), itemText);

    inputText.focus();
    inputText.select();
  }
});

function addNewItem(list, itemText) {
  var date = new Date();
  var id =
    "" +
    date.getHours() +
    date.getMinutes() +
    date.getSeconds() +
    date.getMilliseconds();

  var listItem = document.createElement("li");
  var chkBox = document.createElement("input");

  chkBox.type = "checkbox";
  chkBox.id = "cb_" + id;
  chkBox.onclick = updateItemStatus;

  var span = document.createElement("span");
  span.id = "item_" + id;
  span.innerText = itemText;
  span.onclick = renameItem;

  listItem.appendChild(chkBox);
  listItem.appendChild(span);
  list.appendChild(listItem);
}
