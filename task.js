// Q-01

// let marks = 5;

// if(marks>=90){
//     console.log(`Your mark is ${marks} A+`);
// }

// else if(marks>=80){
//     console.log(`Your mark is ${marks} A`);
// }

// else if(marks>=70){
//     console.log(`Your mark is ${marks} B`);
// }

// else if(marks>=60){
//     console.log(`Your mark is ${marks} C`);
// }

// else if(marks>=50){
//     console.log(`Your mark is ${marks} D`);
// }

// else{
//     console.log(`Your mark is ${marks} FAIL`);
// }




// Q-02

// let age = 80;
// let salary = 45000;
// let experience = 8;
// let CIBIL = 600;

// if (age >= 21 && age <= 60) {

//     if (salary >= 50000) {

//         if (experience >= 2) {

//             if (CIBIL >= 700) {
//                 console.log(`Your loan approval is accepted`);
//             }

//             else {
//                 console.log(`Your loan approval is rejected due to lack of CIBIL`);
//             }
//         }

//         else {
//             console.log(`You do not have enough experience`);
//         }

//     }

//     else {
//         console.log(`Your salary is not enough to get loan becoz it is our policy..`);
//     }

// }

// else {
//     console.log(`You are too young or old to get a load`);
// }



// Q-03

// let premium_customer = true;
// let premium_amount = 20000;
// let premium_discount = 0;

// let regular_customer = true;
// let regular_amount = 11000;
// let regular_discount = 0;

// let coupon = 0;


// if( premium_customer===true && premium_amount>=10000){
//     premium_discount = premium_amount/100*20;
//     let Pre_F_amount = premium_amount-(premium_discount+coupon);
//     console.log(Pre_F_amount)
// }

// else if(premium_customer===true){
//     premium_discount = premium_amount/100*10;
//     F_amount = premium_amount-premium_discount
//     console.log(F_amount)
// }


// if( regular_customer===true && regular_amount>=10000){
//     regular_discount = regular_amount/100*10;
//     let Reg_F_amount = regular_amount - (regular_discount+coupon);
//     console.log(Reg_F_amount);

// }

// else{
//     console.log(regular_amount);
// }


// Q-04

// let serviceEX = 2;
// let rating = 'F'
// let salary = 75000;
// let bonus = 0;

// if(serviceEX>=5 && rating==='A'){
//     bonus = salary/100*30;
//     console.log(`Bonus amount :${bonus}`);
// }

// else if(serviceEX>=5 && rating==='B'){
//     bonus = salary/100*20;
//     console.log(`Bonus amount :${bonus}`);
// }

// else if(serviceEX>=5){
//     bonus = salary/100*10;
//     console.log(`Bonus amount :${bonus}`);
// }

// else if(serviceEX<=5 && rating==='A'){
//     bonus = salary/100*15;
//     console.log(`Bonus amount :${bonus}`);
// }

// else if(serviceEX<=5){
//     bonus = salary/100*5;
//     console.log(`Bonus amount :${bonus}`);
// }

// Q-05

// let stock = 70;
// let reorderlevel = 20;
// let expiry = 80;
// if(stock<=0){
//     console.log(`Out of Stock`);
// }

// else if(stock<reorderlevel && expiry<=30){
//     console.log(`Low stock and near expiry date`);
// }

// else if(stock<=reorderlevel){
//     console.log(`Low stock`);
// }

// else if(stock>=reorderlevel && expiry<=30){
//     console.log(`In Stock & Near Expiry`);
// }

// else{
//     console.log(`Stock Available`);
// }






