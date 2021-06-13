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