var form = document.querySelector('form')
var itemList = document.querySelector('ul')
var filter = document.querySelector('input#filter')

//Form submit event
form.addEventListener('submit',addItem);

function addItem(e){
  e.preventDefault();
  
  var newItem  = document.getElementById('item').value

  //new li element
  var li  = document.createElement('li')

  //add class to the li
  li.className ='list-group-item';

  //append textNode to li
  li.appendChild(document.createTextNode(newItem))

  //add delete button
  var deleteBtn = document.createElement('button')

  //add class to the button
  deleteBtn.className = 'btn btn-danger btn-float btn-sm float-right delete'

  //append textNode to li
  deleteBtn.appendChild(document.createTextNode('x'))

  //append the button in li
  li.appendChild(deleteBtn)

  itemList.appendChild(li)
  console.log(deleteBtn)
}

//DELETE
itemList.addEventListener('click',deleteItem);

function deleteItem(e){
  if(e.target.classList.contains('delete')){//target moves from li to 'x' button
    if(confirm('Are you sure to delete?')){
      var li  = e.target.parentElement ////target moves from 'x' button to li 
      itemList.removeChild(li);
    }
    console.log(e.type);
  }
  
}


//SEARCH
filter.addEventListener('keyup',filterItems);

function filterItems(e){
  //convert text to lower case
  var text = e.target.value.toLowerCase();
  
  //all list items to variable
  var items = itemList.getElementsByTagName('li')

  //Convert to array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    //Matching with itemName
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block'; //if matches,show it
    }
    else{
      item.style.display = 'none'; //if doesn't match,show nothing
    }
  })

  
}