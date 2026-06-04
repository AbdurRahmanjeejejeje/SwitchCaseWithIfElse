let electronics = 'Watch';
let Food = 'NudilsPacket';
let Furniture = 'Chair';

let category = Food;


let stockOfElecronics = 20;
let stockOfFood = 4;
let stockOfFurniture = 40;
let expiryDays = 2;
let reorderLevel = 10;

switch (category) {
    case electronics:

        console.log(`This is ${electronics}`);
        if (stockOfElecronics <= 0) {
            console.log(`${electronics} is out of stocking`);
        }

        else {
            console.log(`${electronics} is in stock`);
        }
        break;

    case Food:

        console.log(`This is ${Food}`);
        if (stockOfFood <= 0) {
            console.log(`${Food} is out of stock`);
        }

        else {
            console.log(`${Food} is in stock`);

            if(stockOfFood<=reorderLevel){
                console.log("Reorder product ");
                console.log(`Before adding the new arraival ${stockOfFood} stocks and the expiry days is ${expiryDays} days`);
                stockOfFood += reorderLevel*reorderLevel
                console.log(stockOfFood);
            }

            else{
                console.log("no reorder level needed");
            }

            if (expiryDays <= 0) {
                console.log(`${Food} is expired`);
            }

            else if (expiryDays <= 5) {
                console.log("Near to expiry date ");
            }
            else {
                console.log(`Too far from expiry date`);
            }
        }

        break;

    case Furniture:

        console.log(`This is ${Furniture} `);
        if (stockOfFurniture <= 0) {
            console.log(`${Furniture} is out of stock`);
        }

        else {
            console.log(`${Furniture} is in stock`);
        }

        break;

    default:
        console.log("The category you mentioned here is not matched anything out of these ones.")

}



// let role = 'admivzvn'
// let attendance = 80;

// switch (role){
//     case 'student':

//         console.log(`This is a ${role}`);
//         if(attendance>=78){
//             console.log("You are eligible to write");
//         }

//         else{
//             console.log("Not eligible");
//         }
//         break;

//     case 'admin':
//         console.log(`This is an ${role}`);
//         break;

//     case 'teacher':
//         console.log(`This is a ${role}`);
//         break;

//     default:
//         console.log(`This is not at all a proper role `);

// }


// let paymentMethod = 'online';
// let purchaseAmount = 20000;
// let discount;
// let lastPay;
// switch (paymentMethod){
//     case 'cash' :
//         console.log(`This is a ${paymentMethod} payment method`);

//         if(purchaseAmount>=15000){
//             discount = purchaseAmount/100*20;
//             lastPay = purchaseAmount-discount;
//             console.log(lastPay);
//         }

//         else{
//             console.log(purchaseAmount);
//         }

//         break;

//     case 'card' :
//         console.log(`This is a ${paymentMethod} payment method`);

//         if(purchaseAmount>=10000){
//             discount = purchaseAmount/100*10;
//             lastPay = purchaseAmount-discount;
//             console.log(lastPay);
//         }

//         else{
//             console.log(purchaseAmount);
//         }

//         break;

//         case 'online' :
//         console.log(`This is a ${paymentMethod} payment method`);

//         if(purchaseAmount>=5000){
//             discount = purchaseAmount/100*5;
//             lastPay = purchaseAmount-discount;
//             console.log(lastPay);
//         }

//         else{
//             console.log(purchaseAmount);
//         }

//         break;

//     default:
//         console.log("This is not a valid payment method");
// }


// let patient = 'emergency'
// let age = 4;

// switch (patient){
//     case 'emergency':
//         console.log(`${patient} patient`);
//         if(age>=60){
//             console.log("Instantly give access to check ");
//         }

//         else if(age<60 && age>=20){
//             console.log("Wait to get your time to check");
//         }

//         else{
//             console.log("especially give access to check becoz They are children");
//         }

//         break;

//     case 'regular':
//         console.log(`${patient} patient`);
//         if(age>=60){
//             console.log("Instantly give access to check ");
//         }

//         else if(age<60 && age>=20){
//             console.log("Wait to get your time to check");
//         }

//         else{
//             console.log("especially give access to check becoz They are children");
//         }

//         break;

//     default:
//         console.log("This is not a proper type of patient");
// }



// let accountType = 'savingdsas';

// switch (accountType) {
//     case 'savings':
//         console.log(`This is ${accountType}`);
//         break;

//     case 'current':
//         console.log(`This is ${accountType}`);
//         break;

//     case 'checkAccountBalance':
//         console.log(`This is ${accountType}`);
//         break;

//     default:
//         console.log("This is not a valid account type");
// }



// let category = 'electdsaronics'
// let price = 35000;
// let discount;
// let finalAmount;

// switch (category){
//     case 'grocery':
//         console.log(`This is ${category} product`);
//         discount = price/100*20;
//         finalAmount = price - discount;
//         console.log(finalAmount);
//         break;

//     case 'electronics':
//         console.log(`This is ${category} product`);
//         discount = price/100*15;
//         finalAmount = price - discount;
//         console.log(finalAmount);
//         break;

//     case 'grocery':
//         console.log(`This is ${category} product`);
//         discount = price/100*10;
//         finalAmount = price - discount;
//         console.log(finalAmount);
//         break;

//         default:
//             console.log("Not a purchasable product you typed");
        
// }





