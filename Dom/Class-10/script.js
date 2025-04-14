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

