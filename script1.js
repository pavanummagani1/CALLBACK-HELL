// //CALLBACK HELL EXAMPLE
// function add(val,callback){
//     console.log(callback(val+10));
// }
// function subtract(val,callback){
//     callback(val-5);
// }
// function multiply(val, callback){
//     callback(val*5);
// }
// function divide(val, callback){
//     callback(val/2);
// }

// divide(250,(divideRes)=>{
//     multiply(divideRes, (multiplyRes)=>{
//         subtract(multiplyRes,(subRes)=>{
//             add(subRes,(addRes)=>{
//                 return addRes
//             })
//         })
//     })
// })

function user(userID, usercallback){
    console.log(userID);
    usercallback()
}
function getOrders(callback, order1,order2,order3){
    console.log(`Hey Your orders are ${order1}, ${order2}, ${order3}...............`);
    callback(order1,order2, order3);
}
function getOrderDetails(O1,O2,O3){
    setTimeout(()=>{
        console.log(`You have ordered ${O1} on January 2024`)
    },1000)
    setTimeout(()=>{
        console.log(`You have ordered ${O2} on August 2024`)
    },1000)
    setTimeout(()=>{
        console.log(`You have ordered ${O3} on Decmber 2024`)
    },1000)
}

user(8500402873, ()=>{
    getOrders(()=>{
        getOrderDetails('TRAIN', 'FIGHTERJET', 'AEROPLANE')
    })
})