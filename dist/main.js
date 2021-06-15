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


let currentList = projects[0]


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

function addNewDo(currentProject, name, priority){
    currentProject.list.push({
        name: name,
        priority: priority,
        complete: false,
    })
}


function displayList(project) {
    let list = document.getElementById('current-list');
    removeAllButOne(list)

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
                '<div class="trash"><i class="fa fa-trash-o"></i></div>'
        }
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


function addToList(){
    let form = document.getElementById('newItemForm');
    let currentProject = findCurrentProj();
    addNewDo(currentProject, form.listItemNew.value, form.priority.value);
    currentProject = findCurrentProj();
    displayProjects();
    displayList(currentProject);
    form.reset();
}






let submitNewItemBtn = document.getElementById('submitNewItemBtn');
    submitNewItemBtn.addEventListener('click',()=> addToList())





displayProjects()

;(0,_btnControl_js__WEBPACK_IMPORTED_MODULE_0__.default)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9idG5Db250cm9sLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbGVhbi10by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLGlFQUFlLFU7Ozs7OztVQ3REZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLENBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGNBQWMsb0JBQW9COzs7QUFHbEM7O0FBRUEsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLHNCQUFzQjtBQUMvRDtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQyxrQkFBa0Isd0JBQXdCOztBQUUxQyxrREFBa0QscUJBQXFCO0FBQ3ZFO0FBQ0E7OztBQUdBLG1CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7OztBQU1BOztBQUVBLHdEQUFVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGJ0bkNvbnRyb2woKXtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PiB0b2dnbGVJdGVtRm9ybSgpKVxuXG4gICAgbGV0IHN1Ym1pdE5ld0l0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3SXRlbUJ0bicpO1xuICAgIHN1Ym1pdE5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVJdGVtRm9ybSgpKTtcblxuICAgIGxldCBhZGRQcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2onKTtcbiAgICBhZGRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlUHJvakZvcm0oKSk7XG5cbiAgICBsZXQgc3VibWl0TmV3UHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXROZXdQcm9qQnRuJyk7XG4gICAgc3VibWl0TmV3UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVByb2pGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVJdGVtRm9ybSgpe1xuICAgIGxldCBuZXdJdGVtU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctaXRlbScpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJyk7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUZvcm0nKTtcblxuICAgIGFkZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2pGb3JtKCl7XG4gICAgbGV0IG5ld1Byb2pTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtJyk7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qJyk7XG5cbiAgICBuZXdQcm9qU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLWhpZGUnKTtcblxufVxuXG5cbmZ1bmN0aW9uIGFkZEl0ZW1UcmFuc2l0aW9uKCl7XG4gICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJyk7XG4gICAgbmV3SXRlbS5yZW1vdmVDaGlsZCh0aXRsZSk7XG5cbiAgICBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaW5uZXJIVE1MPSBcIjxpbnB1dCB0eXBlPSAndGV4dCcgaWQ9J2xpc3RJdGVtTmV3JyBuYW1lPSdsaXN0SXRlbU5ldyc+XCI7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChmb3JtKTtcblxufVxuXG5cbmZ1bmN0aW9uIGFkZFRvTGlzdCgpe1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Gb3JtJyk7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZmluZEN1cnJlbnRQcm9qKCk7XG5hZGROZXdEbyhjdXJyZW50UHJvamVjdCwgZm9ybS5saXN0SXRlbU5ldy52YWx1ZSwgZm9ybS5wcmlvcml0eS52YWx1ZSlcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYnRuQ29udHJvbCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2lmIHlvdSBzZWUgbWUsIGV2ZXJ5dGhpbmcgaXMgQSBPIEsnKVxuXG5pbXBvcnQgYnRuQ29udHJvbCBmcm9tICcuL2J0bkNvbnRyb2wuanMnO1xuXG5sZXQgdG9kYXlMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpcmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9XG5dXG5cblxubGV0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJUb2RheVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rhc2tzIHRoYXQgbmVlZCB0byBiZSBjb21wbGV0ZWQgdG9kYXknLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG9hZGZhc2YgZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBzZWNvbmQgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSB0aGlhc2RmYXNkZnJkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH1dXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRoaXMgd2Vla1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rhc2tzIHRoYXQgbmVlZCB0byBiZSBjb21wbGV0ZWQgdGhpcyB3ZWVrJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBjdXJyZW50OiB0cnVlLFxuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpcmRhc2ZkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH1dXG4gICAgICAgIFxuICAgIH0sXG5dXG5cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuY2hpbGRyZW5bMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQnV0T25lKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5jaGlsZHJlblswXSk7XG4gICAgfVxufVxuXG5cbmxldCBjdXJyZW50TGlzdCA9IHByb2plY3RzWzBdXG5cblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHByb2plY3RzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICAgIH1cbiAgICApXG4gICAge3JldHVybiBuYW1lLCBkZXNjcmlwdGlvbn1cbn1cblxuZnVuY3Rpb24gYWRkTmV3RG8oY3VycmVudFByb2plY3QsIG5hbWUsIHByaW9yaXR5KXtcbiAgICBjdXJyZW50UHJvamVjdC5saXN0LnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KHByb2plY3QpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWxpc3QnKTtcbiAgICByZW1vdmVBbGxCdXRPbmUobGlzdClcblxuICAgIGxldCB0aXRsZVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtcHJvamVjdC10aXRsZScpO1xuICAgIHRpdGxlU3BhY2UuaW5uZXJIVE1MID0gXG4gICAgICAgIGA8aDI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5gICsgXG4gICAgICAgIGA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPmBcbiAgICBcblxuICAgIGxldCBsaXN0QXJyYXkgPSBwcm9qZWN0Lmxpc3Q7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IGFkZEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKTtcbiAgICAgICAgICAgIGxpc3QuaW5zZXJ0QmVmb3JlKGxpc3RJdGVtLCBhZGRJdGVtKTtcblxuICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MICs9IFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSBcInByaW9yaXR5ICR7bGlzdEFycmF5W2ldLnByaW9yaXR5fVwiPiA8L2Rpdj5gICsgXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+JyArXG4gICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5uYW1lfSA8L3A+YCArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0cmFzaFwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT48L2Rpdj4nXG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCl7XG5cbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLXdyYXBwZXInKTtcbiAgICByZW1vdmVDaGlsZE5vZGVzKHByb2plY3RzTGlzdClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2pJdGVtKTtcbiAgICAgICAgcHJvakl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5jdXJyZW50KSB7cHJvakl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjdXJyZW50LXByb2plY3QgcHJvamVjdCcpfTtcbiAgICAgICAgcHJvakl0ZW0uaW5uZXJIVE1MICs9XG4gICAgICAgICAgICBgPGgzPiR7cHJvamVjdHNbaV0ubmFtZX08L2gzPmAgK1xuICAgICAgICAgICAgYDxwPiR7cHJvamVjdHNbaV0ubGlzdC5sZW5ndGh9IGl0ZW1zPC9wPmA7XG4gICAgICAgICAgICBcbiAgICAgICBwcm9qSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7Y2hhbmdlQ3VycmVudFByb2ooZSl9KSAgIFxuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gbmV3UHJvaigpeyBcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qRm9ybUNvbnRhaW5lcicpO1xuICAgIGxldCB0aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZm9ybS5yZXNldCgpXG59XG5cblxubGV0IHByb2pTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xucHJvalN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5ld1Byb2ooKSlcblxuXG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRQcm9qKGUpe1xuICAgIGxldCBhY3RpdmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBwcm9qZWN0c1tpXS5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvamVjdHNbYWN0aXZlXS5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZGlzcGxheUxpc3QocHJvamVjdHNbYWN0aXZlXSlcbn1cblxuZnVuY3Rpb24gZmluZEN1cnJlbnRQcm9qKCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZiAocHJvamVjdHNbaV0uY3VycmVudCkgcmV0dXJuIHByb2plY3RzW2ldICAgXG59XG5cblxuZnVuY3Rpb24gYWRkVG9MaXN0KCl7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUZvcm0nKTtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBmaW5kQ3VycmVudFByb2ooKTtcbiAgICBhZGROZXdEbyhjdXJyZW50UHJvamVjdCwgZm9ybS5saXN0SXRlbU5ldy52YWx1ZSwgZm9ybS5wcmlvcml0eS52YWx1ZSk7XG4gICAgY3VycmVudFByb2plY3QgPSBmaW5kQ3VycmVudFByb2ooKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5TGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG5cblxuXG5cblxubGV0IHN1Ym1pdE5ld0l0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3SXRlbUJ0bicpO1xuICAgIHN1Ym1pdE5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4gYWRkVG9MaXN0KCkpXG5cblxuXG5cblxuZGlzcGxheVByb2plY3RzKClcblxuYnRuQ29udHJvbCgpXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=