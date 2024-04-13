import inquirer from "inquirer";
let myBalance = 50000; //dollar
let myPin = 6543;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastCash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fastCash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select your amount",
                type: "list",
                choices: ["500", "1000", "5000", "25000"]
            }
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log(`your remaining amount is: ${myBalance}`);
    }
}
else {
    console.log("incorrect your pin number please Try Again");
}
