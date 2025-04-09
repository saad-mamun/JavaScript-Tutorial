const menu = document.querySelector("#language");
const otherLanguage = ['js','jsav','d']

const fragment = new DocumentFragment();

otherLanguage.forEach((lang)=>{
    let li = document.createElement('li');
    li.innerHTML = lang;
    fragment.appendChild(li)
})
menu.appendChild(fragment)


const list = document.querySelector('.app');
const listItem = ['love person','love dog','love cat'];

const node = listItem.map((item)=>{
    const li = document.createElement('li');
    li.textContent = item;
    return li;
})
list.prepend(...node)




// after method.....

const menubar = document.querySelector('#menu');

const libs = ['jquary','bootstrap','react'];
const allLabs = libs.map((lib)=>{
    let li = document.createElement('li');
    li.textContent = lib;
    return li;
});
menubar.lastChild.after(...allLabs)
// before method
const menuItem = ['list','item','item','item'];
const nodes= menuItem.map((item)=>{
    const li = document.createElement('li');
    li.textContent = item;
    return li;
})
menubar.lastChild.before(...nodes)

// insertAdjacentHtml method

menubar.insertAdjacentHTML('beforebegin','<p>All Languages</p>');
menubar.insertAdjacentHTML('afterbegin','<li>css</li>')
menubar.insertAdjacentHTML('beforeend','<li>html</li>')
menubar.insertAdjacentHTML('afterend','<h3>AfterEnd</h3>')

// replace method

let li = document.createElement('li');
li.textContent = 'react';
menubar.replaceChild(li, menubar.firstElementChild)

// clone node

let cloneMenu = menubar.cloneNode(true);
cloneMenu.id = 'clone-menu';
document.body.appendChild(cloneMenu)

// removeChild
menubar.removeChild(menubar.lastElementChild
)

// insertBefore method
// const li2 = document.createElement('li');
// li2.textContent='js';
// menubar.insertBefore(li2, menubar.firstElementChild)
// menubar.insertBefore(li2, menubar.lastElementChild)



console.log(menubar)