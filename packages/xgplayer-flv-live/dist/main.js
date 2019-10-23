/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/events/events.js":
/*!**********************************************************************************!*\
  !*** /Users/jiangyuqing/Desktop/Projects/xgplayer/node_modules/events/events.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "../../node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../xgplayer-buffer/index.js":
/*!***********************************!*\
  !*** ../xgplayer-buffer/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Track: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").default,
  Tracks: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").Tracks,
  AudioTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").AudioTrack,
  VideoTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").VideoTrack,

  XgBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").XgBuffer,
  RemuxBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").RemuxBuffer,

  PreSource: __webpack_require__(/*! ./src/presouce */ "../xgplayer-buffer/src/presouce.js").default
};


/***/ }),

/***/ "../xgplayer-buffer/src/buffer.js":
/*!****************************************!*\
  !*** ../xgplayer-buffer/src/buffer.js ***!
  \****************************************/
/*! exports provided: XgBuffer, RemuxBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XgBuffer", function() { return XgBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemuxBuffer", function() { return RemuxBuffer; });
class XgBuffer {
  /**
   * A buffer to store loaded data.
   *
   * @class LoaderBuffer
   * @param {number} length - Optional the buffer size
   */
  constructor (length) {
    this.length = length || 0
    this.historyLen = length || 0
    this.array = []
    this.offset = 0
  }

  /**
   * The function to push data.
   *
   * @param {number} data - The data to push into the buffer
   */
  push (data) {
    this.array.push(data)
    this.length += data.byteLength
    this.historyLen += data.byteLength
  }

  /**
   * The function to shift data.
   *
   * @param {number} length - The size of shift.
   */
  shift (length) {
    if (this.array.length < 1) {
      return new Uint8Array(0)
    }

    if (length === undefined) {
      return this._shiftBuffer()
    }
    if ((this.offset + length) === this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length)
      this.offset = 0
      this.array.shift()
      this.length -= length
      return ret
    }

    if ((this.offset + length) < this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length)
      this.offset += length
      this.length -= length
      return ret
    }

    let ret = new Uint8Array(length)
    let tmpoff = 0
    while (this.array.length > 0 && length > 0) {
      if ((this.offset + length) < this.array[0].length) {
        let tmp = this.array[0].slice(this.offset, this.offset + length)
        ret.set(tmp, tmpoff)
        this.offset += length
        this.length -= length
        length = 0
        break
      } else {
        let templength = this.array[0].length - this.offset
        ret.set(this.array[0].slice(this.offset, this.array[0].length), tmpoff)
        this.array.shift()
        this.offset = 0
        tmpoff += templength
        this.length -= templength
        length -= templength
      }
    }
    return ret
  }

  /**
   * Function to clear the buffer.
   */
  clear () {
    this.array = []
    this.length = 0
    this.offset = 0
  }

  destroy () {
    this.clear()
    this.historyLen = 0
  }

  /**
   * Function to shift one unit8Array.
   */
  _shiftBuffer () {
    this.length -= this.array[0].length
    this.offset = 0
    return this.array.shift()
  }

  /**
   * Convert uint8 data to number.
   *
   * @param {number} start - the start postion.
   * @param {number} length - the length of data.
   */
  toInt (start, length) {
    let retInt = 0
    let i = this.offset + start
    while (i < this.offset + length + start) {
      if (i < this.array[0].length) {
        retInt = retInt * 256 + this.array[0][i]
      } else if (this.array[1]) {
        retInt = retInt * 256 + this.array[1][i - this.array[0].length]
      }

      i++
    }
    return retInt
  }
}

class RemuxBuffer {
  constructor () {
    this.video = []
    this.audio = []
  }

  destroy () {
    this.video = []
    this.audio = []
  }
}


/***/ }),

/***/ "../xgplayer-buffer/src/presouce.js":
/*!******************************************!*\
  !*** ../xgplayer-buffer/src/presouce.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Source {
  constructor () {
    this.mimetype = '';
    this.init = null;
    this.data = [];
  }
}

class PreSource {
  constructor () {
    this.sources = {};
  }

  getSource (source) {
    return this.sources[source];
  }

  createSource (name) {
    this.sources[name] = new Source();
    return this.sources[name];
  }

  clear () {
    this.sources = {};
  }

  destroy () {
    this.sources = {};
  }
}

/* harmony default export */ __webpack_exports__["default"] = (PreSource);


/***/ }),

/***/ "../xgplayer-buffer/src/track.js":
/*!***************************************!*\
  !*** ../xgplayer-buffer/src/track.js ***!
  \***************************************/
/*! exports provided: default, AudioTrack, VideoTrack, Tracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrack", function() { return AudioTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrack", function() { return VideoTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tracks", function() { return Tracks; });
class Track {
  /**
   * The constructor.
   */
  constructor () {
    this.id = -1
    this.sequenceNumber = 0
    this.samples = []
    this.droppedSamples = []
    this.length = 0
  }

  /**
   * Reset the track.
   */
  reset () {
    this.sequenceNumber = 0
    this.samples = []
    this.length = 0
  }
  /**
   * destroy the track.
   */
  distroy () {
    this.reset()
    this.id = -1
  }
}

class AudioTrack extends Track {
  /**
   * The constructor for audio track.
   */
  constructor () {
    super()
    this.TAG = 'AudioTrack'
    this.type = 'audio'
  }
}

class VideoTrack extends Track {
  /**
   * The constructor for video track.
   */
  constructor () {
    super()
    this.TAG = 'VideoTrack'
    this.type = 'video'
    this.dropped = 0
  }
  /**
   * reset the video track.
   */
  reset () {
    this.sequenceNumber = 0
    this.samples = []
    this.length = 0
    this.dropped = 0
  }
}

class Tracks {
  constructor () {
    this.audioTrack = null
    this.videoTrack = null
  }
}


/***/ }),

/***/ "../xgplayer-codec/index.js":
/*!**********************************!*\
  !*** ../xgplayer-codec/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Nalunit: __webpack_require__(/*! ./src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js").default,
  SpsParser: __webpack_require__(/*! ./src/h264/nalunit/sps */ "../xgplayer-codec/src/h264/nalunit/sps.js").default,

  Compatibility: __webpack_require__(/*! ./src/compatibility */ "../xgplayer-codec/src/compatibility.js").default
};


/***/ }),

/***/ "../xgplayer-codec/src/aac/aac-helper.js":
/*!***********************************************!*\
  !*** ../xgplayer-codec/src/aac/aac-helper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class AAC {

  static getSilentFrame(codec, channelCount) {
    if (codec === 'mp4a.40.2') {
      // handle LC-AAC
      if (channelCount === 1) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
      } else if (channelCount === 2) {
        return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
      } else if (channelCount === 3) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
      } else if (channelCount === 4) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
      } else if (channelCount === 5) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
      } else if (channelCount === 6) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
      }
    } else {
      // handle HE-AAC (mp4a.40.5 / mp4a.40.29)
      if (channelCount === 1) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 2) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 3) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      }
    }
    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AAC);


/***/ }),

/***/ "../xgplayer-codec/src/compatibility.js":
/*!**********************************************!*\
  !*** ../xgplayer-codec/src/compatibility.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aac_aac_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aac/aac-helper */ "../xgplayer-codec/src/aac/aac-helper.js");



const {REMUX_EVENTS} = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["EVENTS"]

class Compatibility {
  constructor () {
    this.nextAudioDts = 0 // 模拟下一段音频数据的dts
    this.nextVideoDts = 0 // 模拟下一段视频数据的dts

    this.lastAudioSamplesLen = 0 // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0 // 上一段视频数据的长度

    this.lastVideoDts = undefined // 上一段音频数据的长度
    this.lastAudioDts = undefined // 上一段视频数据的长度

    this.allAudioSamplesCount = 0 // 音频总数据量(原始帧)
    this.allVideoSamplesCount = 0 // 视频总数据量(原始帧)

    this._firstAudioSample = null
    this._firstVideoSample = null

    this.filledAudioSamples = [] // 补充音频帧（）
    this.filledVideoSamples = [] // 补充视频帧（）
  }

  init () {
    this.before(REMUX_EVENTS.REMUX_MEDIA, this.doFix.bind(this))
  }

  reset () {
    this.nextAudioDts = 0 // 模拟下一段音频数据的dts
    this.nextVideoDts = 0 // 模拟下一段视频数据的dts

    this.lastAudioSamplesLen = 0 // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0 // 上一段视频数据的长度

    this.lastVideoDts = undefined // 上一段音频数据的长度
    this.lastAudioDts = undefined // 上一段视频数据的长度

    this.allAudioSamplesCount = 0 // 音频总数据量(原始帧)
    this.allVideoSamplesCount = 0 // 视频总数据量(原始帧)

    this._firstAudioSample = null
    this._firstVideoSample = null

    this.filledAudioSamples = [] // 补充音频帧（）
    this.filledVideoSamples = [] // 补充视频帧（）
  }

  doFix () {
    const { isFirstAudioSamples, isFirstVideoSamples } = this.getFirstSample()

    this.removeInvalidSamples()

    this.recordSamplesCount()

    if (this._firstVideoSample) {
      this.fixRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples)
    }
    if (this._firstAudioSample) {
      this.fixRefSampleDuration(this.audioTrack.meta, this.audioTrack.samples)
    }

    this.doFixVideo(isFirstVideoSamples)
    this.doFixAudio(isFirstAudioSamples)
  }

  doFixVideo (first) {
    let {samples: videoSamples, meta} = this.videoTrack

    if (meta.frameRate && meta.frameRate.fixed === false) {
      return;
    }

    if (!videoSamples || !videoSamples.length || !this._firstVideoSample) {
      return
    }

    // console.log(`video lastSample, ${videoSamples[videoSamples.length - 1].dts}`)

    const firstSample = videoSamples[0]
    const firstDts = firstSample.dts

    const samplesLen = videoSamples.length;

    // step1. 修复与audio首帧差距太大的问题
    if (first && this._firstAudioSample) {
      const videoFirstDts = this._firstVideoSample.dts
      const audioFirstDts = this._firstAudioSample.dts
      const gap = videoFirstDts - audioFirstDts
      if (gap > (2 * meta.refSampleDuration)) {
        const fillCount = Math.floor(gap / meta.refSampleDuration)

        for (let i = 0; i < fillCount; i++) {
          const clonedFirstSample = Object.assign({}, firstSample) // 视频头部帧缺失需要复制第一帧
          // 重新计算sample的dts和pts
          clonedFirstSample.dts = videoFirstDts - (i + 1) * meta.refSampleDuration
          clonedFirstSample.pts = clonedFirstSample.dts + clonedFirstSample.cts

          videoSamples.unshift(clonedFirstSample)

          this.filledVideoSamples.push({
            dts: clonedFirstSample.dts,
            size: clonedFirstSample.data.byteLength
          })
        }
      }
    }

    let gap
    // step2. 修复samples段之间的间距问题、
    if (this.nextVideoDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于2帧时进行补帧
      gap = firstDts - this.nextVideoDts
      const absGap = Math.abs(gap)
      if (gap > (2 * meta.refSampleDuration)) {
        const fillFrameCount = Math.floor(gap / meta.refSampleDuration)

        for (let i = 0; i < fillFrameCount; i++) {
          const clonedSample = Object.assign({}, videoSamples[0])
          const computed = firstDts - (i + 1) * meta.refSampleDuration

          clonedSample.dts = computed > this.nextVideoDts ? computed : this.nextVideoDts // 补的第一帧一定要是nextVideoDts
          clonedSample.pts = clonedSample.dts + clonedSample.cts

          this.videoTrack.samples.unshift(clonedSample)

          this.filledVideoSamples.push({
            dts: clonedSample.dts,
            size: clonedSample.data.byteLength
          })
        }
      } else if (absGap <= 10 && absGap > 0) {
        // 当差距在+-一帧之间时将第一帧的dts强行定位到期望位置
        // console.log('重定位视频帧dts', videoSamples[0].dts, this.nextVideoDts)
        videoSamples[0].dts = this.nextVideoDts
        videoSamples[0].originDts = videoSamples[0].dts
        videoSamples[0].cts = videoSamples[0].cts || videoSamples[0].pts - videoSamples[0].dts
        videoSamples[0].pts = videoSamples[0].dts + videoSamples[0].cts
      }
    }
    const lastDts = videoSamples[videoSamples.length - 1].dts;

    const lastSampleDuration = videoSamples.length >= 2 ? lastDts - videoSamples[videoSamples.length - 2].dts : meta.refSampleDuration

    this.lastVideoSamplesLen = samplesLen
    this.nextVideoDts = lastDts + lastSampleDuration
    this.lastVideoDts = lastDts

    // step2. 修复sample段之内的间距问题
    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = videoSamples.length; i < len; i++) {
      const current = videoSamples[i]
      const next = videoSamples[i + 1]

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;

      if (duration > (2 * meta.refSampleDuration)) {
        // 两帧之间间隔太大，需要补空白帧
        let fillFrameCount = Math.floor(duration / meta.refSampleDuration)

        let fillFrameIdx = 0
        while (fillFrameIdx < fillFrameCount) {
          const fillFrame = Object.assign({}, next)
          fillFrame.dts = current.dts + (fillFrameIdx + 1) * meta.refSampleDuration
          fillFrame.pts = fillFrame.dts + fillFrame.cts
          if (fillFrame < next.dts) {
            videoSamples.splice(i, 0, fillFrame)

            this.filledVideoSamples.push({
              dts: fillFrame.dts,
              size: fillFrame.data.byteLength
            })
          }

          fillFrameIdx++
          i++;
        }
      }
    }

    this.videoTrack.samples = videoSamples;
  }

  doFixAudio (first) {
    let {samples: audioSamples, meta} = this.audioTrack

    if (!audioSamples || !audioSamples.length) {
      return
    }
    // console.log(`audio lastSample, ${audioSamples[audioSamples.length - 1].dts}`)

    const samplesLen = audioSamples.length;
    const silentFrame = _aac_aac_helper__WEBPACK_IMPORTED_MODULE_1__["default"].getSilentFrame(meta.codec, meta.channelCount)

    const firstSample = this._firstAudioSample

    // 对audioSamples按照dts做排序
    audioSamples = Compatibility.sortAudioSamples(audioSamples)

    // step0. 首帧与video首帧间距大的问题
    if (this._firstVideoSample && first) {
      const videoFirstPts = this._firstVideoSample.pts ? this._firstVideoSample.pts : this._firstVideoSample.dts + this._firstVideoSample.cts

      if (firstSample.dts - videoFirstPts > meta.refSampleDuration) {
        const silentSampleCount = Math.floor((firstSample.dts - videoFirstPts) / meta.refSampleDuration)

        for (let i = 0; i < silentSampleCount; i++) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: firstSample.dts - (i + 1) * meta.refSampleDuration,
            filtered: 0
          }

          audioSamples.unshift(silentSample)

          this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          })
        }
      }
    }

    let gap
    const firstDts = audioSamples[0].dts

    if (this.nextAudioDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于1帧时进行补帧
      gap = firstDts - this.nextAudioDts
      const absGap = Math.abs(gap)

      if (absGap > meta.refSampleDuration && samplesLen === 1 && this.lastAudioSamplesLen === 1) {
        meta.refSampleDurationFixed = undefined
      }

      if (gap > (2 * meta.refSampleDuration)) {
        if (samplesLen === 1 && this.lastAudioSamplesLen === 1) {
          // 如果sample的length一直是1，而且一直不符合refSampleDuration，需要动态修改refSampleDuration
          meta.refSampleDurationFixed = meta.refSampleDurationFixed !== undefined ? meta.refSampleDurationFixed + gap : meta.refSampleDuration + gap
        } else {
          const silentFrameCount = Math.floor(gap / meta.refSampleDuration)

          for (let i = 0; i < silentFrameCount; i++) {
            const computed = firstDts - (i + 1) * meta.refSampleDuration
            const silentSample = Object.assign({}, audioSamples[0], {
              dts: computed > this.nextAudioDts ? computed : this.nextAudioDts
            })

            this.filledAudioSamples.push({
              dts: silentSample.dts,
              size: silentSample.data.byteLength
            })
            this.audioTrack.samples.unshift(silentSample)
          }
        }
      } else if (absGap <= 10 && absGap > 0) {
        // 当差距比较小的时候将音频帧重定位
        // console.log('重定位音频帧dts', audioSamples[0].dts, this.nextAudioDts)
        audioSamples[0].dts = this.nextAudioDts
        audioSamples[0].pts = this.nextAudioDts
      }
    }
    const lastDts = audioSamples[audioSamples.length - 1].dts;
    const lastSampleDuration = audioSamples.length >= 2 ? lastDts - audioSamples[audioSamples.length - 2].dts : meta.refSampleDuration

    this.lastAudioSamplesLen = samplesLen;
    this.nextAudioDts = meta.refSampleDurationFixed ? lastDts + meta.refSampleDurationFixed : lastDts + lastSampleDuration
    this.lastAudioDts = lastDts

    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = audioSamples.length; i < len; i++) {
      const current = audioSamples[i]
      const next = audioSamples[i + 1]

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;
      audioSamples[i].duration = duration;
      /*
      if (duration > (2 * meta.refSampleDuration)) {
        // 两帧之间间隔太大，需要补空白帧
        /**
        let silentFrameCount = Math.floor(duration / meta.refSampleDuration)
        let frameIdx = 0

        while (frameIdx < silentFrameCount) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: current.dts + (frameIdx + 1) * meta.refSampleDuration,
            filtered: 0,
            isSilent: true
          }

          audioSamples.splice(i, 0, silentSample)

          this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          })

          frameIdx++
          i++ // 不对静音帧做比较
        }
      } */
    }

    this.audioTrack.samples = Compatibility.sortAudioSamples(audioSamples)
  }

  getFirstSample () {
    // 获取video和audio的首帧数据
    let {samples: videoSamples} = this.videoTrack
    let {samples: audioSamples} = this.audioTrack

    let isFirstVideoSamples = false;
    let isFirstAudioSamples = false;

    if (!this._firstVideoSample && videoSamples.length) {
      this._firstVideoSample = Compatibility.findFirstVideoSample(videoSamples)
      isFirstVideoSamples = true
    }

    if (!this._firstAudioSample && audioSamples.length) {
      this._firstAudioSample = Compatibility.findFirstAudioSample(audioSamples) // 寻找dts最小的帧作为首个音频帧
      isFirstAudioSamples = true
    }

    return {
      isFirstVideoSamples,
      isFirstAudioSamples
    }
  }

  /**
   * 在没有refSampleDuration的问题流中，
   */
  fixRefSampleDuration (meta, samples) {
    const isVideo = meta.type === 'video'
    const allSamplesCount = isVideo ? this.allVideoSamplesCount : this.allAudioSamplesCount
    const firstDts = isVideo ? this._firstVideoSample.dts : this._firstAudioSample.dts
    const filledSamplesCount = isVideo ? this.filledVideoSamples.length : this.filledAudioSamples.length

    if (!meta.refSampleDuration || meta.refSampleDuration <= 0 || Number.isNaN(meta.refSampleDuration)) {
      if (samples.length >= 1) {
        const lastDts = samples[samples.length - 1].dts

        meta.refSampleDuration = Math.floor((lastDts - firstDts) / ((allSamplesCount + filledSamplesCount) - 1)); // 将refSampleDuration重置为计算后的平均值
      }
    } else if (meta.refSampleDuration) {
      if (samples.length >= 3) {
        const lastDts = samples[samples.length - 1].dts
        const firstDts = samples[0].dts
        const durationAvg = (lastDts - firstDts) / samples.length

        meta.refSampleDuration = Math.abs(meta.refSampleDuration - durationAvg) <= meta.refSampleDuration ? meta.refSampleDuration : durationAvg; // 将refSampleDuration重置为计算后的平均值
      }
    }
  }

  /**
   * 记录截止目前一共播放了多少帧
   */
  recordSamplesCount () {
    const { audioTrack, videoTrack } = this

    this.allAudioSamplesCount += audioTrack.samples.length
    this.allVideoSamplesCount += videoTrack.samples.length
  }

  /**
   * 去除不合法的帧（倒退、重复帧）
   */
  removeInvalidSamples () {
    const { _firstVideoSample, _firstAudioSample } = this

    this.audioTrack.samples = this.audioTrack.samples.filter((sample) => {
      return sample.dts >= _firstAudioSample.dts && (this.lastAudioDts === undefined || sample.dts > this.lastAudioDts)
    })

    this.videoTrack.samples = this.videoTrack.samples.filter((sample) => {
      return sample.dts >= _firstVideoSample.dts && (this.lastVideoDts === undefined || sample.dts > this.lastVideoDts)
    })
  }

  static sortAudioSamples (samples) {
    if (samples.length === 1) {
      return samples
    }

    return samples.sort((a, b) => {
      return a.dts - b.dts
    })
  }

  /**
   * 寻找dts最小的sample
   * @param samples
   */
  static findFirstAudioSample (samples) {
    if (!samples || samples.length === 0) {
      return null
    }

    return Compatibility.sortAudioSamples(samples)[0]
  }

  static findFirstVideoSample (samples) {
    if (!samples.length) {
      return null
    }

    const sorted = samples.sort((a, b) => {
      return a.dts - b.dts;
    })

    for (let i = 0, len = sorted.length; i < len; i++) {
      if (sorted[i].isKeyframe) {
        return sorted[i]
      }
    }
  }

  get tracks () {
    return this._context.getInstance('TRACKS')
  }

  get audioTrack () {
    if (this.tracks) {
      return this.tracks.audioTrack
    }
    return null
  }

  get videoTrack () {
    if (this.tracks) {
      return this.tracks.videoTrack
    }
    return null
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Compatibility);


/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/golomb.js":
/*!****************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/golomb.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Golomb {
  constructor (uint8array) {
    this.TAG = 'Golomb'
    this._buffer = uint8array
    this._bufferIndex = 0
    this._totalBytes = uint8array.byteLength
    this._totalBits = uint8array.byteLength * 8
    this._currentWord = 0
    this._currentWordBitsLeft = 0
  }

  destroy () {
    this._buffer = null
  }

  _fillCurrentWord () {
    let bufferBytesLeft = this._totalBytes - this._bufferIndex
    if (bufferBytesLeft <= 0) {
      // TODO 异常处理
    }

    let bytesRead = Math.min(4, bufferBytesLeft)
    let word = new Uint8Array(4)
    word.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + bytesRead))
    this._currentWord = new DataView(word.buffer).getUint32(0, false)

    this._bufferIndex += bytesRead
    this._currentWordBitsLeft = bytesRead * 8
  }

  readBits (bits) {
    if (bits > 32) {
      // TODO
    }

    if (bits <= this._currentWordBitsLeft) {
      let result = this._currentWord >>> (32 - bits)
      this._currentWord <<= bits
      this._currentWordBitsLeft -= bits
      return result
    }

    let result = this._currentWordBitsLeft ? this._currentWord : 0
    // eslint-disable-next-line
    result >>> (32 - this._currentWordBitsLeft)
    let bitsNeedLeft = bits - this._currentWordBitsLeft

    this._fillCurrentWord()
    let bitsReadNext = Math.min(bitsNeedLeft, this._currentWordBitsLeft)

    let result2 = this._currentWord >>> (32 - bitsReadNext)
    this._currentWord <<= bitsReadNext
    this._currentWordBitsLeft -= bitsReadNext

    result = (result << bitsReadNext) | result2
    return result
  }

  readBool () {
    return this.readBits(1) === 1
  }

  readByte () {
    return this.readBits(8)
  }

  _skipLeadingZero () {
    let zeroCount
    for (zeroCount = 0; zeroCount < this._currentWordBitsLeft; zeroCount++) {
      if ((this._currentWord & (0x80000000 >>> zeroCount)) !== 0) {
        this._currentWord <<= zeroCount
        this._currentWordBitsLeft -= zeroCount
        return zeroCount
      }
    }
    this._fillCurrentWord()
    return zeroCount + this._skipLeadingZero()
  }

  readUEG () { // unsigned exponential golomb
    let leadingZeros = this._skipLeadingZero()
    return this.readBits(leadingZeros + 1) - 1
  }

  readSEG () { // signed exponential golomb
    let value = this.readUEG()
    if (value & 0x01) {
      return (value + 1) >>> 1
    } else {
      return -1 * (value >>> 1)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Golomb);


/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/index.js":
/*!***************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sps */ "../xgplayer-codec/src/h264/nalunit/sps.js");

class Nalunit {
  static getNalunits (buffer) {
    if (buffer.length - buffer.position < 4) {
      return [];
    }

    let buf = buffer.dataview;
    let position = buffer.position;
    if (buf.getInt32(position) === 1 ||
    (buf.getInt16(position) === 0 && buf.getInt8(position + 2) === 1)) {
      return Nalunit.getAnnexbNals(buffer);
    } else {
      return Nalunit.getAvccNals(buffer);
    }
  }

  static getAnnexbNals (buffer) {
    let nals = [];
    let position = Nalunit.getHeaderPositionAnnexB(buffer);
    let start = position.pos;
    let end = start;
    while (start < buffer.length - 4) {
      let header = buffer.buffer.slice(start, start + position.headerLength);
      if (position.pos === buffer.position) {
        buffer.skip(position.headerLength);
      }
      position = Nalunit.getHeaderPositionAnnexB(buffer);
      end = position.pos;
      let body = new Uint8Array(buffer.buffer.slice(start + header.byteLength, end));
      let unit = {header, body};
      Nalunit.analyseNal(unit);
      nals.push(unit);
      buffer.skip(end - buffer.position);
      start = end;
    }
    return nals;
  }

  static getAvccNals (buffer) {
    let nals = [];
    while (buffer.position < buffer.length - 4) {
      let length = buffer.dataview.getInt32(buffer.position);
      if (buffer.length - buffer.position >= length) {
        let header = buffer.buffer.slice(buffer.position, buffer.position + 4);
        buffer.skip(4)
        let body = buffer.buffer.slice(buffer.position, buffer.position + length);
        buffer.skip(length);
        let unit = {header, body};
        Nalunit.analyseNal(unit);
        nals.push(unit);
      } else {
        break;
      }
    }
    return nals;
  }

  static analyseNal (unit) {
    let type = unit.body[0] & 0x1f;
    switch (type) {
      case 1:
        // NDR
        unit.ndr = true;
        break;
      case 5:
        // IDR
        unit.idr = true;
        break;
      case 6:
        // SEI
        break;
      case 7:
        // SPS
        unit.sps = _sps__WEBPACK_IMPORTED_MODULE_0__["default"].parseSPS(unit.body);
        break;
      case 8:
        // PPS
        unit.pps = true;
        break;
      case 9:
        // AUD
        break;
      default:
        break;
    }
  }

  static getHeaderPositionAnnexB (buffer) {
    // seperate
    let pos = buffer.position;
    let headerLength = 0;
    while (headerLength !== 3 && headerLength !== 4 && pos < buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        } else if (buffer.dataview.getInt8(pos + 2) === 1) {
          headerLength = 3;
        } else {
          pos++;
        }
      } else {
        pos++;
      }
    }

    if (pos === buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        }
      } else {
        pos++;
        if (buffer.dataview.getInt16(pos) === 0 && buffer.dataview.getInt8(pos) === 1) {
          // 0x0000001
          headerLength = 3;
        } else {
          pos = buffer.length;
        }
      }
    }
    return {pos, headerLength};
  }

  static getAvcc (sps, pps) {
    let ret = new Uint8Array(sps.byteLength + pps.byteLength + 11);
    ret[0] = 0x01;
    ret[1] = sps[1];
    ret[2] = sps[2];
    ret[3] = sps[3];
    ret[4] = 255;
    ret[5] = 225;

    let offset = 6;

    ret.set(new Uint8Array([(sps.byteLength >>> 8) & 0xff, sps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(sps, offset);
    offset += sps.byteLength;

    ret[offset] = 1;
    offset++;

    ret.set(new Uint8Array([(pps.byteLength >>> 8) & 0xff, pps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(pps, offset);
    return ret;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Nalunit);


/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/sps.js":
/*!*************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/sps.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _golomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./golomb */ "../xgplayer-codec/src/h264/nalunit/golomb.js");
/* eslint-disable camelcase  */
/* eslint-disable one-var  */


class SPSParser {
  static _ebsp2rbsp (uint8array) {
    let src = uint8array
    let srcLength = src.byteLength
    let dst = new Uint8Array(srcLength)
    let dstIdx = 0

    for (let i = 0; i < srcLength; i++) {
      if (i >= 2) {
        if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
          continue
        }
      }
      dst[dstIdx] = src[i]
      dstIdx++
    }

    return new Uint8Array(dst.buffer, 0, dstIdx)
  }

  static parseSPS (uint8array) {
    let rbsp = SPSParser._ebsp2rbsp(uint8array)
    let gb = new _golomb__WEBPACK_IMPORTED_MODULE_0__["default"](rbsp)

    gb.readByte()
    let profileIdc = gb.readByte()
    gb.readByte()
    let levelIdc = gb.readByte()
    gb.readUEG()

    let profile_string = SPSParser.getProfileString(profileIdc)
    let level_string = SPSParser.getLevelString(levelIdc)
    let chroma_format_idc = 1
    let chroma_format = 420
    let chroma_format_table = [0, 420, 422, 444]
    let bit_depth = 8

    if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 ||
      profileIdc === 244 || profileIdc === 44 || profileIdc === 83 ||
      profileIdc === 86 || profileIdc === 118 || profileIdc === 128 ||
      profileIdc === 138 || profileIdc === 144) {
      chroma_format_idc = gb.readUEG()
      if (chroma_format_idc === 3) {
        gb.readBits(1)
      }
      if (chroma_format_idc <= 3) {
        chroma_format = chroma_format_table[chroma_format_idc]
      }

      bit_depth = gb.readUEG() + 8
      gb.readUEG()
      gb.readBits(1)
      if (gb.readBool()) {
        let scaling_list_count = (chroma_format_idc !== 3) ? 8 : 12
        for (let i = 0; i < scaling_list_count; i++) {
          if (gb.readBool()) {
            if (i < 6) {
              SPSParser._skipScalingList(gb, 16)
            } else {
              SPSParser._skipScalingList(gb, 64)
            }
          }
        }
      }
    }
    gb.readUEG()
    let pic_order_cnt_type = gb.readUEG()
    if (pic_order_cnt_type === 0) {
      gb.readUEG()
    } else if (pic_order_cnt_type === 1) {
      gb.readBits(1)
      gb.readSEG()
      gb.readSEG()
      let num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG()
      for (let i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
        gb.readSEG()
      }
    }
    gb.readUEG()
    gb.readBits(1)

    let pic_width_in_mbs_minus1 = gb.readUEG()
    let pic_height_in_map_units_minus1 = gb.readUEG()

    let frame_mbs_only_flag = gb.readBits(1)
    if (frame_mbs_only_flag === 0) {
      gb.readBits(1)
    }
    gb.readBits(1)

    let frame_crop_left_offset = 0
    let frame_crop_right_offset = 0
    let frame_crop_top_offset = 0
    let frame_crop_bottom_offset = 0

    let frame_cropping_flag = gb.readBool()
    if (frame_cropping_flag) {
      frame_crop_left_offset = gb.readUEG()
      frame_crop_right_offset = gb.readUEG()
      frame_crop_top_offset = gb.readUEG()
      frame_crop_bottom_offset = gb.readUEG()
    }

    let par_width = 1, par_height = 1
    let fps = 0, fps_fixed = true, fps_num = 0, fps_den = 0

    let vui_parameters_present_flag = gb.readBool()
    if (vui_parameters_present_flag) {
      if (gb.readBool()) { // aspect_ratio_info_present_flag
        let aspect_ratio_idc = gb.readByte()
        let par_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2]
        let par_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1]

        if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
          par_width = par_w_table[aspect_ratio_idc - 1]
          par_height = par_h_table[aspect_ratio_idc - 1]
        } else if (aspect_ratio_idc === 255) {
          par_width = gb.readByte() << 8 | gb.readByte()
          par_height = gb.readByte() << 8 | gb.readByte()
        }
      }

      if (gb.readBool()) {
        gb.readBool()
      }
      if (gb.readBool()) {
        gb.readBits(4)
        if (gb.readBool()) {
          gb.readBits(24)
        }
      }
      if (gb.readBool()) {
        gb.readUEG()
        gb.readUEG()
      }
      if (gb.readBool()) {
        let num_units_in_tick = gb.readBits(32)
        let time_scale = gb.readBits(32)
        fps_fixed = gb.readBool()

        fps_num = time_scale
        fps_den = num_units_in_tick * 2
        fps = fps_num / fps_den
      }
    }

    let parScale = 1
    if (par_width !== 1 || par_height !== 1) {
      parScale = par_width / par_height
    }

    let crop_unit_x = 0, crop_unit_y = 0
    if (chroma_format_idc === 0) {
      crop_unit_x = 1
      crop_unit_y = 2 - frame_mbs_only_flag
    } else {
      let sub_wc = (chroma_format_idc === 3) ? 1 : 2
      let sub_hc = (chroma_format_idc === 1) ? 2 : 1
      crop_unit_x = sub_wc
      crop_unit_y = sub_hc * (2 - frame_mbs_only_flag)
    }

    let codec_width = (pic_width_in_mbs_minus1 + 1) * 16
    let codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16)

    codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x
    codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y

    let present_width = Math.ceil(codec_width * parScale)

    gb.destroy()
    gb = null

    return {
      profile_string: profile_string,
      level_string: level_string,
      bit_depth: bit_depth,
      chroma_format: chroma_format,
      chroma_format_string: SPSParser.getChromaFormatString(chroma_format),

      frame_rate: {
        fixed: fps_fixed,
        fps: fps,
        fps_den: fps_den,
        fps_num: fps_num
      },

      par_ratio: {
        width: par_width,
        height: par_height
      },

      codec_size: {
        width: codec_width,
        height: codec_height
      },

      present_size: {
        width: present_width,
        height: codec_height
      }
    }
  }

  static _skipScalingList (gb, count) {
    let last_scale = 8, next_scale = 8
    let delta_scale = 0
    for (let i = 0; i < count; i++) {
      if (next_scale !== 0) {
        delta_scale = gb.readSEG()
        next_scale = (last_scale + delta_scale + 256) % 256
      }
      last_scale = (next_scale === 0) ? last_scale : next_scale
    }
  }

  static getProfileString (profileIdc) {
    switch (profileIdc) {
      case 66:
        return 'Baseline'
      case 77:
        return 'Main'
      case 88:
        return 'Extended'
      case 100:
        return 'High'
      case 110:
        return 'High10'
      case 122:
        return 'High422'
      case 244:
        return 'High444'
      default:
        return 'Unknown'
    }
  }

  static getLevelString (levelIdc) {
    return (levelIdc / 10).toFixed(1)
  }

  static getChromaFormatString (chroma) {
    switch (chroma) {
      case 420:
        return '4:2:0'
      case 422:
        return '4:2:2'
      case 444:
        return '4:4:4'
      default:
        return 'Unknown'
    }
  }

  static toVideoMeta (spsConfig) {
    let meta = {}
    if (spsConfig && spsConfig.codec_size) {
      meta.codecWidth = spsConfig.codec_size.width
      meta.codecHeight = spsConfig.codec_size.height
      meta.presentWidth = spsConfig.present_size.width
      meta.presentHeight = spsConfig.present_size.height
    }

    meta.profile = spsConfig.profile_string
    meta.level = spsConfig.level_string
    meta.bitDepth = spsConfig.bit_depth
    meta.chromaFormat = spsConfig.chroma_format

    meta.parRatio = {
      width: spsConfig.par_ratio.width,
      height: spsConfig.par_ratio.height
    }

    meta.frameRate = spsConfig.frame_rate

    let fpsDen = meta.frameRate.fps_den
    let fpsNum = meta.frameRate.fps_num
    meta.refSampleDuration = Math.floor(meta.timescale * (fpsDen / fpsNum))
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SPSParser);


/***/ }),

/***/ "../xgplayer-demux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-demux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  // HLS
  M3U8Parser: __webpack_require__(/*! ./src/hls/demuxer/m3u8parser */ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js").default,
  TsDemuxer: __webpack_require__(/*! ./src/hls/demuxer/ts */ "../xgplayer-demux/src/hls/demuxer/ts.js").default,
  Playlist: __webpack_require__(/*! ./src/hls/playlist */ "../xgplayer-demux/src/hls/playlist.js").default,
  FlvDemuxer: __webpack_require__(/*! ./src/flv/index */ "../xgplayer-demux/src/flv/index.js").default
};


/***/ }),

/***/ "../xgplayer-demux/src/flv/amf-parser.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/flv/amf-parser.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AMFParser; });
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__);


const DATA_TYPES = {
  NUMBER: 0,
  BOOLEAN: 1,
  STRING: 2,
  OBJECT: 3,
  MIX_ARRAY: 8,
  OBJECT_END: 9,
  STRICT_ARRAY: 10,
  DATE: 11,
  LONE_STRING: 12
}

/**
 * meta信息解析
 */
class AMFParser {
  constructor () {
    this.offset = 0
    this.readOffset = this.offset
  }

  resolve (meta, size) {
    if (size < 3) {
      throw new Error('not enough data for metainfo')
    }
    const metaData = {}
    const name = this.parseValue(meta)
    const value = this.parseValue(meta, size - name.bodySize)
    metaData[name.data] = value.data

    this.resetStatus()
    return metaData
  }

  resetStatus () {
    this.offset = 0
    this.readOffset = this.offset
  }

  parseString (buffer) {
    const dv = new DataView(buffer, this.readOffset)
    const strLen = dv.getUint16(0, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"])
    let str = ''
    if (strLen > 0) {
      str = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["UTF8"].decode(new Uint8Array(buffer, this.readOffset + 2, strLen))
    } else {
      str = ''
    }
    let size = strLen + 2
    this.readOffset += size
    return {
      data: str,
      bodySize: strLen + 2
    }
  }

  parseDate (buffer, size) {
    const dv = new DataView(buffer, this.readOffset, size)
    let ts = dv.getFloat64(0, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"])
    const timeOffset = dv.getInt16(8, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"])
    ts += timeOffset * 60 * 1000

    this.readOffset += 10
    return {
      data: new Date(ts),
      bodySize: 10
    }
  }

  parseObject (buffer, size) {
    const name = this.parseString(buffer, size)
    const value = this.parseValue(buffer, size - name.bodySize)
    return {
      data: {
        name: name.data,
        value: value.data
      },
      bodySize: name.bodySize + value.bodySize,
      isObjEnd: value.isObjEnd
    }
  }

  parseLongString (buffer) {
    const dv = new DataView(buffer, this.readOffset)
    const strLen = dv.getUint32(0, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"])
    let str = ''
    if (strLen > 0) {
      str = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["UTF8"].decode(new Uint8Array(buffer, this.readOffset + 2, strLen))
    } else {
      str = ''
    }
    // const size = strLen + 4;
    this.readOffset += strLen + 4
    return {
      data: str,
      bodySize: strLen + 4
    }
  }

  /**
   * 解析meta中的变量
   */
  parseValue (data, size) {
    let buffer = new ArrayBuffer()
    if (data instanceof ArrayBuffer) {
      buffer = data
    } else {
      buffer = data.buffer
    }
    const {
      NUMBER,
      BOOLEAN,
      STRING,
      OBJECT,
      MIX_ARRAY,
      OBJECT_END,
      STRICT_ARRAY,
      DATE,
      LONE_STRING
    } = DATA_TYPES
    const dataView = new DataView(buffer, this.readOffset, size)
    let isObjEnd = false
    const type = dataView.getUint8(0)
    let offset = 1
    this.readOffset += 1
    let value = null

    switch (type) {
      case NUMBER: {
        value = dataView.getFloat64(1, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"])
        this.readOffset += 8
        offset += 8
        break
      }
      case BOOLEAN: {
        const boolNum = dataView.getUint8(1)
        value = !!boolNum
        this.readOffset += 1
        offset += 1
        break
      }
      case STRING: {
        const str = this.parseString(buffer)
        value = str.data
        offset += str.bodySize
        break
      }
      case OBJECT: {
        value = {}
        let objEndSize = 0
        if (dataView.getUint32(size - 4, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"]) & 0x00FFFFFF) {
          objEndSize = 3
        }
        // this.readOffset += offset - 1;
        while (offset < size - 4) {
          const amfObj = this.parseObject(buffer, size - offset - objEndSize)
          if (amfObj.isObjectEnd) { break }
          value[amfObj.data.name] = amfObj.data.value
          offset += amfObj.bodySize
        }
        if (offset <= size - 3) {
          const mark = dataView.getUint32(offset - 1, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"]) & 0x00FFFFFF
          if (mark === 9) {
            this.readOffset += 3
            offset += 3
          }
        }
        break
      }
      case MIX_ARRAY: {
        value = {}
        offset += 4
        this.readOffset += 4
        let objEndSize = 0
        if ((dataView.getUint32(size - 4, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"]) & 0x00FFFFFF) === 9) {
          objEndSize = 3
        }

        while (offset < size - 8) {
          const amfVar = this.parseObject(buffer, size - offset - objEndSize)
          if (amfVar.isObjectEnd) { break }
          value[amfVar.data.name] = amfVar.data.value
          offset += amfVar.bodySize
        }
        if (offset <= size - 3) {
          const marker = dataView.getUint32(offset - 1, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"]) & 0x00FFFFFF
          if (marker === 9) {
            offset += 3
            this.readOffset += 3
          }
        }
        break
      }

      case OBJECT_END: {
        value = null
        isObjEnd = true
        break
      }

      case STRICT_ARRAY: {
        value = []
        const arrLength = dataView.getUint32(1, !xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["isLe"])
        offset += 4
        this.readOffset += 4
        for (let i = 0; i < arrLength; i++) {
          const script = this.parseValue(buffer, size - offset)
          value.push(script.data)
          offset += script.bodySize
        }
        break
      }

      case DATE: {
        const date = this.parseDate(buffer, size - 1)
        value = date.data
        offset += date.bodySize
        break
      }

      case LONE_STRING: {
        const longStr = this.parseLongString(buffer, size - 1)
        value = longStr.data
        offset += longStr.bodySize
        break
      }

      default: {
        offset = size
      }
    }

    return {
      data: value,
      bodySize: offset,
      isObjEnd: isObjEnd
    }
  }
}


/***/ }),

/***/ "../xgplayer-demux/src/flv/index.js":
/*!******************************************!*\
  !*** ../xgplayer-demux/src/flv/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xgplayer_codec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");
/* harmony import */ var xgplayer_codec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xgplayer_codec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xgplayer_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");
/* harmony import */ var xgplayer_buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xgplayer_buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amf_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amf-parser */ "../xgplayer-demux/src/flv/amf-parser.js");






const DEMUX_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].DEMUX_EVENTS;

class FlvDemuxer {
  constructor () {
    this._firstFragmentLoaded = false
    this._trackNum = 0
    this._hasScript = false
  }

  init () {
    this.on(DEMUX_EVENTS.DEMUX_START, this.doParseFlv.bind(this))
  }

  /**
   * if the flv head is valid
   * @param data
   * @returns {boolean}
   */
  static isFlvFile (data) {
    return !(data[0] !== 0x46 || data[1] !== 0x4C || data[2] !== 0x56 || data[3] !== 0x01)
  }

  /**
   * If the stream has audio or video.
   * @param {number} streamFlag - Data from the stream which is define whether the audio / video track is exist.
   */
  static getPlayType (streamFlag) {
    const result = {
      hasVideo: false,
      hasAudio: false
    }

    if (streamFlag & 0x01 > 0) {
      result.hasVideo = true
    }

    if (streamFlag & 0x04 > 0) {
      result.hasAudio = true
    }

    return result
  }

  doParseFlv () {
    if (!this._firstFragmentLoaded) {
      if (this.loaderBuffer.length < 13) {
        return
      }
      const header = this.loaderBuffer.shift(13)
      this.parseFlvHeader(header)
      this.doParseFlv() // 递归调用，继续解析flv流
    } else {
      if (this.loaderBuffer.length < 11) {
        return
      }
      let chunk;
      do {
        chunk = this._parseFlvTag()
      } while (chunk)

      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE)
    }
  }

  parseFlvHeader (header) {
    if (!FlvDemuxer.isFlvFile(header)) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('invalid flv file'))
      this.doParseFlv()
    } else {
      this._firstFragmentLoaded = true
      const playType = FlvDemuxer.getPlayType(header[4])

      if (playType.hasVideo) {
        this.initVideoTrack()
      }

      if (playType.hasAudio) {
        this.initAudioTrack()
      }
    }
    this.doParseFlv()
  }

  /**
   * init default video track configs
   */
  initVideoTrack () {
    this._trackNum++
    let videoTrack = new xgplayer_buffer__WEBPACK_IMPORTED_MODULE_2__["VideoTrack"]()
    videoTrack.meta = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["VideoTrackMeta"]()
    videoTrack.id = videoTrack.meta.id = this._trackNum

    this.tracks.videoTrack = videoTrack
  }

  /**
   * init default audio track configs
   */
  initAudioTrack () {
    this._trackNum++
    let audioTrack = new xgplayer_buffer__WEBPACK_IMPORTED_MODULE_2__["AudioTrack"]()
    audioTrack.meta = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["AudioTrackMeta"]()
    audioTrack.id = audioTrack.meta.id = this._trackNum

    this.tracks.audioTrack = audioTrack
  }

  /**
   * Package the data as the following data structure
   * {
   *    data: Uint8Array. the Stream data.
   *    info: The first byte info of the Tag.
   *    tagType: 8、9、18
   *    timeStamp: the timestemp
   * }
   */
  _parseFlvTag () {
    if (this.loaderBuffer.length < 11) {
      return null
    }
    let chunk = this._parseFlvTagHeader()
    if (chunk) {
      this._processChunk(chunk)
    }
    return chunk
  }

  /**
   * Parse the 11 byte tag Header
   */
  _parseFlvTagHeader () {
    let offset = 0
    let chunk = {}

    let tagType = this.loaderBuffer.toInt(offset, 1)
    offset += 1

    // 2 bit FMS reserved, 1 bit filtered, 5 bit tag type
    chunk.filtered = (tagType & 32) >>> 5
    chunk.tagType = tagType & 31

    // 3 Byte datasize
    chunk.datasize = this.loaderBuffer.toInt(offset, 3)
    offset += 3

    if ((chunk.tagType !== 8 && chunk.tagType !== 9 && chunk.tagType !== 11 && chunk.tagType !== 18) ||
      this.loaderBuffer.toInt(8, 3) !== 0) {
      if (this.loaderBuffer && this.loaderBuffer.length > 0) {
        this.loaderBuffer.shift(1)
      }
      this.logger.warn(this.TAG, 'tagType ' + chunk.tagType)
      return null
    }

    if (this.loaderBuffer.length < chunk.datasize + 15) {
      return null
    }

    // read the data.
    this.loaderBuffer.shift(4)

    // 3 Byte timestamp
    let timestamp = this.loaderBuffer.toInt(0, 3)
    this.loaderBuffer.shift(3)

    // 1 Byte timestampExt
    let timestampExt = this.loaderBuffer.shift(1)[0]
    if (timestampExt > 0) {
      timestamp += timestampExt * 0x1000000
    }

    chunk.dts = timestamp

    // streamId
    this.loaderBuffer.shift(3)
    return chunk
  }

  _processChunk (chunk) {
    switch (chunk.tagType) {
      case 18:
        this._parseScriptData(chunk)
        break
      case 8:
        this._parseAACData(chunk)
        break
      case 9:
        this._parseHevcData(chunk)
        break
      case 11:
        // for some CDN that did not process the currect RTMP messages
        this.loaderBuffer.shift(3)
        break
      default:
        this.loaderBuffer.shift(1)
    }
  }

  /**
   * parse flv script data
   * @param chunk
   * @private
   */
  _parseScriptData (chunk) {
    let audioTrack = this.tracks.audioTrack
    let videoTrack = this.tracks.videoTrack

    let data = this.loaderBuffer.shift(chunk.datasize)

    const info = new _amf_parser__WEBPACK_IMPORTED_MODULE_3__["default"]().resolve(data, data.length)

    const onMetaData = this._context.onMetaData = info ? info.onMetaData : undefined

    // fill mediaInfo
    this._context.mediaInfo.duration = onMetaData.duration
    this._context.mediaInfo.hasVideo = onMetaData.hasVideo
    this._context.mediaInfo.hsaAudio = onMetaData.hasAudio

    let validate = this._datasizeValidator(chunk.datasize)
    if (validate) {
      this.emit(DEMUX_EVENTS.MEDIA_INFO)
      this._hasScript = true
    }

    // Edit default meta.
    if (audioTrack && !audioTrack.hasSpecificConfig) {
      let meta = audioTrack.meta
      if (onMetaData.audiosamplerate) {
        meta.sampleRate = onMetaData.audiosamplerate
      }

      if (onMetaData.audiochannels) {
        meta.channelCount = onMetaData.audiochannels
      }

      switch (onMetaData.audiosamplerate) {
        case 44100:
          meta.sampleRateIndex = 4
          break
        case 22050:
          meta.sampleRateIndex = 7
          break
        case 11025:
          meta.sampleRateIndex = 10
          break
      }
    }
    if (videoTrack && !videoTrack.hasSpecificConfig) {
      let meta = videoTrack.meta
      if (typeof onMetaData.framerate === 'number') {
        let fpsNum = Math.floor(onMetaData.framerate * 1000)
        if (fpsNum > 0) {
          let fps = fpsNum / 1000
          if (!meta.frameRate) {
            meta.frameRate = {}
          }
          meta.frameRate.fixed = true
          meta.frameRate.fps = fps
          meta.frameRate.fps_num = fpsNum
          meta.frameRate.fps_den = 1000
        }
      }
    }
  }

  _aacSequenceHeaderParser (data) {
    let ret = {}
    ret.hasSpecificConfig = true
    ret.objectType = data[1] >>> 3
    ret.sampleRateIndex = ((data[1] & 7) << 1) | (data[2] >>> 7)
    ret.audiosamplerate = this._switchAudioSampleRate(ret.sampleRateIndex)
    ret.channelCount = (data[2] & 120) >>> 3
    ret.frameLength = (data[2] & 4) >>> 2
    ret.dependsOnCoreCoder = (data[2] & 2) >>> 1
    ret.extensionFlagIndex = data[2] & 1

    ret.codec = `mp4a.40.${ret.objectType}`
    let userAgent = window.navigator.userAgent.toLowerCase();
    let extensionSamplingIndex;

    let config;
    let samplingIndex = ret.sampleRateIndex;

    if (userAgent.indexOf('firefox') !== -1) {
      // firefox: use SBR (HE-AAC) if freq less than 24kHz
      if (ret.sampleRateIndex >= 6) {
        ret.objectType = 5;
        config = new Array(4);
        extensionSamplingIndex = samplingIndex - 3;
      } else { // use LC-AAC
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = samplingIndex;
      }
    } else if (userAgent.indexOf('android') !== -1) {
      // android: always use LC-AAC
      ret.objectType = 2;
      config = new Array(2);
      extensionSamplingIndex = samplingIndex;
    } else {
      // for other browsers, e.g. chrome...
      // Always use HE-AAC to make it easier to switch aac codec profile
      ret.objectType = 5;
      extensionSamplingIndex = ret.sampleRateIndex;
      config = new Array(4);

      if (ret.sampleRateIndex >= 6) {
        extensionSamplingIndex = ret.sampleRateIndex - 3;
      } else if (ret.channelCount === 1) { // Mono channel
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = ret.sampleRateIndex;
      }
    }

    config[0] = ret.objectType << 3;
    config[0] |= (ret.sampleRateIndex & 0x0F) >>> 1;
    config[1] = (ret.sampleRateIndex & 0x0F) << 7;
    config[1] |= (ret.channelCount & 0x0F) << 3;
    if (ret.objectType === 5) {
      config[1] |= ((extensionSamplingIndex & 0x0F) >>> 1);
      config[2] = (extensionSamplingIndex & 0x01) << 7;
      // extended audio object type: force to 2 (LC-AAC)
      config[2] |= (2 << 2);
      config[3] = 0;
    }
    ret.config = config
    return ret
  }

  _parseAACData (chunk) {
    let track = this.tracks.audioTrack
    if (!track) {
      return
    }

    let meta = track.meta

    if (!meta) {
      meta = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["AudioTrackMeta"]()
    }

    let info = this.loaderBuffer.shift(1)[0]

    chunk.data = this.loaderBuffer.shift(chunk.datasize - 1)

    let format = (info & 240) >>> 4

    track.format = format

    if (format !== 10) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error(`invalid audio format: ${format}`))
    }

    if (format === 10 && !this._hasAudioSequence) {
      meta.sampleRate = this._switchAudioSamplingFrequency(info)
      meta.sampleRateIndex = (info & 12) >>> 2
      meta.frameLenth = (info & 2) >>> 1
      meta.channelCount = info & 1
      meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale)
    }

    let audioSampleRate = meta.audioSampleRate
    let audioSampleRateIndex = meta.sampleRateIndex
    let refSampleDuration = meta.refSampleDuration

    delete chunk.tagType
    let validate = this._datasizeValidator(chunk.datasize)

    if (chunk.data[0] === 0) { // AAC Sequence Header
      let aacHeader = this._aacSequenceHeaderParser(chunk.data)
      audioSampleRate = aacHeader.audiosamplerate || meta.audioSampleRate
      audioSampleRateIndex = aacHeader.sampleRateIndex || meta.sampleRateIndex
      refSampleDuration = Math.floor(1024 / audioSampleRate * meta.timescale)

      meta.channelCount = aacHeader.channelCount
      meta.sampleRate = audioSampleRate
      meta.sampleRateIndex = audioSampleRateIndex
      meta.refSampleDuration = refSampleDuration
      meta.duration = this._context.mediaInfo.duration * meta.timescale
      meta.config = aacHeader.config
      meta.objectType = aacHeader.objectType;

      const audioMedia = this._context.mediaInfo.audio

      // fill audio media info
      audioMedia.codec = aacHeader.codec
      audioMedia.channelCount = aacHeader.channelCount
      audioMedia.sampleRate = audioSampleRate
      audioMedia.sampleRateIndex = aacHeader.audioSampleRateIndex

      if (this._hasScript && !this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio')
      } else if (this._hasScript && this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.AUDIO_METADATA_CHANGE)
      }
      ;
      this._hasAudioSequence = true
    } else {
      chunk.data = chunk.data.slice(1, chunk.data.length)
      track.samples.push(chunk)
    }
    if (!validate) {
      const error = new Error('TAG length error at ' + chunk.datasize)
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, error.message)
      this.logger.warn(this.TAG, error.message)
    }
  }

  /**
   * parse hevc/avc video data
   * @param chunk
   * @private
   */
  _parseHevcData (chunk) {
    // header
    let info = this.loaderBuffer.shift(1)[0]
    chunk.frameType = (info & 0xf0) >>> 4
    chunk.isKeyframe = chunk.frameType === 1
    // let tempCodecID = this.tracks.videoTrack.codecID
    let codecID = info & 0x0f
    this.tracks.videoTrack.codecID = codecID

    // hevc和avc的header解析方式一样
    chunk.avcPacketType = this.loaderBuffer.shift(1)[0]
    chunk.cts = this.loaderBuffer.toInt(0, 3)
    this.loaderBuffer.shift(3)

    // 12 for hevc, 7 for avc
    if (codecID === 12) {
      const data = this.loaderBuffer.shift(chunk.datasize - 5)
      chunk.data = data

      if (Number.parseInt(chunk.avcPacketType) !== 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.logger.warn(this.TAG, `invalid video tag datasize: ${chunk.datasize}`)
        }
        let nalu = {}
        let r = 0
        nalu.cts = chunk.cts
        nalu.dts = chunk.dts
        while (chunk.data.length > r) {
          let sizes = chunk.data.slice(Number.parseInt(r), 4 + r)
          nalu.size = sizes[3]
          nalu.size += sizes[2] * 256
          nalu.size += sizes[1] * 256 * 256
          nalu.size += sizes[0] * 256 * 256 * 256
          r += 4
          nalu.data = chunk.data.slice(Number.parseInt(r), nalu.size + r)
          r += nalu.size
          this.tracks.videoTrack.samples.push(nalu)
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video')
        }
      } else if (Number.parseInt(chunk.avcPacketType) === 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.logger.warn(this.TAG, `invalid video tag datasize: ${chunk.datasize}`)
        } else {
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video')
        }
      }
    } else if (codecID === 7) {
      let data = this.loaderBuffer.shift(chunk.datasize - 5)
      if (data[4] === 0 && data[5] === 0 && data[6] === 0 && data[7] === 1) {
        let avcclength = 0
        for (let i = 0; i < 4; i++) {
          avcclength = avcclength * 256 + data[i]
        }
        avcclength -= 4
        data = data.slice(4, data.length)
        data[3] = avcclength % 256
        avcclength = (avcclength - data[3]) / 256
        data[2] = avcclength % 256
        avcclength = (avcclength - data[2]) / 256
        data[1] = avcclength % 256
        data[0] = (avcclength - data[1]) / 256
      }

      chunk.data = data
      // If it is AVC sequece Header.
      if (chunk.avcPacketType === 0) {
        this._avcSequenceHeaderParser(chunk.data)
        let validate = this._datasizeValidator(chunk.datasize)
        if (validate) {
          if (this._hasScript && !this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video')
          } else if (this._hasScript && this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.VIDEO_METADATA_CHANGE)
          }
          this._hasVideoSequence = true
        }
      } else {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.logger.warn(this.TAG, `invalid video tag datasize: ${chunk.datasize}`)
          return;
        }
        this.tracks.videoTrack.samples.push(chunk)
        // this.emit(DEMUX_EVENTS.DEMUX_COMPLETE)
      }
    } else {
      this.logger.warn(this.TAG, `video codeid is ${codecID}`)
      chunk.data = this.loaderBuffer.shift(chunk.datasize - 1)
      if (!this._datasizeValidator(chunk.datasize)) {
        this.logger.warn(this.TAG, `invalid video tag datasize: ${chunk.datasize}`)
      }
      this.tracks.videoTrack.samples.push(chunk)
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE)
    }
    delete chunk.tagType
  }

  /**
   * parse avc metadata
   * @param data
   * @private
   */
  _avcSequenceHeaderParser (data) {
    let track = this.tracks.videoTrack

    if (!track) {
      return
    }

    let offset = 0

    if (!track.meta) {
      track.meta = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["VideoTrackMeta"]()
    }
    let meta = track.meta

    meta.configurationVersion = data[0]
    meta.avcProfileIndication = data[1]
    meta.profileCompatibility = data[2]
    meta.avcLevelIndication = data[3] / 10
    meta.nalUnitLength = (data[4] & 0x03) + 1

    let numOfSps = data[5] & 0x1f
    offset = 6
    let config = {}

    // parse SPS
    for (let i = 0; i < numOfSps; i++) {
      let size = data[offset] * 255 + data[offset + 1]
      offset += 2

      let sps = new Uint8Array(size)
      for (let j = 0; j < size; j++) {
        sps[j] = data[offset + j]
      }

      // codec string
      let codecString = 'avc1.'
      for (let j = 1; j < 4; j++) {
        let h = sps[j].toString(16)
        if (h.length < 2) {
          h = '0' + h
        }
        codecString += h
      }

      meta.codec = codecString

      offset += size
      this.tracks.videoTrack.meta.sps = sps
      config = xgplayer_codec__WEBPACK_IMPORTED_MODULE_1__["SpsParser"].parseSPS(sps)
    }

    let numOfPps = data[offset]

    offset++

    for (let i = 0; i < numOfPps; i++) {
      let size = data[offset] * 255 + data[offset + 1]
      offset += 2
      let pps = new Uint8Array(size)
      for (let j = 0; j < size; j++) {
        pps[j] = data[offset + j]
      }
      offset += size
      this.tracks.videoTrack.meta.pps = pps
    }

    Object.assign(meta, xgplayer_codec__WEBPACK_IMPORTED_MODULE_1__["SpsParser"].toVideoMeta(config))

    // fill video media info
    const videoMedia = this._context.mediaInfo.video

    videoMedia.codec = meta.codec
    videoMedia.profile = meta.profile
    videoMedia.level = meta.level
    videoMedia.chromaFormat = meta.chromaFormat
    videoMedia.frameRate = meta.frameRate
    videoMedia.parRatio = meta.parRatio
    videoMedia.width = videoMedia.width === meta.presentWidth ? videoMedia.width : meta.presentWidth
    videoMedia.height = videoMedia.height === meta.presentHeight ? videoMedia.width : meta.presentHeight

    meta.duration = this._context.mediaInfo.duration * meta.timescale
    meta.avcc = new Uint8Array(data.length)
    meta.avcc.set(data)
    track.meta = meta
  }

  /**
   * choose audio sample rate
   * @param samplingFrequencyIndex
   * @returns {number}
   * @private
   */
  _switchAudioSampleRate (samplingFrequencyIndex) {
    let samplingFrequencyList = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350]
    return samplingFrequencyList[samplingFrequencyIndex]
  }

  /**
   * choose audio sampling frequence
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioSamplingFrequency (info) {
    let samplingFrequencyIndex = (info & 12) >>> 2
    let samplingFrequencyList = [5500, 11025, 22050, 44100, 48000]
    return samplingFrequencyList[samplingFrequencyIndex]
  }

  /**
   * choose audio channel count
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioChannel (info) {
    let sampleTrackNumIndex = info & 1
    let sampleTrackNumList = [1, 2]
    return sampleTrackNumList[sampleTrackNumIndex]
  }

  /**
   * check datasize is valid use 4 Byte after current tag
   * @param datasize
   * @returns {boolean}
   * @private
   */
  _datasizeValidator (datasize) {
    let datasizeConfirm = this.loaderBuffer.toInt(0, 4)
    this.loaderBuffer.shift(4)
    return datasizeConfirm === datasize + 11
  }

  get loaderBuffer () {
    if (this._context.getInstance('LOADER_BUFFER')) {
      return this._context.getInstance('LOADER_BUFFER')
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('找不到 loaderBuffer 实例'))
    }
  }

  get tracks () {
    return this._context.getInstance('TRACKS')
  }

  get logger () {
    return this._context.getInstance('LOGGER')
  }
}

/* harmony default export */ __webpack_exports__["default"] = (FlvDemuxer);


/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js":
/*!*******************************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/m3u8parser.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Reference: https://tools.ietf.org/html/rfc8216#section-4.3
 */
class M3U8Parser {
  static parse (text, baseurl = '') {
    let ret = {
      duration: 0
    };
    if (!text || !text.split) {
      return;
    }
    let refs = text.split(/\r|\n/);
    refs = refs.filter((ref) => {
      return ref;
    })
    let ref = refs.shift()
    if (!ref.match('#EXTM3U')) {
      // TODO:M3U格式错误。
      return null;
    }
    ref = refs.shift()
    while (ref) {
      let refm = ref.match(/#(.*):(.*)/);
      if (refm && refm.length > 2) {
        switch (refm[1]) {
          case 'EXT-X-VERSION':
            ret.version = parseInt(refm[2]);
            break;
          case 'EXT-X-MEDIA-SEQUENCE':
            ret.sequence = parseInt(refm[2]);
            break;
          case 'EXT-X-TARGETDURATION':
            ret.targetduration = parseFloat(refm[2]);
            break;
          case 'EXTINF':
            M3U8Parser.parseFrag(refm, refs, ret, baseurl);
            break;
          default:
            break;
        }
      }
      ref = refs.shift()
    }
    return ret;
  }

  static parseFrag (refm, refs, ret, baseurl) {
    if (!ret.frags) {
      ret.frags = []
    }

    let freg = {
      start: ret.duration,
      duration: parseFloat(refm[2]) * 1000
    }

    ret.duration += freg.duration;
    let nextline = refs.shift();
    if (nextline.match(/#(.*):(.*)/)) {
      nextline = refs.shift();
    }
    if (nextline.length > 0 && nextline.charAt(0) === '/' && baseurl.match(/.*\/\/.*\.\w+/g)) {
      baseurl = baseurl.match(/.*\/\/.*\.\w+/g)[0];
    }
    if (nextline.match(/.*:\/\/.*/)) {
      freg.url = nextline;
    } else {
      freg.url = baseurl + nextline;
    }
    
    ret.frags.push(freg);
  }

  static parseURL (url) {
    let baseurl = '';
    let urls = url.match(/(.*\/).*\.m3u8/);
    if (urls && urls.length > 0) {
      for (let i = 0; i < urls.length; i++) {
        if (urls[i].match(/.*\/$/g) && urls[i].length > baseurl.length) {
          baseurl = urls[i];
        }
      }
    }
    return baseurl;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (M3U8Parser);


/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/ts.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/ts.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer_codec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");
/* harmony import */ var xgplayer_codec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_codec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xgplayer_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");
/* harmony import */ var xgplayer_buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xgplayer_buffer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__);




const DEMUX_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].DEMUX_EVENTS;
const StreamType = {
  0x01: ['video', 'MPEG-1'],
  0x02: ['video', 'MPEG-2'],
  0x1b: ['video', 'AVC.H264'],
  0xea: ['video', 'VC-1'],
  0x03: ['audio', 'MPEG-1'],
  0x04: ['audio', 'MPEG-2'],
  0x0f: ['audio', 'MPEG-2.AAC'],
  0x11: ['audio', 'MPEG-4.AAC'],
  0x80: ['audio', 'LPCM'],
  0x81: ['audio', 'AC3'],
  0x06: ['audio', 'AC3'],
  0x82: ['audio', 'DTS'],
  0x83: ['audio', 'Dolby TrueHD'],
  0x84: ['audio', 'AC3-Plus'],
  0x85: ['audio', 'DTS-HD'],
  0x86: ['audio', 'DTS-MA'],
  0xa1: ['audio', 'AC3-Plus-SEC'],
  0xa2: ['audio', 'DTS-HD-SEC']
};

class TsDemuxer {
  constructor (configs) {
    this.configs = Object.assign({}, configs);
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  init () {
    this.on(DEMUX_EVENTS.DEMUX_START, this.demux.bind(this))
  }

  demux () {
    if (this.demuxing) {
      return
    }

    let buffer = this.inputBuffer;
    let frags = { pat: [], pmt: [] };
    let peses = {};

    // Read TS segment
    while (buffer.length >= 188) {
      while (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        buffer.shift(1);
      }
      let buf = buffer.shift(188);
      // console.log(buf);
      let tsStream = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["Stream"](buf.buffer);
      let ts = {};
      TsDemuxer.read(tsStream, ts, frags);
      if (ts.pes) {
        if (!peses[ts.header.pid]) {
          peses[ts.header.pid] = [];
        }
        peses[ts.header.pid].push(ts.pes);
        ts.pes.ES.buffer = [ts.pes.ES.buffer];
      } else if (peses[ts.header.pid]) {
        peses[ts.header.pid][peses[ts.header.pid].length - 1].ES.buffer.push(ts.payload.stream);
      }
    }

    // Get Frames data
    for (let i = 0; i < Object.keys(peses).length; i++) {
      let epeses = peses[Object.keys(peses)[i]];
      for (let j = 0; j < epeses.length; j++) {
        epeses[j].id = Object.keys(peses)[i];
        epeses[j].ES.buffer = TsDemuxer.Merge(epeses[j].ES.buffer);
        if (epeses[j].type === 'audio') {
          this.pushAudioSample(epeses[j]);
        } else if (epeses[j].type === 'video') {
          this.pushVideoSample(epeses[j]);
        }
      }
    }

    if (this._hasAudioMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'audio');
    }
    if (this._hasVideoMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'video');
    }
  }

  pushAudioSample (pes) {
    let track;
    if (!this._tracks.audioTrack) {
      this._tracks.audioTrack = new xgplayer_buffer__WEBPACK_IMPORTED_MODULE_1__["AudioTrack"]();
      track = this._tracks.audioTrack;
      track.meta = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["AudioTrackMeta"]({
        audioSampleRate: pes.ES.frequence,
        sampleRate: pes.ES.frequence,
        channelCount: pes.ES.channel,
        codec: 'mp4a.40.' + pes.ES.audioObjectType,
        config: pes.ES.audioConfig,
        id: 2,
        sampleRateIndex: pes.ES.frequencyIndex
      });
      track.meta.refSampleDuration = Math.floor(1024 / track.meta.audioSampleRate * track.meta.timescale);
      if (!this._hasAudioMeta) {
        this._hasAudioMeta = true
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
      }
    } else {
      track = this._tracks.audioTrack;
    }
    let data = new Uint8Array(pes.ES.buffer.buffer.slice(pes.ES.buffer.position, pes.ES.buffer.length));
    let dts = parseInt(pes.pts / 90);
    let pts = parseInt(pes.pts / 90);
    let sample = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["AudioTrackSample"]({dts, pts, data});
    track.samples.push(sample);
  }

  pushVideoSample (pes) {
    let nals = xgplayer_codec__WEBPACK_IMPORTED_MODULE_0__["Nalunit"].getNalunits(pes.ES.buffer);
    let track;
    if (!this._tracks.videoTrack) {
      this._tracks.videoTrack = new xgplayer_buffer__WEBPACK_IMPORTED_MODULE_1__["VideoTrack"]();
      track = this._tracks.videoTrack;
      track.meta = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["VideoTrackMeta"]();
    } else {
      track = this._tracks.videoTrack;
    }
    let sampleLength = 0;
    let sps = false;
    let pps = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      if (nal.sps) {
        // TODO：VideoTrack信息 和 Meta 信息
        if (track.sps && TsDemuxer.compaireUint8(nal.body, track.sps)) {
          continue;
        }

        sps = nal;
        track.sps = nal.body;
        track.meta.chromaFormat = sps.sps.chroma_format
        track.meta.codec = 'avc1.';
        for (var j = 1; j < 4; j++) {
          var h = sps.body[j].toString(16);
          if (h.length < 2) {
            h = '0' + h;
          }
          track.meta.codec += h;
        }
        track.meta.codecHeight = sps.sps.codec_size.height;
        track.meta.codecWidth = sps.sps.codec_size.width;
        track.meta.frameRate = sps.sps.frame_rate;
        track.meta.id = 1;
        track.meta.level = sps.sps.level_string;
        track.meta.presentHeight = sps.sps.present_size.height;
        track.meta.presentWidth = sps.sps.present_size.width;
        track.meta.profile = sps.sps.profile_string;
        track.meta.refSampleDuration = Math.floor(track.meta.timescale * (sps.sps.frame_rate.fps_den / sps.sps.frame_rate.fps_num));
        track.meta.sarRatio = sps.sps.sar_ratio ? sps.sps.sar_ratio : sps.sps.par_ratio;
      } else if (nal.pps) {
        track.pps = nal.body;
        pps = nal;
      } else {
        sampleLength += (4 + nal.body.byteLength);
      }
    }

    if (sps && pps) {
      track.meta.avcc = xgplayer_codec__WEBPACK_IMPORTED_MODULE_0__["Nalunit"].getAvcc(sps.body, pps.body);
      if (!this._hasVideoMeta) {
        this._hasVideoMeta = true
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
      }
    }

    let data = new Uint8Array(sampleLength);
    let offset = 0;
    let isKeyframe = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      let length = nal.body.byteLength;
      if (nal.idr) {
        isKeyframe = true;
      }
      if (!nal.pps && !nal.sps) {
        data.set(new Uint8Array([length >>> 24 & 0xff,
          length >>> 16 & 0xff,
          length >>> 8 & 0xff,
          length & 0xff
        ]), offset);
        offset += 4;
        data.set(nal.body, offset);
        offset += length;
      }
    }
    let sample = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["VideoTrackSample"]({
      dts: parseInt(pes.dts / 90),
      pts: parseInt(pes.pts / 90),
      cts: (pes.pts - pes.dts) / 90,
      originDts: pes.dts,
      isKeyframe,
      data
    })
    track.samples.push(sample);
  }

  destory () {
    this.off(DEMUX_EVENTS.DEMUX_START, this.demux);
    this.configs = {};
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  static compaireUint8 (a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    let ret = true;
    for (let i = 0; i < a.byteLength; i++) {
      if (a[i] !== b[i]) {
        ret = false;
      }
    }
    return ret;
  }
  static Merge (buffers) {
    let data;
    let length = 0;
    let offset = 0;
    for (let i = 0; i < buffers.length; i++) {
      length += (buffers[i].length - buffers[i].position);
    }

    data = new Uint8Array(length);
    for (let i = 0; i < buffers.length; i++) {
      let buffer = buffers[i];
      data.set(new Uint8Array(buffer.buffer, buffer.position), offset);
      offset += buffer.length - buffer.position;
    }
    return new xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["Stream"](data.buffer);
  }

  static read (stream, ts, frags) {
    TsDemuxer.readHeader(stream, ts);
    TsDemuxer.readPayload(stream, ts, frags);
    if (ts.header.packet === 'MEDIA' && ts.header.payload === 1 && !ts.unknownPIDs) {
      ts.pes = TsDemuxer.PES(ts);
    }
  }

  static readPayload (stream, ts, frags) {
    let header = ts.header
    let pid = header.pid;
    switch (pid) {
      case 0:
        TsDemuxer.PAT(stream, ts, frags);
        break;
      case 1:
        TsDemuxer.CAT(stream, ts, frags);
        break;
      case 2:
        TsDemuxer.TSDT(stream, ts, frags);
        break;
      case 0x1fff:
        break;
      default:
        // TODO: some的写法不太好，得改
        if (frags.pat.some((item) => { return item.pid === pid; })) {
          TsDemuxer.PMT(stream, ts, frags);
        } else {
          let sts = frags.pmt ? frags.pmt.filter((item) => item.pid === pid) : [];
          if (sts.length > 0) {
            TsDemuxer.Media(stream, ts, StreamType[sts[0].streamType][0])
          } else {
            ts.unknownPIDs = true;
          };
        }
    }
  }

  static readHeader (stream, ts) {
    let header = {};
    header.sync = stream.readUint8();
    let next = stream.readUint16();
    header.error = next >>> 15;
    header.payload = next >>> 14 & 1;
    header.priority = next >>> 13 & 1;
    header.pid = next & 0x1fff;

    next = stream.readUint8();

    header.scrambling = next >> 6 & 0x3; // 是否加密，00表示不加密

    /**
     * 00 ISO/IEC未来使用保留
     * 01 没有调整字段，仅含有184B有效净荷
     * 02 没有有效净荷，仅含有183B调整字段
     * 03 0~182B调整字段后为有效净荷
     */
    header.adaptation = next >> 4 & 0x3;
    header.continuity = next & 15;
    header.packet = header.pid === 0 ? 'PAT' : 'MEDIA';
    ts.header = header;
  }

  static PAT (stream, ts, frags) {
    let ret = {};
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tabelID = next;
    next = stream.readUint16();
    ret.error = next >>> 7;
    ret.zero = next >>> 6 & 1;
    ret.sectionLength = next & 0xfff;
    ret.streamID = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (ret.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      let programNumber = stream.readUint16();
      let pid = stream.readUint16() & 0x1fff;
      list.push({
        program: programNumber,
        pid,
        type: programNumber === 0 ? 'network' : 'mapPID'
      });
    }
    if (list.length > 0) {
      frags.pat = frags.pat.concat(list);
    }
    ret.list = list;
    ret.program = stream.readUint16();
    ret.pid = stream.readUint16() & 0x1fff;
    ts.payload = ret;
    // TODO CRC
  }

  static PMT (stream, ts, frags) {
    let ret = {};
    let header = ts.header;
    header.packet = 'PMT';
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tableID = next;
    next = stream.readUint16();
    ret.sectionLength = next & 0xfff;
    ret.program = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.order = stream.readUint8();
    ret.lastOrder = stream.readUint8();
    ret.PCR_PID = stream.readUint16() & 0x1fff;
    ret.programLength = stream.readUint16() & 0xfff;
    let N = (ret.sectionLength - 13) / 5;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({
        streamType: stream.readUint8(),
        pid: stream.readUint16() & 0x1fff, // 0x07e5 视频，0x07e6
        es: stream.readUint16() & 0xfff
      });
    }
    ret.list = list;
    if (!this.pmt) {
      this.pmt = [];
    }
    frags.pmt = this.pmt.concat(list.map((item) => {
      return {
        pid: item.pid,
        es: item.es,
        streamType: item.streamType,
        program: ret.program
      };
    }));
    ts.payload = ret;
  }

  static Media (stream, ts, type) {
    let header = ts.header;
    let payload = {};
    header.type = type;
    if (header.adaptation === 0x03) {
      payload.adaptationLength = stream.readUint8();
      if (payload.adaptationLength > 0) {
        let next = stream.readUint8();
        payload.discontinue = next >>> 7;
        payload.access = next >>> 6 & 0x01;
        payload.priority = next >>> 5 & 0x01;
        payload.PCR = next >>> 4 & 0x01;
        payload.OPCR = next >>> 3 & 0x01;
        payload.splicePoint = next >>> 2 & 0x01;
        payload.transportPrivate = next >>> 1 & 0x01;
        payload.adaptationField = next & 0x01;
        let _start = stream.position;
        if (payload.PCR === 1) {
          payload.programClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.programClockBase |= next >>> 15;
          payload.programClockExtension = next & 0x1ff;
        }
        if (payload.OPCR === 1) {
          payload.originProgramClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.originProgramClockBase += next >>> 15;
          payload.originProgramClockExtension = next & 0x1ff;
        }
        if (payload.splicePoint === 1) {
          payload.spliceCountdown = stream.readUint8();
        }
        if (payload.transportPrivate === 1) {
          let length = stream.readUint8();
          let transportPrivateData = [];
          for (let i = 0; i < length; i++) {
            transportPrivateData.push(stream.readUint8());
          }
        }
        if (payload.adaptationField === 1) {
          let length = stream.readUint8()
          let next = stream.readUint8()
          let start = stream.position;
          let ltw = next >>> 7;
          let piecewise = next >>> 6 & 0x1;
          let seamless = next >>> 5 & 0x1;
          if (ltw === 1) {
            next = stream.readUint16();
            payload.ltwValid = next >>> 15;
            payload.ltwOffset = next & 0xefff;
          }
          if (piecewise === 1) {
            next = stream.readUint24();
            payload.piecewiseRate = next & 0x3fffff;
          }
          if (seamless === 1) {
            next = stream.readInt8();
            payload.spliceType = next >>> 4;
            payload.dtsNextAU1 = next >>> 1 & 0x7;
            payload.marker1 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU2 = next >>> 1;
            payload.marker2 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU3 = next;
          }
          stream.skip(length - 1 - (stream.position - start));
        }
        let lastStuffing = payload.adaptationLength - 1 - (stream.position - _start);
        stream.skip(lastStuffing);
      }
    }
    payload.stream = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_2__["Stream"](stream.buffer.slice(stream.position));
    ts.payload = payload;
  }

  static PES (ts) {
    let ret = {};
    let buffer = ts.payload.stream;
    
    let next = buffer.readUint24();
    if (next !== 1) {
      ret.ES = {};
      ret.ES.buffer = buffer;
    } else {
      let streamID = buffer.readUint8();
      if (streamID >= 0xe0 && streamID <= 0xef) {
        ret.type = 'video';
      }
      if (streamID >= 0xc0 && streamID <= 0xdf) {
        ret.type = 'audio';
      }
      let packetLength = buffer.readUint16();
      ret.packetLength = packetLength;
      if (ret.type === 'video' || ret.type === 'audio') {
        let next = buffer.readUint8();
        let first = next >>> 6;
        if (first !== 0x02) {
          throw new Error('error when parse pes header');
        }
        next = buffer.readUint8();
        ret.ptsDTSFlag = next >>> 6;
        ret.escrFlag = next >>> 5 & 0x01;
        ret.esRateFlag = next >>> 4 & 0x01;
        ret.dsmFlag = next >>> 3 & 0x01;
        ret.additionalFlag = next >>> 2 & 0x01;
        ret.crcFlag = next >>> 1 & 0x01;
        ret.extensionFlag = next & 0x01;
        ret.pesHeaderLength = buffer.readUint8();
        let N1 = ret.pesHeaderLength;

        if (ret.ptsDTSFlag === 2) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = (pts[0] << 30 | pts[1] << 15 | pts[2]);
          N1 -= 5;
          // 视频如果没有dts用pts
          if (ret.type === 'video') {
            ret.dts = ret.pts;
          }
        }
        if (ret.ptsDTSFlag === 3) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = (pts[0] << 30 | pts[1] << 15 | pts[2]);
          let dts = [];
          next = buffer.readUint8();
          dts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          ret.dts = (dts[0] << 30 | dts[1] << 15 | dts[2]);
          N1 -= 10;
        }
        if (ret.escrFlag === 1) {
          let escr = []
          let ex = [];
          next = buffer.readUint8();
          escr.push(next >>> 3 & 0x07);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          ex.push(next & 0x03);
          next = buffer.readUint8();
          ex.push(next >>> 1);
          ret.escr = (escr[0] << 30 | escr[1] << 28 | escr[2] << 15 | escr[3] << 13 | escr[4]) * 300 + (ex[0] << 7 | ex[1]);
          N1 -= 6;
        }
        if (ret.esRateFlag === 1) {
          next = buffer.readUint24();
          ret.esRate = next >>> 1 & 0x3fffff;
          N1 -= 3;
        }
        if (ret.dsmFlag === 1) {
          throw new Error('not support DSM_trick_mode');
        }
        if (ret.additionalFlag === 1) {
          next = buffer.readUint8();
          ret.additionalCopyInfo = next & 0x7f;
          N1 -= 1;
        }
        if (ret.crcFlag === 1) {
          ret.pesCRC = buffer.readUint16();
          N1 -= 2;
        }
        if (ret.extensionFlag === 1) {
          throw new Error('not support extension');
        }
        if (N1 > 0) {
          buffer.skip(N1);
        }
        ret.ES = TsDemuxer.ES(buffer, ret.type);
      } else {
        throw new Error('format is not supported');
      }
    }
    return ret;
  }

  static ES (buffer, type) {
    let next;
    let ret = {};
    if (type === 'video') {
      next = buffer.readUint32();
      if (next !== 1) {
        buffer.back(4);
        next = buffer.readUint24();
        if (next !== 1) {
          throw new Error('h264 nal header parse failed');
        }
      }
      buffer.skip(2);// 09 F0
      // TODO readnalu
      ret.buffer = buffer;
    } else if (type === 'audio') {
      next = buffer.readUint16();
      // adts的同步字节，12位
      if (next >>> 4 !== 0xfff) {
        throw new Error('aac ES parse Error');
      }
      const fq = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
      ret.id = (next >>> 3 & 0x01) === 0 ? 'MPEG-4' : 'MPEG-2';
      ret.layer = next >>> 1 & 0x03;
      ret.absent = next & 0x01;
      next = buffer.readUint16();
      ret.audioObjectType = (next >>> 14 & 0x03) + 1;
      ret.profile = ret.audioObjectType - 1;
      ret.frequencyIndex = next >>> 10 & 0x0f;
      ret.frequence = fq[ret.frequencyIndex];
      ret.channel = next >>> 6 & 0x07;
      ret.frameLength = (next & 0x03) << 11 | (buffer.readUint16() >>> 5);
      ret.audioConfig = TsDemuxer.getAudioConfig(ret.audioObjectType, ret.channel, ret.frequencyIndex);
      buffer.skip(1);
      ret.buffer = buffer;
    } else {
      throw new Error(`ES ${type} is not supported`);
    }

    return ret;
  }

  static TSDT (stream, ts, frags) {
    // TODO
    ts.payload = {};
  }

  static CAT (stream, ts, frags) {
    let ret = {}
    ret.tableID = stream.readUint8();
    let next = stream.readUint16();
    ret.sectionIndicator = next >>> 7;
    ret.sectionLength = next & 0x0fff;
    stream.skip(2);
    next = stream.readUint8();
    ret.version = next >>> 3;
    ret.currentNextIndicator = next & 0x01;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (this.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({});
    }
    ret.crc32 = stream.readUint32();
    ts.payload = ret;
  }

  static getAudioConfig (audioObjectType, channel, sampleIndex) {
    let userAgent = navigator.userAgent.toLowerCase()
    let config;
    let extensionSampleIndex;
    if (/firefox/i.test(userAgent)) {
      if (sampleIndex >= 6) {
        audioObjectType = 5;
        config = new Array(4);
        extensionSampleIndex = sampleIndex - 3;
      } else {
        audioObjectType = 2;
        config = new Array(2);
        extensionSampleIndex = sampleIndex;
      }
    } else if (userAgent.indexOf('android') !== -1) {
      audioObjectType = 2;
      config = new Array(2);
      extensionSampleIndex = sampleIndex;
    } else {
      audioObjectType = 5;
      config = new Array(4);
      if (sampleIndex >= 6) {
        extensionSampleIndex = sampleIndex - 3;
      } else {
        if (channel === 1) {
          audioObjectType = 2;
          config = new Array(2);
        }
        extensionSampleIndex = sampleIndex;
      }
    }

    config[0] = audioObjectType << 3;
    config[0] |= (sampleIndex & 0x0e) >> 1;
    config[1] = (sampleIndex & 0x01) << 7;
    config[1] |= channel << 3;
    if (audioObjectType === 5) {
      config[1] |= (extensionSampleIndex & 0x0e) >> 1;
      config[2] = (extensionSampleIndex & 0x01) << 7;
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    return config;
  }

  get inputBuffer () {
    return this._context.getInstance(this.configs.inputbuffer);
  }

  get _tracks () {
    return this._context.getInstance('TRACKS');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TsDemuxer);


/***/ }),

/***/ "../xgplayer-demux/src/hls/playlist.js":
/*!*********************************************!*\
  !*** ../xgplayer-demux/src/hls/playlist.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Playlist {
  constructor (configs) {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = configs.autoclear || false;
  }

  get list () {
    return this._list;
  }

  set baseURL (baseURL) {
    if (this.baseURL !== baseURL) {
      this.clear();
      this._baseURL = baseURL;
    }
  }

  get baseURL () {
    return this._baseURL;
  }

  push (ts, duration) {
    if (!this._ts[ts]) {
      this._ts[ts] = {duration: duration, downloaded: false, downloading: false, start: this.duration};
      this._list[this.duration] = ts;
      this.duration += duration;
      this.fragLength += 1;
    }
  }

  deleteFrag (url) {
    if (this._ts[url]) {
      if (this._ts[url].start > this._lastget.time) {
        this._lastget = {
          duration: this._ts[url].duration,
          time: this._ts[url].start,
          downloaded: false,
          downloading: false,
          url: url
        }
      }
      delete this._list[this._ts[url].start];
      delete this._ts[url];
      this.fragLength -= 1;
    }
  }

  pushM3U8 (data, deletepre) {
    // 常规信息替换
    if (!data) {
      return;
    }
    this.version = data.version;
    this.targetduration = data.targetduration;

    // 新分片信息
    if (data.sequence > this.sequence) {
      this.sequence = data.sequence;
      let newfraglist = []
      for (let i = 0; i < data.frags.length; i++) {
        let frag = data.frags[i];
        if (!this._ts[frag.url]) {
          newfraglist.push(frag.url)
          this.push(frag.url, frag.duration);
        }
      }
      if (deletepre) {
        let tslist = this.getTsList();
        for (let i = 0; i < tslist.length; i++) {
          if (newfraglist.indexOf(tslist[i]) < 0) {
            this.deleteFrag(tslist[i]);
          }
        }
      }
    }
  }

  getTsList () {
    return Object.keys(this._ts);
  }

  downloaded (tsname, isloaded) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloaded = isloaded
    }
  }

  downloading (tsname, loading) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloading = loading
    }
  }

  getTsByName (name) {
    return this._ts[name];
  }

  getTs (time) {
    let timelist = Object.keys(this._list);
    let ts;

    if (time === undefined) {
      if (this._lastget) {
        time = this._lastget.time + this._lastget.duration;
      } else {
        time = 0;
      }
    }

    if (timelist.length < 1 || time >= this.duration) {
      return undefined;
    }
    timelist.sort((a, b) => {
      return parseFloat(a) - parseFloat(b)
    });
    for (let i = 0; i < timelist.length; i++) {
      if (time >= parseInt(timelist[i])) {
        let url = this._list[timelist[i]];
        let downloaded = this._ts[url].downloaded;
        let downloading = this._ts[url].downloading;
        ts = {url, downloaded, downloading, time: parseInt(timelist[i]), duration: parseInt(this._ts[url].duration)};
        if (this.autoclear) {
          delete this._ts[this._lastget.url];
          delete this._list[this._lastget.time];
        }
        this._lastget = ts;
      } else {
        break;
      }
    }
    return ts;
  }

  clear () {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
  }

  clearDownloaded () {
    for (let i = 0, l = Object.keys(this._ts).length; i < l; i++) {
      let ts = this._ts[Object.keys(this._ts)[i]];
      ts.downloaded = false;
      ts.downloading = false;
    }
  }

  destroy () {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Playlist);


/***/ }),

/***/ "../xgplayer-loader/index.js":
/*!***********************************!*\
  !*** ../xgplayer-loader/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  FetchLoader: __webpack_require__(/*! ./src/fetch-loader */ "../xgplayer-loader/src/fetch-loader.js").default
};


/***/ }),

/***/ "../xgplayer-loader/src/fetch-loader.js":
/*!**********************************************!*\
  !*** ../xgplayer-loader/src/fetch-loader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__);


const LOADER_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].LOADER_EVENTS;
const READ_STREAM = 0;
const READ_TEXT = 1;
const READ_JSON = 2;
const READ_BUFFER = 3;
class FetchLoader {
  constructor (configs) {
    this.configs = Object.assign({}, configs);
    this.url = null
    this.status = 0
    this.error = null
    this._reader = null;
    this._canceled = false;
    this.readtype = this.configs.readtype;
    this.buffer = this.configs.buffer || 'LOADER_BUFFER';
    this._loaderTaskNo = 0;
  }

  init () {
    this.on(LOADER_EVENTS.LADER_START, this.load.bind(this))
  }

  static get type () {
    return 'loader'
  }

  load (url, opts) {
    let _this = this;
    this.url = url;
    this._canceled = false;

    // TODO: Add Ranges
    let params = this.getParams(opts)
    _this.loading = true
    return fetch(this.url, params).then(function (response) {
      if (response.ok) {
        _this.status = response.status
        return _this._onFetchResponse(response);
      }
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this, response);
      _this.loading = false;
    }).catch(function (error)  {
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this, error);
      _this.loading = false;
      throw new Error(error.message)
    })
  }

  _onFetchResponse (response) {
    let _this = this;
    let buffer = this._context.getInstance(this.buffer);
    this._loaderTaskNo++;
    let taskno = this._loaderTaskNo;
    if (response.ok === true) {
      switch (this.readtype) {
        case READ_JSON:
          response.json().then((data) => {
            _this.loading = false
            if (!_this._canceled) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_TEXT:
          response.text().then((data) => {
            _this.loading = false
            if (!_this._canceled) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_BUFFER:
          response.arrayBuffer().then((data) => {
            _this.loading = false
            if (!_this._canceled) {
              if (buffer) {
                buffer.push(new Uint8Array(data));
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_STREAM:
        default:
          return this._onReader(response.body.getReader(), taskno);
      }
    }
  }

  _onReader (reader, taskno) {
    let buffer = this._context.getInstance(this.buffer);

    if (!buffer) {
      this._reader.cancel();
    }

    this._reader = reader
    if (this.loading === false) {
      return
    }

    let _this = this
    // reader read function returns a Promise. get data when callback and has value.done when disconnected.
    // read方法返回一个Promise. 回调中可以获取到数据。当value.done存在时，说明链接断开。
    this._reader && this._reader.read().then(function (val) {
      if (val.done) {
        // TODO: 完成处理
        _this.loading = false
        _this.status = 0;
        _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer)
        return
      }

      if (_this._canceled) {
        _this._reader.cancel()
        return;
      }
      buffer.push(val.value)
      _this.emit(LOADER_EVENTS.LOADER_DATALOADED, buffer)
      return _this._onReader(reader, taskno)
    }).catch((error) => {
      console.error(error);
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this, error);
      _this.loading = false;
    })
  }

  getParams (opts) {
    let options = Object.assign({}, opts)
    let headers = new Headers()

    let params = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'
    }

    // add custmor headers
    // 添加自定义头
    if (typeof this.configs.headers === 'object') {
      let configHeaders = this.configs.headers
      for (let key in configHeaders) {
        if (configHeaders.hasOwnProperty(key)) {
          headers.append(key, configHeaders[key])
        }
      }
    }

    if (typeof options.headers === 'object') {
      let optHeaders = options.headers
      for (let key in optHeaders) {
        if (optHeaders.hasOwnProperty(key)) {
          headers.append(key, optHeaders[key])
        }
      }
    }

    if (options.cors === false) {
      params.mode = 'same-origin'
    }

    // withCredentials is disabled by default
    // withCredentials 在默认情况下不被使用。
    if (options.withCredentials) {
      params.credentials = 'include'
    }

    // TODO: Add ranges;
    return params;
  }

  cancel () {
    if (this._reader) {
      this._reader.cancel()
      this._reader = null
      this.loading = false
      this._canceled = true;
    }
  }

  destroy () {
    this.cancel();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (FetchLoader);


/***/ }),

/***/ "../xgplayer-remux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-remux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Mp4Remuxer: __webpack_require__(/*! ./src/mp4 */ "../xgplayer-remux/src/mp4/index.js").default
};


/***/ }),

/***/ "../xgplayer-remux/src/mp4/fmp4.js":
/*!*****************************************!*\
  !*** ../xgplayer-remux/src/mp4/fmp4.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__);


// const UINT32_MAX = Math.pow(2, 32) - 1;
class Fmp4 {
  static size (value) {
    return xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"].writeUint32(value)
  }
  static initBox (size, name, ...content) {
    const buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    buffer.write(Fmp4.size(size), Fmp4.type(name), ...content)
    return buffer.buffer
  }
  static extension (version, flag) {
    return new Uint8Array([
      version,
      (flag >> 16) & 0xff,
      (flag >> 8) & 0xff,
      flag & 0xff
    ])
  }
  static ftyp () {
    return Fmp4.initBox(24, 'ftyp', new Uint8Array([
      0x69, 0x73, 0x6F, 0x6D, // isom,
      0x0, 0x0, 0x00, 0x01, // minor_version: 0x01
      0x69, 0x73, 0x6F, 0x6D, // isom
      0x61, 0x76, 0x63, 0x31 // avc1
    ]))
  }
  static moov ({ type, meta }) {
    let size = 8
    let mvhd = Fmp4.mvhd(meta.duration, meta.timescale)
    let trak

    if (type === 'video') {
      trak = Fmp4.videoTrak(meta)
    } else {
      trak = Fmp4.audioTrak(meta)
    }

    let mvex = Fmp4.mvex(meta.duration, meta.timescale || 1000, meta.id);
    [mvhd, trak, mvex].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'moov', mvhd, trak, mvex)
  }
  static mvhd (duration, timescale = 1000) {
    // duration *= timescale;
    let bytes = new Uint8Array([
      0x00, 0x00, 0x00, 0x00, // version(0) + flags     1位的box版本+3位flags   box版本，0或1，一般为0。（以下字节数均按version=0）
      0x00, 0x00, 0x00, 0x00, // creation_time    创建时间  （相对于UTC时间1904-01-01零点的秒数）
      0x00, 0x00, 0x00, 0x00, // modification_time   修改时间

      /**
             * timescale: 4 bytes文件媒体在1秒时间内的刻度值，可以理解为1秒长度
             */
      (timescale >>> 24) & 0xFF,
      (timescale >>> 16) & 0xFF,
      (timescale >>> 8) & 0xFF,
      (timescale) & 0xFF,

      /**
             * duration: 4 bytes该track的时间长度，用duration和time scale值可以计算track时长，比如audio track的time scale = 8000,
             * duration = 560128，时长为70.016，video track的time scale = 600, duration = 42000，时长为70
             */
      (duration >>> 24) & 0xFF,
      (duration >>> 16) & 0xFF,
      (duration >>> 8) & 0xFF,
      (duration) & 0xFF,
      0x00, 0x01, 0x00, 0x00, // Preferred rate: 1.0   推荐播放速率，高16位和低16位分别为小数点整数部分和小数部分，即[16.16] 格式，该值为1.0（0x00010000）表示正常前向播放
      /**
             * PreferredVolume(1.0, 2bytes) + reserved(2bytes)
             * 与rate类似，[8.8] 格式，1.0（0x0100）表示最大音量
             */
      0x01, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, //  reserved: 4 + 4 bytes保留位
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, // 视频变换矩阵   线性代数
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
      0x00, 0x00, 0x00, 0x00, // ----begin pre_defined 6 * 4 bytes----
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, // pre-defined 保留位
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, // ----end pre_defined 6 * 4 bytes----
      0xFF, 0xFF, 0xFF, 0xFF // next_track_ID 下一个track使用的id号
    ])
    return Fmp4.initBox(8 + bytes.length, 'mvhd', new Uint8Array(bytes))
  }
  static videoTrak (data) {
    let size = 8

    let tkhd = Fmp4.tkhd({
      id: 1,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: data.presentWidth,
      height: data.presentHeight,
      type: 'video'
    })
    let mdia = Fmp4.mdia({
      type: 'video',
      timescale: data.timescale || 1000,
      duration: data.duration,
      avcc: data.avcc,
      parRatio: data.parRatio,
      width: data.presentWidth,
      height: data.presentHeight
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'trak', tkhd, mdia)
  }
  static audioTrak (data) {
    let size = 8
    let tkhd = Fmp4.tkhd({
      id: 2,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: 0,
      height: 0,
      type: 'audio'
    })
    let mdia = Fmp4.mdia({
      type: 'audio',
      timescale: data.timescale || 1000,
      duration: data.duration,
      channelCount: data.channelCount,
      samplerate: data.sampleRate,
      config: data.config
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'trak', tkhd, mdia)
  }
  static tkhd (data) {
    let id = data.id
    let duration = data.duration
    let width = data.width
    let height = data.height
    let content = new Uint8Array([
      0x00, 0x00, 0x00, 0x07, // version(0) + flags 1位版本 box版本，0或1，一般为0。（以下字节数均按version=0）按位或操作结果值，预定义如下：
      // 0x000001 track_enabled，否则该track不被播放；
      // 0x000002 track_in_movie，表示该track在播放中被引用；
      // 0x000004 track_in_preview，表示该track在预览时被引用。
      // 一般该值为7，1+2+4 如果一个媒体所有track均未设置track_in_movie和track_in_preview，将被理解为所有track均设置了这两项；对于hint track，该值为0
      // hint track 这个特殊的track并不包含媒体数据，而是包含了一些将其他数据track打包成流媒体的指示信息。
      0x00, 0x00, 0x00, 0x00, // creation_time创建时间（相对于UTC时间1904-01-01零点的秒数）
      0x00, 0x00, 0x00, 0x00, // modification time 修改时间
      (id >>> 24) & 0xFF, // track_ID: 4 bytes id号，不能重复且不能为0
      (id >>> 16) & 0xFF,
      (id >>> 8) & 0xFF,
      (id) & 0xFF,
      0x00, 0x00, 0x00, 0x00, // reserved: 4 bytes    保留位
      (duration >>> 24) & 0xFF, // duration: 4 bytes track的时间长度
      (duration >>> 16) & 0xFF,
      (duration >>> 8) & 0xFF,
      (duration) & 0xFF,
      0x00, 0x00, 0x00, 0x00, // reserved: 2 * 4 bytes    保留位
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, // layer(2bytes) + alternate_group(2bytes)  视频层，默认为0，值小的在上层.track分组信息，默认为0表示该track未与其他track有群组关系
      0x00, 0x00, 0x00, 0x00, // volume(2bytes) + reserved(2bytes)    [8.8] 格式，如果为音频track，1.0（0x0100）表示最大音量；否则为0   +保留位
      0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x00, 0x00, // 视频变换矩阵
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
      (width >>> 8) & 0xFF, // //宽度
      (width) & 0xFF,
      0x00, 0x00,
      (height >>> 8) & 0xFF, // 高度
      (height) & 0xFF,
      0x00, 0x00
    ])
    return Fmp4.initBox(8 + content.byteLength, 'tkhd', content)
  }
  static edts (data) {
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let duration = data.duration
    let mediaTime = data.mediaTime
    buffer.write(Fmp4.size(36), Fmp4.type('edts'))
    // elst
    buffer.write(Fmp4.size(28), Fmp4.type('elst'))
    buffer.write(new Uint8Array([
      0x00, 0x00, 0x00, 0x01, // entry count
      (duration >> 24) & 0xff, (duration >> 16) & 0xff, (duration >> 8) & 0xff, duration & 0xff,
      (mediaTime >> 24) & 0xff, (mediaTime >> 16) & 0xff, (mediaTime >> 8) & 0xff, mediaTime & 0xff,
      0x00, 0x00, 0x00, 0x01 // media rate
    ]))
    return buffer.buffer
  }
  static mdia (data) {
    let size = 8
    let mdhd = Fmp4.mdhd(data.timescale, data.duration)
    let hdlr = Fmp4.hdlr(data.type)
    let minf = Fmp4.minf(data);
    [mdhd, hdlr, minf].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'mdia', mdhd, hdlr, minf)
  }
  static mdhd (timescale = 1000, duration) {
    let content = new Uint8Array([
      0x00, 0x00, 0x00, 0x00, // creation_time    创建时间
      0x00, 0x00, 0x00, 0x00, // modification_time修改时间
      (timescale >>> 24) & 0xFF, // timescale: 4 bytes    文件媒体在1秒时间内的刻度值，可以理解为1秒长度
      (timescale >>> 16) & 0xFF,
      (timescale >>> 8) & 0xFF,
      (timescale) & 0xFF,
      (duration >>> 24) & 0xFF, // duration: 4 bytes  track的时间长度
      (duration >>> 16) & 0xFF,
      (duration >>> 8) & 0xFF,
      (duration) & 0xFF,
      0x55, 0xC4, // language: und (undetermined) 媒体语言码。最高位为0，后面15位为3个字符（见ISO 639-2/T标准中定义）
      0x00, 0x00 // pre_defined = 0
    ])
    return Fmp4.initBox(12 + content.byteLength, 'mdhd', Fmp4.extension(0, 0), content)
  }
  static hdlr (type) {
    let value = [0x00, // version 0
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00, // pre_defined
      0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
      0x00, 0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, 0x00, // reserved
      0x56, 0x69, 0x64, 0x65,
      0x6f, 0x48, 0x61, 0x6e,
      0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
    ]
    if (type === 'audio') {
      value.splice(8, 4, ...[0x73, 0x6f, 0x75, 0x6e])
      value.splice(24, 13, ...[0x53, 0x6f, 0x75, 0x6e,
        0x64, 0x48, 0x61, 0x6e,
        0x64, 0x6c, 0x65, 0x72, 0x00])
    }
    return Fmp4.initBox(8 + value.length, 'hdlr', new Uint8Array(value))
  }
  static minf (data) {
    let size = 8
    let vmhd = data.type === 'video' ? Fmp4.vmhd() : Fmp4.smhd()
    let dinf = Fmp4.dinf()
    let stbl = Fmp4.stbl(data);
    [vmhd, dinf, stbl].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'minf', vmhd, dinf, stbl)
  }
  static vmhd () {
    return Fmp4.initBox(20, 'vmhd', new Uint8Array([
      0x00, // version
      0x00, 0x00, 0x01, // flags
      0x00, 0x00, // graphicsmode
      0x00, 0x00,
      0x00, 0x00,
      0x00, 0x00 // opcolor
    ]))
  }
  static smhd () {
    return Fmp4.initBox(16, 'smhd', new Uint8Array([
      0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, // balance
      0x00, 0x00 // reserved
    ]))
  }
  static dinf () {
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let dref = [0x00, // version 0
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x01, // entry_count
      0x00, 0x00, 0x00, 0x0c, // entry_size
      0x75, 0x72, 0x6c, 0x20, // 'url' type
      0x00, // version 0
      0x00, 0x00, 0x01 // entry_flags
    ]
    buffer.write(Fmp4.size(36), Fmp4.type('dinf'), Fmp4.size(28), Fmp4.type('dref'), new Uint8Array(dref))
    return buffer.buffer
  }
  static stbl (data) {
    let size = 8
    let stsd = Fmp4.stsd(data)
    let stts = Fmp4.stts()
    let stsc = Fmp4.stsc()
    let stsz = Fmp4.stsz()
    let stco = Fmp4.stco();
    [stsd, stts, stsc, stsz, stco].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'stbl', stsd, stts, stsc, stsz, stco)
  }
  static stsd (data) {
    let content
    if (data.type === 'audio') {
      // if (!data.isAAC && data.codec === 'mp4') {
      //     content = FMP4.mp3(data);
      // } else {
      //
      // }
      // 支持mp4a
      content = Fmp4.mp4a(data)
    } else {
      content = Fmp4.avc1(data)
    }
    return Fmp4.initBox(16 + content.byteLength, 'stsd', Fmp4.extension(0, 0), new Uint8Array([0x00, 0x00, 0x00, 0x01]), content)
  }
  static mp4a (data) {
    let content = new Uint8Array([
      0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, // reserved
      0x00, 0x01, // data_reference_index
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, // reserved
      0x00, data.channelCount, // channelcount
      0x00, 0x10, // sampleSize:16bits
      0x00, 0x00, 0x00, 0x00, // reserved2
      (data.samplerate >> 8) & 0xff,
      data.samplerate & 0xff, //
      0x00, 0x00
    ])
    let esds = Fmp4.esds(data.config)
    return Fmp4.initBox(8 + content.byteLength + esds.byteLength, 'mp4a', content, esds)
  }
  static esds (config = [43, 146, 8, 0]) {
    const configlen = config.length
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let content = new Uint8Array([
      0x00, // version 0
      0x00, 0x00, 0x00, // flags

      0x03, // descriptor_type
      0x17 + configlen, // length
      0x00, 0x01, // es_id
      0x00, // stream_priority

      0x04, // descriptor_type
      0x0f + configlen, // length
      0x40, // codec : mpeg4_audio
      0x15, // stream_type
      0x00, 0x00, 0x00, // buffer_size
      0x00, 0x00, 0x00, 0x00, // maxBitrate
      0x00, 0x00, 0x00, 0x00, // avgBitrate

      0x05 // descriptor_type
    ].concat([configlen]).concat(config).concat([0x06, 0x01, 0x02]))
    buffer.write(Fmp4.size(8 + content.byteLength), Fmp4.type('esds'), content)
    return buffer.buffer
  }
  static avc1 (data) {
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let size = 40// 8(avc1)+8(avcc)+8(btrt)+16(pasp)
    // let sps = data.sps
    // let pps = data.pps
    let width = data.width
    let height = data.height
    let hSpacing = data.parRatio.height
    let vSpacing = data.parRatio.width
    // let avccBuffer = new Buffer()
    // avccBuffer.write(new Uint8Array([
    //   0x01, // version
    //   sps[1], // profile
    //   sps[2], // profile compatible
    //   sps[3], // level
    //   0xfc | 3,
    //   0xE0 | 1 // 目前只处理一个sps
    // ].concat([sps.length >>> 8 & 0xff, sps.length & 0xff])))
    // avccBuffer.write(sps, new Uint8Array([1, pps.length >>> 8 & 0xff, pps.length & 0xff]), pps)

    let avcc = data.avcc
    let avc1 = new Uint8Array([
      0x00, 0x00, 0x00, // reserved
      0x00, 0x00, 0x00, // reserved
      0x00, 0x01, // data_reference_index
      0x00, 0x00, // pre_defined
      0x00, 0x00, // reserved
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, // pre_defined
      (width >> 8) & 0xff,
      width & 0xff, // width
      (height >> 8) & 0xff,
      height & 0xff, // height
      0x00, 0x48, 0x00, 0x00, // horizresolution
      0x00, 0x48, 0x00, 0x00, // vertresolution
      0x00, 0x00, 0x00, 0x00, // reserved
      0x00, 0x01, // frame_count
      0x12,
      0x64, 0x61, 0x69, 0x6C, // dailymotion/hls.js
      0x79, 0x6D, 0x6F, 0x74,
      0x69, 0x6F, 0x6E, 0x2F,
      0x68, 0x6C, 0x73, 0x2E,
      0x6A, 0x73, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, // compressorname
      0x00, 0x18, // depth = 24
      0x11, 0x11]) // pre_defined = -1
    let btrt = new Uint8Array([
      0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
      0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
      0x00, 0x2d, 0xc6, 0xc0 // avgBitrate
    ])
    let pasp = new Uint8Array([
      (hSpacing >> 24), // hSpacing
      (hSpacing >> 16) & 0xff,
      (hSpacing >> 8) & 0xff,
      hSpacing & 0xff,
      (vSpacing >> 24), // vSpacing
      (vSpacing >> 16) & 0xff,
      (vSpacing >> 8) & 0xff,
      vSpacing & 0xff
    ])

    buffer.write(
      Fmp4.size(size + avc1.byteLength + avcc.byteLength + btrt.byteLength), Fmp4.type('avc1'), avc1,
      Fmp4.size(8 + avcc.byteLength), Fmp4.type('avcC'), avcc,
      Fmp4.size(20), Fmp4.type('btrt'), btrt,
      Fmp4.size(16), Fmp4.type('pasp'), pasp
    )
    return buffer.buffer
  }
  static stts () {
    let content = new Uint8Array([
      0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00 // entry_count
    ])
    return Fmp4.initBox(16, 'stts', content)
  }
  static stsc () {
    let content = new Uint8Array([
      0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00 // entry_count
    ])
    return Fmp4.initBox(16, 'stsc', content)
  }
  static stco () {
    let content = new Uint8Array([
      0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00 // entry_count
    ])
    return Fmp4.initBox(16, 'stco', content)
  }
  static stsz () {
    let content = new Uint8Array([
      0x00, // version
      0x00, 0x00, 0x00, // flags
      0x00, 0x00, 0x00, 0x00, // sample_size
      0x00, 0x00, 0x00, 0x00 // sample_count
    ])
    return Fmp4.initBox(20, 'stsz', content)
  }
  static mvex (duration, timescale = 1000, trackID) {
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let mehd = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"].writeUint32(duration)
    buffer.write(Fmp4.size(56), Fmp4.type('mvex'), Fmp4.size(16), Fmp4.type('mehd'), Fmp4.extension(0, 0), mehd, Fmp4.trex(trackID))
    return buffer.buffer
  }
  static trex (id) {
    let content = new Uint8Array([
      0x00, // version 0
      0x00, 0x00, 0x00, // flags
      (id >> 24),
      (id >> 16) & 0xff,
      (id >> 8) & 0xff,
      (id & 0xff), // track_ID
      0x00, 0x00, 0x00, 0x01, // default_sample_description_index
      0x00, 0x00, 0x00, 0x00, // default_sample_duration
      0x00, 0x00, 0x00, 0x00, // default_sample_size
      0x00, 0x01, 0x00, 0x01 // default_sample_flags
    ])
    return Fmp4.initBox(8 + content.byteLength, 'trex', content)
  }
  static moof (data) {
    let size = 8
    let mfhd = Fmp4.mfhd()
    let traf = Fmp4.traf(data);
    [mfhd, traf].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'moof', mfhd, traf)
  }
  static mfhd () {
    let content = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"].writeUint32(Fmp4.sequence)
    Fmp4.sequence += 1
    return Fmp4.initBox(16, 'mfhd', Fmp4.extension(0, 0), content)
  }
  static traf (data) {
    let size = 8
    let tfhd = Fmp4.tfhd(data.id)
    let tfdt = Fmp4.tfdt(data.time)
    let sdtp = Fmp4.sdtp(data)
    let trun = Fmp4.trun(data, sdtp.byteLength);

    [tfhd, tfdt, trun, sdtp].forEach(item => {
      size += item.byteLength
    })
    return Fmp4.initBox(size, 'traf', tfhd, tfdt, trun, sdtp)
  }
  static tfhd (id) {
    let content = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"].writeUint32(id)
    return Fmp4.initBox(16, 'tfhd', Fmp4.extension(0, 0), content)
  }
  static tfdt (time) {
    // let upper = Math.floor(time / (UINT32_MAX + 1)),
    //     lower = Math.floor(time % (UINT32_MAX + 1));
    return Fmp4.initBox(16, 'tfdt', Fmp4.extension(0, 0), xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"].writeUint32(time))
  }
  static trun (data, sdtpLength) {
    // let id = data.id;
    // let ceil = id === 1 ? 16 : 12;
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let sampleCount = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"].writeUint32(data.samples.length)
    // mdat-header 8
    // moof-header 8
    // mfhd 16
    // traf-header 8
    // thhd 16
    // tfdt 20
    // trun-header 12
    // sampleCount 4
    // data-offset 4
    // samples.length
    let offset = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"].writeUint32(8 + 8 + 16 + 8 + 16 + 16 + 12 + 4 + 4 + 16 * data.samples.length + sdtpLength)
    buffer.write(Fmp4.size(20 + 16 * data.samples.length), Fmp4.type('trun'), new Uint8Array([0x00, 0x00, 0x0F, 0x01]), sampleCount, offset)

    // let size = buffer.buffer.byteLength
    // let writeOffset = 0
    // data.samples.forEach(() => {
    //   size += 16
    // })
    //
    // let trunBox = new Uint8Array(size)

    // trunBox.set(buffer.buffer, 0)

    data.samples.forEach((item) => {
      const flags = item.flags
      // console.log(item.type, item.dts, item.duration)

      buffer.write(new Uint8Array([
        (item.duration >>> 24) & 0xFF, // sample_duration
        (item.duration >>> 16) & 0xFF,
        (item.duration >>> 8) & 0xFF,
        (item.duration) & 0xFF,
        (item.size >>> 24) & 0xFF, // sample_size
        (item.size >>> 16) & 0xFF,
        (item.size >>> 8) & 0xFF,
        (item.size) & 0xFF,
        (flags.isLeading << 2) | flags.dependsOn, // sample_flags
        (flags.isDependedOn << 6) | (flags.hasRedundancy << 4) | flags.isNonSync,
        0x00, 0x00, // sample_degradation_priority
        (item.cts >>> 24) & 0xFF, // sample_composition_time_offset
        (item.cts >>> 16) & 0xFF,
        (item.cts >>> 8) & 0xFF,
        (item.cts) & 0xFF
      ]))
      // writeOffset += 16
      // buffer.write(Buffer.writeUint32(0));
    })
    return buffer.buffer
  }
  static sdtp (data) {
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    buffer.write(Fmp4.size(12 + data.samples.length), Fmp4.type('sdtp'), Fmp4.extension(0, 0))
    data.samples.forEach(item => {
      const flags = item.flags
      const num = (flags.isLeading << 6) | // is_leading: 2 (bit)
        (flags.dependsOn << 4) | // sample_depends_on
        (flags.isDependedOn << 2) | // sample_is_depended_on
        (flags.hasRedundancy)// sample_has_redundancy

      buffer.write(new Uint8Array([num]))
    })
    return buffer.buffer
  }
  static mdat (data) {
    let buffer = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let size = 8
    data.samples.forEach(item => {
      size += item.size
    })
    buffer.write(Fmp4.size(size), Fmp4.type('mdat'))
    let mdatBox = new Uint8Array(size)
    let offset = 0
    mdatBox.set(buffer.buffer, offset)
    offset += 8
    data.samples.forEach(item => {
      item.buffer.forEach((unit) => {
        mdatBox.set(unit, offset)
        offset += unit.byteLength
        // buffer.write(unit.data);
      })
    })
    return mdatBox
  }
}
Fmp4.type = (name) => {
  return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)])
}
Fmp4.sequence = 1

/* harmony default export */ __webpack_exports__["default"] = (Fmp4);


/***/ }),

/***/ "../xgplayer-remux/src/mp4/index.js":
/*!******************************************!*\
  !*** ../xgplayer-remux/src/mp4/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mp4Remuxer; });
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fmp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fmp4 */ "../xgplayer-remux/src/mp4/fmp4.js");



const REMUX_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].REMUX_EVENTS

class Mp4Remuxer {
  constructor () {
    this._dtsBase = 0
    this._isDtsBaseInited = false

    this.videoAllDuration = 0
    this.audioAllDuration = 0
  }

  init () {
    this.on(REMUX_EVENTS.REMUX_MEDIA, this.remux.bind(this))
    this.on(REMUX_EVENTS.REMUX_METADATA, this.onMetaDataReady.bind(this))
  }

  destroy () {
    this._dtsBase = -1
    this._dtsBaseInited = false
  }

  reset () {
    this._dtsBase = 0
    this._isDtsBaseInited = false
  }

  remux () {
    const { audioTrack, videoTrack } = this._context.getInstance('TRACKS')
    !this._isDtsBaseInited && this.calcDtsBase(audioTrack, videoTrack)

    this._remuxVideo(videoTrack)
    this._remuxAudio(audioTrack)
  }

  seek () {

  }

  onMetaDataReady (type) {
    let initSegment = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    let ftyp = _fmp4__WEBPACK_IMPORTED_MODULE_1__["default"].ftyp()
    let moov
    let track

    if (type === 'audio') {
      const { audioTrack } = this._context.getInstance('TRACKS')
      track = audioTrack;
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS')
      track = videoTrack;
    }

    moov = _fmp4__WEBPACK_IMPORTED_MODULE_1__["default"].moov({ type, meta: track.meta })

    initSegment.write(ftyp, moov)

    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.mimetype = track.meta.codec;
    source.init = initSegment;
    this.emit(REMUX_EVENTS.INIT_SEGMENT, type)
  }

  calcDtsBase (audioTrack, videoTrack) {
    if (!audioTrack.samples.length && !videoTrack.samples.length) {
      return;
    }

    let audioBase = Infinity
    let videoBase = Infinity

    if (audioTrack.samples && audioTrack.samples.length) {
      audioBase = audioTrack.samples[0].dts
    }
    if (videoTrack.samples && videoTrack.samples.length) {
      videoBase = videoTrack.samples[0].dts
    }

    this._dtsBase = Math.min(audioBase, videoBase)
    this._isDtsBaseInited = true
  }

  _remuxVideo (videoTrack) {
    const track = videoTrack

    if (!videoTrack.samples || !videoTrack.samples.length) {
      return
    }

    let {samples} = track
    let firstDts = -1

    const mp4Samples = []
    const mdatBox = {
      samples: []
    }

    while (samples.length) {
      const avcSample = samples.shift()
      const { isKeyframe } = avcSample
      let dts = avcSample.dts - this._dtsBase

      if (firstDts === -1) {
        firstDts = dts
      }

      let cts
      let pts
      if (avcSample.pts) {
        pts = avcSample.pts - this._dtsBase
        cts = pts - dts
      }
      if (avcSample.cts) {
        pts = avcSample.cts + dts
        cts = avcSample.cts
      }

      let mdatSample = {
        buffer: [],
        size: 0
      }
      mdatBox.samples.push(mdatSample)
      mdatSample.buffer.push(avcSample.data)
      mdatSample.size += avcSample.data.byteLength

      let sampleDuration = 0
      if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase
        sampleDuration = nextDts - dts
      } else {
        if (mp4Samples.length >= 1) { // lastest sample, use second last duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration
        } else { // the only one sample, use reference duration
          sampleDuration = this.videoMeta.refSampleDuration
        }
      }
      this.videoAllDuration += sampleDuration
      mp4Samples.push({
        dts,
        cts,
        pts,
        data: avcSample.data,
        size: avcSample.data.byteLength,
        isKeyframe,
        duration: sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: isKeyframe ? 2 : 1,
          isDependedOn: isKeyframe ? 1 : 0,
          hasRedundancy: 0,
          isNonSync: isKeyframe ? 0 : 1
        },
        originDts: dts,
        type: 'video'
      })
    }

    let moofMdat = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()

    const moof = _fmp4__WEBPACK_IMPORTED_MODULE_1__["default"].moof({
      id: track.meta.id,
      time: firstDts,
      samples: mp4Samples
    })
    const mdat = _fmp4__WEBPACK_IMPORTED_MODULE_1__["default"].mdat(mdatBox)
    moofMdat.write(moof, mdat)

    track.samples = []
    track.length = 0

    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource('video');
    if (!source) {
      source = presourcebuffer.createSource('video');
    }

    source.data.push(moofMdat);

    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'video')
  }

  _remuxAudio (track) {
    const {samples} = track
    let firstDts = -1
    let mp4Samples = []

    const mdatBox = {
      samples: []
    }
    if (!samples || !samples.length) {
      return
    }
    let isFirstDtsInited = false
    while (samples.length) {
      let sample = samples.shift()
      const { data } = sample
      let dts = sample.dts - this._dtsBase
      const originDts = dts
      if (!isFirstDtsInited) {
        firstDts = dts
        isFirstDtsInited = true
      }

      let sampleDuration = 0

      if (this.audioMeta.refSampleDurationFixed) {
        sampleDuration = this.audioMeta.refSampleDurationFixed
      } else if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts
      } else {
        if (mp4Samples.length >= 1) { // use second last sample duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration
        } else { // the only one sample, use reference sample duration
          sampleDuration = this.audioMeta.refSampleDuration
        }
      }

      // console.log('remux audio ', dts)
      this.audioAllDuration += sampleDuration
      const mp4Sample = {
        dts,
        pts: dts,
        cts: 0,
        size: data.byteLength,
        duration: sample.duration ? sample.duration : sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: 2,
          isDependedOn: 1,
          hasRedundancy: 0,
          isNonSync: 0
        },
        isKeyframe: true,
        originDts,
        type: 'audio'
      }

      let mdatSample = {
        buffer: [],
        size: 0
      }
      mdatSample.buffer.push(data)
      mdatSample.size += data.byteLength

      mdatBox.samples.push(mdatSample)

      mp4Samples.push(mp4Sample)
    }

    const moofMdat = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_0__["Buffer"]()
    const moof = _fmp4__WEBPACK_IMPORTED_MODULE_1__["default"].moof({
      id: track.meta.id,
      time: firstDts,
      samples: mp4Samples
    })
    const mdat = _fmp4__WEBPACK_IMPORTED_MODULE_1__["default"].mdat(mdatBox)
    moofMdat.write(moof, mdat)

    track.samples = []
    track.length = 0

    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource('audio');
    if (!source) {
      source = presourcebuffer.createSource('audio');
    }
    source.data.push(moofMdat);
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'audio', moofMdat)
  }

  initSilentAudio (dts, duration) {
    const unit = Mp4Remuxer.getSilentFrame(this.audioMeta.channelCount)
    return {
      dts,
      pts: dts,
      cts: 0,
      duration,
      unit,
      size: unit.byteLength,
      originDts: dts,
      type: 'video'
    }
  }

  get videoMeta () {
    return this._context.getInstance('TRACKS').videoTrack.meta
  }
  get audioMeta () {
    return this._context.getInstance('TRACKS').audioTrack.meta
  }

  static getSilentFrame (channelCount) {
    if (channelCount === 1) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80])
    } else if (channelCount === 2) {
      return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80])
    } else if (channelCount === 3) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e])
    } else if (channelCount === 4) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38])
    } else if (channelCount === 5) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38])
    } else if (channelCount === 6) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0])
    }
    return null
  }
}


/***/ }),

/***/ "../xgplayer-utils/index.js":
/*!**********************************!*\
  !*** ../xgplayer-utils/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Context: __webpack_require__(/*! ./src/context */ "../xgplayer-utils/src/context.js").default,

  // Modules from constants
  EVENTS: __webpack_require__(/*! ./src/constants/events */ "../xgplayer-utils/src/constants/events.js").default,
  WORKER_COMMANDS: __webpack_require__(/*! ./src/constants/worker-commands */ "../xgplayer-utils/src/constants/worker-commands.js").default,

  // Modules from env
  sniffer: __webpack_require__(/*! ./src/env/sniffer */ "../xgplayer-utils/src/env/sniffer.js").default,
  isLe: __webpack_require__(/*! ./src/env/isle */ "../xgplayer-utils/src/env/isle.js").default,
  UTF8: __webpack_require__(/*! ./src/env/utf8 */ "../xgplayer-utils/src/env/utf8.js").default,

  // Models
  MediaInfo: __webpack_require__(/*! ./src/models/media-info */ "../xgplayer-utils/src/models/media-info.js").default,
  MediaSample: __webpack_require__(/*! ./src/models/media-sample */ "../xgplayer-utils/src/models/media-sample.js").default,
  MediaSegment: __webpack_require__(/*! ./src/models/media-segment */ "../xgplayer-utils/src/models/media-segment.js").default,
  MediaSegmentList: __webpack_require__(/*! ./src/models/media-segment-list */ "../xgplayer-utils/src/models/media-segment-list.js").default,
  AudioTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").AudioTrackMeta,
  VideoTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").VideoTrackMeta,
  AudioTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").AudioTrackSample,
  VideoTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").VideoTrackSample,

  // Modules from mse
  Mse: __webpack_require__(/*! ./src/mse/index */ "../xgplayer-utils/src/mse/index.js").default,

  // Modules from write
  Stream: __webpack_require__(/*! ./src/write/stream */ "../xgplayer-utils/src/write/stream.js").default,
  Buffer: __webpack_require__(/*! ./src/write/buffer */ "../xgplayer-utils/src/write/buffer.js").default,

  MobileVideo: __webpack_require__(/*! ./src/mobile/mobile-video */ "../xgplayer-utils/src/mobile/mobile-video.js")
};


/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js":
/*!***********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ResultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      totalLength += arr.length;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;

      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js":
/*!**********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _concat = __webpack_require__(/*! ./concat */ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _concat2.default;

/***/ }),

/***/ "../xgplayer-utils/node_modules/webworkify-webpack/index.js":
/*!******************************************************************!*\
  !*** ../xgplayer-utils/node_modules/webworkify-webpack/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function webpackBootstrapFunc (modules) {
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.l = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }

/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };

/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };

/******/  // define __esModule on exports
/******/  __webpack_require__.r = function(exports) {
/******/    Object.defineProperty(exports, '__esModule', { value: true });
/******/  };

/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };

/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "/";

/******/  // on error function for async loading
/******/  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE)
  return f.default || f // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+'
var dependencyRegExp = '\\(\\s*(\/\\*.*?\\*\/)?\\s*.*?(' + moduleNameReqExp + ').*?\\)' // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp (str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function isNumeric(n) {
  return !isNaN(1 * n); // 1 * n converts integers, integers as string ("123"), 1e3 and "1e3" to integers and strings to NaN
}

function getModuleDependencies (sources, module, queueName) {
  var retval = {}
  retval[queueName] = []

  var fnString = module.toString()
  var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/)
  if (!wrapperSignature) return retval
  var webpackRequireName = wrapperSignature[1]

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g')
  var match
  while ((match = re.exec(fnString))) {
    if (match[3] === 'dll-reference') continue
    retval[queueName].push(match[3])
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g')
  while ((match = re.exec(fnString))) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1])
      sources[match[2]] = __webpack_require__(match[1]).m
    }
    retval[match[2]] = retval[match[2]] || []
    retval[match[2]].push(match[4])
  }

  // convert 1e3 back to 1000 - this can be important after uglify-js converted 1000 to 1e3
  var keys = Object.keys(retval);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < retval[keys[i]].length; j++) {
      if (isNumeric(retval[keys[i]][j])) {
        retval[keys[i]][j] = 1 * retval[keys[i]][j];
      }
    }
  }

  return retval
}

function hasValuesInQueues (queues) {
  var keys = Object.keys(queues)
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0
  }, false)
}

function getRequiredModules (sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  }
  var requiredModules = {
    main: []
  }
  var seenModules = {
    main: {}
  }

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue)
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i]
      var queue = modulesQueue[queueName]
      var moduleToCheck = queue.pop()
      seenModules[queueName] = seenModules[queueName] || {}
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue
      seenModules[queueName][moduleToCheck] = true
      requiredModules[queueName] = requiredModules[queueName] || []
      requiredModules[queueName].push(moduleToCheck)
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName)
      var newModulesKeys = Object.keys(newModules)
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || []
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]])
      }
    }
  }

  return requiredModules
}

module.exports = function (moduleId, options) {
  options = options || {}
  var sources = {
    main: __webpack_require__.m
  }

  var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId)

  var src = ''

  Object.keys(requiredModules).filter(function (m) { return m !== 'main' }).forEach(function (module) {
    var entryModule = 0
    while (requiredModules[module][entryModule]) {
      entryModule++
    }
    requiredModules[module].push(entryModule)
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[module][id].toString() }).join(',') + '});\n'
  })

  src = src + 'new ((' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources.main[id].toString() }).join(',') + '}))(self);'

  var blob = new window.Blob([src], { type: 'text/javascript' })
  if (options.bare) { return blob }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL

  var workerUrl = URL.createObjectURL(blob)
  var worker = new window.Worker(workerUrl)
  worker.objectURL = workerUrl

  return worker
}


/***/ }),

/***/ "../xgplayer-utils/src/constants/events.js":
/*!*************************************************!*\
  !*** ../xgplayer-utils/src/constants/events.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LOADER_EVENTS = {
  LADER_START: 'LOADER_START',
  LOADER_DATALOADED: 'LOADER_DATALOADED',
  LOADER_COMPLETE: 'LOADER_COMPLETE',
  LOADER_ERROR: 'LOADER_ERROR'
}

const DEMUX_EVENTS = {
  DEMUX_START: 'DEMUX_START',
  DEMUX_COMPLETE: 'DEMUX_COMPLETE',
  DEMUX_ERROR: 'DEMUX_ERROR',
  METADATA_PARSED: 'METADATA_PARSED',
  VIDEO_METADATA_CHANGE: 'VIDEO_METADATA_CHANGE',
  AUDIO_METADATA_CHANGE: 'AUDIO_METADATA_CHANGE',
  MEDIA_INFO: 'MEDIA_INFO'
}

const REMUX_EVENTS = {
  REMUX_METADATA: 'REMUX_METADATA',
  REMUX_MEDIA: 'REMUX_MEDIA',
  MEDIA_SEGMENT: 'MEDIA_SEGMENT',
  REMUX_ERROR: 'REMUX_ERROR',
  INIT_SEGMENT: 'INIT_SEGMENT'
}

const MSE_EVENTS = {
  SOURCE_UPDATE_END: 'SOURCE_UPDATE_END'
}

// hls专有events
const HLS_EVENTS = {
  RETRY_TIME_EXCEEDED: 'RETRY_TIME_EXCEEDED'
}

const ALLEVENTS = Object.assign({}, LOADER_EVENTS, DEMUX_EVENTS, REMUX_EVENTS, MSE_EVENTS, HLS_EVENTS)

const FlvAllowedEvents = []
const HlsAllowedEvents = []

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    FlvAllowedEvents.push(ALLEVENTS[key])
  }
}

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    HlsAllowedEvents.push(ALLEVENTS[key])
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  ALLEVENTS,
  HLS_EVENTS,
  REMUX_EVENTS,
  DEMUX_EVENTS,
  MSE_EVENTS,
  LOADER_EVENTS,
  FlvAllowedEvents,
  HlsAllowedEvents
});


/***/ }),

/***/ "../xgplayer-utils/src/constants/worker-commands.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/constants/worker-commands.js ***!
  \**********************************************************/
/*! exports provided: CONTEXT_COMOMANDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_COMOMANDS", function() { return CONTEXT_COMOMANDS; });
const CONTEXT_COMOMANDS = {
  ON: 'on',
  ONCE: 'once',
  OFF: 'off',
  EMIT: 'emit',
  DESTROY: 'destroy'
}


/***/ }),

/***/ "../xgplayer-utils/src/context.js":
/*!****************************************!*\
  !*** ../xgplayer-utils/src/context.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_media_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/media-info */ "../xgplayer-utils/src/models/media-info.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);



const DIRECT_EMIT_FLAG = '__TO__'

class Context {
  constructor (allowedEvents = []) {
    this._emitter = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]()
    this._instanceMap = {} // 所有的解码流程实例
    this._clsMap = {} // 构造函数的map
    this._inited = false
    this.mediaInfo = new _models_media_info__WEBPACK_IMPORTED_MODULE_0__["default"]()
    this.allowedEvents = allowedEvents
    this._hooks = {} // 注册在事件前/后的钩子，例如 before('DEMUX_COMPLETE')
  }

  /**
   * 从上下文中获取解码流程实例，如果没有实例，构造一个
   * @param tag
   * @param args
   * @returns {*}
   */
  getInstance (tag) {
    if (this._instanceMap[tag]) {
      return this._instanceMap[tag]
    } else {
      // throw new Error(`${tag}实例尚未初始化`)
      return null
    }
  }

  /**
   * 初始化具体实例
   * @param tag
   * @param args
   */
  initInstance (tag, ...args) {
    if (this._clsMap[tag]) {
      const newInstance = new this._clsMap[tag](...args)
      this._instanceMap[tag] = newInstance
      if (newInstance.init) {
        newInstance.init() // TODO: lifecircle
      }
      return newInstance
    } else {
      throw new Error(`${tag}未在context中注册`)
    }
  }

  /**
   * 避免大量的initInstance调用，初始化所有的组件
   * @param config
   */
  init (config) {
    if (this._inited) {
      return
    }
    for (let tag in this._clsMap) {
      // if not inited, init an instance
      if (this._clsMap.hasOwnProperty(tag) && !this._instanceMap[tag]) {
        this.initInstance(tag, config)
      }
    }
    this._inited = true
  }

  /**
   * 注册一个上下文流程，提供安全的事件发送机制
   * @param tag
   * @param cls
   */
  registry (tag, cls) {
    const emitter = this._emitter
    const checkMessageName = this._isMessageNameValid.bind(this)
    const self = this
    const enhanced = class extends cls {
      constructor (...args) {
        super(...args)
        this.listeners = {}
        this.onceListeners = {}
        this.TAG = tag
        this._context = self
      }

      on (messageName, callback) {
        checkMessageName(messageName)

        if (this.listeners[messageName]) {
          this.listeners[messageName].push(callback)
        } else {
          this.listeners[messageName] = [callback]
        }

        emitter.on(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback) // 建立定向通信监听
        return emitter.on(messageName, callback)
      }

      /**
       * 在某个事件触发前执行
       * @param messageName
       * @param callback
       */
      before (messageName, callback) {
        checkMessageName(messageName)
        if (self._hooks[messageName]) {
          self._hooks[messageName].push(callback)
        } else {
          self._hooks[messageName] = [callback]
        }
      }

      once (messageName, callback) {
        checkMessageName(messageName)

        if (this.onceListeners[messageName]) {
          this.onceListeners[messageName].push(callback)
        } else {
          this.onceListeners[messageName] = [callback]
        }

        emitter.once(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback)
        return emitter.once(messageName, callback)
      }

      emit (messageName, ...args) {
        checkMessageName(messageName)

        const beforeList = self._hooks[messageName]
        if (beforeList) {
          for (let i = 0, len = beforeList.length; i < len; i++) {
            const callback = beforeList[i]
            callback()
          }
        }
        return emitter.emit(messageName, ...args)
      }

      /**
       * 定向发送给某个组件单例的消息
       * @param messageName
       * @param args
       */
      emitTo (tag, messageName, ...args) {
        checkMessageName(messageName)

        return emitter.emit(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, ...args)
      }

      off (messageName, callback) {
        checkMessageName(messageName)
        return emitter.off(messageName, callback)
      }

      removeListeners () {
        const hasOwn = Object.prototype.hasOwnProperty.bind(this.listeners)

        for (let messageName in this.listeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.listeners[messageName] || []
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i]
              emitter.off(messageName, callback)
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback)
            }
          }
        }

        for (let messageName in this.onceListeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.onceListeners[messageName] || []
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i]
              emitter.off(messageName, callback)
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback)
            }
          }
        }
      }

      /**
       * 在组件销毁时，默认将它注册的事件全部卸载，确保不会造成内存泄漏
       */
      destroy () {
        // step1 unlisten events
        this.removeListeners()

        // step2 release from context
        delete self._instanceMap[tag]
        if (super.destroy) {
          super.destroy()
        }
      }
    }
    this._clsMap[tag] = enhanced

    /**
     * get instance immediately
     * e.g const instance = context.registry(tag, Cls)(config)
     * */
    return (...args) => {
      return this.initInstance(tag, ...args)
    }
  }

  /**
   * 对存在的实例进行
   */
  destroyInstances () {
    Object.keys(this._instanceMap).forEach((tag) => {
      if (this._instanceMap[tag].destroy) {
        this._instanceMap[tag].destroy()
      }
    })
  }

  /**
   * 编解码流程无需关注事件的解绑
   */
  destroy () {
    this._emitter = null
    this.allowedEvents = []
    this._clsMap = null
    this._context = null
    this.destroyInstances()
  }

  /**
   * 对信道进行收拢
   * @param messageName
   * @private
   */
  _isMessageNameValid (messageName) {
    if (!this.allowedEvents.indexOf(messageName) < 0) {
      throw new Error(`unregistered message name: ${messageName}`)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Context);


/***/ }),

/***/ "../xgplayer-utils/src/env/isle.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/isle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const le = (function () {
  const buf = new ArrayBuffer(2);
  (new DataView(buf)).setInt16(0, 256, true) // little-endian write
  return (new Int16Array(buf))[0] === 256 // platform-spec read, if equal then LE
})()

/* harmony default export */ __webpack_exports__["default"] = (le);


/***/ }),

/***/ "../xgplayer-utils/src/env/sniffer.js":
/*!********************************************!*\
  !*** ../xgplayer-utils/src/env/sniffer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const le = (function () {
  const buf = new ArrayBuffer(2);
  (new DataView(buf)).setInt16(0, 256, true) // little-endian write
  return (new Int16Array(buf))[0] === 256 // platform-spec read, if equal then LE
})()

const sniffer = {
  get device () {
    let r = sniffer.os;
    return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile';
  },
  get browser () {
    let ua = navigator.userAgent.toLowerCase();
    let reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firfox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(key => reg[key].test(ua)))[0];
  },
  get os () {
    let ua = navigator.userAgent
    let isWindowsPhone = /(?:Windows Phone)/.test(ua)
    let isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    let isAndroid = /(?:Android)/.test(ua);
    let isFireFox = /(?:Firefox)/.test(ua);
    let isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
    let isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    let isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet,
      isPhone,
      isAndroid,
      isPc,
      isSymbian,
      isWindowsPhone,
      isFireFox
    };
  },

  get isLe () {
    return le
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sniffer);


/***/ }),

/***/ "../xgplayer-utils/src/env/utf8.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/utf8.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class UTF8 {
  static decode (uint8array) {
    const out = [];
    const input = uint8array;
    let i = 0;
    const length = uint8array.length;

    while (i < length) {
      if (input[i] < 0x80) {
        out.push(String.fromCharCode(input[i]));
        ++i;
        continue;
      } else if (input[i] < 0xC0) {
        // fallthrough
      } else if (input[i] < 0xE0) {
        if (UTF8._checkContinuation(input, i, 1)) {
          const ucs4 = (input[i] & 0x1F) << 6 | (input[i + 1] & 0x3F);
          if (ucs4 >= 0x80) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 2;
            continue;
          }
        }
      } else if (input[i] < 0xF0) {
        if (UTF8._checkContinuation(input, i, 2)) {
          const ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
          if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 3;
            continue;
          }
        }
      } else if (input[i] < 0xF8) {
        if (UTF8._checkContinuation(input, i, 3)) {
          let ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 |
                    (input[i + 2] & 0x3F) << 6 | (input[i + 3] & 0x3F);
          if (ucs4 > 0x10000 && ucs4 < 0x110000) {
            ucs4 -= 0x10000;
            out.push(String.fromCharCode((ucs4 >>> 10) | 0xD800));
            out.push(String.fromCharCode((ucs4 & 0x3FF) | 0xDC00));
            i += 4;
            continue;
          }
        }
      }
      out.push(String.fromCharCode(0xFFFD));
      ++i;
    }

    return out.join('');
  }

  static _checkContinuation (uint8array, start, checkLength) {
    let array = uint8array;
    if (start + checkLength < array.length) {
      while (checkLength--) {
        if ((array[++start] & 0xC0) !== 0x80) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (UTF8);


/***/ }),

/***/ "../xgplayer-utils/src/mobile/audio-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/audio-context.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class AudioCtx {
  constructor (config) {
    this.config = Object.assign({},config);
    this.context = new AudioContext();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    this.meta = undefined;
    this.samples = [];
    this.preloadTime = this.config.preloadTime || 3;
    this.duration = 0;

    this._currentBuffer = undefined;
    this._nextBuffer = undefined;
    this._lastpts = undefined;
    this._preDecode = [];
    this._currentTime = 0;
    this._decoding = false;
    
    // 记录外部传输的状态
    this._played = false;
  }

  get currentTime() {
    return this._currentTime;
  }


  setAudioData (data) {
    for(let i = 0;i < data.length; i++) {
      data[i].pts = (data[i].pts === undefined) ? data[i].dts : data[i].pts;
      this._preDecode.push(data[i]);
    }
    if(this._preDecode.length > 0) {
      if(this._lastpts === undefined) {
        this._lastpts = this._preDecode[0].pts;
      }
      if((this._preDecode[this._preDecode.length - 1].pts - this._lastpts) / 1000 > this.preloadTime) {
        this.decodeAAC();
      }
    }
  }

  decodeAAC() {
    if(this._decoding) {
      return;
    }
    this._decoding = true;
    let data = this._preDecode;
    let samples = [];
    let _this = this;
    let sample = data.shift();
    while(sample) {
      let sampleData = AudioCtx.getAACData(this.meta, sample)
      samples.push(sampleData);
      this._lastpts = sample.pts;
      sample = data.shift()
    }
    let buffer = AudioCtx.combileData(samples);
    try {
      this.context.decodeAudioData(buffer.buffer, function(buffer) {
        let audioSource = _this.context.createBufferSource();
        audioSource.buffer = buffer;
        audioSource.onended = _this.onSourceEnded.bind(_this);
        _this.samples.push({
          time: _this.duration,
          duration: buffer.duration,
          data: audioSource
        })

        _this.duration += buffer.duration;

        if(!_this._currentBuffer) {
          _this._currentBuffer = _this.getTimeBuffer(_this.currentTime);

          if(_this._played) {
            _this.play();
          }
        }

        if(!_this._nextBuffer && _this._currentBuffer) {
          _this._nextBuffer = _this.getTimeBuffer(_this.currentTime + _this._currentBuffer.duration);
        }
        _this._decoding = false;

        if((_this._preDecode.length > 0 && _this._preDecode[_this._preDecode.length - 1].pts - _this._lastpts) / 1000 >= _this.preloadTime) {
          _this.decodeAAC();
        }
      })
    } catch(err) {
      console.error(err);
    }
  }

  onSourceEnded() {
    if(!this._nextBuffer || !this._played) {
      return;
    }
    let audioSource = this._nextBuffer.data;
    audioSource.start();
    audioSource.connect(this.gainNode);
    this._currentBuffer = this._nextBuffer;
    this._currentTime = this._currentBuffer.time;
    this._nextBuffer = this.getTimeBuffer(this.currentTime);
    if(this._currentBuffer) {
      this._nextBuffer = this.getTimeBuffer(this.currentTime + this._currentBuffer.duration);
    }
  }

  play() {
    this._played = true;
    if(!this._currentBuffer) {
      return;
    }
    let audioSource = this._currentBuffer.data;
    audioSource.connect(this.gainNode);
    audioSource.start();
  }

  getTimeBuffer(time) {
    let ret;
    for(let i = 0; i < this.samples.length; i++) {
      let sample = this.samples[i]
      if(sample.time <= time && (sample.time + sample.duration) > time) {
        ret = sample;
        break;
      }
    }
    return ret;
  }

  setAudioMetaData(meta) {
    this.meta = meta;
  }

  static getAACData(meta, sample) {
    let buffer = new Uint8Array(sample.data.byteLength + 7);
    let adts = AudioCtx.getAdts(meta, sample.data);
    buffer.set(adts);
    buffer.set(sample.data, 7);
    return buffer;
  }

  static combileData(samples) {
    // get length
    let length = 0;
    for(let i = 0,k = samples.length; i < k; i++) {
      length += samples[i].byteLength;
    }
    
    let ret = new Uint8Array(length);
    let offset = 0;
    // combile data;
    for(let i = 0,k = samples.length; i < k; i++) {
      ret.set(samples[i], offset);
      offset += samples[i].byteLength;
    }
    return ret;
  }

  static getAdts(meta, data) {
    let adts = new Uint8Array(7);
    
    // 设置同步位 0xfff 12bit 
    adts[0] = 0xff;
    adts[1] = 0xf0;

    // Object data (没什么人用MPEG-2了，HLS和FLV也全是MPEG-4，这里直接0)  1bit 
    // Level always 00 2bit 
    // CRC always 1 1bit 
    adts[1] = adts[1] | 0x01;

    // profile 2bit
    adts[2] = 0xc0 & ((meta.objectType-1) << 6);

    //sampleFrequencyIndex
    adts[2] = adts[2] | (0x3c & (meta.sampleRateIndex << 2))

    //private bit 0 1bit
    // chanel configuration 3bit
    adts[2] = adts[2] | (0x01 & meta.channelCount >> 2);
    adts[3] = 0xc0 & (meta.channelCount << 6);

    // original_copy: 0 1bit
    // home: 0 1bit

    // adts_variable_header()
    // copyrighted_id_bit 0 1bit
    // copyrighted_id_start 0 1bit

    // aac_frame_length 13bit;
    let aacframelength = data.byteLength + 7;

    adts[3] = adts[3] | (0x03 & aacframelength >> 11);
    adts[4] = 0xff & (aacframelength >> 3);
    adts[5] = 0xe0 & (aacframelength << 5);

    // adts_buffer_fullness 0x7ff 11bit
    adts[5] = adts[5] | 0x1f
    adts[6] = 0xfc;

    // number_of_raw_data_blocks_in_frame 0 2bit;
    return adts;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (AudioCtx);


/***/ }),

/***/ "../xgplayer-utils/src/mobile/mobile-video.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/mobile-video.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-context */ "../xgplayer-utils/src/mobile/video-context.js");
/* harmony import */ var _audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-context */ "../xgplayer-utils/src/mobile/audio-context.js");


// eslint-disable-next-line no-undef
class MobileVideo extends HTMLElement {
  constructor (config) {
    super();
    this.vCtx = new _video_context__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.aCtx = new _audio_context__WEBPACK_IMPORTED_MODULE_1__["default"](config);
    this.historyTime = 0;
  }

  destroy () {

  }

  onDemuxComplete(videoTrack, audioTrack) {
    audioTrack.samples = [];
    this.vCtx.decodeVideo(videoTrack);
  }

  setAudioMeta (meta) {
    this.aCtx.setAudioMetaData(meta);
  }
  
  setVideoMeta (meta) {
    this.vCtx.setVideoMetaData(meta);
  }

  get currentTime () {

  }

  play() {
    this.aCtx.play();
    this.vCtx.play();
  }
}
customElements.define('mobile-video', MobileVideo);


/***/ }),

/***/ "../xgplayer-utils/src/mobile/video-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/video-context.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webworkify_webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webworkify-webpack */ "../xgplayer-utils/node_modules/webworkify-webpack/index.js");
/* harmony import */ var webworkify_webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webworkify_webpack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _write_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../write/stream */ "../xgplayer-utils/src/write/stream.js");
/* harmony import */ var _xgplayer_codec_src_h264_nalunit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../xgplayer-codec/src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js");



class VideoCanvas {
  constructor (config) {
    this.canvas = document.createElement('canvas');
    this.config = Object.assign({}, config);
    this._decoderInited = false;
    this.oncanplay = undefined;
    this.meta = undefined;
    this._avccpushed = false;
    this.initWasmWorker();
  }

  initWasmWorker() {
    let _this = this;
    console.log('init worker');
    this.wasmworker = webworkify_webpack__WEBPACK_IMPORTED_MODULE_0___default()(/*require.resolve*/(/*! ./worker.js */ "../xgplayer-utils/src/mobile/worker.js"));
    
    /*
    this.wasmworker.addEventListener('message', msg => {
      switch(msg.data.msg) {
        case 'DECODER_READY':
          _this._decoderInited = true;
          break;
        case 'DECODED':
          console.log('decoded', msg.data.data, msg.data.width, msg.data.height, msg.data.info);
          break;
      }
    });*/
  }

  setVideoMetaData(meta) {
    console.log(meta);
    this.meta = meta;
    if(!this._decoderInited) {
      return
    }
    this._avccpushed = true;
    let data = new Uint8Array(meta.sps.byteLength + 4);
    data.set([0,0,0,1])
    data.set(meta.sps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    })

    data = new Uint8Array(meta.pps.byteLength + 4);
    data.set([0,0,0,1])
    data.set(meta.pps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    })
  }

  decodeVideo(videoTrack) {
    if(!this._decoderInited) {
      return
    }

    if(!this._avccpushed) {
      this.setVideoMetaData(this.meta);
    }
    let { samples } = videoTrack;
    let sample =  samples.shift();

    if(!sample) {
      return;
    }

    
    let nals = _xgplayer_codec_src_h264_nalunit__WEBPACK_IMPORTED_MODULE_2__["default"].getAvccNals(new _write_stream__WEBPACK_IMPORTED_MODULE_1__["default"](sample.data.buffer));
    
    let length = 0;
    for(let i=0;i<nals.length;i++) {
      let nal = nals[i];
      length += nal.body.byteLength + 4;
    }
    let offset = 0;
    let data = new Uint8Array(length);
    for(let i=0;i<nals.length;i++) {
      let nal = nals[i];
      data.set([0,0,0,1],offset);
      offset +=4;
      data.set(new Uint8Array(nal.body), offset);
      offset += nal.body.byteLength;
    }
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data,
      info: {
        dts: sample.dts,
        pts: sample.pts
      }
    })
  }
  
  play() {
    
  }
}
/* harmony default export */ __webpack_exports__["default"] = (VideoCanvas);

/***/ }),

/***/ "../xgplayer-utils/src/mobile/worker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/worker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function init(self) {
  console.log('init');
  self.importScripts('http://localhost:9090/examples/flv/decoder.js').then(data => {
    console.log('loaded',data);
  });
}
module.exports = function(self) {
  self.addEventListener('message', function(e) {
    var data = e.data;    
    if(!data.msg) {
      self.postMessage({
        msg: 'ERROR:invalid message',
      })
    } else {
      switch(data.msg) {
        case 'init':
          init(self);
          break;
        case 'decode':
          break;
        default:
          break;
      }
    }
  }, false);
}

/***/ }),

/***/ "../xgplayer-utils/src/models/media-info.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/media-info.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaInfo; });
const isObjectFilled = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null) {
        return false
      }
    }
  }
  return true
}

class MediaInfo {
  constructor () {
    this.mimeType = null
    this.duration = null

    this.hasVideo = null
    this.video = {
      codec: null,
      width: null,
      height: null,
      profile: null,
      level: null,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      chromaFormat: null,
      parRatio: {
        width: 1,
        height: 1
      }
    }

    this.hasAudio = null

    this.audio = {
      codec: null,
      sampleRate: null,
      sampleRateIndex: null,
      channelCount: null
    }
  }

  isComplete () {
    return MediaInfo.isBaseInfoReady(this) && MediaInfo.isVideoReady(this) && MediaInfo.isAudioReady(this)
  }

  static isBaseInfoReady (mediaInfo) {
    return isObjectFilled(mediaInfo)
  }

  static isVideoReady (mediaInfo) {
    if (!mediaInfo.hasVideo) {
      return true
    }

    return isObjectFilled(mediaInfo.video)
  }

  static isAudioReady (mediaInfo) {
    if (!mediaInfo.hasAudio) {
      return true
    }

    return isObjectFilled(mediaInfo.video)
  }
}


/***/ }),

/***/ "../xgplayer-utils/src/models/media-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-sample.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSample; });
class MediaSample {
  constructor (info) {
    let _default = MediaSample.getDefaultInf()

    if (!info || Object.prototype.toString.call(info) !== '[object Object]') {
      return _default
    }
    let sample = Object.assign({}, _default, info)

    Object.entries(sample).forEach(([k, v]) => {
      this[k] = v
    })
  }

  static getDefaultInf () {
    return {
      dts: null,
      pts: null,
      duration: null,
      position: null,
      isRAP: false, // is Random access point
      originDts: null
    }
  }
}


/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment-list.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment-list.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSegmentList; });
class MediaSegmentList {

    constructor (type) {
        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1; // cached last insert location
    }

    get type () {
        return this._type;
    }

    get length () {
        return this._list.length;
    }

    isEmpty () {
        return this._list.length === 0;
    }

    clear () {
        this._list = [];
        this._lastAppendLocation = -1;
    }

    _searchNearestSegmentBefore (beginDts) {
        let list = this._list;
        if (list.length === 0) {
            return -2;
        }
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        let idx = 0;

        if (beginDts < list[0].originDts) {
            idx = -1;
            return idx;
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || (beginDts > list[mid].lastSample.originDts
                    && (beginDts < list[mid + 1].originDts))) {
                idx = mid;
                break;
            } else if (list[mid].originDts < beginDts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return idx;
    }

    _searchNearestSegmentAfter (beginDts) {
        return this._searchNearestSegmentBefore(beginDts) + 1;
    }

    append (segment) {
        let list = this._list;
        let lastAppendIdx = this._lastAppendLocation;
        let insertIdx = 0;

        if (lastAppendIdx !== -1 && lastAppendIdx < list.length
            && segment.originStartDts >= list[lastAppendIdx].lastSample.originDts
            && ((lastAppendIdx === list.length - 1)
                || (lastAppendIdx < list.length - 1
                    && segment.originStartDts < list[lastAppendIdx + 1].originStartDts))) {
            insertIdx = lastAppendIdx + 1; // use cached location idx
        } else {
            if (list.length > 0) {
                insertIdx = this._searchNearestSegmentBefore(segment.originStartDts) + 1;
            }
        }

        this._lastAppendLocation = insertIdx;
        this._list.splice(insertIdx, 0, segment);
    }

    getLastSegmentBefore (beginDts) {
        let idx = this._searchNearestSegmentBefore(beginDts);
        if (idx >= 0) {
            return this._list[idx];
        } else { // -1
            return null;
        }
    }

    getLastSampleBefore (beginDts) {
        let segment = this.getLastSegmentBefore(beginDts);
        if (segment !== null) {
            return segment.lastSample;
        } else {
            return null;
        }
    }

    getLastRAPBefore (beginDts) {
        let segmentIdx = this._searchNearestSegmentBefore(beginDts);
        let randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        while (randomAccessPoints.length === 0 && segmentIdx > 0) {
            segmentIdx--;
            randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        }
        if (randomAccessPoints.length > 0) {
            return randomAccessPoints[randomAccessPoints.length - 1];
        } else {
            return null;
        }
    }

}

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSegment; });
class MediaSegment {
    constructor () {
        this.startDts = -1;
        this.endDts = -1;
        this.startPts = -1;
        this.endPts = -1;
        this.originStartDts = -1;
        this.originEndDts = -1;
        this.randomAccessPoints = [];
        this.firstSample = null;
        this.lastSample = null;
    }

    addRAP (sample) {
        sample.isRAP = true;
        this.randomAccessPoints.push(sample);
    }
}

/***/ }),

/***/ "../xgplayer-utils/src/models/track-meta.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/track-meta.js ***!
  \**************************************************/
/*! exports provided: AudioTrackMeta, VideoTrackMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrackMeta", function() { return AudioTrackMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrackMeta", function() { return VideoTrackMeta; });
class AudioTrackMeta {
  constructor (meta) {
    const _default = {
      sampleRate: 48000,
      channelCount: 2,
      codec: 'mp4a.40.2',
      config: [41, 401, 136, 0],
      duration: 0,
      id: 2,
      refSampleDuration: 21,
      sampleRateIndex: 3,
      timescale: 1000,
      type: 'audio'
    }
    if (meta) {
      return Object.assign({}, _default, meta)
    }
    return _default
  }
}

class VideoTrackMeta {
  constructor (meta) {
    const _default = {
      avcc: null,
      sps: new Uint8Array(0),
      pps: new Uint8Array(0),
      chromaFormat: 420,
      codec: 'avc1.640020',
      codecHeight: 720,
      codecWidth: 1280,
      duration: 0,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      id: 1,
      level: '3.2',
      presentHeight: 720,
      presentWidth: 1280,
      profile: 'High',
      refSampleDuration: 40,
      parRatio: {
        height: 1,
        width: 1
      },
      timescale: 1000,
      type: 'video'
    }

    if (meta) {
      return Object.assign({}, _default, meta)
    }
    return _default
  }
}


/***/ }),

/***/ "../xgplayer-utils/src/models/track-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/track-sample.js ***!
  \****************************************************/
/*! exports provided: AudioTrackSample, VideoTrackSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrackSample", function() { return AudioTrackSample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrackSample", function() { return VideoTrackSample; });
class AudioTrackSample {
  constructor (info) {
    let _default = AudioTrackSample.getDefault()
    if (!info) {
      return _default
    }
    let sample = Object.assign({}, _default, info)

    return sample
  }

  static getDefault () {
    return {
      dts: null,
      pts: null,
      data: new Uint8Array()
    }
  }
}

class VideoTrackSample {
  constructor (info) {
    let _default = VideoTrackSample.getDefault()

    if (!info) {
      return _default
    }
    let sample = Object.assign({}, _default, info)

    return sample
  }

  static getDefault () {
    return {
      dts: null,
      pts: null,
      isKeyframe: false, // is Random access point
      originDts: null,
      data: new Uint8Array()
    }
  }
}


/***/ }),

/***/ "../xgplayer-utils/src/mse/index.js":
/*!******************************************!*\
  !*** ../xgplayer-utils/src/mse/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MSE {
  constructor (configs) {
    this.configs = Object.assign({}, configs);
    this.container = this.configs.container;
    this.mediaSource = null;
    this.sourceBuffers = {};
    this.preloadTime = this.configs.preloadTime || 1;
  }

  init () {
    // eslint-disable-next-line no-undef
    this.mediaSource = new self.MediaSource();
    this.mediaSource.addEventListener('sourceopen', this.onSourceOpen.bind(this));
    this.container.src = URL.createObjectURL(this.mediaSource);
    this.url = this.container.src;
    this.container.addEventListener('timeupdate', this.onTimeUpdate.bind(this));
    this.container.addEventListener('waiting', this.onWaiting.bind(this));
  }

  onTimeUpdate () {
    this.emit('TIME_UPDATE', this.container);
  }
   
  onWaiting () {
    this.emit('WAITING', this.container);
  }

  onSourceOpen () {
    this.addSourceBuffers();
  }

  onUpdateEnd () {
    this.emit('SOURCE_UPDATE_END');
    this.doAppend()
  }
  addSourceBuffers () {
    if (this.mediaSource.readyState !== 'open') {
      return;
    }
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    let tracks = this._context.getInstance('TRACKS');
    let track;

    sources = sources.sources;
    let add = false;
    for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
      let type = Object.keys(sources)[i];
      if (type === 'audio') {
        track = tracks.audioTrack;
      } else if (type === 'video') {
        track = tracks.videoTrack;
      }
      if (track) {
        let dur = type === 'audio' ? 21 : 40;
        if (track.meta && track.meta.refSampleDuration) dur = track.meta.refSampleDuration;
        if (sources[type].data.length >= (this.preloadTime / dur)) {
          add = true;
        }
      }
    }

    if (add) {
      if (Object.keys(this.sourceBuffers).length > 0) {
        return;
      }
      for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
        let type = Object.keys(sources)[i];
        let source = sources[type]
        let mime = (type === 'video') ? 'video/mp4;codecs=' + source.mimetype : 'audio/mp4;codecs=' + source.mimetype
        let sourceBuffer = this.mediaSource.addSourceBuffer(mime);
        this.sourceBuffers[type] = sourceBuffer;
        sourceBuffer.addEventListener('updateend', this.onUpdateEnd.bind(this));
        this.doAppend();
      }
    }
  }

  doAppend () {
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    if (sources) {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let type = Object.keys(this.sourceBuffers)[i]
        let sourceBuffer = this.sourceBuffers[type];
        if (!sourceBuffer.updating) {
          let source = sources.sources[type];
          if (source && !source.inited) {
            sourceBuffer.appendBuffer(source.init.buffer.buffer);
            source.inited = true;
          } else if (source) {
            let data = source.data.shift()
            if (data) {
              sourceBuffer.appendBuffer(data.buffer.buffer);
            }
          }
        }
      }
    }
  }

  endOfStream () {
    if (this.mediaSource.readyState === 'open') {
      this.mediaSource.endOfStream()
    }
  }

  remove (end) {
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      if (!buffer.updating) {
        buffer.remove(0, end);
      }
    }
  }

  destroy () {
    this.container.removeEventListener('timeupdate', this.onTimeUpdate);
    this.container.removeEventListener('waiting', this.onWaiting);
    this.mediaSource.removeEventListener('sourceopen', this.onSourceOpen);
    this.configs = {};
    this.container = null;
    this.mediaSource = null;
    this.sourceBuffers = {};
    this.preloadTime = 1;
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      buffer.removeEventListener('updateend', this.onUpdateEnd);
      this.mediaSource.removeSourceBuffer(buffer);
      delete this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MSE);


/***/ }),

/***/ "../xgplayer-utils/src/write/buffer.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/buffer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var concat_typed_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! concat-typed-array */ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js");
/* harmony import */ var concat_typed_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(concat_typed_array__WEBPACK_IMPORTED_MODULE_0__);


class Buffer {
  constructor (buffer) {
    this.buffer = buffer || new Uint8Array(0)
  }

  write (...buffer) {
    buffer.forEach(item => {
      this.buffer = concat_typed_array__WEBPACK_IMPORTED_MODULE_0___default()(Uint8Array, this.buffer, item)
    })
  }

  static writeUint32 (value) {
    return new Uint8Array([
      value >> 24,
      (value >> 16) & 0xff,
      (value >> 8) & 0xff,
      value & 0xff
    ])
  }

  static readAsInt (arr) {
    let temp = ''

    function padStart4Hex (hexNum) {
      let hexStr = hexNum.toString(16)
      return hexStr.padStart(2, '0')
    }

    arr.forEach(num => {
      temp += padStart4Hex(num)
    })
    return parseInt(temp, 16)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Buffer);


/***/ }),

/***/ "../xgplayer-utils/src/write/stream.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/stream.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Stream {
  constructor (buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new Error('data is invalid');
    }
  }

  get length () {
    return this.buffer.byteLength;
  }

  set position (value) {
    this.dataview.position = value;
  }

  get position () {
    return this.dataview.position;
  }

  back (count) {
    this.position -= count;
  }

  skip (count) {
    let loop = Math.floor(count / 4);
    let last = count % 4;
    for (let i = 0; i < loop; i++) {
      Stream.readByte(this.dataview, 4);
    }
    if (last > 0) {
      Stream.readByte(this.dataview, last);
    }
  }

  /**
   * [readByte 从DataView中读取数据]
   * @param  {DataView} buffer [DataView实例]
   * @param  {Number} size   [读取字节数]
   * @return {Number}        [整数]
   */
  static readByte (buffer, size, sign) {
    let res;
    switch (size) {
      case 1:
        if (sign) {
          res = buffer.getInt8(buffer.position);
        } else {
          res = buffer.getUint8(buffer.position);
        }
        break;
      case 2:
        if (sign) {
          res = buffer.getInt16(buffer.position);
        } else {
          res = buffer.getUint16(buffer.position);
        }
        break;
      case 3:
        if (sign) {
          throw new Error('not supported for readByte 3');
        } else {
          res = buffer.getUint8(buffer.position) << 16;
          res |= buffer.getUint8(buffer.position + 1) << 8;
          res |= buffer.getUint8(buffer.position + 2);
        }
        break;
      case 4:
        if (sign) {
          res = buffer.getInt32(buffer.position);
        } else {
          res = buffer.getUint32(buffer.position);
        }
        break;
      case 8:
        if (sign) {
          throw new Error('not supported for readBody 8');
        } else {
          res = buffer.getUint32(buffer.position) << 32;
          res |= buffer.getUint32(buffer.position + 4);
        }
        break;
      default:
        res = '';
    }
    buffer.position += size;
    return res;
  }

  readUint8 () {
    return Stream.readByte(this.dataview, 1);
  }

  readUint16 () {
    return Stream.readByte(this.dataview, 2);
  }

  readUint24 () {
    return Stream.readByte(this.dataview, 3);
  }

  readUint32 () {
    return Stream.readByte(this.dataview, 4);
  }

  readUint64 () {
    return Stream.readByte(this.dataview, 8);
  }

  readInt8 () {
    return Stream.readByte(this.dataview, 1, true);
  }
  readInt16 () {
    return Stream.readByte(this.dataview, 2, true);
  }

  readInt32 () {
    return Stream.readByte(this.dataview, 4, true);
  }

  writeUint32 (value) {
    return new Uint8Array([
      value >>> 24 & 0xff,
      value >>> 16 & 0xff,
      value >>> 8 & 0xff,
      value & 0xff
    ]);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Stream);


/***/ }),

/***/ "../xgplayer/dist/index.js":
/*!*********************************!*\
  !*** ../xgplayer/dist/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){(e.exports=n(/*! ../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"@-webkit-keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@-webkit-keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}.xgplayer-download{position:relative;width:36px;height:40px;-webkit-order:8;-moz-box-ordinal-group:9;order:8;cursor:pointer}.xgplayer-inactive .xgplayer-download,.xgplayer-nostart .xgplayer-download{display:none}.xgplayer-download:hover .xgplayer-tips{display:block}.xgplayer-download-img{display:inline-block;width:24px;height:24px;margin-top:7px!important;margin-left:4px!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Crect x='11' y='4' width='2' height='12' rx='1'/%3E%3Crect x='3' y='18' width='18' height='2' rx='1'/%3E%3Crect transform='rotate(90 4 17.5)' x='1.5' y='16.5' width='5' height='2' rx='1'/%3E%3Crect transform='rotate(90 20 17.5)' x='17.5' y='16.5' width='5' height='2' rx='1'/%3E%3Cpath d='M11.988 14.3l-4.243-4.242a1 1 0 0 0-1.414 1.414l4.95 4.95a1 1 0 0 0 1.414 0l4.95-4.95a1 1 0 1 0-1.414-1.414L11.988 14.3z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%/100% 100%}.xgplayer-rotate{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;display:inline-block;cursor:pointer;margin:0 4px}.xgplayer-rotate:hover .xgplayer-tips{display:block}.xgplayer-rotate-img{width:20px;height:20px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23a)' fill='%23fff'%3E%3Cpath d='M11.666 9.167h-7.5a2.5 2.5 0 0 0-2.5 2.5v4.166a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5v-4.166a2.5 2.5 0 0 0-2.5-2.5z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.881 4.063a.83.83 0 0 0 .105 1.193L6.99 8.06A.833.833 0 1 0 8.128 6.84L6.62 5.435l3.199-.013a6.667 6.667 0 0 1 6.374 9.322.833.833 0 0 0 1.528.665A8.334 8.334 0 0 0 9.8 3.756l-3.367.013 1.53-1.64A.833.833 0 1 0 6.743.992L3.903 4.04a.83.83 0 0 0-.021.023z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h20v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:10px 10px}.xgplayer{background:rgba(0,0,0,.26);width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer video{width:100%;height:100%;outline:none}.xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(-1deg,rgba(0,0,0,.3),transparent);z-index:10}.xgplayer-nostart .xgplayer-controls{display:none}.no-controls .xgplayer-controls{display:none!important}.xgplayer-inactive .xgplayer-controls,.xgplayer-is-live .xgplayer-controls>*{display:none}.xgplayer-is-live .xgplayer-controls .xgplayer-fullscreen,.xgplayer-is-live .xgplayer-controls .xgplayer-live,.xgplayer-is-live .xgplayer-controls .xgplayer-placeholder,.xgplayer-is-live .xgplayer-controls .xgplayer-play,.xgplayer-is-live .xgplayer-controls .xgplayer-play-img,.xgplayer-is-live .xgplayer-controls .xgplayer-volume{display:block}.xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:0;right:0;outline:none;top:-10px;z-index:35}.xgplayer.xgplayer-definition-active .xgplayer-progress,.xgplayer.xgplayer-textTrack-active .xgplayer-progress,.xgplayer.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-progress-cache,.xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-progress-btn{display:none;position:absolute;left:0;top:-6px;width:14px;height:16px;border-radius:6px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26)}.xgplayer-progress-point{position:absolute}.xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;left:0;top:-40px;height:auto;line-height:30px;width:auto;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-progress:hover .xgplayer-progress-btn{display:block}.xgplayer-play,.xgplayer-play-img{position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer}.xgplayer-play-img .xgplayer-icon,.xgplayer-play .xgplayer-icon{margin-top:3px}.xgplayer-play-img:hover,.xgplayer-play:hover{opacity:.85}.xgplayer-play-img:hover .xgplayer-tips,.xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-playNext,.xgplayer-playNext-img{-webkit-order:1;-moz-box-ordinal-group:2;order:1;cursor:pointer}.xgplayer-playNext-img:hover,.xgplayer-playNext:hover{opacity:.85}.xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;display:inline-block}.xgplayer-time span:after{content:\"/\";display:inline-block;padding:0 3px}.xgplayer-time em{color:hsla(0,0%,100%,.5)}.xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:28px;height:140px;display:inline-block;position:relative;margin-top:-100px;z-index:18}.xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-slider{display:none;position:absolute;width:28px;height:88px;background:rgba(0,0,0,.54);border-radius:1px;bottom:50px;outline:none;left:0}.xgplayer.xgplayer-volume-active .xgplayer-slider{display:block}.xgplayer-slider:after{content:\" \";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-bar,.xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-drag:after{content:\" \";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}.xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:hsla(0,0%,100%,.3);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:1000;margin:-55px auto auto -35px;cursor:pointer}.xgplayer-inactive .xgplayer-start,.xgplayer-nostart .xgplayer-start{margin:-35px auto auto -35px}.xgplayer-start svg{fill:hsla(0,0%,100%,.7);margin:14px}.xgplayer-start.xgplayer-start-interact{-webkit-animation:playPause .4s ease-out forwards;animation:playPause .4s ease-out forwards}.xgplayer-start:hover{background:hsla(0,0%,100%,.5)}.xgplayer-start:hover svg{fill:hsla(0,0%,100%,.6)}.xgplayer-start-img{display:none;position:absolute;left:50%;top:50%;z-index:1000;cursor:pointer}.xgplayer-nostart .xgplayer-start-img{display:block}.xgplayer-start-img.xgplayer-start-interact{-webkit-animation:playPause .4s ease-out forwards;animation:playPause .4s ease-out forwards}.xgplayer-start-img:hover{opacity:.85}.xgplayer-textTrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px;margin-bottom:11px}.xgplayer-textTrack ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer.xgplayer-textTrack-active .xgplayer-textTrack ul{display:block}.xgplayer-textTrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-textTrack ul li.textTrack,.xgplayer-textTrack ul li:hover{color:#fff;opacity:1}.xgplayer-textTrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-is-textTrack .xgplayer-textTrack{display:block}.xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px;margin-bottom:11px}.xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer.xgplayer-definition-active .xgplayer-definition ul{display:block}.xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-definition ul li.definition,.xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-is-definition .xgplayer-definition{display:block}.xgplayer-playback{-webkit-order:8;-moz-box-ordinal-group:9;order:8;position:relative;outline:none;display:block;cursor:pointer;margin:10px;height:20px}.xgplayer-playback .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-playback .name span{width:40px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-playback:hover .xgplayer-tips{display:block;top:-40px}.xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer.xgplayer-pip-active{position:fixed!important;right:0;bottom:200px;width:320px!important;height:180px!important;z-index:999!important}.xgplayer.xgplayer-pip-active .xgplayer-controls,.xgplayer.xgplayer-pip-active xg-bullet{display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-lay{display:block}.xgplayer-pip-lay{position:absolute;top:26px;left:0;z-index:1450;cursor:pointer;background-color:transparent;display:none}.xgplayer-pip-lay,.xgplayer-pip-lay div{width:100%;height:100%}.xgplayer-pip-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:1500;display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer.xgplayer-inactive .xgplayer-pip-drag{display:none}.xgplayer-fullscreen{-webkit-order:12;-moz-box-ordinal-group:13;order:12;position:relative;display:inline-block;cursor:pointer}.xgplayer-fullscreen .xgplayer-icon{margin:4px -4px 0 0}.xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer.xgplayer-fullscreen-active{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.xgplayer-cssfullscreen{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;display:inline-block;cursor:pointer;left:6px}.xgplayer-cssfullscreen .xgplayer-icon{margin:4px -4px 0 0}.xgplayer-cssfullscreen:hover .xgplayer-tips{display:block}.xgplayer.xgplayer-cssfullscreen-active{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26;margin:10px auto}.xgplayer-bullet{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none}.xgplayer-bullet>*{position:absolute;white-space:nowrap;z-index:9}.xgplayer-has-bullet{display:block}.xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-70px auto auto -50px}.xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-isloading .xgplayer-loading{display:block}.xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:500;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;cursor:pointer}.xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-replay svg:hover path{fill:#fff}.xgplayer-replay .xgplayer-replay-img{position:absolute;left:50%;top:50%;cursor:pointer}.xgplayer-replay .xgplayer-replay-img:hover{opacity:.85}.xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px;cursor:pointer}.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-replay-img{display:none;position:absolute;left:50%;top:50%;z-index:500;cursor:pointer}.xgplayer-replay-img:hover{opacity:.85}.xgplayer.xgplayer-ended .xgplayer-replay-img{display:block}@keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}.xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:url(\"//s2.pstatp.com/cdn/expire-1-M/byted-player-images/1.0.2/bg.svg\") no-repeat 50%/cover;z-index:1100}.xgplayer-enter .xgplayer-enter-logo{display:block;position:absolute;left:50%;top:50%;width:130px;height:44px;margin:-22px auto auto -65px;background-size:130px 44px;background-image:url(\"//s3.pstatp.com/cdn/expire-1-M/byted-player-images/1.0.1/xg-logo-new.png\")}.xgplayer-enter .xgplayer-enter-tips{display:none;position:absolute;left:50%;top:50%;width:120px;height:1px;background:linear-gradient(90deg,#000,red,red,red,#000);margin:32px auto auto -62px}.xgplayer-enter .xgplayer-enter-tips:before{content:\" \";display:block;width:5px;height:1px;border-radius:50%;position:absolute;left:0;top:0;-webkit-animation:enterTips 1.6s linear infinite;animation:enterTips 1.6s linear infinite;background:#fff}.xgplayer-is-enter .xgplayer-enter,.xgplayer-is-enter .xgplayer-enter .xgplayer-enter-tips{display:block}.xgplayer-screenShot{-webkit-order:10;-moz-box-ordinal-group:11;order:10;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-screenShot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-screenShot .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-poster{position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer .xgplayer-none{display:none}.xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:1200;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-mobile .xgplayer-progress-btn{display:block}.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px;margin-top:8.5px}.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-dot{height:3px}.xgplayer-mobile.xgplayer-ended .xgplayer-start,.xgplayer-mobile.xgplayer-ended .xgplayer-start-img,.xgplayer-mobile.xgplayer-inactive .xgplayer-start,.xgplayer-mobile.xgplayer-inactive .xgplayer-start-img{display:none}.xgplayer-mobile .xgplayer-start{width:60px;height:60px;line-height:60px;display:none;margin:-50px auto auto -30px}.xgplayer-mobile .xgplayer-start svg{margin:10px}.xgplayer-mobile .xgplayer-start-img{display:none}.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-mobile.xgplayer-nostart .xgplayer-start{margin:-30px auto auto -30px;display:block}.xgplayer-mobile.xgplayer-nostart .xgplayer-start-img{display:block}.xgplayer-mobile .xgplayer-loading{-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-controls,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-poster,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-start,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-start-img{display:none}",""])},"./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},"./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! type/value/is */"./node_modules/type/value/is.js"),r=n(/*! type/plain-function/is */"./node_modules/type/plain-function/is.js"),i=n(/*! es5-ext/object/assign */"./node_modules/es5-ext/object/assign/index.js"),a=n(/*! es5-ext/object/normalize-options */"./node_modules/es5-ext/object/normalize-options.js"),s=n(/*! es5-ext/string/#/contains */"./node_modules/es5-ext/string/#/contains/index.js");(e.exports=function(e,t){var n,r,l,c,u;return arguments.length<2||"string"!=typeof e?(c=t,t=e,e=null):c=arguments[2],o(e)?(n=s.call(e,"c"),r=s.call(e,"e"),l=s.call(e,"w")):(n=l=!0,r=!1),u={value:t,configurable:n,enumerable:r,writable:l},c?i(a(c),u):u}).gs=function(e,t,n){var l,c,u,d;return"string"!=typeof e?(u=n,n=t,t=e,e=null):u=arguments[3],o(t)?r(t)?o(n)?r(n)||(u=n,n=void 0):n=void 0:(u=t,t=n=void 0):t=void 0,o(e)?(l=s.call(e,"c"),c=s.call(e,"e")):(l=!0,c=!1),d={get:t,set:n,configurable:l,enumerable:c},u?i(a(u),d):d}},"./node_modules/danmu.js/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/danmu.js/dist/index.js ***!
  \*********************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){var n,o,r,i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window,i=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==(void 0===e?"undefined":a(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n(22))&&o.__esModule?o:{default:o},i={};i.domObj=new r.default,i.createDom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=document.createElement(e);return r.className=o,r.innerHTML=t,Object.keys(n).forEach((function(t){var o=t,i=n[t];"video"===e||"audio"===e?i&&r.setAttribute(o,i):r.setAttribute(o,i)})),r},i.hasClass=function(e,t){return e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},i.addClass=function(e,t){e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):i.hasClass(e,t)||(e.className+=" "+t)},i.removeClass=function(e,t){e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):i.hasClass(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))},i.toggleClass=function(e,t){t.split(/\s+/g).forEach((function(t){i.hasClass(e,t)?i.removeClass(e,t):i.addClass(e,t)}))},i.findDom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(o){t.startsWith("#")&&(n=e.getElementById(t.slice(1)))}return n},i.deepCopy=function(e,t){if("Object"===i.typeOf(t)&&"Object"===i.typeOf(e))return Object.keys(t).forEach((function(n){"Object"!==i.typeOf(t[n])||t[n]instanceof Node?"Array"===i.typeOf(t[n])?e[n]="Array"===i.typeOf(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?i.deepCopy(e[n],t[n]):e[n]=t[n]})),e},i.typeOf=function(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]},i.copyDom=function(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""},i.formatTime=function(e){var t=Math.floor(e);return 1e3*t+(e-t)},t.default=i,e.exports=t.default},function(e,t,n){var o=n(13)();e.exports=function(e){return e!==o&&null!==e}},function(e,t,n){e.exports=n(3)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n(4))&&o.__esModule?o:{default:o};n(26),t.default=r.default,e.exports=t.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(5)),i=s(n(21)),a=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=a.default.deepCopy({overlap:!1,area:{start:0,end:1},live:!1,comments:[],direction:"r2l"},t),this.hideArr=[],(0,r.default)(this);var n=this;if(this.config.comments.forEach((function(e){e.duration=e.duration<5e3?5e3:e.duration,e.mode||(e.mode="scroll")})),!this.config.container||1!==this.config.container.nodeType)return this.emit("error","container id can't be empty"),!1;if(this.container=this.config.container,this.config.containerStyle){var o=this.config.containerStyle;Object.keys(o).forEach((function(e){n.container.style[e]=o[e]}))}this.live=this.config.live,this.player=this.config.player,this.direction=this.config.direction,a.default.addClass(this.container,"danmu"),this.bulletBtn=new i.default(this),this.emit("ready")}return o(e,[{key:"start",value:function(){this.bulletBtn.main.start()}},{key:"pause",value:function(){this.bulletBtn.main.pause()}},{key:"play",value:function(){this.bulletBtn.main.play()}},{key:"stop",value:function(){this.bulletBtn.main.stop()}},{key:"sendComment",value:function(e){e&&e.id&&e.duration&&(e.el||e.txt)&&(e.duration=e.duration<5e3?5e3:e.duration,this.bulletBtn.main.data.push(e))}},{key:"setCommentID",value:function(e,t){var n=this.container.getBoundingClientRect();e&&t&&(this.bulletBtn.main.data.some((function(n){return n.id===e&&(n.id=t,!0)})),this.bulletBtn.main.queue.some((function(o){return o.id===e&&(o.id=t,o.pauseMove(n),o.startMove(n),!0)})))}},{key:"setCommentDuration",value:function(e,t){var n=this.container.getBoundingClientRect();e&&t&&(t=t<5e3?5e3:t,this.bulletBtn.main.data.some((function(n){return n.id===e&&(n.duration=t,!0)})),this.bulletBtn.main.queue.some((function(o){return o.id===e&&(o.duration=t,o.pauseMove(n),o.startMove(n),!0)})))}},{key:"setAllDuration",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scroll",t=arguments[1],n=this.container.getBoundingClientRect();t&&(t=t<5e3?5e3:t,this.bulletBtn.main.data.forEach((function(n){e===n.mode&&(n.duration=t)})),this.bulletBtn.main.queue.forEach((function(o){e===o.mode&&(o.duration=t,o.pauseMove(n),o.startMove(n))})))}},{key:"hide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scroll";this.hideArr.indexOf(e)<0&&this.hideArr.push(e),this.bulletBtn.main.queue.filter((function(t){return e===t.mode||"color"===e&&t.color})).forEach((function(e){return e.remove()}))}},{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scroll",t=this.hideArr.indexOf(e);t>-1&&this.hideArr.splice(t,1)}},{key:"setDirection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"r2l";this.emit("changeDirection",e)}}]),e}();t.default=l,e.exports=t.default},function(e,t,n){var o,r,i,s,l,c,u,d=n(6),p=n(20),f=Function.prototype.apply,h=Function.prototype.call,g=Object.create,v=Object.defineProperty,m=Object.defineProperties,y=Object.prototype.hasOwnProperty,b={configurable:!0,enumerable:!1,writable:!0};r=function(e,t){var n,r;return p(t),r=this,o.call(this,e,n=function(){i.call(r,e,n),f.call(t,this,arguments)}),n.__eeOnceListener__=t,this},l={on:o=function(e,t){var n;return p(t),y.call(this,"__ee__")?n=this.__ee__:(n=b.value=g(null),v(this,"__ee__",b),b.value=null),n[e]?"object"==a(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:i=function(e,t){var n,o,r,i;if(p(t),!y.call(this,"__ee__"))return this;if(!(n=this.__ee__)[e])return this;if("object"==a(o=n[e]))for(i=0;r=o[i];++i)r!==t&&r.__eeOnceListener__!==t||(2===o.length?n[e]=o[i?0:1]:o.splice(i,1));else o!==t&&o.__eeOnceListener__!==t||delete n[e];return this},emit:s=function(e){var t,n,o,r,i;if(y.call(this,"__ee__")&&(r=this.__ee__[e]))if("object"==(void 0===r?"undefined":a(r))){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];for(r=r.slice(),t=0;o=r[t];++t)f.call(o,this,i)}else switch(arguments.length){case 1:h.call(r,this);break;case 2:h.call(r,this,arguments[1]);break;case 3:h.call(r,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];f.call(r,this,i)}}},c={on:d(o),once:d(r),off:d(i),emit:d(s)},u=m({},c),e.exports=t=function(e){return null==e?g(u):m(Object(e),c)},t.methods=l},function(e,t,n){var o=n(7),r=n(15),i=n(16),a=n(17);(e.exports=function(e,t){var n,i,s,l,c;return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],null==e?(n=s=!0,i=!1):(n=a.call(e,"c"),i=a.call(e,"e"),s=a.call(e,"w")),c={value:t,configurable:n,enumerable:i,writable:s},l?o(r(l),c):c}).gs=function(e,t,n){var s,l,c,u;return"string"!=typeof e?(c=n,n=t,t=e,e=null):c=arguments[3],null==t?t=void 0:i(t)?null==n?n=void 0:i(n)||(c=n,n=void 0):(c=t,t=n=void 0),null==e?(s=!0,l=!1):(s=a.call(e,"c"),l=a.call(e,"e")),u={get:t,set:n,configurable:s,enumerable:l},c?o(r(c),u):u}},function(e,t,n){e.exports=n(8)()?Object.assign:n(9)},function(e,t,n){e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,n){var o=n(10),r=n(14),i=Math.max;e.exports=function(e,t){var n,a,s,l=i(arguments.length,2);for(e=Object(r(e)),s=function(o){try{e[o]=t[o]}catch(e){n||(n=e)}},a=1;a<l;++a)t=arguments[a],o(t).forEach(s);if(void 0!==n)throw n;return e}},function(e,t,n){e.exports=n(11)()?Object.keys:n(12)},function(e,t,n){e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t,n){var o=n(1),r=Object.keys;e.exports=function(e){return r(o(e)?Object(e):e)}},function(e,t,n){e.exports=function(){}},function(e,t,n){var o=n(1);e.exports=function(e){if(!o(e))throw new TypeError("Cannot use null or undefined");return e}},function(e,t,n){var o=n(1),r=Array.prototype.forEach,i=Object.create;e.exports=function(e){var t=i(null);return r.call(arguments,(function(e){o(e)&&function(e,t){var n;for(n in e)t[n]=e[n]}(Object(e),t)})),t}},function(e,t,n){e.exports=function(e){return"function"==typeof e}},function(e,t,n){e.exports=n(18)()?String.prototype.contains:n(19)},function(e,t,n){var o="razdwatrzy";e.exports=function(){return"function"==typeof o.contains&&!0===o.contains("dwa")&&!1===o.contains("foo")}},function(e,t,n){var o=String.prototype.indexOf;e.exports=function(e){return o.call(this,e,arguments[1])>-1}},function(e,t,n){e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(0)),i=a(n(23));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.danmu=t,this.main=new i.default(t),t.config.defaultOff||this.main.start()}return o(e,[{key:"createSwitch",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.switchBtn=r.default.createDom("dk-switch",'<span class="txt">弹</span>',{},"danmu-switch "+(e?"danmu-switch-active":"")),this.switchBtn}}]),e}();t.default=s,e.exports=t.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t={initDOM:function(){return document.createElement("div")},initSize:10},this.init(t)}return o(e,[{key:"init",value:function(e){this.idleList=[],this.usingList=[],this._id=0,this.options=e,this._expand(e.initSize)}},{key:"use",value:function(){this.idleList.length||this._expand(1);var e=this.idleList.shift();return this.usingList.push(e),e}},{key:"unuse",value:function(e){var t=this.usingList.indexOf(e);t<0||(this.usingList.splice(t,1),e.innerHTML="",e.textcontent="",e.style="",this.idleList.push(e))}},{key:"_expand",value:function(e){for(var t=0;t<e;t++)this.idleList.push(this.options.initDOM(this._id++))}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(24)),i=s(n(25)),a=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.danmu=t,this.container=t.container,this.channel=new r.default(t),this.data=[].concat(t.config.comments),this.queue=[],this.timer=null,this.retryTimer=null,this.interval=2e3,this.status="idle",t.on("bullet_remove",this.updateQueue.bind(this));var n=this;this.danmu.on("changeDirection",(function(e){n.danmu.direction=e}))}return o(e,[{key:"updateQueue",value:function(e){var t=this;t.queue.some((function(n,o){return n.id===e.bullet.id&&(t.queue.splice(o,1),!0)}))}},{key:"init",value:function(e,t){t||(t=this),t.data.sort((function(e,t){return e.start-t.start})),t.retryTimer||(t.retryTimer=setInterval((function(){t.readData(),t.dataHandle()}),t.interval-1e3))}},{key:"start",value:function(){this.status="playing",this.queue=[],this.container.innerHTML="",this.channel.resetWithCb(this.init,this)}},{key:"stop",value:function(){this.status="closed",clearInterval(this.retryTimer),this.retryTimer=null,this.channel.reset(),this.queue=[],this.container.innerHTML=""}},{key:"play",value:function(){this.status="playing";var e=this.channel.channels,t=this.danmu.container.getBoundingClientRect();e&&e.length>0&&["scroll","top","bottom"].forEach((function(n){for(var o=0;o<e.length;o++)e[o].queue[n].forEach((function(e){e.resized||(e.startMove(t),e.resized=!0)}));for(var r=0;r<e.length;r++)e[r].queue[n].forEach((function(e){e.resized=!1}))}))}},{key:"pause",value:function(){this.status="paused";var e=this.channel.channels,t=this.danmu.container.getBoundingClientRect();e&&e.length>0&&["scroll","top","bottom"].forEach((function(n){for(var o=0;o<e.length;o++)e[o].queue[n].forEach((function(e){e.pauseMove(t)}))}))}},{key:"dataHandle",value:function(){var e=this;"paused"!==this.status&&"closed"!==this.status&&e.queue.length&&e.queue.forEach((function(t){"waiting"!==t.status&&"paused"!==t.status||t.startMove(e.channel.containerPos)}))}},{key:"readData",value:function(){var e=this,t=this.danmu,n=0;t.player&&t.player.currentTime&&(n=a.default.formatTime(t.player.currentTime));var o=void 0,r=e.interval,s=e.channel,l=void 0;t.player?(l=e.data.filter((function(t){return!t.start&&e.danmu.hideArr.indexOf(t.mode)<0&&(!t.color||e.danmu.hideArr.indexOf("color")<0)&&(t.start=n),e.danmu.hideArr.indexOf(t.mode)<0&&(!t.color||e.danmu.hideArr.indexOf("color")<0)&&t.start-r<=n&&n<=t.start+r})),t.live&&(e.data=e.data.filter((function(e){return e.start||(e.start=n),e.start>n-3*r})))):l=e.data.filter((function(t){return e.danmu.hideArr.indexOf(t.mode)<0&&(!t.color||e.danmu.hideArr.indexOf("color")<0)})),l.length>0&&l.forEach((function(n){(o=new i.default(t,n)).attach(),s.addBullet(o).result?(e.queue.push(o),o.topInit()):o.detach()}))}}]),e}();t.default=l,e.exports=t.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.danmu=t,this.reset();var n=this;this.danmu.on("bullet_remove",(function(e){n.removeBullet(e.bullet)})),this.direction=t.direction,this.danmu.on("changeDirection",(function(e){n.direction=e})),this.containerPos=this.danmu.container.getBoundingClientRect(),this.containerWidth=this.containerPos.width,this.containerHeight=this.containerPos.height,this.containerLeft=this.containerPos.left,this.containerRight=this.containerPos.right,this.danmu.bulletResizeTimer=setInterval((function(){n.containerPos=n.danmu.container.getBoundingClientRect(),(Math.abs(n.containerPos.width-n.containerWidth)>=2||Math.abs(n.containerPos.height-n.containerHeight)>=2||Math.abs(n.containerPos.left-n.containerLeft)>=2||Math.abs(n.containerPos.right-n.containerRight)>=2)&&(n.containerWidth=n.containerPos.width,n.containerHeight=n.containerPos.height,n.containerLeft=n.containerPos.left,n.containerRight=n.containerPos.right,n.resize(!0))}),50)}return o(e,[{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.danmu.container,n=this;setTimeout((function(){n.danmu.bulletBtn.main.data&&n.danmu.bulletBtn.main.data.forEach((function(e){e.bookChannelId&&delete e.bookChannelId}));var o=t.getBoundingClientRect();n.width=o.width,n.height=o.height,n.danmu.config.area&&n.danmu.config.area.start>=0&&n.danmu.config.area.end>=n.danmu.config.area.start&&("b2t"===n.direction?n.width=n.width*(n.danmu.config.area.end-n.danmu.config.area.start):n.height=n.height*(n.danmu.config.area.end-n.danmu.config.area.start)),n.container=t;var r,i=/mobile/gi.test(navigator.userAgent)?10:12;r="b2t"===n.direction?Math.floor(n.width/i):Math.floor(n.height/i);for(var a=[],s=0;s<r;s++)a[s]={id:s,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}};if(n.channels&&n.channels.length<=a.length){for(var l=function(t){a[t]={id:t,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}},["scroll","top"].forEach((function(o){n.channels[t].queue[o].forEach((function(r){r.el&&(a[t].queue[o].push(r),r.resized||(r.pauseMove(n.containerPos,e),r.startMove(n.containerPos),r.resized=!0))}))})),n.channels[t].queue.bottom.forEach((function(o){if(o.el){if(a[t+a.length-n.channels.length].queue.bottom.push(o),o.channel_id[0]+o.channel_id[1]-1===t){var r=[].concat(o.channel_id);o.channel_id=[r[0]-n.channels.length+a.length,r[1]],o.top=o.channel_id[0]*i,n.danmu.config.area&&n.danmu.config.area.start&&(o.top+=n.containerHeight*n.danmu.config.area.start),o.topInit()}o.resized||(o.pauseMove(n.containerPos,e),o.startMove(n.containerPos),o.resized=!0)}}))},c=0;c<n.channels.length;c++)l(c);for(var u=function(e){["scroll","top","bottom"].forEach((function(t){a[e].queue[t].forEach((function(e){e.resized=!1}))}))},d=0;d<a.length;d++)u(d);n.channels=a,"b2t"===n.direction?n.channelWidth=i:n.channelHeight=i}else if(n.channels&&n.channels.length>a.length){for(var p=function(t){a[t]={id:t,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}},["scroll","top","bottom"].forEach((function(o){if("top"===o&&t>Math.floor(a.length/2));else if("bottom"===o&&t<=Math.floor(a.length/2));else{var r="bottom"===o?t-a.length+n.channels.length:t;n.channels[r].queue[o].forEach((function(s,l){if(s.el){if(a[t].queue[o].push(s),"bottom"===o&&s.channel_id[0]+s.channel_id[1]-1===r){var c=[].concat(s.channel_id);s.channel_id=[c[0]-n.channels.length+a.length,c[1]],s.top=s.channel_id[0]*i,n.danmu.config.area&&n.danmu.config.area.start&&(s.top+=n.containerHeight*n.danmu.config.area.start),s.topInit()}s.resized||(s.pauseMove(n.containerPos,e),s.startMove(n.containerPos),s.resized=!0)}n.channels[r].queue[o].splice(l,1)}))}}))},f=0;f<a.length;f++)p(f);for(var h=function(e){["scroll","top","bottom"].forEach((function(t){n.channels[e].queue[t].forEach((function(e){e.pauseMove(n.containerPos),e.remove()}))}))},g=a.length;g<n.channels.length;g++)h(g);for(var v=function(e){["scroll","top","bottom"].forEach((function(t){a[e].queue[t].forEach((function(e){e.resized=!1}))}))},m=0;m<a.length;m++)v(m);n.channels=a,"b2t"===n.direction?n.channelWidth=i:n.channelHeight=i}}),10)}},{key:"addBullet",value:function(e){var t=this.danmu,n=this.channels,o=void 0,r=void 0,i=void 0;if("b2t"===this.direction?(r=this.channelWidth,i=Math.ceil(e.width/r)):(o=this.channelHeight,i=Math.ceil(e.height/o)),i>n.length)return{result:!1,message:"exceed channels.length, occupy="+i+",channelsSize="+n.length};for(var a=!0,s=void 0,l=-1,c=0,u=n.length;c<u;c++)if(n[c].queue[e.mode].some((function(t){return t.id===e.id})))return{result:!1,message:"exsited, channelOrder="+c+",danmu_id="+e.id};if("scroll"===e.mode)for(var d=0,p=n.length-i;d<=p;d++){a=!0;for(var f=d;f<d+i;f++){if((s=n[f]).operating.scroll){a=!1;break}if((s.bookId.scroll||e.prior)&&s.bookId.scroll!==e.id){a=!1;break}s.operating.scroll=!0;var h=s.queue.scroll[0];if(h){var g=h.el.getBoundingClientRect();if("b2t"===this.direction){if(g.bottom>this.containerPos.bottom){a=!1,s.operating.scroll=!1;break}}else if(g.right>this.containerPos.right){a=!1,s.operating.scroll=!1;break}var v,m=void 0,y=void 0,b=void 0,x=void 0;if("b2t"===this.direction?(y=(g.top-this.containerPos.top+g.height)/(m=(this.containerPos.height+g.height)/h.duration),b=this.containerPos.height,x=(this.containerPos.height+e.height)/e.duration):(y=(g.left-this.containerPos.left+g.width)/(m=(this.containerPos.width+g.width)/h.duration),b=this.containerPos.width,x=(this.containerPos.width+e.width)/e.duration),v=b/x,t.config.bOffset||(t.config.bOffset=0),m<x&&y+t.config.bOffset>v){a=!1,s.operating.scroll=!1;break}}s.operating.scroll=!1}if(a){l=d;break}}else if("top"===e.mode)for(var w=0,_=n.length-i;w<=_;w++){a=!0;for(var k=w;k<w+i;k++){if(k>Math.floor(n.length/2)){a=!1;break}if((s=n[k]).operating[e.mode]){a=!1;break}if((s.bookId[e.mode]||e.prior)&&s.bookId[e.mode]!==e.id){a=!1;break}if(s.operating[e.mode]=!0,s.queue[e.mode].length>0){a=!1,s.operating[e.mode]=!1;break}s.operating[e.mode]=!1}if(a){l=w;break}}else if("bottom"===e.mode)for(var E=n.length-i;E>=0;E--){a=!0;for(var C=E;C<E+i;C++){if(C<=Math.floor(n.length/2)){a=!1;break}if((s=n[C]).operating[e.mode]){a=!1;break}if((s.bookId[e.mode]||e.prior)&&s.bookId[e.mode]!==e.id){a=!1;break}if(s.operating[e.mode]=!0,s.queue[e.mode].length>0){a=!1,s.operating[e.mode]=!1;break}s.operating[e.mode]=!1}if(a){l=E;break}}if(-1!==l){for(var S=l,P=l+i;S<P;S++)(s=n[S]).operating[e.mode]=!0,s.queue[e.mode].unshift(e),e.prior&&delete s.bookId[e.mode],s.operating[e.mode]=!1;return e.prior&&(delete e.bookChannelId,t.bulletBtn.main.data.some((function(t){return t.id===e.id&&(delete t.bookChannelId,!0)}))),e.channel_id=[l,i],"b2t"===this.direction?(e.top=l*r,this.danmu.config.area&&this.danmu.config.area.start&&(e.top+=this.containerWidth*this.danmu.config.area.start)):(e.top=l*o,this.danmu.config.area&&this.danmu.config.area.start&&(e.top+=this.containerHeight*this.danmu.config.area.start)),{result:e,message:"success"}}if(e.prior)if(e.bookChannelId)t.bulletBtn.main.data.some((function(t){return t.id===e.id&&(t.start+=2e3,!0)}));else{l=-1;for(var j=0,T=n.length-i;j<=T;j++){a=!0;for(var M=j;M<j+i;M++)if(n[M].bookId[e.mode]){a=!1;break}if(a){l=j;break}}if(-1!==l){for(var O=l;O<l+i;O++)n[O].bookId[e.mode]=e.id;t.bulletBtn.main.data.some((function(t){return t.id===e.id&&(t.start+=2e3,t.bookChannelId=[l,i],!0)}))}}return{result:!1,message:"no surplus will right"}}},{key:"removeBullet",value:function(e){for(var t=this.channels,n=e.channel_id,o=void 0,r=n[0],i=n[0]+n[1];r<i;r++)if(o=t[r]){o.operating[e.mode]=!0;var a=-1;o.queue[e.mode].some((function(t,n){return t.id===e.id&&(a=n,!0)})),a>-1&&o.queue[e.mode].splice(a,1),o.operating[e.mode]=!1}}},{key:"resetArea",value:function(){var e=this.danmu.container,t=this,n=e.getBoundingClientRect();t.width=n.width,t.height=n.height,t.danmu.config.area&&t.danmu.config.area.start>=0&&t.danmu.config.area.end>=t.danmu.config.area.start&&("b2t"===t.direction?t.width=t.width*(t.danmu.config.area.end-t.danmu.config.area.start):t.height=t.height*(t.danmu.config.area.end-t.danmu.config.area.start)),t.container=e;var o,r=/mobile/gi.test(navigator.userAgent)?10:12;o="b2t"===t.direction?Math.floor(t.width/r):Math.floor(t.height/r);for(var i=[],a=0;a<o;a++)i[a]={id:a,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}};if(t.channels&&t.channels.length<=i.length){for(var s=function(e){i[e]={id:e,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}},["scroll","top"].forEach((function(n){t.channels[e].queue[n].forEach((function(o){o.el&&(i[e].queue[n].push(o),o.resized||(o.pauseMove(t.containerPos,!1),o.startMove(t.containerPos),o.resized=!0))}))})),t.channels[e].queue.bottom.forEach((function(n){if(n.el){if(i[e+i.length-t.channels.length].queue.bottom.push(n),n.channel_id[0]+n.channel_id[1]-1===e){var o=[].concat(n.channel_id);n.channel_id=[o[0]-t.channels.length+i.length,o[1]],n.top=n.channel_id[0]*r,t.danmu.config.area&&t.danmu.config.area.start&&(n.top+=t.containerHeight*t.danmu.config.area.start),n.topInit()}n.resized||(n.pauseMove(t.containerPos,!1),n.startMove(t.containerPos),n.resized=!0)}}))},l=0;l<t.channels.length;l++)s(l);for(var c=function(e){["scroll","top","bottom"].forEach((function(t){i[e].queue[t].forEach((function(e){e.resized=!1}))}))},u=0;u<i.length;u++)c(u);t.channels=i,"b2t"===t.direction?t.channelWidth=r:t.channelHeight=r}else if(t.channels&&t.channels.length>i.length){for(var d=function(e){i[e]={id:e,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}},["scroll","top","bottom"].forEach((function(n){if("top"===n&&e>Math.floor(i.length/2));else if("bottom"===n&&e<=Math.floor(i.length/2));else{var o="bottom"===n?e-i.length+t.channels.length:e;t.channels[o].queue[n].forEach((function(a,s){if(a.el){if(i[e].queue[n].push(a),"bottom"===n&&a.channel_id[0]+a.channel_id[1]-1===o){var l=[].concat(a.channel_id);a.channel_id=[l[0]-t.channels.length+i.length,l[1]],a.top=a.channel_id[0]*r,t.danmu.config.area&&t.danmu.config.area.start&&(a.top+=t.containerHeight*t.danmu.config.area.start),a.topInit()}a.resized||(a.pauseMove(t.containerPos,!1),a.startMove(t.containerPos),a.resized=!0)}t.channels[o].queue[n].splice(s,1)}))}}))},p=0;p<i.length;p++)d(p);for(var f=function(e){["scroll","top","bottom"].forEach((function(t){i[e].queue[t].forEach((function(e){e.resized=!1}))}))},h=0;h<i.length;h++)f(h);t.channels=i,"b2t"===t.direction?t.channelWidth=r:t.channelHeight=r}}},{key:"reset",value:function(){var e=this.danmu.container,t=this;t.channels&&t.channels.length>0&&["scroll","top","bottom"].forEach((function(e){for(var n=0;n<t.channels.length;n++)t.channels[n].queue[e].forEach((function(e){e.pauseMove(t.containerPos),e.remove()}))})),setTimeout((function(){var n=e.getBoundingClientRect();t.width=n.width,t.height=n.height,t.danmu.config.area&&t.danmu.config.area.start>=0&&t.danmu.config.area.end>=t.danmu.config.area.start&&("b2t"===t.direction?t.width=t.width*(t.danmu.config.area.end-t.danmu.config.area.start):t.height=t.height*(t.danmu.config.area.end-t.danmu.config.area.start)),t.container=e;var o,r=/mobile/gi.test(navigator.userAgent)?10:12;o="b2t"===t.direction?Math.floor(t.width/r):Math.floor(t.height/r);for(var i=[],a=0;a<o;a++)i[a]={id:a,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}};t.channels=i,"b2t"===t.direction?t.channelWidth=r:t.channelHeight=r}),200)}},{key:"resetWithCb",value:function(e,t){var n=this.danmu.container,o=this;o.channels&&o.channels.length>0&&["scroll","top","bottom"].forEach((function(e){for(var t=0;t<o.channels.length;t++)o.channels[t].queue[e].forEach((function(e){e.pauseMove(o.containerPos),e.remove()}))}));var r=n.getBoundingClientRect();o.width=r.width,o.height=r.height,o.danmu.config.area&&o.danmu.config.area.start>=0&&o.danmu.config.area.end>=o.danmu.config.area.start&&("b2t"===o.direction?o.width=o.width*(o.danmu.config.area.end-o.danmu.config.area.start):o.height=o.height*(o.danmu.config.area.end-o.danmu.config.area.start)),o.container=n;var i,a=/mobile/gi.test(navigator.userAgent)?10:12;i="b2t"===o.direction?Math.floor(o.width/a):Math.floor(o.height/a);for(var s=[],l=0;l<i;l++)s[l]={id:l,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}};o.channels=s,o.channelHeight=a,e&&e(!0,t)}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=(o=n(0))&&o.__esModule?o:{default:o},a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.danmu=t,this.duration=n.duration,this.id=n.id,this.container=t.container,this.start=n.start,this.prior=n.prior,this.color=n.color,this.bookChannelId=n.bookChannelId,this.direction=t.direction;var o=this;this.danmu.on("changeDirection",(function(e){o.direction=e}));var r=void 0;if(this.domObj=i.default.domObj,n.el&&1===n.el.nodeType)(r=this.domObj.use()).appendChild(i.default.copyDom(n.el));else if((r=this.domObj.use()).textContent=n.txt,n.style){var a=n.style;Object.keys(a).forEach((function(e){r.style[e]=a[e]}))}"top"===n.mode||"bottom"===n.mode?this.mode=n.mode:this.mode="scroll",this.el=r,this.status="waiting";var s=this.container.getBoundingClientRect();this.el.style.left=s.width+"px"}return r(e,[{key:"attach",value:function(){this.container.appendChild(this.el),this.elPos=this.el.getBoundingClientRect(),"b2t"===this.direction?(this.width=this.elPos.height,this.height=this.elPos.width):(this.width=this.elPos.width,this.height=this.elPos.height)}},{key:"detach",value:function(){this.container&&this.el&&(this.domObj.unuse(this.el),this.container.removeChild(this.el));var e=this;this.danmu.off("changeDirection",(function(t){e.direction=t})),this.el=null}},{key:"topInit",value:function(){if("b2t"===this.direction){var e=this.container.getBoundingClientRect();this.el.style.transformOrigin="left top",this.el.style.transform="translateX(-"+this.top+"px) translateY("+e.height+"px) translateZ(0px) rotate(90deg)",this.el.style.transition="transform 0s linear 0s"}else this.el.style.top=this.top+"px"}},{key:"pauseMove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("paused"!==this.status&&(this.status="paused",clearTimeout(this.removeTimer),this.el))if(this.el.style.willChange="auto","scroll"===this.mode){if(t){var n=((new Date).getTime()-this.moveTime)/1e3*this.moveV,o=0;o=this.moveMoreS-n>=0?"b2t"===this.direction?(this.moveMoreS-n)/this.moveContainerHeight*e.height:(this.moveMoreS-n)/this.moveContainerWidth*e.width:this.moveMoreS-n,"b2t"===this.direction?this.el.style.transform="translateX(-"+this.top+"px) translateY("+o+"px) translateZ(0px) rotate(90deg)":this.el.style.left=o+"px"}else"b2t"===this.direction?this.el.style.transform="translateX(-"+this.top+"px) translateY("+(this.el.getBoundingClientRect().top-e.top)+"px) translateZ(0px) rotate(90deg)":this.el.style.left=this.el.getBoundingClientRect().left-e.left+"px";"b2t"===this.direction?this.el.style.transition="transform 0s linear 0s":(this.el.style.transform="translateX(0px) translateY(0px) translateZ(0px)",this.el.style.transition="transform 0s linear 0s")}else this.pastDuration&&this.startTime?this.pastDuration=this.pastDuration+(new Date).getTime()-this.startTime:this.pastDuration=1}},{key:"startMove",value:function(e){var t=this;if(this.el&&"start"!==this.status)if(this.status="start",this.el.style.willChange="transform","scroll"===this.mode)if("b2t"===this.direction){this.moveV=(e.height+this.height)/this.duration*1e3;var n=(t.el.getBoundingClientRect().bottom-e.top)/this.moveV;this.el.style.transition="transform "+n+"s linear 0s",setTimeout((function(){t.el&&(t.el.style.transform="translateX(-"+t.top+"px) translateY(-"+t.height+"px) translateZ(0px) rotate(90deg)",t.moveTime=(new Date).getTime(),t.moveMoreS=t.el.getBoundingClientRect().top-e.top,t.moveContainerHeight=e.height,t.removeTimer=setTimeout(i,1e3*n))}),20)}else{this.moveV=(e.width+this.width)/this.duration*1e3;var o=(t.el.getBoundingClientRect().right-e.left)/this.moveV;this.el.style.transition="transform "+o+"s linear 0s",setTimeout((function(){t.el&&(t.el.style.transform="translateX(-"+(t.el.getBoundingClientRect().right-e.left)+"px) translateY(0px) translateZ(0px)",t.moveTime=(new Date).getTime(),t.moveMoreS=t.el.getBoundingClientRect().left-e.left,t.moveContainerWidth=e.width,t.removeTimer=setTimeout(i,1e3*o))}),20)}else{this.el.style.left="50%",this.el.style.margin="0 0 0 -"+this.width/2+"px",this.pastDuration||(this.pastDuration=1);var r=this.duration>=this.pastDuration?this.duration-this.pastDuration:0;this.removeTimer=setTimeout(i,r),this.startTime=(new Date).getTime()}function i(){if(t.el)if("scroll"===t.mode){var e=t.danmu.container.getBoundingClientRect(),n=t.el.getBoundingClientRect();"b2t"===t.direction?n&&n.bottom<=e.top+100?(t.status="end",t.remove()):(t.pauseMove(e),t.startMove(e)):n&&n.right<=e.left+100?(t.status="end",t.remove()):(t.pauseMove(e),t.startMove(e))}else t.status="end",t.remove()}}},{key:"remove",value:function(){var e=this;this.removeTimer&&clearTimeout(this.removeTimer),e.el&&e.el.parentNode&&(e.el.style.willChange="auto",this.danmu.off("changeDirection",(function(t){e.direction=t})),this.domObj.unuse(e.el),e.el.parentNode.removeChild(e.el),e.el=null,e.danmu.emit("bullet_remove",{bullet:e}))}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){var o=n(27);"string"==typeof o&&(o=[[e.i,o,""]]),n(29)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#ffffff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[o].concat(a).concat([i]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),l=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,d=[],p=n(30);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function g(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=a(e.insertAt)||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),g(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=m(t)),o=_.bind(null,n,a,!1),r=_.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),g(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=p(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),o=function(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=("undefined"==typeof document?"undefined":a(document)))throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==a(t.attrs)?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return f(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}for(e&&f(h(e,t),t),r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function _(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}}])},"object"==a(t)&&"object"==a(e)?e.exports=i():(o=[],void 0===(r="function"==typeof(n=i)?n.apply(t,o):n)||(e.exports=r))}).call(this,n(/*! ./../../webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(e))},"./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r,i;"function"==typeof Symbol&&Symbol.iterator;r=[],void 0===(i="function"==typeof(o=function(){return function e(t,n,o){var r,i,a=window,s="application/octet-stream",l=o||s,c=t,u=!n&&!o&&c,d=document.createElement("a"),p=function(e){return String(e)},f=a.Blob||a.MozBlob||a.WebKitBlob||p,h=n||"download";if(f=f.call?f.bind(a):Blob,"true"===String(this)&&(l=(c=[c,l])[0],c=c[1]),u&&u.length<2048&&(h=u.split("/").pop().split("?")[0],d.href=u,-1!==d.href.indexOf(u))){var g=new XMLHttpRequest;return g.open("GET",u,!0),g.responseType="blob",g.onload=function(t){e(t.target.response,h,s)},setTimeout((function(){g.send()}),0),g}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)){if(!(c.length>2096103.424&&f!==p))return navigator.msSaveBlob?navigator.msSaveBlob(b(c),h):x(c);l=(c=b(c)).type||s}else if(/([\x80-\xff])/.test(c)){for(var v=0,m=new Uint8Array(c.length),y=m.length;v<y;++v)m[v]=c.charCodeAt(v);c=new f([m],{type:l})}function b(e){for(var t=e.split(/[:;,]/),n=t[1],o=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),r=o.length,i=0,a=new Uint8Array(r);i<r;++i)a[i]=o.charCodeAt(i);return new f([a],{type:n})}function x(e,t){if("download"in d)return d.href=e,d.setAttribute("download",h),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout((function(){d.click(),document.body.removeChild(d),!0===t&&setTimeout((function(){a.URL.revokeObjectURL(d.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=c instanceof f?c:new f([c],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(r,h);if(a.URL)x(a.URL.createObjectURL(r),!0);else{if("string"==typeof r||r.constructor===p)try{return x("data:"+l+";base64,"+a.btoa(r))}catch(e){return x("data:"+l+","+encodeURIComponent(r))}(i=new FileReader).onload=function(e){x(this.result)},i.readAsDataURL(r)}return!0}})?o.apply(t,r):o)||(e.exports=i)},"./node_modules/draggabilly/draggabilly.js":
/*!*************************************************!*\
  !*** ./node_modules/draggabilly/draggabilly.js ***!
  \*************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r;"function"==typeof Symbol&&Symbol.iterator;
/*!
 * Draggabilly v2.2.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */
!function(i,a){o=[n(/*! get-size/get-size */"./node_modules/get-size/get-size.js"),n(/*! unidragger/unidragger */"./node_modules/unidragger/unidragger.js")],void 0===(r=function(e,t){return function(e,t,n){function o(e,t){for(var n in t)e[n]=t[n];return e}var r=e.jQuery;function i(e,t){this.element="string"==typeof e?document.querySelector(e):e,r&&(this.$element=r(this.element)),this.options=o({},this.constructor.defaults),this.option(t),this._create()}var a=i.prototype=Object.create(n.prototype);i.defaults={},a.option=function(e){o(this.options,e)};var s={relative:!0,absolute:!0,fixed:!0};function l(e,t,n){return n=n||"round",t?Math[n](e/t)*t:e}a._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=o({},this.position);var e=getComputedStyle(this.element);s[e.position]||(this.element.style.position="relative"),this.on("pointerDown",this.onPointerDown),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},a.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},a.dispatchEvent=function(e,t,n){var o=[t].concat(n);this.emitEvent(e,o),this.dispatchJQueryEvent(e,t,n)},a.dispatchJQueryEvent=function(t,n,o){var r=e.jQuery;if(r&&this.$element){var i=r.Event(n);i.type=t,this.$element.trigger(i,o)}},a._getPosition=function(){var e=getComputedStyle(this.element),t=this._getPositionCoord(e.left,"width"),n=this._getPositionCoord(e.top,"height");this.position.x=isNaN(t)?0:t,this.position.y=isNaN(n)?0:n,this._addTransformPosition(e)},a._getPositionCoord=function(e,n){if(-1!=e.indexOf("%")){var o=t(this.element.parentNode);return o?parseFloat(e)/100*o[n]:0}return parseInt(e,10)},a._addTransformPosition=function(e){var t=e.transform;if(0===t.indexOf("matrix")){var n=t.split(","),o=0===t.indexOf("matrix3d")?12:4,r=parseInt(n[o],10),i=parseInt(n[o+1],10);this.position.x+=r,this.position.y+=i}},a.onPointerDown=function(e,t){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",e,[t])},a.dragStart=function(e,t){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",e,[t]),this.animate())},a.measureContainment=function(){var e=this.getContainer();if(e){var n=t(this.element),o=t(e),r=this.element.getBoundingClientRect(),i=e.getBoundingClientRect(),a=o.borderLeftWidth+o.borderRightWidth,s=o.borderTopWidth+o.borderBottomWidth,l=this.relativeStartPosition={x:r.left-(i.left+o.borderLeftWidth),y:r.top-(i.top+o.borderTopWidth)};this.containSize={width:o.width-a-l.x-n.width,height:o.height-s-l.y-n.height}}},a.getContainer=function(){var e=this.options.containment;if(e)return e instanceof HTMLElement?e:"string"==typeof e?document.querySelector(e):this.element.parentNode},a.onPointerMove=function(e,t,n){this.dispatchJQueryEvent("pointerMove",e,[t,n])},a.dragMove=function(e,t,n){if(this.isEnabled){var o=n.x,r=n.y,i=this.options.grid,a=i&&i[0],s=i&&i[1];o=l(o,a),r=l(r,s),o=this.containDrag("x",o,a),r=this.containDrag("y",r,s),o="y"==this.options.axis?0:o,r="x"==this.options.axis?0:r,this.position.x=this.startPosition.x+o,this.position.y=this.startPosition.y+r,this.dragPoint.x=o,this.dragPoint.y=r,this.dispatchEvent("dragMove",e,[t,n])}},a.containDrag=function(e,t,n){if(!this.options.containment)return t;var o="x"==e?"width":"height",r=l(-this.relativeStartPosition[e],n,"ceil"),i=this.containSize[o];return i=l(i,n,"floor"),Math.max(r,Math.min(i,t))},a.onPointerUp=function(e,t){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",e,[t])},a.dragEnd=function(e,t){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",e,[t]))},a.animate=function(){if(this.isDragging){this.positionDrag();var e=this;requestAnimationFrame((function(){e.animate()}))}},a.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},a.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},a.staticClick=function(e,t){this.dispatchEvent("staticClick",e,[t])},a.setPosition=function(e,t){this.position.x=e,this.position.y=t,this.setLeftTop()},a.enable=function(){this.isEnabled=!0},a.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},a.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},a._init=function(){},r&&r.bridget&&r.bridget("draggabilly",i);return i}(i,e,t)}.apply(t,o))||(e.exports=r)}(window)},"./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(){}},"./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=n(/*! ./is-implemented */"./node_modules/es5-ext/object/assign/is-implemented.js")()?Object.assign:n(/*! ./shim */"./node_modules/es5-ext/object/assign/shim.js")},"./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},"./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ../keys */"./node_modules/es5-ext/object/keys/index.js"),r=n(/*! ../valid-value */"./node_modules/es5-ext/object/valid-value.js"),i=Math.max;e.exports=function(e,t){var n,a,s,l=i(arguments.length,2);for(e=Object(r(e)),s=function(o){try{e[o]=t[o]}catch(e){n||(n=e)}},a=1;a<l;++a)t=arguments[a],o(t).forEach(s);if(void 0!==n)throw n;return e}},"./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ../function/noop */"./node_modules/es5-ext/function/noop.js")();e.exports=function(e){return e!==o&&null!==e}},"./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=n(/*! ./is-implemented */"./node_modules/es5-ext/object/keys/is-implemented.js")()?Object.keys:n(/*! ./shim */"./node_modules/es5-ext/object/keys/shim.js")},"./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},"./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ../is-value */"./node_modules/es5-ext/object/is-value.js"),r=Object.keys;e.exports=function(e){return r(o(e)?Object(e):e)}},"./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ./is-value */"./node_modules/es5-ext/object/is-value.js"),r=Array.prototype.forEach,i=Object.create,a=function(e,t){var n;for(n in e)t[n]=e[n]};e.exports=function(e){var t=i(null);return r.call(arguments,(function(e){o(e)&&a(Object(e),t)})),t}},"./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},"./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ./is-value */"./node_modules/es5-ext/object/is-value.js");e.exports=function(e){if(!o(e))throw new TypeError("Cannot use null or undefined");return e}},"./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=n(/*! ./is-implemented */"./node_modules/es5-ext/string/#/contains/is-implemented.js")()?String.prototype.contains:n(/*! ./shim */"./node_modules/es5-ext/string/#/contains/shim.js")},"./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o="razdwatrzy";e.exports=function(){return"function"==typeof o.contains&&(!0===o.contains("dwa")&&!1===o.contains("foo"))}},"./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=String.prototype.indexOf;e.exports=function(e){return o.call(this,e,arguments[1])>-1}},"./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r;"function"==typeof Symbol&&Symbol.iterator;"undefined"!=typeof window&&window,void 0===(r="function"==typeof(o=function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},o=n[e]=n[e]||[];return-1==o.indexOf(t)&&o.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var o=n.indexOf(t);return-1!=o&&n.splice(o,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var o=this._onceEvents&&this._onceEvents[e],r=0;r<n.length;r++){var i=n[r];o&&o[i]&&(this.off(e,i),delete o[i]),i.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})?o.call(t,n,t,e):o)||(e.exports=r)},"./node_modules/event-emitter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/event-emitter/index.js ***!
  \*********************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r,i,a,s,l,c,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(/*! d */"./node_modules/d/index.js"),p=n(/*! es5-ext/object/valid-callable */"./node_modules/es5-ext/object/valid-callable.js"),f=Function.prototype.apply,h=Function.prototype.call,g=Object.create,v=Object.defineProperty,m=Object.defineProperties,y=Object.prototype.hasOwnProperty,b={configurable:!0,enumerable:!1,writable:!0};r=function(e,t){var n,r;return p(t),r=this,o.call(this,e,n=function(){i.call(r,e,n),f.call(t,this,arguments)}),n.__eeOnceListener__=t,this},s={on:o=function(e,t){var n;return p(t),y.call(this,"__ee__")?n=this.__ee__:(n=b.value=g(null),v(this,"__ee__",b),b.value=null),n[e]?"object"===u(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:i=function(e,t){var n,o,r,i;if(p(t),!y.call(this,"__ee__"))return this;if(!(n=this.__ee__)[e])return this;if("object"===(void 0===(o=n[e])?"undefined":u(o)))for(i=0;r=o[i];++i)r!==t&&r.__eeOnceListener__!==t||(2===o.length?n[e]=o[i?0:1]:o.splice(i,1));else o!==t&&o.__eeOnceListener__!==t||delete n[e];return this},emit:a=function(e){var t,n,o,r,i;if(y.call(this,"__ee__")&&(r=this.__ee__[e]))if("object"===(void 0===r?"undefined":u(r))){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];for(r=r.slice(),t=0;o=r[t];++t)f.call(o,this,i)}else switch(arguments.length){case 1:h.call(r,this);break;case 2:h.call(r,this,arguments[1]);break;case 3:h.call(r,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];f.call(r,this,i)}}},l={on:d(o),once:d(r),off:d(i),emit:d(a)},c=m({},l),e.exports=t=function(e){return null==e?g(c):m(Object(e),l)},t.methods=s},"./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window,void 0===(r="function"==typeof(o=function(){function e(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}var t="undefined"==typeof console?function(){}:function(e){console.error(e)},n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],o=n.length;function r(e){var n=getComputedStyle(e);return n||t("Style returned "+n+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),n}var a,s=!1;function l(t){if(function(){if(!s){s=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(t);var o=r(t);a=200==Math.round(e(o.width)),l.isBoxSizeOuter=a,n.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==(void 0===t?"undefined":i(t))&&t.nodeType){var c=r(t);if("none"==c.display)return function(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;t<o;t++)e[n[t]]=0;return e}();var u={};u.width=t.offsetWidth,u.height=t.offsetHeight;for(var d=u.isBorderBox="border-box"==c.boxSizing,p=0;p<o;p++){var f=n[p],h=c[f],g=parseFloat(h);u[f]=isNaN(g)?0:g}var v=u.paddingLeft+u.paddingRight,m=u.paddingTop+u.paddingBottom,y=u.marginLeft+u.marginRight,b=u.marginTop+u.marginBottom,x=u.borderLeftWidth+u.borderRightWidth,w=u.borderTopWidth+u.borderBottomWidth,_=d&&a,k=e(c.width);!1!==k&&(u.width=k+(_?0:v+x));var E=e(c.height);return!1!==E&&(u.height=E+(_?0:m+w)),u.innerWidth=u.width-(v+x),u.innerHeight=u.height-(m+w),u.outerWidth=u.width+y,u.outerHeight=u.height+b,u}}return l})?o.call(t,n,t,e):o)||(e.exports=r)},"./node_modules/pasition/dist/pasition.js":
/*!************************************************!*\
  !*** ./node_modules/pasition/dist/pasition.js ***!
  \************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r,i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t=2*Math.PI,n=function(e,t,n,o,r,i,a){var s=e.x,l=e.y;return{x:o*(s*=t)-r*(l*=n)+i,y:r*s+o*l+a}},o=function(e,t){var n=4/3*Math.tan(t/4),o=Math.cos(e),r=Math.sin(e),i=Math.cos(e+t),a=Math.sin(e+t);return[{x:o-r*n,y:r+o*n},{x:i+a*n,y:a-i*n},{x:i,y:a}]},r=function(e,t,n,o){var r=e*o-t*n<0?-1:1,i=(e*n+t*o)/(Math.sqrt(e*e+t*t)*Math.sqrt(e*e+t*t));return i>1&&(i=1),i<-1&&(i=-1),r*Math.acos(i)},i=function(i){var a=i.px,s=i.py,l=i.cx,c=i.cy,u=i.rx,d=i.ry,p=i.xAxisRotation,f=void 0===p?0:p,h=i.largeArcFlag,g=void 0===h?0:h,v=i.sweepFlag,m=void 0===v?0:v,y=[];if(0===u||0===d)return[];var b=Math.sin(f*t/360),x=Math.cos(f*t/360),w=x*(a-l)/2+b*(s-c)/2,_=-b*(a-l)/2+x*(s-c)/2;if(0===w&&0===_)return[];u=Math.abs(u),d=Math.abs(d);var k=Math.pow(w,2)/Math.pow(u,2)+Math.pow(_,2)/Math.pow(d,2);k>1&&(u*=Math.sqrt(k),d*=Math.sqrt(k));var E=function(e,n,o,i,a,s,l,c,u,d,p,f){var h=Math.pow(a,2),g=Math.pow(s,2),v=Math.pow(p,2),m=Math.pow(f,2),y=h*g-h*m-g*v;y<0&&(y=0),y/=h*m+g*v;var b=(y=Math.sqrt(y)*(l===c?-1:1))*a/s*f,x=y*-s/a*p,w=d*b-u*x+(e+o)/2,_=u*b+d*x+(n+i)/2,k=(p-b)/a,E=(f-x)/s,C=(-p-b)/a,S=(-f-x)/s,P=r(1,0,k,E),j=r(k,E,C,S);return 0===c&&j>0&&(j-=t),1===c&&j<0&&(j+=t),[w,_,P,j]}(a,s,l,c,u,d,g,m,b,x,w,_),C=e(E,4),S=C[0],P=C[1],j=C[2],T=C[3],M=Math.max(Math.ceil(Math.abs(T)/(t/4)),1);T/=M;for(var O=0;O<M;O++)y.push(o(j,T)),j+=T;return y.map((function(e){var t=n(e[0],u,d,x,b,S,P),o=t.x,r=t.y,i=n(e[1],u,d,x,b,S,P),a=i.x,s=i.y,l=n(e[2],u,d,x,b,S,P);return{x1:o,y1:r,x2:a,y2:s,x:l.x,y:l.y}}))},a={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},s=/([astvzqmhlc])([^astvzqmhlc]*)/gi,l=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function c(e){var t=e[0][0],n=e[0][1],o=t,r=n;return e.forEach((function(e){var i=e[0],a=e[2],s=e[4],l=e[6],c=e[1],u=e[3],d=e[5],p=e[7];t=Math.min(t,i,a,s,l),n=Math.min(n,c,u,d,p),o=Math.max(o,i,a,s,l),r=Math.max(r,c,u,d,p)})),[t,n,o,r]}function u(e,t){var n=function(e){for(var t=[],n=0;n<e;n++){for(var o=[],r=0;r<e;r++){var i=r+n;i>e-1&&(i-=e),o[i]=r}t.push(o)}return t}(e.length),o=[];n.forEach((function(n){var r=0,i=0;n.forEach((function(n){var o,a,s,l,c,u,d,p,f,h,g,v,m,y,b,x,w,_;r+=(o=e[n],a=t[i++],s=o[0],l=o[2],c=o[4],u=o[6],d=o[1],p=o[3],f=o[5],h=o[7],g=a[0],v=a[2],m=a[4],y=a[6],b=a[1],x=a[3],w=a[5],_=a[7],Math.sqrt(Math.pow(g-s,2)+Math.pow(b-d,2))+Math.sqrt(Math.pow(v-l,2)+Math.pow(x-p,2))+Math.sqrt(Math.pow(m-c,2)+Math.pow(w-f,2))+Math.sqrt(Math.pow(y-u,2)+Math.pow(_-h,2)))})),o.push({index:n,distance:r})})),o.sort((function(e,t){return e.distance-t.distance}));var r=[];return o[0].index.forEach((function(t){r.push(e[t])})),r}function d(e,t){var n=function(e){for(var t=[],n=0;n<e;n++)t.push(n);return o=[],r=[],function e(t){var n,i;for(n=0;n<t.length;n++)i=t.splice(n,1)[0],r.push(i),0==t.length&&o.push(r.slice()),e(t),t.splice(n,0,i),r.pop();return o}(t);var o,r}(e.length),o=[];n.forEach((function(n){var r=0;n.forEach((function(n){var o,i;r+=(o=c(e[n]),i=c(t[n]),Math.sqrt(Math.pow(o[0]-i[0],2)+Math.pow(o[1]-i[1],2))+Math.sqrt(Math.pow(o[2]-i[2],2)+Math.pow(o[3]-i[3],2)))})),o.push({index:n,distance:r})})),o.sort((function(e,t){return e.distance-t.distance}));var r=[];return o[0].index.forEach((function(t){r.push(e[t])})),r}var p={};function f(e,t,n,o,r,i,a,s,l,c){var u=(n-e)*l+e,d=(o-t)*l+t,p=(r-n)*l+n,f=(i-o)*l+o,h=(p-u)*l+u,g=(f-d)*l+d,v=(((a-r)*l+r-p)*l+p-h)*l+h,m=(((s-i)*l+i-f)*l+f-g)*l+g;return c?[v,m,h,g,u,d,e,t]:[e,t,u,d,h,g,v,m]}function h(e,t){for(var n=function(t){var n=e[e.length-1],o=[];n.forEach((function(e){o.push(e.slice(0))})),e.push(o)},o=0;o<t;o++)n()}return p.parser=function(e){var t=[];return e.replace(s,(function(e,n,o){var r=n.toLowerCase();for(o=function(e){var t=e.match(l);return t?t.map(Number):[]}(o),"m"==r&&o.length>2&&(t.push([n].concat(o.splice(0,2))),r="l",n="m"==n?"l":"L");;){if(o.length==a[r])return o.unshift(n),t.push(o);if(o.length<a[r])throw new Error("malformed path data");t.push([n].concat(o.splice(0,a[r])))}})),t},p.lerpCurve=function(e,t,n){return p.lerpPoints(e[0],e[1],t[0],t[1],n).concat(p.lerpPoints(e[2],e[3],t[2],t[3],n)).concat(p.lerpPoints(e[4],e[5],t[4],t[5],n)).concat(p.lerpPoints(e[6],e[7],t[6],t[7],n))},p.lerpPoints=function(e,t,n,o,r){return[e+(n-e)*r,t+(o-t)*r]},p.q2b=function(e,t,n,o,r,i){return[e,t,(e+2*n)/3,(t+2*o)/3,(r+2*n)/3,(i+2*o)/3,r,i]},p.path2shapes=function(e){for(var t=p.parser(e),n=0,o=0,r=0,a=t.length,s=[],l=null,c=void 0,u=void 0,d=void 0,f=void 0,h=void 0,g=void 0,v=void 0;r<a;r++){var m=t[r],y=m[0],b=t[r-1];switch(y){case"m":s[h=s.length]=[],l=s[h],n+=m[1],o+=m[2];break;case"M":s[h=s.length]=[],l=s[h],n=m[1],o=m[2];break;case"l":l.push([n,o,n,o,n,o,n+m[1],o+m[2]]),n+=m[1],o+=m[2];break;case"L":l.push([n,o,m[1],m[2],m[1],m[2],m[1],m[2]]),n=m[1],o=m[2];break;case"h":l.push([n,o,n,o,n,o,n+m[1],o]),n+=m[1];break;case"H":l.push([n,o,m[1],o,m[1],o,m[1],o]),n=m[1];break;case"v":l.push([n,o,n,o,n,o,n,o+m[1]]),o+=m[1];break;case"V":l.push([n,o,n,m[1],n,m[1],n,m[1]]),o=m[1];break;case"C":l.push([n,o,m[1],m[2],m[3],m[4],m[5],m[6]]),n=m[5],o=m[6];break;case"S":"C"===b[0]||"c"===b[0]?l.push([n,o,n+b[5]-b[3],o+b[6]-b[4],m[1],m[2],m[3],m[4]]):"S"!==b[0]&&"s"!==b[0]||l.push([n,o,n+b[3]-b[1],o+b[4]-b[2],m[1],m[2],m[3],m[4]]),n=m[3],o=m[4];break;case"c":l.push([n,o,n+m[1],o+m[2],n+m[3],o+m[4],n+m[5],o+m[6]]),n+=m[5],o+=m[6];break;case"s":"C"===b[0]||"c"===b[0]?l.push([n,o,n+b[5]-b[3],o+b[6]-b[4],n+m[1],o+m[2],n+m[3],o+m[4]]):"S"!==b[0]&&"s"!==b[0]||l.push([n,o,n+b[3]-b[1],o+b[4]-b[2],n+m[1],o+m[2],n+m[3],o+m[4]]),n+=m[3],o+=m[4];break;case"a":v=(g=i({rx:m[1],ry:m[2],px:n,py:o,xAxisRotation:m[3],largeArcFlag:m[4],sweepFlag:m[5],cx:n+m[6],cy:o+m[7]}))[g.length-1],g.forEach((function(e,t){0===t?l.push([n,o,e.x1,e.y1,e.x2,e.y2,e.x,e.y]):l.push([g[t-1].x,g[t-1].y,e.x1,e.y1,e.x2,e.y2,e.x,e.y])})),n=v.x,o=v.y;break;case"A":v=(g=i({rx:m[1],ry:m[2],px:n,py:o,xAxisRotation:m[3],largeArcFlag:m[4],sweepFlag:m[5],cx:m[6],cy:m[7]}))[g.length-1],g.forEach((function(e,t){0===t?l.push([n,o,e.x1,e.y1,e.x2,e.y2,e.x,e.y]):l.push([g[t-1].x,g[t-1].y,e.x1,e.y1,e.x2,e.y2,e.x,e.y])})),n=v.x,o=v.y;break;case"Q":l.push(p.q2b(n,o,m[1],m[2],m[3],m[4])),n=m[3],o=m[4];break;case"q":l.push(p.q2b(n,o,n+m[1],o+m[2],m[3]+n,m[4]+o)),n+=m[3],o+=m[4];break;case"T":"Q"===b[0]||"q"===b[0]?(d=n+b[3]-b[1],f=o+b[4]-b[2],l.push(p.q2b(n,o,d,f,m[1],m[2]))):"T"!==b[0]&&"t"!==b[0]||(l.push(p.q2b(n,o,n+n-d,o+o-f,m[1],m[2])),d=n+n-d,f=o+o-f),n=m[1],o=m[2];break;case"t":"Q"===b[0]||"q"===b[0]?(d=n+b[3]-b[1],f=o+b[4]-b[2],l.push(p.q2b(n,o,d,f,n+m[1],o+m[2]))):"T"!==b[0]&&"t"!==b[0]||(l.push(p.q2b(n,o,n+n-d,o+o-f,n+m[1],o+m[2])),d=n+n-d,f=o+o-f),n+=m[1],o+=m[2];break;case"Z":case"z":c=l[0][0],u=l[0][1],l.push([n,o,c,u,c,u,c,u])}}return s},p._upCurves=function(e,t){for(var n=0,o=0,r=e.length;n<t;n++)e.push(e[o].slice(0)),++o>r-1&&(o-=r)},p._splitCurves=function(e,t){for(var n,o,r,i,a,s,l,c,u,d=0,p=0;d<t;d++){var h=e[p],g=(n=h[0],o=h[1],r=h[2],i=h[3],a=h[4],s=h[5],l=h[6],c=h[7],{left:f(n,o,r,i,a,s,l,c,u=.5),right:f(l,c,a,s,r,i,n,o,1-u,!0)});e.splice(p,1),e.splice(p,0,g.left,g.right),(p+=2)>=e.length-1&&(p=0)}},p.lerp=function(e,t,n){return p._lerp(p.path2shapes(e),p.path2shapes(t),n)},p.MIM_CURVES_COUNT=100,p._preprocessing=function(e,t){var n=e.length,o=t.length,r=JSON.parse(JSON.stringify(e)),i=JSON.parse(JSON.stringify(t));return n>o?h(i,n-o):n<o&&h(r,o-n),(r=d(r,i)).forEach((function(e,t){var n=e.length,o=i[t].length;n>o?n<p.MIM_CURVES_COUNT?(p._splitCurves(e,p.MIM_CURVES_COUNT-n),p._splitCurves(i[t],p.MIM_CURVES_COUNT-o)):p._splitCurves(i[t],n-o):n<o&&(o<p.MIM_CURVES_COUNT?(p._splitCurves(e,p.MIM_CURVES_COUNT-n),p._splitCurves(i[t],p.MIM_CURVES_COUNT-o)):p._splitCurves(e,o-n))})),r.forEach((function(e,t){r[t]=u(e,i[t])})),[r,i]},p._lerp=function(e,t,n){var o=[];return e.forEach((function(e,r){var i=[];e.forEach((function(e,o){i.push(p.lerpCurve(e,t[r][o],n))})),o.push(i)})),o},p.animate=function(e){var t=p.path2shapes(e.from),n=p.path2shapes(e.to),o=p._preprocessing(t,n),r=new Date,i=e.end||function(){},a=e.progress||function(){},s=e.begin||function(){},l=e.easing||function(e){return e},c=null,u=null,d=e.time;s(t),function e(){var t=new Date-r;if(t>=d)return a(u=n,1),i(u),void cancelAnimationFrame(c);var s=l(t/d);u=p._lerp(o[0],o[1],s),a(u,s),c=requestAnimationFrame(e)}()},p},"object"===a(t)&&void 0!==e?e.exports=i():void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)},"./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */function(e,t,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(e){return document.querySelector(e)},l=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,d=[],p=n(/*! ./urls */"./node_modules/style-loader/lib/urls.js");function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function g(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");return e.attrs.type="text/css",y(t,e.attrs),g(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=m(t)),o=_.bind(null,n,a,!1),r=_.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",y(t,e.attrs),g(e,t),t}(t),o=E.bind(null,n,t),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),o=k.bind(null,n),r=function(){v(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return f(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}e&&f(h(e,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function _(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function k(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function E(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=p(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},"./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},"./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ../prototype/is */"./node_modules/type/prototype/is.js");e.exports=function(e){if("function"!=typeof e)return!1;if(!hasOwnProperty.call(e,"length"))return!1;try{if("number"!=typeof e.length)return!1;if("function"!=typeof e.call)return!1;if("function"!=typeof e.apply)return!1}catch(e){return!1}return!o(e)}},"./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/*! no static exports found */function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(/*! ../value/is */"./node_modules/type/value/is.js"),i={object:!0,function:!0,undefined:!0};e.exports=function(e){return!!r(e)&&hasOwnProperty.call(i,void 0===e?"undefined":o(e))}},"./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ../function/is */"./node_modules/type/function/is.js"),r=/^\s*class[\s{\/}]/,i=Function.prototype.toString;e.exports=function(e){return!!o(e)&&!r.test(i.call(e))}},"./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ../object/is */"./node_modules/type/object/is.js");e.exports=function(e){if(!o(e))return!1;try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}},"./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(e){return null!=e}},"./node_modules/unidragger/unidragger.js":
/*!***********************************************!*\
  !*** ./node_modules/unidragger/unidragger.js ***!
  \***********************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r;"function"==typeof Symbol&&Symbol.iterator;
/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */
!function(i,a){o=[n(/*! unipointer/unipointer */"./node_modules/unipointer/unipointer.js")],void 0===(r=function(e){return function(e,t){function n(){}var o=n.prototype=Object.create(t.prototype);o.bindHandles=function(){this._bindHandles(!0)},o.unbindHandles=function(){this._bindHandles(!1)},o._bindHandles=function(t){for(var n=(t=void 0===t||t)?"addEventListener":"removeEventListener",o=t?this._touchActionValue:"",r=0;r<this.handles.length;r++){var i=this.handles[r];this._bindStartEvent(i,t),i[n]("click",this),e.PointerEvent&&(i.style.touchAction=o)}},o._touchActionValue="none",o.pointerDown=function(e,t){this.okayPointerDown(e)&&(this.pointerDownPointer=t,e.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(e),this.emitEvent("pointerDown",[e,t]))};var r={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},i={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return o.okayPointerDown=function(e){var t=r[e.target.nodeName],n=i[e.target.type],o=!t||n;return o||this._pointerReset(),o},o.pointerDownBlur=function(){var e=document.activeElement;e&&e.blur&&e!=document.body&&e.blur()},o.pointerMove=function(e,t){var n=this._dragPointerMove(e,t);this.emitEvent("pointerMove",[e,t,n]),this._dragMove(e,t,n)},o._dragPointerMove=function(e,t){var n={x:t.pageX-this.pointerDownPointer.pageX,y:t.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(n)&&this._dragStart(e,t),n},o.hasDragStarted=function(e){return Math.abs(e.x)>3||Math.abs(e.y)>3},o.pointerUp=function(e,t){this.emitEvent("pointerUp",[e,t]),this._dragPointerUp(e,t)},o._dragPointerUp=function(e,t){this.isDragging?this._dragEnd(e,t):this._staticClick(e,t)},o._dragStart=function(e,t){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(e,t)},o.dragStart=function(e,t){this.emitEvent("dragStart",[e,t])},o._dragMove=function(e,t,n){this.isDragging&&this.dragMove(e,t,n)},o.dragMove=function(e,t,n){e.preventDefault(),this.emitEvent("dragMove",[e,t,n])},o._dragEnd=function(e,t){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(e,t)},o.dragEnd=function(e,t){this.emitEvent("dragEnd",[e,t])},o.onclick=function(e){this.isPreventingClicks&&e.preventDefault()},o._staticClick=function(e,t){this.isIgnoringMouseUp&&"mouseup"==e.type||(this.staticClick(e,t),"mouseup"!=e.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},o.staticClick=function(e,t){this.emitEvent("staticClick",[e,t])},n.getPointerPoint=t.getPointerPoint,n}(i,e)}.apply(t,o))||(e.exports=r)}(window)},"./node_modules/unipointer/unipointer.js":
/*!***********************************************!*\
  !*** ./node_modules/unipointer/unipointer.js ***!
  \***********************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r;"function"==typeof Symbol&&Symbol.iterator;
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
!function(i,a){o=[n(/*! ev-emitter/ev-emitter */"./node_modules/ev-emitter/ev-emitter.js")],void 0===(r=function(e){return function(e,t){function n(){}var o=n.prototype=Object.create(t.prototype);o.bindStartEvent=function(e){this._bindStartEvent(e,!0)},o.unbindStartEvent=function(e){this._bindStartEvent(e,!1)},o._bindStartEvent=function(t,n){var o=(n=void 0===n||n)?"addEventListener":"removeEventListener",r="mousedown";e.PointerEvent?r="pointerdown":"ontouchstart"in e&&(r="touchstart"),t[o](r,this)},o.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},o.getTouch=function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.identifier==this.pointerIdentifier)return n}},o.onmousedown=function(e){var t=e.button;t&&0!==t&&1!==t||this._pointerDown(e,e)},o.ontouchstart=function(e){this._pointerDown(e,e.changedTouches[0])},o.onpointerdown=function(e){this._pointerDown(e,e)},o._pointerDown=function(e,t){e.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==t.pointerId?t.pointerId:t.identifier,this.pointerDown(e,t))},o.pointerDown=function(e,t){this._bindPostStartEvents(e),this.emitEvent("pointerDown",[e,t])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return o._bindPostStartEvents=function(t){if(t){var n=r[t.type];n.forEach((function(t){e.addEventListener(t,this)}),this),this._boundPointerEvents=n}},o._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach((function(t){e.removeEventListener(t,this)}),this),delete this._boundPointerEvents)},o.onmousemove=function(e){this._pointerMove(e,e)},o.onpointermove=function(e){e.pointerId==this.pointerIdentifier&&this._pointerMove(e,e)},o.ontouchmove=function(e){var t=this.getTouch(e.changedTouches);t&&this._pointerMove(e,t)},o._pointerMove=function(e,t){this.pointerMove(e,t)},o.pointerMove=function(e,t){this.emitEvent("pointerMove",[e,t])},o.onmouseup=function(e){this._pointerUp(e,e)},o.onpointerup=function(e){e.pointerId==this.pointerIdentifier&&this._pointerUp(e,e)},o.ontouchend=function(e){var t=this.getTouch(e.changedTouches);t&&this._pointerUp(e,t)},o._pointerUp=function(e,t){this._pointerDone(),this.pointerUp(e,t)},o.pointerUp=function(e,t){this.emitEvent("pointerUp",[e,t])},o._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},o._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},o.pointerDone=function(){},o.onpointercancel=function(e){e.pointerId==this.pointerIdentifier&&this._pointerCancel(e,e)},o.ontouchcancel=function(e){var t=this.getTouch(e.changedTouches);t&&this._pointerCancel(e,t)},o._pointerCancel=function(e,t){this._pointerDone(),this.pointerCancel(e,t)},o.pointerCancel=function(e,t){this.emitEvent("pointerCancel",[e,t])},n.getPointerPoint=function(e){return{x:e.pageX,y:e.pageY}},n}(i,e)}.apply(t,o))||(e.exports=r)}(window)},"./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, keywords, babel, repository, author, license, dependencies, browserslist, devDependencies, default */function(e){e.exports=JSON.parse('{"name":"xgplayer","version":"1.1.6-alpha.0","description":"video player","main":"./dist/index.js","scripts":{"prepare":"npm run build","build":"webpack --progress --display-chunks -p","watch":"webpack --progress --display-chunks -p --watch --mode development","test":"karma start --single-run","test:watch":"karma start"},"keywords":["video","player"],"babel":{"presets":["es2015"],"plugins":["add-module-exports","babel-plugin-bulk-import"]},"repository":{"type":"git","url":"git+https://github.com/bytedance/xgplayer.git"},"author":"yinguohui@bytedance.com","license":"MIT","dependencies":{"danmu.js":"0.1.0","deepmerge":"^1.5.0","downloadjs":"1.4.7","draggabilly":"^2.2.0","event-emitter":"^0.3.5","pasition":"^1.0.1","request-frame":"^1.5.3"},"browserslist":["> 5%","IE 9","iOS 7","Firefox > 20"],"devDependencies":{"autoprefixer":"^9.1.5","babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-bulk-import":"^1.0.2","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","chai":"^4.1.2","core-js":"^2.5.4","css-loader":"^0.28.11","json-loader":"^0.5.7","karma":"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-mocha":"^1.3.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.32","karma-webpack":"^4.0.0-rc.1","mocha":"^5.2.0","node-sass":"^4.8.3","postcss-cssnext":"^3.1.0","postcss-loader":"^2.1.5","sass-loader":"^6.0.7","style-loader":"^0.20.3","sugarss":"^1.0.1","webpack":"^4.11.0","webpack-cli":"^3.0.2","zlib":"^1.0.5"}}')},"./src/control/collect.js":
/*!********************************!*\
  !*** ./src/control/collect.js ***!
  \********************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var i=void 0,a=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.set=function(e,n){var o=e,r=n;if(null===r)return!1;var i="";if(o.indexOf(".")>-1){var a=o.split(".");i=a[0],o=a[1]}"os_version"===o&&(r=""+r),i?"user"===i||"header"===i?t.envInfo[i][o]=r:"headers"===i?t.envInfo.header.headers[o]=r:t.envInfo.header.headers.custom[o]=r:t.envInfo.user.hasOwnProperty(o)?["user_type","device_id","ip_addr_id"].indexOf(o)>-1?t.envInfo.user[o]=Number(r):["user_id","web_id","user_unique_id","ssid"].indexOf(o)>-1?t.envInfo.user[o]=String(r):["user_is_auth","user_is_login"].indexOf(o)>-1&&(t.envInfo.user[o]=Boolean(r)):t.envInfo.header.hasOwnProperty(o)?t.envInfo.header[o]=r:t.envInfo.header.headers.hasOwnProperty(o)?t.envInfo.header.headers[o]=r:t.envInfo.header.headers.custom[o]=r},this.get=function(){var e={user:{},header:{headers:{custom:{}}}},n=t.envInfo,o=n.user,a=Object.keys(o),s=Array.isArray(a),l=0;for(a=s?a:a[Symbol.iterator]();;){var c;if(s){if(l>=a.length)break;c=a[l++]}else{if((l=a.next()).done)break;c=l.value}var u=c;o[u]!==i&&(e.user[u]=o[u])}var d=n.header,p=Object.keys(d),f=Array.isArray(p),h=0;for(p=f?p:p[Symbol.iterator]();;){var g;if(f){if(h>=p.length)break;g=p[h++]}else{if((h=p.next()).done)break;g=h.value}var v=g;d[v]!==i&&"headers"!==v&&(e.header[v]=d[v])}var m=n.header.headers,y=Object.keys(m),b=Array.isArray(y),x=0;for(y=b?y:y[Symbol.iterator]();;){var w;if(b){if(x>=y.length)break;w=y[x++]}else{if((x=y.next()).done)break;w=x.value}var _=w;"custom"!==_&&m[_]!==i&&(e.header.headers[_]=m[_])}var k=n.header.headers.custom,E=Object.keys(k);if(E.length){var C=E,S=Array.isArray(C),P=0;for(C=S?C:C[Symbol.iterator]();;){var j;if(S){if(P>=C.length)break;j=C[P++]}else{if((P=C.next()).done)break;j=P.value}var T=j;e.header.headers.custom[T]=k[T]}}return{user:e.user,header:r({},e.header,{headers:e.header.headers})}},this.envInfo={user:{user_unique_id:i,user_type:i,user_id:i,user_is_auth:i,user_is_login:i,device_id:i,web_id:i,ip_addr_id:i,ssid:i},header:{app_id:i,app_name:i,app_install_id:i,app_package:i,app_channel:i,app_version:i,os_name:i,os_version:i,device_model:i,ab_client:i,ab_version:i,traffic_type:i,utm_source:i,utm_medium:i,utm_campaign:i,client_ip:i,device_brand:i,os_api:i,access:i,language:i,region:i,app_language:i,app_region:i,creative_id:i,ad_id:i,campaign_id:i,log_type:i,rnd:i,platform:i,sdk_version:i,province:i,city:i,timezone:i,tz_offset:i,tz_name:i,sim_region:i,carrier:i,resolution:i,browser:i,browser_version:i,referrer:i,referrer_host:i,headers:{utm_term:i,utm_content:i,custom:{}}}}},s=function(e){var t=document.createElement("a");return t.href=e,t},l=screen.width||0,c=screen.height||0,u=l+" x "+c,d=navigator.appVersion,p=navigator.userAgent,f=navigator.language,h=document.referrer,g=s(h).hostname,v=function(e){var t=s(e).search;t=t.slice(1);var n={};return t.split("&").forEach((function(e){var t=e.split("="),o=t[0],r=t[1];n[o]=decodeURIComponent(void 0===r?"":r)})),n}(location.href),m="",y="",b="",x=""+parseFloat(d),w=void 0,_=void 0;-1!==(w=p.indexOf("Opera"))&&(b="Opera",x=p.substring(w+6),-1!==(w=p.indexOf("Version"))&&(x=p.substring(w+8))),-1!==(w=p.indexOf("Edge"))?(b="Microsoft Edge",x=p.substring(w+5)):-1!==(w=p.indexOf("MSIE"))?(b="Microsoft Internet Explorer",x=p.substring(w+5)):-1!==(w=p.indexOf("Chrome"))?(b="Chrome",x=p.substring(w+7)):-1!==(w=p.indexOf("Safari"))?(b="Safari",x=p.substring(w+7),-1!==(w=p.indexOf("Version"))&&(x=p.substring(w+8))):-1!==(w=p.indexOf("Firefox"))&&(b="Firefox",x=p.substring(w+8)),-1!==(_=x.indexOf(";"))&&(x=x.substring(0,_)),-1!==(_=x.indexOf(" "))&&(x=x.substring(0,_)),-1!==(_=x.indexOf(")"))&&(x=x.substring(0,_));for(var k,E,C=/Mobile|htc|mini|Android|iP(ad|od|hone)/.test(d)?"wap":"web",S=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Android",r:/Android/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}],P=0;P<S.length;P++){var j=S[P];if(j.r.test(p)){m=j.s;break}}function T(e,t){var n=e.exec(t);return n&&n[1]?n[1]:""}switch(/Windows/.test(m)&&(y=T(/Windows (.*)/,m),m="windows"),m){case"Mac OS X":y=T(/Mac OS X (10[\.\_\d]+)/,p),m="mac";break;case"Android":(E=T(/Android ([\.\_\d]+)/,k=p))||(E=T(/Android\/([\.\_\d]+)/,k)),y=E,m="android";break;case"iOS":y=(y=/OS (\d+)_(\d+)_?(\d+)?/.exec(d))?y[1]+"."+y[2]+"."+(0|y[3]):"",m="ios"}var M={screen_size:u,browser:b,browser_version:x,platform:C,os_name:m,os_version:y,userAgent:p,screen_width:l,screen_height:c,device_model:m,language:f,referrer:h,referrer_host:g,utm_source:v.utm_source,utm_medium:v.utm_medium,utm_campaign:v.utm_campaign,utm_term:v.utm_term,utm_content:v.utm_content},O={get:function(e){var t=localStorage.getItem(e),n=t;try{t&&"string"==typeof t&&(n=JSON.parse(t))}catch(e){}return n},set:function(e,t){try{var n="string"==typeof t?t:JSON.stringify(t);localStorage.setItem(e,n)}catch(e){}}},L="__tea_cache_",D=4001,z=4e3,R=4002,A=4003,I=500,B=5001,q="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)};function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var N=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";F(this,e),this.init=function(e){t.isLog=e},this.info=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i;t.isLog&&(i=console).log.apply(i,[t.prefix+e].concat(o))},this.warn=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i;t.isLog&&(i=console).warn.apply(i,[t.prefix+e].concat(o))},this.error=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i;t.isLog&&(i=console).error.apply(i,[t.prefix+e].concat(o))},this.dir=function(){var e;t.isLog&&(e=console).dir.apply(e,arguments)},this.table=function(e){t.isLog&&console.table(e)},this.logJSON=function(e){"object"===(void 0===e?"undefined":q(e))&&t.isLog&&t.info("",JSON.stringify(e,null,2))},this.deprecated=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.warn.apply(t,["[DEPRECATED]"+e].concat(o))},this.throw=function(e){throw t.error(t.prefix),new Error(e)};var o=n?"["+n+"]":"";this.prefix="[tea-sdk]"+o},U=new N,H=function(e,t,n,o){var r=new XMLHttpRequest;r.open("POST",e,!0),r.setRequestHeader("Content-Type","application/json; charset=utf-8"),r.onload=function(){try{var e=JSON.parse(r.responseText);n&&n(e)}catch(e){o&&o()}},r.onerror=function(){o&&o()},r.send(JSON.stringify(t))};var W=(new Date).getTimezoneOffset(),V=parseInt(-W/60,10),K=60*W,J=void 0;try{J="3.2.7"}catch(k){J="2.x"}var X=new(function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,e.call(this));return n.initClientEnv=function(){n.set("os_name",M.os_name),n.set("os_version",M.os_version),n.set("device_model",M.device_model),n.set("platform",M.platform),n.set("sdk_version",J),n.set("browser",M.browser),n.set("browser_version",M.browser_version),n.set("language",M.language),n.set("timezone",V),n.set("tz_offset",K),n.set("resolution",M.screen_width+"x"+M.screen_height),n.set("screen_width",M.screen_width),n.set("screen_height",M.screen_height),n.set("referrer",M.referrer),n.set("referrer_host",M.referrer_host),n.set("utm_source",M.utm_source),n.set("utm_medium",M.utm_medium),n.set("utm_campaign",M.utm_campaign),n.set("utm_term",M.utm_term),n.set("utm_content",M.utm_content)},n.initClientEnv(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(a));var Q=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.prototype.isString=function(e){return"String"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isNumber=function(e){return"Number"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isBoolean=function(e){return"Boolean"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isFunction=function(e){return"Function"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isNull=function(e){return"Null"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isUndefined=function(e){return"Undefined"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isObj=function(e){return"Object"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isArray=function(e){return"Array"===Object.prototype.toString.call(e).slice(8,-1)},e.prototype.isFalse=function(e){return""===e||null==e||"null"===e||"undefined"===e||0===e||!1===e||NaN===e},e.prototype.isTrue=function(e){return!this.isFalse(e)},e.prototype.isLowIE=function(){return window.XDomainRequest},e}());var $=function(e){return function(e,t,n){if("string"==typeof e&&"number"==typeof t&&"number"==typeof n){var o,r=[];n=n<=25?n:n%25;var i=String.fromCharCode(n+97);o=e.split(i);for(var a=0;a<o.length;a++){var s=parseInt(o[a],n);s=1*s^t;var l=String.fromCharCode(s);r.push(l)}return r.join("")}}(e,64,25)};function Y(e){return e?(e^16*Math.random()>>e/4).toString(10):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,Y)}var G=function(){return Y().replace(/-/g,"").slice(0,19)},Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var ee={cn:"1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az21z1lz21z21z1bz1iz4az1az1mz1k",sg:"1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",va:"1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k"},te=function(e){try{var t=document.cookie.match(new RegExp("(?:^|;)\\s*"+e+"=([^;]+)"));return decodeURIComponent(t?t[1]:"")}catch(e){return""}},ne=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,e.call(this));return n.init=function(e){var t=e.app_id,o=e.channel,r=e.log,i=e.channel_domain,a=e.name;if("number"!=typeof t)throw new Error("app_id 必须是一个数字，注意检查是否是以`string`的方式传入的？");n.logger=new N(a),n.logger.init(r),n.initConfigs(e),n.initUrls(o,i),n.setEnv("app_id",t)},n.initConfigs=function(e){var t=e.app_id,o=e.disable_ssid,r=e.disable_webid,i=e.disable_sdk_monitor;n.app_id=t,n.evtDataCacheKey=L+"events_"+t,o&&(n.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。"),n.isSsidDisabled=!0),r&&(n.logger.info("webid服务已禁用，ssid同时被禁用。将本地生成webid。"),n.isWebidDisabled=!0,n.isSsidDisabled=!0),i&&(n.logger.info("SDK监控已禁用。"),n.isSdkMonitorDisabled=!0)},n.initUrls=function(e,t){if("internal"===e&&(n.logger.warn("channel 的值 internal 已被废弃，已自动改为 cn。"),e="cn"),!t&&!ee[e])throw new Error("channel 变量只能是 `cn`, `sg`,`va`");var o=t||$(ee[e]);o=o.replace(/\/+$/,""),n.reportUrl=o+"/v1/list",n.userTokensPrefix=""+o},n.setEnv=function(e,t){if("app_id"===e&&n.checkUserToken(t),"user_unique_id"===e){if(n.blackUuid.some((function(e){return e===String(t)})))return void n.logger.warn('设置了无效的值 {user_unique_id："%s"}。该操作已忽略。',t);n.verifyTokens(t)}if("web_id"===e){if(!t)return;(!n.envInfo.user.user_unique_id||n.envInfo.user.user_unique_id&&n.envInfo.user.user_unique_id===n.envInfo.user.web_id)&&n.set("user_unique_id",t)}n.set(e,t)},n.transferFromCookie=function(){var e=n.tokensCacheKey,t=te("tt_webid"),o=te("__tea_sdk__ssid"),r=te("__tea_sdk__user_unique_id");if(Q.isLowIE()){if(t){var i={web_id:t,ssid:t,user_unique_id:t};O.set(e,JSON.stringify(i))}return!1}if(t&&o&&r){var a={web_id:t,ssid:o,user_unique_id:r};O.set(e,JSON.stringify(a))}},n.purifyBlackUuid=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n.blackUuid.some((function(t){return t===e.user_unique_id}))){var t={};return n.setUserTokens(t),n.logger.warn('检测到无效的用户标识，已重置用户状态。{user_unique_id: "%s"}',e.user_unique_id),t}return e},n.getUserTokens=function(){return O.get(n.tokensCacheKey)||{}},n.setUserTokens=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O.set(n.tokensCacheKey,e)},n.checkUserToken=function(e){var t=L+"tokens_"+e;n.tokensCacheKey=t,n.transferFromCookie();var o=n.purifyBlackUuid(n.getUserTokens());o.user_unique_id&&o.web_id?(n.envInfo.user.user_unique_id=o.user_unique_id,n.envInfo.user.web_id=o.web_id,n.envInfo.user.ssid=o.ssid||"",n.logger.info("初始化已经检测到了 webid user_unique_id，一般情况下不需要再次验证 id 了"),n.unlock()):n.requestWebId(e)},n.saveTokenToStorage=function(e){var t=e.web_id,o=e.ssid,r=e.user_unique_id;n.setUserTokens({web_id:t,ssid:o,user_unique_id:r})},n.requestWebId=function(){n.isRequestWebId=!0;var e=function(e){var t=n.envInfo.user.web_id||e.web_id,o=e.ssid;n.isRequestWebId=!1,n.envInfo.user.ssid=o,n.envInfo.user.web_id=t,n.envInfo.user.user_unique_id=t,n.saveTokenToStorage({web_id:t,ssid:o,user_unique_id:t}),n.waitForVerifyTokens?(n.lock(),n.verifyTokens(n.realUuid)):(n.unlock(),n.callback&&n.callback())};n.isWebidDisabled?e({web_id:G(),ssid:""}):function(){var t=n.userTokensPrefix+"/v1/user/webid";H(t,{app_id:n.app_id,url:location.href,user_agent:M.userAgent,referer:M.referrer,user_unique_id:""},(function(t){0!==t.e?n.logger.error("请求 webid 失败。请联系管理员。"):e(t)}),(function(){n.isRequestWebId=!1,n.logger.error("获取 webid 失败，数据将不会被上报")}))}()},n.verifyTokens=function(e){var t=n.tokensCacheKey;if(n.waitForVerifyTokens=!1,n.realUuid=""+e,n.isRequestWebId)return n.waitForVerifyTokens=!0,n.logger.info("正在请求 webid，requestSsid 将会在前者请求完毕之后被调用"),!1;var o=n.getUserTokens();if(o.user_unique_id===n.realUuid&&o.ssid&&o.web_id)n.logger.info("传入的 user_id/user_unique_id 与 缓存中的完全一致，无需再次请求"),n.unlock();else{n.lock(),n.envInfo.user.user_unique_id=n.realUuid;var r=Z({},n.getUserTokens(),{user_unique_id:n.realUuid});if(O.set(t,JSON.stringify(r)),Q.isLowIE())return n.unlock(),!1;n.isSsidDisabled?(n.unlock(),n.callback&&n.callback()):n.requestSsid()}},n.requestSsid=function(){var e=n.getUserTokens(),t=n.userTokensPrefix+"/v1/user/ssid";H(t,{app_id:n.app_id,web_id:e.web_id,user_unique_id:""+e.user_unique_id},(function(t){if(n.unlock(),0!==t.e)n.logger.error("请求 ssid 失败~");else{n.envInfo.user.ssid=t.ssid;var o=Z({},e,{ssid:t.ssid});n.setUserTokens(o),n.logger.info("根据 user_unique_id 更新 ssid 成功！注意：在这之前不应该有数据被发出去"),n.callback&&n.callback()}}),(function(){n.unlock(),n.logger.error("根据 user_unique_id 获取新 ssid 失败")}))},n.setEvtParams=function(e){var t=Z({},e);Object.keys(t).forEach((function(e){n.evtParams[e]=t[e]}))},n.mergeEnvToEvents=function(e){var t=n.mergeEnv(),o=[],r=0,i=void 0;return e.forEach((function(e){var t=!!e.params.__disable_storage__;void 0===i?i=t:(t!==i||o[r].length>=5)&&(r+=1,i=!i),o[r]=o[r]||[],o[r].push(e)})),o.map((function(e){return{events:e.map((function(e){var t=Z({},n.evtParams,e.params);return delete t.__disable_storage__,Z({},e,{params:JSON.stringify(t)})})),user:t.user,header:t.header,verbose:n.debugMode?1:void 0,__disable_storage__:e[0].params.__disable_storage__}}))},n.mergeEnv=function(){var e=n.get(),t=X.get(),o=Z({},e.user),r=Z({},t.header.headers.custom,e.header.headers.custom),i=Z({},t.header.headers,e.header.headers,{custom:r}),a=Z({},t.header,e.header);return{user:o,header:Z({},a,{headers:JSON.stringify(i)})}},n.evtParams={},n.reportUrl="",n.userTokensPrefix="",n.isSsidDisabled=!1,n.isWebidDisabled=!1,n.isSdkMonitorDisabled=!1,n.debugMode=!1,n.blackUuid=["null","undefined","0","","None"],n.logger=function(){},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.lock=function(){this.isUserTokensReady=!1},t.prototype.unlock=function(){this.isUserTokensReady=!0},t.prototype.enableDebugMode=function(e){this.debugMode=e},t}(a);var oe=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.set=function(e,n){t.cache[e]=n},this.get=function(e){return t.cache[e]},this.clean=function(e){t.cache[e]=void 0},this.cache={}},re=new oe;var ie=function(){function e(t){var n=t.disable_storage,o=void 0!==n&&n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._isPersistent=!o,this._storage=this._isPersistent?O:new oe,this._storageKey="",this._data=void 0}return e.prototype.setStorageKey=function(e){this._storageKey=e},e.prototype.getAllEvents=function(){var e=this.getData();Object.keys(e).reduce((function(t,n){return t.concat(e[n]||[])}),[])},e.prototype.getData=function(){return this._checkIsDataInit(),this._data},e.prototype.add=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this._checkIsDataInit(),0!==t.length&&(this._data[e]=t,this._save())},e.prototype.delete=function(e){this._checkIsDataInit(),this._data[e]&&(delete this._data[e],this._save())},e.prototype._checkIsDataInit=function(){if(void 0===this._data)try{var e,t=this._getDataFromStorage();if(Q.isArray(t))this._data=((e={})[G()]=t,e),this._save();else this._data=t}catch(e){this._data={}}},e.prototype._checkStorageKey=function(){if(!this._storageKey)throw new Error("must call setStorageKey('xxx') first")},e.prototype._getDataFromStorage=function(){return this._checkStorageKey(),this._storage.get(this._storageKey)||{}},e.prototype._save=function(){this._checkStorageKey(),this._storage.set(this._storageKey,this._data)},e}(),ae=function(e,t){try{var n=e.split("v1")[0];t.forEach((function(e){var t=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+="&"+n+"="+encodeURIComponent(JSON.stringify(e[n])));return t="&"===t[0]?t.slice(1):t}(e),o=new Image(1,1);o.onload=function(){o=null},o.onerror=function(){o=null},o.src=n+"/v1/gif?"+t}))}catch(e){}},se=function(e,t){if(window.XDomainRequest)return ae(e,t);var n=new XMLHttpRequest;n.open("POST",e+"?rdn="+Math.random(),!0),n.onload=function(){},n.onerror=function(){n.abort()},n.send(JSON.stringify(t))},le=function e(t,n,o,r){try{var i=t.split("v1")[0];if(!i)return void r(t,n,D);n.forEach((function(e){var a=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+="&"+n+"="+encodeURIComponent(JSON.stringify(e[n])));return t="&"===t[0]?t.slice(1):t}(e),s=new Image(1,1);s.onload=function(){s=null,o()},s.onerror=function(){s=null,r(t,n,z)},s.src=i+"/v1/gif?"+a}))}catch(e){r(t,n,R,e.message)}};var ce=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.send=function(e){var t=e.url,o=e.data,r=e.success,i=e.fail,a=e.eventError;if(function(e){var t=e.url,n=e.data,o=e.success,r=e.fail,i=e.notSure,a=e.isUnload,s=n;if(window.XDomainRequest)le(t,s,o,r);else{if(a)return window.navigator&&window.navigator.sendBeacon?(i(),void(window.navigator.sendBeacon(t,JSON.stringify(s))?o():r(t,n,A))):void le(t,s,o,r);var l=new XMLHttpRequest;l.open("POST",t+"?rdn="+Math.random(),!0),l.onload=function(){o(t,s,l.responseText)},l.onerror=function(){l.abort(),r(t,s,I)},l.send(JSON.stringify(s))}}({url:t,data:o,success:function(e,t,o){r();try{var i=JSON.parse(o).e;if(0!==i){var s="未知错误";-2===i&&(s="事件格式错误！请检查字段类型是否正确。"),n.logger.error("数据上报失败！","错误码："+i+"。错误信息："+s),a(t,i),de(e,t,i)}}catch(n){de(e,t,B)}},fail:function(e,t,o){n.logger.error("数据上报失败！","错误码："+o),i(t,o),de(e,t,o)},notSure:e.notSure,isUnload:e.isUnload}),!n.isSdkMonitorDisabled&&!n.isSdkOnLoadEventReady){n.isSdkOnLoadEventReady=!0;try{var s=o[0].header,l=o[0].user;ue(t,{app_id:s.app_id,app_name:s.app_name,sdk_version:s.sdk_version,web_id:l.web_id})}catch(e){}}},this.logger=t.logger||U,this.isSdkOnLoadEventReady=!1,this.isSdkMonitorDisabled=!1},ue=function(e,t){try{var n={events:[{event:"onload",params:JSON.stringify({app_id:t.app_id,app_name:t.app_name||"",sdk_version:t.sdk_version}),local_time_ms:Date.now()}],user:{user_unique_id:t.web_id},header:{app_id:1338}};setTimeout((function(){se(e,[n])}),16)}catch(e){}},de=function(e,t,n){try{var o=t[0].user,r=t[0].header,i=[];t.forEach((function(e){e.events.forEach((function(e){i.push(e)}))}));var a={events:i.map((function(e){return{event:"on_error",params:JSON.stringify({error_code:n,app_id:r.app_id,app_name:r.app_name||"",error_event:e.event,local_time_ms:e.local_time_ms,tea_event_index:Date.now(),params:e.params,header:JSON.stringify(r),user:JSON.stringify(o)}),local_time_ms:Date.now()}})),user:{user_unique_id:o.user_unique_id},header:{app_id:1338}};setTimeout((function(){se(e,[a])}),16)}catch(e){}};var pe=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}(this,e.call(this));r.addListener=function(){window.addEventListener("unload",(function(){r.report(!0)}),!1),window.addEventListener("beforeunload",(function(){r.report(!0)}),!1),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&r.report(!0)}),!1)},r.setReady=function(e){r.isReady=e,r.eventSender.isSdkMonitorDisabled=r.isSdkMonitorDisabled,r.checkAndSendCachedStorageEvents(),r.report()},r.eventReportTimer=null,r.event=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=re.get(r.evtDataCacheKey)||[],o=t?[].concat(e,n):[].concat(n,e);re.set(r.evtDataCacheKey,o),o.length>=5?r.report():(r.eventReportTimer&&clearTimeout(r.eventReportTimer),r.eventReportTimer=setTimeout((function(){r.report(),r.eventReportTimer=null}),r.waitForBatchTime))},r.report=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!r.isUserTokensReady)return!1;if(!r.isReady)return!1;var t=re.get(r.evtDataCacheKey)||[];re.clean(r.evtDataCacheKey);var n=r.mergeEnvToEvents(t);r.sendData(n,e)},r.sendData=function(e,t){var n=[],o=0,i=void 0;e.forEach((function(e){var t=!!e.__disable_storage__;void 0===i?i=t:(t!==i||n[o].length>=5)&&(o+=1,i=!i),n[o]=n[o]||[],n[o].push(e)})),n.forEach((function(e){var n=G();e[0].__disable_storage__||r.eventStorage.add(n,e),r._sendData(n,e,t)}))},r.checkAndSendCachedStorageEvents=function(){var e=r.eventStorage.getData(),t=Object.keys(e);t.length>0&&t.forEach((function(t){r._sendData(t,e[t])}))},r._sendData=function(e,t,n){r.isReporting=!0;var o=function(){r.isReporting=!1};r.eventSender.send({url:r.reportUrl,data:t,success:function(){o(),r.sendDataSuccess(e)},fail:function(e,t){o(),r.reportErrorCallback(e,t),setTimeout((function(){r.report()}),3e3)},eventError:function(e,t){r.reportErrorCallback(e,t)},notSure:o,isUnload:n})},r.sendDataSuccess=function(e){r.eventStorage.delete(e),r.report()};var i=n.log,a=n.disable_storage,s=n.max_batch_num,l=void 0===s?5:s,c=n.batch_time,u=void 0===c?30:c;return r.init(n),r.maxBatchNum=l,r.waitForBatchTime=u,r.isReady=!1,r.addListener(),r.enableDebugMode(!!i),r.eventStorage=new ie({disable_storage:a}),r.eventStorage.setStorageKey(r.evtDataCacheKey),r.eventSender=new ce({logger:r.logger}),r.reportErrorCallback=function(){},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(ne),fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var he=function(){var e=+Date.now()+Number((""+Math.random()).slice(2,8));return function(){return e+=1}}(),ge=function(e,t){var n=e;/^event\./.test(e)&&(n=e.slice(6));var o=t;return Q.isObj(o)||(o={}),o.event_index=he(),{event:n,params:o,local_time_ms:+new Date}},ve=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(e){if(!Q.isObj(e))throw new Error("init 的参数必须是Object类型");n.logger.init(e.log),n.channel=new pe(fe({},e,{name:n.name})),n.channel.callback=function(){n.callbackSend&&n.start()}},this.config=function(e){Q.isObj(e)||n.logger.throw("config 参数必须是 {} 的格式"),e.log&&(n.logger.init(!0),n.channel.enableDebugMode(!0),e.log=null);var t=Object.keys(e);if(!t.length)return!1;var o=t,r=Array.isArray(o),i=0;for(o=r?o:o[Symbol.iterator]();;){var a;if(r){if(i>=o.length)break;a=o[i++]}else{if((i=o.next()).done)break;a=i.value}var s=a,l=e[s];switch(s){case"evtParams":n.channel.setEvtParams(l);break;case"disable_ssid":n.logger.deprecated("(disable_ssid)请通过init函数来设置。"),l&&(n.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。"),n.channel.isSsidDisabled=l);break;case"disable_auto_pv":l&&(n.logger.info("已禁止默认上报predefine_pageview事件，需手动上报。"),n._autoSendPV=!1);break;case"_staging_flag":""+l=="1"&&n.logger.info("根据_staging_flag设置，数据将会上报到stag 表。"),n.channel.setEvtParams({_staging_flag:Number(l)});break;case"reportErrorCallback":"function"==typeof l&&(n.channel.reportErrorCallback=l);break;default:n.channel.setEnv(s,l)}}},this.send=function(){n.start()},this.start=function(){if(n.channel.isUserTokensReady){if(n._isSendFuncCalled)return;n._isSendFuncCalled=!0,n.logger.info("看到本提示，意味着用户信息已完全就绪，上报通道打开。用户标识如下："),n.logger.logJSON(n.channel.get().user),n._autoSendPV&&n.predefinePageView(),n.channel.setReady(!0)}else n.callbackSend=!0},this.predefinePageView=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={title:document.title||location.pathname,url:location.href,url_path:location.pathname},o=fe({},t,e);n.event("predefine_pageview",o,!0)},this.event=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var r=Q.isBoolean(t[t.length-1]),i=!!r&&t[t.length-1],a=r?t.slice(0,t.length-1):t,s=a[0],l=[];Q.isArray(s)?l=a:l[0]=a,l=l.map((function(e){return ge.apply(void 0,e)})),n.channel.event(l,i)},this._isSendFuncCalled=!1,this._autoSendPV=!0,this.name=t,this.logger=new N(t)};ve.exportMethods=["init","config","send","start","predefinePageView"];t.default=function e(t){var n=this;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._exportCollect=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n._isQueueProcessed?n._executeCmd.apply(n,t):(n.cmdQueue.push(t),n._processCmdQueue())},this._processCmdQueue=function(){if(0!==n.cmdQueue.length){var e=function(e,t,n){var o=-1;return e.forEach((function(e,r){(void 0!==n?e[n]:e)===t&&(o=r)})),o}(n.cmdQueue,"init","0");-1!==e&&(n._isQueueProcessed=!0,n._executeCmd.apply(n,n.cmdQueue[e]),n.cmdQueue.forEach((function(t,o){o!==e&&n._executeCmd.apply(n,t)})),n.cmdQueue=[])}},this._executeCmd=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var r,i,a=t[0];ve.exportMethods.indexOf(a)>-1?(r=n.colloctor)[a].apply(r,t.slice(1)):(i=n.colloctor).event.apply(i,t)},this.name=t||"Collector"+ +new Date,this.cmdQueue=[],this.colloctor=new ve(this.name),this._isQueueProcessed=!1,this._processCmdQueue(),this._exportCollect.init=this._exportCollect.bind(this,"init"),this._exportCollect.config=this._exportCollect.bind(this,"config"),this._exportCollect.send=this._exportCollect.bind(this,"send"),this._exportCollect.start=this._exportCollect.bind(this,"start"),this._exportCollect.predefinePageView=this._exportCollect.bind(this,"predefinePageView"),this._exportCollect},e.exports=t.default},"./src/control/cssFullscreen.js":
/*!**************************************!*\
  !*** ./src/control/cssFullscreen.js ***!
  \**************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("cssFullscreen",(function(){var e=i.default.util;if(this.config.cssFullscreen){var t="M834.56 81.92H189.44c-59.392 0-107.52 48.128-107.52 107.52v645.12c0 59.392 48.128 107.52 107.52 107.52h645.12c59.392 0 107.52-48.128 107.52-107.52V189.44c0-59.392-48.128-107.52-107.52-107.52zM458.24 727.04c0 14.848-12.288 26.624-26.624 26.624S404.48 741.888 404.48 727.04v-69.632L289.28 773.12c-10.752 10.24-27.648 10.24-37.888 0-10.24-10.752-10.24-27.648 0-37.888L366.592 619.52H296.96c-14.848 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h134.144c14.848 0 26.624 12.288 26.624 26.624V727.04z m0-295.936c0 14.848-12.288 26.624-26.624 26.624H296.96c-14.848 0-26.624-12.288-26.624-26.624S282.112 404.48 296.96 404.48h69.632L251.392 289.28c-10.24-10.752-10.24-27.648 0-37.888 5.12-5.12 12.288-7.68 18.944-7.68 6.656 0 13.824 2.56 18.944 7.68L404.48 366.592V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v134.144zM773.12 773.12c-10.752 10.24-27.648 10.24-37.888 0L619.52 657.408V727.04c0 14.848-12.288 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-134.144c0-14.848 12.288-26.624 26.624-26.624H727.04c14.848 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624h-69.632l115.2 115.2c10.752 10.752 10.752 27.648 0.512 38.4z m0-483.84L657.408 404.48H727.04c14.848 0 26.624 12.288 26.624 26.624 0 14.848-12.288 26.624-26.624 26.624h-134.144c-14.848 0-26.624-12.288-26.624-26.624V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v69.632L734.72 250.88c5.12-5.12 12.288-7.68 18.944-7.68s13.824 2.56 18.944 7.68c10.752 10.752 10.752 27.648 0.512 38.4z",n="M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z",o=e.createDom("xg-cssfullscreen",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.03 0.03)" d="'+n+'"></path>\n        </svg></xg-icon>',{},"xgplayer-cssfullscreen"),r=this.config.lang&&"zh-cn"===this.config.lang?"样式全屏":"Full screen",a=this.config.lang&&"zh-cn"===this.config.lang?"退出全屏":"Exit full screen",s=this.controls,l=this.root,c=e.createDom("xg-tips",r,{},"xgplayer-tips"),u=o.querySelector("path");o.appendChild(c);s.appendChild(o),["click","touchend"].forEach((function(i){o.addEventListener(i,(function(o){var i;o.preventDefault(),o.stopPropagation(),e.hasClass(l,"xgplayer-cssfullscreen-active")||e.hasClass(l,"xgplayer-is-fullscreen")?(i=l,u.setAttribute("d",n),c.textContent=r,e.removeClass(i,"xgplayer-cssfullscreen-active")):function(n){u.setAttribute("d",t),c.textContent=a,e.addClass(n,"xgplayer-cssfullscreen-active")}(l)}))})),o.addEventListener("mouseenter",(function(e){e.preventDefault(),e.stopPropagation(),c.style.left="50%";var t=c.getBoundingClientRect(),n=l.getBoundingClientRect();t.right>n.right&&(c.style.left=-t.right+n.right+16+"px")}))}}))},"./src/control/danmu.js":
/*!******************************!*\
  !*** ./src/control/danmu.js ***!
  \******************************/
/*! no static exports found */function(e,t,n){"use strict";var o=i(n(/*! ../player */"./src/player.js")),r=i(n(/*! danmu.js */"./node_modules/danmu.js/dist/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}o.default.install("danmu",(function(){var e=this;if(e.config.danmu){var t=o.default.util.createDom("xg-bullet","",{},"xgplayer-bullet");e.root.appendChild(t),t.style.height="100%";var n=o.default.util.deepCopy({container:t,player:e.video,comments:[],area:{start:0,end:1}},e.config.danmu);e.once("complete",(function(){var i=new r.default(n);o.default.util.addClass(t,"xgplayer-has-bullet"),e.config.danmu.closeDefaultBtn||(e.bulletBtn=o.default.util.copyDom(i.bulletBtn.createSwitch(!0)),e.controls.appendChild(e.bulletBtn),["click","touchend"].forEach((function(n){e.bulletBtn.addEventListener(n,(function(n){n.preventDefault(),n.stopPropagation(),o.default.util.toggleClass(e.bulletBtn,"danmu-switch-active"),o.default.util.hasClass(e.bulletBtn,"danmu-switch-active")?(o.default.util.addClass(t,"xgplayer-has-bullet"),e.once("timeupdate",(function(){i.start()}))):(o.default.util.removeClass(t,"xgplayer-has-bullet"),i.stop())}),!1)})),e.onElementClick&&t.addEventListener("click",(function(n){e.onElementClick(n,t)}),!1),e.onElementDblclick&&t.addEventListener("dblclick",(function(n){e.onElementDblclick(n,t)}),!1),e.on("pause",(function(){o.default.util.hasClass(e.bulletBtn,"danmu-switch-active")&&i.pause()})),e.on("play",(function(){o.default.util.hasClass(e.bulletBtn,"danmu-switch-active")&&i.play()})),e.on("seeked",(function(){o.default.util.hasClass(e.bulletBtn,"danmu-switch-active")&&(i.stop(),i.start())}))),e.danmu=i}))}}))},"./src/control/definition.js":
/*!***********************************!*\
  !*** ./src/control/definition.js ***!
  \***********************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("definition",(function(){var e=this,t=i.default.util,n=i.default.sniffer,o=t.createDom("xg-definition","",{tabindex:3},"xgplayer-definition"),r=e.controls;"mobile"===n.device&&(e.config.definitionActive="click");var a=[];function s(){var n=["<ul>"],i=e.config.url,s=document.createElement("a");e.switchURL?["mp4","hls","__flv__","dash"].every((function(t){return!e[t]||(e[t].url&&(s.href=e[t].url),"__flv__"===t&&(e[t]._options?s.href=e[t]._options.url:s.href=e[t]._mediaDataSource.url),i=s.href,!1)})):i=e.currentSrc||e.src,e.hls&&(s.href=e.hls.url,i=s.href),a.forEach((function(t){s.href=t.url,e.dash?n.push("<li url='"+t.url+"' cname='"+t.name+"' class='"+(t.selected?"definition":"")+"'>"+t.name+"</li>"):n.push("<li url='"+t.url+"' cname='"+t.name+"' class='"+(s.href===i?"definition":"")+"'>"+t.name+"</li>")}));var l=a.filter((function(t){return s.href=t.url,e.dash?!0===t.selected:s.href===i}));n.push("</ul><p class='name'>"+(l[0]||{name:""}).name+"</p>");var c=r.querySelector(".xgplayer-definition");if(c){c.innerHTML=n.join("");var u=c.querySelector(".name");e.config.definitionActive&&"hover"!==e.config.definitionActive||u.addEventListener("mouseenter",(function(n){n.preventDefault(),n.stopPropagation(),t.addClass(e.root,"xgplayer-definition-active"),c.focus()}))}else{o.innerHTML=n.join("");var d=o.querySelector(".name");e.config.definitionActive&&"hover"!==e.config.definitionActive||d.addEventListener("mouseenter",(function(n){n.preventDefault(),n.stopPropagation(),t.addClass(e.root,"xgplayer-definition-active"),o.focus()})),r.appendChild(o)}}function l(n){(a=n)&&a instanceof Array&&a.length>1&&(t.addClass(e.root,"xgplayer-is-definition"),e.on("canplay",s))}e.on("resourceReady",l),["touchend","click"].forEach((function(r){o.addEventListener(r,(function(r){r.preventDefault(),r.stopPropagation();var i=r.target||r.srcElement,s=document.createElement("a");if(i&&"li"===i.tagName.toLocaleLowerCase()){if(e.emit("beforeDefinitionChange",s.href),Array.prototype.forEach.call(i.parentNode.childNodes,(function(e){t.removeClass(e,"definition")})),e.dash&&a.forEach((function(e){e.selected=!1,e.name===i.innerHTML&&(e.selected=!0)})),t.addClass(i,"definition"),i.parentNode.nextSibling.innerHTML=""+i.getAttribute("cname"),s.href=i.getAttribute("url"),e.switchURL){var l=document.createElement("a");["mp4","hls","__flv__","dash"].every((function(t){return!e[t]||(e[t].url&&(l.href=e[t].url),"__flv__"===t&&(e[t]._options?l.href=e[t]._options.url:l.href=e[t]._mediaDataSource.url),!1)})),l.href===s.href||e.ended||e.switchURL(s.href)}else{if(e.hls){document.createElement("a");e.hls.url}if(s.href!==e.currentSrc){var c=e.currentTime,u=e.paused;e.ended||(e.src=s.href,e.once("canplay",(function(){e.currentTime=c,u||e.play()})))}}e.emit("definitionChange",s.href),"mobile"===n.device&&t.removeClass(e.root,"xgplayer-definition-active")}else"click"!==e.config.definitionActive||!i||"p"!==i.tagName.toLocaleLowerCase()&&"em"!==i.tagName.toLocaleLowerCase()||(t.addClass(e.root,"xgplayer-definition-active"),o.focus());e.emit("focus")}),!1)})),o.addEventListener("mouseleave",(function(n){n.preventDefault(),n.stopPropagation(),t.removeClass(e.root,"xgplayer-definition-active")})),e.once("destroy",(function t(){e.off("canplay",s),e.off("resourceReady",l),e.off("destroy",t)}))}))},"./src/control/download.js":
/*!*********************************!*\
  !*** ./src/control/download.js ***!
  \*********************************/
/*! no static exports found */function(e,t,n){"use strict";var o=a(n(/*! ../player */"./src/player.js")),r=n(/*! ../utils/url */"./src/utils/url.js"),i=a(n(/*! downloadjs */"./node_modules/downloadjs/download.js"));function a(e){return e&&e.__esModule?e:{default:e}}o.default.install("download",(function(){var e=this;if(this.config.download){var t=e.root,n=o.default.util,a=n.createDom("xgplayer-download",'<xg-icon class="xgplayer-download-img"></xg-icon>',{},"xgplayer-download");e.controls.appendChild(a);var s=e.config.lang&&"zh-cn"===e.config.lang?"下载":"Download",l=n.createDom("xg-tips",s,{},"xgplayer-tips");a.appendChild(l),e.download=function(){var t=(0,r.getAbsoluteURL)(e.config.url);(0,i.default)(t)},a.addEventListener("click",(function(t){t.stopPropagation(),e.download()})),a.addEventListener("mouseenter",(function(e){e.preventDefault(),e.stopPropagation(),l.style.left="50%";var n=l.getBoundingClientRect(),o=t.getBoundingClientRect();n.right>o.right&&(l.style.left=-n.right+o.right+16+"px")}))}}))},"./src/control/error.js":
/*!******************************!*\
  !*** ./src/control/error.js ***!
  \******************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("error",(function(){var e=this,t=i.default.util,n=t.createDom("xg-error",'<em class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</em>',{},"xgplayer-error");e.root.appendChild(n);var o=n.querySelector(".xgplayer-error-text"),r=null;function a(){e.error?o.innerHTML=e.error:e.config.lang&&"zh-cn"===e.config.lang?o.innerHTML=e.lang.ERROR+'，请<span class="xgplayer-error-refresh">刷新</span>试试':o.innerHTML=e.lang.ERROR+'，please try to <span class="xgplayer-error-refresh">refresh</span>',t.addClass(e.root,"xgplayer-is-error"),(r=n.querySelector(".xgplayer-error-refresh"))&&["touchend","click"].forEach((function(t){r.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation();var n=t.target||t.srcElement;n&&"span"===n.tagName.toLocaleLowerCase()&&(e.controls.style.display="flex",e.reload())}))}))}e.on("error",a),e.once("destroy",(function t(){e.off("error",a),e.off("destroy",t)}))}))},"./src/control/flex.js":
/*!*****************************!*\
  !*** ./src/control/flex.js ***!
  \*****************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("__flex__",(function(){var e=i.default.util.createDom("xg-placeholder","",{},"xgplayer-placeholder");this.controls.appendChild(e)}))},"./src/control/fullscreen.js":
/*!***********************************!*\
  !*** ./src/control/fullscreen.js ***!
  \***********************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("fullscreen",(function(){var e=this,t=i.default.util,n="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",o="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z",r=t.createDom("xg-fullscreen",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.03 0.03)" d="'+o+'"></path>\n        </svg></xg-icon>',{},"xgplayer-fullscreen"),a=e.config.lang&&"zh-cn"===e.config.lang?"全屏":"Full screen",s=e.config.lang&&"zh-cn"===e.config.lang?"退出全屏":"Exit full screen",l=e.controls,c=e.root,u=t.createDom("xg-tips",a,{},"xgplayer-tips"),d=r.querySelector("path");r.appendChild(u);l.appendChild(r),["click","touchend"].forEach((function(o){r.addEventListener(o,(function(o){var r,i;o.preventDefault(),o.stopPropagation(),t.hasClass(c,"xgplayer-fullscreen-active")||t.hasClass(c,"xgplayer-is-fullscreen")?function(n){var o=t.findDom(e.controls,"xg-cssfullscreen"),r="M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z";if(o){var i=t.findDom(o,"xg-tips"),s=o.querySelector("path");o.style.display="block",i.textContent=e.config.lang&&"zh-cn"===e.config.lang?"样式全屏":"Full screen",s.setAttribute("d",r)}t.removeClass(n,"xgplayer-cssfullscreen-active"),d.setAttribute("d",r),u.textContent=a,document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():t.removeClass(n,"xgplayer-fullscreen-active")}(c):(r=c,(i=t.findDom(e.controls,"xg-cssfullscreen"))&&(i.style.display="none"),d.setAttribute("d",n),u.textContent=s,r.requestFullscreen?r.requestFullscreen():r.mozRequestFullScreen?r.mozRequestFullScreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):e.video.webkitSupportsFullscreen?e.video.webkitEnterFullscreen():r.msRequestFullscreen?r.msRequestFullscreen():t.addClass(r,"xgplayer-fullscreen-active"))}))})),e.video.addEventListener("webkitendfullscreen",(function(){e.emit("exitFullscreen"),d.setAttribute("d",o)}));["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach((function(n){document.addEventListener(n,(function(n){if(n.preventDefault(),n.stopPropagation(),!(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)){var o=t.findDom(e.controls,"xg-cssfullscreen"),r={default:"M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z"};if(o){var i=t.findDom(o,"xg-tips"),s=o.querySelector("path");o.style.display="block",i.textContent=e.config.lang&&"zh-cn"===e.config.lang?"样式全屏":"Full screen",s.setAttribute("d",r.default)}t.removeClass(c,"xgplayer-cssfullscreen-active"),d.setAttribute("d",r.default),u.textContent=a,t.removeClass(c,"xgplayer-fullscreen-active")}}))}));var p=function(r){var i=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;i&&i===c?(t.addClass(c,"xgplayer-is-fullscreen"),d.setAttribute("d",n),u.textContent=s,e.emit("requestFullscreen")):(t.removeClass(c,"xgplayer-is-fullscreen"),d.setAttribute("d",o),u.textContent=a,e.emit("exitFullscreen"))};r.addEventListener("mouseenter",(function(e){e.preventDefault(),e.stopPropagation(),u.style.left="50%";var t=u.getBoundingClientRect(),n=c.getBoundingClientRect();t.right>n.right&&(u.style.left=-t.right+n.right+16+"px")})),["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach((function(e){document.addEventListener(e,p)})),e.once("destroy",(function t(){["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach((function(e){document.removeEventListener(e,p)})),e.off("destroy",t)}))}))},"./src/control/i18n.js":
/*!*****************************!*\
  !*** ./src/control/i18n.js ***!
  \*****************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js");((o=r)&&o.__esModule?o:{default:o}).default.install("i18n",(function(){var e=this,t={},n=e.constructor.util;t.en={HAVE_NOTHING:"There is no information on whether audio/video is ready",HAVE_METADATA:"audio/video metadata is ready ",HAVE_CURRENT_DATA:"Data about the current play location is available, but there is not enough data to play the next frame/millisecond",HAVE_FUTURE_DATA:"Current and at least one frame of data is available",HAVE_ENOUGH_DATA:"The available data is sufficient to start playing",NETWORK_EMPTY:"Audio/video has not been initialized",NETWORK_IDLE:"Audio/video is active and has been selected for resources, but no network is used",NETWORK_LOADING:"The browser is downloading the data",NETWORK_NO_SOURCE:"No audio/video source was found",MEDIA_ERR_ABORTED:"The fetch process is aborted by the user",MEDIA_ERR_NETWORK:"An error occurred while downloading",MEDIA_ERR_DECODE:"An error occurred while decoding",MEDIA_ERR_SRC_NOT_SUPPORTED:"Audio/video is not supported",REPLAY:"Replay",ERROR:"network is offline"},t["zh-cn"]={HAVE_NOTHING:"没有关于音频/视频是否就绪的信息",HAVE_METADATA:"音频/视频的元数据已就绪",HAVE_CURRENT_DATA:"关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",HAVE_FUTURE_DATA:"当前及至少下一帧的数据是可用的",HAVE_ENOUGH_DATA:"可用数据足以开始播放",NETWORK_EMPTY:"音频/视频尚未初始化",NETWORK_IDLE:"音频/视频是活动的且已选取资源，但并未使用网络",NETWORK_LOADING:"浏览器正在下载数据",NETWORK_NO_SOURCE:"未找到音频/视频来源",MEDIA_ERR_ABORTED:"取回过程被用户中止",MEDIA_ERR_NETWORK:"当下载时发生错误",MEDIA_ERR_DECODE:"当解码时发生错误",MEDIA_ERR_SRC_NOT_SUPPORTED:"不支持的音频/视频格式",REPLAY:"重播",ERROR:"网络连接似乎出现了问题"},Object.defineProperty(e,"lang",{get:function(){return t[e.config.lang]||t.en},set:function(e){"Object"===n.typeOf(e)&&Object.keys(e).forEach((function(n){t[n]=e[n]}))}})}))},"./src/control/loading.js":
/*!********************************!*\
  !*** ./src/control/loading.js ***!
  \********************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("loading",(function(){var e=i.default.util.createDom("xg-loading",'\n    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">\n      <path d="M100,50A50,50,0,1,1,50,0"></path>\n    </svg>\n    ',{},"xgplayer-loading");this.root.appendChild(e)}))},"./src/control/localPreview.js":
/*!*************************************!*\
  !*** ./src/control/localPreview.js ***!
  \*************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("localPreview",(function(){var e=this,t=i.default.util,n=t.createDom("xg-preview",'<input type="file">',{},"xgplayer-preview"),o=n.querySelector("input");e.config.preview&&e.config.preview.uploadEl&&(e.config.preview.uploadEl.appendChild(n),o.onchange=function(){e.uploadFile=o.files[0];var n=URL.createObjectURL(e.uploadFile);t.hasClass(e.root,"xgplayer-nostart")?(e.config.url=n,e.start()):(e.src=n,e.play())})}))},"./src/control/logger.js":
/*!*******************************!*\
  !*** ./src/control/logger.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";var o=a(n(/*! ../player */"./src/player.js")),r=a(n(/*! ../utils/sniffer */"./src/utils/sniffer.js")),i=a(n(/*! ./collect */"./src/control/collect.js"));function a(e){return e&&e.__esModule?e:{default:e}}o.default.install("logger",(function(){var e=this,t=o.default.util;if(!0!==e.config.noLog){var n=function(){e.video.played;var t=l(e.logParams.played),n=(new Date).getTime();c();var o={url:e.logParams.pluginSrc?e.logParams.pluginSrc:e.logParams.playSrc,vid:e.config.vid,bc:e.logParams.bc-1>0?e.logParams.bc-1:0,bb:e.logParams.bc-1>0?1:0,bu_acu_t:e.logParams.bu_acu_t,pt:e.logParams.pt,vt:e.logParams.vt,vd:1e3*e.logParams.vd,watch_dur:parseFloat((1e3*t).toFixed(3)),cur_play_pos:parseFloat((1e3*e.currentTime).toFixed(3)),et:n};window.__xigua_log_sdk__("c",o)},a=function(){e.video.played;var t=l(e.logParams.played),n=(new Date).getTime();c();var o={url:e.logParams.pluginSrc?e.logParams.pluginSrc:e.logParams.playSrc,vid:e.config.vid,bc:e.logParams.bc-1>0?e.logParams.bc-1:0,bb:e.logParams.bc-1>0?1:0,bu_acu_t:e.logParams.bu_acu_t,pt:e.logParams.pt,vt:e.logParams.vt,vd:1e3*e.logParams.vd,watch_dur:parseFloat((1e3*t).toFixed(3)),cur_play_pos:parseFloat((1e3*e.currentTime).toFixed(3)),lt:n};window.__xigua_log_sdk__("d",o)},s=function(t){e.video.played;var n=l(e.logParams.played);c();var o=(new Date).getTime();if(!(e.logParams.lastErrLog&&o-e.logParams.lastErrLog<=3e3)){e.logParams.lastErrLog=o;var r={url:e.logParams.pluginSrc?e.logParams.pluginSrc:e.logParams.playSrc,vid:e.config.vid,bc:e.logParams.bc-1>0?e.logParams.bc-1:0,bb:e.logParams.bc-1>0?1:0,bu_acu_t:e.logParams.bu_acu_t,pt:e.logParams.pt,vt:e.logParams.vt,vd:1e3*e.logParams.vd,watch_dur:parseFloat((1e3*n).toFixed(3)),err_msg:t.errd.msg,line:t.errd.line,et:o,cur_play_pos:parseFloat((1e3*e.currentTime).toFixed(3))};if(e.logParams.nologFunc&&e.logParams.nologFunc(e))return!0;window.__xigua_log_sdk__("e",r)}};window.__xigua_log_sdk__||(window.__xigua_log_sdk__=new i.default("tracker"),window.__xigua_log_sdk__.init({app_id:1300,channel:"cn",log:!1,disable_sdk_monitor:!0}),window.__xigua_log_sdk__("config",{evtParams:{log_type:"logger",page_url:document.URL,domain:window.location.host,pver:e.version,ua:navigator.userAgent.toLowerCase()},disable_auto_pv:!0}),window.__xigua_log_sdk__.start()),e.config.uid&&window.__xigua_log_sdk__("config",{user_unique_id:e.config.uid});var l=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var o=0;o<t.length;o++){var r=e[n].begin,i=e[n].end;if(i<t[o].begin){t.splice(o,0,{begin:r,end:i});break}if(!(r>t[o].end)){var a=t[o].begin,s=t[o].end;t[o].begin=Math.min(r,a),t[o].end=Math.max(i,s);break}if(o>t.length-2){t.push({begin:r,end:i});break}}for(var l=0,c=0;c<t.length;c++)l+=t[c].end-t[c].begin;return l},c=function(){e.logParams.pt&&e.logParams.vt||(e.logParams.pt=(new Date).getTime(),e.logParams.vt=e.logParams.pt),e.logParams.pt>e.logParams.vt&&(e.logParams.pt=e.logParams.vt)},u=function(n){if(t.hasClass(e.root,"xgplayer-is-enter")){var o=(new Date).getTime(),r={url:e.logParams.pluginSrc?e.logParams.pluginSrc:e.logParams.playSrc,vid:e.config.vid,pt:e.logParams.pt,lt:o};window.__xigua_log_sdk__("b",r)}else if(t.hasClass(e.root,"xgplayer-playing")){var i=l(e.logParams.played),a=(new Date).getTime();c();var s={url:e.logParams.pluginSrc?e.logParams.pluginSrc:e.logParams.playSrc,vid:e.config.vid,bc:e.logParams.bc-1>0?e.logParams.bc-1:0,bb:e.logParams.bc-1>0?1:0,bu_acu_t:e.logParams.bu_acu_t,pt:e.logParams.pt,vt:e.logParams.vt,vd:1e3*e.logParams.vd,watch_dur:parseFloat((1e3*i).toFixed(3)),cur_play_pos:parseFloat((1e3*e.currentTime).toFixed(3)),lt:a};window.__xigua_log_sdk__("d",s)}};"pc"===r.default.device?window.addEventListener("beforeunload",u,!1):"mobile"===r.default.device&&window.addEventListener("pagehide",u,!1),e.on("routechange",u),e.on("ended",n),e.on("urlchange",a),e.on("error",s),e.once("destroy",(function t(){"pc"===r.default.device?window.removeEventListener("beforeunload",u):"mobile"===r.default.device&&window.removeEventListener("pagehide",u),e.off("routechange",u),e.off("ended",n),e.off("urlchange",a),e.off("error",s),e.off("destroy",t)}))}}))},"./src/control/mobile.js":
/*!*******************************!*\
  !*** ./src/control/mobile.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";var o=i(n(/*! ../player */"./src/player.js")),r=i(n(/*! ../utils/svg */"./src/utils/svg.js"));function i(e){return e&&e.__esModule?e:{default:e}}o.default.install("mobile",(function(){var e=this,t=o.default.util,n=e.root,i=function(e){var t=o.default.util;return e.some((function(e){return"Function"===t.typeOf(e)?e.call(void 0,navigator.userAgent):"RegExp"===t.typeOf(e)?e.test(navigator.userAgent):"String"===t.typeOf(e)&&navigator.userAgent.indexOf(e)>-1}))}(e.config.whitelist);e.mobilePass=i;var a=e.config.centerBtn?e.config.centerBtn:{},s=void 0,l=void 0,c=void 0,u=void 0;"img"===a.type?l=o.default.util.createImgBtn("start",a.url.play,a.width,a.height):(s={pause:a.pausePath?a.pausePath:"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",play:a.playPath?a.playPath:"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"},l=t.createDom("xg-start",'\n          <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(0.04,0.04)" d="'+s.pause+'"></path>\n          </svg>',{},"xgplayer-start"),c=l.querySelector("path"),u=new r.default({from:s.play,to:s.pause,progress:function(e,t){c.setAttribute("d",u.toSVGString(e))}}));var d=t.createDom("xg-enter",'<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>',{},"xgplayer-enter"),p=d.querySelector(".xgplayer-enter-logo");n.appendChild(l),n.appendChild(d);var f=d.querySelector(".xgplayer-enter-tips"),h=new Image;h.onload=function(){f.style.display="block"},e.config.enterLogo&&e.config.enterLogo.url&&e.config.enterLogo.width&&e.config.enterLogo.height?(h.src=e.config.enterLogo.url,p.style.backgroundImage='url("'+e.config.enterLogo.url+'")',p.style.width=e.config.enterLogo.width+"px",p.style.height=e.config.enterLogo.height+"px",p.style.backgroundSize=e.config.enterLogo.width+"px "+e.config.enterLogo.height+"px",p.style.margin="-"+e.config.enterLogo.height/2+"px auto auto -"+e.config.enterLogo.width/2+"px",f.style.margin=e.config.enterLogo.height-6+"px auto auto -62px"):h.src=t.getBgImage(p),e.config.enterTips&&e.config.enterTips.background&&(f.style.background=""+e.config.enterTips.background),e.config.enterBg&&(e.config.enterBg.url?d.style.backgroundImage='url("'+e.config.enterBg.url+'")':e.config.enterBg.color&&(d.style.background=e.config.enterBg.color)),e.start(),i?(e.video.addEventListener("touchend",(function(o){o.preventDefault(),t.hasClass(n,"xgplayer-inactive")?e.emit("focus"):e.emit("blur"),e.config.closeVideoTouch||e.ended||(e.paused?e.play():e.pause())}),!1),l.addEventListener("touchend",(function(o){o.preventDefault(),t.hasClass(n,"xgplayer-nostart")?(t.removeClass(n,"xgplayer-nostart"),t.addClass(n,"xgplayer-is-enter"),e.on("canplay",(function(){t.removeClass(n,"xgplayer-is-enter")})),e.once("playing",(function(){t.removeClass(n,"xgplayer-is-enter")})),e.play()):e.paused?e.play():e.pause()})),e.on("play",(function(){"img"===a.type?l.style.backgroundImage='url("'+a.url.pause+'")':u.reset(s.play,s.pause)})),e.on("pause",(function(){"img"===a.type?l.style.backgroundImage='url("'+a.url.play+'")':u.reset(s.pause,s.play)}))):(t.addClass(n,"xgplayer-mobile-npassed"),e.once("ready",(function(){e.video.controls=e.config.controls,e.video.controlsList=e.config.controlsList.join(" "),e.config.poster&&(e.video.poster=e.config.poster)}))),e.config.debug&&function(e){var t={};Object.assign(t,{host:"127.0.0.1",port:9090},e);var n=document.createElement("script"),o=document.createElement("h4");o.style.cssText="position:fixed;bottom:0;padding:10px;width:100%;background-color:#fff;text-align:center",o.textContent="weinre --boundHost "+t.host+" --httpPort "+t.port+"\r\n 启动服务后，刷新页面",n.anonymous=!0,n.async=!0,n.src="http://"+t.host+":"+t.port+"/target/target-script-min.js#anonymous",n.onload=function(){o.parentNode.removeChild(o)},document.body.appendChild(n),document.body.appendChild(o)}(e.config.debug)}))},"./src/control/pc.js":
/*!***************************!*\
  !*** ./src/control/pc.js ***!
  \***************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("pc",(function(){var e=this,t=i.default.util,n=e.controls,o=e.root,r=0,a=void 0,s=e.config.centerBtn?e.config.centerBtn:{},l=void 0,c=void 0,u=void 0;"img"===s.type?c=i.default.util.createImgBtn("start",s.url.play,s.width,s.height):(l={pause:s.pausePath?s.pausePath:"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",play:s.playPath?s.playPath:"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"},c=t.createDom("xg-start",'\n          <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(0.04,0.04)" d="'+l.pause+'"></path>\n          </svg>',{},"xgplayer-start"),u=c.querySelector("path"));var d=t.createDom("xg-enter",'<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>',{},"xgplayer-enter"),p=d.querySelector(".xgplayer-enter-logo");o.appendChild(c),o.appendChild(d);var f=d.querySelector(".xgplayer-enter-tips"),h=new Image;function g(){t.removeClass(o,"xgplayer-is-enter")}function v(){t.removeClass(o,"xgplayer-is-enter")}function m(){"img"===s.type?c.style.backgroundImage='url("'+s.url.pause+'")':u.setAttribute("d",l.pause),c.style.display="inline-block",t.addClass(c,"xgplayer-start-interact")}function y(){"img"===s.type?c.style.backgroundImage='url("'+s.url.play+'")':u.setAttribute("d",l.play),c.style.display="inline-block",t.addClass(c,"xgplayer-start-interact")}function b(t){e.config.autoplay&&e.start()}h.onload=function(){f.style.display="block"},e.config.enterLogo&&e.config.enterLogo.url&&e.config.enterLogo.width&&e.config.enterLogo.height?(h.src=e.config.enterLogo.url,p.style.backgroundImage='url("'+e.config.enterLogo.url+'")',p.style.width=e.config.enterLogo.width+"px",p.style.height=e.config.enterLogo.height+"px",p.style.backgroundSize=e.config.enterLogo.width+"px "+e.config.enterLogo.height+"px",p.style.margin="-"+e.config.enterLogo.height/2+"px auto auto -"+e.config.enterLogo.width/2+"px",f.style.margin=e.config.enterLogo.height-6+"px auto auto -62px"):h.src=t.getBgImage(p),e.config.enterTips&&e.config.enterTips.background&&(f.style.background=""+e.config.enterTips.background),e.config.enterBg&&(e.config.enterBg.url?d.style.backgroundImage='url("'+e.config.enterBg.url+'")':e.config.enterBg.color&&(d.style.background=e.config.enterBg.color)),["click","touchend"].forEach((function(n){c.addEventListener(n,(function(n){!function(n){n.preventDefault(),n.stopPropagation(),t.hasClass(o,"xgplayer-nostart")?(t.removeClass(o,"xgplayer-nostart"),t.addClass(o,"xgplayer-is-enter"),e.on("canplay",g),e.once("playing",v),o.querySelector("video")||e.start(),e.play()):e.paused&&(t.removeClass(o,"xgplayer-nostart xgplayer-isloading"),setTimeout((function(){e.play()}),10))}(n)}),!1)})),c.addEventListener("animationend",(function(e){!function(e){e.preventDefault(),t.removeClass(c,"xgplayer-start-interact"),c.style.display="none"}(e)})),e.on("play",m),e.on("pause",y),e.onElementClick=function(e,n){e.preventDefault(),e.stopPropagation();var o=this;o.config.closeVideoClick||(r++,a&&clearTimeout(a),1===r?a=setTimeout((function(){if(t.hasClass(o.root,"xgplayer-nostart"))return!1;o.ended||(o.paused?o.play():o.pause()),r=0}),200):r=0)},e.video.addEventListener("click",(function(t){e.onElementClick(t,e.video)}),!1),e.onElementDblclick=function(e,t){e.preventDefault(),e.stopPropagation();if(!this.config.closeVideoDblclick){var o=n.querySelector(".xgplayer-fullscreen");if(o){var r=void 0;document.createEvent?(r=document.createEvent("Event")).initEvent("click",!0,!0):r=new Event("click"),o.dispatchEvent(r)}}},e.video.addEventListener("dblclick",(function(t){e.onElementDblclick(t,e.video)}),!1),o.addEventListener("mouseenter",(function(){clearTimeout(e.leavePlayerTimer),e.emit("focus",e)}),!1),o.addEventListener("mouseleave",(function(){e.config.closePlayerBlur||(e.leavePlayerTimer=setTimeout((function(){e.emit("blur",e)}),e.config.leavePlayerTime||0))}),!1),n.addEventListener("mouseenter",(function(t){e.userTimer&&clearTimeout(e.userTimer)}),!1),n.addEventListener("mouseleave",(function(t){e.config.closeControlsBlur||e.emit("focus",e)}),!1),e.once("ready",b),e.once("destroy",(function t(){e.off("canplay",g),e.off("playing",v),e.off("play",m),e.off("pause",y),e.off("ready",b),e.off("destroy",t)}))}))},"./src/control/pip.js":
/*!****************************!*\
  !*** ./src/control/pip.js ***!
  \****************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("pip",(function(){var e=this,t=i.default.util;if(e.config.pip){var n=t.createDom("xg-pip",'<p class="name"><span>画中画</span></p>',{tabindex:9},"xgplayer-pip"),o=e.controls,r=e.root;o.appendChild(n);["click","touchstart"].forEach((function(o){n.addEventListener(o,(function(n){n.preventDefault(),n.stopPropagation(),t.hasClass(r,"xgplayer-pip-active")?e.exitPIP(e):e.getPIP(e)}))}))}}))},"./src/control/play.js":
/*!*****************************!*\
  !*** ./src/control/play.js ***!
  \*****************************/
/*! no static exports found */function(e,t,n){"use strict";var o=i(n(/*! ../player */"./src/player.js")),r=i(n(/*! ../utils/svg */"./src/utils/svg.js"));function i(e){return e&&e.__esModule?e:{default:e}}o.default.install("play",(function(){var e=this,t=e.controls,n=o.default.util,i=e.config.iconScale||.0320625,a={play:"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",pause:"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"},s=e.config.playBtn?e.config.playBtn:{},l=void 0,c=void 0,u=void 0;"img"===s.type?l=o.default.util.createImgBtn("play",s.url.play,s.width,s.height):(l=n.createDom("xg-play",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale('+i+" "+i+')" d="'+a.play+'"></path>\n          </svg></xg-icon>',{},"xgplayer-play"),c=l.querySelector("path"),u=new r.default({progress:function(e,t){c.setAttribute("d",u.toSVGString(e))},from:a.pause,to:a.play,duration:50}));var d=e.config.lang&&"zh-cn"===e.config.lang?"播放":"Play",p=e.config.lang&&"zh-cn"===e.config.lang?"暂停":"Pause",f=n.createDom("xg-tips",d,{},"xgplayer-tips");l.appendChild(f);function h(){"img"===s.type?l.style.backgroundImage='url("'+s.url.pause+'")':setTimeout((function(){f.textContent=p,u.to!==a.pause&&u.reset(a.pause,a.play)}),80)}function g(){"img"===s.type?l.style.backgroundImage='url("'+s.url.play+'")':setTimeout((function(){f.textContent=d,u.to!==a.play&&u.reset(a.play,a.pause)}),80)}t.appendChild(l),["click","touchstart"].forEach((function(t){l.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),e.ended||(e.paused?e.play():e.pause())}),!1)})),e.on("play",h),e.on("pause",g),e.once("destroy",(function t(){e.off("play",h),e.off("pause",g),e.off("destroy",t)}))}))},"./src/control/playNext.js":
/*!*********************************!*\
  !*** ./src/control/playNext.js ***!
  \*********************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("playNext",(function(){var e=this,t=i.default.util,n=e.controls,o=e.config.playNextBtn,r=-1;if(o&&o.urlList){var a=void 0;a="img"===o.type?i.default.util.createImgBtn("playNext",o.url,o.width,o.height):t.createDom("xg-playNext",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                <path transform="scale(0.025 0.025)"\n                d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n            </svg></xg-icon>',{},"xgplayer-playNext"),n.appendChild(a);["click","touchend"].forEach((function(t){a.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),r+1<o.urlList.length?(r++,e.video.pause(),e.currentTime=0,e.video.autoplay=!0,e.src=o.urlList[r],e.emit("playerNext",r+1)):e.emit("urlList last")}),!1)}))}}))},"./src/control/playbackRate.js":
/*!*************************************!*\
  !*** ./src/control/playbackRate.js ***!
  \*************************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("playbackRate",(function(){var e=this,t=i.default.util,n=0,o=1,r=[];if(!e.config.playbackRate)return!1;e.config.playbackRate.sort((function(e,t){return e-t})),e.config.playbackRate.forEach((function(t,i){e.config.defaultPlaybackRate&&e.config.defaultPlaybackRate===t?(n=i,o=t,e.once("playing",(function(){e.video.playbackRate=t}))):1!==t&&"1"!==t||(n=i),r.push(t+"x")}));var a=e.config.lang&&"zh-cn"===e.config.lang?"倍速":"Speed",s=t.createDom("xg-playback","<p class='name'><span>"+o+"x</span></p>",{},"xgplayer-playback"),l=e.controls,c=t.createDom("xg-tips",a,{},"xgplayer-tips");s.appendChild(c),l.appendChild(s),["touchstart","click"].forEach((function(t){s.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation();var o=t.target||t.srcElement;!o||"p"!==o.tagName.toLocaleLowerCase()&&"span"!==o.tagName.toLocaleLowerCase()||(n=n+1===r.length?0:n+1,s.querySelector("p").innerHTML="<span>"+r[n]+"</span>",e.video.playbackRate=1*r[n].replace(/x$/g,""))}),!1)})),s.addEventListener("mouseenter",(function(t){t.preventDefault(),t.stopPropagation(),c.style.left="50%";var n=c.getBoundingClientRect(),o=e.root.getBoundingClientRect();n.right>o.right&&(c.style.left=-n.right+o.right+16+"px")})),e.on("play",(function(){var t=parseFloat(r[n].substring(0,r[n].length-1));e.video.playbackRate.toFixed(1)!==t.toFixed(1)&&(e.video.playbackRate=t)}))}))},"./src/control/poster.js":
/*!*******************************!*\
  !*** ./src/control/poster.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("poster",(function(){var e=this,t=i.default.util.createDom("xg-poster","",{},"xgplayer-poster"),n=e.root;function o(){t.style.display="none"}e.config.poster&&(t.style.backgroundImage="url("+e.config.poster+")",n.appendChild(t)),e.on("play",o),e.once("destroy",(function t(){e.off("play",o),e.off("destroy",t)}))}))},"./src/control/progress.js":
/*!*********************************!*\
  !*** ./src/control/progress.js ***!
  \*********************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("progress",(function(){var e=this,t=i.default.util,n=t.createDom("xg-progress",'<xg-outer class="xgplayer-progress-outer"><xg-cache class="xgplayer-progress-cache"></xg-cache><xg-played class="xgplayer-progress-played"></xgplayer-played><xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn><xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point><xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail></xg-outer>',{tabindex:1},"xgplayer-progress"),o=e.controls,r=void 0;o.appendChild(n);var a=n.querySelector(".xgplayer-progress-played"),s=n.querySelector(".xgplayer-progress-btn"),l=n.querySelector(".xgplayer-progress-outer"),c=n.querySelector(".xgplayer-progress-cache"),u=n.querySelector(".xgplayer-progress-point"),d=n.querySelector(".xgplayer-progress-thumbnail");function p(o,r){o.addEventListener("mouseenter",(function(e){r&&(t.addClass(o,"xgplayer-progress-dot-show"),t.addClass(n,"xgplayer-progress-dot-active"))})),o.addEventListener("mouseleave",(function(e){r&&(t.removeClass(o,"xgplayer-progress-dot-show"),t.removeClass(n,"xgplayer-progress-dot-active"))})),o.addEventListener("touchend",(function(i){i.preventDefault(),i.stopPropagation(),r&&(t.hasClass(o,"xgplayer-progress-dot-show")||Object.keys(e.dotArr).forEach((function(n){e.dotArr[n]&&t.removeClass(e.dotArr[n],"xgplayer-progress-dot-show")})),t.toggleClass(o,"xgplayer-progress-dot-show"),t.toggleClass(n,"xgplayer-progress-dot-active"))}))}function f(){e.config.progressDot&&"Array"===t.typeOf(e.config.progressDot)&&e.config.progressDot.forEach((function(n){if(n.time>=0&&n.time<=e.duration){var o=t.createDom("xg-progress-dot",n.text?'<span class="xgplayer-progress-tip">'+n.text+"</span>":"",{},"xgplayer-progress-dot");o.style.left=n.time/e.duration*100+"%",l.appendChild(o),e.dotArr[n.time]=o,p(o,n.text)}}))}e.dotArr={},e.once("canplay",f),e.addProgressDot=function(n,o){if(!e.dotArr[n]&&n>=0&&n<=e.duration){var r=t.createDom("xg-progress-dot","",{},"xgplayer-progress-dot");r.style.left=n/e.duration*100+"%",l.appendChild(r),e.dotArr[n]=r,p(r,o)}},e.removeProgressDot=function(t){if(t>=0&&t<=e.duration&&e.dotArr[t]){var n=e.dotArr[t];n.parentNode.removeChild(n),n=null,e.dotArr[t]=null}},e.removeAllProgressDot=function(){Object.keys(e.dotArr).forEach((function(t){if(e.dotArr[t]){var n=e.dotArr[t];n.parentNode.removeChild(n),n=null,e.dotArr[t]=null}}))};var h=0,g=0,v=0,m=0,y=0,b=0,x=[];e.config.thumbnail&&(h=e.config.thumbnail.pic_num,g=e.config.thumbnail.width,v=e.config.thumbnail.height,m=e.config.thumbnail.col,y=e.config.thumbnail.row,x=e.config.thumbnail.urls,d.style.width=g+"px",d.style.height=v+"px"),["touchstart","mousedown"].forEach((function(i){n.addEventListener(i,(function(i){if(i.preventDefault(),i.stopPropagation(),t.event(i),i._target===u||!e.config.allowSeekAfterEnded&&e.ended)return!1;n.focus(),r=n.getBoundingClientRect().width;var l=a.getBoundingClientRect().left,c=function(n){n.preventDefault(),n.stopPropagation(),t.event(n),e.isProgressMoving=!0;var i=n.clientX-l>r?r:n.clientX-l,c=i/r*e.duration;if(a.style.width=100*i/r+"%",i-7<0?(s.style.left="0px",s.style.transform=""):i+7>r?(s.style.left=r-14+"px",s.style.transform=""):(s.style.left="100%",s.style.transform="translate(-50%, 0)"),"video"!==e.videoConfig.mediaType||e.dash||e.config.closeMoveSeek){var u=t.findDom(o,".xgplayer-time");u&&(u.innerHTML="<span>"+t.format(c||0)+"</span><em>"+t.format(e.duration))}else e.currentTime=Number(c).toFixed(1);e.emit("focus")},d=function o(i){if(i.preventDefault(),i.stopPropagation(),t.event(i),window.removeEventListener("mousemove",c),window.removeEventListener("touchmove",c,{passive:!1}),window.removeEventListener("mouseup",o),window.removeEventListener("touchend",o),n.blur(),!e.isProgressMoving||"audio"===e.videoConfig.mediaType||e.dash||e.config.closeMoveSeek){var u=i.clientX-l,d=u/r*e.duration;a.style.width=100*u/r+"%",u-7<0?(s.style.left="0px",s.style.transform=""):u+7>r?(s.style.left=r-14+"px",s.style.transform=""):(s.style.left="100%",s.style.transform="translate(-50%, 0)"),e.currentTime=Number(d).toFixed(1)}e.emit("focus"),e.isProgressMoving=!1};return window.addEventListener("mousemove",c),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("mouseup",d),window.addEventListener("touchend",d),!1}))})),n.addEventListener("mouseenter",(function(o){if(!e.config.allowSeekAfterEnded&&e.ended)return!1;var r=n.getBoundingClientRect().left,i=n.getBoundingClientRect().width,a=function(o){var a=(o.clientX-r)/i*e.duration;a=a<0?0:a,u.textContent=t.format(a);var s=u.getBoundingClientRect().width;if(e.config.thumbnail){b=e.duration/h;var l=Math.floor(a/b);d.style.backgroundImage="url("+x[Math.ceil((l+1)/(m*y))-1]+")";var c=l+1-m*y*(Math.ceil((l+1)/(m*y))-1),p=Math.ceil(c/y)-1,f=c-p*y-1;d.style["background-position"]="-"+f*g+"px -"+p*v+"px";var w=o.clientX-r-g/2;w=(w=w>0?w:0)<i-g?w:i-g,d.style.left=w+"px",d.style.top=-10-v+"px",d.style.display="block",u.style.left=w+g/2-s/2+"px"}else{var _=o.clientX-r-s/2;_=(_=_>0?_:0)>i-s?i-s:_,u.style.left=_+"px"}t.hasClass(n,"xgplayer-progress-dot-active")?u.style.display="none":u.style.display="block"},s=function(e){a(e)};n.addEventListener("mousemove",s,!1),n.addEventListener("mouseleave",(function e(t){n.removeEventListener("mousemove",s,!1),n.removeEventListener("mouseleave",e,!1),a(t),u.style.display="none",d.style.display="none"}),!1),a(o)}),!1);var w=!1,_=function(){if(!r&&n&&(r=n.getBoundingClientRect().width),"audio"!==e.videoConfig.mediaType||!e.isProgressMoving||!e.dash){a.style.width=100*e.currentTime/e.duration+"%";var t=e.currentTime/e.duration*r-7;if(t<0)s.style.left="0px",s.style.transform="",w=!1;else if(t+14>r)s.style.left=r-14+"px",s.style.transform="",w=!1;else{if(w)return;s.style.left="100%",s.style.transform="translate(-50%, 0)",w=!0}}};e.on("timeupdate",_);var k=function(){var t=e.buffered;if(t&&t.length>0){for(var n=t.end(t.length-1),o=0,r=t.length;o<r;o++)if(e.currentTime>=t.start(o)&&e.currentTime<=t.end(o)){n=t.end(o);for(var i=o+1;i<t.length;i++)if(t.start(i)-t.end(i-1)>=2){n=t.end(i-1);break}break}c.style.width=n/e.duration*100+"%"}},E=["bufferedChange","cacheupdate","ended","timeupdate"];E.forEach((function(t){e.on(t,k)})),e.once("destroy",(function t(){e.removeAllProgressDot(),e.off("canplay",f),e.off("timeupdate",_),E.forEach((function(t){e.off(t,k)})),e.off("destroy",t)}))}))},"./src/control/replay.js":
/*!*******************************!*\
  !*** ./src/control/replay.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("replay",(function(){var e=this,t=i.default.util,n=e.config.centerBtn?e.config.centerBtn:{},o=void 0,r=void 0,a=void 0,s=void 0;if(!(navigator.userAgent.indexOf("iPhone OS 9")>-1)){if("img"===n.type){if(r=t.createDom("xg-replay",'<div class="xgplayer-replay-img"></div>',{},"xgplayer-replay"),(a=r.querySelector(".xgplayer-replay-img")).style.backgroundImage='url("'+n.url.replay+'")',n.width&&n.height){var l=void 0,c=void 0,u=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.width.indexOf(e)>-1&&n.height.indexOf(e)>-1)||(l=parseFloat(n.width.slice(0,n.width.indexOf(e)).trim()),c=parseFloat(n.height.slice(0,n.height.indexOf(e)).trim()),u=e,!1)})),a.style.width=""+l+u,a.style.height=""+c+u,a.style.backgroundSize=""+l+u+" "+c+u,a.style.margin="-"+c/2+u+" auto auto -"+l/2+u}}else o={replay:n.replayPath?n.replayPath:"M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"},s=(r=t.createDom("xg-replay",'\n          <svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">\n            <path d="'+o.replay+'"></path>\n          </svg>\n          <xg-replay-txt class="xgplayer-replay-txt">重播</xg-replay-txt>\n          ',{},"xgplayer-replay")).querySelector(".xgplayer-replay-svg");var d=e.root;d.appendChild(r),e.on("ended",p),(s||a).addEventListener("click",(function(n){n.preventDefault(),t.removeClass(d,"replay"),e.replay()})),e.once("destroy",(function t(){e.off("ended",p),e.off("destroy",t)}))}function p(){if("img"===n.type)a.style.backgroundImage='url("'+n.url.replay+'")';else{r.querySelector(".xgplayer-replay-txt").textContent=e.lang.REPLAY;var o=r.querySelector("path"),i=window.getComputedStyle(o).getPropertyValue("transform");"none"!==i&&o.setAttribute("transform",i)}e.config.loop||t.addClass(d,"replay")}}))},"./src/control/rotate.js":
/*!*******************************!*\
  !*** ./src/control/rotate.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("rotate",(function(){var e=this;if(this.config.rotate){!0===this.config.rotate&&(this.config.rotate={});var t=i.default.util,n=t.createDom("xg-rotate",'<xg-icon class="xgplayer-icon xgplayer-rotate-img"></xg-icon>',{},"xgplayer-rotate"),o=e.config.lang&&"zh-cn"===e.config.lang?"旋转":"Rotate",r=t.createDom("xg-tips",o,{},"xgplayer-tips");n.appendChild(r),e.controls.appendChild(n);var a=0;e.rotate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=e.root.offsetWidth,o=e.root.offsetHeight;e.config.rotate.innerRotate||(e.root.style.width=o+"px",e.root.style.height=n+"px");var r=e.config.rotate.clockwise?1:-1,i=void 0;i=.25===(a=(a+1+.25*r*t)%1)||.75===a?(e.config.rotate.innerRotate,(o/n).toFixed(2)):1,e.video.style.transformOrigin="center center",e.video.style.transform="rotate("+a+"turn) scale("+i+")",e.video.style.webKitTransform="rotate("+a+"turn) scale("+i+")",e.emit("rotate",360*a)},n.addEventListener("mouseenter",(function(t){t.preventDefault(),t.stopPropagation(),r.style.left="50%";var n=r.getBoundingClientRect(),o=e.root.getBoundingClientRect();n.right>o.right&&(r.style.left=-n.right+o.right+16+"px")})),n.addEventListener("click",(function(){e.rotate()}))}}))},"./src/control/screenShot.js":
/*!***********************************!*\
  !*** ./src/control/screenShot.js ***!
  \***********************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("screenShot",(function(){var e=this,t=i.default.util;if(e.config.screenShot){var n=t.createDom("xg-screenShot",'<p class="name"><span>截图</span></p>',{tabindex:11},"xgplayer-screenShot"),o=document.createElement("canvas"),r=o.getContext("2d"),a=new Image;o.width=this.config.width||600,o.height=this.config.height||337.5,e.controls.appendChild(n);["click","touchstart"].forEach((function(t){n.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),a.onload=(r.drawImage(e.video,0,0,o.width,o.height),a.setAttribute("crossOrigin","anonymous"),a.src=o.toDataURL("image/png").replace("image/png","image/octet-stream"),void function(e,t){var n=document.createElement("a");n.href=e,n.download=t;var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)}(a.src.replace(/^data:image\/[^;]+/,"data:application/octet-stream"),"截图.png"))}))}))}}))},"./src/control/textTrack.js":
/*!**********************************!*\
  !*** ./src/control/textTrack.js ***!
  \**********************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("textTrack",(function(){if(-1!==navigator.userAgent.indexOf("Chrome")){var e=this,t=i.default.util,n=(i.default.sniffer,t.createDom("xg-textTrack","",{tabindex:7},"xgplayer-textTrack")),o=e.controls,r=e.config.textTrack;r&&Array.isArray(r)&&r.length>1&&(t.addClass(e.root,"xgplayer-is-textTrack"),e.on("canplay",(function(){var i=["<ul>"];i.push("<li class=''}'>关闭</li>"),r.forEach((function(e){i.push("<li class='"+(e.default?"textTrack":"")+"'>"+e.label+"</li>")}));var a=e.config.lang&&"zh-cn"===e.config.lang?"字幕":"Caption";i.push('</ul><p class="name"><em>'+a+"</em></p>");var s=o.querySelector(".xgplayer-textTrack");s?(s.innerHTML=i.join(""),s.querySelector(".name").addEventListener("mouseenter",(function(n){n.preventDefault(),n.stopPropagation(),t.addClass(e.root,"xgplayer-textTrack-active"),s.focus()}))):(n.innerHTML=i.join(""),n.querySelector(".name").addEventListener("mouseenter",(function(o){o.preventDefault(),o.stopPropagation(),t.addClass(e.root,"xgplayer-textTrack-active"),n.focus()})),o.appendChild(n))}))),["touchend","click"].forEach((function(o){n.addEventListener(o,(function(n){n.preventDefault(),n.stopPropagation();var o=n.target||n.srcElement;if(o&&"li"===o.tagName.toLocaleLowerCase()){Array.prototype.forEach.call(o.parentNode.childNodes,(function(e){t.removeClass(e,"textTrack")})),t.addClass(o,"textTrack");var i=e.root.getElementsByTagName("Track");"关闭"===o.innerHTML?(i[0].track.mode="hidden",t.removeClass(e.root,"xgplayer-textTrack-active")):(t.hasClass(e.root,"xgplayer-textTrack-active")||t.addClass(e.root,"xgplayer-textTrack-active"),i[0].track.mode="showing",r.some((function(e){if(e.label===o.innerHTML)return i[0].src=e.src,e.kind&&(i[0].kind=e.kind),i[0].label=e.label,e.srclang&&(i[0].srclang=e.srclang),!0})),e.emit("textTrackChange",o.innerHTML))}}),!1)})),n.addEventListener("mouseleave",(function(n){n.preventDefault(),n.stopPropagation(),t.removeClass(e.root,"xgplayer-textTrack-active")}))}}))},"./src/control/time.js":
/*!*****************************!*\
  !*** ./src/control/time.js ***!
  \*****************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! ../player */"./src/player.js"),i=(o=r)&&o.__esModule?o:{default:o};i.default.install("time",(function(){var e=this,t=i.default.util,n=t.format,o=t.createDom("xg-time","<span>"+(e.currentTime||n(0))+"</span><em>"+(e.duration||n(0))+"</em>",{},"xgplayer-time");e.controls.appendChild(o);var r=function(){"audio"===e.videoConfig.mediaType&&e.isProgressMoving&&e.dash||(o.innerHTML="<span>"+n(e.currentTime||0)+"</span><em>"+n(e.duration))};e.on("durationchange",r),e.on("timeupdate",r),e.once("destroy",(function t(){e.off("durationchange",r),e.off("timeupdate",r),e.off("destroy",t)}))}))},"./src/control/volume.js":
/*!*******************************!*\
  !*** ./src/control/volume.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";var o=i(n(/*! ../player */"./src/player.js")),r=i(n(/*! ../utils/svg */"./src/utils/svg.js"));function i(e){return e&&e.__esModule?e:{default:e}}o.default.install("volume",(function(){var e=this,t=o.default.util,n=o.default.sniffer;function i(){e.config.autoplay&&e.config.autoplayMuted?e.volume=0:e.volume=e.config.volume}e.config.autoplayMuted&&(e.config.volume=e.config.autoplay?0:e.config.volume),e.once("canplay",i);var a=e.config.volume;if("mobile"!==n.device){var s={muted:"M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",small:"M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z",large:"M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"},l=function(e){return 0===e?"muted":e<.5?"small":"large"},c=s[l(a)],u=s[l(a)],d=t.createDom("xg-volume",'<xg-icon class="xgplayer-icon">\n                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                        <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                        <path transform="scale(0.0220625 0.0220625)" d="'+u+'"></path>\n                                                    </svg>\n                                                </xg-icon>\n                                                <xg-slider class="xgplayer-slider" tabindex="2">\n                                                    <xg-bar class="xgplayer-bar">\n                                                        <xg-drag class="xgplayer-drag"></xg-drag>\n                                                    </xg-bar>\n                                                </xg-slider>',{},"xgplayer-volume");e.controls.appendChild(d);var p=void 0,f=d.querySelector(".xgplayer-slider"),h=d.querySelector(".xgplayer-bar"),g=d.querySelector(".xgplayer-drag"),v=d.querySelector(".xgplayer-icon");g.style.height=100*e.config.volume+"%";var m=d.querySelectorAll("path")[1],y=new r.default({progress:function(e,t){var n=y.toSVGString(e);m.setAttribute("d",n),c=n},from:c,to:s.large}),b=null;f.volume=e.config.volume,["touchstart","mousedown"].forEach((function(n){h.addEventListener(n,(function(n){n.preventDefault(),n.stopPropagation(),e.video.muted=!1,f.focus(),t.event(n),p=h.getBoundingClientRect().height;n.clientX;var o=n.clientY,r=g.getBoundingClientRect().height,i=!1,a=function(n){n.preventDefault(),n.stopPropagation(),t.event(n),i=!0;var a=r-n.clientY+o,s=a/p;g.style.height=a+"px",e.volume=Math.max(Math.min(s,1),.01)},s=function n(o){if(o.preventDefault(),o.stopPropagation(),t.event(o),window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),b||(b=h.getBoundingClientRect()),!i){var r=b.height-(o.clientY-b.top),s=r/b.height;g.style.height=r+"px",s<=0&&(e.volume>0?g.volume=e.video.volume:s=g.volume),e.volume=Math.max(Math.min(s,1),.01)}f.volume=e.volume,i=!1};return window.addEventListener("mousemove",a),window.addEventListener("touchmove",a),window.addEventListener("mouseup",s),window.addEventListener("touchend",s),!1}))})),["touchstart","mousedown"].forEach((function(t){v.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),e.video.muted=!1,0===e.volume?e.volume=f.volume:e.volume=0}))})),v.addEventListener("mouseenter",(function(n){n.preventDefault(),n.stopPropagation(),t.addClass(e.root,"xgplayer-volume-active"),d.focus()})),d.addEventListener("blur",(function(n){n.preventDefault(),n.stopPropagation(),t.removeClass(e.root,"xgplayer-volume-active")})),d.addEventListener("mouseleave",(function(n){n.preventDefault(),n.stopPropagation(),t.removeClass(e.root,"xgplayer-volume-active")}));var x=null;e.on("volumechange",T),e.once("destroy",(function t(){e.off("canplay",i),e.off("volumechange",T),e.off("destroy",t)}))}else{var w={muted:"M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",large:"M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"},_=function(e){return 0===e?"muted":"large"},k=w[_(a)],E=w[_(a)],C=t.createDom("xg-volume",'<xg-icon class="xgplayer-icon">\n                                                      <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                          <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                          <path transform="scale(0.0220625 0.0220625)" d="'+E+'"></path>\n                                                      </svg>\n                                                  </xg-icon>',{},"xgplayer-volume");e.controls.appendChild(C);var S=C.querySelector(".xgplayer-icon"),P=C.querySelectorAll("path")[1],j=new r.default({progress:function(e,t){var n=j.toSVGString(e);P.setAttribute("d",n),k=n},from:k,to:w.large});["touchend","mousedown"].forEach((function(t){S.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),e.video.muted?(e.video.muted=!1,e.volume=1,j.reset(w.large,w.muted),k=w.large):(e.volume=0,e.video.muted=!0,j.reset(w.muted,w.large),k=w.muted)}))}))}function T(){x&&clearTimeout(x),x=setTimeout((function(){y.reset(s[l(e.volume)],c),c=s[l[e.volume]],p||(p=h.getBoundingClientRect().height||76),g.style.height=e.volume*p+"px"}),50)}}))},"./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! ../package.json */"./package.json");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i={network:{code:1,msg:"视频下载错误",remark:"只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在"},mse:{code:2,msg:"流追加错误",remark:"追加流的时候如果类型不对、无法被正确解码则会触发此类错误"},parse:{code:3,msg:"解析错误",remark:"mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误"},format:{code:4,msg:"格式错误",remark:"如果浏览器不支持的格式导致播放错误"},decoder:{code:5,msg:"解码错误",remark:"浏览器解码异常会抛出此类型错误"},runtime:{code:6,msg:"语法错误",remark:"播放器语法错误"},timeout:{code:7,msg:"播放超时",remark:"播放过程中无法正常请求下一个分段导致播放中断"},other:{code:8,msg:"其他错误",remark:"不可知的错误或被忽略的错误类型"}};t.default=function e(t,n,a,s,l,c,u,d){var p=arguments.length>8&&void 0!==arguments[8]?arguments[8]:{line:"",handle:"",msg:"",version:""};r(this,e);var f={};return f.playerVersion=o.version,f.errorType=t,f.domain=document.domain,f.duration=a,f.currentTime=n,f.networkState=s,f.readyState=l,f.currentSrc=u,f.src=c,f.ended=d,f.errd=p,f.ex=(i[t]||{}).msg,f},e.exports=t.default},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=M(n(/*! ./player */"./src/player.js")),r=M(n(/*! ./control/volume.js */"./src/control/volume.js")),i=M(n(/*! ./control/time.js */"./src/control/time.js")),a=M(n(/*! ./control/textTrack.js */"./src/control/textTrack.js")),s=M(n(/*! ./control/screenShot.js */"./src/control/screenShot.js")),l=M(n(/*! ./control/rotate.js */"./src/control/rotate.js")),c=M(n(/*! ./control/replay.js */"./src/control/replay.js")),u=M(n(/*! ./control/progress.js */"./src/control/progress.js")),d=M(n(/*! ./control/poster.js */"./src/control/poster.js")),p=M(n(/*! ./control/playNext.js */"./src/control/playNext.js")),f=M(n(/*! ./control/playbackRate.js */"./src/control/playbackRate.js")),h=M(n(/*! ./control/play.js */"./src/control/play.js")),g=M(n(/*! ./control/pip.js */"./src/control/pip.js")),v=M(n(/*! ./control/pc.js */"./src/control/pc.js")),m=M(n(/*! ./control/mobile.js */"./src/control/mobile.js")),y=M(n(/*! ./control/logger.js */"./src/control/logger.js")),b=M(n(/*! ./control/localPreview.js */"./src/control/localPreview.js")),x=M(n(/*! ./control/loading.js */"./src/control/loading.js")),w=M(n(/*! ./control/i18n.js */"./src/control/i18n.js")),_=M(n(/*! ./control/fullscreen.js */"./src/control/fullscreen.js")),k=M(n(/*! ./control/flex.js */"./src/control/flex.js")),E=M(n(/*! ./control/error.js */"./src/control/error.js")),C=M(n(/*! ./control/download.js */"./src/control/download.js")),S=M(n(/*! ./control/definition.js */"./src/control/definition.js")),P=M(n(/*! ./control/danmu.js */"./src/control/danmu.js")),j=M(n(/*! ./control/cssFullscreen.js */"./src/control/cssFullscreen.js")),T=M(n(/*! ./control/collect.js */"./src/control/collect.js"));function M(e){return e&&e.__esModule?e:{default:e}}n(/*! ./style/index.scss */"./src/style/index.scss");var O={};function L(e,t,n){var o=e;t.map((function(e,r){o[e]=r==t.length-1?n:o[e]||{},o=o[e]}))}L(O,["control","collect"],T.default),L(O,["control","cssFullscreen"],j.default),L(O,["control","danmu"],P.default),L(O,["control","definition"],S.default),L(O,["control","download"],C.default),L(O,["control","error"],E.default),L(O,["control","flex"],k.default),L(O,["control","fullscreen"],_.default),L(O,["control","i18n"],w.default),L(O,["control","loading"],x.default),L(O,["control","localPreview"],b.default),L(O,["control","logger"],y.default),L(O,["control","mobile"],m.default),L(O,["control","pc"],v.default),L(O,["control","pip"],g.default),L(O,["control","play"],h.default),L(O,["control","playbackRate"],f.default),L(O,["control","playNext"],p.default),L(O,["control","poster"],d.default),L(O,["control","progress"],u.default),L(O,["control","replay"],c.default),L(O,["control","rotate"],l.default),L(O,["control","screenShot"],s.default),L(O,["control","textTrack"],a.default),L(O,["control","time"],i.default),L(O,["control","volume"],r.default),t.default=o.default,e.exports=t.default},"./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},i=p(n(/*! ./proxy */"./src/proxy.js")),a=p(n(/*! ./utils/util */"./src/utils/util.js")),s=p(n(/*! ./utils/database */"./src/utils/database.js")),l=p(n(/*! ./utils/sniffer */"./src/utils/sniffer.js")),c=p(n(/*! ./error */"./src/error.js")),u=p(n(/*! draggabilly */"./node_modules/draggabilly/draggabilly.js")),d=n(/*! ../package.json */"./package.json");function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n.config=a.default.deepCopy({width:600,height:337.5,ignores:[],whitelist:[],lang:(document.documentElement.getAttribute("lang")||navigator.language||"zh-cn").toLocaleLowerCase(),inactive:3e3,volume:.6,controls:!0,controlsList:["nodownload"]},e),n.version=d.version,n.userTimer=null,n.waitTimer=null,n.database=new s.default,n.history=[],n.isProgressMoving=!1,n.root=a.default.findDom(document,"#"+n.config.id),n.controls=a.default.createDom("xg-controls","",{unselectable:"on",onselectstart:"return false"},"xgplayer-controls"),!n.root){var o=n.config.el;if(!o||1!==o.nodeType)return n.emit("error",new c.default("use",n.config.vid,{line:32,handle:"Constructor",msg:"container id can't be empty"})),!1,f(n,!1);n.root=o}if(a.default.addClass(n.root,"xgplayer xgplayer-"+l.default.device+" xgplayer-nostart "+(n.config.controls?"":"no-controls")),n.root.appendChild(n.controls),n.config.fluid?(n.root.style["max-width"]="100%",n.root.style.width="100%",n.root.style.height="0",n.root.style["padding-top"]=100*n.config.height/n.config.width+"%",n.video.style.position="absolute",n.video.style.top="0",n.video.style.left="0"):(n.root.style.width=n.config.width+"px",n.root.style.height=n.config.height+"px"),n.config.execBeforePluginsCall&&n.config.execBeforePluginsCall.forEach((function(e){e.call(n,n)})),n.config.controlStyle&&"String"===a.default.typeOf(n.config.controlStyle)){var r=n;fetch(r.config.controlStyle,{method:"GET",headers:{Accept:"application/json"}}).then((function(e){e.ok&&e.json().then((function(e){for(var t in e)e.hasOwnProperty(t)&&(r.config[t]=e[t]);r.pluginsCall()}))})).catch((function(e){console.log("Fetch错误:"+e)}))}else n.pluginsCall();n.ev.forEach((function(e){var t=Object.keys(e)[0],o=n[e[t]];o&&n.on(t,o)})),["focus","blur"].forEach((function(e){n.on(e,n["on"+e.charAt(0).toUpperCase()+e.slice(1)])}));var i=n;return n.mousemoveFunc=function(){i.emit("focus"),i.config.closeFocusVideoFocus||i.video.focus()},n.root.addEventListener("mousemove",n.mousemoveFunc),n.playFunc=function(){i.emit("focus"),i.config.closePlayVideoFocus||i.video.focus()},i.once("play",n.playFunc),setTimeout((function(){n.emit("ready")}),0),n.config.keyShortcut&&"on"!==n.config.keyShortcut||["video","controls"].forEach((function(e){i[e].addEventListener("keydown",(function(e){i.onKeydown(e,i)}))})),n.config.videoInit&&a.default.hasClass(n.root,"xgplayer-nostart")&&n.start(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"start",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.url,o=this.root,r=this;n&&""!==n||this.emit("urlNull"),this.logParams.playSrc=n,this.canPlayFunc=function(){var e=r.video.play();void 0!==e&&e&&e.then((function(){r.emit("autoplay started")})).catch((function(){r.emit("autoplay was prevented"),t.util.addClass(r.root,"xgplayer-is-autoplay")})),r.off("canplay",r.canPlayFunc)},"String"===a.default.typeOf(n)?this.video.src=n:n.forEach((function(t){e.video.appendChild(a.default.createDom("source","",{src:""+t.src,type:""+(t.type||"")}))})),this.logParams.pt=(new Date).getTime(),this.logParams.vt=this.logParams.pt,this.loadeddataFunc=function(){r.logParams.vt=(new Date).getTime(),r.logParams.pt>r.logParams.vt&&(r.logParams.pt=r.logParams.vt),r.logParams.vd=r.video.duration},this.once("loadeddata",this.loadeddataFunc),this.config.autoplay&&this.on("canplay",this.canPlayFunc),o.insertBefore(this.video,o.firstChild),setTimeout((function(){e.emit("complete")}),1)}},{key:"reload",value:function(){this.video.load(),this.reloadFunc=function(){this.play()},this.once("loadeddata",this.reloadFunc)}},{key:"destroy",value:function(){var e=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=this,i=this.root.parentNode;for(var a in clearInterval(this.bulletResizeTimer),this._interval)clearInterval(this._interval[a]),this._interval[a]=null;function s(){for(var e in this.emit("destroy"),this.video.removeAttribute("src"),this.video.load(),n&&i.removeChild(this.root),this)delete this[e];this.off("pause",s)}this.ev.forEach((function(t){var n=Object.keys(t)[0],o=e[t[n]];o&&e.off(n,o)})),this.loadeddataFunc&&this.off("loadeddata",this.loadeddataFunc),this.reloadFunc&&this.off("loadeddata",this.reloadFunc),this.replayFunc&&this.off("play",this.replayFunc),this.playFunc&&this.off("play",this.playFunc),["focus","blur"].forEach((function(t){e.off(t,e["on"+t.charAt(0).toUpperCase()+t.slice(1)])})),this.config.keyShortcut&&"on"!==this.config.keyShortcut||["video","controls"].forEach((function(t){e[t]&&e[t].removeEventListener("keydown",(function(e){o.onKeydown(e,o)}))})),this.paused?s.call(this):(this.pause(),this.once("pause",s)),r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"replay",value:function(){var e=this,t=this._replay;a.default.removeClass(this.root,"xgplayer-ended"),this.logParams={bc:0,bu_acu_t:0,played:[],pt:(new Date).getTime(),vt:(new Date).getTime(),vd:0},this.logParams.pt=(new Date).getTime(),this.logParams.vt=this.logParams.pt,this.replayFunc=function(){e.logParams.vt=(new Date).getTime(),e.logParams.pt>e.logParams.vt&&(e.logParams.pt=e.logParams.vt),e.logParams.vd=e.video.duration},this.once("play",this.replayFunc),this.logParams.playSrc=this.video.currentSrc,t&&t instanceof Function?t():(this.currentTime=0,this.play())}},{key:"pluginsCall",value:function(){var e=this,n=this;if(t.plugins){var o=this.config.ignores;Object.keys(t.plugins).forEach((function(r){var i=t.plugins[r];o.some((function(e){return r===e}))||(["pc","tablet","mobile"].some((function(e){return e===r}))?r===l.default.device&&setTimeout((function(){i.call(n,n)}),0):i.call(e,e))}))}}},{key:"getPIP",value:function(){var e=this.root.getBoundingClientRect(),t=e.top,n=e.left,o=a.default.createDom("xg-pip-lay","<div></div>",{},"xgplayer-pip-lay");this.root.appendChild(o);var r=a.default.createDom("xg-pip-drag",'<div class="drag-handle"><span>点击按住可拖动视频</span></div>',{tabindex:9},"xgplayer-pip-drag");this.root.appendChild(r);new u.default(".xgplayer",{handle:".drag-handle"});a.default.addClass(this.root,"xgplayer-pip-active"),this.root.style.right=0,this.root.style.bottom="200px",this.root.style.top="",this.root.style.left="",this.config.fluid&&(this.root.style["padding-top"]="");var i=this;["click","touchstart"].forEach((function(e){o.addEventListener(e,(function(e){e.preventDefault(),e.stopPropagation(),i.exitPIP(),i.root.style.top=t+"px",i.root.style.left=n+"px"}))}))}},{key:"exitPIP",value:function(){a.default.removeClass(this.root,"xgplayer-pip-active"),this.root.style.right="",this.root.style.bottom="",this.root.style.top="",this.root.style.left="",this.config.fluid&&(this.root.style["padding-top"]=100*this.config.height/this.config.width+"%")}},{key:"onFocus",value:function(){var e=this;a.default.removeClass(this.root,"xgplayer-inactive"),e.userTimer&&clearTimeout(e.userTimer),e.userTimer=setTimeout((function(){e.emit("blur")}),e.config.inactive)}},{key:"onBlur",value:function(){this.paused||this.ended||a.default.addClass(this.root,"xgplayer-inactive")}},{key:"onPlay",value:function(){a.default.addClass(this.root,"xgplayer-playing"),a.default.removeClass(this.root,"xgplayer-pause")}},{key:"onPause",value:function(){a.default.addClass(this.root,"xgplayer-pause"),this.userTimer&&clearTimeout(this.userTimer),this.emit("focus")}},{key:"onEnded",value:function(){a.default.addClass(this.root,"xgplayer-ended"),a.default.removeClass(this.root,"xgplayer-playing")}},{key:"onSeeking",value:function(){}},{key:"onSeeked",value:function(){this.waitTimer&&clearTimeout(this.waitTimer),a.default.removeClass(this.root,"xgplayer-isloading")}},{key:"onWaiting",value:function(){var e=this;e.waitTimer&&clearTimeout(e.waitTimer),e.waitTimer=setTimeout((function(){a.default.addClass(e.root,"xgplayer-isloading")}),500)}},{key:"onPlaying",value:function(){this.waitTimer&&clearTimeout(this.waitTimer),a.default.removeClass(this.root,"xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay"),a.default.addClass(this.root,"xgplayer-playing")}},{key:"onKeydown",value:function(e,t){var n=e||window.event;if(!n||37!==n.keyCode&&38!==n.keyCode&&39!==n.keyCode&&40!==n.keyCode&&32!==n.keyCode||t.emit("focus"),!n||40!==n.keyCode&&38!==n.keyCode)n&&39===n.keyCode?t.currentTime+10<=t.duration?t.currentTime+=10:t.currentTime=t.duration-1:n&&37===n.keyCode?t.currentTime-10>=0?t.currentTime-=10:t.currentTime=0:n&&32===n.keyCode&&(t.paused?t.play():t.pause());else{if(t.controls){var o=t.controls.querySelector(".xgplayer-slider");o&&(a.default.hasClass(o,"xgplayer-none")&&a.default.removeClass(o,"xgplayer-none"),t.sliderTimer&&clearTimeout(t.sliderTimer),t.sliderTimer=setTimeout((function(){a.default.addClass(o,"xgplayer-none")}),t.config.inactive))}n&&40===n.keyCode?t.volume-.1>=0?t.volume-=.1:t.volume=0:n&&38===n.keyCode&&(t.volume+.1<=1?t.volume+=.1:t.volume=1)}}}],[{key:"install",value:function(e,n){t.plugins||(t.plugins={}),t.plugins[e]=n}}]),t}(i.default);h.util=a.default,h.sniffer=l.default,h.Errors=c.default,t.default=h,e.exports=t.default},"./src/proxy.js":
/*!**********************!*\
  !*** ./src/proxy.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(/*! event-emitter */"./node_modules/event-emitter/index.js")),i=s(n(/*! ./utils/util */"./src/utils/util.js")),a=s(n(/*! ./error */"./src/error.js"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logParams={bc:0,bu_acu_t:0,played:[]},this._hasStart=!1,this.videoConfig={controls:!1,autoplay:t.autoplay,playsinline:t.playsinline,"webkit-playsinline":t.playsinline,"x5-playsinline":t.playsinline,"x5-video-player-type":t["x5-video-player-type"],"x5-video-player-fullscreen":t["x5-video-player-fullscreen"],"x5-video-orientation":t["x5-video-orientation"],airplay:t.airplay,"webkit-airplay":t.airplay,tabindex:2,mediaType:t.mediaType||"video"},t.loop&&(this.videoConfig.loop="loop");var n="";if(t.textTrack&&Array.isArray(t.textTrack)&&(navigator.userAgent.indexOf("Chrome")>-1||navigator.userAgent.indexOf("Firefox")>-1)&&(t.textTrack.some((function(e){if(e.src&&e.label&&e.default)return n+='<track src="'+e.src+'" ',e.kind&&(n+='kind="'+e.kind+'" '),n+='label="'+e.label+'" ',e.srclang&&(n+='srclang="'+e.srclang+'" '),n+=(e.default?"default":"")+">",!0})),this.videoConfig.crossorigin="anonymous"),t.textTrackStyle){var o=document.createElement("style");this.textTrackStyle=o,document.head.appendChild(o);var s="";for(var l in t.textTrackStyle)s+=l+": "+t.textTrackStyle[l]+";";var c=t.id?"#"+t.id:t.el.id?"#"+t.el.id:"."+t.el.className;o.sheet.insertRule?o.sheet.insertRule(c+" video::cue { "+s+" }",0):o.sheet.addRule&&o.sheet.addRule(c+" video::cue",s)}this.video=i.default.createDom(this.videoConfig.mediaType,n,this.videoConfig,""),t.autoplay&&(this.video.autoplay=!0,t.autoplayMuted&&(this.video.muted=!0)),this.ev=["play","playing","pause","ended","error","seeking","seeked","timeupdate","waiting","canplay","canplaythrough","durationchange","volumechange","loadeddata"].map((function(e){return t={},n=e,o="on"+e.charAt(0).toUpperCase()+e.slice(1),n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t;var t,n,o})),(0,r.default)(this),this._interval={};var u="0,0",d=this;this.ev.forEach((function(e){d.evItem=Object.keys(e)[0];var t=Object.keys(e)[0];d.video.addEventListener(Object.keys(e)[0],(function(){d.logParams&&("play"===t?d.hasStart=!0:"waiting"===t?(d.logParams.bc++,d.inWaitingStart=(new Date).getTime()):"playing"===t?d.inWaitingStart&&(d.logParams.bu_acu_t+=(new Date).getTime()-d.inWaitingStart,d.inWaitingStart=void 0):"loadeddata"===t?d.logParams.played.push({begin:0,end:-1}):"seeking"===t?d.logParams.played.push({begin:d.video.currentTime,end:-1}):d&&d.logParams&&d.logParams.played&&"timeupdate"===t&&(d.logParams.played.length<1&&d.logParams.played.push({begin:d.video.currentTime,end:-1}),d.logParams.played[d.logParams.played.length-1].end=d.video.currentTime),"error"===t?d.video.error&&d.emit(t,new a.default("other",d.currentTime,d.duration,d.networkState,d.readyState,d.currentSrc,d.src,d.ended,{line:41,msg:d.error,handle:"Constructor"})):d.emit(t,d),d.hasOwnProperty("_interval")&&(["ended","error","timeupdate"].indexOf(t)<0?(clearInterval(d._interval.bufferedChange),i.default.setInterval(d,"bufferedChange",(function(){for(var e=[],t=0,n=d.video.buffered.length;t<n;t++)e.push([d.video.buffered.start(t),d.video.buffered.end(t)]);e.toString()!==u&&(u=e.toString(),d.emit("bufferedChange",e))}),200)):"timeupdate"!==t&&i.default.clearInterval(d,"bufferedChange")))}),!1)}))}return o(e,[{key:"destroy",value:function(){this.textTrackStyle&&this.textTrackStyle.parentNode.removeChild(this.textTrackStyle)}},{key:"play",value:function(){this.video.play()}},{key:"pause",value:function(){this.video.pause()}},{key:"canPlayType",value:function(){this.video.canPlayType()}},{key:"getBufferedRange",value:function(){var e=[0,0],t=this.video,n=t.buffered,o=t.currentTime;if(n)for(var r=0,i=n.length;r<i&&(e[0]=n.start(r),e[1]=n.end(r),!(e[0]<=o&&o<=e[1]));r++);return e[0]-o<=0&&o-e[1]<=0?e:[0,0]}},{key:"hasStart",get:function(){return this._hasStart},set:function(e){"boolean"!=typeof e||!0!==e||this._hasStart||(this._hasStart=!0,this.emit("hasstart"))}},{key:"autoplay",set:function(e){this.video.autoplay=e},get:function(){return this.video.autoplay}},{key:"buffered",get:function(){return this.video.buffered}},{key:"crossOrigin",get:function(){return this.video.crossOrigin},set:function(e){this.video.crossOrigin=e}},{key:"currentSrc",get:function(){return this.video.currentSrc},set:function(e){this.video.currentSrc=e}},{key:"currentTime",get:function(){return this.video.currentTime},set:function(e){this.video.currentTime=e}},{key:"defaultMuted",get:function(){return this.video.defaultMuted},set:function(e){this.video.defaultMuted=e}},{key:"duration",get:function(){return this.video.duration}},{key:"ended",get:function(){return this.video.ended}},{key:"error",get:function(){var e=this.video.error;if(!e)return null;var t=[{en:"MEDIA_ERR_ABORTED",cn:"取回过程被用户中止"},{en:"MEDIA_ERR_NETWORK",cn:"当下载时发生错误"},{en:"MEDIA_ERR_DECODE",cn:"当解码时发生错误"},{en:"MEDIA_ERR_SRC_NOT_SUPPORTED",cn:"不支持音频/视频"}];return this.lang?this.lang[t[e.code-1].en]:t[e.code-1].en}},{key:"loop",get:function(){return this.video.loop},set:function(e){this.video.loop=e}},{key:"muted",get:function(){return this.video.muted},set:function(e){this.video.muted=e}},{key:"networkState",get:function(){var e=[{en:"NETWORK_EMPTY",cn:"音频/视频尚未初始化"},{en:"NETWORK_IDLE",cn:"音频/视频是活动的且已选取资源，但并未使用网络"},{en:"NETWORK_LOADING",cn:"浏览器正在下载数据"},{en:"NETWORK_NO_SOURCE",cn:"未找到音频/视频来源"}];return this.lang?this.lang[e[this.video.networkState].en]:e[this.video.networkState].en}},{key:"paused",get:function(){return this.video.paused}},{key:"playbackRate",get:function(){return this.video.playbackRate},set:function(e){this.video.playbackRate=e}},{key:"played",get:function(){return this.video.played}},{key:"preload",get:function(){return this.video.preload},set:function(e){this.video.preload=e}},{key:"readyState",get:function(){var e=[{en:"HAVE_NOTHING",cn:"没有关于音频/视频是否就绪的信息"},{en:"HAVE_METADATA",cn:"关于音频/视频就绪的元数据"},{en:"HAVE_CURRENT_DATA",cn:"关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒"},{en:"HAVE_FUTURE_DATA",cn:"当前及至少下一帧的数据是可用的"},{en:"HAVE_ENOUGH_DATA",cn:"可用数据足以开始播放"}];return this.lang?this.lang[e[this.video.readyState].en]:e[this.video.readyState]}},{key:"seekable",get:function(){return this.video.seekable}},{key:"seeking",get:function(){return this.video.seeking}},{key:"src",get:function(){return this.video.src},set:function(e){var t=this;i.default.hasClass(this.root,"xgplayer-ended")||this.emit("urlchange",JSON.parse(JSON.stringify(t.logParams))),this.logParams={bc:0,bu_acu_t:0,played:[],pt:(new Date).getTime(),vt:(new Date).getTime(),vd:0},this.video.pause(),this.video.src=e,this.logParams.playSrc=e,this.logParams.pt=(new Date).getTime(),this.logParams.vt=this.logParams.pt,this.once("loadeddata",(function e(){t.logParams.vt=(new Date).getTime(),t.logParams.pt>t.logParams.vt&&(t.logParams.pt=t.logParams.vt),t.logParams.vd=t.video.duration,t.off("loadeddata",e)}))}},{key:"volume",get:function(){return this.video.volume},set:function(e){this.video.volume=e}},{key:"fullscreen",get:function(){return i.default.hasClass(this.root,"xgplayer-is-fullscreen")||i.default.hasClass(this.root,"xgplayer-fullscreen-active")}},{key:"bullet",get:function(){return!!i.default.findDom(this.root,"xg-bullet")&&i.default.hasClass(i.default.findDom(this.root,"xg-bullet"),"xgplayer-has-bullet")}},{key:"textTrack",get:function(){return i.default.hasClass(this.root,"xgplayer-is-textTrack")}},{key:"pip",get:function(){return i.default.hasClass(this.root,"xgplayer-pip-active")}}]),e}();t.default=l,e.exports=t.default},"./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */function(e,t,n){var o=n(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./index.scss */"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/index.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/utils/animation.js":
/*!********************************!*\
  !*** ./src/utils/animation.js ***!
  \********************************/
/*! no static exports found */function(e,t,n){"use strict";!function(){for(var e=0,t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),i=window.setTimeout((function(){t(o+r)}),r);return e=o+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},"./src/utils/database.js":
/*!*******************************!*\
  !*** ./src/utils/database.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"xgplayer",version:1,db:null,ojstore:{name:"xg-m4a",keypath:"vid"}};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.indexedDB=window.indexedDB||window.webkitindexedDB,this.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange,this.myDB=t}return o(e,[{key:"openDB",value:function(e){var t=this,n=this,o=this.myDB.version||1,r=n.indexedDB.open(n.myDB.name,o);r.onerror=function(e){},r.onsuccess=function(o){t.myDB.db=o.target.result,e.call(n)},r.onupgradeneeded=function(e){var t=e.target.result;e.target.transaction;t.objectStoreNames.contains(n.myDB.ojstore.name)||t.createObjectStore(n.myDB.ojstore.name,{keyPath:n.myDB.ojstore.keypath})}}},{key:"deletedb",value:function(){this.indexedDB.deleteDatabase(this.myDB.name)}},{key:"closeDB",value:function(){this.myDB.db.close()}},{key:"addData",value:function(e,t){for(var n=this.myDB.db.transaction(e,"readwrite").objectStore(e),o=void 0,r=0;r<t.length;r++)(o=n.add(t[r])).onerror=function(){},o.onsuccess=function(){}}},{key:"putData",value:function(e,t){for(var n=this.myDB.db.transaction(e,"readwrite").objectStore(e),o=void 0,r=0;r<t.length;r++)(o=n.put(t[r])).onerror=function(){},o.onsuccess=function(){}}},{key:"getDataByKey",value:function(e,t,n){var o=this,r=this.myDB.db.transaction(e,"readwrite").objectStore(e).get(t);r.onerror=function(){n.call(o,null)},r.onsuccess=function(e){var t=e.target.result;n.call(o,t)}}},{key:"deleteData",value:function(e,t){this.myDB.db.transaction(e,"readwrite").objectStore(e).delete(t)}},{key:"clearData",value:function(e){this.myDB.db.transaction(e,"readwrite").objectStore(e).clear()}}]),e}();t.default=r,e.exports=t.default},"./src/utils/sniffer.js":
/*!******************************!*\
  !*** ./src/utils/sniffer.js ***!
  \******************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={get device(){return o.os.isPc?"pc":"mobile"},get browser(){var e=navigator.userAgent.toLowerCase(),t={ie:/rv:([\d.]+)\) like gecko/,firfox:/firefox\/([\d.]+)/,chrome:/chrome\/([\d.]+)/,opera:/opera.([\d.]+)/,safari:/version\/([\d.]+).*safari/};return[].concat(Object.keys(t).filter((function(n){return t[n].test(e)})))[0]},get os(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,o=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),i=/(?:iPad|PlayBook)/.test(e)||o&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),a=/(?:iPhone)/.test(e)&&!i;return{isTablet:i,isPhone:a,isAndroid:o,isPc:!(a||o||n||i),isSymbian:n,isWindowsPhone:t,isFireFox:r}}};t.default=o,e.exports=t.default},"./src/utils/svg.js":
/*!**************************!*\
  !*** ./src/utils/svg.js ***!
  \**************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(/*! pasition */"./node_modules/pasition/dist/pasition.js"),a=(o=i)&&o.__esModule?o:{default:o};n(/*! ./animation */"./src/utils/animation.js");var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.from=t.from,this.to=t.to,this.easing=t.easing||function(e){return e*e},this.duration=t.duration||150,this.curPath="",this.progress=t.progress,this.state=0}return r(e,[{key:"animate",value:function(){var e=this,t=new Date,n=e.duration,o=null,r=e.path2shapes(e.from),i=e.path2shapes(e.to),a=e._preprocessing(r,i);e.state=1;!function r(){var s=new Date-t;if(s>=n||2===e.state)return o=i,e.progress(o,1),window.cancelAnimationFrame(e.tickId),void(e.state=0);var l=e.easing(s/n);o=e._lerp(a[0],a[1],l),e.progress(o,l),e.tickId=window.requestAnimationFrame(r)}()}},{key:"toSVGString",value:function(e){return e.map((function(e){return e.forEach((function(e,t){t?e.splice(0,2,"C"):(e.splice(2,0,"C"),e.unshift("M"))})),e.map((function(e){return e.join(" ")})).join("")})).join("")}},{key:"start",value:function(){this.animate()}},{key:"stop",value:function(){0!==this.state&&(this.state=2),window.cancelAnimationFrame(self.tickId),this.state=0}},{key:"reverse",value:function(){0!==this.state&&this.stop();var e=this.from;this.from=this.to,this.to=e,this.animate()}},{key:"reset",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.from;0!==this.state&&this.stop(),this.from=t,this.to=e,this.animate()}}]),e}();for(var l in a.default)a.default[l]instanceof Function&&!s.prototype[l]&&(s.prototype[l]=a.default[l]);t.default=s,e.exports=t.default},"./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getAbsoluteURL=function(e){if(!e.match(/^https?:\/\//)){var t=document.createElement("div");t.innerHTML='<a href="'+e+'">x</a>',e=t.firstChild.href}return e}},"./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var util={createDom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=document.createElement(e);return r.className=o,r.innerHTML=t,Object.keys(n).forEach((function(t){var o=t,i=n[t];"video"===e||"audio"===e?i&&r.setAttribute(o,i):r.setAttribute(o,i)})),r},hasClass:function(e,t){return e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:function(e,t){e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):util.hasClass(e,t)||(e.className+=" "+t)},removeClass:function(e,t){e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):util.hasClass(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))},toggleClass:function(e,t){t.split(/\s+/g).forEach((function(t){util.hasClass(e,t)?util.removeClass(e,t):util.addClass(e,t)}))},findDom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(o){t.startsWith("#")&&(n=e.getElementById(t.slice(1)))}return n},padStart:function(e,t,n){for(var o=String(n),r=t>>0,i=Math.ceil(r/o.length),a=[],s=String(e);i--;)a.push(o);return a.join("").substring(0,r-s.length)+s},format:function(e){if(window.isNaN(e))return"";var t=util.padStart(Math.floor(e/3600),2,0),n=util.padStart(Math.floor((e-3600*t)/60),2,0),o=util.padStart(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,o]:[t,n,o]).join(":")},event:function(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement},typeOf:function(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]},deepCopy:function(e,t){if("Object"===util.typeOf(t)&&"Object"===util.typeOf(e))return Object.keys(t).forEach((function(n){"Object"!==util.typeOf(t[n])||t[n]instanceof Node?"Array"===util.typeOf(t[n])?e[n]="Array"===util.typeOf(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?util.deepCopy(e[n],t[n]):e[n]=t[n]})),e},getBgImage:function(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href},copyDom:function(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""},setInterval:function(e,t,n,o){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),o))},clearInterval:function(e,t){clearInterval(e._interval[t]),e._interval[t]=null},createImgBtn:function(e,t,n,o){var r=util.createDom("xg-"+e,"",{},"xgplayer-"+e+"-img");if(r.style.backgroundImage='url("'+t+'")',n&&o){var i=void 0,a=void 0,s=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&o.indexOf(e)>-1)||(i=parseFloat(n.slice(0,n.indexOf(e)).trim()),a=parseFloat(o.slice(0,o.indexOf(e)).trim()),s=e,!1)})),r.style.width=""+i+s,r.style.height=""+a+s,r.style.backgroundSize=""+i+s+" "+a+s,r.style.margin="start"===e?"-"+a/2+s+" auto auto -"+i/2+s:"auto 5px auto 5px"}return r},Hex2RGBA:function(hex,alpha){var rgb=[];if(/^\#[0-9A-F]{3}$/i.test(hex)){var sixHex="#";hex.replace(/[0-9A-F]/gi,(function(e){sixHex+=e+e})),hex=sixHex}return/^#[0-9A-F]{6}$/i.test(hex)?(hex.replace(/[0-9A-F]{2}/gi,(function(kw){rgb.push(eval("0x"+kw))})),"rgba("+rgb.join(",")+", "+alpha+")"):"rgba(255, 255, 255, 0.1)"}};exports.default=util,module.exports=exports.default},0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! ./src/index.js */"./src/index.js")}})}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/flv-live.js":
/*!*************************!*\
  !*** ./src/flv-live.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlvController; });
/* harmony import */ var xgplayer_remux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-remux */ "../xgplayer-remux/index.js");
/* harmony import */ var xgplayer_remux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_remux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xgplayer_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xgplayer-loader */ "../xgplayer-loader/index.js");
/* harmony import */ var xgplayer_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xgplayer_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xgplayer_demux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xgplayer-demux */ "../xgplayer-demux/index.js");
/* harmony import */ var xgplayer_demux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xgplayer_demux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xgplayer_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");
/* harmony import */ var xgplayer_buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xgplayer_buffer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xgplayer_codec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");
/* harmony import */ var xgplayer_codec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xgplayer_codec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xgplayer */ "../xgplayer/dist/index.js");
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xgplayer__WEBPACK_IMPORTED_MODULE_6__);








const REMUX_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_4__["EVENTS"].REMUX_EVENTS;
const DEMUX_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_4__["EVENTS"].DEMUX_EVENTS;
const LOADER_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_4__["EVENTS"].LOADER_EVENTS
const MSE_EVENTS = xgplayer_utils__WEBPACK_IMPORTED_MODULE_4__["EVENTS"].MSE_EVENTS

const Tag = 'FLVController'

class Logger {
  warn () {}
}

class FlvController {
  constructor (player) {
    this.TAG = Tag
    this._player = player

    this.state = {
      initSegmentArrived: false
    }
  }

  init () {
    this._context.registry('FETCH_LOADER', xgplayer_loader__WEBPACK_IMPORTED_MODULE_1__["FetchLoader"])
    this._context.registry('LOADER_BUFFER', xgplayer_buffer__WEBPACK_IMPORTED_MODULE_3__["XgBuffer"])

    this._context.registry('FLV_DEMUXER', xgplayer_demux__WEBPACK_IMPORTED_MODULE_2__["FlvDemuxer"])
    this._context.registry('TRACKS', xgplayer_buffer__WEBPACK_IMPORTED_MODULE_3__["Tracks"])

    this._context.registry('MP4_REMUXER', xgplayer_remux__WEBPACK_IMPORTED_MODULE_0___default.a.Mp4Remuxer)
    this._context.registry('PRE_SOURCE_BUFFER', xgplayer_buffer__WEBPACK_IMPORTED_MODULE_3__["PreSource"])

    this._context.registry('COMPATIBILITY', xgplayer_codec__WEBPACK_IMPORTED_MODULE_5__["Compatibility"])

    this._context.registry('LOGGER', Logger)
    this.mse = this._context.registry('MSE', xgplayer_utils__WEBPACK_IMPORTED_MODULE_4__["Mse"])({ container: this._player.video })

    this.initListeners()
  }

  initListeners () {
    this.on(LOADER_EVENTS.LOADER_DATALOADED, this._handleLoaderDataLoaded.bind(this))
    this.on(LOADER_EVENTS.LOADER_ERROR, this._handleNetworkError.bind(this))

    this.on(DEMUX_EVENTS.MEDIA_INFO, this._handleMediaInfo.bind(this))
    this.on(DEMUX_EVENTS.METADATA_PARSED, this._handleMetadataParsed.bind(this))
    this.on(DEMUX_EVENTS.DEMUX_COMPLETE, this._handleDemuxComplete.bind(this))
    this.on(DEMUX_EVENTS.DEMUX_ERROR, this._handleDemuxError.bind(this))

    this.on(REMUX_EVENTS.INIT_SEGMENT, this._handleAppendInitSegment.bind(this))
    this.on(REMUX_EVENTS.MEDIA_SEGMENT, this._handleMediaSegment.bind(this))

    this.on(MSE_EVENTS.SOURCE_UPDATE_END, this._handleSourceUpdateEnd.bind(this))

    this._player.on('timeupdate', this._handleTimeUpdate.bind(this))
  }

  _handleMediaInfo () {
    if (!this._context.mediaInfo) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('failed to get mediainfo'))
    }
  }

  _handleLoaderDataLoaded () {
    this.emitTo('FLV_DEMUXER', DEMUX_EVENTS.DEMUX_START)
  }

  _handleMetadataParsed (type) {
    this.emit(REMUX_EVENTS.REMUX_METADATA, type)
  }
  _handleDemuxComplete () {
    this.emit(REMUX_EVENTS.REMUX_MEDIA)
  }

  _handleAppendInitSegment () {
    this.state.initSegmentArrived = true
    this.mse.addSourceBuffers()
  }

  _handleMediaSegment () {
    this.mse.addSourceBuffers()
    this.mse.doAppend();
  }

  _handleSourceUpdateEnd () {
    const time = this._player.currentTime;
    const video = this._player.video;
    const preloadTime = this._player.config.preloadTime || 5

    const { length } = video.buffered;

    if (length === 0) {
      return;
    }

    const bufferEnd = video.buffered.end(length - 1);
    if (bufferEnd - time > preloadTime * 2) {
      this._player.currentTime = bufferEnd - preloadTime
    }
  }

  _handleTimeUpdate () {
    const time = this._player.currentTime
    if (time > 2) {
      // 在直播时及时清空buffer，降低直播内存占用
      this.mse.remove(time - 2)
    }
  }

  _handleNetworkError () {
    this._player.emit('error', new xgplayer__WEBPACK_IMPORTED_MODULE_6___default.a.Errors('network', this._player.config.url))
  }

  _handleDemuxError() {
    this._player.emit('error', new xgplayer__WEBPACK_IMPORTED_MODULE_6___default.a.Errors('parse', this._player.config.url))
  }

  seek () {
    if (!this.state.initSegmentArrived) {
      this.loadData()
    }
  }

  loadData () {
    this.emit(LOADER_EVENTS.LADER_START, this._player.config.url)
  }

  pause () {
    const loader = this._context.getInstance('FETCH_LOADER')

    if (loader) {
      loader.cancel()
    }
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer */ "../xgplayer/dist/index.js");
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");
/* harmony import */ var xgplayer_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xgplayer_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flv_live__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flv-live */ "./src/flv-live.js");



const flvAllowedEvents = xgplayer_utils__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].FlvAllowedEvents;

class FlvPlayer extends xgplayer__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor (config) {
    super(config)
    this.context = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_1__["Context"](flvAllowedEvents)
    this.initEvents()
    // const preloadTime = player.config.preloadTime || 15
  }

  start () {
    this.initFlv()
    this.context.init()
    super.start(this.flv.mse.url)
  }

  initFlvEvents (flv) {
    const player = this;
    flv.once(xgplayer_utils__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].REMUX_EVENTS.INIT_SEGMENT, () => {
      xgplayer__WEBPACK_IMPORTED_MODULE_0___default.a.util.addClass(player.root, 'xgplayer-is-live')
      if (!xgplayer__WEBPACK_IMPORTED_MODULE_0___default.a.util.findDom(this.root, 'xg-live')) {
        const live = xgplayer__WEBPACK_IMPORTED_MODULE_0___default.a.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live')
        player.controls.appendChild(live)
      }
    })

    flv.once(xgplayer_utils__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].LOADER_EVENTS.LOADER_COMPLETE, () => {
      // 直播完成，待播放器播完缓存后发送关闭事件
      if (!player.paused) {
        const timer = setInterval(() => {
          const end = player.getBufferedRange()[1]
          if (Math.abs(player.currentTime - end) < 0.5) {
            player.emit('ended')
            window.clearInterval(timer)
          }
        }, 200)
      }
    })
  }

  initEvents () {
    this.on('timeupdate', () => {
      this.loadData()
    })

    this.on('seeking', () => {
      const time = this.currentTime
      const range = this.getBufferedRange()
      if (time > range[1] || time < range[0]) {
        this.flv.seek(this.currentTime)
      }
    })
  }

  initFlv () {
    const flv = this.context.registry('FLV_CONTROLLER', _flv_live__WEBPACK_IMPORTED_MODULE_2__["default"])(this)
    this.initFlvEvents(flv)
    this.flv = flv
  }

  play () {
    if (this._hasStart) {
      this._destroy()
      this.context = new xgplayer_utils__WEBPACK_IMPORTED_MODULE_1__["Context"](flvAllowedEvents)
      const flv = this.context.registry('FLV_CONTROLLER', _flv_live__WEBPACK_IMPORTED_MODULE_2__["default"])(this)
      this.initFlvEvents(flv)
      this.flv = flv
      this.context.init()
      super.start(flv.mse.url)
      super.play()
    } else {
      super.play()
    }
  }

  pause () {
    super.pause()
    if (this.flv) {
      this.flv.pause()
    }
  }

  loadData (time = this.currentTime) {
    if (this.flv) {
      this.flv.seek(time)
    }
  }

  destroy () {
    this._destroy()
    super.destroy();
  }

  _destroy () {
    this.context.destroy()
    this.flv = null
    this.context = null
  }

  get src () {
    return this.currentSrc
  }

  set src (url) {
    this.player.config.url = url
    if (!this.paused) {
      this.pause()
      this.once('pause', () => {
        this.start(url)
      })
      this.once('canplay', () => {
        this.play()
      })
    } else {
      this.start(url)
    }
    this.once('canplay', () => {
      this.currentTime = 0
    })
  }
}

module.exports = FlvPlayer

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });