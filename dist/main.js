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
                `<p> ${listArray[i].name} </p>` +
                '<div class="trash"><i class="fa fa-trash-o"></i></div>'
        }
}
displayList(todayList)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGVhbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHNCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnaWYgeW91IHNlZSBtZSwgZXZlcnl0aGluZyBpcyBBIE8gSycpXG5cbnRvZGF5TGlzdCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IGZpcnN0IHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHNlY29uZCB0byBkbycsXG4gICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGlzIGlzIG15IHRoaXJkIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2UsIFxuICAgICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaXMgaXMgbXkgZm91cnRoIHRoaW5nIHRvIGRvJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLCBcbiAgICAgICAgXG4gICAgfVxuXVxuXG5mdW5jdGlvbiBkaXNwbGF5TGlzdChsaXN0QXJyYXkpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWxpc3QnKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtaXRlbScpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MICs9IFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSBcInByaW9yaXR5ICR7bGlzdEFycmF5W2ldLnByaW9yaXR5fVwiPiA8L2Rpdj5gICsgXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+JyArXG4gICAgICAgICAgICAgICAgYDxwPiAke2xpc3RBcnJheVtpXS5uYW1lfSA8L3A+YCArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0cmFzaFwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT48L2Rpdj4nXG4gICAgICAgIH1cbn1cbmRpc3BsYXlMaXN0KHRvZGF5TGlzdCkiXSwic291cmNlUm9vdCI6IiJ9