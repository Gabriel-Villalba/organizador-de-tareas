
(()=>{  //inmediately invoked function expression IIFE
const btn = document.querySelector("[data-form-btn]")

const createTask = (evento)=>{
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]")
    const value=input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement(`li`);
    task.classList.add("card") //agregando una clase
    input.value = "";
    //backticks
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `
    
  
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML = content ;
    task.appendChild(taskContent);
    list.appendChild(task)
   
};

btn.addEventListener("click" ,createTask)
const checkComplete = ()=>{
    const i = document.createElement("i")
    i.classList.add("far" , "fa-check-square" , "icon");
    i.addEventListener("click" , completeTask )
    return i
}

const completeTask = ()=> {
 const element = event.target;
 element.classList.toggle("fas");//TOOGLE elimina o quita una clase
 element.classList.toggle("completeIcon")//si esta la quita y si no esta la agrega
 element.classList.toggle("far");
}
})();