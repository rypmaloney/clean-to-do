import {btnControl} from './btnControl.js';
import { dateToNumber} from './utility.js';
import { formatDistanceToNow, isToday, isThisWeek} from 'date-fns';
import {displayProjects, displayList} from './display.js'
console.log('if you see me, everything is A O K')



function setLocal() {
    localStorage.setItem('projects', JSON.stringify(projects))
}

//retreive local storage
function populateLocal() {
  projects = JSON.parse(localStorage.getItem("projects"));
  if (projects === null) {
      projects = [
        {
            name: "All",
            description: 'All to-do items. Create a project and add items to populate this list.',
            complete: false,
            current: true,
            list: [],
            
        },
        {
            name: "Today",
            description: 'Tasks due today.',
            complete: false,
            current: false,
            list: [],
            
        },
        {
            name: "This week",
            description: 'Tasks due this week.',
            complete: false,
            current: false,
            list: [],
            
        },
    ]
  }

}





let projects = [
    {
        name: "All",
        description: 'All to-do items. Create a project and add items to populate this list.',
        complete: false,
        current: false,
        list: [],
        
    },
    {
        name: "Today",
        description: 'Tasks due today.',
        complete: false,
        current: false,
        list: [],
        
    },
    {
        name: "This week",
        description: 'Tasks due today.',
        complete: false,
        current: false,
        list: [],
        
    },
]

/*******PROJECT CONTROL******/
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


function populateToday(){
    projects[1].list = []

    for (let i =3; i < projects.length; i++){

            for (let j = 0; j < projects[i].list.length; j++){

                let date = projects[i].list[j].date;
                let split = date.split('-');
                split[1] -= 1;
                let splitNum = [Number(split[0]), Number(split[1]), Number(split[2])];
                
                if (isToday( new Date(splitNum[0], splitNum[1], splitNum[2]))){
                  projects[1].list.push(projects[i].list[j])
                  projects[i].list[j].timeUntil = 'Due today';
    

                }
            }   
    }
} 

function populateThisWeek(){
     projects[2].list = [];

     for (let i =3; i < projects.length; i++){
             for (let j = 0; j < projects[i].list.length; j++){

                 let date = projects[i].list[j].date;
                 let split = date.split('-');
                 split[1] -= 1;
                 let splitNum = [Number(split[0]), Number(split[1]), Number(split[2])];
                
                 if (isThisWeek( new Date(splitNum[0], splitNum[1], splitNum[2]))){
                   projects[2].list.push(projects[i].list[j])
                 }
             }
           
     }

}

function populateAll(){
    projects[0].list = [];
    for (let i = 3; i < projects.length; i++){
        if (projects[i].name !== 'All'){
            for (let j = 0; j < projects[i].list.length; j++)
                projects[0].list.push(projects[i].list[j])
        }
    }
    sortAll()
}

function newProj(){ 
    let form = document.getElementById('projFormContainer');
    let title = form.title.value;
    let description = form.description.value;

    createProject(title, description)
    displayProjects()
    form.reset()
}

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

/*******LIST CONTROL******/
function addNewDo(currentProject, name, priority, date){
    let sortabled = dateToNumber(date);
    let timeUntil;

    if (date == '' ){
        timeUntil = ''
    } else {
     timeUntil = `due in ${formatDateUntil(date)}`
    }
    
    let sortablep = 2;
    if(priority == 'high'){
        sortablep = 0;
    }else if (priority == 'medium'){
        sortablep = 1
    }else{ sortablep =2}

    currentProject.list.push({
        name: name,
        priority: priority,
        priorityMemory: priority,
        projMemory: currentProject.name,
        date: date,
        dateSortable: sortabled,
        prioritySortable: sortablep,
        complete: false,
        timeUntil: timeUntil,
    })
}

function addToList(){
    let form = document.getElementById('newItemForm');
    let currentProject = findCurrentProj();
    let date = form.dueDate.value;

      
    addNewDo(currentProject, form.listItemNew.value, form.priority.value, date);
    currentProject = findCurrentProj();
    populateThisWeek()
    populateToday()
    populateAll()
    displayProjects();
    displayList(currentProject);
    form.reset();
    setLocal()
    return false;
}

function updateListItem(e){
    let indexOfItem = e.target.getAttribute('data');
    let project = findCurrentProj();
    let form = document.getElementById('editItemForm');
    let item = project.list[indexOfItem]
    let date = form.dueDate.value
    let priority = form.priority.value;

    let timeUntil 
    let sortabled = dateToNumber(date)
    
    if (date == '' ){
        timeUntil = ''
    } else {
     timeUntil = `due in ${formatDateUntil(date)}`
    }
   
    let sortablep = 2;
    if(priority == 'high'){
        sortablep = 0;
    }else if (priority == 'medium'){
        sortablep = 1
    }else{ sortablep =2}


    item.prioritySortable = sortablep;
    item.dateSortable = sortabled;
    item.name = form.editName.value;
    item.priority = priority;
    item.date = date;
    item.timeUntil = timeUntil;

    displayList(project);
}

function formatDateUntil(date){
    let split = date.split('-');
    split[1] -= 1;
    let timeUntil = formatDistanceToNow(new Date(split[0], split[1], split[2]),{ addSuffix: true } );

    return timeUntil
}

function completeItem(e){
    let item = e.target.getAttribute('data');
    let project = findCurrentProj();

    if (project.list[item].complete) {
        project.list[item].complete = false;
        project.list[item].prioritySortable = project.list[item].priorityMemory;

     } else {
        project.list[item].complete = true;
        project.list[item].prioritySortable = 3;
        project.list.push(project.list.splice(item, 1)[0]);
     }
    setLocal()
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
    let project = findCurrentProj()

    project.list.sort(function(a, b) {
        return a.prioritySortable - b.prioritySortable})
    project = findCurrentProj()

    console.log(project)
    displayList(project)
}

function sortAll(){
    projects[0].list.sort(function(a, b) {
        return a.prioritySortable - b.prioritySortable})

}

function loadSetup(){
    populateLocal()
    populateThisWeek()
    populateToday()
    populateAll()
    displayProjects()
    let current = findCurrentProj()
    displayList(current)
    btnControl()
}
loadSetup()

export  { sortByDate, sortByPriority, addToList, completeItem,findCurrentProj, changeCurrentProj, projects, updateListItem, newProj, loadSetup};






