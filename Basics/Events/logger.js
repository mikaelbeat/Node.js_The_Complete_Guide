
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
    console.log('Message: ' + message);
    this.emit('messageLogged', {id: 2, url: 'http://mylogger.io/log'});
    }
}


module.exports = Logger;