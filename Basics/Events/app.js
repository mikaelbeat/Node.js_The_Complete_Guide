
const EventEmitter = require('events');

const log = require('./logger');
const logger = new Logger();

// Register listener
logger.on('messageLogged', (event) => {
    console.log('Listener called', event);
});

logger.log('message');

// 6:56