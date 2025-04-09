const div = document.createElement("div");
div.innerHTML="<h1>This is createElement</h1>"
div.id="getId";
div.classList="getClass"
div.style.cssText="color:red; font-family:Arial"

let h2 =document.createElement("h2");
h2.textContent="This is h2 tag"
div.appendChild(h2)

const text = document.createTextNode("this is text node");
div.appendChild(text)

console.log(div)
document.body.appendChild(div);

const menu =document.querySelector("#menu")
const li = document.createElement("li");
li.textContent = "About Us";
li.classList="list";
li.id="listId"
menu.appendChild(li)
const li2 = document.createElement("li");
li2.textContent = "Contact Us";
menu.appendChild(li2);
console.log(menu)
function createElement(menuList){
    let li = document.createElement("li");
    li.textContent = menuList;
    return li;
}
menu.appendChild(createElement("Services"));
menu.appendChild(createElement("Products"))