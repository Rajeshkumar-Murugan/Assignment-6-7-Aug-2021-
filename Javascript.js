
console.log("===================Block/Scope/Shadowing example start==========================")
var a="variable";
let b="let";
const c="constant";

console.log("a: "+a)// value of variable a is assigned Output: "variable"
console.log("b: "+b) // value of let b is assigned Output: "let"
console.log("c: "+c)// value of const c is assigned Output: "constant"
console.log("------- Modified values inside block with same variable type---------")
{
    var a="Modified variable ";
    let b="Assigned let inside block";
    const c="Assigned Const inside block"; 
    console.log("a: "+a) // value of variable a is modified Output: "variable change"
    console.log("b: "+b) // value of let b inside the block is not modified, Output:"Assigned let inside block"
    console.log("c: "+c) // value of let b inside the block is not modified Output:"Assigned Const inside block"
    console.log("Example: let and const variables are stored in separate memory space, so it is called block-scoped")
}
console.log("--------Modified values outside block--------")
console.log("a: "+a)// value of variable a is modified Output: "variable change"
console.log("b: "+b) // value of let b outside the block is not modified Output:"let"
console.log("c: "+c) // value of let b outside the block is not modified Output:"constant"
console.log("Note: var variables can be accessed outside the block as it is stored in the Global object memory space, hence it is called Global scoped.")
console.log("=======================Block/Scope/Shadowing example end======================")

console.log("===================Illegal shadowing example start==========================")

var d="variable";
let e="let";
const f="constant";
console.log("d: "+d)// value of var d is assigned Output: "variable"
console.log("e: "+e) // value of var e is assigned Output: "let"
console.log("f: "+f) //value of var f is assigned Output: "Const"
console.log("-------Modified variables type and values---------")

{
    let d="Modified var to let" //declaring var to let
    //var e="Modified let to var" //declaring let to var
    //var f="Modified const to var"  //declaring const to var
    console.log("d: "+d)//   Output: "Modified let to var"
    //console.log("e: "+e) // Modified let to var an SyntaxError: Identifier 'e' has already been declared
    //console.log("f: "+f) // Modified let to var an SyntaxError: Identifier 'f' has already been declared
    console.log("----------------")
}


{
    const d="Modified var to const" //declaring var to const
    const e="Modified let to const" //declaring let to const
    let f="Modified const to let"  //declaring const to let
    console.log("d: "+d)//  Output: "Modified var to const"
    console.log("e: "+e) // Output: "Modified let to const"
    console.log("f: "+f) // Output: "Modified const to let"
    console.log("----------------")
}
console.log("=================== Illegal shadowing example end ==========================")   

console.log("===============Hoisting/temporal deadzone example start=====================")

console.log(g) // variable is assigned with value undefined Output:undefined
//console.log(h) // (deadzone) ReferenceError: Cannot access 'h' before initialization 
//console.log(i) // (deadzone) ReferenceError: Cannot access 'i' before initialization

var g="value assigned var"
let h="value assigned let"
const i="value assigned const"

console.log("g: " +g); //variable is assigned with value undefined Output:value assigned var
console.log("h: " +h);//variable is assigned with value undefined Output:value assigned let
console.log("i: " +i);//variable is assigned with value undefined Output:value assigned Const

console.log("===============Hoisting/temporal deadzone example end=====================")
