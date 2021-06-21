
import { displayEdit } from "./display.js";
import {sortByDate, sortByPriority, addToList, completeItem, updateListItem, newProj} from "./index.js"



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

    let aboutBtn = document.getElementById('question');
    aboutBtn.addEventListener('click', ()=> openModal())

    let closeModalBtn = document.getElementById('closeModal');
    closeModalBtn.addEventListener('click', () => closeModal())

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





function openModal(){
    let about = document.getElementById('aboutModal');

    about.style.display ='block';

    window.onclick = function(event) {
        if (event.target == about) {
          about.style.display = "none";
        }
      }
}


function closeModal(){
    let about = document.getElementById('aboutModal');
        about.style.display = "none";
}

function toggleItemForm(){
    disableEdit()

    let add = document.getElementById('add');
    let form = document.getElementById('newItemForm');

    add.classList.toggle('hide');
    form.classList.toggle('hide');
}

function toggleProjForm(){
    let newProjSection = document.getElementById('projectForm');
    newProjSection.classList.toggle('form-hide');

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


export  {btnControl, listListener, editListener, disableEdit}