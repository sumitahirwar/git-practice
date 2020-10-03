const addTodoModal = document.getElementById('myModal');
const userInputs = addTodoModal.querySelectorAll('input');

const toDoListItems = [];

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// let newModalEl,button ;
const renderNewModalEl = (id, title, desc) => {
  const ol = document.getElementById('todo-list');
  const newModalEl = document.createElement('li');
  newModalEl.textContent = ` Title : ${title}    Desc : ${desc}`;
  ol.append(newModalEl);

  const button = document.createElement('button');
  button.innerHTML = 'Delete ToDo';
  button.setAttribute('id', 'delete');
  ol.append(button);

  console.log(id + ' renderf id');
  
  button.addEventListener(
    'click',
    (deleteListHandle = () => {
     
      let arrayId;
      toDoListItems.map(function (el) {
        arrayId = el.id;
        if(id === arrayId){
            toDoListItems.splice(arrayId,1);}
      });
      console.log(arrayId + ' array id');
   
      ol.removeChild(newModalEl);
      ol.removeChild(button);
      console.log(toDoListItems);

    
    })
  );
};

const addListHandler = () => {
  const title = userInputs[0].value;
  const desc = userInputs[1].value;

  if (title === '' || desc === '') {
    alert('please enter a valid title and desc');
  } else {
    const newTodo = {
      id: Math.random().toString,
      title: title,
      desc: desc,
    };
    toDoListItems.push(newTodo);

    renderNewModalEl(newTodo.id, newTodo.title, newTodo.desc);
  }
};


const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addListHandler);
//toDoListItems.push(newTodo)
