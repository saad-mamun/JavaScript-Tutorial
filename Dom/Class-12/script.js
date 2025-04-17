const btn = document.querySelector("#btn");
const radioButton = document.querySelectorAll("input[type='radio']");
const output = document.querySelector('#output');

btn.addEventListener('click',()=>{
    let selectLanguage

    for( const RadioBtn of radioButton){
        if(RadioBtn.checked){
            selectLanguage = RadioBtn.value;
            break;
        }
    }
    output.innerHTML = selectLanguage;
})


// checkButton

const accept = document.querySelector("#accept");
accept.addEventListener('click',()=>{
    accept.checked = true;

    if(accept.checked){
        alert("Checked Is SuccessFul")
    }
})

//select box

const button = document.querySelector("#button");
const LanguageName = document.querySelector("#LanguageName");
button.addEventListener("click",()=>{
    alert(LanguageName.value)
})