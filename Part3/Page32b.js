//Create a JavaScript-based system that manages customers and transactions. You are building a simplified version of Bank.
let customers = [
    {
        id: 1,
        name:"SaiDivya",
        balance: 5000,
        transactions: [],
    },
    {
        id: 2,
        name:"Akshitha",
        balance: 3000,
        transactions: [],
    },
];
//create deposit,withdraw,checkBalance,showTransactions  functions
function deposit(id, amount) {
    customers= customers.map((customer) => {
        if(customer.id === id) {
            return{
                ...customer,
                balance: customer.balance + amount,
                transactions: [ {
                     type: "deposit",
                     amount: amount,
                    date:new Date(),
                    },
                ],
            };
        }else{
            return customer;
        }
            });
        }
function withdraw(id, amount) {
    customers = customers.map((customer) => {
        if (customer.id === id) {
            if (customer.balance >= amount) {
                return {
                    ...customer,
                    balance: customer.balance - amount,
                    transactions: [ {
                            type: "withdraw",
                            amount: amount,
                            date: new Date(),
                        },
                    ],
                };
            } else {
                console.log("Insufficient funds");
                return customer;
            }
        } else {
            return customer;
        }
    });
}
function checkBalance(id) {
    const customer = customers.find((customer) => customer.id === id);
    if (!customer) {
        console.log("No customer found with id", id);
        return;
    }
    console.log(customer);
}
function showTransactions(id) {
    const customer = customers.find((customer) => customer.id === id);
    if (!customer) {
        console.log("No customer found with id", id);
        return;
    }
    console.log(customer.transactions);
}
deposit(1, 1000);
withdraw(1, 2000);
checkBalance(1);
showTransactions(1);
