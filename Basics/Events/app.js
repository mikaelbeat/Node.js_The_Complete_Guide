
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register listener
emitter.on('messageLogged', (event) => {
    console.log('Listener called', event);
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Raise: logging (data: message)
emitter.on('logging', (event) => {
    console.log('Listener called for logging', event);
});

emitter.emit('logging', {id: 1, url: 'http://homepage.com'});


