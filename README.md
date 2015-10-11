Bouncy Ball
===========================

Welcome to the `bouncy-ball` repository.
This is a web page that if you click anywhere on the page it will 'throw' a ball that will bounce on the floor, until it stops (vertically) or until it gets off the screen (horizontally).

## Project Setup

The whole project is built around [Grunt](http://gruntjs.com/), the JavaScript Task Runner, to automate repetitive tasks, both for development and deployment. Grunt and Grunt plugins are installed and managed via [npm](https://www.npmjs.org/), the [Node.js](http://nodejs.org/) package manager. Before continuing, please download and install the latest stable **Node.js** version.

To install both Grunt (globally in the system), open a console and run the following command:

    npm install -g grunt grunt-cli

Assuming you have already cloned this repository to your machine, setup all necessary dependencies (for this project only) with the following command:

    npm install

## Running the app

If you run:
 
    grunt serve
 
a local server will be spawned. If some of the development files change, the server will be restarted.

If you run:
 
    grunt serveDist
    
a local server will be spawned but it will serve the minified version of the site.

If you run:
 
    grunt build
    
you'll first validate the app running eslint and then jasmine (for unit tests) and then will create the dist path, with the minified files.