const os = require('os');

const express = require('express');
const logger = require('fluent-logger');
const notifier = require('node-notifier');

logger.configure('pulse', {
  host: 'fluentd',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000
});

(function pulse() {
  setTimeout(() => {
    const data = {
      timestamp: new Date().toISOString(),
      user: process.env.USER,
      hostname: os.hostname()
    };
    console.info('emitting pulse with data: ', JSON.stringify(data));
    logger.emit('pulse', data);
    pulse();
  }, 4321);
})();

(function pulseNotify() {
  setTimeout(() => {
    notifier.notify({
      title: 'MCF Pulse',
      message: 'MCF central services running in the background!',
    });
    pulseNotify();
  }, 4321);
})();

const app = express();

app.use('/notify', (req, res) => {
  logger.emit('notify', { message: `${req.method} /notify` });
  res.json('ok');
});

const server = app.listen(process.env.PORT);
server.on('listening', err => {
  logger.emit('pulse', {
    message: `listening on http://localhost:${server.address().port}`
  });
});
