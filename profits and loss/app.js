//income
var income = parseInt(prompt("What is your income?"));
//costs
var costs = parseInt(prompt("What are your costs?"));
//tax percentage
var taxPercent = parseInt(prompt("What is your tax percentage?"));
//gross profit
var grossProfit = income-costs;
//getting tax percentage
var tax = grossProfit*taxPercent/100;
//getting net income
var netIncome = grossProfit-tax;
//show in website
document.write("Your net income is $" + netIncome);
