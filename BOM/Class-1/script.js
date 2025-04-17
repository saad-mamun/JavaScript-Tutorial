const screenInfo = document.querySelector("#screenInfo");
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const screenAvailWidth = window.screen.availWidth;
const screenAvailHeight = window.screen.availHeight;

screenInfo.innerHTML = `
<strong>screen width : ${screenWidth} px</strong>
<strong>screen height : ${screenHeight} px</strong>
<strong>screen availWidth : ${screenAvailWidth} px</strong>
<strong>screen availHeight : ${screenAvailHeight} px</strong>

`




let windowObj = document.querySelector("#openNewWindow");
let closeWindow = document.querySelector("#closeWindow");

let myWindow;
windowObj.addEventListener('click', ()=>{
    myWindow = window.open("https://www.mobiledokan.com/", "Mobile Dokan", "width=700, height=600")
});
closeWindow.addEventListener('click',()=>{
    myWindow.close()
})



let deleteMe = document.querySelector("#deleteMe");
deleteMe.addEventListener('click', ()=>{
    userConformation = confirm("Are you sure you want to delete this file?");
    if(userConformation){
        alert("item delete")
    }else{
        alert("item not delete")
    }
})




let askMe = document.querySelector("#askMe");
askMe.addEventListener('click', ()=>{
    let userName = prompt("please enter your name");
    if(userName !== null && userName !== ""){
        alert("Hello " + userName + " Wellcome to my website")
    }else{
        alert("You did not entered your name!")
    }
})



// set timeout

// function greeting(){
//     alert("Hey Liton")
// }
// setTimeout(greeting, 3000)

// setintervel

// let counter = 0;
// function counterUp(){
//     counter ++;
//     console.log(counter)
// };
// setInterval(counterUp, 2000)


// location

// function onTime(){
//     window.location.assign("https://www.javascripttutorial.net/")
// }
// setTimeout(onTime, 4000)



console.log(navigator.userAgent);