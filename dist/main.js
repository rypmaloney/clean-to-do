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

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "displayList": () => (/* binding */ displayList),
/* harmony export */   "addNewDo": () => (/* binding */ addNewDo)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");



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
    let currentProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.findCurrentProj)();
    addNewDo(currentProject, form.listItemNew.value, form.priority.value);
    currentProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.findCurrentProj)();
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
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



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "newProj": () => (/* binding */ newProj),
/* harmony export */   "changeCurrentProj": () => (/* binding */ changeCurrentProj),
/* harmony export */   "findCurrentProj": () => (/* binding */ findCurrentProj)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _lists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists.js */ "./src/lists.js");




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
    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.removeChildNodes)(projectsList)
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
    ;(0,_lists_js__WEBPACK_IMPORTED_MODULE_1__.displayList)(projects[active])
}

function findCurrentProj(){
    for(let i = 0; i < projects.length; i++)
        if (projects[i].current) return projects[i]   
}

 

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
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
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















let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click',()=> addToList())





;(0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()
;(0,_btnControl_js__WEBPACK_IMPORTED_MODULE_0__.default)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9idG5Db250cm9sLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvLy4vc3JjL2xpc3RzLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsaUVBQWUsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG9HO0FBQ3BEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDREQUFlOztBQUVuQjtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGNBQWMsb0JBQW9COzs7QUFHbEM7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQWU7QUFDeEM7QUFDQSxxQkFBcUIsNkRBQWU7QUFDcEMsSUFBSSw2REFBZTtBQUNuQjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEUrRDtBQUNROzs7QUFHdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVULEtBQUs7QUFDTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTtBQUNBLElBQUksNkRBQWdCO0FBQ3BCLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDLGtCQUFrQix3QkFBd0I7O0FBRTFDLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQTs7O0FBR0EsbUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSx1REFBVztBQUNmOztBQUVBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7O1VDWjVDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLENBQXlDO0FBQzRFOztBQUVySDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTs7Ozs7O0FBTUEsOERBQWU7QUFDZix3REFBVSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBidG5Db250cm9sKCl7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4gdG9nZ2xlSXRlbUZvcm0oKSlcblxuICAgIGxldCBzdWJtaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld0l0ZW1CdG4nKTtcbiAgICBzdWJtaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlSXRlbUZvcm0oKSk7XG5cbiAgICBsZXQgYWRkUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qJyk7XG4gICAgYWRkUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVByb2pGb3JtKCkpO1xuXG4gICAgbGV0IHN1Ym1pdE5ld1Byb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xuICAgIHN1Ym1pdE5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQcm9qRm9ybSgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSXRlbUZvcm0oKXtcbiAgICBsZXQgbmV3SXRlbVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Gb3JtJyk7XG5cbiAgICBhZGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qRm9ybSgpe1xuICAgIGxldCBuZXdQcm9qU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybScpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvaicpO1xuXG4gICAgbmV3UHJvalNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1oaWRlJyk7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRJdGVtVHJhbnNpdGlvbigpe1xuICAgIGxldCBuZXdJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIG5ld0l0ZW0ucmVtb3ZlQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTD0gXCI8aW5wdXQgdHlwZT0gJ3RleHQnIGlkPSdsaXN0SXRlbU5ldycgbmFtZT0nbGlzdEl0ZW1OZXcnPlwiO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuYWRkTmV3RG8oY3VycmVudFByb2plY3QsIGZvcm0ubGlzdEl0ZW1OZXcudmFsdWUsIGZvcm0ucHJpb3JpdHkudmFsdWUpXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ0bkNvbnRyb2wiLCJcbmltcG9ydCB7cHJvamVjdHMsIGRpc3BsYXlQcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgbmV3UHJvaiwgY2hhbmdlQ3VycmVudFByb2osIGZpbmRDdXJyZW50UHJvan0gZnJvbSAnLi9wcm9qZWN0cy5qcydcbmltcG9ydCB7cmVtb3ZlQ2hpbGROb2RlcywgcmVtb3ZlQWxsQnV0T25lfSBmcm9tICcuL3V0aWxpdHkuanMnO1xuZnVuY3Rpb24gYWRkTmV3RG8oY3VycmVudFByb2plY3QsIG5hbWUsIHByaW9yaXR5KXtcbiAgICBjdXJyZW50UHJvamVjdC5saXN0LnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KHByb2plY3QpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWxpc3QnKTtcbiAgICByZW1vdmVBbGxCdXRPbmUobGlzdClcblxuICAgIGxldCB0aXRsZVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgIHRpdGxlU3BhY2UuaW5uZXJIVE1MID0gXG4gICAgICAgIGA8aDI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5gICsgXG4gICAgICAgIGA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPmBcbiAgICBcblxuICAgIGxldCBsaXN0QXJyYXkgPSBwcm9qZWN0Lmxpc3Q7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgYWRkSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctaXRlbScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWl0ZW0nKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xuICAgICAgICAgICAgbGlzdC5pbnNlcnRCZWZvcmUobGlzdEl0ZW0sIGFkZEl0ZW0pO1xuXG5cbiAgICAgICAgICAgIGxpc3RJdGVtLmlubmVySFRNTCArPSBcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz0gXCJwcmlvcml0eSAke2xpc3RBcnJheVtpXS5wcmlvcml0eX1cIj4gPC9kaXY+YCArIFxuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiPicgK1xuICAgICAgICAgICAgICAgIGA8cD4gJHtsaXN0QXJyYXlbaV0ubmFtZX0gPC9wPmAgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidHJhc2hcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+PC9kaXY+YFxuXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGxldCB0cmFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RyYXNoJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFzaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJhc2hbaV0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSlcbiAgICAgICAgICAgIHRyYXNoW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGRlbGV0ZUl0ZW0oZSwgcHJvamVjdCkpO1xuICAgICAgICB9XG4gICAgXG59XG5cblxuZnVuY3Rpb24gYWRkVG9MaXN0KCl7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUZvcm0nKTtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBmaW5kQ3VycmVudFByb2ooKTtcbiAgICBhZGROZXdEbyhjdXJyZW50UHJvamVjdCwgZm9ybS5saXN0SXRlbU5ldy52YWx1ZSwgZm9ybS5wcmlvcml0eS52YWx1ZSk7XG4gICAgY3VycmVudFByb2plY3QgPSBmaW5kQ3VycmVudFByb2ooKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5TGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG5cblxuLy9wZXJoYXBzIHRvbyB0aWdodGx5IHRpZWQgdG8gZGlzcGxheUxpc3RcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZSwgcHJvamVjdCl7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpXG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBwcm9qZWN0Lmxpc3Quc3BsaWNlKGl0ZW0sMSlcbiAgICBkaXNwbGF5TGlzdChwcm9qZWN0KTtcblxufVxuXG5leHBvcnQge2RlbGV0ZUl0ZW0sIGFkZFRvTGlzdCwgZGlzcGxheUxpc3QsIGFkZE5ld0RvfSIsImltcG9ydCB7cmVtb3ZlQ2hpbGROb2RlcywgcmVtb3ZlQWxsQnV0T25lfSBmcm9tICcuL3V0aWxpdHkuanMnO1xuaW1wb3J0IHtkZWxldGVJdGVtLCBhZGRUb0xpc3QsIGRpc3BsYXlMaXN0LCBhZGROZXdEb30gZnJvbSAnLi9saXN0cy5qcydcblxuXG5sZXQgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRvZGF5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGFza3MgdGhhdCBuZWVkIHRvIGJlIGNvbXBsZXRlZCB0b2RheScsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmaXJzdCB0b2FkZmFzZiBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHNlY29uZCB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHRoaWFzZGZhc2RmcmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVGhpcyB3ZWVrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGFza3MgdGhhdCBuZWVkIHRvIGJlIGNvbXBsZXRlZCB0aGlzIHdlZWsnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6IHRydWUsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmaXJzdCB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBzZWNvbmQgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSB0aGlyZGFzZmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgICAgXG4gICAgfSxcbl1cblxuIFxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgfVxuICAgIClcbiAgICB7cmV0dXJuIG5hbWUsIGRlc2NyaXB0aW9ufVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpe1xuXG4gICAgbGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy13cmFwcGVyJyk7XG4gICAgcmVtb3ZlQ2hpbGROb2Rlcyhwcm9qZWN0c0xpc3QpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvakl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qSXRlbSk7XG4gICAgICAgIHByb2pJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xuICAgICAgICBpZiAocHJvamVjdHNbaV0uY3VycmVudCkge3Byb2pJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3VycmVudC1wcm9qZWN0IHByb2plY3QnKX07XG4gICAgICAgIHByb2pJdGVtLmlubmVySFRNTCArPVxuICAgICAgICAgICAgYDxoMz4ke3Byb2plY3RzW2ldLm5hbWV9PC9oMz5gICtcbiAgICAgICAgICAgIGA8cD4ke3Byb2plY3RzW2ldLmxpc3QubGVuZ3RofSBpdGVtczwvcD5gO1xuICAgICAgICAgICAgXG4gICAgICAgcHJvakl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge2NoYW5nZUN1cnJlbnRQcm9qKGUpfSkgICBcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIG5ld1Byb2ooKXsgXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvakZvcm1Db250YWluZXInKTtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLnRpdGxlLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm0uZGVzY3JpcHRpb24udmFsdWU7XG5cbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbilcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIGZvcm0ucmVzZXQoKVxufVxuXG5cbmxldCBwcm9qU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld1Byb2pCdG4nKTtcbnByb2pTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuZXdQcm9qKCkpXG5cblxuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UHJvaihlKXtcbiAgICBsZXQgYWN0aXZlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKTtcbiAgICBjb25zb2xlLmxvZyhhY3RpdmUpXG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgcHJvamVjdHNbaV0uY3VycmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb2plY3RzW2FjdGl2ZV0uY3VycmVudCA9IHRydWU7XG5cbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIGRpc3BsYXlMaXN0KHByb2plY3RzW2FjdGl2ZV0pXG59XG5cbmZ1bmN0aW9uIGZpbmRDdXJyZW50UHJvaigpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLmN1cnJlbnQpIHJldHVybiBwcm9qZWN0c1tpXSAgIFxufVxuXG5leHBvcnQge3Byb2plY3RzLCBkaXNwbGF5UHJvamVjdHMsIGNyZWF0ZVByb2plY3QsIG5ld1Byb2osIGNoYW5nZUN1cnJlbnRQcm9qLCBmaW5kQ3VycmVudFByb2p9ICIsImZ1bmN0aW9uIHJlbW92ZUNoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5jaGlsZHJlblswXSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbEJ1dE9uZShwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmNoaWxkcmVuWzFdKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuY2hpbGRyZW5bMF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHtyZW1vdmVDaGlsZE5vZGVzLCByZW1vdmVBbGxCdXRPbmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2lmIHlvdSBzZWUgbWUsIGV2ZXJ5dGhpbmcgaXMgQSBPIEsnKVxuXG5pbXBvcnQgYnRuQ29udHJvbCBmcm9tICcuL2J0bkNvbnRyb2wuanMnO1xuaW1wb3J0IHtwcm9qZWN0cywgZGlzcGxheVByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBuZXdQcm9qLCBjaGFuZ2VDdXJyZW50UHJvaiwgZmluZEN1cnJlbnRQcm9qfSAgZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5cbmxldCB0b2RheUxpc3QgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmaXJzdCB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBzZWNvbmQgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSB0aGlyZCB0aGluZyB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZvdXJ0aCB0aGluZyB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH1cbl1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmxldCBzdWJtaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld0l0ZW1CdG4nKTtcbiAgICBzdWJtaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+IGFkZFRvTGlzdCgpKVxuXG5cblxuXG5cbmRpc3BsYXlQcm9qZWN0cygpXG5idG5Db250cm9sKClcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==