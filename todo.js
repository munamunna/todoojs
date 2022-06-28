//selectors
const todoButton=document.querySelector('button')
const todoList=document.querySelector('ul')
const todoinput=document.querySelector('input')
//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//function
function addTodo(e){
    e.preventDefault();
    //prevent form from submitting
    
    
   
    //Todo Div
    const TodoDiv=document.createElement('div');
    TodoDiv.classList.add("todo");

    //create LI
    const newTodo=document.createElement('li');
    newTodo.innerText=todoinput.value;
    newTodo.classList.add('todo-item');
    TodoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn")
    TodoDiv.appendChild(completedButton);

    //TRASH BUTTON
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn")
    TodoDiv.appendChild(trashButton);
    
    //APPEND TO LIST
    todoList.appendChild(TodoDiv);

    //Clear todo input value
    todoinput.value="";

   


//DELETE TODO

}function deleteCheck(e){
   const item=e.target;
   if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
       
       
       
           todo.remove();
      
       
       
       
       
       
   }


//CHECK MARK
if(item.classList[0]==="complete-btn"){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
}}
