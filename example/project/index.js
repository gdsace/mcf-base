const chalk = require('chalk');
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use('/', (req, res) => {
  console.info(`request received from ${req.ip}`);
  res.json(`ok from ${process.env.NAME}`)
});

const server = app.listen(process.env.PORT);

server.on('listening', () => {
  console.info(`${process.env.NAME} listening on ${server.address().port}`);
  (function test() {
    setTimeout(() => {
      test();
      fetch(process.env.PROXY_FROM)
        .then(proxyRes => proxyRes.json())
        .then(proxyRes => {
          console.info(
            chalk.green(
              `test connection to "${process.env.PROXY_FROM}" succeeded`
            )
          );
          console.info(`> ${proxyRes}`);
        })
        .catch(err => {
          console.error(
            chalk.red(`test connection to "${process.env.PROXY_FROM}" failed`)
          );
          console.error(err.message);
        });
    }, 2500);
  })();
});
