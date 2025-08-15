// // const inputs = document.getElementById("todo_inputs");
// const list = document.getElementById("list_container")
// let todo_list = [];
// let todo_count = 0;

// function show_task() {
//     if (inputs.value.trim() !== "") {
//         todo_list.push({task: inputs.value, id: todo_count++})
//         // todo_count++;
//     }
//     display();
//     inputs.value = "";
//     console.log(todo_list);
// }
// function display(id) {
//    let html = '';

// for (let i = 0; i < todo_list.length; i++) {
//     html +=`<li class="todo_item">${todo_list[i].task}
//     <div id="edit_todo${todo_list[i].id}"></div>
//     <div class="icon">
//      <span onclick="edit(${todo_list[i].id})"><i class="fa-solid fa-pen-to-square"></i></span>
//      <span onclick="delet(${todo_list[i].id})"><i class="fa-solid fa-trash"></i></span>
//     </div>
//     </li>`
// }
// list.innerHTML = html;
// }

// function delet(id) {
//     for (let i = 0; i < todo_list.length; i++) {
//       if (todo_list[i].id === id) {
//         todo_list.splice(i ,1)
//       }
//     }
//     display()
// }
// let eidt_enabled = 0;
// function edit(id) {
//   if (eidt_enabled === 0) {
//     eidt_enabled = 1
//     let edit_div = document.getElementById("edit_todo"+id)


// edit_div.innerHTML = `<input type="text" id="todoupdate${id}">
// <span onclick="updatetask(${id})"><i class="fa-solid fa-arrow-rotate-right"></i></span>
// `
//   }
// }

// function updatetask(id) {
//    edit_div = document.getElementById("edit_todo"+id);
//   let edit_inputs = document.getElementById("todoupdate" + id);
// console.log(edit_inputs.value)
//  for (let i = 0; i < todo_list.length; i++) {
//       if (todo_list[i].id === id) {
//         todo_list.splice(i ,1 ,{task: edit_inputs.value, id: id})
//       }
//     }
//     edit_div.innerHTML = '';
//     display()
//     eidt_enabled = 0
// }

const inputs = document.getElementById("todo_inputs");
const list =document.getElementById("list_container");
let todo_push = [];
let todo_count = 0;

function show_task() {
  if (inputs.value.trim() !== "") {
    todo_push.push({task: inputs.value , id : todo_count++})
  }
  display_list()
  inputs.value= "";
  console.log(todo_push);
}

function display_list(id) {
  let html = '';
  for (let i = 0; i< todo_push.length; i++){

html += `<li class = "todo_item">${todo_push[i].task}
<div id ="edit_todo${todo_push[i].id}"></div>
<div class = "icon">
   <span onclick="edit(${todo_push[i].id})"><i class="fa-solid fa-pen-to-square"></i></span>
    <span onclick="delet(${todo_push[i].id})"><i class="fa-solid fa-trash"></i></span>
    </div>
</li>`
  }; 
  list.innerHTML = html;
}
 
function delet(id) {
  for (let i = 0; i < todo_push.length; i++) {
  if (todo_push[i].id === id) {
    todo_push.splice(i , 1);
  }
  }
  display_list()
};

let eidt_enabled = 0
function edit(id) {
  if (eidt_enabled === 0) {
    eidt_enabled = 1
    let edit_div = document.getElementById("edit_todo"+id);

    edit_div.innerHTML = `<input type="text" id="todoupdate${id}">
 <span onclick="updatetask(${id})"><i class="fa-solid fa-arrow-rotate-right"></i></span>
`
  }
}

function updatetask(id) {
    edit_div = document.getElementById("edit_todo" + id);
  let edit_todo = document.getElementById("todoupdate" + id)
  
  
  for (let i = 0; i < todo_push.length; i++) {
    if (todo_push[i].id === id) {
      
      todo_push.splice(i ,1 , {task :edit_todo.value , id: id})
    }
    
  }
  edit_div.innerHTML = "";
  display_list()
  eidt_enabled = 0;
}
