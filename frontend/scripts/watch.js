// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

var chalk = require('chalk');
var fs = require('fs-extra');
var path = require('path');
var pathExists = require('path-exists');
var filesize = require('filesize');
var gzipSize = require('gzip-size').sync;
var webpack = require('webpack');
var config = require('../config/webpack.config.watch');
var paths = require('../config/paths');
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
var recursive = require('recursive-readdir');
var stripAnsi = require('strip-ansi');

var useYarn = pathExists.sync(paths.yarnLockFile);

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Input: /User/dan/app/build/static/js/main.82be8.js
// Output: /static/js/main.js
function removeFileNameHash(fileName) {
  return fileName
    .replace(paths.appDev, '')
    .replace(/\/?(.*)(\.\w+)(\.js|\.css)/, (match, p1, p2, p3) => p1 + p3);
}

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
recursive(paths.appDev, (err, fileNames) => {
  var previousSizeMap = (fileNames || [])
    .filter(fileName => /\.(js|css)$/.test(fileName))
    .reduce((memo, fileName) => {
      var contents = fs.readFileSync(fileName);
      var key = removeFileNameHash(fileName);
      memo[key] = gzipSize(contents);
      return memo;
    }, {});

  // Remove all content but keep the directory so that
  // if you're in it, you don't end up in Trash
  fs.emptyDirSync(paths.appDev);

  // Start the webpack build
  build(previousSizeMap);
});

// Print out errors
function printErrors(summary, errors) {
  console.log(chalk.red(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
}

// Create the production build and print the deployment instructions.
function build(previousSizeMap) {
  console.log('Creating dev build and watching for changes...');
  webpack(config).watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
  }, (err, stats) => {
    if (!err && !stats.compilation.errors.length ) {
      if (stats.compilation.warnings.length) {
        printErrors('Warnings present', stats.compilation.warnings);
      }
      console.log(chalk.green('Compiled successfully.'));
    } else {
        if (err) {
          printErrors('Failed to compile.', [err]);
        }

        if (stats.compilation.errors.length) {
          printErrors('Failed to compile.', stats.compilation.errors);
        }

        if (process.env.CI && stats.compilation.warnings.length) {
          printErrors('Failed to compile.', stats.compilation.warnings);
        }
    }
  });
}
