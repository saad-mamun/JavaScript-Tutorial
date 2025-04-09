// Moving a node within the document

const firstList = document.querySelector('#first-list');
const everList = firstList.lastElementChild;
const listList = document.querySelector("#second-list");
listList.appendChild(everList)


const text = document.querySelector("#note");
text.textContent = "This is a note "
console.log(text.innerHTML)




const app = document.querySelector("#app");
const langs = ['HTML','JS','JAVA','PYTHON'];

const nodes = langs.map((lang)=>{
    const li = document.createElement('li');
    li.textContent = lang;
    return li;
})
app.prepend(...nodes)


