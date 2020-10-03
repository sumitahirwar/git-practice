// const dv1 = document.getElementById('app');
// const  x = document.createElement("OL");

//  Creating 'ol' object

//  var g = document.createElement("OL");

// //  g.setAttribute("id", "GFG");
// document.body.appendChild(g);

//  var x = document.createElement("LI");
//  var y = document.createTextNode("geeks");

//  x.appendChild(y);
// g.appendChild(x);

//  var w = document.createElement("LI");
//  var f = document.createTextNode("sudo");
//  w.appendChild(f);
//  document.getElementById("GFG").appendChild(w);

// const ol = document.createElement("ol");
// document.getElementById("app1").append(ol);

// const li = document.createElement("li");
// const li2 = document.createElement("li");
// const text1 = document.createTextNode("sudo")
// const text2 = document.createTextNode("elements")
// li.append(text1)
// li2.append(text2)

// ol.append(li)
// ol.append(li2)

const addTodoModal = document.getElementById('myModal');
const userInputs = addTodoModal.querySelectorAll('input');

//console.log(addTodoModal.querySelectorAll("input")+ "sumit ");
// Get the modal

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
  //button.setAttribute('id', 'delete');
  ol.append(button);

 
  button.addEventListener(
    'click',
    (deleteListHandle = () => {
    
      let arrayId;
      toDoListItems.map(function (el) {
        console.log(el.id + ' arrayId in mp[');
        arrayId = el.id;
        // debugger;
        // array [{id=6,item,desc},{id1,item,desc},{id5,item,desc},{id9,item,desc}]
        if(id === arrayId){
            toDoListItems.splice(id,1);
        
      console.log(arrayId + ' arrayId id');
      console.log(id + ' renderf id');}
      });
    
      ol.removeChild(newModalEl);
      ol.removeChild(button);
      console.log(toDoListItems);

      // }
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
      id: Math.random().toString(),
      title: title,
      desc: desc,
    };
    toDoListItems.push(newTodo);

    // console.log(toDoListItems)
    renderNewModalEl(newTodo.id, newTodo.title, newTodo.desc);
  }
};



const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addListHandler);
//toDoListItems.push(newTodo)
