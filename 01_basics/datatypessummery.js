// primitive data types
// 7 types -> string, number, bigint, boolean, symbol, null, undefined

let name = "albert" // string
console.log(typeof name) //string

let age = 20 //number & int percent = 22.22 is also number
console.log(typeof age) // number

let bigNumber = 22345668349872345445n // bigint
console.log(typeof bigNumber) // bigint

let isLoggedIn = true //boolean
console.log(typeof isLoggedIn) // boolean

const id = Symbol('123')  // symbol
const uniqueID = Symbol('123')
console.log(typeof uniqueID) //symbol
//console.log(id === uniqueID) // false 

let temperature = null // null
console.log(typeof temperature)// object

let status; //undefined or not defined
console.log(typeof status) //undefined

//(reference)non-primitive data types
// 3 -> types Array, object, function

let mcHeros = ["IronMan", "SpiderMan", "Thor"]
console.log(typeof mcHeros) //object
let myObj = {
      name:"Albert",
      age:22,
      isMarried:false
    }
    console.log(typeof myObj) //object
let message = function (){
    console.log("HIIIII")
}
console.log(typeof message) // function
//*******************************************
//stack (primitive)  heap(non-primitive)
let user_1 = "Albert"
let user_2 = user_1
  user_2 = "Raj"
// this changes the user_2 value but not user_1 as we get a copy of user_1

let obj_1 = {
    name:"Raj",
    age:22
}
let obj_2 = obj_1
obj_2.name = "ALbert"
console.log(obj_1)
console.log(obj_2)
// in this both object name get changed to albert as we get a common reference for both objects unlike stack where we get a copy