"use strict"; //treat this code as per the newer version

//alert(3+3);
// we are using nodejs and not the browser

//number
//bigInt
// String   - - - prefer using Double quotes

//Boolean
//Null stand alone value
//undefined => value is defined and not intialized 

//symbol - to deefine an indiviual component or uniqueness 

//Object

//console.log(typeof null); // object

//console.log(typeof undefined); //undefined

// Primitive datatypes are stored in stacks  -- Number, String,null,undefined,symbol,BigInt,Boolean
// Non Primitive are stored in heap  -- functions,objects,arrays

// changes made to primitive datatypes are changes made to the copy, while changes made to the no primitive dataypes 
// are refernces so making changes on them will chnage the originial value as well

let name_1 = "Anmol";
let another_name = name_1;
another_name = "Joshi"

console.table([name_1,another_name]);
// changes made are passed to the copy rather than changing the original value

var myObj = {
    name:"anmol",
    age:"26"
}

let anotherObj = myObj;
anotherObj.name = "Joshi";

console.table([myObj,anotherObj]);
// here the changes made are made to the reference, therefore any change will change the original value