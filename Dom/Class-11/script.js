const menu = document.querySelector("#menu");
menu.addEventListener('click', function (e){
    let target = e.target;

    switch(target.id){
        case 'home':
            console.log("home button")
            break;
        case 'about':
            console.log('about button')
            break;
        case 'contact':
            console.log('contact button')
            break;
    }
})


// JavaScript dispatchEvent

const myButton = document.getElementById("myButton");
myButton.addEventListener('click',()=>{
    alert('Button was clicked')
})
const event = new Event('click');
myButton.dispatchEvent(event)