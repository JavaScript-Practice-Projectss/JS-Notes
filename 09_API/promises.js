//Do an async task
    // DB calls, cryptography, network
    //promises k 3 states hoty hain..pending , fullfil, rejected
    //it is a object so to get a new instance of class i.e object we use new keyword so
   // new Promise() ..it take a callback... function(resolve, reject)
   //following is promise creation
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})
//promise consumption..  .then ka direct connection ha ap k resolve k sth is k andr b ek callback milta ha ye automatically ap ko ek argument return krta ha ...jo b value ya kam promise mn huwa ha wo return hota ha  ...agr ap resolve() call ni krty promise mn to ap ka promise or .then connect hi ni hoty you've to connect'em
promiseOne.then(function(){
    console.log("Promise consumed");
})
//at same place
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})//value pas to .then
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);//user..the data recieved from resolve()
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {//agr further data chiyay ho to chaining k skty ek or .then lga k
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //end pr bta do k jo b kam krna tha wo ho gya 



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// zrori ni k hr bar promise .then sy hi kro 
//async ..await///ek problem ha k directly error ko handel ni kr skty hain to hum try catch use krty
async function consumePromiseFive(){
    try {
        const response = await promiseFive //jo b value ho gi promise ki a jye gi
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() //ye convert hony mn b tie lgta ha to is liay isy b await krwana prhy ga
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
//fetch is a global method which starts the process of fetching a resource from network it retuens a promise
//sirf us case mn error ata ha jb wo request ni kr pata agr error 404 a jata ha to wo response hoga
//fetch('https://api.github.com/users/hiteshchoudhary',{headers})..you can send anything with it    
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.