const button = document.getElementById("click");
// function showAlert(){
//     alert("button was clicked")
// };
// button.addEventListener('click',showAlert)

button.addEventListener('click',function(event){
    console.log("The button was clicked")
    event.stopPropagation()
})


const imgLoad = document.querySelector("#imgLoad");
imgLoad.addEventListener('load', ()=>{
    alert("Image was loaded")
})

