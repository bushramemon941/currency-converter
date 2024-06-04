#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.green.bold("\n \t Wellcome To 'Bushra Memon' - currency convertor \n "))

// define the list currency

let exchange_rate: any = {
    "USD": 1,
    "EUR":0.9,
    "JYB":113,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":288
}

// prompt the user to select currency to  convert

let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the currency to convert from:",
        choices:["USD","EUR","JYB","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYB","CAD","AUD","PKR"]
    },
{
    name:"amount",
    type:"input",
    message:"Enter the amount to convert"
}
]);

let  from_amount = exchange_rate[user_answer.from_currency];
let to_amount =exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// formulla  of conversion
 let base_amount = amount/from_amount
 let converted_amount =base_amount * to_amount

//  display the converted amount 
console.log(`Converted Amount= ${chalk.blue(converted_amount.toFixed(2))}`);
