//Best stock price among three different companies
const stockPrice=[{
    companyName:"Apple",
    CurrentPrice:150,
    LastPrice:145         
},
{
    companyName:"Google",
    CurrentPrice:2800,
    LastPrice:2750
},
{
    companyName:"Microsoft",
    CurrentPrice:300,
    LastPrice:290
}

];

function bestStockPrice(stockPrice){
    let bestStock=stockPrice[0];
    for(let i=1;i<stockPrice.length;i++){
        if(stockPrice[i].CurrentPrice>bestStock.CurrentPrice){
            bestStock=stockPrice[i];
        }
    }
    return bestStock;
}   
const bestStock=bestStockPrice(stockPrice);
console.log(`The best stock price is from ${bestStock.companyName} with a current price of ${bestStock.CurrentPrice}.`);