// default paramiter
// function say(massage = "Hello Liton"){
//     console.log(massage)
// }
// say()


// rest paramiter
// function sum(a,b,c, ...n){
//     console.log(a,b,c,n)
// }
// sum(1,2,3,4,5,6,7,8,9)

// let scroes = [50,70,80,90];
// for(let store of scroes){
//     console.log(store);
// }


// const rating = [
//     {username:"eshan", info:"founder of hublu progrmmaer"},
//     {username:"tutul", info:"co-founder of hublu programmer"},
//     {username:"liton", info:"Student of hublu programmer"}
// ]

//let sum = 0 //numbering er jonno lage

// for(let username of rating){
//     console.log(username);
// }

// itarate
// let ita = "liton al-mamun";
// for(let single of ita){
//     console.log(single);
// }



// const movieRating = new Map([
//     ["Inception",8.8],
//     ["Max",5.9],
//     ["Navab",7.9]
// ])

// for (const [movie, rating] of movieRating){
//     console.log( `${movie}: ${rating}`)
// }



// function sayhi(username,info){
//     return{
//         username,
//         info
//     }
// }
// console.log(sayhi("liton","Al-mamun"));


//other rules 2
//  let username = "liton",
//      myinfo= "i'm from MokromPUR"

// const MyInfo = {
// username,
// myinfo
// }
// console.log(MyInfo);

// step 3

// let name = "Liton";
// let info = {
//     [name]:"hi this is mamun"
// }
// console.log(info);


//step 4

// this is consice method

// let server = {
//     name: "server side",
//     restart(){
//         console.log("this is consice method");
//     }
// }
// console.log(server.restart());


//constracting array literals

// let valueone = [1,2,3,4,5];
// let valuetwo = [...valueone,6,7,8,9,10];
// console.log(valuetwo);



//Concatenting array

//multiple value add
// let friends =["Nasim","Mahim","Asik"];
// let family =['jorina',"ab-khalaque"];
// let myintro = [...family,...friends]; //spreed oparetor
// console.log(myintro);


//Coping in array
// let country = ["country","india","australia"];
// let worldCup = [...country];
// console.log(worldCup);


// let text5 = `hi,"this is liton"`;
// console.log(text5);


// multiline
// let text6 = `liton 
// al
// mamun
// saadmamun`;
// console.log(text6);

// interpolation

// let firstName = "Liton";
// let lastName = "Al-Mamun";
// console.log(`My name is ${firstName} ${lastName}`);

// sum

// let sum = 20;
// let sum1 = 30;
// console.log(`Now the sum is ${sum * sum1}`);



// user er data input kore rakhe CLASSES method..very very Importent
// class UserInfo {
//     constructor(name,prof,age,gender,hometown){
//         this.name = name;
//         this.prof = prof;
//         this.age = age;
//         this.gender = gender;
//         this.hometown = hometown;
//     }
// }

// const user1 = new UserInfo("Liotn","Programmer",20,"Male","Rajshahi");
// const user2 = new UserInfo("Mamun","Freelancer",21,"Male","Dhaka");
// console.log(user1);
// console.log(user2);



const person = {
    firstName:"Liton",
    lastName:"Mamun",
    age:21,
    // prof:   /// defoult valu hisebe kaj dorbe PROF
}

let {firstName,lastName,prof="programmer"} = person; // Destructuring ata k bole
console.log(prof);



// String Distructuring

// let string = "This is my world";
// let [a,b,c,d,e,f,h] = string;
// console.log(a);
// console.log(b);
// console.log(c);


// arry Dustructuring 
// let fruits = ["Apple","Banana","Mango"];
// let [fruit,fruit1,fruit2] = fruits;
// console.log(fruit2);



// Get
// Get dia property change korte pari
// const person = {
//     firstName:"Liton",
//     lastName:"Mamun",
//     age:20,
//     prof:"Programmer",
//     get pro(){
//         return this.prof;
//     }
// }
// console.log(person);
// console.log(person.pro)

// set
// set dia property er value change korte pari

// const userInfo = {
//     username : "Liton",
//     BusinessType : "edType Business",
//     email:"mamunali2660@gamil.com",
//      set Newemail(newmail){
//         this.email = newmail
//      }
// }

// userInfo.Newemail = "admingamilkk@gamil.com"
// console.log(userInfo);
// console.log(userInfo.email)



//  classExpreesion
 
//  let person = class {
//     constructor(name,email,password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
// }

// let about = new person("Liton","litonali5852@gamil.com");
// console.log(about);


// First class cityzen

// function Factory(litonclass){
//     return new litonclass()
// }
// let greating = Factory(class{
//     sayhi(){
//         console.log("Hello hublu vaiya");
//     }
// })

// greating.sayhi()


// let promName = "myName";


// const userInfo = {
//     [promName]:"Liton",
//     email:"litonali.com",
//     age:20
// }
// console.log(userInfo);



// Inheritance.......


// class car {
//     constructor(Brand){
//         this.Brand = Brand;
//     }
//     parent(){
//         return "My brand name is " + this.Brand
//     }
// }

// class Model extends car{
//     constructor(Brand,Model){
//         super(Brand);
//         this.Model = Model;
//     }
//     show(){
//         return this.parent() + " and Model is" + this.Model;
//     }
// }

// let myCar = new  Model("BMW","x7");
// console.log(myCar.show());



//newtarget......
// function Person(name){
//     if(!new.target){
//         throw "Must use paretor with this person function";
//     }
//     this.name = name;
// }
// let myPerson = new Person("Liotn Al Mamun")
// console.log(myPerson);


// function Shape(draw){
//     if(!new.target){
//         throw new "cannot draw"
//     }
//     this.draw = draw;
// }
// const pak = new Shape("liton Al Mamun");
// console.log(pak);







// get method


// const fruits = new Map(
//     [
//         ["Apple", 500],
//         ["Banana", 200],
//         ["Oranges", 100]
//     ]
// )

// let Info = fruits.get("Oranges");
// console.log("Today Banana  in " + Info + " tk");



// set method

// const TeamInfo = new Map();

// TeamInfo.set("CEO","Liton");
// TeamInfo.set("Teacher", "Mamun");
// TeamInfo.set("TeamLeader", "Saadman");
// TeamInfo.set("TeamMembers", 9);

// console.log(TeamInfo);
// console.log(TeamInfo.get("CEO"));

// MAP.SIZE

// console.log(TeamInfo.size);




// promises
// let message = true;
// let message = false;

// let myPromise = new Promise((resolve,reject) => {

//     if(message){
//         resolve([
//             {username:"Liton",age:20, prof:"programmer", country:"BD"},
//             {username:"Mamun", age:22, prof:"content-creator", country:"BD"}
//         ])
//     }else{
//         reject("You are not Bangladeshi, so go away please")
//     }
// })

// myPromise.then((success) => {
//     console.log(success);
// })

// myPromise.catch((error) =>{
//     console.log(error);
// })