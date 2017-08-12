var DOWN = '\x1B\x5B\x42';
var UP = '\x1B\x5B\x41';
var ENTER = '\x0D';
var spawn = require('child_process').spawn;

var choices = {
  BUILD: {
    runtime: [DOWN, ENTER],
  },
  ROUTER: {
    no: ['n', ENTER],
  },
  STORE: {
    no: ['n', ENTER],
  },
  MATERIAL: {
    no: ['n', ENTER],
  },
  AUTH: {
    no: ['n', ENTER],
  },
  VALIDATE: {
    no: ['n', ENTER],
  },
  API: {
    graphql: [ENTER],
    http: [DOWN, ENTER],
    none: [DOWN, DOWN, ENTER],
  },
  LINT: {
    no: ['n', ENTER],
  },
  LINTCONFIG: {
    standard: [ENTER],
    airbnb: [DOWN, ENTER],
    none: [DOWN, DOWN, ENTER],
  },
};

var chooseCombo = function () {
  var result = [ENTER, ENTER, ENTER];

  Object.keys(choices).forEach(function (item) {
    switch(item) {
      case 'LINTCONFIG':
        if (process.env.LINT == 'no') {
          return;
        }
        break;

      case 'AUTH':
        if (process.env.ROUTER == 'no') {
          return;
        }
        break;
    }

    if (process.env[item]) {
      result = result.concat(choices[item][process.env[item]]);
    } else {
      result.push(ENTER);
    }
  });

  return result.concat(['n', ENTER, 'n', ENTER, 'n', ENTER]);
}

var proc = spawn('./node_modules/.bin/vue', ['init', '.', 'test'], { stdio: [null, process.stdout, process.stderr] });
proc.stdin.setEncoding('utf-8');

var loop = function(combo) {
  if (combo.length > 0) {
    setTimeout(function() {
      proc.stdin.write(combo[0]);
      loop(combo.slice(1));
    }, 200);
  } else {
    proc.stdin.end();
  }
};

loop(chooseCombo());

proc.on('close', function (code) {
  console.log('Exiting with ' + code);
  process.exit(code);
});
