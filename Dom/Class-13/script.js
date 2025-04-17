 const framework = document.querySelector("#framework");
const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
const btnRemove = document.querySelector("#btnRemove");

btnAdd.addEventListener("click",(e)=>{
    e.preventDefault()

    if(framework.value == ""){
        alert("input field is empty")
        return;
    }
 // create a new option
    const option = new Option(framework.value, framework.value);

  // add it to the list
    list.add(option, undefined);
    framework.value = '';
});

btnRemove.addEventListener('click',(event)=>{
    event.preventDefault();

      // save the selected options
    let selected = [];

    for(let i = 0; i <list.options.length; i++){
        selected[i]=list.options[i].selected
    }
    // remove all selected option
    let index = list.options.length;
    while(index--){
        if(selected[index]){
            list.remove(index)
        }
    }
})