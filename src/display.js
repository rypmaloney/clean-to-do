import { removeChildNodes, removeAllButOne } from "./utility";

import {changeCurrentProj, projects} from './index.js'

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
            listItem.setAttribute('data', i);
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
                cont.textContent = listArray[i].name;
                listItem.appendChild(cont);

                let tuntil = document.createElement('p');
                tuntil.setAttribute('class', 'timeUntil');
                tuntil.textContent = `due in ${listArray[i].timeUntil}`;
                listItem.appendChild(tuntil);

                let pri =  document.createElement('div');
                pri.setAttribute('class', `priority ${listArray[i].priority}`);
                listItem.appendChild(pri);



                if (project.name === 'All'){
                    addItem = document.getElementById('new-item');
                    addItem.classList.add('hide');
    
    
                } else{
                    addItem = document.getElementById('new-item');
                    addItem.classList.remove('hide');}

          
                // listItem.innerHTML += 
                //     `<div class= "priority ${listArray[i].priority}"> </div>` + 
                //     `<div class="checkbox" data="${i}">${checkBoxMark}</div>`+
                //     `<p class= 'listContent'> ${listArray[i].name} </p>` +
                //     `<p class='timeUntil'> Due in ${listArray[i].timeUntil} </p>` +
                //     `<div class="trash"><i class="fa fa-trash-o"></i></div>`
            
           
        }   
    listListener()
}






export  {displayList, displayProjects}