//best stock price and the growth percentage among three different companies
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
}];

console.log(stockPrice.LastPrice); // This will return undefined because stockPrice is an array and does not have a property called LastPrice
stockPrice.growth=stockPrice.CurrentPrice-stockPrice.LastPrice; // This will not work because stockPrice is an array and does not have properties like CurrentPrice or LastPrice
stockPrice.growthPercentage=(stockPrice.CurrentPrice-stockPrice.LastPrice)/stockPrice.LastPrice*100; // This will also not work for the same reason as above
console.log(stockPrice)c