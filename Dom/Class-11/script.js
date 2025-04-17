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



//  JavaScript Custom Events

document.addEventListener("Notify",()=>{  // 2nd para
    alert("custom event fired")
})


const myBtn = document.querySelector("#myBtn"); //1st para

myBtn.addEventListener('click',()=>{
    let event = new CustomEvent("Notify");
    document.dispatchEvent(event)
})


//CustomEvent Example

 function highlight(elem) {
            const bgColor = 'yellow';
            elem.style.backgroundColor = bgColor;

            // create the event
            let event = new CustomEvent('highlight', {
                detail: {
                    backgroundColor: bgColor
                }
            });
            // dispatch the event
            elem.dispatchEvent(event);
        }

        // Select the div element
        let div = document.querySelector('.note');

        // Add border style
        function addBorder(elem) {
            elem.style.border = "solid 1px red";
        }

        // Listen to the highlight event
        div.addEventListener('highlight', function (e) {
            addBorder(this);

            // examine the background
            console.log(e.detail);
        });

        // highlight div element
        highlight(div);