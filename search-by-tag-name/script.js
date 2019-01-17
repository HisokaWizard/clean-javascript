function searchByTagName(node, tagName) {
    const currentTagElements = [];
    const recursiveSearch = (node, tagName) => {
        if (node.children.length === 0) {
            return;
        }
        for (let index = 0; index < node.children.length; index++) {
            if (tagName.toLowerCase() === node.children[index].tagName.toLowerCase()) {
                currentTagElements.push(node.children[index]);
            }
            recursiveSearch(node.children[index], tagName);
        }
    };
    recursiveSearch(node, tagName);
    return currentTagElements;
}

console.log(searchByTagName(document.body, 'div'));
console.log(searchByTagName(document.body, 'h1'));
console.log(searchByTagName(document.body, 'span'));
console.log(searchByTagName(document.body, 'table'));
console.log(searchByTagName(document.body, 'td'));
