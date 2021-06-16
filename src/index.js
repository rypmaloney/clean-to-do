console.log('if you see me, everything is A O K')

import btnControl from './btnControl.js';
import {projects, displayProjects, createProject, newProj, changeCurrentProj, findCurrentProj}  from './projects.js';

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















let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click',()=> addToList())





displayProjects()
btnControl()

