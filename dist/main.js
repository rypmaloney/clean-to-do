/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('if you see me, everything is A O K')

todayList = [
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

function displayList(listArray) {
    let list = document.getElementById('current-list');
        for (i = 0; i < listArray.length; i++) {
            let listItem = document.createElement('div');
            listItem.setAttribute('class', 'list-item');
            listItem.setAttribute('data', i);
            list.appendChild(listItem);

            listItem.innerHTML += 
            `<div class= "priority ${listArray[i].priority}"> </div>` + 
            '<input type="checkbox" class="checkbox">' +
            `<p> ${listArray[i].name} </p>`

            /*
            let listItem = document.createElement('div');
            listItem.setAttribute('class', 'list-item');
            listItem.setAttribute('data', i);
            list.appendChild(listItem);

            let priority = document.createElement('div');
            priority.setAttribute('class', 'priority');
            if (listArray[i].priority == 'high'){
                    priority.classList.add('high');
                } else if (listArray[i].priority == 'medium'){
                    priority.classList.add('medium')
                } else { 
                    priority.classList.add('low')
                }
            listItem.appendChild(priority);

            let checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.setAttribute('class', 'checkbox');
            listItem.appendChild(checkBox);

            let name = document.createElement('p');
            name.textContent = listArray[i].name;
            listItem.appendChild(name);
                */
        }


}
displayList(todayList)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQSxtQkFBbUIsa0JBQWtCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCLE87QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esc0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdpZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcblxudG9kYXlMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZmlyc3QgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgc2Vjb25kIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgdGhpcmQgdGhpbmcgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgXG4gICAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpcyBpcyBteSBmb3VydGggdGhpbmcgdG8gZG8nLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9XG5dXG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KGxpc3RBcnJheSkge1xuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbGlzdCcpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgKz0gXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz0gXCJwcmlvcml0eSAke2xpc3RBcnJheVtpXS5wcmlvcml0eX1cIj4gPC9kaXY+YCArIFxuICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+JyArXG4gICAgICAgICAgICBgPHA+ICR7bGlzdEFycmF5W2ldLm5hbWV9IDwvcD5gXG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIGlmIChsaXN0QXJyYXlbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdEFycmF5W2ldLnByaW9yaXR5ID09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbG93JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblxuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gbGlzdEFycmF5W2ldLm5hbWU7XG4gICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICB9XG5cblxufVxuZGlzcGxheUxpc3QodG9kYXlMaXN0KSJdLCJzb3VyY2VSb290IjoiIn0=