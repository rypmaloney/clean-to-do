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

export {removeChildNodes, removeAllButOne };
