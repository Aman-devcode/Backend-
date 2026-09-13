const fs=require('fs');
let a=10;
let b="hellow ji";
console.log(b);
function sum(a,b){
    console.log(a+b);
}
fs.readFile("./data.json","utf-8",(err,res)=>{
    console.log(res)
})
setTimeout(()=>{
    console.log("hellow Time out")

},3000)
console.log(a);
console.log(sum(5,7));