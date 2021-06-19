import { removeChildNodes, removeAllButOne } from "./utility";

import {changeCurrentProj, findCurrentProj, projects} from './index.js'

import { listListener } from "./btnControl";


function displayProjects(){
    let projectsList = document.getElementById('projects-wrapper');
    removeChildNodes(projectsList)
    for (let i = 0; i < projects.length; i++) {
        let projItem = document.createElement('div');
        projItem.setAttribute('class', 'project');
        projectsList.appendChild(projItem);
        projItem.setAttribute('data', i);

        if (projects[i].current) {projItem.setAttribute('class', 'current-project project')};

        let name = document.createElement('h3');
        name.textContent = `${projects[i].name}`;

        let numberOfItems = document.createElement('p');
        numberOfItems.textContent = `${projects[i].list.length} items`;

        projItem.appendChild(name);
        projItem.appendChild(numberOfItems);

        if (i === 2) {projItem.style.marginBottom = "30px"}
       projItem.addEventListener('click', (e) => {changeCurrentProj(e)})  
     
            // HIDE 'ADD TO LIST'
           let current = findCurrentProj()
           if (current == projects[0] || current == projects[1] || current == projects[2]){
               let addItem = document.getElementById('new-item');
                addItem.setAttribute('class', 'hide');
            } else{
                let addItem = document.getElementById('new-item');
                addItem.classList.remove('hide');
            }
    
        }

};





function displayList(project) {
    let list = document.getElementById('current-list');
    removeAllButOne(list)
    // CREATE HEADER FOR LIST
    let titleSpace = document.getElementById('current-project-title');
    removeChildNodes(titleSpace);
    
    let name = document.createElement('h2')
    name.textContent = project.name;
    titleSpace.appendChild(name)

    let desc = document.createElement('p');
    desc.textContent = project.description;
    titleSpace.appendChild(desc);

    let sortd = document.createElement('button');
    sortd.setAttribute('id', 'dateSort');
    sortd.textContent  = 'Sort by date';
    titleSpace.appendChild(sortd);

    let sortp = document.createElement('button');
    sortp.setAttribute('id', 'prioritySort');
    sortp.textContent = 'Sort by priority';
    titleSpace.appendChild(sortp);




    

    //CREATE LIST ITSELF 
    let listArray = project.list;

    for (let i = 0; i < listArray.length; i++) {
            let listItem = document.createElement('div');
            let addItem = document.getElementById('new-item');
            listItem.setAttribute('class', 'list-item');
            listItem.setAttribute('data-name', i);
            list.insertBefore(listItem, addItem);
            let checkBoxMark = ' ';

            if (listArray[i].complete == true){
                listItem.setAttribute('class', 'complete list-item')
                checkBoxMark = "<span style ='font-size: 18px; margin-left: 3px; pointer-events: none;'>&#10004;</span>"
            };



                let box = document.createElement('div');
                box.setAttribute('class', 'checkbox');
                box.setAttribute('data', i);
                listItem.appendChild(box);

                let cont = document.createElement('p');
                cont.setAttribute('class', 'listContent');
                cont.setAttribute('data', i);
                cont.textContent = listArray[i].name;
                listItem.appendChild(cont);

                let current = findCurrentProj()
                if (current == projects[0] || current == projects[1] || current == projects[2]){
                    let proj = document.createElement('p');
                    proj.setAttribute('class', 'proj');
                    proj.textContent = listArray[i].projMemory;
                    listItem.appendChild(proj);
                }


                let tuntil = document.createElement('p');
                tuntil.setAttribute('class', 'timeUntil');
                tuntil.textContent = listArray[i].timeUntil;
                listItem.appendChild(tuntil);

            

                let pri =  document.createElement('div');
                pri.setAttribute('class', `priority ${listArray[i].priority}`);
                listItem.appendChild(pri);

                   
        }   
    listListener()
}






export  {displayList, displayProjects}