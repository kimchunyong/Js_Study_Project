"use strict";
var btnNew = document.getElementById("btnAdd");
var inputText = document.getElementById("inputText");

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
  var listItem = document.createElement("li");
  listItem.innerText = itemText;
  list.appendChild(listItem);
}
