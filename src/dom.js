const dropMenu = document.querySelector('.drop-menu');
const listMenu = document.querySelector('.list-menu');
const btnAddTask  = document.querySelector('.new-btn');
const taskForm  = document.querySelector('.add-task');
const formHolder = document.querySelector('.form-place');
// open form pop up
btnAddTask.addEventListener('click', createForm);

function createForm(){
  btnAddTask.classList.toggle('hidden');
  const form = `
    <form class="add-task">
       <button type="button" class="close-btn">X</button>
       <input name="name" id="name" class="input" type="text"  placeholder="task name" required data-name>
       <input name="description" id="input" class="input" type="text"  placeholder="task description" required data-description>
       <input name="date" id="date" class="input" type="date"  required data-date>
       <fieldset>
          <legend>Task Priority:</legend>
          <div>
             <input name="priority" id="low" class="input" type="radio"  value="low">
             <label for="low">Low</label>
          </div>
          <div>
             <input name="priority" id="medium" class="input" type="radio"  value="medium">
             <label for="medium">Medium</label>
          </div>
          <div>
             <input name="priority" id="high" class="input" type="radio"  value="high">
             <label for="high">High</label>
          </div>
       </fieldset>
       <button type="submit">Add task</button>
    </form>`;

formHolder.innerHTML = form;
const btnCloseTask = document.querySelector('.close-btn');

btnCloseTask.addEventListener('click', closeForm);
}



function closeForm() {
    formHolder.innerHTML = "";
    btnAddTask.classList.toggle('hidden');
    
}


dropMenu.addEventListener('click', hideMenu);

function hideMenu() {
    listMenu.classList.toggle('hidden');
}