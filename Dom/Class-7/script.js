const elements = document.querySelector("#elements");
elements.style.color = "red";
elements.style.fontFamily = "Arial, sans-serif"

// getComputedStyle 
let style = getComputedStyle(elements);
console.log(style.color)


// className
elements.className += "newClassName";
console.log(elements.className)
const classname = elements.classList.add("cls")
console.log(elements)

let div = document.querySelector("#content");
div.classList.add('class1','class2','class3')
div.classList.remove('class2')
for(let cssClass of div.classList){
    console.log(cssClass)
}




let box = document.querySelector('.box');
        let width = box.offsetWidth;
        let height = box.offsetHeight;
        console.log({ width, height });