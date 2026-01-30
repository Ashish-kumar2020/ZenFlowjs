console.log("Zenflow SideNavBar loaded");

const addtaskbutton = document.getElementById("add-task-button");
const todoinput = document.getElementById("todo-input");
const tododListContainer = document.getElementById("todo-list");
const activeTask = document.getElementById("active-Task");
const activeTaskContainer = document.getElementById("activeTaskContainer");
const leftTask = document.querySelector(".left-task");
const quoteArea = document.querySelector(".quote-area");
const authorName = document.querySelector(".author-name");


//You have 0 tasks waiting for completion
let todoCount = 0;
addtaskbutton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(todoinput.value);

  todoCount += 1;
  leftTask.innerText = todoCount;
  let newTodo = `<div class="todo-list-data group flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all hover:border-indigo-200 dark:hover:border-indigo-900 ${todoCount ? 'opacity-50' : '' }">
    <button
      data-id="${todoinput.value}"
      class="toggle-todo w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all  'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 dark:border-slate-600 hover:border-indigo-500'}"
    >
      <i class="fas fa-check text-xs"></i>
    </button>
    <span class="flex-1 font-medium dark:text-white ">
      ${todoinput.value}
    </span>
    <button
    
      data-id="${todoinput.value}"
      class="delete-todo p-2 text-slate-300 hover:text-rose-500 transition-colors opacity-100 group-hover:opacity-100"
    >
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>`

    tododListContainer.insertAdjacentHTML("beforeend", newTodo);
    activeTask.innerText = `You have ${todoCount} tasks waiting for completion`; 
    activeTaskContainer.append(activeTask);
    todoinput.value = "";  
    
});

tododListContainer.addEventListener("click", function (e){
    const deleteBtn = e.target.closest(".delete-todo");
    if(!deleteBtn) return;

    const todoItem = deleteBtn.closest("div");
    todoItem.remove();
    
     leftTask.innerText -= todoCount;
});

tododListContainer.addEventListener("click", function (e){
    const markAsDone = e.target.closest(".toggle-todo");
    if(!markAsDone) return;
    console.log("Marking as done", markAsDone);
    const markedTodoItem = markAsDone.closest("div");
    markedTodoItem.style.textDecoration = "line-through";

    
  
    todoCount -= 1;
      activeTask.innerText = `You have ${todoCount} tasks waiting for completion`;

});


// Fetch Quote from API
//https://dummyjson.com/quotes


async function fetchQuote(url){
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        console.log("Fetched data : ",data.quotes[27]);
        quoteArea.textContent = `${data.quotes[27].quote}`;
        authorName.textContent = `- ${data.quotes[27].author}`;
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

fetchQuote("https://dummyjson.com/quotes")