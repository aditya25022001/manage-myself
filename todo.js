console.log('Authentication and backend due to learn');
document.onclick = event =>{
    var el = event.target;
    var parent = el.parentNode.id;
    if(el.className == 'remove' && el.nodeName=="BUTTON"){
        doneTaskt(parent);
    }
    if(el.className == 'edit' && el.nodeName == "BUTTON"){
        editTask(parent);
    }
    if(el.className == 'ok' && el.nodeName == "BUTTON"){
        edited(parent);
    }
}
var listCompleted=[];
var tasks=0;
var toggleStar=0;
var toggleEdit=0;
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
        time.innerHTML ="Due : " + document.getElementById('complete-before').value;
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
        if(toggleStar==1){
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
        toggleStar=0;
    }
    else{
        console.log("Aditya's ToDo List")
    }
}
function setImportance(){
    if(toggleStar===0){
        document.getElementById('imp').innerHTML=String.fromCharCode(9733);
        document.getElementById('imp').style.color='rgb(230, 184, 0)';
        toggleStar=1;
    }
    else{
        document.getElementById('imp').innerHTML=String.fromCharCode(9734);
        document.getElementById('imp').style.color='rgb(0,0,0)';
        toggleStar=0;
    }
}
function doneTaskt(parentId){
    if(listCompleted.includes(parentId)==false){
        var time1 = new Date(); 
        document.getElementById(parentId).style.color='rgb(146,141,141)';
        document.getElementById(parentId).childNodes[1].innerHTML='&#10004;';
        var before = document.getElementById(parentId).childNodes[4].innerHTML;
        document.getElementById(parentId).childNodes[1].disabled='true';
        document.getElementById(parentId).childNodes[2].disabled='true';
        document.getElementById(parentId).childNodes[5].disabled='true';
        document.getElementById(parentId).childNodes[4].innerHTML='Done :'+time1.getHours()+":"+time1.getMinutes()+"   "+before;
        listCompleted.push(parentId);
    }
}
function editTask(parentId){
    if(toggleEdit==0){
        var ok = document.createElement("button");
        ok.innerHTML="OK";
        ok.className='ok';
        ok.id='ok'
        document.getElementById(parentId).appendChild(ok);
        document.getElementById(parentId).contentEditable='true';
        document.getElementById(parentId).childNodes[3].contentEditable='false';    
        document.getElementById(parentId).childNodes[1].contentEditable='false';
        document.getElementById(parentId).childNodes[2].contentEditable='false';
        document.getElementById(parentId).childNodes[5].contentEditable='false';
        document.getElementById('add').disabled='true';
        document.getElementById('complete-before').disabled='true';
        document.getElementById(parentId).childNodes[1].disabled='true';
        toggleEdit=1;
    }
}
function edited(parentId){
    var child = document.getElementById('ok');
    document.getElementById(parentId).removeChild(child);
    document.getElementById(parentId).contentEditable='false';
    toggleEdit=0;
}