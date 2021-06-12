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

        }


}
displayList(todayList)