
function btnControl(){
    let add = document.getElementById('add');
    add.addEventListener('click',()=> toggleItemForm())

    let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click', () => toggleItemForm());

    let addProj = document.getElementById('addProj');
    addProj.addEventListener('click', () => toggleProjForm());

    let submitNewProjBtn = document.getElementById('submitNewProjBtn');
    submitNewProjBtn.addEventListener('click', () => toggleProjForm());
}

function toggleItemForm(){
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


function addToList(){
    let form = document.getElementById('newItemForm');
    let currentProject = findCurrentProj();
addNewDo(currentProject, form.listItemNew.value, form.priority.value)
}




export default btnControl