# PACKAGES INSTALLED

# Babel 
@babel/core: 
the core/main package that is needed to use Babel in our project.

babel-loader: 
As we will be later working with Webpack this package will be used to connect Babel and Webpack to use them together (more on this later). You can learn more about babel-loader here

@babel/cli: 
This package allows us to use Babel from the command line.to use React but you may need to use Babel in the command line. You can learn more about babel cli here

@babel/preset-env: 
this is a preset (collection) of different babel packages that are needed to convert all ES6 JavaScript syntax into older JavaScript versions. Instead of installing them one by one, they are all together in one package.
You can learn more about @babel/preset-env here

@babel/preset-react: 
This is also preset that contains babel packages needed to convert React JSX syntax into the version of JavaScript supported by older browsers.

# Webpack
webpack: 
The actual package that enables us to use webpack in our project

webpack-cli: 
allows us to run webpack commands in the command line

webpack-dev-server: 
The Webpack server that will act as our server during the development environment. If you are familiar with development servers live-server or nodemon on a higher level it works the same way.

html-webpack-plugin:
The HtmlWebpackPlugin is the package that simplifies the creation of HTML files to serve your Webpack bundles. as mentioned above when Webpack bundles all our files, it can generate a single JavaScript (known as a bundle) that will be served along our HTML file.

# React and React DOM
React is a JavaScript library for creating user interfaces.
The React package itself contains only the functionality necessary to define React components therefore it is typically used together with a React renderer like react-dom to create elements for the web. react and react-dom are the main dependencies we need to actually use React in our apps

react:
the actual react package that enables to use of react in our project

react-dom: 
serves as the entry point to the DOM and server renderers for React. It is the package that is used to create elements into the DOM (document object model) so that React apps can work. It is intended to be paired with the react package

# Eslint, Prettier, and Husky
Eslint: 
is a linter for JavaScript, linters are tools that will help you set up rules to follow as you write your code and they ensure that you follow your rules.

Eslint is a lint for identifying and reporting on patterns found in ECMAScript/JavaScript code. lints or linters are tools that are used to flag programming errors, bugs, stylistic errors, and suspicious constructs to reduce errors and improve the overall quality of your code in some cases they can spot those errors and auto-fix them for you.
Eslint specifically is a popular open-source lint that works best with JavaScript and TypeScript, it allows us to configure and customize it to our needs by specifying your own rules or extending standardized rules from companies like Google, Airbnb...

Prettier: 
Is a code formatter that automatically formats your code to look cleaner and easier to read there are several code formatter but prettier is the most popular one

Prettier is an opinionated code formatter that styles code consistently and is easier to use. it supports HTML, CSS, Javascript, and most of their libraries

Husky: 
is a tool that allows us to run scripts especially while using version control like git for our example we will be using husky to set up pre-commit scripts to run prettier and Eslint on every commit. You need to be working in a git repository to be able to use Husky we will get back to these tools later in the guide for now.

Husky is a tool that allows us to work with Git hooks. Git hooks are scripts that you can set up to run at certain events in the Git lifecycle. like before every commit or push. In our case, we will be using Husky to run ESlint and Prettier as our pre-commit hook so that no one will be able to commit when their code doesn't follow our rules.

creating pre-commit and configuring Husky can be challenging to set up and share across the team therefore we will be using a tool called lint-staged that installs Husky and set up everything for you and you only specify scripts to run on every commit
the best part is that with lint-staged we save time by only checking staged(changed) files since we don't want to check in every file if we didn't edit them.

eslint-config-prettier: 
Turns off all eslint rules that are unnecessary or might conflict with Prettier. to make sure that eslint only check code syntax style while Prettier check code formatting

# Eslint and Prettier scripts
"lint": "eslint . --fix --max-warnings=0": this script runs eslint from the root folder and auto fix error and checks that we don't have any warning

"format": "prettier . --write": this script will run prettier from the root folder and auto fix format errors
