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
var headertitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent='Hello';
// headertitle.innerText = 'Hola';
//They are almost same,but innertext follows what is in the style
// console.log(headertitle.textContent);
// console.log(headertitle.innerText);
// headertitle.innerHTML = '<h1>Hey</h1>';
// console.log(headertitle.innerHTML);

// header.style.borderBottom = 'solid 10px #000';

//getElementsByClasseName()
var items = document.getElementsByClassName('list-group-item');
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

//getElementsByTagName()
var items = document.getElementsByTagName('li');
console.log(items);
console.log(items[3]);
items[1].textContent = 'Hello';
items[2].innerText = 'Hola';
items[3].style.fontSize='25px';
items[0].style.fontWeight='bold';
items[1].style.backgroundColor = 'orange';

// items.style.backgroundColor = '#f4f4f4'; //Gives error,because items is an HTML list item

for(var i=0;i<items.length;i++){
	items[i].style.backgroundColor = '#f4f4f4';
}
