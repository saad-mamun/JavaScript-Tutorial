// default paramiter
function say(massage = "Hello Liton"){
    console.log(massage)
}
say()


// rest paramiter
function sum(a,b,c, ...n){
    console.log(a,b,c,n)
}
sum(1,2,3,4,5,6,7,8,9)