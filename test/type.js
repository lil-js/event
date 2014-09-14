var lil = require('../type')
var expect = require('chai').expect

describe('type', function () {
  it('should expose the http constructor', function () {
    expect(lil.type).to.be.an('object')
  })

  it('should expose the VERSION property', function () {
    expect(lil.type.VERSION).to.be.a('string')
  })

  describe('isString', function () {
    it('should be valid', function () {
      expect(lil.isString('hello')).to.be.true
      expect(lil.isString(String('hello'))).to.be.true
      expect(lil.isString(new String())).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isString(12)).to.be.false
      expect(lil.isString({})).to.be.false
      expect(lil.isString(null)).to.be.false
      expect(lil.isString(void 0)).to.be.false
      expect(lil.isString([1])).to.be.false
      expect(lil.isString(/[a]/)).to.be.false
    })
  })

  describe('isNumber', function () {
    it('should be valid', function () {
      expect(lil.isNumber(12)).to.be.true
      expect(lil.isNumber(Number('10'))).to.be.true
      expect(lil.isNumber(new Number())).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isNumber('12')).to.be.false
      expect(lil.isNumber({})).to.be.false
      expect(lil.isNumber(null)).to.be.false
      expect(lil.isNumber(void 0)).to.be.false
      expect(lil.isNumber([1])).to.be.false
      expect(lil.isNumber(/[a]/)).to.be.false
    })
  })

  describe('isBoolean', function () {
    it('should be valid', function () {
      expect(lil.isBool(true)).to.be.true
      expect(lil.isBool(false)).to.be.true
      expect(lil.isBool(Boolean('true'))).to.be.true
      expect(lil.isBool(new Boolean())).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isBool('12')).to.be.false
      expect(lil.isBool({})).to.be.false
      expect(lil.isBool(null)).to.be.false
      expect(lil.isBool(void 0)).to.be.false
      expect(lil.isBool([1])).to.be.false
      expect(lil.isBool(/[a]/)).to.be.false
    })
  })

  describe('isNull', function () {
    it('should be valid', function () {
      expect(lil.isNull(null)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isNull(12)).to.be.false
      expect(lil.isNull({})).to.be.false
      expect(lil.isNull(undefined)).to.be.false
      expect(lil.isNull(void 0)).to.be.false
      expect(lil.isNull([1])).to.be.false
      expect(lil.isNull(/[a]/)).to.be.false
      expect(lil.isNull('')).to.be.false
      expect(lil.isNull(new Boolean)).to.be.false
    })
  })

  describe('isUndefined', function () {
    it('should be valid', function () {
      expect(lil.isUndefined(undefined)).to.be.true
      expect(lil.isUndefined(void 0)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isUndefined(12)).to.be.false
      expect(lil.isUndefined({})).to.be.false
      expect(lil.isUndefined(null)).to.be.false
      expect(lil.isUndefined([1])).to.be.false
      expect(lil.isUndefined(/[a]/)).to.be.false
      expect(lil.isUndefined('')).to.be.false
      expect(lil.isUndefined(new Boolean)).to.be.false
    })
  })

  describe('isObject', function () {
    it('should be valid', function () {
      expect(lil.isObject({})).to.be.true
      expect(lil.isObject(new Object)).to.be.true
      expect(lil.isObject(new (function Car(){}))).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isObject('12')).to.be.false
      expect(lil.isObject(null)).to.be.false
      expect(lil.isObject(void 0)).to.be.false
      expect(lil.isObject([1])).to.be.false
      expect(lil.isObject(new Boolean())).to.be.false
      expect(lil.isObject(new Number())).to.be.false
      expect(lil.isObject(new String)).to.be.false
      expect(lil.isObject(/[a]/)).to.be.false
    })
  })

  describe('isPlainObject', function () {
    it('should be valid', function () {
      expect(lil.isPlainObject({})).to.be.true
      expect(lil.isPlainObject(new Object)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isPlainObject(new (function Car(){}))).to.be.false
      expect(lil.isPlainObject('12')).to.be.false
      expect(lil.isPlainObject(null)).to.be.false
      expect(lil.isPlainObject(void 0)).to.be.false
      expect(lil.isPlainObject([1])).to.be.false
      expect(lil.isPlainObject(new Boolean())).to.be.false
      expect(lil.isPlainObject(new Number())).to.be.false
      expect(lil.isPlainObject(new String)).to.be.false
      expect(lil.isPlainObject(/[a]/)).to.be.false
    })
  })

  describe('isArray', function () {
    it('should be valid', function () {
      expect(lil.isArray([])).to.be.true
      expect(lil.isArray(new Array)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isArray('12')).to.be.false
      expect(lil.isArray(null)).to.be.false
      expect(lil.isArray(void 0)).to.be.false
      expect(lil.isArray(new Boolean())).to.be.false
      expect(lil.isArray(new Number())).to.be.false
      expect(lil.isArray(new String)).to.be.false
      expect(lil.isArray(/[a]/)).to.be.false
    })
  })

  describe('isFn', function () {
    it('should be valid', function () {
      expect(lil.isFn(function () {})).to.be.true
      expect(lil.isFn(new Function)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isFn('12')).to.be.false
      expect(lil.isFn(null)).to.be.false
      expect(lil.isFn({})).to.be.false
      expect(lil.isFn(void 0)).to.be.false
      expect(lil.isFn([1])).to.be.false
      expect(lil.isFn(new Boolean())).to.be.false
      expect(lil.isFn(new Number())).to.be.false
      expect(lil.isFn(new String)).to.be.false
      expect(lil.isFn(/[a]/)).to.be.false
    })
  })

  describe('isDate', function () {
    it('should be valid', function () {
      expect(lil.isDate(new Date())).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isDate('12')).to.be.false
      expect(lil.isDate(null)).to.be.false
      expect(lil.isDate({})).to.be.false
      expect(lil.isDate(void 0)).to.be.false
      expect(lil.isDate([1])).to.be.false
      expect(lil.isDate(new Boolean())).to.be.false
      expect(lil.isDate(new Number())).to.be.false
      expect(lil.isDate(new String)).to.be.false
      expect(lil.isDate(/[a]/)).to.be.false
    })
  })

  describe('isRegExp', function () {
    it('should be valid', function () {
      expect(lil.isRegExp(/[a-z]/)).to.be.true
      expect(lil.isRegExp(new RegExp())).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isRegExp('12')).to.be.false
      expect(lil.isRegExp(null)).to.be.false
      expect(lil.isRegExp({})).to.be.false
      expect(lil.isRegExp(void 0)).to.be.false
      expect(lil.isRegExp([1])).to.be.false
      expect(lil.isRegExp(new Boolean())).to.be.false
      expect(lil.isRegExp(new Number())).to.be.false
      expect(lil.isRegExp(new String)).to.be.false
    })
  })

  describe('isFinite', function () {
    it('should be valid', function () {
      expect(lil.isFinite(1)).to.be.true
      expect(lil.isFinite(10000e1)).to.be.true
      expect(lil.isFinite('12')).to.be.true
      expect(lil.isFinite([1])).to.be.true
      expect(lil.isFinite(new Number())).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isFinite(Infinity)).to.be.false
      expect(lil.isFinite(null)).to.be.false
      expect(lil.isFinite({})).to.be.false
      expect(lil.isFinite(void 0)).to.be.false
      expect(lil.isFinite(new Boolean())).to.be.false
      expect(lil.isFinite(new String)).to.be.false
      expect(lil.isFinite(/[a]/)).to.be.false
    })
  })

  describe('isError', function () {
    it('should be valid', function () {
      expect(lil.isError(new Error)).to.be.true
      expect(lil.isError(new TypeError)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isError('12')).to.be.false
      expect(lil.isError(null)).to.be.false
      expect(lil.isError({})).to.be.false
      expect(lil.isError(void 0)).to.be.false
      expect(lil.isError([1])).to.be.false
      expect(lil.isError(new Boolean())).to.be.false
      expect(lil.isError(new Number())).to.be.false
      expect(lil.isError(new String)).to.be.false
    })
  })

  describe('isSymbol', function () {
    it('should be valid', function () {
      if (typeof Symbol === 'function')
        expect(lil.isSymbol(Symbol('a'))).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isSymbol('12')).to.be.false
      expect(lil.isSymbol(null)).to.be.false
      expect(lil.isSymbol({})).to.be.false
      expect(lil.isSymbol(void 0)).to.be.false
      expect(lil.isSymbol([1])).to.be.false
      expect(lil.isSymbol(new Boolean())).to.be.false
      expect(lil.isSymbol(new Number())).to.be.false
      expect(lil.isSymbol(new String)).to.be.false
    })
  })

  describe('isArguments', function () {
    it('should be valid', function () {
      expect(lil.isArguments(arguments)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isArguments('12')).to.be.false
      expect(lil.isArguments(null)).to.be.false
      expect(lil.isArguments({})).to.be.false
      expect(lil.isArguments(void 0)).to.be.false
      expect(lil.isArguments([1])).to.be.false
      expect(lil.isArguments(new Boolean())).to.be.false
      expect(lil.isArguments(new Number())).to.be.false
      expect(lil.isArguments(new String)).to.be.false
    })
  })

  describe('isEmpty', function () {
    it('should be valid', function () {
      expect(lil.isEmpty('')).to.be.true
      expect(lil.isEmpty(0)).to.be.true
      expect(lil.isEmpty([])).to.be.true
      expect(lil.isEmpty({})).to.be.true
      expect(lil.isEmpty(new Object)).to.be.true
      expect(lil.isEmpty(new String)).to.be.true
      expect(lil.isEmpty(null)).to.be.true
      expect(lil.isEmpty(undefined)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isEmpty('12')).to.be.false
      expect(lil.isEmpty({a: 1})).to.be.false
      expect(lil.isEmpty([1])).to.be.false
      expect(lil.isEmpty(1)).to.be.false
      expect(lil.isEmpty(new Boolean())).to.be.false
      expect(lil.isEmpty(function () {})).to.be.false
    })
  })

  describe('isIterable', function () {
    it('should be valid', function () {
      expect(lil.isIterable([])).to.be.true
      expect(lil.isIterable({})).to.be.true
      expect(lil.isIterable(arguments)).to.be.true
      expect(lil.isIterable(new Array)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isIterable(true)).to.be.false
      expect(lil.isIterable('12')).to.be.false
      expect(lil.isIterable(null)).to.be.false
      expect(lil.isIterable(void 0)).to.be.false
      expect(lil.isIterable(new Boolean())).to.be.false
      expect(lil.isIterable(new Number())).to.be.false
      expect(lil.isIterable(new String)).to.be.false
      expect(lil.isIterable(new RegExp)).to.be.false
    })
  })

  describe('isMutable', function () {
    it('should be valid', function () {
      expect(lil.isMutable([])).to.be.true
      expect(lil.isMutable({})).to.be.true
      expect(lil.isMutable(arguments)).to.be.true
      expect(lil.isMutable(new Array)).to.be.true
      expect(lil.isMutable(new Date)).to.be.true
      expect(lil.isMutable(function () {})).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isMutable(true)).to.be.false
      expect(lil.isMutable('12')).to.be.false
      expect(lil.isMutable(null)).to.be.false
      expect(lil.isMutable(void 0)).to.be.false
      expect(lil.isMutable(new Boolean())).to.be.false
      expect(lil.isMutable(new Number())).to.be.false
      expect(lil.isMutable(new String)).to.be.false
      expect(lil.isMutable(new RegExp)).to.be.false
    })
  })

  describe('isPrimitive', function () {
    it('should be valid', function () {
      expect(lil.isPrimitive(true)).to.be.true
      expect(lil.isPrimitive('1')).to.be.true
      expect(lil.isPrimitive(null)).to.be.true
      expect(lil.isPrimitive(undefined)).to.be.true
      expect(lil.isPrimitive(/[a-z]/)).to.be.true
      expect(lil.isPrimitive(function () {})).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isPrimitive([])).to.be.false
      expect(lil.isPrimitive({})).to.be.false
      expect(lil.isPrimitive(new Date)).to.be.false
      expect(lil.isPrimitive(new Object())).to.be.false
      expect(lil.isPrimitive(new Array)).to.be.false
    })
  })

  describe('isPromise', function () {
    function FakePromise() {}
    FakePromise.prototype.then = function () {}

    it('should be valid', function () {
      expect(lil.isPromise(new FakePromise)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isPromise(true)).to.be.false
      expect(lil.isPromise('12')).to.be.false
      expect(lil.isPromise(null)).to.be.false
      expect(lil.isPromise(void 0)).to.be.false
      expect(lil.isPromise(new Boolean())).to.be.false
      expect(lil.isPromise(new Number())).to.be.false
      expect(lil.isPromise(new String)).to.be.false
      expect(lil.isPromise(new RegExp)).to.be.false
    })
  })

  describe('isGenerator', function () {
    function FakeGenerator() {}
    FakeGenerator.prototype.send = FakeGenerator.prototype.next = function () {}

    it('should be valid', function () {
      expect(lil.isGenerator(new FakeGenerator)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isGenerator(true)).to.be.false
      expect(lil.isGenerator('12')).to.be.false
      expect(lil.isGenerator(null)).to.be.false
      expect(lil.isGenerator(void 0)).to.be.false
      expect(lil.isGenerator(new Boolean())).to.be.false
      expect(lil.isGenerator(new Number())).to.be.false
      expect(lil.isGenerator(new String)).to.be.false
      expect(lil.isGenerator(new RegExp)).to.be.false
    })
  })

  describe('isBinary', function () {
    it('should be valid', function () {
      expect(lil.isBinary(new Int8Array)).to.be.true
      expect(lil.isBinary(new Float32Array)).to.be.true
      expect(lil.isBinary(new Uint16Array)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isBinary(true)).to.be.false
      expect(lil.isBinary('12')).to.be.false
      expect(lil.isBinary(null)).to.be.false
      expect(lil.isBinary(void 0)).to.be.false
      expect(lil.isBinary(new Boolean())).to.be.false
      expect(lil.isBinary(new Number())).to.be.false
      expect(lil.isBinary(new String)).to.be.false
      expect(lil.isBinary(new RegExp)).to.be.false
    })
  })

  describe('isTypedArray', function () {
    it('should be valid', function () {
      expect(lil.isBinary(new Int8Array)).to.be.true
      expect(lil.isBinary(new Float32Array)).to.be.true
      expect(lil.isBinary(new Uint16Array)).to.be.true
    })

    it('should not be valid', function () {
      expect(lil.isBinary(new Array)).to.be.false
      expect(lil.isBinary(true)).to.be.false
      expect(lil.isBinary('12')).to.be.false
      expect(lil.isBinary(null)).to.be.false
      expect(lil.isBinary(void 0)).to.be.false
      expect(lil.isBinary(new Boolean())).to.be.false
      expect(lil.isBinary(new Number())).to.be.false
      expect(lil.isBinary(new String)).to.be.false
      expect(lil.isBinary(new RegExp)).to.be.false
    })
  })

  describe('isType', function () {
    it('should be get the valid types', function () {
      expect(lil.isType(true)).to.be.equal('boolean')
      expect(lil.isType('1')).to.be.equal('string')
      expect(lil.isType(NaN)).to.be.equal('nan')
      expect(lil.isType(1.2)).to.be.equal('number')
      expect(lil.isType(null)).to.be.equal('null')
      expect(lil.isType(undefined)).to.be.equal('undefined')
      expect(lil.isType(void 0)).to.be.equal('undefined')
      expect(lil.isType(/[a-z]/)).to.be.equal('regexp')
      expect(lil.isType(function () {})).to.be.equal('function')
      expect(lil.isType(new Date)).to.be.equal('date')
      expect(lil.isType({})).to.be.equal('object')
      expect(lil.isType([])).to.be.equal('array')
    })
  })
})
