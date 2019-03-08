
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogger', (event) => {
    console.log('Listener called for message logger.');
});

// Raise an event
emitter.emit('messageLogger', {id: 1, url: 'http://home.com'});