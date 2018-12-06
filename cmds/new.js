const clone = require("git-clone");
const { exec } = require("child_process");
const ora = require("ora");
const chalk = require("chalk");

module.exports = args => {
  clone("https://github.com/burrelle/react-tailwind", args._[1], async () => {
    process.chdir(args._[1]);
    const spinner = ora("Installing React TailwindCSS goodness\n").start();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await exec("yarn install", (err, stdout) => {
      if (err) {
        console.log(chalk.red(`${err}`));
        console.log('📦  Fallback: Using NPM\n');
        exec("npm install", (err, stdout) => {
          if (err) {
            console.log(chalk.red(`${err}`));
          }
          console.log(`${stdout}`);
          spinner.stop();
          console.log(chalk.blue("\n➡️  cd " + args._[1]));
          console.log(chalk.green("🏃  yarn start"));
          console.log(chalk.yellow("🚀  Now go build something awesome!"));
        });
        spinner.stop();
      } else {
        console.log(`${stdout}`);
        spinner.stop();
        console.log(chalk.blue("\n➡️  cd " + args._[1]));
        console.log(chalk.green("🏃 yarn start"));
        console.log(chalk.yellow("🚀  Now go build something awesome!"));
      }
    });
  });
};
