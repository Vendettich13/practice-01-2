const chalk = require("chalk");

console.log(chalk.black.bgGreen.bold("Welcome to game guess number"));

const readline = require("readline").createInterface({
  output: process.stdout,
  input: process.stdin,
});

let attempts = 1;
const attemptLimit = 5;

const randomNumber = Math.round(Math.random() * 10);

const game = () => {
  if (attempts <= attemptLimit) {
    readline.question(
      chalk.blue("Please enter random number from 0 to 10 :) \n"),
      (number) => {
        const num = Number(number);
        if (num === randomNumber) {
          console.log(chalk.green("Congratulations, you win!!!"));
          readline.close();
        } else if (num < randomNumber) {
          console.log(chalk.yellow("Your number is less, please try again"));
          attempts += 1;
          game();
        } else if (num > randomNumber) {
          console.log(chalk.yellow("your number is bigger, please try again"));
          attempts += 1;
          game();
        }
      }
    );
  } else {
    console.log(chalk.red("Game over, sorry :( \n"));
    readline.close();
  }
};

game();
