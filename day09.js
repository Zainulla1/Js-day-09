// Exercise -1

//find a palindrome in JS

var string=prompt("enter value")
string=string.toLocaleLowerCase()
const palindromeFind=(str)=> {
    //reverse string
    var reverseStr=str.split("").reverse().join("")
    if(reverseStr===str){
        return true
    }
    else{
        return false
    }
}
console.log(palindromeFind(string));

//Exercise -2

//Swap two variable without using the Third by using JS

let a=17;
let b=8;
//with using third variable
//let temp=a
// a=b
// b=temp
//without third variable
[a,b]=[b,a]
console.log(`value of a is ${a} and value of b is ${b}`);

//Exercise -3

//how to merged two arrays in JS

const arr1=['1','8','9']
const arr2=['45','7','19']
// concat
const finalArr=arr1.concat(arr2)
const sorterdArr=finalArr.sort(function(a,b){
    return a-b
})
const result=[...arr1,...a.arr2]
console.log(sorterdArr)
