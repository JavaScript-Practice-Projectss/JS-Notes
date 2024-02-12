function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//.call lagay refrence hold krny k liay
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
//function(){
    //callme()...is k case mn this refer lry ga global context ko ....or global browser k case mn window ko refer krta ortherwise empty object
//}