// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title =123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);

//console.log(document.images);
// GETELEMENTBYID//
//console.log(document.getElementById('header-title'));


//   var headerTitle = document.getElementById('header-title');
//   console.log(headerTitle);
//   var header = document.getElementById('main-header');
//   headerTitle.textContent = 'Things to Do!';
 
//  var items =document.getElementsByClassName('list-group-item');
//  console.log(items);
//  console.log(items[1]);
//  items[1].textContent = 'Wash my hair';
  //items[1].style.fontWeight = 'bold';
  //items[1].style.backgroundColor ='pink';


//     console.log(items[0]);
//     items[0].textContent = 'Cook dinner';
//   items[0].style.fontWeight = 'bold';
//   items[0].style.backgroundColor ='pink';

//  console.log(items[2]);
//  items[2].textContent = 'take a nap';
 //items[2].style.fontWeight = 'bold';
  //items[2].style.backgroundColor ='pink';

//  console.log(items[3]);
//  items[3].textContent = 'Meditate';
 // items[3].style.fontWeight = 'bold';
 //items[3].style.backgroundColor ='pink';


//  //gives error
//  //items.style.backgroundColor ='pink';

//  for(var i = 0; i < items.length; i++) {
//      items[i].style.backgroundColor ='pink';
 //}

//   var items = document.createElement('list-group-item');
//     items.setAttribute("type", "checkbox");
//  var items = document.getElementById("myCheck");


var headerTitle = document.getElementById("header-title");
console.log(headerTitle);
var header = document.getElementById("main-header");
headerTitle.textContent = "Things to Do!";
header.style.borderBottom = "solid 3px purple";
var items = document.getElementsByClassName("list-group-item");

console.log(items);
console.log(items[1]);
// items[0].style.fontWeight = 'bold';
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "pink";
}
for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
let checkbox = document.querySelectorAll(".checkbox");
let listGroupItem = document.querySelectorAll(".list-group-item");

let addButton = document.querySelector(".btn.btn-dark");
let inputField = document.querySelector(".form-control.mr-2");
addButton.addEventListener('click', function (event) {
    event.preventDefault()
    let inputText = inputField.value;
    let listItem = document.createElement('li');
    listItem.className = "list-group-item"
    document.querySelector('ul').append(listItem);
    listItem.innerHTML = inputText;
    listItem.style.backgroundColor = "pink";
    listItem.style.fontWeight = "bold";
    console.log(inputText)
    inputField.value = "";
    });

    listGroupItem[0].addEventListener("click", function (event) {
        setTimeout(function () {
          listGroupItem[0].remove();
        }, 1000);
      });
      listGroupItem[1].addEventListener("click", function (event) {
        setTimeout(function () {
          listGroupItem[1].remove();
        }, 1000);
      });
      listGroupItem[2].addEventListener("click", function (event) {
        setTimeout(function () {
          listGroupItem[2].remove();
        }, 1000);
      });
      listGroupItem[3].addEventListener("click", function (event) {
        setTimeout(function () {
          listGroupItem[3].remove();
        }, 1000);
      });
