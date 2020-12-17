var tasks=0;
console.log("Aditya's ToDo List");
var input = document.getElementById('add');
input.addEventListener("keyup", event => {
    if(event.key==='Enter'){
        document.getElementById('addtask').click();
    }
});
function addTask(){
    if(document.getElementById('add').value!=''){
        tasks++;
        var task = document.createElement("div");
        task.innerHTML= document.getElementById('add').value;
        task.id='task';
        var remove = document.createElement('button')
        remove.innerHTML='&#128077;';
        remove.id='remove';
        var edit = document.createElement('button');
        edit.innerHTML = '&#128393;';
        edit.id='edit';
        task.appendChild(remove);
        task.appendChild(edit);
        document.getElementById('add').value='';
        document.getElementById('tasks').appendChild(task);
    }
    else{
        console.log("Aditya's ToDo List")
    }
}