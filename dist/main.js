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
    add.addEventListener('click',()=>toggleItemForm())

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
            name: 'This is my third thing to do',
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
            name: 'This is my third thing to do',
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



let currentList = projects[0]


const createProject = (name, description) => {
    projects.push(
        {
            name,
            list: [],
            description,
            complete: false,
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


function displayList(listArray) {
    let list = document.getElementById('current-list');
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
        projItem.innerHTML +=
            `<h3>${projects[i].name}</h3>` +
            `<p>${projects[i].list.length} items</p>`
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




displayProjects()
displayList(todayList)
;(0,_btnControl_js__WEBPACK_IMPORTED_MODULE_0__.default)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9idG5Db250cm9sLmpzIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbGVhbi10by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NsZWFuLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xlYW4tdG8tZG8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFU7Ozs7OztVQzVDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLENBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLHNCQUFzQjtBQUMvRDtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTs7O0FBR0EsbUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBLHdEQUFVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGJ0bkNvbnRyb2woKXtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRvZ2dsZUl0ZW1Gb3JtKCkpXG5cbiAgICBsZXQgc3VibWl0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXROZXdJdGVtQnRuJyk7XG4gICAgc3VibWl0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZUl0ZW1Gb3JtKCkpO1xuXG4gICAgbGV0IGFkZFByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvaicpO1xuICAgIGFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVQcm9qRm9ybSgpKTtcblxuICAgIGxldCBzdWJtaXROZXdQcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5ld1Byb2pCdG4nKTtcbiAgICBzdWJtaXROZXdQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlUHJvakZvcm0oKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUl0ZW1Gb3JtKCl7XG4gICAgbGV0IG5ld0l0ZW1TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtRm9ybScpO1xuXG4gICAgYWRkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvakZvcm0oKXtcbiAgICBsZXQgbmV3UHJvalNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2onKTtcblxuICAgIG5ld1Byb2pTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0taGlkZScpO1xuXG59XG5cblxuZnVuY3Rpb24gYWRkSXRlbVRyYW5zaXRpb24oKXtcbiAgICBsZXQgbmV3SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctaXRlbScpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbiAgICBuZXdJdGVtLnJlbW92ZUNoaWxkKHRpdGxlKTtcblxuICAgIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pbm5lckhUTUw9IFwiPGlucHV0IHR5cGU9ICd0ZXh0JyBpZD0nbGlzdEl0ZW1OZXcnIG5hbWU9J2xpc3RJdGVtTmV3Jz5cIjtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGZvcm0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ0bkNvbnRyb2wiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKCdpZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcblxuaW1wb3J0IGJ0bkNvbnRyb2wgZnJvbSAnLi9idG5Db250cm9sLmpzJztcblxubGV0IHRvZGF5TGlzdCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZpcnN0IHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHNlY29uZCB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHRoaXJkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfVxuXVxuXG5cbmxldCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVG9kYXlcIixcbiAgICAgICAgZGVzY3JpcHRpb246ICdUYXNrcyB0aGF0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRvZGF5JyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpcmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVGhpcyB3ZWVrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGFza3MgdGhhdCBuZWVkIHRvIGJlIGNvbXBsZXRlZCB0aGlzIHdlZWsnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmaXJzdCB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBzZWNvbmQgdG8gZG8nLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSB0aGlyZCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZvdXJ0aCB0aGluZyB0byBkbycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgICAgIFxuICAgICAgICB9XVxuICAgICAgICBcbiAgICB9LFxuXVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5jaGlsZHJlblswXSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9XG59XG5cblxuXG5sZXQgY3VycmVudExpc3QgPSBwcm9qZWN0c1swXVxuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIClcbiAgICB7cmV0dXJuIG5hbWUsIGRlc2NyaXB0aW9ufVxufVxuXG5mdW5jdGlvbiBhZGROZXdEbyhjdXJyZW50UHJvamVjdCwgbmFtZSwgcHJpb3JpdHkpe1xuICAgIGN1cnJlbnRQcm9qZWN0Lmxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheUxpc3QobGlzdEFycmF5KSB7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1saXN0Jyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtaXRlbScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XG4gICAgICAgICAgICBsaXN0Lmluc2VydEJlZm9yZShsaXN0SXRlbSwgYWRkSXRlbSk7XG5cbiAgICAgICAgICAgIGxpc3RJdGVtLmlubmVySFRNTCArPSBcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz0gXCJwcmlvcml0eSAke2xpc3RBcnJheVtpXS5wcmlvcml0eX1cIj4gPC9kaXY+YCArIFxuICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiPicgK1xuICAgICAgICAgICAgICAgIGA8cD4gJHtsaXN0QXJyYXlbaV0ubmFtZX0gPC9wPmAgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidHJhc2hcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+PC9kaXY+J1xuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpe1xuICAgIGxldCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtd3JhcHBlcicpO1xuICAgIHJlbW92ZUNoaWxkTm9kZXMocHJvamVjdHNMaXN0KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2pJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvakl0ZW0pO1xuICAgICAgICBwcm9qSXRlbS5pbm5lckhUTUwgKz1cbiAgICAgICAgICAgIGA8aDM+JHtwcm9qZWN0c1tpXS5uYW1lfTwvaDM+YCArXG4gICAgICAgICAgICBgPHA+JHtwcm9qZWN0c1tpXS5saXN0Lmxlbmd0aH0gaXRlbXM8L3A+YFxuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gbmV3UHJvaigpeyBcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qRm9ybUNvbnRhaW5lcicpO1xuICAgIGxldCB0aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZm9ybS5yZXNldCgpXG59XG5cblxubGV0IHByb2pTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmV3UHJvakJ0bicpO1xucHJvalN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5ld1Byb2ooKSlcblxuXG5cblxuZGlzcGxheVByb2plY3RzKClcbmRpc3BsYXlMaXN0KHRvZGF5TGlzdClcbmJ0bkNvbnRyb2woKVxuXG4iXSwic291cmNlUm9vdCI6IiJ9