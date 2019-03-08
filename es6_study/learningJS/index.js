// alert('hellow world');
/*
let a = 221;
let b = a - 5;
a = 4;
*/
/*
const a = 221;
const b = a - 5;
a = 4; // error
console.log(b, a);
*/

const title = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  title.innerHTML = 'Change text';
});
