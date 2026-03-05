//create a javascript based system that manages customers and transactions.you are building a simplifies version of bank

let customers =[
    {
        id:1,
        name:"Akshitha",
        balance:1678,
        transactionHistory: []
    },
    {
        id:2,
        name:"Sai Divya",
        balance:2000,
        transactionHistory: []
    },
    {
        id:3,
        name:"Manjunada",
        balance:5434,
        transactionHistory: []
    },
];

//function deposit
function deposit(id,amount){
    let customer = customers.find(c => c.id === id);
    if(customer){
        customer.balance += amount;
        console.log(`Deposit successful. New balance for ${customer.name}: ${customer.balance}`);
        
        //transaction record
        let transaction = {
            type: "credit",
            amount: amount,
            date: new Date(),
        };
        customer.transactionHistory.push(transaction);
    } else {
        console.log("Customer not found.");
    }
}

//withdraw function
function withdraw(id,amount){
    let customer = customers.find(c => c.id === id);
    if(customer){
        if(customer.balance >= amount){
            customer.balance -= amount;
            console.log(`Withdrawal successful. New balance for ${customer.name}: ${customer.balance}`);
            
            //transaction record
            let transaction = {
                type: "debit",
                amount: amount,
                date: new Date(),
            };
            customer.transactionHistory.push(transaction);
        } else {
            console.log("Insufficient funds.");
        }
    } else {
        console.log("Customer not found.");
    }
}

//check balance
function checkBalance(id){
    let customer = customers.find(c => c.id === id);    
    if(customer){
        console.log(`Current balance for ${customer.name}: ${customer.balance}`);
    } else {
        console.log("Customer not found.");
    }
}

//transaction history
function showTransactionHistory(id){
    let customer = customers.find(c => c.id === id);
    if(customer){
        console.log(`Transaction history for ${customer.name}:`);
        customer.transactionHistory.forEach(transaction => {
            console.log(`${transaction.type.toUpperCase()}: $${transaction.amount} on ${transaction.date}`);
        });
    } else {
        console.log("Customer not found.");
    }
}
deposit(1,500);
withdraw(5,300);
checkBalance(3);
showTransactionHistory(1);