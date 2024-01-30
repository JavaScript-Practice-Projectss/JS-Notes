//object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//the new keyword is a constructor function..new context bnany k kam ata ha ...ek hi object literal sy multiple instance bna sko

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;//this.username..hmara variable or username jo pass kia
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //na b likhain to imlicitly return kty ga
}
//jesy hi new keyword use krain gy ek empty object creat ho jata ha jisy instance bolty hain ... 2nd step mn ek constructor fun call hota ha new keyword k through..ye kya krta ha jitny b arguments hoty hain unhain pack krta ha or ap ko dy dyta ha 
//3rd step mn jo ap ka this keyword ha us mn sb arguments inject ho jaty hain
const userOne = new User("hitesh", 12, true)//one instance
const userTwo = new User("ChaiAurCode", 11, false)//2nd instance..but usertwo ny sari values overrite kr di  agr new keyword ni ho ga
console.log(userOne.constructor);//refrence hoti khud k bary mn in this case function:user
//console.log(userTwo);