const exec = require('child_process').exec;

if (!process.argv[2]) {
  return console.log(new Error('No man page requested'));
}

const cmd = 'man ' + process.argv[2] + ' | col -b';

function parseManPage(manPage) {
  const matches = manPage.match(/\n/g);

  console.log(manPage);
}

exec(cmd, function (err, stdout, stderr) {
  parseManPage(stdout);
});
