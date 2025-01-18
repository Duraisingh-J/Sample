//console.log(`Hello`);
//console.log(`Welcome to the Programming`);

//window.alert(`This is an alert`); // Crete a pop window


//Content in the webpage using the id in the html but the contents are created in the js
//document.getElementById("myH1").textContent = `Hello`; 

//document.getElementById("myP").textContent = 'Welcome to the Programming';

//get the input from the user

//let username;
//way 1 (easy)
//username = window.prompt("Enter the username: "); 

//way 2 (professional)
/*document.getElementById("Mysubmit").onclick = function() {
    username = document.getElementById("text").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}*/

//let age = window.prompt("How old are you?"); //accepts string as input even if enter the number
//age = Number(age); //convert string or boolean to the number19
//console.log(age , typeof age);

//Counter Program
/*
let count = 0;

document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById(`count`).textContent = count;
}

document.getElementById("increase").onclick = function() {
    count++;
    document.getElementById(`count`).textContent = count;
}


document.getElementById(`decrease`).onclick = function() {
    count--;
    document.getElementById('count').textContent = count;
}
    */

//Math.floor(Math.random() * (tonumber - fromNumber)) + fromNumber

/*Dice Rolling
const d1 = document.getElementById("dice1");
const d2 = document.getElementById("dice2");

let x, y;

document.getElementById("roll").onclick = function() {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    d1.textContent = x;
    d2.textContent = y;

}*/

/*Electricity Bill
let unts;
let amt;

document.getElementById("calculate").onclick = function() {
    unts = document.getElementById("units").value;
    amt = Number(amt);
    document.getElementById("invalid").textContent = "";
    if(unts < 0){
        document.getElementById("amount").textContent = "";
        document.getElementById("invalid").textContent = "Enter valid unit";
    } 
    else if(unts > 300) document.getElementById("amount").textContent = (unts - 300) * 3.0;
    else if(unts > 200) document.getElementById("amount").textContent = (unts - 200) * 2.0;
    else if(unts > 100) document.getElementById("amount").textContent = (unts - 100) * 1.5;
    else if(unts >= 0) document.getElementById("amount").textContent = 0;
  
}
*/

/*Checked Property
const mycheckbox = document.getElementById("mycheckbox");
const python = document.getElementById("python");
const cpp = document.getElementById("c++");
const java = document.getElementById("java");
const mysubmit = document.getElementById("mysubmit");
const stud = document.getElementById("stud");
const langu = document.getElementById("langu");

mysubmit.onclick = function() {
    
    if(mycheckbox.checked) {
        stud.textContent = "You are a student";
        if(python.checked) {
            langu.textContent = "You enrolled Python";
        }
    
        else if(cpp.checked) {
            langu.textContent = "You enrolled C++";
        }
    
        else if(java.checked) {
            langu.textContent = "You enrolled Java";
        }
    
        else {
            langu.textContent = "You must select a language";
        }
    }
    else {
        stud.textContent = "You are not a student and you cannot enroll any language";
    }

    
}*/




