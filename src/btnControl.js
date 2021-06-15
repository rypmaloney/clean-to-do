
function btnControl(){
let add = document.getElementById('add');
add.addEventListener('click',()=>toggleItemForm())

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

export default btnControl