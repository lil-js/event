var Event = require('../event')
var expect = require('chai').expect

describe('event', function () {
  var bus = null

  it('should expose the event constructor', function () {
    expect(Event).to.be.a('function')
  })

  it('should expose the VERSION property', function () {
    expect(Event.VERSION).to.be.a('string')
  })

  describe('listeners', function () {
    var count = 0

    function increment() { count += 1 }

    before(function () {
      bus = new Event
    })

    it('should add a event listener', function () {
      bus.on('test', increment)
      expect(bus._events.test).to.have.length(1)
      expect(bus._events).to.have.property('test')
    })

    it('should emit an event passing an argument', function () {
      bus.emit('test', 'hello')
      expect(count).to.be.equal(1)
    })

    it('should add a once event listener', function () {
      bus.once('once', increment)
      expect(bus._events).to.have.property('test')
      expect(bus._events).to.have.property('once')
      expect(bus._events.once).to.have.length(1)
    })

    it('should emit the once event', function () {
      bus.emit('once')
      expect(count).to.be.equal(2)
    })

    it('should remove a event listener', function () {
      bus.off('once', increment)
      expect(bus._events.once).to.have.length(0)
    })

    it('should remove all listeners', function () {
      bus.on('once', increment)
      expect(bus._events.once).to.have.length(1)
      bus.on('once', function () {})
      expect(bus._events.once).to.have.length(2)
      bus.offAll('once')
      expect(bus._events.once).to.have.length(0)
    })
  })

  describe('inherited prototype', function () {
    var human = null, count = 0

    function Human() {}
    Human.prototype = Object.create(Event.prototype)

    before(function () {
      human = new Human
    })

    it('should bind a new event', function () {
      human.on('test', function () { count += 1 })
      expect(human._events).to.have.property('test')
      expect(human._events.test).to.have.length(1)
    })

    it('should emit an event', function () {
      human.emit('test')
      expect(count).to.be.equal(1)
      expect(human._events).to.have.property('test')
    })

    it('should remove all event listeners', function () {
      human.offAll('test')
      expect(human._events).to.have.property('test')
      expect(human._events.test).to.have.length(0)
    })

    it('should bind a once event listener', function () {
      human.once('unique', function () {})
      expect(human._events).to.have.property('unique')
      expect(human._events.unique).to.have.length(1)
    })

    it('should emit an event', function () {
      human.emit('unique')
      expect(human._events).to.have.property('unique')
      expect(human._events.unique).to.have.length(0)
    })
  })

  describe('error', function () {
    before(function () {
      bus = new Event
    })

    it('should throw a TypeError exception if invalid event name', function () {
      expect(function () { bus.on(null) }).to.throw(TypeError)
    })

    it('should throw a TypeError exception if invalid event listener', function () {
      expect(function () { bus.on('test', null) }).to.throw(TypeError)
    })
  })

})
