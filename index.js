var mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

var list = document.querySelector('ul'); 
// console.log(list);

var listItems = document.getElementsByTagName('li');
// console.log(listItems);

var listItems2 = document.getElementsByClassName('todo-item');
// console.log(listItems2);

var listItems3 = document.querySelectorAll('ul .todo-item');

function addTodo() {
    event.preventDefault();                                 //stop the page from refreshing
    console.log('target', event.target);
    var newItem = event.target.newTodo.value;              //store the newTodo value in a variable
    var newListItem = document.createElement('li');         //create li
    var newTextNode = document.createTextNode(newItem);     //create text node
    newListItem.appendChild(newTextNode);                   //append text node to li
    newListItem.setAttribute('onclick', 'removeTodo()');    //set onclick attribute
    list.appendChild(newListItem);                          //append li ul

    var newTodoInput = document.getElementById('newTodo'); //get input value
    newTodoInput.value = "";                               //set value to empty string

    toggle();
}

function removeTodo() {
    var el = event.target;              //get clicked element
    var parentEl = el.parentNode;       //get the elements parent node
    parentEl.removeChild(el);           //remove the child from the parent
}

function innerHTMLPractice() {
    var theContent = '<h3 class="text-center">This is the innerHTML content title</h3><p>When using the innerHTML property, the browser takes the string and creates the HTML elements it finds.</p><p>If content already exists, this will overwrite it, not append to it.</p>';

    var el = document.getElementById('inner-html-practice');
    el.innerHTML = theContent;
}

innerHTMLPractice();

function toggle() {
    const el = document.getElementById('inner-html-practice');
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    }
    else {
        el.classList.add('hidden');
    }
}

 