//CALLBACK HELL EXAMPLE
function add(val,callback){
    callback(val+10);
}
function subtract(val,callback){
    callback(val-5);
}
function multiply(val, callback){
    callback(val*5);
}
function divide(val, callback){
    callback(val/2);
}
// CALLBACK HELL USING ARROW FUNCTIONS
add(20,(addRes)=>{
    subtract(addRes, (subRes)=>{
        multiply(subRes,(multiplyRes)=>{
            divide(multiplyRes,(divideRes)=>{
                console.log(divideRes);
            })
        })
    })
})

// CALLBACK HELL USING ANONYMOUS FUNCTIONS
add(20,function(addRes){
    subtract(addRes, function(subRes){
        multiply(subRes,function(multiplyRes){
            divide(multiplyRes,function(divideRes){
                console.log(divideRes);
            })
        })
    })
})


subtract(45,(subRes)=>{
    add(subRes,(addRes)=>{
        multiply(addRes,(multiplyRes)=>{
            divide(multiplyRes,(divideRes)=>{
                console.log(divideRes);
            })
        })
    })
})

divide(250,(divideRes)=>{
    multiply(divideRes, (multiplyRes)=>{
        subtract(multiplyRes,(subRes)=>{
            add(subRes,(addRes)=>{
            console.log(addRes);
            })
        })
    })
})

/**
Nested Timeouts:
Write a program that prints:

"First" after 1 second,
"Second" after 2 seconds,
"Third" after 3 seconds.
Use nested setTimeout to simulate callback hell.
*/
function x(callback){
    callback(setTimeout(()=>{console.log('PAVAN KALYAN')},3000));
}
function y(callback){
    callback(setTimeout(()=>{console.log('PRIYANKA')},1500));
}
function z(callback){
    callback(setTimeout(()=>{console.log('VISHNU PRIYA')},500));
}

x(()=>{
    y(()=>{
        z(()=>{})
    })
})


/**
Chained Arithmetic:
Write a function that performs a series of arithmetic operations on a number using nested callbacks:
Add 5,
Multiply by 2,
Subtract 10.
Log the final result.
*/
function add1(val,callback){
    callback(val+5)
}
function multiply1(val,callback){
    callback(val*2);
}
function subtract1(val, callback){
    callback(val-10)
}
add(20,(addResult1)=>{
    subtract1(addResult1,(subResult1)=>{
        multiply1(subResult1,(multiplyResult1)=>{
            console.log(multiplyResult1)
        })
    })
})


/**
Nested User Greetings:
Write a program that:
Logs "Fetching user..."
After 2 seconds, logs "Hello, [User's Name]"
After another 2 seconds, logs "Welcome back!"
Simulate this using nested setTimeout.
*/
function fetch(callback){
    console.log('Fetching User.....');
    callback();
}
function name(name, callback){
    callback(setTimeout(()=>{console.log(`HELLO ${name}`)},2000))
}
function greet(){
    setTimeout(()=>{ console.log('Welcome Back!')},2000)
}
fetch(()=>{
    name('JAVASCRIPT',()=>{
        greet();
    })
})

/*
Chained API Calls:
Simulate three API calls (getUser, getOrders, and getOrderDetails) using nested callbacks.

getUser should return a user ID,
getOrders should return a list of order IDs for that user,
getOrderDetails should return the details of a specific order.
*/
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
        console.log(`You have ordered${O1} on January 2024`)
    },1000)
    setTimeout(()=>{
        console.log(`You have ordered${O2} on August 2024`)
    },1000)
    setTimeout(()=>{
        console.log(`You have ordered${O3} on Decmber 2024`)
    },1000)
}

user(8500402873, ()=>{
    getOrders(()=>{
        getOrderDetails('TRAIN', 'FIGHTERJET', 'AEROPLANE')
    },'TRAIN', 'FIGHTERJET', 'AEROPLANE')
})