// get attribute
     let link = document.querySelector('#js');
        if (link) {
            let target = link.getAttribute('target');
            let targetid = link.getAttribute('id')
            console.log(targetid);
        }


// set attribute
const btn = document.querySelector("#btn");
btn.setAttribute('class','btn-primary')
btn.setAttribute('name','btn-name');
btn.setAttribute('disabled','')
console.log(btn)


// remove attribute
btn.removeAttribute('class')

// has attribute

let data = btn.hasAttribute('id');
console.log(data)