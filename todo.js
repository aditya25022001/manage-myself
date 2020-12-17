var tasks=0;
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
        var remove = document.createElement('button');
        remove.innerHTML='Done';
        remove.id='remove';
    ;    var edit = document.createElement('button');
        edit.innerHTML = 'Edit';
        edit.id='edit';
        task.appendChild(edit);
        task.appendChild(remove);
        document.getElementById('add').value='';
        document.getElementById('tasks').appendChild(task);
    }
    else{
        console.log("Aditya's ToDo List")
    }
}
function setStyle(ident){
    console.log(ident);
    document.getElementById(ident).style.float='left';
}