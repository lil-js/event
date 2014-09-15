var Event = require('../event')
var expect = require('chai').expect

describe('type', function () {
  it('should expose the event constructor', function () {
    expect(Event).to.be.a('function')
  })

  it('should expose the VERSION property', function () {
    expect(Event.VERSION).to.be.a('string')
  })

  describe('event listener', function () {
    var bus = null, count = 0

    function increment() { count += 1 }

    before(function () {
      bus = new Event
    })

    it('should add a event listener', function () {
      bus.on('test', increment)
      expect(bus._getListeners('test')).to.have.length(1)
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
      expect(bus._getListeners('once')).to.have.length(1)
    })

    it('should emit the once event', function () {
      bus.emit('once')
      expect(count).to.be.equal(2)
    })

    it('should remove a event listener', function () {
      bus.off('once', increment)
      expect(bus._getListeners('once')).to.have.length(0)
    })
  })

})
