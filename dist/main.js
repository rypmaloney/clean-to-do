/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/btnControl.js":
/*!***************************!*\
  !*** ./src/btnControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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


// function addToList(){
//     let form = document.getElementById('newItemForm');
//     let currentProject = findCurrentProj();
//     let date = `'${form.dueDate.value}'`
//     addNewDo(currentProject, form.listItemNew.value, form.priority.value, form.dueDate.value)
// }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btnControl);

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeChildNodes": () => (/* binding */ removeChildNodes),
/* harmony export */   "removeAllButOne": () => (/* binding */ removeAllButOne)
/* harmony export */ });
function removeChildNodes(parent) {
    while (parent.children[0]) {
        parent.removeChild(parent.children[0]);
    }
}

function removeAllButOne(parent) {
    while (parent.children[1]) {
        parent.removeChild(parent.children[0]);
    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _btnControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnControl.js */ "./src/btnControl.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
console.log('if you see me, everything is A O K')

;


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
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.removeChildNodes)(projectsList)
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
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_1__.removeAllButOne)(list)

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
                    `<p> ${listArray[i].name} </p>` +
                    `<p> ${listArray[i].date} </p>` 
                    

            } else{
                addItem = document.getElementById('new-item');
                addItem.classList.remove('hide');
                listItem.innerHTML += 
                    `<div class= "priority ${listArray[i].priority}"> </div>` + 
                    `<div class="checkbox" data="${i}">${checkBoxMark}</div>`+
                    `<p> ${listArray[i].name} </p>` +
                    `<p> ${listArray[i].date} </p>` +
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
    addNewDo(currentProject, form.listItemNew.value, form.priority.value, form.dueDate.value);
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
;(0,_btnControl_js__WEBPACK_IMPORTED_MODULE_0__.default)()
addCheckListener()


function addCheckListener(){
    let boxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', (e) => completeItem(e))
    }
}

let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click',()=> addToList())






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9idG5Db250cm9sLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7Ozs7O0FBS0EsaUVBQWUsVTs7Ozs7Ozs7Ozs7Ozs7O0FDeERmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEM7Ozs7Ozs7VUNaNUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUEsQ0FBeUM7QUFDc0I7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSw2REFBZ0I7QUFDcEIsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEMsa0JBQWtCLHdCQUF3QjtBQUMxQyxzQkFBc0I7QUFDdEIsa0RBQWtELHFCQUFxQjtBQUN2RTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSw0REFBZTs7QUFFbkI7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixjQUFjLG9CQUFvQjs7O0FBR2xDOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsa0JBQWtCLHNCQUFzQixVQUFVO0FBQ2hIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjtBQUNuRSxtREFBbUQsRUFBRSxJQUFJLGFBQWE7QUFDdEUsMkJBQTJCLGtCQUFrQjtBQUM3QywyQkFBMkIsa0JBQWtCOzs7QUFHN0MsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7QUFDbkUsbURBQW1ELEVBQUUsSUFBSSxhQUFhO0FBQ3RFLDJCQUEyQixrQkFBa0I7QUFDN0MsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0Esd0RBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBidG5Db250cm9sKCl7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4gdG9nZ2xlSXRlbUZvcm0oKSlcblxuICAgIGxldCBzdWJtaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld0l0ZW1CdG4nKTtcbiAgICBzdWJtaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlSXRlbUZvcm0oKSk7XG5cbiAgICBsZXQgYWRkUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qJyk7XG4gICAgYWRkUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVByb2pGb3JtKCkpO1xuXG4gICAgbGV0IHN1Ym1pdE5ld1Byb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xuICAgIHN1Ym1pdE5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQcm9qRm9ybSgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSXRlbUZvcm0oKXtcbiAgICBsZXQgbmV3SXRlbVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Gb3JtJyk7XG5cbiAgICBhZGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qRm9ybSgpe1xuICAgIGxldCBuZXdQcm9qU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybScpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvaicpO1xuXG4gICAgbmV3UHJvalNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1oaWRlJyk7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRJdGVtVHJhbnNpdGlvbigpe1xuICAgIGxldCBuZXdJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIG5ld0l0ZW0ucmVtb3ZlQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTD0gXCI8aW5wdXQgdHlwZT0gJ3RleHQnIGlkPSdsaXN0SXRlbU5ldycgbmFtZT0nbGlzdEl0ZW1OZXcnPlwiO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbn1cblxuXG4vLyBmdW5jdGlvbiBhZGRUb0xpc3QoKXtcbi8vICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuLy8gICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuLy8gICAgIGxldCBkYXRlID0gYCcke2Zvcm0uZHVlRGF0ZS52YWx1ZX0nYFxuLy8gICAgIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBmb3JtLmxpc3RJdGVtTmV3LnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlLCBmb3JtLmR1ZURhdGUudmFsdWUpXG4vLyB9XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ0bkNvbnRyb2wiLCJmdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5jaGlsZHJlblswXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxCdXRPbmUocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5jaGlsZHJlblsxXSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVtb3ZlQ2hpbGROb2RlcywgcmVtb3ZlQWxsQnV0T25lIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKCdpZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcblxuaW1wb3J0IGJ0bkNvbnRyb2wgZnJvbSAnLi9idG5Db250cm9sLmpzJztcbmltcG9ydCB7cmVtb3ZlQ2hpbGROb2RlcywgcmVtb3ZlQWxsQnV0T25lfSBmcm9tICcuL3V0aWxpdHkuanMnO1xuXG5sZXQgdG9kYXlMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpcmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9XG5dXG5cbmxldCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQWxsXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIHRvLWRvIGl0ZW1zJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBjdXJyZW50OiB0cnVlLFxuICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVG9kYXlcIixcbiAgICAgICAgZGVzY3JpcHRpb246ICdUYXNrcyB0aGF0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRvZGF5JyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZpcnN0IHRvYWRmYXNmIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAxOC0wOC0wMycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE4LTA4LTAzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpYXNkZmFzZGZyZCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICBkYXRlOiAnMjAxOC0wOC0wMycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZvdXJ0aCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMTgtMDgtMDMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9XVxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJUaGlzIHdlZWtcIixcbiAgICAgICAgZGVzY3JpcHRpb246ICdUYXNrcyB0aGF0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRoaXMgd2VlaycsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmaXJzdCB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMTgtMDgtMDMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBzZWNvbmQgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgZGF0ZTogJzIwMTgtMDgtMDMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSB0aGlyZGFzZmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMTgtMDgtMDMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE4LTA4LTAzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgICAgXG4gICAgfSxcbl1cblxuIFxuLy9QUk9KRUNUU1xuY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHByb2plY3RzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICAgIH1cbiAgICApXG4gICAge3JldHVybiBuYW1lLCBkZXNjcmlwdGlvbn1cbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKXtcbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLXdyYXBwZXInKTtcbiAgICByZW1vdmVDaGlsZE5vZGVzKHByb2plY3RzTGlzdClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2pJdGVtKTtcbiAgICAgICAgcHJvakl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5jdXJyZW50KSB7cHJvakl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjdXJyZW50LXByb2plY3QgcHJvamVjdCcpfTtcbiAgICAgICAgcHJvakl0ZW0uaW5uZXJIVE1MICs9XG4gICAgICAgICAgICBgPGgzPiR7cHJvamVjdHNbaV0ubmFtZX08L2gzPmAgK1xuICAgICAgICAgICAgYDxwPiR7cHJvamVjdHNbaV0ubGlzdC5sZW5ndGh9IGl0ZW1zPC9wPmA7XG4gICAgICAgIGlmIChpID09PSAyKSB7cHJvakl0ZW0uc3R5bGUubWFyZ2luQm90dG9tID0gXCIzMHB4XCJ9XG4gICAgICAgcHJvakl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge2NoYW5nZUN1cnJlbnRQcm9qKGUpfSkgICBcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlQWxsKCl7XG4gICAgcHJvamVjdHNbMF0ubGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPTA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5uYW1lICE9PSAnQWxsJyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLmxpc3QubGVuZ3RoOyBqKyspXG4gICAgICAgICAgICAgICAgcHJvamVjdHNbMF0ubGlzdC5wdXNoKHByb2plY3RzW2ldLmxpc3Rbal0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2ooKXsgXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvakZvcm1Db250YWluZXInKTtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLnRpdGxlLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm0uZGVzY3JpcHRpb24udmFsdWU7XG5cbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbilcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIGZvcm0ucmVzZXQoKVxufVxuXG5cbmxldCBwcm9qU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld1Byb2pCdG4nKTtcbnByb2pTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuZXdQcm9qKCkpXG5cblxuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UHJvaihlKXtcbiAgICBsZXQgYWN0aXZlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKTtcbiAgICBjb25zb2xlLmxvZyhhY3RpdmUpXG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgcHJvamVjdHNbaV0uY3VycmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb2plY3RzW2FjdGl2ZV0uY3VycmVudCA9IHRydWU7XG5cbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIGRpc3BsYXlMaXN0KHByb2plY3RzW2FjdGl2ZV0pXG59XG5cbmZ1bmN0aW9uIGZpbmRDdXJyZW50UHJvaigpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLmN1cnJlbnQpIHJldHVybiBwcm9qZWN0c1tpXSAgIFxufVxuXG5cblxuLy9MSVNUc1xuZnVuY3Rpb24gYWRkTmV3RG8oY3VycmVudFByb2plY3QsIG5hbWUsIHByaW9yaXR5LCBkYXRlKXtcbiAgICBjdXJyZW50UHJvamVjdC5saXN0LnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KHByb2plY3QpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWxpc3QnKTtcbiAgICByZW1vdmVBbGxCdXRPbmUobGlzdClcblxuICAgIGxldCB0aXRsZVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgIHRpdGxlU3BhY2UuaW5uZXJIVE1MID0gXG4gICAgICAgIGA8aDI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5gICsgXG4gICAgICAgIGA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPmBcbiAgICBcblxuICAgIGxldCBsaXN0QXJyYXkgPSBwcm9qZWN0Lmxpc3Q7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgYWRkSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctaXRlbScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWl0ZW0nKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xuICAgICAgICAgICAgbGlzdC5pbnNlcnRCZWZvcmUobGlzdEl0ZW0sIGFkZEl0ZW0pO1xuICAgICAgICAgICAgbGV0IGNoZWNrQm94TWFyayA9ICcgJztcblxuICAgICAgICAgICAgaWYgKGxpc3RBcnJheVtpXS5jb21wbGV0ZSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBsZXRlIGxpc3QtaXRlbScpXG4gICAgICAgICAgICAgICAgY2hlY2tCb3hNYXJrID0gXCI8c3BhbiBzdHlsZSA9J2ZvbnQtc2l6ZTogMThweDsgbWFyZ2luLWxlZnQ6IDNweDsgcG9pbnRlci1ldmVudHM6IG5vbmU7Jz4mIzEwMDA0Ozwvc3Bhbj5cIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gJ0FsbCcpe1xuICAgICAgICAgICAgICAgIGFkZEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBhZGRJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgKz0gXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSBcInByaW9yaXR5ICR7bGlzdEFycmF5W2ldLnByaW9yaXR5fVwiPiA8L2Rpdj5gICsgXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIiBkYXRhPVwiJHtpfVwiPiR7Y2hlY2tCb3hNYXJrfTwvZGl2PmAgK1xuICAgICAgICAgICAgICAgICAgICBgPHA+ICR7bGlzdEFycmF5W2ldLm5hbWV9IDwvcD5gICtcbiAgICAgICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5kYXRlfSA8L3A+YCBcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgICAgICAgICAgICAgYWRkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MICs9IFxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz0gXCJwcmlvcml0eSAke2xpc3RBcnJheVtpXS5wcmlvcml0eX1cIj4gPC9kaXY+YCArIFxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImNoZWNrYm94XCIgZGF0YT1cIiR7aX1cIj4ke2NoZWNrQm94TWFya308L2Rpdj5gK1xuICAgICAgICAgICAgICAgICAgICBgPHA+ICR7bGlzdEFycmF5W2ldLm5hbWV9IDwvcD5gICtcbiAgICAgICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5kYXRlfSA8L3A+YCArXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidHJhc2hcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+PC9kaXY+YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHJhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmFzaCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhc2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyYXNoW2ldLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpXG4gICAgICAgICAgICB0cmFzaFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVJdGVtKGUsIHByb2plY3QpKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDaGVja0xpc3RlbmVyKClcbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBmb3JtLmxpc3RJdGVtTmV3LnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlLCBmb3JtLmR1ZURhdGUudmFsdWUpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gZmluZEN1cnJlbnRQcm9qKCk7XG4gICAgcG9wdWxhdGVBbGwoKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIGRpc3BsYXlMaXN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICBmb3JtLnJlc2V0KCk7XG59XG5cblxuXG4vL3BlcmhhcHMgdG9vIHRpZ2h0bHkgdGllZCB0byBkaXNwbGF5TGlzdFxuZnVuY3Rpb24gZGVsZXRlSXRlbShlLCBwcm9qZWN0KXtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSlcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIHByb2plY3QubGlzdC5zcGxpY2UoaXRlbSwxKVxuICAgIHBvcHVsYXRlQWxsKCk7XG4gICAgZGlzcGxheUxpc3QocHJvamVjdCk7XG5cbn1cblxuXG5cbmZ1bmN0aW9uIGNvbXBsZXRlSXRlbShlKXtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSlcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIGxldCBwcm9qZWN0ID0gZmluZEN1cnJlbnRQcm9qKCk7XG5cbiAgICBwcm9qZWN0Lmxpc3RbaXRlbV0uY29tcGxldGUgPyBwcm9qZWN0Lmxpc3RbaXRlbV0uY29tcGxldGUgPSBmYWxzZSA6IHByb2plY3QubGlzdFtpdGVtXS5jb21wbGV0ZSA9IHRydWU7XG4gICAgcG9wdWxhdGVBbGwoKTtcbiAgICBkaXNwbGF5TGlzdChwcm9qZWN0KTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5wb3B1bGF0ZUFsbCgpXG5kaXNwbGF5UHJvamVjdHMoKVxuZGlzcGxheUxpc3QocHJvamVjdHNbMF0pXG5idG5Db250cm9sKClcbmFkZENoZWNrTGlzdGVuZXIoKVxuXG5cbmZ1bmN0aW9uIGFkZENoZWNrTGlzdGVuZXIoKXtcbiAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2JveCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBib3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjb21wbGV0ZUl0ZW0oZSkpXG4gICAgfVxufVxuXG5sZXQgc3VibWl0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXROZXdJdGVtQnRuJyk7XG4gICAgc3VibWl0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PiBhZGRUb0xpc3QoKSlcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9