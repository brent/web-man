const express = require('express');
const app = express();
const exec = require('child_process').exec;
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    success: true,
  });
});

app.get('/:command', (req, res) => {

  if (!req.params.command) {
    res.json({
      success: false,
      msg: "command not found",
    });
  }

  //const cmd = 'man ' + req.params.command + ' | groff -mandoc -Thtml';
  const cmd = 'man ' + req.params.command + ' | col -b';

  exec(cmd, function (err, stdout, stderr) {
    //const output = stdout.replace(/\n/g, "");

    res.json({
      success: true,
      manPageHTML: stdout,
    });

    //res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(app.get('port'), () => {
  console.log(`app listening on port ${app.get('port')}`);
});
