/*! lil-event - v0.1 - MIT License - https://github.com/lil-js/event */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports === 'object') {
    factory(exports)
    if (typeof module === 'object' && module !== null) {
      module.exports = exports.Event
    }
  } else {
    factory((root.lil = root.lil || {}))
  }
}(this, function (exports) {
  var VERSION = '0.1.0'
  var slice = Array.prototype.slice
  var hasOwn = Object.prototype.hasOwnProperty

	function Event() {}

  Event.prototype.constructor = Event

  Event.prototype.addListener = Event.prototype.on = function (event, fn, once) {
    var listeners = this._getListeners(event)
    if (typeof event !== 'string') throw new TypeError('First argument must be a string')
    if (typeof fn !== 'function') throw new TypeError('Second argument must be a function')
    if (!this._findListener(event, fn)) {
      listeners.push({ fn: fn, once: once || false })
    }
    return this
  }

  Event.prototype.removeListener = Event.prototype.off = function (event, fn) {
    var index
    var listeners = this._getListeners(event)
    var listener = this._findListener(event, fn)
    if (listener) {
      index = listeners.indexOf(listener)
      if (index >= 0) listeners.splice(index, 1)
    }
    return this
  }

  Event.prototype.addOnceListener = Event.prototype.once = function (event, fn, once) {
    this.addListener(event, fn, true)
    return this
  }

  Event.prototype.emit = Event.prototype.fire = function (event) {
    var i, l, listener, args = slice.call(arguments).slice(1)
    var listeners = this._getListeners(event)
    if (event) {
      for (i = 0, l = listeners.length; i < l; i += 1) {
        listener = listeners[i]
        if (listener.once) listeners.splice(i, 1)
        listener.fn.apply(null, args)
      }
    }
    return this
  }

  Event.prototype._findListener = function (event, fn) {
    var i, l, listeners = this._getListeners(event)
    for (i = 0, l = listeners.length; i < l; i += 1) {
      if (listeners[i].fn === fn) return listeners[i]
    }
  }

  Event.prototype._getListeners = function (event, fn) {
    var events = this._getEvents()
    if (hasOwn.call(events, event))
      return events[event]
    else
      events[event] = []
  }

  Event.prototype._getEvents = function () {
    return this._events || this.events = {}
  }

  Event.prototype.toString = function () {
    return '[object Event]'
  }

  Event.VERSION = VERSION
  exports.Event = Event
}))
