#!/usr/bin/env node

'use strict';

/*
    The command line arguments are stored in the `process.argv` array,
    which has the following structure:
    [0] The path of the executable that started the Node.js process
    [1] The path to this application
    [2-n] the command line arguments

    Example: ['/bin/node', '/path/to/node_script.js', 'arg1', 'arg2', ...]
*/

var username = process.argv[2];

if (!username) {
  var appName = process.argv[1].split(require('path').sep).pop();

  console.error('Missing argument! Example: %s YOUR_NAME', appName);

  process.exit(1);
}

console.log('Hello %s!', username);
