
// normal function
let add = function(a,b){
    return console.log(a+b);
} 
add(10,32)

// Araay Function

let sum = (a,b,c) => {
    console.log(a+b-c);
}; //Multiple line  
console.log(sum(10,25,10));


let sm = p => p; //single line
console.log(sm(5));



//
let su = (a,b,c,d,e,f,g,h) => {
    console.log(a+b-c);
}; 
console.log(su.length);





// Call Method

const person = {
    FullName: function (){
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Liton",
    lastName: "Al-Mamaun"
}
let valueAdd = person.FullName.call(person1)
console.log(valueAdd);

// Apply Method

const user1 = {
    FullInfo : function (city,country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
const user2 = {
    firstName:"LITON",
    lastName:"ALI"
}
let UserInfo = user1.FullInfo.apply(user2 ,["Rajshahi","Bangladesh"])
console.log(UserInfo);


// Bind Method

const data = {
    firstName:"Mamun",
    lastName:"Ali",
    display:function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
let  display = data.display.bind(data);
setTimeout(display, 3000)


// callback function


function displayer(userdata){
    console.log(userdata);
};

function user(firstName,lastName,prof,age){
    firstName;
    lastName;
    prof;
    age;

    let info = firstName + lastName + ", " + prof +", " + age;
    return info
}
let myInfo = user("liton","al-mamun","Programmer","20");

displayer(myInfo)



// IIFE 
(function(a,b){
    return console.log(a + b);
})(20,50)

// symble use korew korajai


let addd = ((a,b) => {
    return console.log(a+b);
})(2,9)


// Promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const message = false

        if(message){
            resolve('success')
        }else{
            reject('failure')
        }
    })
})

myPromise.then((result)=>{
    console.log("Success: ",result);
})

.catch((error)=>{
    console.log("Error:",error);
})