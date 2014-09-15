var lil = require('../event')
var expect = require('chai').expect

describe('type', function () {
  it('should expose the event constructor', function () {
    expect(lil.Event).to.be.a('function')
  })

  it('should expose the VERSION property', function () {
    expect(lil.Event.VERSION).to.be.a('string')
  })

})
