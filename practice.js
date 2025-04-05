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
