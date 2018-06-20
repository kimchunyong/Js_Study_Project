"use strict";
var btnNew = document.getElementById("btnAdd");
var inputText = document.getElementById("inputText");
var totalItems = 0;

function updateItemStatus() {
  console.log(1111);
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
  totalItems++;

  var listItem = document.createElement("li");
  var chkBox = document.createElement("input");

  chkBox.type = "checkbox";
  chkBox.id = "cb_" + totalItems;
  chkBox.onclick = updateItemStatus;

  var span = document.createElement("span");
  span.id = "item_" + totalItems;
  span.innerText = itemText;

  listItem.appendChild(chkBox);
  listItem.appendChild(span);
  list.appendChild(listItem);
}
