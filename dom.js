//Examine the document objects
// console.dir(document);

// console.log(document.domain);
// console.log(document.title);
// // document.title = 'changed';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent='Changed the Title from DOM';

// console.log(document.forms);
// console.log(document.forms[0]);

//SELECTORS

//getElementById()
// console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent='Hello';
// headertitle.innerText = 'Hola';
//They are almost same,but innertext follows what is in the style//

// console.log(headertitle.textContent);
// console.log(headertitle.innerText);
// headertitle.innerHTML = '<h1>Hey</h1>';
// console.log(headertitle.innerHTML);

// header.style.borderBottom = 'solid 10px #000';

//getElementsByClasseName()//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// items[1].textContent = 'Hello';
// items[2].innerText = 'Hola';
// items[3].style.fontSize='25px';
// items[0].style.fontWeight='bold';
// items[1].style.backgroundColor = 'orange';

// items.style.backgroundColor = '#f4f4f4'; //Gives error,because items is an HTML list item

// for(var i=0;i<items.length;i++){
// 	items[i].style.backgroundColor = '#f4f4f4';
// }

//getElementsByTagName()//
// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[3]);
// items[1].textContent = 'Hello';
// items[2].innerText = 'Hola';
// items[3].style.fontSize='25px';
// items[0].style.fontWeight='bold';
// items[1].style.backgroundColor = 'orange';

// // items.style.backgroundColor = '#f4f4f4'; //Gives error,because items is an HTML list item

// for(var i=0;i<items.length;i++){
// 	items[i].style.backgroundColor = '#f4f4f4';
// }

//QUERYSELECTOR - grabs only the first element//
// var header = document.querySelector('#header-title');
// header.style.backgroundColor = '#ccc';

// var input = document.querySelector('input');
// input.value = 'Hola Amigo';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var nthItem = document.querySelector('.list-group-item:nth-child(2)');
// nthItem.style.color = 'yellow';

//QUERYSELECTORALL 
// var titles = document.querySelectorAll('.title');
// console.log(titles); //Nodelist

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i=0;i<odd.length;i++){
// 	odd[i].style.backgroundColor = 'orange';
// 	even[i].style.backgroundColor = 'skyblue';
// }


//TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='orange';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

//parentElement//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='yellow';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement.parentElement);


//childNodes//
// console.log(itemList.childNodes);//returns nodeList-includes linebreaks as item

//children//
// console.log(itemList.children);//returns HTMLCollection - excluding linebreaks;

// itemList.children[1];
// itemList.children[1].style.backgroundColor='red';

//firstChild//
 // console.log(itemList.firstChild);//includes linebreaks

//firstElementChild//
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'firstElementChild';


//lastChild//
 // console.log(itemList.firstChild);//includes linebreaks

//lastElementChild//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'lastElementChild';
 
//SIBLINGS//
//nextSibling//

// console.log(itemList.nextSibling);

// //nextElementSibling//
// console.log(itemList.nextElementSibling);

//previousSibling//
// console.log(itemList.previousSibling);

// //previousElementSibling//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='orange';

 
//CREATING ELEMENTS
//createElements

//creating a <div> element
var newDiv = document.createElement('div');

//add class
newDiv.className = 'new class';

//add id
newDiv.id='new id';

//add attribute
newDiv.setAttribute('title','new title');

//create text node
var newDivText  = document.createTextNode('This element is created and added to the DOM by Vanilla js instead of HTML/CSS');
newDiv.appendChild(newDivText);

//adding to the DOM
var container = document.querySelector('header  .container');
var ul = document.querySelector('header h1');
newDiv.style.fontSize='13px';
container.insertBefore(newDiv,ul);



