var tasks=0;
var toggle=0;
console.log("Aditya's ToDo List");
var input = document.getElementById('complete-before');
input.addEventListener("keyup", event => {
    if(event.key==='Enter'){
        document.getElementById('addtask').click();
    }
});
function addTask(){
    if(document.getElementById('add').value!='' && document.getElementById('complete-before').value!=''){
        tasks++;

        var task = document.createElement("div");
        task.innerHTML= tasks+". "+document.getElementById('add').value;
        task.className='task';
        task.id=('task'+tasks).toString();
        var tas=task.id;
        
        var time = document.createElement('span');
        time.innerHTML = document.getElementById('complete-before').value;
        time.id='comptd';
        time.className='comptd';

        var d = new Date();
        var date = document.createElement('span');
        date.className='date';
        date.innerHTML = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
        date.style.fontSize='15px';
        
        var remove = document.createElement('button')
        remove.innerHTML='&#128077;';
        remove.className='remove';
        remove.id=('remove'+tasks).toString();
        var rem=remove.id;

        var edit = document.createElement('button');
        edit.innerHTML = '&#128393;';
        edit.className='edit';
        edit.id=('edit'+tasks).toString();
        var edi=edit.id;
        
        task.appendChild(remove);
        task.appendChild(edit);
        task.appendChild(date);
        task.appendChild(time);
        if(toggle==1){
            var star = document.createElement('button');
            star.innerHTML = String.fromCharCode(9733);
            star.style.color='rgb(230,184,0)';
            task.appendChild(star);
            star.id='star';
            star.className='star';
        }
        document.getElementById('complete-before').value='';
        document.getElementById('add').value='';
        document.getElementById('tasks').appendChild(task);
    
        document.getElementById('imp').style.color='rgb(0,0,0)';
        document.getElementById('imp').innerHTML=String.fromCharCode(9734);
        toggle=0;
    }
    else{
        console.log("Aditya's ToDo List")
    }
}
function setImportance(){
    if(toggle===0){
        document.getElementById('imp').innerHTML=String.fromCharCode(9733);
        document.getElementById('imp').style.color='rgb(230, 184, 0)';
        toggle=1;
    }
    else{
        document.getElementById('imp').innerHTML=String.fromCharCode(9734);
        document.getElementById('imp').style.color='rgb(0,0,0)';
        toggle=0;
    }
}