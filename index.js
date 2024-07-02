#! /usr/bin/env node
//shabang
import inquirer from "inquirer";
const calculator = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    { message: "Please select your operator to this operation",
        type: "list", choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "operator"
    }
]);
if (calculator.operator === "Addition") {
    console.log(calculator.firstnumber + calculator.secondnumber);
}
else if (calculator.operator === "Multiplication") {
    console.log(calculator.firstnumber * calculator.secondnumber);
}
else if (calculator.operator === "Division") {
    console.log(calculator.firstnumber / calculator.secondnumber);
}
else if (calculator.operator === "Subtraction") {
    console.log(calculator.firstnumber - calculator.secondnumber);
}
//console.log(chalk.blue.bgYellow.italic("Complete"),chalk.blue.bgYellow.italic("My Calculator"));
