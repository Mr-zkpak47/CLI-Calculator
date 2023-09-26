#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// import chalkAnimation from "chalk-animation";
// import figlet from "figlet";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
    console.clear();
  let rainbowTitle = chalkAnimation.rainbow(`Let's start Calculation`);
  await sleep();
  rainbowTitle.stop();
  console.log(`   _____________________
  |  _________________  |
  | | JO           0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`)
  console.log(`

  █▀▄ █▀▀ █░█ █▀▀ █░░ █▀█ █▀█   █▄▄ █▄█   ▀█ █▀█ █░█ ▄▀█ █ █▄▄
  █▄▀ ██▄ ▀▄▀ ██▄ █▄▄ █▄█ █▀▀   █▄█ ░█░   █▄ █▄█ █▀█ █▀█ █ █▄█

  `)
}

await welcome();

async function askQuestion() {
 await inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        message: "Which operation you want to perform:",
        choices: [
          "Addition",
          "Subtraction",
          "Multipulication",
          "Division",
          "Modulus",
        ],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter number 1:",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter number 2:",
      },
    ])
    .then((answers) => {
      // console.log(answers);
      if (answers.operator == "Addition") {
        console.log(
          `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
        );
      } else if (answers.operator == "Subtraction") {
        console.log(
          `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
        );
      } else if (answers.operator == "Multipulication") {
        console.log(
          `${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`
        );
      } else if (answers.operator == "Division") {
        console.log(
          `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
        );
      } else if (answers.operator == "Modulus") {
        console.log(
          `${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`
        );
      }
    });
}

async function startAgain() {
  do {
    await askQuestion();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to restart?Press y or n:",
    });
  } while (again.restart == "y");
}

startAgain();