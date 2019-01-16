let currentTagElements = [];

function searchByTagName(node, tagName) {
    
    if (node.children.length === 0) {
        return currentTagElements;
    }
    for (let index = 0; index < node.children.length; index++) {
        if (tagName.toLowerCase() === node.children[index].tagName.toLowerCase()) {
            currentTagElements.push(node.children[index]);
            console.log(node.children[index]);
        }
        searchByTagName(node.children[index], tagName);
    }
}

searchByTagName(document.body, 'div');
currentTagElements = [];
searchByTagName(document.body, 'h1');
currentTagElements = [];
searchByTagName(document.body, 'span');
currentTagElements = [];
searchByTagName(document.body, 'table');
currentTagElements = [];
searchByTagName(document.body, 'td');
currentTagElements = [];