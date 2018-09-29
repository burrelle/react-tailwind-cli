const menus = {
  main: `
React-Tailwind CLI

Description:
  Create a new React application with TailwindCSS and Parcel Bundler

Usage:
  react-tailwind [options] [--] [<project-name>]

Arguments:
  project-name          name of the project

Options:
      --help            To output help list
      --version         Output the current verion
`
};

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
