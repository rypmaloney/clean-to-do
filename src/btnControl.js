import { sub } from "date-fns";
import {deleteItem, findCurrentProj, sortByDate, sortByPriority, addToList, completeItem, projects, updateListItem} from "./index.js"
import { removeChildNodes } from "./utility.js";


function btnControl(){
    
    let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click', function(){
        addToList(), 
        toggleItemForm()
        
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
        content[i].addEventListener('click', (e) => openEdit(e))
    }
}

function editListener(){
    let submit = document.getElementById('submitEditBtn')
    submit.addEventListener('click', (e) => updateListItem(e))
}















function toggleItemForm(){
    console.log('trying to toggle')
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


function openEdit(e){
    let content = document.getElementsByClassName('listContent');
    for (let i = 0; i < content.length; i++){
        content[i].style = 'pointer-events : none';
    }


    let project = findCurrentProj()
    console.log(e.target.getAttribute('data'))
    let indexOfItem = e.target.getAttribute('data');

    let item = document.querySelector(`[data-name=${CSS.escape(indexOfItem)}]`);

    removeChildNodes(item);
    let box = document.createElement('div');
    box.setAttribute('class', 'checkbox');
    item.appendChild(box);

    let editForm = document.createElement('form');
     //editForm.setAttribute('class', 'hide');
    editForm.setAttribute('id', 'editItemForm');
    editForm.setAttribute('onSubmit', 'return false;')
    item.appendChild(editForm);
        
    let editText = document.createElement('input');
    editText.setAttribute('type', 'text');
    editText.setAttribute('class', 'listItemEdit')
    editText.setAttribute('value',  project.list[indexOfItem].name);
    editText.setAttribute('name', 'editName');
    editText.autofocus = true;
    editForm.appendChild(editText)

    let editDate = document.createElement('input');
    editDate.setAttribute('type', 'date');
    editDate.setAttribute('name', 'dueDate');
    editDate.setAttribute('id', 'editDueDate');
    editForm.appendChild(editDate);

    let editPriority = document.createElement('select');
    editPriority.setAttribute('id', 'editSelect');
    editPriority.setAttribute('name', 'priority');

        let low = document.createElement('option');
        low.textContent = "Low";
        low.setAttribute('value', "low");
        editPriority.appendChild(low);

        let med = document.createElement('option');
        med.textContent = "Medium";
        med.setAttribute('value', "medium");
        editPriority.appendChild(med);

        let hig = document.createElement('option');
        hig.textContent = "High";
        hig.setAttribute('value', "high");
        editPriority.appendChild(hig);

    editForm.appendChild(editPriority)

    let subBtn = document.createElement('button');
    subBtn.setAttribute('type', 'submit');
    subBtn.setAttribute('value', 'submit');
    subBtn.setAttribute('id', 'submitEditBtn' )
    subBtn.setAttribute('class', 'hide');
    subBtn.setAttribute('data', indexOfItem);
    editForm.appendChild(subBtn);

    editListener()
}





//     <form id="newItemForm" class = 'hide'>
            //   <input type="text" id="newItemInput" name="listItemNew">
            //     <div id='item-form-controls'>
            //       <input type="date" id="dueDate" name="dueDate">
            //       <select id="select" name="priority">
            //         <option value="low">Low Priority</option>
            //         <option value="medium">Medium</option>
            //         <option value="high">High</option>
            //       </select>
            //       <button type='button' id='submitNewItemBtn'>Enter</button>
            //   </div>
            // </form>

export  {btnControl, listListener, editListener}