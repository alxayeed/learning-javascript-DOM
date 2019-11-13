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

// //creating a <div> element
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'new class';

// //add id
// newDiv.id='new id';

// //add attribute
// newDiv.setAttribute('title','new title');

// //create text node
// var newDivText  = document.createTextNode('This element is created and added to the DOM by Vanilla js instead of HTML/CSS');
// newDiv.appendChild(newDivText);

// //adding to the DOM
// var container = document.querySelector('header  .container');
// var ul = document.querySelector('header h1');
// newDiv.style.fontSize='13px';
// container.insertBefore(newDiv,ul);


			//EVENT LISTENER//

// var button = document.getElementById('button')
// button.addEventListener('click',event);

// function buttonClick(){
// 	document.getElementById('hey').textContent = '';
// 	// document.getElementById('header-title').style.color = '#000000';
// 	var output = document.getElementById('output');
// 	output.innerHTML = '<h1>'+'Thank You'+'</h1>';

// }

// function event(e){
// 	// console.log(e)
// 	// console.log(e.screenY)
// 	// console.log(e.path)
// 	// console.log(e.srcElement)
// 	// console.log(e.target)
// 	// console.log(e.target.id)
// 	// console.log(e.target.className)
// 	// console.log(e.target.classList)
// 	// console.log(e.clientX)//mouse position on the browser screen
// 	// console.log(e.clientY)
// 	// console.log(e.offsetX)//mouse position on the actual button
// 	// console.log(e.offsetY)

// 	// console.log(e.altKey); //key is pressed or not
// 	// console.log(e.ctrlKey);
// 	// console.log(e.shiftKey);


// }

//ALL THE EVENTS - click,dbclick,mouseup,mousedown,mouseenter,mouseleave,mouseover,mouseout,mousemove,keydown,keyup,focus,blur,cut,paste,input,change,submit

   //MOUSE ACTIONS//
var button = document.getElementById('button')


// button.addEventListener('click',mouseEvent); //click
// button.addEventListener('dblclick',mouseEvent); //double click
// button.addEventListener('mouseup',mouseEvent); //when mouse clicked
// button.addEventListener('mousedown',mouseEvent); //when click is released

//uncomment the <div></div> of id="box" in the index.html
var box = document.getElementById('box')

// box.addEventListener('mouseenter',mouseEvent); //when mouse enters the box
// box.addEventListener('mouseleave',mouseEvent);//when mouse enters the box
// box.addEventListener('mouseover',mouseEvent);//when mouse enters the box as well as any inner elements (eg - h1)
// box.addEventListener('mouseout',mouseEvent);//when mouse exits the box as well as any inner elements (eg - h1)

// var output = document.getElementById('box');
// box.addEventListener('mousemove',mouseEvent);

// function mouseEvent(e){
// 	// console.log('EVENT TYPE:'+e.type)

// 	// output.innerHTML = '<h1>Mouse X:'+e.offsetX+'</h1><h1>Mouse Y:'+e.offsetY+'</h1>'
// 	box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",0)";
// 	document.body.style.backgroundColor="rgb("+e.offsetY+","+e.offsetX+",100)";

// }

		//INPUT EVENTS//
var input = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

var box = document.getElementById('box')

// input.addEventListener('keydown',inputEvent);//when key in box is pressed
// input.addEventListener('keyup',inputEvent);//when pressure is released
// input.addEventListener('keypress',inputEvent);

// input.addEventListener('focus',inputEvent);
// input.addEventListener('blur',inputEvent);

// input.addEventListener('cut',inputEvent);
// input.addEventListener('paste',inputEvent);

// input.addEventListener('input',inputEvent);//anything in the input box

var select = document.querySelector('select');

// select.addEventListener('change',inputEvent)
// select.addEventListener('input',inputEvent)


// function inputEvent(e){
// 	console.log(e.type)
// 	value = e.target.value
// 	box.innerHTML = '<h1>'+'EVENT TYPE : '+e.type+'</h1><h2>'+value+'</h2>'
// 	// document.body.style.display='none'

// }

form.addEventListener('submit',inputEvent)

function inputEvent(e){
	e.preventDefault()
	console.log(e.type)
	value = e.target.value
	box.innerHTML = '<h1>'+'EVENT TYPE : '+e.type+'</h1><h2>'+value+'</h2>'

}





