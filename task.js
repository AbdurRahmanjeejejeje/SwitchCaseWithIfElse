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

// let age = 40;
// let salary = 55000;
// let experience = 1;
// let CIBIL = 1000;

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

let customer ="Premium_Customer"
let amount = 40000;
let discount = 0;
let coupon = 500;
let beforeAmount=0;
let Final_amount = 0;



if( customer==="Premium_Customer" && amount>=10000){
    discount = amount/100*20;
    beforeAmount = discount+coupon;
    Final_amount = amount-beforeAmount;
    console.log(Final_amount);
    
    
}

else if(customer==="Premium_Customer"){
    discount = amount/100*10;
    Final_amount = amount-discount;
    console.log(Final_amount);
   
}

else if( customer==="Regular_Customer" && amount>=10000){
    discount = amount/100*10;
    beforeAmount = discount+coupon;
    Final_amount = amount-beforeAmount;
    console.log(Final_amount);

}

else{
    Final_amount = amount;
console.log(Final_amount);
}


// Q-03

// function calculateDiscount(customerType, amount, coupon) {
//     let discount = 0;

//     if (customerType === "premium") {
//         discount = amount >= 10000 ? amount * 20 / 100 : amount * 10 / 100;
//     } 
    
//     else if (customerType === "regular") {
//         discount = amount >= 10000 ? amount * 10 / 100 : 0;
//     }

//     return amount - (discount + coupon);
// }

// let finalAmount = calculateDiscount("premium", 20000, 0);

// console.log(finalAmount);



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

// let stock = 80;
// let reorderlevel = 40;
// let expiry = 60;

// if(stock<=0){
//     console.log(`Out of Stock`);
// }

// else if(stock<=reorderlevel && expiry<=30){
//     console.log(`Low stock and near to expiry`);
// }

// else if(expiry<=30){
//     console.log(`near to expiry date`);

// }

// else if(stock<=reorderlevel){
//     console.log(`Low stock`);

// }

// else if(stock>=reorderlevel && expiry>=30){
//     console.log(`in stock and do not close to expiry date`);
// }


// else if(stock>reorderlevel){
//     console.log(`In Stock `);
// }

// else if(expiry>=30){
//     console.log(`do not close to expiry date`);
// }






