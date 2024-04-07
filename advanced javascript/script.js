console.log(a1);
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })

}
(async function main(){
    console.log(a1)
    //iife
// let a=await sleep()
// console.log(a)
// let b=await sleep()
// console.log(b)

//destructring
let [x,y]=[1,5,7]
console.log(x,y)
let [m,n]=[2,5]
console.log(m,n)

// let [a,b,...rest]=[1,5,7,8,9,10]
// console.log(a,b,rest)

let obj={
    a:1,
    b:2,
    c:4
}
let {a,b,c}=obj
console.log(a,c)

//spread syntax
function sum(a,b,c){
    return a+b+c
}
let arr=[1,4,6]
console.log(sum(arr[0],arr[1],arr[2]))
//OR
console.log(sum(...arr))

//hosting
var a1=5//look above a1 gives undefined
//in let and const the hosting is not possible
})()
var a1=6
