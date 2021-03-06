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
  'use strict'
  
  var VERSION = '0.1.3'
  var slice = Array.prototype.slice
  var hasOwn = Object.prototype.hasOwnProperty

  function Event() {}
  
  Event.prototype.constructor = Event

  Event.prototype.addListener = Event.prototype.on = function (event, fn, once) {
    if (typeof event !== 'string') throw new TypeError('First argument must be a string')
    if (typeof fn !== 'function') throw new TypeError('Second argument must be a function')
    if (!findListener.call(this, event, fn)) {
      getListeners.call(this, event).push({ fn: fn, once: once || false })
    }
    return this
  }

  Event.prototype.removeListener = Event.prototype.off = function (event, fn) {
    var index, listeners
    var listener = findListener.call(this, event, fn)
    if (listener) {
      listeners = getListeners.call(this, event)
      if (~listeners.indexOf(listener)) {
        listeners.splice(index, 1)
      }
    }
    return this
  }

  Event.prototype.addOnceListener = Event.prototype.once = function (event, fn, once) {
    this.addListener(event, fn, true)
    return this
  }

  Event.prototype.emit = Event.prototype.fire = function (event) {
    var listener, args = slice.call(arguments, 1)
    var listeners = getListeners.call(this, event)
    for (var i = 0, l = listeners.length; event && i < l; i += 1) {
      listener = listeners[i]
      if (listener.once) listeners.splice(i, 1)
      listener.fn.apply(null, args)
    }
    return this
  }

  Event.prototype.removeAllListeners = Event.prototype.offAll = function (event) {
    if (event && hasOwn.call(this._events, event)) {
      this._events[event].splice(0)
    }
    return this
  }

  function findListener(event, fn) {
    var listeners = getListeners.call(this, event)
    for (var i = 0, l = listeners.length; i < l; i += 1) {
      if (listeners[i].fn === fn) return listeners[i]
    }
  }

  function getListeners(event, fn) {
    var events = getEvents.call(this)
    return hasOwn.call(events, event) ? events[event] : (events[event] = [])
  }

  function getEvents() {
    return this._events || (this._events = {})
  }

  Event.VERSION = VERSION
  return exports.Event = Event
}))
