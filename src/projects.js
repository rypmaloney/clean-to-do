import {removeChildNodes, removeAllButOne} from './utility.js';
import {deleteItem, addToList, displayList, addNewDo} from './lists.js'


let projects = [
    {
        name: "Today",
        description: 'Tasks that need to be completed today',
        complete: false,
        current: false,
        list: [{
            name: 'This is my first toadfasf do',
            priority: 'high',
            complete: false, 
            
            
        },
        {
            name: 'This is my second to do',
            priority: 'medium',
            complete: false, 
            
        },
        {
            name: 'This is my thiasdfasdfrd thing to do',
            priority: 'low',
            complete: false, 
            
        },
        {
            name: 'This is my fourth thing to do',
            priority: 'high',
            complete: false, 
            
        }]
        
    },
    {
        name: "This week",
        description: 'Tasks that need to be completed this week',
        complete: false,
        current: true,
        list: [{
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
            name: 'This is my thirdasfd thing to do',
            priority: 'low',
            complete: false, 
            
        },
        {
            name: 'This is my fourth thing to do',
            priority: 'high',
            complete: false, 
            
        }]
        
    },
]

 

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
            
       projItem.addEventListener('click', (e) => {changeCurrentProj(e)})   
    }
};


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

export {projects, displayProjects, createProject, newProj, changeCurrentProj, findCurrentProj} 