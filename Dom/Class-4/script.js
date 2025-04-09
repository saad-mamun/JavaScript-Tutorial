// Moving a node within the document

const firstList = document.querySelector('#first-list');
const everList = firstList.lastElementChild;
const listList = document.querySelector("#second-list");
listList.appendChild(everList)


const text = document.querySelector("#note");
text.textContent = "This is a note "
console.log(text.innerHTML)





const app = document.querySelector("#app");
const langs = ['js','python','c#','php','java'];
const node = langs.map((Prolangs)=>{
    let li = document.createElement("li");
    li.textContent = Prolangs;
    return li
});
app.append(...node)