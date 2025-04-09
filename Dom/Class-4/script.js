// Moving a node within the document

const firstList = document.querySelector('#first-list');
const everList = firstList.lastElementChild;
const listList = document.querySelector("#second-list");
listList.appendChild(everList)