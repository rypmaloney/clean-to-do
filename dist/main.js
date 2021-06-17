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
    let date = `'${form.dueDate.value}'`
    addNewDo(currentProject, form.listItemNew.value, form.priority.value, date)
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
            let checkBoxMark = '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9idG5Db250cm9sLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7Ozs7O0FBS0EsaUVBQWUsVTs7Ozs7Ozs7Ozs7Ozs7O0FDeERmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEM7Ozs7Ozs7VUNaNUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BB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Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0Esd0RBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBidG5Db250cm9sKCl7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4gdG9nZ2xlSXRlbUZvcm0oKSlcblxuICAgIGxldCBzdWJtaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld0l0ZW1CdG4nKTtcbiAgICBzdWJtaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlSXRlbUZvcm0oKSk7XG5cbiAgICBsZXQgYWRkUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qJyk7XG4gICAgYWRkUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVByb2pGb3JtKCkpO1xuXG4gICAgbGV0IHN1Ym1pdE5ld1Byb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xuICAgIHN1Ym1pdE5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQcm9qRm9ybSgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSXRlbUZvcm0oKXtcbiAgICBsZXQgbmV3SXRlbVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1Gb3JtJyk7XG5cbiAgICBhZGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qRm9ybSgpe1xuICAgIGxldCBuZXdQcm9qU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybScpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvaicpO1xuXG4gICAgbmV3UHJvalNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1oaWRlJyk7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRJdGVtVHJhbnNpdGlvbigpe1xuICAgIGxldCBuZXdJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIG5ld0l0ZW0ucmVtb3ZlQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTD0gXCI8aW5wdXQgdHlwZT0gJ3RleHQnIGlkPSdsaXN0SXRlbU5ldycgbmFtZT0nbGlzdEl0ZW1OZXcnPlwiO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIGxldCBkYXRlID0gYCcke2Zvcm0uZHVlRGF0ZS52YWx1ZX0nYFxuICAgIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBmb3JtLmxpc3RJdGVtTmV3LnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlLCBkYXRlKVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBidG5Db250cm9sIiwiZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuY2hpbGRyZW5bMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQnV0T25lKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5jaGlsZHJlblswXSk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlbW92ZUNoaWxkTm9kZXMsIHJlbW92ZUFsbEJ1dE9uZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zb2xlLmxvZygnaWYgeW91IHNlZSBtZSwgZXZlcnl0aGluZyBpcyBBIE8gSycpXG5cbmltcG9ydCBidG5Db250cm9sIGZyb20gJy4vYnRuQ29udHJvbC5qcyc7XG5pbXBvcnQge3JlbW92ZUNoaWxkTm9kZXMsIHJlbW92ZUFsbEJ1dE9uZX0gZnJvbSAnLi91dGlsaXR5LmpzJztcblxubGV0IHRvZGF5TGlzdCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZpcnN0IHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHNlY29uZCB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHRoaXJkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfVxuXVxuXG5sZXQgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFsbFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCB0by1kbyBpdGVtcycsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudDogdHJ1ZSxcbiAgICAgICAgbGlzdDogW10sXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRvZGF5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGFza3MgdGhhdCBuZWVkIHRvIGJlIGNvbXBsZXRlZCB0b2RheScsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmaXJzdCB0b2FkZmFzZiBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMTgtMDgtMDMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHNlY29uZCB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgICBkYXRlOiAnMjAxOC0wOC0wMycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHRoaWFzZGZhc2RmcmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMTgtMDgtMDMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE4LTA4LTAzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVGhpcyB3ZWVrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGFza3MgdGhhdCBuZWVkIHRvIGJlIGNvbXBsZXRlZCB0aGlzIHdlZWsnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE4LTA4LTAzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE4LTA4LTAzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpcmRhc2ZkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE4LTA4LTAzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAxOC0wOC0wMycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH1dXG4gICAgICAgIFxuICAgIH0sXG5dXG5cbiBcbi8vUFJPSkVDVFNcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgKVxuICAgIHtyZXR1cm4gbmFtZSwgZGVzY3JpcHRpb259XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCl7XG4gICAgbGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy13cmFwcGVyJyk7XG4gICAgcmVtb3ZlQ2hpbGROb2Rlcyhwcm9qZWN0c0xpc3QpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvakl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qSXRlbSk7XG4gICAgICAgIHByb2pJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpO1xuICAgICAgICBpZiAocHJvamVjdHNbaV0uY3VycmVudCkge3Byb2pJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3VycmVudC1wcm9qZWN0IHByb2plY3QnKX07XG4gICAgICAgIHByb2pJdGVtLmlubmVySFRNTCArPVxuICAgICAgICAgICAgYDxoMz4ke3Byb2plY3RzW2ldLm5hbWV9PC9oMz5gICtcbiAgICAgICAgICAgIGA8cD4ke3Byb2plY3RzW2ldLmxpc3QubGVuZ3RofSBpdGVtczwvcD5gO1xuICAgICAgICBpZiAoaSA9PT0gMikge3Byb2pJdGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMzBweFwifVxuICAgICAgIHByb2pJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtjaGFuZ2VDdXJyZW50UHJvaihlKX0pICAgXG4gICAgfVxufTtcblxuXG5mdW5jdGlvbiBwb3B1bGF0ZUFsbCgpe1xuICAgIHByb2plY3RzWzBdLmxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0wOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAocHJvamVjdHNbaV0ubmFtZSAhPT0gJ0FsbCcpe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1tpXS5saXN0Lmxlbmd0aDsgaisrKVxuICAgICAgICAgICAgICAgIHByb2plY3RzWzBdLmxpc3QucHVzaChwcm9qZWN0c1tpXS5saXN0W2pdKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qKCl7IFxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pGb3JtQ29udGFpbmVyJyk7XG4gICAgbGV0IHRpdGxlID0gZm9ybS50aXRsZS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICBmb3JtLnJlc2V0KClcbn1cblxuXG5sZXQgcHJvalN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXROZXdQcm9qQnRuJyk7XG5wcm9qU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmV3UHJvaigpKVxuXG5cblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFByb2ooZSl7XG4gICAgbGV0IGFjdGl2ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGFcIik7XG4gICAgY29uc29sZS5sb2coYWN0aXZlKVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHByb2plY3RzW2ldLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm9qZWN0c1thY3RpdmVdLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICBkaXNwbGF5TGlzdChwcm9qZWN0c1thY3RpdmVdKVxufVxuXG5mdW5jdGlvbiBmaW5kQ3VycmVudFByb2ooKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS5jdXJyZW50KSByZXR1cm4gcHJvamVjdHNbaV0gICBcbn1cblxuXG5cbi8vTElTVHNcbmZ1bmN0aW9uIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBuYW1lLCBwcmlvcml0eSwgZGF0ZSl7XG4gICAgY3VycmVudFByb2plY3QubGlzdC5wdXNoKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5TGlzdChwcm9qZWN0KSB7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1saXN0Jyk7XG4gICAgcmVtb3ZlQWxsQnV0T25lKGxpc3QpXG5cbiAgICBsZXQgdGl0bGVTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXByb2plY3QtdGl0bGUnKTtcbiAgICB0aXRsZVNwYWNlLmlubmVySFRNTCA9IFxuICAgICAgICBgPGgyPiR7cHJvamVjdC5uYW1lfTwvaDI+YCArIFxuICAgICAgICBgPHA+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5gXG4gICAgXG5cbiAgICBsZXQgbGlzdEFycmF5ID0gcHJvamVjdC5saXN0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IGFkZEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKTtcbiAgICAgICAgICAgIGxpc3QuaW5zZXJ0QmVmb3JlKGxpc3RJdGVtLCBhZGRJdGVtKTtcbiAgICAgICAgICAgIGxldCBjaGVja0JveE1hcmsgPSAnJztcblxuICAgICAgICAgICAgaWYgKGxpc3RBcnJheVtpXS5jb21wbGV0ZSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBsZXRlIGxpc3QtaXRlbScpXG4gICAgICAgICAgICAgICAgY2hlY2tCb3hNYXJrID0gXCI8c3BhbiBzdHlsZSA9J2ZvbnQtc2l6ZTogMThweDsgbWFyZ2luLWxlZnQ6IDNweDsgcG9pbnRlci1ldmVudHM6IG5vbmU7Jz4mIzEwMDA0Ozwvc3Bhbj5cIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gJ0FsbCcpe1xuICAgICAgICAgICAgICAgIGFkZEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBhZGRJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgKz0gXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSBcInByaW9yaXR5ICR7bGlzdEFycmF5W2ldLnByaW9yaXR5fVwiPiA8L2Rpdj5gICsgXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIiBkYXRhPVwiJHtpfVwiPiR7Y2hlY2tCb3hNYXJrfTwvZGl2PmAgK1xuICAgICAgICAgICAgICAgICAgICBgPHA+ICR7bGlzdEFycmF5W2ldLm5hbWV9IDwvcD5gICtcbiAgICAgICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5kYXRlfSA8L3A+YCBcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgICAgICAgICAgICAgYWRkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MICs9IFxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz0gXCJwcmlvcml0eSAke2xpc3RBcnJheVtpXS5wcmlvcml0eX1cIj4gPC9kaXY+YCArIFxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImNoZWNrYm94XCIgZGF0YT1cIiR7aX1cIj4ke2NoZWNrQm94TWFya308L2Rpdj5gK1xuICAgICAgICAgICAgICAgICAgICBgPHA+ICR7bGlzdEFycmF5W2ldLm5hbWV9IDwvcD5gICtcbiAgICAgICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5kYXRlfSA8L3A+YCArXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidHJhc2hcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+PC9kaXY+YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHJhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmFzaCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhc2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyYXNoW2ldLnNldEF0dHJpYnV0ZSgnZGF0YScsIGkpXG4gICAgICAgICAgICB0cmFzaFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVJdGVtKGUsIHByb2plY3QpKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDaGVja0xpc3RlbmVyKClcbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIGFkZE5ld0RvKGN1cnJlbnRQcm9qZWN0LCBmb3JtLmxpc3RJdGVtTmV3LnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuICAgIHBvcHVsYXRlQWxsKClcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5TGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG5cblxuLy9wZXJoYXBzIHRvbyB0aWdodGx5IHRpZWQgdG8gZGlzcGxheUxpc3RcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZSwgcHJvamVjdCl7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpXG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBwcm9qZWN0Lmxpc3Quc3BsaWNlKGl0ZW0sMSlcbiAgICBwb3B1bGF0ZUFsbCgpO1xuICAgIGRpc3BsYXlMaXN0KHByb2plY3QpO1xuXG59XG5cblxuXG5mdW5jdGlvbiBjb21wbGV0ZUl0ZW0oZSl7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJykpXG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBsZXQgcHJvamVjdCA9IGZpbmRDdXJyZW50UHJvaigpO1xuXG4gICAgcHJvamVjdC5saXN0W2l0ZW1dLmNvbXBsZXRlID8gcHJvamVjdC5saXN0W2l0ZW1dLmNvbXBsZXRlID0gZmFsc2UgOiBwcm9qZWN0Lmxpc3RbaXRlbV0uY29tcGxldGUgPSB0cnVlO1xuICAgIHBvcHVsYXRlQWxsKCk7XG4gICAgZGlzcGxheUxpc3QocHJvamVjdCk7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxucG9wdWxhdGVBbGwoKVxuZGlzcGxheVByb2plY3RzKClcbmRpc3BsYXlMaXN0KHByb2plY3RzWzBdKVxuYnRuQ29udHJvbCgpXG5hZGRDaGVja0xpc3RlbmVyKClcblxuXG5mdW5jdGlvbiBhZGRDaGVja0xpc3RlbmVyKCl7XG4gICAgbGV0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3gnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgYm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY29tcGxldGVJdGVtKGUpKVxuICAgIH1cbn1cblxubGV0IHN1Ym1pdE5ld0l0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3SXRlbUJ0bicpO1xuICAgIHN1Ym1pdE5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4gYWRkVG9MaXN0KCkpXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==