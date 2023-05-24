/*
Event emitters typically have the following key components:

Events: Events are predefined actions or occurrences that an event emitter can emit. 
Each event has a unique name or identifier associated with it. For example, "click", "dataReceived", or "userLoggedIn" could be event names.

Event Handlers or Listeners: Event handlers or listeners are functions that are registered or attached to specific events on an event emitter.
When the event occurs, the corresponding event handler is invoked or triggered.

Emitting Events: Emitting an event means triggering or signaling that a specific event has occurred. 
When an event is emitted, all registered event handlers for that event are called with any associated data passed to them.

*/

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', (data) => {
  console.log('Event received:', data);
});

myEmitter.emit('myEvent', 'Hello, world!');
