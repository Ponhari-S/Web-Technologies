const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('userLogin', (userId, timestamp) => {
    console.log(`[Listener 1] Log: User ${userId} logged in at ${timestamp}`);
});

myEmitter.on('userLogin', (userId) => {
    console.log(`[Listener 2] Analytics: Updating login count for user ${userId}...`);
});

const performLogin = (id) => {
    const time = new Date().toLocaleTimeString();
    console.log('--- Initiating Login Process ---');
    
    setTimeout(() => {
        myEmitter.emit('userLogin', id, time);
    }, 1500);
};

performLogin('Hari123');

myEmitter.on('shutdown', () => {
    console.log('Shutting down server... Goodbye!');
});

setTimeout(() => {
    myEmitter.emit('shutdown');
}, 3000);