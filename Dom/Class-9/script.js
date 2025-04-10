//mouse event
const btn = document.querySelector("#btn");
btn.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
});

btn.addEventListener('mouseup',(e)=>{
    let msg = document.querySelector("#message");
    switch(e.button) {
        case 0 :
            msg.textContent = "Left Click";
            break;
            case 1 :
                msg.textContent = "Middle Click";
                break;
                case 2 :
                    msg.textContent = "Right Click";
                    break;
                    default:
                        msg.textContent = ` Unknown Click ${e.button}`
    }
})

const clickMe = document.querySelector("#click");
clickMe.addEventListener('mousedown', ()=>{
    console.log("you have click Mouse down")
})
clickMe.addEventListener('mouseup',()=>{
    console.log("Mouse up")
})
clickMe.addEventListener('dblclick',()=>{
    console.log("Mouse double click")
})

let track = document.querySelector("#track");
track.addEventListener('mousemove', (e)=>{
    let log = document.querySelector("#log");
    log.innerText = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})
    `
})