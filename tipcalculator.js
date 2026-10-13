
let answer;

do{answer = prompt("What is your total bill amount? Enter a number greater than 0")
    if(answer === null || answer === "" || answer == 0){
    console.log("Enter a valid number larger than 0.");
    
};
    if(isNaN(answer)){
    console.log("Input invalid. Please enter a number.");
    
    };
    if(answer < 0){
    console.log("Please enter a number larger than 0.");
    
    };
}while(isNaN(answer) || answer === "" || answer === null || answer < 0);

console.log(`For a bill of ${answer}, your tip amount is ${answer *.1}.`);

document.write(`For a bill of ${answer}, your tip amount is ${answer *.1}.`)