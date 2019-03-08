
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register listener
logger.on('messageLogged', (event) => {
    console.log('Listener called', event);
});


logger.log('viesti');
