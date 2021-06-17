console.log('if you see me, everything is A O K')

import btnControl from './btnControl.js';
import {removeChildNodes, removeAllButOne} from './utility.js';
import {format, formatDistanceToNow} from 'date-fns';

let todayList = [
    {
        name: 'This is my first to do',
        priority: 'high',
        complete: false, 
        
    },
    {
        name: 'This is my second to do',
        priority: 'medium',
        complete: false, 
        
    },
    {
        name: 'This is my third thing to do',
        priority: 'low',
        complete: false, 
        
    },
    {
        name: 'This is my fourth thing to do',
        priority: 'high',
        complete: false, 
        
    }
]

let projects = [
    {
        name: "All",
        description: 'All to-do items',
        complete: false,
        current: true,
        list: [],
        
    },
    {
        name: "Today",
        description: 'Tasks that need to be completed today',
        complete: false,
        current: false,
        list: [{
            name: 'This is my first toadfasf do',
            priority: 'high',
            date: '2018-08-03',
            complete: false, 
            
            
        },
        {
            name: 'This is my second to do',
            priority: 'medium',
            date: '2018-08-03',
            complete: false, 
            
        },
        {
            name: 'This is my thiasdfasdfrd thing to do',
            priority: 'low',
            date: '2018-08-03',
            complete: false, 
            
        },
        {
            name: 'This is my fourth thing to do',
            priority: 'high',
            date: '2018-08-03',
            complete: false, 
            
        }]
        
    },
    {
        name: "This week",
        description: 'Tasks that need to be completed this week',
        complete: false,
        current: false,
        list: [{
            name: 'This is my first to do',
            priority: 'high',
            date: '2018-08-03',
            complete: false, 
            
        },
        {
            name: 'This is my second to do',
            priority: 'medium',
            date: '2018-08-03',
            complete: false, 
            
        },
        {
            name: 'This is my thirdasfd thing to do',
            priority: 'low',
            date: '2018-08-03',
            complete: false, 
            
        },
        {
            name: 'This is my fourth thing to do',
            priority: 'high',
            date: '2018-08-03',
            complete: false, 
            
        }]
        
    },
]

 
//PROJECTS
const createProject = (name, description) => {
    projects.push(
        {
            name,
            list: [],
            description,
            complete: false,
            current: false,
        }
    )
    {return name, description}
}


function displayProjects(){
    let projectsList = document.getElementById('projects-wrapper');
    removeChildNodes(projectsList)
    for (let i = 0; i < projects.length; i++) {
        let projItem = document.createElement('div');
        projItem.setAttribute('class', 'project');
        projectsList.appendChild(projItem);
        projItem.setAttribute('data', i);
        if (projects[i].current) {projItem.setAttribute('class', 'current-project project')};
        projItem.innerHTML +=
            `<h3>${projects[i].name}</h3>` +
            `<p>${projects[i].list.length} items</p>`;
        if (i === 2) {projItem.style.marginBottom = "30px"}
       projItem.addEventListener('click', (e) => {changeCurrentProj(e)})   
    }
};


function populateAll(){
    projects[0].list = [];
    for (let i =0; i < projects.length; i++){
        if (projects[i].name !== 'All'){
            for (let j = 0; j < projects[i].list.length; j++)
                projects[0].list.push(projects[i].list[j])
        }
    }
}

function newProj(){ 
    let form = document.getElementById('projFormContainer');
    let title = form.title.value;
    let description = form.description.value;

    createProject(title, description)
    displayProjects()
    form.reset()
}


let projSubmitBtn = document.getElementById('submitNewProjBtn');
projSubmitBtn.addEventListener('click', () => newProj())



function changeCurrentProj(e){
    let active = e.target.getAttribute("data");
    console.log(active)
    
    for(let i = 0; i < projects.length; i++){
        projects[i].current = false;
    }

    projects[active].current = true;

    displayProjects()
    displayList(projects[active])
}

function findCurrentProj(){
    for(let i = 0; i < projects.length; i++)
        if (projects[i].current) return projects[i]   
}



//LISTs
function addNewDo(currentProject, name, priority, date){
    currentProject.list.push({
        name: name,
        priority: priority,
        date: date,
        complete: false,
    })
}


function displayList(project) {
    let list = document.getElementById('current-list');
    removeAllButOne(list)

    let titleSpace = document.getElementById('current-project-title');
    titleSpace.innerHTML = 
        `<h2>${project.name}</h2>` + 
        `<p>${project.description}</p>`
    

    let listArray = project.list;

    for (let i = 0; i < listArray.length; i++) {
            let listItem = document.createElement('div');
            let addItem = document.getElementById('new-item');
            listItem.setAttribute('class', 'list-item');
            listItem.setAttribute('data', i);
            list.insertBefore(listItem, addItem);
            let checkBoxMark = ' ';

            if (listArray[i].complete == true){
                listItem.setAttribute('class', 'complete list-item')
                checkBoxMark = "<span style ='font-size: 18px; margin-left: 3px; pointer-events: none;'>&#10004;</span>"
            };

            if (project.name === 'All'){
                addItem = document.getElementById('new-item');
                addItem.classList.add('hide');
                listItem.innerHTML += 
                    `<div class= "priority ${listArray[i].priority}"> </div>` + 
                    `<div class="checkbox" data="${i}">${checkBoxMark}</div>` +
                    `<p class ='listContent'> ${listArray[i].name} </p>` +
                    `<p class='timeUntil'> Due in  ${listArray[i].date} </p>` 
                    

            } else{
                addItem = document.getElementById('new-item');
                addItem.classList.remove('hide');
                listItem.innerHTML += 
                    `<div class= "priority ${listArray[i].priority}"> </div>` + 
                    `<div class="checkbox" data="${i}">${checkBoxMark}</div>`+
                    `<p class= 'listContent'> ${listArray[i].name} </p>` +
                    `<p class='timeUntil'> Due in ${listArray[i].date} </p>` +
                    `<div class="trash"><i class="fa fa-trash-o"></i></div>`
            }
           
        }
        let trash = document.getElementsByClassName('trash')
        for (let i = 0; i < trash.length; i++) {
            trash[i].setAttribute('data', i)
            trash[i].addEventListener('click', (e) => deleteItem(e, project));
        }
        addCheckListener()
}


function addToList(){
    let form = document.getElementById('newItemForm');
    let currentProject = findCurrentProj();

    let date = form.dueDate.value.split('-');
    date[0] = parseInt(date[0]);
    date[1] = parseInt(date[1]);
    date[1]-= 1;
    date[2] = parseInt(date[2]);
    let formattedDate = format(new Date(date[0],date[1],date[2]),  "MMMM do" );

    let timeUntil = formatDistanceToNow(new Date(date[0], date[1], date[2]),{ addSuffix: true } )
    
    addNewDo(currentProject, form.listItemNew.value, form.priority.value, timeUntil);
    currentProject = findCurrentProj();
    populateAll()
    displayProjects();
    displayList(currentProject);
    form.reset();
}


//perhaps too tightly tied to displayList
function deleteItem(e, project){
    console.log(e.target.getAttribute('data'))
    let item = e.target.getAttribute('data');
    project.list.splice(item,1)
    populateAll();
    displayList(project);

}



function completeItem(e){
    console.log(e.target.getAttribute('data'))
    let item = e.target.getAttribute('data');
    let project = findCurrentProj();

    project.list[item].complete ? project.list[item].complete = false : project.list[item].complete = true;
    populateAll();
    displayList(project);
}

















populateAll()
displayProjects()
displayList(projects[0])
btnControl()
addCheckListener()


function addCheckListener(){
    let boxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', (e) => completeItem(e))
    }
}

let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click',()=> addToList())





