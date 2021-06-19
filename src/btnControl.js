
import { displayList, displayEdit } from "./display.js";
import {findCurrentProj, sortByDate, sortByPriority, addToList, completeItem, updateListItem, newProj, projects} from "./index.js"



function btnControl(){
    let projSubmitBtn = document.getElementById('submitNewProjBtn');
    projSubmitBtn.addEventListener('click', () => newProj())

    let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click', function(){
        addToList(), 
        toggleItemForm()
        enableEdit()
        
     });
    let add = document.getElementById('add');
    add.addEventListener('click',()=> toggleItemForm())

    let addProj = document.getElementById('addProj');
    addProj.addEventListener('click', () => toggleProjForm());

    let submitNewProjBtn = document.getElementById('submitNewProjBtn');
    submitNewProjBtn.addEventListener('click', () => toggleProjForm());

}

function listListener() {
    let sortByDateBtn = document.getElementById('dateSort')
    sortByDateBtn.addEventListener('click', () => sortByDate())

    let sortByPriorityBtn = document.getElementById('prioritySort')
    sortByPriorityBtn.addEventListener('click', () => sortByPriority())

    let boxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', (e) => completeItem(e))
    }

    let content = document.getElementsByClassName('listContent'); 
    for (let i = 0; i < content.length; i++){
        content[i].addEventListener('click', (e) => displayEdit(e))
    }
}

function editListener(){
    let submit = document.getElementById('submitEditBtn')
    submit.addEventListener('click', (e) => updateListItem(e))
}















function toggleItemForm(){
    disableEdit()
    let newItemSection = document.getElementById('new-item');
    let add = document.getElementById('add');
    let form = document.getElementById('newItemForm');

    add.classList.toggle('hide');
    form.classList.toggle('hide');
}

function toggleProjForm(){
    
    let newProjSection = document.getElementById('projectForm');
    let add = document.getElementById('addProj');

    newProjSection.classList.toggle('form-hide');

}


function addItemTransition(){
    let newItem = document.getElementById('new-item');
    let title = document.getElementById('add');
    newItem.removeChild(title);

    form = document.createElement('form');
    form.innerHTML= "<input type= 'text' id='listItemNew' name='listItemNew'>";
    newItem.appendChild(form);

}

function disableEdit(){
    let content = document.getElementsByClassName('listContent');
    for (let i = 0; i < content.length; i++){
        content[i].style = 'pointer-events : none';
    }
}

function enableEdit(){
    let content = document.getElementsByClassName('listContent');
    for (let i = 0; i < content.length; i++){
        content[i].style = 'pointer-events : all';
    }
}

function cancelEdit(){
    let form = document.getElementById('editItemForm');
    let project = findCurrentProj()
    form.stopPropagation();
    document.body.addEventListener('click', () => displayList(project))

    
}



export  {btnControl, listListener, editListener, disableEdit}