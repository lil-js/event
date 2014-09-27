# [lil](http://lil-js.github.io)'-event [![Build Status](https://api.travis-ci.org/lil-js/event.svg?branch=master)][travis] [![Stories in Ready](https://badge.waffle.io/lil-js/event.png?label=ready&title=Ready)](https://waffle.io/lil-js/event) [![Code Climate](https://codeclimate.com/github/lil-js/event/badges/gpa.svg)](https://codeclimate.com/github/lil-js/event) [![Gitter chat](https://badges.gitter.im/lil-js/all.png)](https://gitter.im/lil-js/all)

<img align="center" height="150" src="http://lil-js.github.io/img/liljs-logo.png" />

Tiny event bus inspired in Node's EventEmitter

<table>
<tr>
<td><b>Name</b></td><td>event</td>
</tr>
<tr>
<td><b>Version</b></td><td>0.1.3</td>
</tr>
<tr>
<td><b>Size</b></td><td>2 KB / >1 KB (gzipped)</td>
</tr>
<tr>
<td><b>Environment</b></td><td>Node, Browser</td>
</tr>
</table>

## Installation

#### Node.js
```bash
npm install lil-event
```

#### Browser
Via [Bower](http://bower.io)
```bash
bower install lil-event
```
Via [Component](https://github.com/componentjs/component)
```bash
component install lil-js/event
```
Or loading the script remotely
```html
<script src="//cdn.rawgit.com/lil-js/event/0.1.3/event.js"></script>
```

### Environments

- Node.js
- Chrome >= 5
- Firefox >= 3
- Safari >= 5
- Opera >= 10
- IE >= 9

### Usage

You could fetch de module via `require()` if it's available.
Otherwise, global fallback will be used, exposed via `lil.Event`
```js
var lil = require('lil-event')
```

##### Basic emitter API
```js
function connectDB() {
  var bus = new lil.Event()
  db.connect(uri)
    .on('error', function (err) {
      bus.emit('error', err)
    })
    .on('success', function () {
      bus.emit('start', db)
    })
  return bus
}
```

##### Events subscription
```js
connectDB()
  .on('error', onErrorHandler)
  .on('start', onStartHandler)
```

##### Prototype inheritance

```js
function Human() {}

Human.prototype = Object.create(lil.Event.prototype)

Human.prototype.walk = function (distance) {
  this.emit('walk', distance)
}

Human.prototype.sleep = function (time) {
  this.emit('walk', time)
}
```

##### Events subscription
```js
var human = new Human()
human.on('walk', function (distance) {
  // ...
})
human.on('sleep', function (time) {
  // ...
})
```

## API

#### Event()

Create a new Event bus

#### Event#on(event, fn)
Alias: `addListener` Return: `this`

Subscribe to an specific event

#### Event#once(event, fn)
Alias: `addOnceListener` Return: `this`

Subcribe to an specific event for a once time.
After event is emitted, the handler will be flushed from the listeners pool

#### Event#off(event, fn)
Alias: `addListener` Return: `this`

Unsubscribe an event listener by name and function

#### Event#emit(event, [ arguments... ])
Alias: `fire` Return: `this`

Fire an event on the current bus

#### Event#offAll(event)
Alias: `removeAllListeners` Return: `this`

Remove all listeners for the given event name

#### Event.VERSION

## Contributing

Wanna help? Cool! It will be appreciated :)

You must add new test cases for any new feature or refactor you do,
always following the same design/code patterns that already exist

### Development

Only [node.js](http://nodejs.org) is required for development

Clone the repository
```bash
$ git clone https://github.com/lil-js/event.git && cd event
```

Install dependencies
```bash
$ npm install
```

Generate browser bundle source
```bash
$ make browser
```

Run tests
```bash
$ make test
```

## License

[MIT](http://opensource.org/licenses/MIT) © Tomas Aparicio

[travis]: http://travis-ci.org/lil-js/event
