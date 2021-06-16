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


function addToList(){
    let form = document.getElementById('newItemForm');
    let currentProject = findCurrentProj();
    addNewDo(currentProject, form.listItemNew.value, form.priority.value)
}




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
        current: false,
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
            
       projItem.addEventListener('click', (e) => {changeCurrentProj(e)})   
    }
};


function populateAll(){
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
function addNewDo(currentProject, name, priority){
    currentProject.list.push({
        name: name,
        priority: priority,
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


            listItem.innerHTML += 
                `<div class= "priority ${listArray[i].priority}"> </div>` + 
                '<input type="checkbox" class="checkbox">' +
                `<p> ${listArray[i].name} </p>` +
                `<div class="trash"><i class="fa fa-trash-o"></i></div>`

           
        }
        let trash = document.getElementsByClassName('trash')
        for (let i = 0; i < trash.length; i++) {
            trash[i].setAttribute('data', i)
            trash[i].addEventListener('click', (e) => deleteItem(e, project));
        }
    
}


function addToList(){
    let form = document.getElementById('newItemForm');
    let currentProject = findCurrentProj();
    addNewDo(currentProject, form.listItemNew.value, form.priority.value);
    currentProject = findCurrentProj();
    displayProjects();
    displayList(currentProject);
    form.reset();
}



//perhaps too tightly tied to displayList
function deleteItem(e, project){
    console.log(e.target.getAttribute('data'))
    let item = e.target.getAttribute('data');
    project.list.splice(item,1)
    displayList(project);

}



populateAll()






















let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click',()=> addToList())





displayProjects()
;(0,_btnControl_js__WEBPACK_IMPORTED_MODULE_0__.default)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9idG5Db250cm9sLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLGlFQUFlLFU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7O1VDWjVDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLENBQXlDO0FBQ3NCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTtBQUNBLElBQUksNkRBQWdCO0FBQ3BCLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDLGtCQUFrQix3QkFBd0I7O0FBRTFDLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQTs7O0FBR0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDREQUFlOztBQUVuQjtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGNBQWMsb0JBQW9COzs7QUFHbEM7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBOzs7Ozs7QUFNQTtBQUNBLHdEQUFVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZnVuY3Rpb24gYnRuQ29udHJvbCgpe1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJyk7XG4gICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+IHRvZ2dsZUl0ZW1Gb3JtKCkpXG5cbiAgICBsZXQgc3VibWl0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXROZXdJdGVtQnRuJyk7XG4gICAgc3VibWl0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZUl0ZW1Gb3JtKCkpO1xuXG4gICAgbGV0IGFkZFByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvaicpO1xuICAgIGFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQcm9qRm9ybSgpKTtcblxuICAgIGxldCBzdWJtaXROZXdQcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld1Byb2pCdG4nKTtcbiAgICBzdWJtaXROZXdQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlUHJvakZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUl0ZW1Gb3JtKCl7XG4gICAgbGV0IG5ld0l0ZW1TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuXG4gICAgYWRkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvakZvcm0oKXtcbiAgICBsZXQgbmV3UHJvalNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2onKTtcblxuICAgIG5ld1Byb2pTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0taGlkZScpO1xuXG59XG5cblxuZnVuY3Rpb24gYWRkSXRlbVRyYW5zaXRpb24oKXtcbiAgICBsZXQgbmV3SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctaXRlbScpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBuZXdJdGVtLnJlbW92ZUNoaWxkKHRpdGxlKTtcblxuICAgIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pbm5lckhUTUw9IFwiPGlucHV0IHR5cGU9ICd0ZXh0JyBpZD0nbGlzdEl0ZW1OZXcnIG5hbWU9J2xpc3RJdGVtTmV3Jz5cIjtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGZvcm0pO1xuXG59XG5cblxuZnVuY3Rpb24gYWRkVG9MaXN0KCl7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUZvcm0nKTtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBmaW5kQ3VycmVudFByb2ooKTtcbiAgICBhZGROZXdEbyhjdXJyZW50UHJvamVjdCwgZm9ybS5saXN0SXRlbU5ldy52YWx1ZSwgZm9ybS5wcmlvcml0eS52YWx1ZSlcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYnRuQ29udHJvbCIsImZ1bmN0aW9uIHJlbW92ZUNoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5jaGlsZHJlblswXSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbEJ1dE9uZShwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmNoaWxkcmVuWzFdKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuY2hpbGRyZW5bMF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHtyZW1vdmVDaGlsZE5vZGVzLCByZW1vdmVBbGxCdXRPbmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2lmIHlvdSBzZWUgbWUsIGV2ZXJ5dGhpbmcgaXMgQSBPIEsnKVxuXG5pbXBvcnQgYnRuQ29udHJvbCBmcm9tICcuL2J0bkNvbnRyb2wuanMnO1xuaW1wb3J0IHtyZW1vdmVDaGlsZE5vZGVzLCByZW1vdmVBbGxCdXRPbmV9IGZyb20gJy4vdXRpbGl0eS5qcyc7XG5cbmxldCB0b2RheUxpc3QgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmaXJzdCB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBzZWNvbmQgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSB0aGlyZCB0aGluZyB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZvdXJ0aCB0aGluZyB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH1cbl1cblxubGV0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJBbGxcIixcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgdG8tZG8gaXRlbXMnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVG9kYXlcIixcbiAgICAgICAgZGVzY3JpcHRpb246ICdUYXNrcyB0aGF0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRvZGF5JyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZpcnN0IHRvYWRmYXNmIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpYXNkZmFzZGZyZCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZvdXJ0aCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9XVxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJUaGlzIHdlZWtcIixcbiAgICAgICAgZGVzY3JpcHRpb246ICdUYXNrcyB0aGF0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRoaXMgd2VlaycsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudDogdHJ1ZSxcbiAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZpcnN0IHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHNlY29uZCB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHRoaXJkYXNmZCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZvdXJ0aCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9XVxuICAgICAgICBcbiAgICB9LFxuXVxuXG4gXG4vL1BST0pFQ1RTXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgfVxuICAgIClcbiAgICB7cmV0dXJuIG5hbWUsIGRlc2NyaXB0aW9ufVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpe1xuXG4gICAgbGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy13cmFwcGVyJyk7XG4gICAgcmVtb3ZlQ2hpbGROb2Rlcyhwcm9qZWN0c0xpc3QpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvakl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qSXRlbSk7XG4gICAgICAgIHByb2pJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xuICAgICAgICBpZiAocHJvamVjdHNbaV0uY3VycmVudCkge3Byb2pJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3VycmVudC1wcm9qZWN0IHByb2plY3QnKX07XG4gICAgICAgIHByb2pJdGVtLmlubmVySFRNTCArPVxuICAgICAgICAgICAgYDxoMz4ke3Byb2plY3RzW2ldLm5hbWV9PC9oMz5gICtcbiAgICAgICAgICAgIGA8cD4ke3Byb2plY3RzW2ldLmxpc3QubGVuZ3RofSBpdGVtczwvcD5gO1xuICAgICAgICAgICAgXG4gICAgICAgcHJvakl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge2NoYW5nZUN1cnJlbnRQcm9qKGUpfSkgICBcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlQWxsKCl7XG4gICAgZm9yIChsZXQgaSA9MDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgIT09ICdBbGwnKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbaV0ubGlzdC5sZW5ndGg7IGorKylcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1swXS5saXN0LnB1c2gocHJvamVjdHNbaV0ubGlzdFtqXSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbmV3UHJvaigpeyBcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qRm9ybUNvbnRhaW5lcicpO1xuICAgIGxldCB0aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZm9ybS5yZXNldCgpXG59XG5cblxubGV0IHByb2pTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xucHJvalN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5ld1Byb2ooKSlcblxuXG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRQcm9qKGUpe1xuICAgIGxldCBhY3RpdmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBwcm9qZWN0c1tpXS5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvamVjdHNbYWN0aXZlXS5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZGlzcGxheUxpc3QocHJvamVjdHNbYWN0aXZlXSlcbn1cblxuZnVuY3Rpb24gZmluZEN1cnJlbnRQcm9qKCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZiAocHJvamVjdHNbaV0uY3VycmVudCkgcmV0dXJuIHByb2plY3RzW2ldICAgXG59XG5cblxuXG4vL0xJU1RzXG5mdW5jdGlvbiBhZGROZXdEbyhjdXJyZW50UHJvamVjdCwgbmFtZSwgcHJpb3JpdHkpe1xuICAgIGN1cnJlbnRQcm9qZWN0Lmxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheUxpc3QocHJvamVjdCkge1xuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbGlzdCcpO1xuICAgIHJlbW92ZUFsbEJ1dE9uZShsaXN0KVxuXG4gICAgbGV0IHRpdGxlU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgdGl0bGVTcGFjZS5pbm5lckhUTUwgPSBcbiAgICAgICAgYDxoMj4ke3Byb2plY3QubmFtZX08L2gyPmAgKyBcbiAgICAgICAgYDxwPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+YFxuICAgIFxuXG4gICAgbGV0IGxpc3RBcnJheSA9IHByb2plY3QubGlzdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtaXRlbScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XG4gICAgICAgICAgICBsaXN0Lmluc2VydEJlZm9yZShsaXN0SXRlbSwgYWRkSXRlbSk7XG5cblxuICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MICs9IFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSBcInByaW9yaXR5ICR7bGlzdEFycmF5W2ldLnByaW9yaXR5fVwiPiA8L2Rpdj5gICsgXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+JyArXG4gICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5uYW1lfSA8L3A+YCArXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0cmFzaFwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT48L2Rpdj5gXG5cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRyYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJhc2gnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cmFzaFtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKVxuICAgICAgICAgICAgdHJhc2hbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlSXRlbShlLCBwcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICBcbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBmb3JtLmxpc3RJdGVtTmV3LnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIGRpc3BsYXlMaXN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICBmb3JtLnJlc2V0KCk7XG59XG5cblxuXG4vL3BlcmhhcHMgdG9vIHRpZ2h0bHkgdGllZCB0byBkaXNwbGF5TGlzdFxuZnVuY3Rpb24gZGVsZXRlSXRlbShlLCBwcm9qZWN0KXtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSlcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIHByb2plY3QubGlzdC5zcGxpY2UoaXRlbSwxKVxuICAgIGRpc3BsYXlMaXN0KHByb2plY3QpO1xuXG59XG5cblxuXG5wb3B1bGF0ZUFsbCgpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmxldCBzdWJtaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld0l0ZW1CdG4nKTtcbiAgICBzdWJtaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+IGFkZFRvTGlzdCgpKVxuXG5cblxuXG5cbmRpc3BsYXlQcm9qZWN0cygpXG5idG5Db250cm9sKClcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==