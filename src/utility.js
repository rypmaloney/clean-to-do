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






function todaysDateNumber(){
        let d = new Date()
    
        let fy = d.getFullYear()
        let da = d.getDate()
        let mo = d.getMonth()
    
        let dateString = '' + fy + mo + da;
    
        return Number(dateString)
    }
    
    function dateToNumber(dateString){
        let date = dateString.split('-');
         return Number(date[0]+date[1]+date[2]);
     
     }



export {removeChildNodes, removeAllButOne, dateToNumber, todaysDateNumber};
