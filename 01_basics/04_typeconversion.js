let score = "33";//type string
 console.log(typeof score); //number..let score = 33;
 //if we want to convert it into number then
 let newscore = Number(score);
 console.log(typeof newscore);//number
 //but what if the value of the score is 33abc then still the typrof will give number but when we print the value of newscore it will give "NaN" which means not a number

 //"33" => 33
 //"33abc" => NaN
 // true => 1, false => 0
 let isLogin = 1
 let con = Boolean(isLogin);
 // 1 => true
 //" => false"
 //"anosha" => true