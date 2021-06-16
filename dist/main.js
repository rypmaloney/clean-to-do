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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9idG5Db250cm9sLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLGlFQUFlLFU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7O1VDWjVDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLENBQXlDO0FBQ3NCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTtBQUNBLElBQUksNkRBQWdCO0FBQ3BCLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDLGtCQUFrQix3QkFBd0I7O0FBRTFDLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDREQUFlOztBQUVuQjtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGNBQWMsb0JBQW9COzs7QUFHbEM7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7Ozs7OztBQU1BO0FBQ0Esd0RBQVUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBidG5Db250cm9sKCl7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4gdG9nZ2xlSXRlbUZvcm0oKSlcblxuICAgIGxldCBzdWJtaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld0l0ZW1CdG4nKTtcbiAgICBzdWJtaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlSXRlbUZvcm0oKSk7XG5cbiAgICBsZXQgYWRkUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qJyk7XG4gICAgYWRkUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVByb2pGb3JtKCkpO1xuXG4gICAgbGV0IHN1Ym1pdE5ld1Byb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xuICAgIHN1Ym1pdE5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQcm9qRm9ybSgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSXRlbUZvcm0oKXtcbiAgICBsZXQgbmV3SXRlbVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Gb3JtJyk7XG5cbiAgICBhZGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qRm9ybSgpe1xuICAgIGxldCBuZXdQcm9qU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybScpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvaicpO1xuXG4gICAgbmV3UHJvalNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1oaWRlJyk7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRJdGVtVHJhbnNpdGlvbigpe1xuICAgIGxldCBuZXdJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIG5ld0l0ZW0ucmVtb3ZlQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTD0gXCI8aW5wdXQgdHlwZT0gJ3RleHQnIGlkPSdsaXN0SXRlbU5ldycgbmFtZT0nbGlzdEl0ZW1OZXcnPlwiO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBmb3JtLmxpc3RJdGVtTmV3LnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlKVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBidG5Db250cm9sIiwiZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuY2hpbGRyZW5bMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQnV0T25lKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5jaGlsZHJlblswXSk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlbW92ZUNoaWxkTm9kZXMsIHJlbW92ZUFsbEJ1dE9uZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zb2xlLmxvZygnaWYgeW91IHNlZSBtZSwgZXZlcnl0aGluZyBpcyBBIE8gSycpXG5cbmltcG9ydCBidG5Db250cm9sIGZyb20gJy4vYnRuQ29udHJvbC5qcyc7XG5pbXBvcnQge3JlbW92ZUNoaWxkTm9kZXMsIHJlbW92ZUFsbEJ1dE9uZX0gZnJvbSAnLi91dGlsaXR5LmpzJztcblxubGV0IHRvZGF5TGlzdCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZpcnN0IHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHNlY29uZCB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHRoaXJkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfVxuXVxuXG5sZXQgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFsbFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCB0by1kbyBpdGVtcycsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJUb2RheVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rhc2tzIHRoYXQgbmVlZCB0byBiZSBjb21wbGV0ZWQgdG9kYXknLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG9hZGZhc2YgZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBzZWNvbmQgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSB0aGlhc2RmYXNkZnJkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH1dXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRoaXMgd2Vla1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rhc2tzIHRoYXQgbmVlZCB0byBiZSBjb21wbGV0ZWQgdGhpcyB3ZWVrJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBjdXJyZW50OiB0cnVlLFxuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpcmRhc2ZkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH1dXG4gICAgICAgIFxuICAgIH0sXG5dXG5cbiBcbi8vUFJPSkVDVFNcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgKVxuICAgIHtyZXR1cm4gbmFtZSwgZGVzY3JpcHRpb259XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCl7XG5cbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLXdyYXBwZXInKTtcbiAgICByZW1vdmVDaGlsZE5vZGVzKHByb2plY3RzTGlzdClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2pJdGVtKTtcbiAgICAgICAgcHJvakl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5jdXJyZW50KSB7cHJvakl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjdXJyZW50LXByb2plY3QgcHJvamVjdCcpfTtcbiAgICAgICAgcHJvakl0ZW0uaW5uZXJIVE1MICs9XG4gICAgICAgICAgICBgPGgzPiR7cHJvamVjdHNbaV0ubmFtZX08L2gzPmAgK1xuICAgICAgICAgICAgYDxwPiR7cHJvamVjdHNbaV0ubGlzdC5sZW5ndGh9IGl0ZW1zPC9wPmA7XG4gICAgICAgICAgICBcbiAgICAgICBwcm9qSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7Y2hhbmdlQ3VycmVudFByb2ooZSl9KSAgIFxuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gcG9wdWxhdGVBbGwoKXtcbiAgICBwcm9qZWN0c1swXS5saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9MDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgIT09ICdBbGwnKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbaV0ubGlzdC5sZW5ndGg7IGorKylcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1swXS5saXN0LnB1c2gocHJvamVjdHNbaV0ubGlzdFtqXSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV3UHJvaigpeyBcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qRm9ybUNvbnRhaW5lcicpO1xuICAgIGxldCB0aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZm9ybS5yZXNldCgpXG59XG5cblxubGV0IHByb2pTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xucHJvalN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5ld1Byb2ooKSlcblxuXG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRQcm9qKGUpe1xuICAgIGxldCBhY3RpdmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBwcm9qZWN0c1tpXS5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvamVjdHNbYWN0aXZlXS5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZGlzcGxheUxpc3QocHJvamVjdHNbYWN0aXZlXSlcbn1cblxuZnVuY3Rpb24gZmluZEN1cnJlbnRQcm9qKCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZiAocHJvamVjdHNbaV0uY3VycmVudCkgcmV0dXJuIHByb2plY3RzW2ldICAgXG59XG5cblxuXG4vL0xJU1RzXG5mdW5jdGlvbiBhZGROZXdEbyhjdXJyZW50UHJvamVjdCwgbmFtZSwgcHJpb3JpdHkpe1xuICAgIGN1cnJlbnRQcm9qZWN0Lmxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheUxpc3QocHJvamVjdCkge1xuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbGlzdCcpO1xuICAgIHJlbW92ZUFsbEJ1dE9uZShsaXN0KVxuXG4gICAgbGV0IHRpdGxlU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgdGl0bGVTcGFjZS5pbm5lckhUTUwgPSBcbiAgICAgICAgYDxoMj4ke3Byb2plY3QubmFtZX08L2gyPmAgKyBcbiAgICAgICAgYDxwPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+YFxuICAgIFxuXG4gICAgbGV0IGxpc3RBcnJheSA9IHByb2plY3QubGlzdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtaXRlbScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XG4gICAgICAgICAgICBsaXN0Lmluc2VydEJlZm9yZShsaXN0SXRlbSwgYWRkSXRlbSk7XG5cblxuICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MICs9IFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSBcInByaW9yaXR5ICR7bGlzdEFycmF5W2ldLnByaW9yaXR5fVwiPiA8L2Rpdj5gICsgXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+JyArXG4gICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5uYW1lfSA8L3A+YCArXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0cmFzaFwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT48L2Rpdj5gXG5cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRyYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJhc2gnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cmFzaFtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKVxuICAgICAgICAgICAgdHJhc2hbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlSXRlbShlLCBwcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICBcbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBmb3JtLmxpc3RJdGVtTmV3LnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIHBvcHVsYXRlQWxsKClcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5TGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG5cblxuLy9wZXJoYXBzIHRvbyB0aWdodGx5IHRpZWQgdG8gZGlzcGxheUxpc3RcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZSwgcHJvamVjdCl7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpXG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBwcm9qZWN0Lmxpc3Quc3BsaWNlKGl0ZW0sMSlcbiAgICBkaXNwbGF5TGlzdChwcm9qZWN0KTtcblxufVxuXG5cblxucG9wdWxhdGVBbGwoKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5sZXQgc3VibWl0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXROZXdJdGVtQnRuJyk7XG4gICAgc3VibWl0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PiBhZGRUb0xpc3QoKSlcblxuXG5cblxuXG5kaXNwbGF5UHJvamVjdHMoKVxuYnRuQ29udHJvbCgpXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=