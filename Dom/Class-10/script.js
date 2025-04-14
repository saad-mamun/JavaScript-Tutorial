const controller = document.querySelector("#controller")

controller.addEventListener('click', function(e){
    const ScrollExample = document.querySelector("#ScrollExample")
    let event = e.target;

    switch(event.id){
    case "btnl":
        ScrollExample.scrollLeft += 20;
        break;
        case "btnt":
            ScrollExample.scrollTop +=20;
            break;
            }

});

// focus
const user = document.querySelector("#userid");
user.addEventListener('focus', (e)=>{
    e.target.style.backgroundColor='yellow'
})
user.addEventListener('blur',(e)=>{
    e.target.backgroundColor=''
})

// hashchange

const UpdateContent = () =>{
    const content = document.querySelector("#content");
    const hash = window.location.hash.substring(1);

    switch(hash){
        case "home":
            content.innerHTML = "<h1>This is home page</h1>";
            break;
        case 'about':
            content.innerHTML = '<h1>This is about page</h1>';
            break;
        case 'contact':
            content.innerHTML = '<h1>This is contact page</h1>';
            break;

    }
}
window.addEventListener('hashchange',UpdateContent)