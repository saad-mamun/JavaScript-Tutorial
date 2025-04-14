const menu = document.querySelector("#menu");
menu.addEventListener('click',(event)=>{
    let target = event.target;


    switch(target.id){
        case "home":
            console.log("you have click home button");
            break;
        case "about":
            console.log("you have click about button");
            break;
        case "report":
            console.log("you have click report button");
            break;        
    }
})