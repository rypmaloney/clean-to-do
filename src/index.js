console.log('if you see me, everything is A O K')


import btnControl from './btnControl.js';
import {removeChildNodes, removeAllButOne} from './utility.js';
import {format, formatDistanceToNow} from 'date-fns';



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
            date: '2018-10-03',
            dateSortable: 0,
            prioritySortable: 0,
            timeUntil: 'one day',
            complete: false, 
            
            
        },
        {
            name: 'This is my second to do',
            priority: 'medium',
            date: '2018-10-29',
            timeUntil: 'one day',
            dateSortable: 0,
            prioritySortable: 1,
            complete: false, 
            
        },
        {
            name: 'This is my thiasdfasdfrd thing to do',
            priority: 'low',
            date: '2028-08-03',
            dateSortable: 0,
            prioritySortable: 2,
            timeUntil: 'one day',
            complete: false, 
            
        },
        {
            name: 'This is my fourth thing to do',
            priority: 'high',
            date: '2021-08-03',
            dateSortable: 0,
            prioritySortable: 0,
            timeUntil: 'one day',
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
            date: '2019-03-03',
            dateSortable: 20331002,
            prioritySortable: 0,
            timeUntil: 'one day',
            complete: false, 
            
        },
        {
            name: 'This is my second to do',
            priority: 'medium',
            date: '2018-08-03',
            dateSortable: 20230310,
            prioritySortable: 1,
            timeUntil: 'one day',
            complete: false, 
            
        },
        {
            name: 'This is my thirdasfd thing to do',
            priority: 'low',
            date: '2021-06-07',
            dateSortable: 20221201,
            prioritySortable: 2,
            timeUntil: 'one day',
            complete: false, 
            
        },
        {
            name: 'This is my fourth thing to do',
            priority: 'high',
            date: '2018-08-03',
            dateSortable: 20211202,
            prioritySortable: 0,
            timeUntil: 'one day',
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
    let sortabled = dateToNumber(date)
    let split = date.split('-');
    split[1] -= 1;
    let timeUntil = formatDistanceToNow(new Date(split[0], split[1], split[2]),{ addSuffix: true } );
    
    let sortablep = 2;
    if(priority == 'high'){
        sortablep = 0;
    }else if (priority == 'medium'){
        sortablep = 1
    }else{ sortablep =2}


    currentProject.list.push({
        name: name,
        priority: priority,
        date: date,
        dateSortable: sortabled,
        prioritySortable: sortablep,
        complete: false,
        timeUntil: timeUntil,
    })
}


function displayList(project) {
    let list = document.getElementById('current-list');
    removeAllButOne(list)

    let titleSpace = document.getElementById('current-project-title');
    titleSpace.innerHTML = 
        `<h2>${project.name}</h2>` + 
        `<p>${project.description}</p>` +
        `<button id="dateSort">Sort by Date</button>` +
        `<button id="prioritySort">Sort by Priority</button>`
    

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
                    `<p class='timeUntil'> Due in  ${listArray[i].timeUntil} </p>` 
                    

            } else{
                addItem = document.getElementById('new-item');
                addItem.classList.remove('hide');
                listItem.innerHTML += 
                    `<div class= "priority ${listArray[i].priority}"> </div>` + 
                    `<div class="checkbox" data="${i}">${checkBoxMark}</div>`+
                    `<p class= 'listContent'> ${listArray[i].name} </p>` +
                    `<p class='timeUntil'> Due in ${listArray[i].timeUntil} </p>` +
                    `<div class="trash"><i class="fa fa-trash-o"></i></div>`
            }
           
        }
        
        addCheckListener()
        btnControl()
}


function addToList(){
    let form = document.getElementById('newItemForm');
    let currentProject = findCurrentProj();

    let date = form.dueDate.value
    
    addNewDo(currentProject, form.listItemNew.value, form.priority.value, date);
    currentProject = findCurrentProj();

    populateAll()
    displayProjects();
    displayList(currentProject);
    form.reset();
    btnControl()

}







function completeItem(e){
    console.log(e.target.getAttribute('data'))
    let item = e.target.getAttribute('data');
    let project = findCurrentProj();

    project.list[item].complete ? project.list[item].complete = false : project.list[item].complete = true;

    populateAll();
    displayList(project);
}






function sortByDate(){
    console.log('running')

    let project = findCurrentProj()
    //sort Array
    project.list.sort(function(a, b) {
        return a.dateSortable - b.dateSortable})
    project = findCurrentProj()
    displayList(project)


}

function sortByPriority(){
    console.log('sort priority')

    let project = findCurrentProj()
    //sort Array
    project.list.sort(function(a, b) {
        return a.prioritySortable - b.prioritySortable})
    project = findCurrentProj()

    console.log(project)
    displayList(project)
}




function dateToNumber(dateString){
    let date = dateString.split('-');
     return Number(date[0]+date[1]+date[2]);
 
 }



function loadSetup(){
    populateAll()
    displayProjects()
    displayList(projects[0])
    btnControl()
    addCheckListener()
}
loadSetup()

function addCheckListener(){
    let boxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', (e) => completeItem(e))
    }
}

let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click',()=> addToList())




export  {loadSetup, sortByDate, sortByPriority};
