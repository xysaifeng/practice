window["eye"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var hide = __webpack_require__(9);
var redefine = __webpack_require__(8);
var ctx = __webpack_require__(11);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(9);
var has = __webpack_require__(10);
var SRC = __webpack_require__(19)('src');
var $toString = __webpack_require__(80);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(13).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(65);
var defined = __webpack_require__(16);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(66);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Fingerprintjs2 2.1.0 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/* global define */
(function (name, context, definition) {
  'use strict'
  if (typeof window !== 'undefined' && "function" === 'function' && __webpack_require__(126)) { !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) } else if ( true && module.exports) { module.exports = definition() } else if (context.exports) { context.exports = definition() } else { context[name] = definition() }
})('Fingerprint2', this, function () {
  'use strict'

  /// MurmurHash3 related functions

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // added together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Add = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
    var o = [0, 0, 0, 0]
    o[3] += m[3] + n[3]
    o[2] += o[3] >>> 16
    o[3] &= 0xffff
    o[2] += m[2] + n[2]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[1] += m[1] + n[1]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[0] += m[0] + n[0]
    o[0] &= 0xffff
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
  }

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // multiplied together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Multiply = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
    var o = [0, 0, 0, 0]
    o[3] += m[3] * n[3]
    o[2] += o[3] >>> 16
    o[3] &= 0xffff
    o[2] += m[2] * n[3]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[2] += m[3] * n[2]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[1] += m[1] * n[3]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[1] += m[2] * n[2]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[1] += m[3] * n[1]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
    o[0] &= 0xffff
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
  }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) rotated left by that number of positions.
  //
  var x64Rotl = function (m, n) {
    n %= 64
    if (n === 32) {
      return [m[1], m[0]]
    } else if (n < 32) {
      return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
    } else {
      n -= 32
      return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
    }
  }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) shifted left by that number of positions.
  //
  var x64LeftShift = function (m, n) {
    n %= 64
    if (n === 0) {
      return m
    } else if (n < 32) {
      return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
    } else {
      return [m[1] << (n - 32), 0]
    }
  }
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // xored together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Xor = function (m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]]
  }
  //
  // Given a block, returns murmurHash3's final x64 mix of that block.
  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
  // only place where we need to right shift 64bit ints.)
  //
  var x64Fmix = function (h) {
    h = x64Xor(h, [0, h[0] >>> 1])
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
    h = x64Xor(h, [0, h[0] >>> 1])
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
    h = x64Xor(h, [0, h[0] >>> 1])
    return h
  }

  //
  // Given a string and an optional seed as an int, returns a 128 bit
  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
  //
  var x64hash128 = function (key, seed) {
    key = key || ''
    seed = seed || 0
    var remainder = key.length % 16
    var bytes = key.length - remainder
    var h1 = [0, seed]
    var h2 = [0, seed]
    var k1 = [0, 0]
    var k2 = [0, 0]
    var c1 = [0x87c37b91, 0x114253d5]
    var c2 = [0x4cf5ad43, 0x2745937f]
    for (var i = 0; i < bytes; i = i + 16) {
      k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
      k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
      k1 = x64Multiply(k1, c1)
      k1 = x64Rotl(k1, 31)
      k1 = x64Multiply(k1, c2)
      h1 = x64Xor(h1, k1)
      h1 = x64Rotl(h1, 27)
      h1 = x64Add(h1, h2)
      h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
      k2 = x64Multiply(k2, c2)
      k2 = x64Rotl(k2, 33)
      k2 = x64Multiply(k2, c1)
      h2 = x64Xor(h2, k2)
      h2 = x64Rotl(h2, 31)
      h2 = x64Add(h2, h1)
      h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
    }
    k1 = [0, 0]
    k2 = [0, 0]
    switch (remainder) {
      case 15:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
      // fallthrough
      case 14:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
      // fallthrough
      case 13:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
      // fallthrough
      case 12:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
      // fallthrough
      case 11:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
      // fallthrough
      case 10:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
      // fallthrough
      case 9:
        k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
        k2 = x64Multiply(k2, c2)
        k2 = x64Rotl(k2, 33)
        k2 = x64Multiply(k2, c1)
        h2 = x64Xor(h2, k2)
      // fallthrough
      case 8:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
      // fallthrough
      case 7:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
      // fallthrough
      case 6:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
      // fallthrough
      case 5:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
      // fallthrough
      case 4:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
      // fallthrough
      case 3:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
      // fallthrough
      case 2:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
      // fallthrough
      case 1:
        k1 = x64Xor(k1, [0, key.charCodeAt(i)])
        k1 = x64Multiply(k1, c1)
        k1 = x64Rotl(k1, 31)
        k1 = x64Multiply(k1, c2)
        h1 = x64Xor(h1, k1)
      // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length])
    h2 = x64Xor(h2, [0, key.length])
    h1 = x64Add(h1, h2)
    h2 = x64Add(h2, h1)
    h1 = x64Fmix(h1)
    h2 = x64Fmix(h2)
    h1 = x64Add(h1, h2)
    h2 = x64Add(h2, h1)
    return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
  }

  var defaultOptions = {
    preprocessor: null,
    audio: {
      timeout: 1000,
      // On iOS 11, audio context can only be used in response to user interaction.
      // We require users to explicitly enable audio fingerprinting on iOS 11.
      // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      excludeIOS11: true
    },
    fonts: {
      swfContainerId: 'fingerprintjs2',
      swfPath: 'flash/compiled/FontList.swf',
      userDefinedFonts: [],
      extendedJsFonts: false
    },
    screen: {
      // To ensure consistent fingerprints when users rotate their mobile devices
      detectScreenOrientation: true
    },
    plugins: {
      sortPluginsFor: [/palemoon/i],
      excludeIE: false
    },
    extraComponents: [],
    excludes: {
      // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
      'enumerateDevices': true,
      // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
      'pixelRatio': true,
      // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
      'doNotTrack': true,
      // uses js fonts already
      'fontsFlash': true
    },
    NOT_AVAILABLE: 'not available',
    ERROR: 'error',
    EXCLUDED: 'excluded'
  }

  var each = function (obj, iterator) {
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
      obj.forEach(iterator)
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        iterator(obj[i], i, obj)
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator(obj[key], key, obj)
        }
      }
    }
  }

  var map = function (obj, iterator) {
    var results = []
    // Not using strict equality so that this acts as a
    // shortcut to checking for `null` and `undefined`.
    if (obj == null) {
      return results
    }
    if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
    each(obj, function (value, index, list) {
      results.push(iterator(value, index, list))
    })
    return results
  }

  var extendSoft = function (target, source) {
    if (source == null) { return target }
    var value
    var key
    for (key in source) {
      value = source[key]
      if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
        target[key] = value
      }
    }
    return target
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
  var enumerateDevicesKey = function (done, options) {
    if (!isEnumerateDevicesSupported()) {
      return done(options.NOT_AVAILABLE)
    }
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      done(devices.map(function (device) {
        return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
      }))
    })
      .catch(function (error) {
        done(error)
      })
  }

  var isEnumerateDevicesSupported = function () {
    return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
  }
  // Inspired by and based on https://github.com/cozylife/audio-fingerprint
  var audioKey = function (done, options) {
    var audioOptions = options.audio
    if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
      // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      return done(options.EXCLUDED)
    }

    var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

    if (AudioContext == null) {
      return done(options.NOT_AVAILABLE)
    }

    var context = new AudioContext(1, 44100, 44100)

    var oscillator = context.createOscillator()
    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(10000, context.currentTime)

    var compressor = context.createDynamicsCompressor()
    each([
      ['threshold', -50],
      ['knee', 40],
      ['ratio', 12],
      ['reduction', -20],
      ['attack', 0],
      ['release', 0.25]
    ], function (item) {
      if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
        compressor[item[0]].setValueAtTime(item[1], context.currentTime)
      }
    })

    oscillator.connect(compressor)
    compressor.connect(context.destination)
    oscillator.start(0)
    context.startRendering()

    var audioTimeoutId = setTimeout(function () {
      console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
      context.oncomplete = function () { }
      context = null
      return done('audioTimeout')
    }, audioOptions.timeout)

    context.oncomplete = function (event) {
      var fingerprint
      try {
        clearTimeout(audioTimeoutId)
        fingerprint = event.renderedBuffer.getChannelData(0)
          .slice(4500, 5000)
          .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
          .toString()
        oscillator.disconnect()
        compressor.disconnect()
      } catch (error) {
        done(error)
        return
      }
      done(fingerprint)
    }
  }
  var UserAgent = function (done) {
    done(navigator.userAgent)
  }
  var webdriver = function (done, options) {
    done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
  }
  var languageKey = function (done, options) {
    done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
  }
  var colorDepthKey = function (done, options) {
    done(window.screen.colorDepth || options.NOT_AVAILABLE)
  }
  var deviceMemoryKey = function (done, options) {
    done(navigator.deviceMemory || options.NOT_AVAILABLE)
  }
  var pixelRatioKey = function (done, options) {
    done(window.devicePixelRatio || options.NOT_AVAILABLE)
  }
  var screenResolutionKey = function (done, options) {
    done(getScreenResolution(options))
  }
  var getScreenResolution = function (options) {
    var resolution = [window.screen.width, window.screen.height]
    if (options.screen.detectScreenOrientation) {
      resolution.sort().reverse()
    }
    return resolution
  }
  var availableScreenResolutionKey = function (done, options) {
    done(getAvailableScreenResolution(options))
  }
  var getAvailableScreenResolution = function (options) {
    if (window.screen.availWidth && window.screen.availHeight) {
      var available = [window.screen.availHeight, window.screen.availWidth]
      if (options.screen.detectScreenOrientation) {
        available.sort().reverse()
      }
      return available
    }
    // headless browsers
    return options.NOT_AVAILABLE
  }
  var timezoneOffset = function (done) {
    done(new Date().getTimezoneOffset())
  }
  var timezone = function (done, options) {
    if (window.Intl && window.Intl.DateTimeFormat) {
      done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var sessionStorageKey = function (done, options) {
    done(hasSessionStorage(options))
  }
  var localStorageKey = function (done, options) {
    done(hasLocalStorage(options))
  }
  var indexedDbKey = function (done, options) {
    done(hasIndexedDB(options))
  }
  var addBehaviorKey = function (done) {
    // body might not be defined at this point or removed programmatically
    done(!!(document.body && document.body.addBehavior))
  }
  var openDatabaseKey = function (done) {
    done(!!window.openDatabase)
  }
  var cpuClassKey = function (done, options) {
    done(getNavigatorCpuClass(options))
  }
  var platformKey = function (done, options) {
    done(getNavigatorPlatform(options))
  }
  var doNotTrackKey = function (done, options) {
    done(getDoNotTrack(options))
  }
  var canvasKey = function (done, options) {
    if (isCanvasSupported()) {
      done(getCanvasFp(options))
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var webglKey = function (done, options) {
    if (isWebGlSupported()) {
      done(getWebglFp())
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var webglVendorAndRendererKey = function (done) {
    if (isWebGlSupported()) {
      done(getWebglVendorAndRenderer())
      return
    }
    done()
  }
  var adBlockKey = function (done) {
    done(getAdBlock())
  }
  var hasLiedLanguagesKey = function (done) {
    done(getHasLiedLanguages())
  }
  var hasLiedResolutionKey = function (done) {
    done(getHasLiedResolution())
  }
  var hasLiedOsKey = function (done) {
    done(getHasLiedOs())
  }
  var hasLiedBrowserKey = function (done) {
    done(getHasLiedBrowser())
  }
  // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
  var flashFontsKey = function (done, options) {
    // we do flash if swfobject is loaded
    if (!hasSwfObjectLoaded()) {
      return done('swf object not loaded')
    }
    if (!hasMinFlashInstalled()) {
      return done('flash not installed')
    }
    if (!options.fonts.swfPath) {
      return done('missing options.fonts.swfPath')
    }
    loadSwfAndDetectFonts(function (fonts) {
      done(fonts)
    }, options)
  }
  // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
  var jsFontsKey = function (done, options) {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif']

    var fontList = [
      'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
      'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
      'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
      'Geneva', 'Georgia',
      'Helvetica', 'Helvetica Neue',
      'Impact',
      'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
      'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
      'Palatino', 'Palatino Linotype',
      'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
      'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
      'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
    ]

    if (options.fonts.extendedJsFonts) {
      var extendedFontList = [
        'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
        'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
        'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
        'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
        'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
        'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
        'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
        'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
        'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
        'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
        'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
        'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
        'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
        'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
        'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
        'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
        'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
        'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
        'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
        'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
        'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
        'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
        'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
        'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
        'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
        'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
        'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
        'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
        'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
        'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
        'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
      fontList = fontList.concat(extendedFontList)
    }

    fontList = fontList.concat(options.fonts.userDefinedFonts)

    // remove duplicate fonts
    fontList = fontList.filter(function (font, position) {
      return fontList.indexOf(font) === position
    })

    // we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = 'mmmmmmmmmmlli'

    // we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px'

    var h = document.getElementsByTagName('body')[0]

    // div to load spans for the base fonts
    var baseFontsDiv = document.createElement('div')

    // div to load spans for the fonts to detect
    var fontsDiv = document.createElement('div')

    var defaultWidth = {}
    var defaultHeight = {}

    // creates a span where the fonts will be loaded
    var createSpan = function () {
      var s = document.createElement('span')
      /*
       * We need this css as in some weird browser this
       * span elements shows up for a microSec which creates a
       * bad user experience
       */
      s.style.position = 'absolute'
      s.style.left = '-9999px'
      s.style.fontSize = testSize

      // css font reset to reset external styles
      s.style.fontStyle = 'normal'
      s.style.fontWeight = 'normal'
      s.style.letterSpacing = 'normal'
      s.style.lineBreak = 'auto'
      s.style.lineHeight = 'normal'
      s.style.textTransform = 'none'
      s.style.textAlign = 'left'
      s.style.textDecoration = 'none'
      s.style.textShadow = 'none'
      s.style.whiteSpace = 'normal'
      s.style.wordBreak = 'normal'
      s.style.wordSpacing = 'normal'

      s.innerHTML = testString
      return s
    }

    // creates a span and load the font to detect and a base font for fallback
    var createSpanWithFonts = function (fontToDetect, baseFont) {
      var s = createSpan()
      s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
      return s
    }

    // creates spans for the base fonts and adds them to baseFontsDiv
    var initializeBaseFontsSpans = function () {
      var spans = []
      for (var index = 0, length = baseFonts.length; index < length; index++) {
        var s = createSpan()
        s.style.fontFamily = baseFonts[index]
        baseFontsDiv.appendChild(s)
        spans.push(s)
      }
      return spans
    }

    // creates spans for the fonts to detect and adds them to fontsDiv
    var initializeFontsSpans = function () {
      var spans = {}
      for (var i = 0, l = fontList.length; i < l; i++) {
        var fontSpans = []
        for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
          var s = createSpanWithFonts(fontList[i], baseFonts[j])
          fontsDiv.appendChild(s)
          fontSpans.push(s)
        }
        spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
      }
      return spans
    }

    // checks if a font is available
    var isFontAvailable = function (fontSpans) {
      var detected = false
      for (var i = 0; i < baseFonts.length; i++) {
        detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
        if (detected) {
          return detected
        }
      }
      return detected
    }

    // create spans for base fonts
    var baseFontsSpans = initializeBaseFontsSpans()

    // add the spans to the DOM
    h.appendChild(baseFontsDiv)

    // get the default width for the three base fonts
    for (var index = 0, length = baseFonts.length; index < length; index++) {
      defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
      defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
    }

    // create spans for fonts to detect
    var fontsSpans = initializeFontsSpans()

    // add all the spans to the DOM
    h.appendChild(fontsDiv)

    // check available fonts
    var available = []
    for (var i = 0, l = fontList.length; i < l; i++) {
      if (isFontAvailable(fontsSpans[fontList[i]])) {
        available.push(fontList[i])
      }
    }

    // remove spans from DOM
    h.removeChild(fontsDiv)
    h.removeChild(baseFontsDiv)
    done(available)
  }
  var pluginsComponent = function (done, options) {
    if (isIE()) {
      if (!options.plugins.excludeIE) {
        done(getIEPlugins(options))
      } else {
        done(options.EXCLUDED)
      }
    } else {
      done(getRegularPlugins(options))
    }
  }
  var getRegularPlugins = function (options) {
    if (navigator.plugins == null) {
      return options.NOT_AVAILABLE
    }

    var plugins = []
    // plugins isn't defined in Node envs.
    for (var i = 0, l = navigator.plugins.length; i < l; i++) {
      if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
    }

    // sorting plugins only for those user agents, that we know randomize the plugins
    // every time we try to enumerate them
    if (pluginsShouldBeSorted(options)) {
      plugins = plugins.sort(function (a, b) {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        return 0
      })
    }
    return map(plugins, function (p) {
      var mimeTypes = map(p, function (mt) {
        return [mt.type, mt.suffixes]
      })
      return [p.name, p.description, mimeTypes]
    })
  }
  var getIEPlugins = function (options) {
    var result = []
    if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
      var names = [
        'AcroPDF.PDF', // Adobe PDF reader 7+
        'Adodb.Stream',
        'AgControl.AgControl', // Silverlight
        'DevalVRXCtrl.DevalVRXCtrl.1',
        'MacromediaFlashPaper.MacromediaFlashPaper',
        'Msxml2.DOMDocument',
        'Msxml2.XMLHTTP',
        'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
        'QuickTime.QuickTime', // QuickTime
        'QuickTimeCheckObject.QuickTimeCheck.1',
        'RealPlayer',
        'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
        'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
        'Scripting.Dictionary',
        'SWCtl.SWCtl', // ShockWave player
        'Shell.UIHelper',
        'ShockwaveFlash.ShockwaveFlash', // flash plugin
        'Skype.Detection',
        'TDCCtl.TDCCtl',
        'WMPlayer.OCX', // Windows media player
        'rmocx.RealPlayer G2 Control',
        'rmocx.RealPlayer G2 Control.1'
      ]
      // starting to detect plugins in IE
      result = map(names, function (name) {
        try {
          // eslint-disable-next-line no-new
          new window.ActiveXObject(name)
          return name
        } catch (e) {
          return options.ERROR
        }
      })
    } else {
      result.push(options.NOT_AVAILABLE)
    }
    if (navigator.plugins) {
      result = result.concat(getRegularPlugins(options))
    }
    return result
  }
  var pluginsShouldBeSorted = function (options) {
    var should = false
    for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
      var re = options.plugins.sortPluginsFor[i]
      if (navigator.userAgent.match(re)) {
        should = true
        break
      }
    }
    return should
  }
  var touchSupportKey = function (done) {
    done(getTouchSupport())
  }
  var hardwareConcurrencyKey = function (done, options) {
    done(getHardwareConcurrency(options))
  }
  var hasSessionStorage = function (options) {
    try {
      return !!window.sessionStorage
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }

  // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
  var hasLocalStorage = function (options) {
    try {
      return !!window.localStorage
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }
  var hasIndexedDB = function (options) {
    try {
      return !!window.indexedDB
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }
  var getHardwareConcurrency = function (options) {
    if (navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency
    }
    return options.NOT_AVAILABLE
  }
  var getNavigatorCpuClass = function (options) {
    return navigator.cpuClass || options.NOT_AVAILABLE
  }
  var getNavigatorPlatform = function (options) {
    if (navigator.platform) {
      return navigator.platform
    } else {
      return options.NOT_AVAILABLE
    }
  }
  var getDoNotTrack = function (options) {
    if (navigator.doNotTrack) {
      return navigator.doNotTrack
    } else if (navigator.msDoNotTrack) {
      return navigator.msDoNotTrack
    } else if (window.doNotTrack) {
      return window.doNotTrack
    } else {
      return options.NOT_AVAILABLE
    }
  }
  // This is a crude and primitive touch screen detection.
  // It's not possible to currently reliably detect the  availability of a touch screen
  // with a JS, without actually subscribing to a touch event.
  // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
  // https://github.com/Modernizr/Modernizr/issues/548
  // method returns an array of 3 values:
  // maxTouchPoints, the success or failure of creating a TouchEvent,
  // and the availability of the 'ontouchstart' property

  var getTouchSupport = function () {
    var maxTouchPoints = 0
    var touchEvent
    if (typeof navigator.maxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.maxTouchPoints
    } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.msMaxTouchPoints
    }
    try {
      document.createEvent('TouchEvent')
      touchEvent = true
    } catch (_) {
      touchEvent = false
    }
    var touchStart = 'ontouchstart' in window
    return [maxTouchPoints, touchEvent, touchStart]
  }
  // https://www.browserleaks.com/canvas#how-does-it-work

  var getCanvasFp = function (options) {
    var result = []
    // Very simple now, need to make it more complex (geo shapes etc)
    var canvas = document.createElement('canvas')
    canvas.width = 2000
    canvas.height = 200
    canvas.style.display = 'inline'
    var ctx = canvas.getContext('2d')
    // detect browser support of canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    ctx.rect(0, 0, 10, 10)
    ctx.rect(2, 2, 6, 6)
    result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    // https://github.com/Valve/fingerprintjs2/issues/66
    if (options.dontUseFakeFontInCanvas) {
      ctx.font = '11pt Arial'
    } else {
      ctx.font = '11pt no-real-font-123'
    }
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
    ctx.font = '18pt Arial'
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

    // canvas blending
    // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = 'rgb(255,0,255)'
    ctx.beginPath()
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(0,255,255)'
    ctx.beginPath()
    ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,255,0)'
    ctx.beginPath()
    ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,0,255)'
    // canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
    ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
    ctx.fill('evenodd')

    if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
    return result
  }
  var getWebglFp = function () {
    var gl
    var fa2s = function (fa) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      gl.enable(gl.DEPTH_TEST)
      gl.depthFunc(gl.LEQUAL)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      return '[' + fa[0] + ', ' + fa[1] + ']'
    }
    var maxAnisotropy = function (gl) {
      var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
      if (ext) {
        var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        if (anisotropy === 0) {
          anisotropy = 2
        }
        return anisotropy
      } else {
        return null
      }
    }

    gl = getWebglCanvas()
    if (!gl) { return null }
    // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
    // First it draws a gradient object with shaders and convers the image to the Base64 string.
    // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
    // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
    var result = []
    var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
    var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
    var vertexPosBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
    var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    vertexPosBuffer.itemSize = 3
    vertexPosBuffer.numItems = 3
    var program = gl.createProgram()
    var vshader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vshader, vShaderTemplate)
    gl.compileShader(vshader)
    var fshader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fshader, fShaderTemplate)
    gl.compileShader(fshader)
    gl.attachShader(program, vshader)
    gl.attachShader(program, fshader)
    gl.linkProgram(program)
    gl.useProgram(program)
    program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
    program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
    gl.enableVertexAttribArray(program.vertexPosArray)
    gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
    gl.uniform2f(program.offsetUniform, 1, 1)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
    try {
      result.push(gl.canvas.toDataURL())
    } catch (e) {
      /* .toDataURL may be absent or broken (blocked by extension) */
    }
    result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
    result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
    result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
    result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
    result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
    result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
    result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
    result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
    result.push('webgl max anisotropy:' + maxAnisotropy(gl))
    result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
    result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
    result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
    result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
    result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
    result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
    result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
    result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
    result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
    result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
    result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
    result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
    result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
    result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
    result.push('webgl version:' + gl.getParameter(gl.VERSION))

    try {
      // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
      var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (extensionDebugRendererInfo) {
        result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
        result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
      }
    } catch (e) { /* squelch */ }

    if (!gl.getShaderPrecisionFormat) {
      return result
    }

    each(['FLOAT', 'INT'], function (numType) {
      each(['VERTEX', 'FRAGMENT'], function (shader) {
        each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
          each(['precision', 'rangeMin', 'rangeMax'], function (key) {
            var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
            if (key !== 'precision') {
              key = 'precision ' + key
            }
            var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
            result.push(line)
          })
        })
      })
    })
    return result
  }
  var getWebglVendorAndRenderer = function () {
    /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
    try {
      var glContext = getWebglCanvas()
      var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
      return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
    } catch (e) {
      return null
    }
  }
  var getAdBlock = function () {
    var ads = document.createElement('div')
    ads.innerHTML = '&nbsp;'
    ads.className = 'adsbox'
    var result = false
    try {
      // body may not exist, that's why we need try/catch
      document.body.appendChild(ads)
      result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
      document.body.removeChild(ads)
    } catch (e) {
      result = false
    }
    return result
  }
  var getHasLiedLanguages = function () {
    // We check if navigator.language is equal to the first language of navigator.languages
    // navigator.languages is undefined on IE11 (and potentially older IEs)
    if (typeof navigator.languages !== 'undefined') {
      try {
        var firstLanguages = navigator.languages[0].substr(0, 2)
        if (firstLanguages !== navigator.language.substr(0, 2)) {
          return true
        }
      } catch (err) {
        return true
      }
    }
    return false
  }
  var getHasLiedResolution = function () {
    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
  }
  var getHasLiedOs = function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var oscpu = navigator.oscpu
    var platform = navigator.platform.toLowerCase()
    var os
    // We extract the OS from the user agent (respect the order of the if else if statement)
    if (userAgent.indexOf('windows phone') >= 0) {
      os = 'Windows Phone'
    } else if (userAgent.indexOf('win') >= 0) {
      os = 'Windows'
    } else if (userAgent.indexOf('android') >= 0) {
      os = 'Android'
    } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0) {
      os = 'Linux'
    } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
      os = 'iOS'
    } else if (userAgent.indexOf('mac') >= 0) {
      os = 'Mac'
    } else {
      os = 'Other'
    }
    // We detect if the person uses a mobile device
    var mobileDevice = (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0))

    if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
      return true
    }

    // We compare oscpu with the OS extracted from the UA
    if (typeof oscpu !== 'undefined') {
      oscpu = oscpu.toLowerCase()
      if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
        return true
      } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
        return true
      } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
        return true
      } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
        return true
      }
    }

    // We compare platform with the OS extracted from the UA
    if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
      return true
    } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
      return true
    } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
      return true
    } else {
      var platformIsOther = platform.indexOf('win') < 0 &&
        platform.indexOf('linux') < 0 &&
        platform.indexOf('mac') < 0 &&
        platform.indexOf('iphone') < 0 &&
        platform.indexOf('ipad') < 0
      if (platformIsOther !== (os === 'Other')) {
        return true
      }
    }

    return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
  }
  var getHasLiedBrowser = function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var productSub = navigator.productSub

    // we extract the browser from the user agent (respect the order of the tests)
    var browser
    if (userAgent.indexOf('firefox') >= 0) {
      browser = 'Firefox'
    } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
      browser = 'Opera'
    } else if (userAgent.indexOf('chrome') >= 0) {
      browser = 'Chrome'
    } else if (userAgent.indexOf('safari') >= 0) {
      browser = 'Safari'
    } else if (userAgent.indexOf('trident') >= 0) {
      browser = 'Internet Explorer'
    } else {
      browser = 'Other'
    }

    if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
      return true
    }

    // eslint-disable-next-line no-eval
    var tempRes = eval.toString().length
    if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
      return true
    } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
      return true
    } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
      return true
    }

    // We create an error to see how it is handled
    var errFirefox
    try {
      // eslint-disable-next-line no-throw-literal
      throw 'a'
    } catch (err) {
      try {
        err.toSource()
        errFirefox = true
      } catch (errOfErr) {
        errFirefox = false
      }
    }
    return errFirefox && browser !== 'Firefox' && browser !== 'Other'
  }
  var isCanvasSupported = function () {
    var elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  }
  var isWebGlSupported = function () {
    // code taken from Modernizr
    if (!isCanvasSupported()) {
      return false
    }

    var glContext = getWebglCanvas()
    return !!window.WebGLRenderingContext && !!glContext
  }
  var isIE = function () {
    if (navigator.appName === 'Microsoft Internet Explorer') {
      return true
    } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
      return true
    }
    return false
  }
  var hasSwfObjectLoaded = function () {
    return typeof window.swfobject !== 'undefined'
  }
  var hasMinFlashInstalled = function () {
    return window.swfobject.hasFlashPlayerVersion('9.0.0')
  }
  var addFlashDivNode = function (options) {
    var node = document.createElement('div')
    node.setAttribute('id', options.fonts.swfContainerId)
    document.body.appendChild(node)
  }
  var loadSwfAndDetectFonts = function (done, options) {
    var hiddenCallback = '___fp_swf_loaded'
    window[hiddenCallback] = function (fonts) {
      done(fonts)
    }
    var id = options.fonts.swfContainerId
    addFlashDivNode()
    var flashvars = { onReady: hiddenCallback }
    var flashparams = { allowScriptAccess: 'always', menu: 'false' }
    window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
  }
  var getWebglCanvas = function () {
    var canvas = document.createElement('canvas')
    var gl = null
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    } catch (e) { /* squelch */ }
    if (!gl) { gl = null }
    return gl
  }

  var components = [
    { key: 'userAgent', getData: UserAgent },
    { key: 'webdriver', getData: webdriver },
    { key: 'language', getData: languageKey },
    { key: 'colorDepth', getData: colorDepthKey },
    { key: 'deviceMemory', getData: deviceMemoryKey },
    { key: 'pixelRatio', getData: pixelRatioKey },
    { key: 'hardwareConcurrency', getData: hardwareConcurrencyKey },
    { key: 'screenResolution', getData: screenResolutionKey },
    { key: 'availableScreenResolution', getData: availableScreenResolutionKey },
    { key: 'timezoneOffset', getData: timezoneOffset },
    { key: 'timezone', getData: timezone },
    { key: 'sessionStorage', getData: sessionStorageKey },
    { key: 'localStorage', getData: localStorageKey },
    { key: 'indexedDb', getData: indexedDbKey },
    { key: 'addBehavior', getData: addBehaviorKey },
    { key: 'openDatabase', getData: openDatabaseKey },
    { key: 'cpuClass', getData: cpuClassKey },
    { key: 'platform', getData: platformKey },
    { key: 'doNotTrack', getData: doNotTrackKey },
    { key: 'plugins', getData: pluginsComponent },
    { key: 'canvas', getData: canvasKey },
    { key: 'webgl', getData: webglKey },
    { key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey },
    { key: 'adBlock', getData: adBlockKey },
    { key: 'hasLiedLanguages', getData: hasLiedLanguagesKey },
    { key: 'hasLiedResolution', getData: hasLiedResolutionKey },
    { key: 'hasLiedOs', getData: hasLiedOsKey },
    { key: 'hasLiedBrowser', getData: hasLiedBrowserKey },
    { key: 'touchSupport', getData: touchSupportKey },
    { key: 'fonts', getData: jsFontsKey, pauseBefore: true },
    { key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true },
    { key: 'audio', getData: audioKey },
    { key: 'enumerateDevices', getData: enumerateDevicesKey }
  ]

  var Fingerprint2 = function (options) {
    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
  }

  Fingerprint2.get = function (options, callback) {
    if (!callback) {
      callback = options
      options = {}
    } else if (!options) {
      options = {}
    }
    extendSoft(options, defaultOptions)
    options.components = options.extraComponents.concat(components)

    var keys = {
      data: [],
      addPreprocessedComponent: function (key, value) {
        if (typeof options.preprocessor === 'function') {
          value = options.preprocessor(key, value)
        }
        keys.data.push({ key: key, value: value })
      }
    }

    var i = -1
    var chainComponents = function (alreadyWaited) {
      i += 1
      if (i >= options.components.length) { // on finish
        callback(keys.data)
        return
      }
      var component = options.components[i]

      if (options.excludes[component.key]) {
        chainComponents(false) // skip
        return
      }

      if (!alreadyWaited && component.pauseBefore) {
        i -= 1
        setTimeout(function () {
          chainComponents(true)
        }, 1)
        return
      }

      try {
        component.getData(function (value) {
          keys.addPreprocessedComponent(component.key, value)
          chainComponents(false)
        }, options)
      } catch (error) {
        // main body error
        keys.addPreprocessedComponent(component.key, String(error))
        chainComponents(false)
      }
    }

    chainComponents(false)
  }

  Fingerprint2.getPromise = function (options) {
    return new Promise(function (resolve, reject) {
      Fingerprint2.get(options, resolve)
    })
  }

  Fingerprint2.getV18 = function (options, callback) {
    if (callback == null) {
      callback = options
      options = {}
    }
    return Fingerprint2.get(options, function (components) {
      var newComponents = []
      for (var i = 0; i < components.length; i++) {
        var component = components[i]
        if (component.value === (options.NOT_AVAILABLE || 'not available')) {
          newComponents.push({ key: component.key, value: 'unknown' })
        } else if (component.key === 'plugins') {
          newComponents.push({
            key: 'plugins',
            value: map(component.value, function (p) {
              var mimeTypes = map(p[2], function (mt) {
                if (mt.join) { return mt.join('~') }
                return mt
              }).join(',')
              return [p[0], p[1], mimeTypes].join('::')
            })
          })
        } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
          newComponents.push({ key: component.key, value: component.value.join('~') })
        } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
          if (component.value) {
            newComponents.push({ key: component.key, value: 1 })
          } else {
            // skip
            continue
          }
        } else {
          if (component.value) {
            newComponents.push(component.value.join ? { key: component.key, value: component.value.join(';') } : component)
          } else {
            newComponents.push({ key: component.key, value: component.value })
          }
        }
      }
      var murmur = x64hash128(map(newComponents, function (component) { return component.value }).join('~~~'), 31)
      callback(murmur, newComponents)
    })
  }

  Fingerprint2.x64hash128 = x64hash128
  Fingerprint2.VERSION = '2.1.0'
  return Fingerprint2
})


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(12);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(25);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(89);
var redefine = __webpack_require__(8);
var hide = __webpack_require__(9);
var fails = __webpack_require__(7);
var defined = __webpack_require__(16);
var wks = __webpack_require__(0);
var regexpExec = __webpack_require__(36);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(2);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(66);
var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(60)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(32);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(6);
var cof = __webpack_require__(12);
var MATCH = __webpack_require__(0)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(39);
var createDesc = __webpack_require__(20);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(27);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(9)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(2);
var dPs = __webpack_require__(107);
var enumBugKeys = __webpack_require__(41);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(34)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(54).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var global = __webpack_require__(1);
var ctx = __webpack_require__(11);
var classof = __webpack_require__(25);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(6);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(81);
var forOf = __webpack_require__(82);
var speciesConstructor = __webpack_require__(52);
var task = __webpack_require__(53).set;
var microtask = __webpack_require__(84)();
var newPromiseCapabilityModule = __webpack_require__(55);
var perform = __webpack_require__(85);
var userAgent = __webpack_require__(86);
var promiseResolve = __webpack_require__(87);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(88)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(29)($Promise, PROMISE);
__webpack_require__(56)(PROMISE);
Wrapper = __webpack_require__(13)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(57)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(34)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(21);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(25);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(13).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(2);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(0)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var invoke = __webpack_require__(83);
var html = __webpack_require__(54);
var cel = __webpack_require__(34);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(12)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var dP = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(4);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(25);
var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(8)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(2);
var toObject = __webpack_require__(15);
var toLength = __webpack_require__(14);
var toInteger = __webpack_require__(28);
var advanceStringIndex = __webpack_require__(35);
var regExpExec = __webpack_require__(30);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(31)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var defined = __webpack_require__(16);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(37);
var anObject = __webpack_require__(2);
var speciesConstructor = __webpack_require__(52);
var advanceStringIndex = __webpack_require__(35);
var toLength = __webpack_require__(14);
var callRegExpExec = __webpack_require__(30);
var regexpExec = __webpack_require__(36);
var fails = __webpack_require__(7);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(31)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(2);
var toLength = __webpack_require__(14);
var advanceStringIndex = __webpack_require__(35);
var regExpExec = __webpack_require__(30);

// @@match logic
__webpack_require__(31)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var inheritIfRequired = __webpack_require__(64);
var dP = __webpack_require__(3).f;
var gOPN = __webpack_require__(33).f;
var isRegExp = __webpack_require__(37);
var $flags = __webpack_require__(32);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(4) && (!CORRECT_NEW || __webpack_require__(7)(function () {
  re2[__webpack_require__(0)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(8)(global, 'RegExp', $RegExp);
}

__webpack_require__(56)('RegExp');


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var setPrototypeOf = __webpack_require__(90).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(12);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(67)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(91);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(12);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(70);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 71 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(8);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(110);
var setToStringTag = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(111);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(42);
var step = __webpack_require__(123);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(72)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 74 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(44);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(119);

var iterableToArray = __webpack_require__(120);

var nonIterableSpread = __webpack_require__(121);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(46);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26)('native-function-to-string', Function.toString);


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var call = __webpack_require__(49);
var isArrayIter = __webpack_require__(50);
var anObject = __webpack_require__(2);
var toLength = __webpack_require__(14);
var getIterFn = __webpack_require__(51);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(53).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(12)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var isObject = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(55);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(8);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(36);
__webpack_require__(5)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(6);
var anObject = __webpack_require__(2);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(11)(Function.call, __webpack_require__(38).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(5);
var $find = __webpack_require__(93)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(42)(KEY);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(11);
var IObject = __webpack_require__(65);
var toObject = __webpack_require__(15);
var toLength = __webpack_require__(14);
var asc = __webpack_require__(94);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(95);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var isArray = __webpack_require__(68);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(5);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(5);
var $includes = __webpack_require__(67)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(42)('includes');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(5);
var context = __webpack_require__(99);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(100)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(37);
var defined = __webpack_require__(16);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(0)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(2);
var sameValue = __webpack_require__(102);
var regExpExec = __webpack_require__(30);

// @@search logic
__webpack_require__(31)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69)('asyncIterator');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(8);
var META = __webpack_require__(105).KEY;
var $fails = __webpack_require__(7);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(19);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(70);
var wksDefine = __webpack_require__(69);
var enumKeys = __webpack_require__(106);
var isArray = __webpack_require__(68);
var anObject = __webpack_require__(2);
var isObject = __webpack_require__(6);
var toObject = __webpack_require__(15);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(27);
var createDesc = __webpack_require__(20);
var _create = __webpack_require__(43);
var gOPNExt = __webpack_require__(108);
var $GOPD = __webpack_require__(38);
var $GOPS = __webpack_require__(71);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(33).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(39).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(18)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(19)('meta');
var isObject = __webpack_require__(6);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(71);
var pIE = __webpack_require__(39);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(2);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(33).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(60)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(72)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(43);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(15);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(11);
var $export = __webpack_require__(5);
var toObject = __webpack_require__(15);
var call = __webpack_require__(49);
var isArrayIter = __webpack_require__(50);
var toLength = __webpack_require__(14);
var createProperty = __webpack_require__(113);
var getIterFn = __webpack_require__(51);

$export($export.S + $export.F * !__webpack_require__(57)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(115);
var anObject = __webpack_require__(2);
var $flags = __webpack_require__(32);
var DESCRIPTORS = __webpack_require__(4);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(8)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(4) && /./g.flags != 'g') __webpack_require__(3).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(32)
});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var has = __webpack_require__(10);
var cof = __webpack_require__(12);
var inheritIfRequired = __webpack_require__(64);
var toPrimitive = __webpack_require__(27);
var fails = __webpack_require__(7);
var gOPN = __webpack_require__(33).f;
var gOPD = __webpack_require__(38).f;
var dP = __webpack_require__(3).f;
var $trim = __webpack_require__(117).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(43)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(4) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(8)(global, NUMBER, $Number);
}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
var defined = __webpack_require__(16);
var fails = __webpack_require__(7);
var spaces = __webpack_require__(118);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 119 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 120 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(73);
var getKeys = __webpack_require__(22);
var redefine = __webpack_require__(8);
var global = __webpack_require__(1);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(21);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(15);
var $keys = __webpack_require__(22);

__webpack_require__(125)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(13);
var fails = __webpack_require__(7);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function(){
	'use strict';
	var scheduleStart, throttleDelay, lazytimer, lazyraf;
	var root = typeof window != 'undefined' ?
		window :
		typeof global != undefined ?
			global :
			this || {};
	var requestAnimationFrame = root.cancelRequestAnimationFrame && root.requestAnimationFrame || setTimeout;
	var cancelRequestAnimationFrame = root.cancelRequestAnimationFrame || clearTimeout;
	var tasks = [];
	var runAttempts = 0;
	var isRunning = false;
	var remainingTime = 7;
	var minThrottle = 35;
	var throttle = 125;
	var index = 0;
	var taskStart = 0;
	var tasklength = 0;
	var IdleDeadline = {
		get didTimeout(){
			return false;
		},
		timeRemaining: function(){
			var timeRemaining = remainingTime - (Date.now() - taskStart);
			return timeRemaining < 0 ? 0 : timeRemaining;
		},
	};
	var setInactive = debounce(function(){
		remainingTime = 22;
		throttle = 66;
		minThrottle = 0;
	});

	function debounce(fn){
		var id, timestamp;
		var wait = 99;
		var check = function(){
			var last = (Date.now()) - timestamp;

			if (last < wait) {
				id = setTimeout(check, wait - last);
			} else {
				id = null;
				fn();
			}
		};
		return function(){
			timestamp = Date.now();
			if(!id){
				id = setTimeout(check, wait);
			}
		};
	}

	function abortRunning(){
		if(isRunning){
			if(lazyraf){
				cancelRequestAnimationFrame(lazyraf);
			}
			if(lazytimer){
				clearTimeout(lazytimer);
			}
			isRunning = false;
		}
	}

	function onInputorMutation(){
		if(throttle != 125){
			remainingTime = 7;
			throttle = 125;
			minThrottle = 35;

			if(isRunning) {
				abortRunning();
				scheduleLazy();
			}
		}
		setInactive();
	}

	function scheduleAfterRaf() {
		lazyraf = null;
		lazytimer = setTimeout(runTasks, 0);
	}

	function scheduleRaf(){
		lazytimer = null;
		requestAnimationFrame(scheduleAfterRaf);
	}

	function scheduleLazy(){

		if(isRunning){return;}
		throttleDelay = throttle - (Date.now() - taskStart);

		scheduleStart = Date.now();

		isRunning = true;

		if(minThrottle && throttleDelay < minThrottle){
			throttleDelay = minThrottle;
		}

		if(throttleDelay > 9){
			lazytimer = setTimeout(scheduleRaf, throttleDelay);
		} else {
			throttleDelay = 0;
			scheduleRaf();
		}
	}

	function runTasks(){
		var task, i, len;
		var timeThreshold = remainingTime > 9 ?
			9 :
			1
		;

		taskStart = Date.now();
		isRunning = false;

		lazytimer = null;

		if(runAttempts > 2 || taskStart - throttleDelay - 50 < scheduleStart){
			for(i = 0, len = tasks.length; i < len && IdleDeadline.timeRemaining() > timeThreshold; i++){
				task = tasks.shift();
				tasklength++;
				if(task){
					task(IdleDeadline);
				}
			}
		}

		if(tasks.length){
			scheduleLazy();
		} else {
			runAttempts = 0;
		}
	}

	function requestIdleCallbackShim(task){
		index++;
		tasks.push(task);
		scheduleLazy();
		return index;
	}

	function cancelIdleCallbackShim(id){
		var index = id - 1 - tasklength;
		if(tasks[index]){
			tasks[index] = null;
		}
	}

	if(!root.requestIdleCallback || !root.cancelIdleCallback){
		root.requestIdleCallback = requestIdleCallbackShim;
		root.cancelIdleCallback = cancelIdleCallbackShim;

		if(root.document && document.addEventListener){
			root.addEventListener('scroll', onInputorMutation, true);
			root.addEventListener('resize', onInputorMutation);

			document.addEventListener('focus', onInputorMutation, true);
			document.addEventListener('mouseover', onInputorMutation, true);
			['click', 'keypress', 'touchstart', 'mousedown'].forEach(function(name){
				document.addEventListener(name, onInputorMutation, {capture: true, passive: true});
			});

			if(root.MutationObserver){
				new MutationObserver( onInputorMutation ).observe( document.documentElement, {childList: true, subtree: true, attributes: true} );
			}
		}
	} else {
		try{
			root.requestIdleCallback(function(){}, {timeout: 0});
		} catch(e){
			(function(rIC){
				var timeRemainingProto, timeRemaining;
				root.requestIdleCallback = function(fn, timeout){
					if(timeout && typeof timeout.timeout == 'number'){
						return rIC(fn, timeout.timeout);
					}
					return rIC(fn);
				};
				if(root.IdleCallbackDeadline && (timeRemainingProto = IdleCallbackDeadline.prototype)){
					timeRemaining = Object.getOwnPropertyDescriptor(timeRemainingProto, 'timeRemaining');
					if(!timeRemaining || !timeRemaining.configurable || !timeRemaining.get){return;}
					Object.defineProperty(timeRemainingProto, 'timeRemaining', {
						value:  function(){
							return timeRemaining.get.call(this);
						},
						enumerable: true,
						configurable: true,
					});
				}
			})(root.requestIdleCallback)
		}
	}

	return {
		request: requestIdleCallbackShim,
		cancel: cancelIdleCallbackShim,
	};
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(128)))

/***/ }),
/* 128 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(4) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(45);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(74);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(58);

// CONCATENATED MODULE: ./src/localconfig.js
// 'platform': 'poc',
// const config = {
//   'baseurl': 'https://staticdaily.zhongan.com/website/isee-poc',
//   'apiDomain': 'isee-collector.zhongan.io',
//   'playerurl': 'https://isee-player.zhongan.io/'
//   // 'playerurl': 'http://localhost:3006/'
// }
// 'platform': 'test',
// const config = {
//   'baseurl': 'https://isee-plugins.zhongan.io/',
//   'apiDomain': 'isee-plugins.zhongan.io/isee/api',
//   'playerurl': 'https://za-isee-player.zhonganinfo.com/'
// }
// 业务方 洲际
// const config = {
//   'baseurl': 'https://isee-uat.87981818.com',
//   'apiDomain': 'isee-uat.87981818.com/isee/api',
//   'playerurl': 'http://172.19.101.124:9092'
// }
// 业务方 大都会
// const config = {
//   'baseurl': 'https://isee-uat.metlife.com.cn/isee',
//   'apiDomain': 'collector-uat.metlife.com.cn',
//   'playerurl': 'http://player-uat.metlife.com.cn'
// }
// 业务方 陆家嘴国泰
// const config = {
//   'baseurl': 'https://iseetest.cathaylife.cn/isee',
//   'apiDomain': 'iseetest.cathaylife.cn/isee/api',
//   'playerurl': 'http://za-isee-player.cathaylife.cn'
// }
// 业务方 滴滴test
// const config = {
//   'baseurl': 'http://isee-didi.zhonganfengshang.com/',
//   'apiDomain': 'isee-didi.zhonganfengshang.com/isee/api',
//   'playerurl': 'http://10.255.1.75:9091/'
// }
// 业务方 太保
// const config = {
//   'baseurl': 'https://zapoctest-dev.cpic.com.cn/isee',
//   'apiDomain': 'zapoctest-dev.cpic.com.cn/isee/api',
//   'playerurl': 'http://29.149.19.14:31002'
// }
// 业务方 太保test
// const config = {
//   'baseurl': 'https://isee-test-sit.cpic.com.cn/isee',
//   'apiDomain': 'isee-test-sit.cpic.com.cn/isee/api',
//   'playerurl': 'http://29.20.19.173:31008'
// }
// 业务方  i云保-测试,
// const config = {
//   baseurl: 'https://static.iyb.tm/isee/test',
//   apiDomain: 'isee-test.iyunbao.com',
//   playerurl: 'https://iyb-isee-player.test.za-tech.net'
// }
// 业务方  i云保,
// const config = {
//   baseurl: 'https://static.iyb.tm/isee/prd',
//   apiDomain: 'isee.iyunbao.com',
//   playerurl: 'https://iyb-isee-player.prd.za-tech.net'
// }
//   "platform": "uat",
// const config = {
//   baseurl: 'https://staticdaily.zhongan.com/website/isee/test',
//   apiDomain: 'isee-collector.zhongan.io',
//   // playerurl: 'https://isee-player-uat.zhonganonline.com'
//   playerurl: 'https://isee-player-uat.zhonganonline.com'
// }
//   "platform": "vpc:uat",
// const config = {
//   'baseurl': 'https://nstatic-pre.zhongan.com/za-isee-frontend-static/uat',
//   'apiDomain': 'isee-uat.zhongan.com',
//   'playerurl': 'https://isee-player-uat.zhonganonline.com'
// }
//   "platform": "vpc:test",
// const config = {
//   'baseurl': 'https://nstatic-pre.zhongan.com/za-isee-frontend-static/test',
//   'apiDomain': 'isee-test.zhongan.com',
//   'playerurl': 'https://isee-player-test.zhonganonline.com'
// }
//   "platform": "vpc:prd",
// const config = {
//   "baseurl": "https://nstatic-pre.zhongan.com/za-isee-frontend-static/pro",
//   "apiDomain": "isee.zhongan.com",
//   "playerurl": "https://isee-player.zhonganonline.com"
// }
//   "platform": "vpc:uat-zy",
// const config = {
//   "baseurl": "https://nstatic-pre.zhongan.com/za-isee-frontend-static/uat/zy",
//   "apiDomain": "isee-uat.zhongan.com",
//   "playerurl": "https://isee-player-uat.zhonganonline.com"
// }
//   "platform": "vpc:test-zy",
// const config = {
//   "baseurl": "https://nstatic-pre.zhongan.com/za-isee-frontend-static/test/zy",
//   "apiDomain": "isee-uat.zhongan.com",
//   "playerurl": "https://isee-player-uat.zhonganonline.com"
// }
//   "platform": "vpc:prd-zy",
// const config = {
//   "baseurl": "https://nstatic-pre.zhongan.com/za-isee-frontend-static/pro/zy",
//   "apiDomain": "isee.zhongan.com",
//   "playerurl": "https://isee-player.zhonganonline.com"
// }
// 天安
// const config = {
//   'baseurl': 'https://iseetest.95505.cn/', 'apiDomain': 'iseetest.95505.cn/isee/api', 'playerurl': 'http://10.100.142.55:9092'
// }
// 天安生产
// const config = {
//   'baseurl': 'https://isee.95505.cn',
//   'apiDomain': 'isee-collector.95505.cn:8081/isee/api',
//   'playerurl': 'http://isee-csvup.95505.cn:8086'
// }
// 吉祥测试
// const config = {
//   'baseurl': 'http://uatziplu.jxlife.com.cn',
//   'apiDomain': 'uatziplu.jxlife.com.cn/isee/api',
//   'playerurl': 'http://uatzipla.jxlife.com.cn'
// }
// 长城人寿
// const config = {
//   'baseurl': 'https://wxsta.greatlife.cn',
//   'apiDomain': 'wxsta.greatlife.cn/isee/api',
//   'playerurl': 'http://10.1.18.1:9092'
// }
//   "platform": "暖哇test",
// const config = {
//   'baseurl': 'https://isee-plugins-test.aibangbaoxian.com',
//   'apiDomain': 'isee-plugins-test.aibangbaoxian.com/isee/api',
//   'playerurl': 'http://nova-isee-frontend-player.test.za-tech.net'
// }
//   "platform": "暖哇pre",
// const config = {
//   'baseurl': 'https://isee-plugins-pre.aibangbaoxian.com',
//   'apiDomain': 'isee-plugins-pre.aibangbaoxian.com/isee/api',
//   'playerurl': 'http://nova-isee-frontend-player.pre.za-tech.net'
// }
//   "platform": "暖哇pro",
// const config = {
//   'baseurl': 'https://isee-plugins.aibangbaoxian.com',
//   'apiDomain': 'isee-plugins.aibangbaoxian.com/isee/api',
//   'playerurl': 'http://nova-isee-frontend-player.prd.za-tech.net'
// }
//   "platform": "安心",
// const config = {
//   'baseurl': 'https://isee-test.95303.com',
//   'apiDomain': 'isee-test.95303.com/isee/api',
//   'playerurl': 'http://10.0.0.118:9092'
// }
//   "platform": "国安",
// const config = {
//   'baseurl': 'https://static.ianguo.com/isee',
//   'apiDomain': 'static.ianguo.com/isee/api',
//   'playerurl': 'http://za-isee-player.ianguo.com'
// }
//   "platform": "友邦test",
// const config = {
//   'baseurl': 'https://euat-static.aia.com.cn/estore/mrs',
//   'apiDomain': 'euat.aia.com.cn/mrs',
//   'playerurl': 'http://192.168.250.166:9091'
// }
//   "platform": "福能经纪",
// const config = {
//   'baseurl': 'http://121.204.203.164:9093',
//   'apiDomain': '121.204.203.164:9093/isee/api',
//   'playerurl': 'http://121.204.203.164:9092'
// }
//   "platform": "lianlife",
// const config = {
//   'baseurl': 'http://iseetest.lianlife.com/isee',
//   'apiDomain': 'isee.test.lianlife.com/isee/api',
//   'playerurl': 'http://player.test.lianlife.com'
// }
//   "platform": "新浪test",
// const config = {
//   'baseurl': 'https://testisee.fubon.com.cn/isee',
//   'apiDomain': 'testisee.fubon.com.cn/isee/api',
//   'playerurl': 'https://testplayer.fubon.com.cn'
// }
//   "platform": "经纪",
// const config = {
//   'baseurl': 'https://nstatic.zhongan.com/zaab-isee-plugin/prd',
//   'apiDomain': 'iseecollector.zhonganib.com',
//   'playerurl': 'https://iseeplayer.zhonganib.com'
// }
//   "platform": "天安测试",
// const config = {
//   'baseurl': 'https://iseetest.95505.cn/',
//   'apiDomain': 'iseetest.95505.cn/isee/api',
//   'playerurl': 'http://10.100.142.55:9092'
// }
//   "platform": "福能测试",
// const config = {
//   'baseurl': 'http://121.204.203.164:9093',
//   'apiDomain': '121.204.203.164:9093/isee/api',
//   'playerurl': 'http://121.204.203.164:9092'
// }
//   "platform": "安心测试",
// const config = {
//   'baseurl': 'https://isee-test.95303.com/',
//   'apiDomain': 'isee-test.95303.com/isee/api',
//   'playerurl': 'http://10.0.0.101:9092/'
// }
//   "platform": "汇丰http",
// const config = {
//   'baseurl': 'http://32.114.112.142/',
//   'apiDomain': '32.114.112.142/isee/api',
//   'playerurl': 'http://32.114.112.142:8888/'
// }
//   "platform": "汇丰http",
// const config = {
//   'baseurl': 'https://uatziplu.jxlife.com.cn/',
//   'apiDomain': 'uatziplu.jxlife.com.cn/isee/api',
//   'playerurl': 'http://uatzipla.jxlife.com.cn/'
// }
//   "platform": "中化http",
// const config = {
//   'baseurl': 'http://testza.sinocheminsurance.com/',
//   'apiDomain': 'testza.sinocheminsurance.com/isee/api',
//   'playerurl': 'http://testzafe.sinocheminsurance.com:9091/'
// }
//   "platform": "大都会UAT",
// const config = {
//   'baseurl': 'https://isee-uat.metlife.com.cn/isee',
//   'apiDomain': 'isee-uat.metlife.com.cn/isee/api',
//   'playerurl': 'https://player-uat.metlife.com.cn/'
// }
//   "platform": "d",
// const config = {
//   'baseurl': 'CLEAR_BASE_URL',
//   'apiDomain': 'CLEAR_API_DOMAIN',
//   'playerurl': 'CLEAR_PLAYER_URL'
// }
// const config = {
//   'baseurl': 'https://isee-uat.metlife.com.cn/isee',
//   'apiDomain': 'isee-uat.metlife.com.cn/isee/api',
//   'playerurl': 'https://player-uat.metlife.com.cn/'
// }
// 江南http
// const config = {
//   'baseurl': 'http://32.114.112.142',
//   'apiDomain': '32.114.112.142/isee/api',
//   'playerurl': 'http://32.114.112.142:8888/'
// }
//   "platform": "d",
// const config = {
//   'baseurl': 'CLEAR_BASE_URL',
//   'apiDomain': 'CLEAR_API_DOMAIN',
//   'playerurl': 'CLEAR_PLAYER_URL'
// }
// const config = {
//   'baseurl': 'https://isee.metlife.com.cn',
//   'apiDomain': 'isee.metlife.com.cn/isee/api',
//   'playerurl': 'https://player.metlife.com.cn/'
// }
// const config = {
//   'baseurl': 'https://isee.cpic.com.cn/isee',
//   'apiDomain': 'isee.cpic.com.cn/isee/api',
//   'playerurl': 'http://21.10.100.22:31003/'
// }
var config = {
  'baseurl': 'https://isee-test-sit.cpic.com.cn/isee',
  'apiDomain': 'isee-test-sit.cpic.com.cn/isee/api',
  'playerurl': 'http://29.20.19.173:31008/'
};
/* harmony default export */ var localconfig = (config);
// CONCATENATED MODULE: ./src/constants/index.js

var NODE_TYPE = {
  Document: 0,
  DocumentType: 1,
  Element: 2,
  Text: 3,
  CDATA: 4,
  Comment: 5
};
var REPLAYER_EVENTS = {
  Start: 'start',
  Pause: 'pause',
  Resume: 'resume',
  Resize: 'resize',
  Finish: 'finish',
  // 实时emit当前播放时间
  Current: 'current',
  FullsnapshotRebuilded: 'fullsnapshot-rebuilded',
  LoadStylesheetStart: 'load-stylesheet-start',
  LoadStylesheetEnd: 'load-stylesheet-end',
  SkipStart: 'skip-start',
  SkipEnd: 'skip-end',
  MouseInteraction: 'mouse-interaction'
};
var EVENT_TYPE = {
  DomContentLoaded: 0,
  Load: 1,
  FullSnapshot: 2,
  IncrementalSnapshot: 3,
  Meta: 4,
  PageChange: 5,
  BizFlag: 6,
  CurrentPage: 7,
  Base64Image: 8,
  Custom: 9
};
var INCREMENTAL_SOURCE = {
  Mutation: 0,
  MouseMove: 1,
  MouseInteraction: 2,
  Scroll: 3,
  ViewportResize: 4,
  Input: 5,
  TouchMove: 6
};
var MOUSE_INTERACTIONS = {
  MouseUp: 0,
  MouseDown: 1,
  Click: 2,
  ContextMenu: 3,
  DblClick: 4,
  Focus: 5,
  Blur: 6,
  TouchStart: 7,
  // TouchMove: 8,
  TouchEnd: 9
};
var DOMAIN = {
  development: localconfig.apiDomain,
  // 'isee-uat.zhongan.com',
  test: localconfig.apiDomain,
  // 'isee-test.zhongan.com',
  // uat: 'isee-collector.zhongan.io',
  uat: localconfig.apiDomain,
  // 'isee-uat.zhongan.com',
  // production: 'isee.zhongan.com'
  production: localconfig.apiDomain // 对外本地化部署需要修改

};
var protocol = undefined === 'http' ? 'http' : 'https'; // 获取服务器时间接口

var SERVER_TIME_API_COLLECTION = {
  development: "".concat(protocol, "://").concat(DOMAIN.development, "/clock/collimate"),
  test: "".concat(protocol, "://").concat(DOMAIN.test, "/clock/collimate"),
  uat: "".concat(protocol, "://").concat(DOMAIN.uat, "/clock/collimate"),
  production: "".concat(protocol, "://").concat(DOMAIN.production, "/clock/collimate") // gzip检查接口

};
var GIZP_CHECK_API_COLLECTION = {
  development: "".concat(protocol, "://").concat(DOMAIN.development, "/gzip/check"),
  test: "".concat(protocol, "://").concat(DOMAIN.test, "/gzip/check"),
  uat: "".concat(protocol, "://").concat(DOMAIN.uat, "/gzip/check"),
  production: "".concat(protocol, "://").concat(DOMAIN.production, "/gzip/check") // 版本接口

};
var VERSION_API_COLLECTION = {
  development: "".concat(protocol, "://").concat(DOMAIN.development, "/plugin/version/query"),
  test: "".concat(protocol, "://").concat(DOMAIN.test, "/plugin/version/query"),
  uat: "".concat(protocol, "://").concat(DOMAIN.uat, "/plugin/version/query"),
  production: "".concat(protocol, "://").concat(DOMAIN.production, "/plugin/version/query") // record socket 接口

};
var SOCKET_API_COLLECTION = {
  development: "wss://".concat(DOMAIN.development, "/api/events"),
  test: "wss://".concat(DOMAIN.test, "/sapi/ed/events"),
  uat: "ws://".concat(DOMAIN.uat, "/sapi/ed/events"),
  production: "ws://".concat(DOMAIN.production, "/sapi/ed/events") // record ajax 接口

};
var AJAX_API_COLLECTION = {
  development: "".concat(protocol, "://").concat(DOMAIN.development, "/record/save"),
  test: "".concat(protocol, "://").concat(DOMAIN.test, "/record/save"),
  uat: "".concat(protocol, "://").concat(DOMAIN.uat, "/record/save"),
  production: "".concat(protocol, "://").concat(DOMAIN.production, "/record/save") // 首页列表 接口

};
var FIRSTPAGE_API_COLLECTION = {
  development: "".concat(protocol, "://").concat(DOMAIN.development, "/record/listPage"),
  test: "".concat(protocol, "://").concat(DOMAIN.test, "/record/listPage"),
  uat: "".concat(protocol, "://").concat(DOMAIN.uat, "/record/listPage"),
  production: "".concat(protocol, "://").concat(DOMAIN.production, "/record/listPage")
};
var AJAX_CLEAR_API_COLLECTION = {
  development: "".concat(protocol, "://").concat(DOMAIN.development, "/record/saveV2"),
  test: "".concat(protocol, "://").concat(DOMAIN.test, "/record/saveV2"),
  uat: "".concat(protocol, "://").concat(DOMAIN.uat, "/record/saveV2"),
  production: "".concat(protocol, "://").concat(DOMAIN.production, "/record/saveV2") // record 结束页socket

};
var END_SOCKET_API_COLLECTION = {
  development: "wss://".concat(DOMAIN.development, "/sapi/end/events"),
  test: "wss://".concat(DOMAIN.test, "/sapi/end/events"),
  uat: "wss://".concat(DOMAIN.uat, "/sapi/end/events"),
  production: "wss://".concat(DOMAIN.production, "/sapi/end/events") // etag接口

};
var ETAG_API_COLLECTION = {
  development: "".concat(protocol, "://").concat(DOMAIN.development, "/iseeBiz.gif"),
  test: "".concat(protocol, "://").concat(DOMAIN.test, "/iseeBiz.gif"),
  uat: "".concat(protocol, "://").concat(DOMAIN.uat, "/iseeBiz.gif"),
  production: "".concat(protocol, "://").concat(DOMAIN.production, "/iseeBiz.gif")
};
var CORS_API_COLLECTION = {
  development: "http://10.253.164.95:8006",
  test: "http://10.253.164.95:8006",
  uat: "http://10.253.164.95:8006",
  production: "http://10.253.164.95:8006"
};
var LIB_URL_COLLECTION = {
  // development: `https://ishare-local.zhongan.io/plugin/record.js`,
  development: "https://dev.mytest.com/plugins/record.js",
  test: "https://staticdaily.zhongan.com/website/mobile/assets/js/record.js",
  uat: "https://staticdaily.zhongan.com/website/isee-poc/record.js",
  production: "https://static.zhongan.com/website/isee/record.js"
};
var LAUNCH_URL_COLLECTION = {
  development: "https://dev.mytest.com/plugins/launch.js",
  test: "https://staticdaily.zhongan.com/website/mobile/assets/js/launch.js",
  uat: "https://staticdaily.zhongan.com/website/isee-poc/launch.js",
  production: "https://static.zhongan.com/website/isee/launch.js" // const BASE_URL_UAT = {
  //   base: `https://staticdaily.zhongan.com/website/isee-poc`,
  //   vpc: `https://nstatic-pre.zhongan.com/za-isee-frontend-static/uat`
  // }
  // const BASE_URL_TEST = {
  //   base: `https://staticdaily.zhongan.com/website/mobile/assets/js`,
  //   vpc: `https://nstatic-test.zhongan.com/za-isee-frontend-static/test/test`
  // }
  // const BASE_URL_PRD = {
  //   // base: `https://static.zhongan.com/website/isee`, // 对外本地化部署需要修改
  //   base: serverconfig.baseurl,
  //   vpc: `https://nstatic.zhongan.com/za-isee-frontend-static/pro`
  // }
  // const BASE_URL_COLLECTION = {
  //   development: `https://dev.mytest.com/plugins`,
  //   // test: `https://staticdaily.zhongan.com/website/mobile/assets/js`,
  //   // uat: `https://staticdaily.zhongan.com/website/isee`,
  //   // production: `https://static.zhongan.com/website/isee`
  //   // test: `https://nstatic-test.zhongan.com/za-isee-frontend-static/test/test`,
  //   // uat: `https://nstatic-pre.zhongan.com/za-isee-frontend-static/uat`,
  //   // production: `https://nstatic.zhongan.com/za-isee-frontend-static/pro`,
  //   test: BASE_URL_TEST[process.env.ISEE_ENV],
  //   uat: BASE_URL_UAT[process.env.ISEE_ENV],
  //   production: BASE_URL_PRD[process.env.ISEE_ENV]
  // }
  // 视频播放器的地址

};
var PLAYER_ENDPOINTS = {
  development: "http://localhost:3006",
  test: "http://3206-core-core-za-isee-frontend-player.test.za.biz",
  uat: "https://isee-player-uat.zhonganonline.com",
  // uat: `http://isee-admin-test.zhonganonline.com:3006/`,
  production: "https://isee-player.zhonganonline.com"
};
var LOG_SOCKET_COLLECTION = {
  development: "wss://".concat(DOMAIN.development, "/sapi/log/eventsD"),
  test: "wss://".concat(DOMAIN.test, "/sapi/log/eventsD"),
  uat: "wss://".concat(DOMAIN.uat, "/sapi/log/eventsD"),
  production: "wss://".concat(DOMAIN.production, "/sapi/log/eventsD")
};
var SERVER_TIME_API = SERVER_TIME_API_COLLECTION["test"];
var GIZP_CHECK_API = GIZP_CHECK_API_COLLECTION["test"];
var SOCKET_API = SOCKET_API_COLLECTION["test"];
var AJAX_API = AJAX_API_COLLECTION["test"];
var AJAX_CLEAR_API = AJAX_CLEAR_API_COLLECTION["test"];
var END_SOCKET_API = END_SOCKET_API_COLLECTION["test"];
var CORS_API = CORS_API_COLLECTION["test"];
var LIB_URL = LIB_URL_COLLECTION["test"];
var PLAYER_ENDPOINT = localconfig.playerurl || PLAYER_ENDPOINTS["test"];
var VERSION_API = VERSION_API_COLLECTION["test"];
var LAUNCH_URL = LAUNCH_URL_COLLECTION["test"];
var LOG_SOCKET = LOG_SOCKET_COLLECTION["test"];
var ETAG_API = ETAG_API_COLLECTION["test"];
var FIRSTPAGE_API = FIRSTPAGE_API_COLLECTION["test"];
var BASE_URL = localconfig.baseurl;
var IFRAME_DELAY = 2000;
var ISEE_VERSION = '1.0.020102301';
var ISEE_BIZ = 'ISEE_BIZ';
var ISEE_COUNT = 'ISEE_COUNT';
var ISEE_DEVICE_ID = 'ISEE_DEVICE_ID_V2'; // 用于保存当前页面中iframe的iseebiz的key

var IFRAME_ISEE_BIZ = 'IFRAME_ISEE_BIZ';
var PLACEHOLDER_IMAGE = localconfig.baseurl.indexOf('zhongan') >= 0 ? 'https://static.zhongan.com/website/isee/img/placeholder.jpg' : "".concat(localconfig.baseurl, "/placeholder.jpg");
var DATA_URI = /^(data:)([\w/+-]+);(charset=[\w-]+|base64).*,(.*)/gi;
var DATA_IMG = /data:image([a-zA-Z0-9/;,:+=]+)/gi;
var MAX_RECONNECT = 5;
var USE_STATIC_LIBRARY = true;
var TIMEOUT = 3000;
var IS_STABLE_VERSION = 'false'; // 直营特供版本为true，其他为false
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(75);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(76);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/cookie/index.js






var cookie_Cookie =
/*#__PURE__*/
function () {
  function Cookie(domain, path, exp) {
    classCallCheck_default()(this, Cookie);

    this.domain = domain || '.zhongan.com';
    this.path = path || '/';
    this.exp = exp || 365 * 24 * 60 * 60 * 1000;
  }

  createClass_default()(Cookie, [{
    key: "setCookie",
    value: function setCookie(name, value, cookieExp) {
      var exp = new Date();
      exp.setTime(exp.getTime() + (cookieExp || this.exp));
      document.cookie = "".concat(name, "=").concat(escape(value), ";expires=").concat(exp.toGMTString(), ";path=").concat(this.path, ";domain=").concat(this.domain, ";");
    }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var arr;
      var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

      if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    }
  }, {
    key: "delCookie",
    value: function delCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 100 - this.exp);
      var cval = this.getCookie(name);

      if (cval != null) {
        // document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        document.cookie = "".concat(name, "=").concat(escape(cval), ";expires=").concat(exp.toGMTString(), ";path=").concat(this.path, ";domain=").concat(this.domain, ";");
      }
    }
  }]);

  return Cookie;
}();
var cookie = null;
var dReg = /\.(ac.cn|bj.cn|sh.cn|tj.cn|cq.cn|he.cn|sn.cn|sx.cn|nm.cn|ln.cn|jl.cn|hl.cn|js.cn|zj.cn|ah.cn|fj.cn|jx.cn|sd.cn|ha.cn|hb.cn|hn.cn|gd.cn|gx.cn|hi.cn|sc.cn|gz.cn|yn.cn|gs.cn|qh.cn|nx.cn|xj.cn|tw.cn|hk.cn|mo.cn|xz.cn|com.cn|net.cn|org.cn|gov.cn|com|cn|cc|org|net|xin|xyz|vip|shop|top|club|wang|fun|info|online|tech|store|site|ltd|ink|biz|group|link|work|pro|mobi|ren|kim|name|tv|red|io|cool|team|live|pub|company|zone|today|video|art|chat|gold|guru|show|life|love|email|fund|city|plus|design|social|center|world|auto)/ig;
var hostname = window.location.hostname;
var list = hostname.split('.');

if (list.length === 1 || /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(hostname)) {
  cookie = new cookie_Cookie(hostname);
} else {
  // const tophost = list.slice(-2).join('.')
  // cookie = new Cookie(tophost)
  var transHostName = dReg.test(hostname) ? hostname.match(dReg).join('') : null; // '.com'

  if (transHostName) {
    var domainName = hostname.replace(transHostName, '');
    var nameList = domainName.split('.');

    if (nameList.length === 1) {
      cookie = new cookie_Cookie(domainName + transHostName);
    } else {
      cookie = new cookie_Cookie(nameList[nameList.length - 1] + transHostName);
    }
  } else {
    cookie = new cookie_Cookie(document.domain);
  }
}

/* harmony default export */ var src_cookie = (cookie);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-nan.js
var es6_number_is_nan = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(77);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(44);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(78);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/fingerprintjs2/fingerprint2.js
var fingerprint2 = __webpack_require__(23);
var fingerprint2_default = /*#__PURE__*/__webpack_require__.n(fingerprint2);

// EXTERNAL MODULE: ./node_modules/requestidlecallback/index.js
var requestidlecallback = __webpack_require__(127);

// CONCATENATED MODULE: ./src/utils.js























// import cookie from './cookie'




var lastTakeFull = 0;
function absoluteToDoc(doc, attributeValue) {
  var a = doc.createElement('a');
  a.setAttribute('class', 'isee-block');
  a.href = window.decodeURIComponent(attributeValue);
  return a.href;
}
function on(type, fn) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var options = {
    capture: true,
    passive: true
  };
  target.addEventListener(type, fn, options);
  return function () {
    return target.removeEventListener(type, fn, options);
  };
}
function extraOn(type, fn) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var options = {};
  target.addEventListener(type, fn, options);
  return function () {
    return target.removeEventListener(type, fn, options);
  };
}
var mirror = {
  map: {},
  getId: function getId(n) {
    if (n && n.__sn) {
      return n.__sn.id;
    }

    return -1;
  },
  getNode: function getNode(id) {
    return mirror.map[id] || null;
  },
  // TODO: use a weakmap to get rid of manually memory management
  removeNodeFromMap: function removeNodeFromMap(n) {
    var id = n.__sn && n.__sn.id;
    delete mirror.map[id];

    if (n.childNodes) {
      n.childNodes.forEach(function (child) {
        mirror.removeNodeFromMap(child);
      });
    }
  },
  has: function has(id) {
    return mirror.map.hasOwnProperty(id);
  },
  max: function max() {
    var maxId = Object.keys(mirror.map).length > 0 && Math.max.apply(Math, toConsumableArray_default()(Object.keys(mirror.map).map(function (id) {
      return Number(id);
    }))) || 1;
    return maxId;
  }
};
var IseeStorage = {
  getNormalIseebiz: function getNormalIseebiz(iseebiz) {
    if (/\.(T|F)$/.test(iseebiz)) {
      return iseebiz.replace(/\.(T|F)$/, '');
    } else {
      return iseebiz.replace(/\.(T|F)\S*/, '');
    }
  },
  getIseeCookie: function getIseeCookie(iseebiz, key) {
    if (src_cookie) {
      // const item = iseeCookie.getCookie(iseebiz)
      // if (item) {
      //   const itemObj = typeof item === 'string' ? JSON.parse(item) : 
      // }
      return src_cookie.getCookie(this.getNormalIseebiz(iseebiz));
    } else {
      return null;
    }
  },
  setIseeCookie: function setIseeCookie(iseebiz, key, value) {
    if (src_cookie) {
      src_cookie.setCookie(this.getNormalIseebiz(iseebiz), value, 5 * 60 * 1000);
    }
  },
  getLastTakeFull: function getLastTakeFull() {
    return lastTakeFull;
  },
  setLastTakeFull: function setLastTakeFull(t) {
    lastTakeFull = t;
  },
  isSameLastTakeFull: function isSameLastTakeFull(iseebiz) {
    // 如果相同，说明没有做过全量，直接走type3， 如果不同，说明全量被覆盖了
    if (lastTakeFull.toString() !== (src_cookie.getCookie(this.getNormalIseebiz(iseebiz)) || '').toString()) {
      return false;
    }

    return true;
  }
}; // copy from underscore and modified

function throttle(func, wait) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout = null;
  var previous = 0;
  var leading = options.leading,
      trailing = options.trailing;
  return function () {
    // let now = Date.now()
    var now = getCurrentTimestamp();

    if (!previous && leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    var context = this;
    var args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      func.apply(context, args);
    } else if (!timeout && trailing !== false) {
      timeout = window.setTimeout(function () {
        previous = leading === false ? 0 : getCurrentTimestamp();
        /* Date.now() */

        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
function getPropertyDescriptor(object, propertyName) {
  var descriptor = Object.getOwnPropertyDescriptor(object, propertyName);

  if (!object) {
    throw new Error('descriptor not found');
  }

  if (!descriptor) {
    return getPropertyDescriptor(Object.getPrototypeOf(object), propertyName);
  }

  return descriptor;
}
function hookSetter(target, key, d, isRevoked) {
  var original = getPropertyDescriptor(target, key);
  Object.defineProperty(target, key, isRevoked ? d : {
    set: function set(value) {
      var _this = this;

      // put hooked setter into event loop to avoid of set latency
      window.setTimeout(function () {
        if (d && d.set) {
          d.set.call(_this, value);
        }
      }, 0);

      if (original && original.set) {
        original.set.call(this, value);
      }
    },
    get: function get() {
      if (original && original.get) {
        return original.get.call(this);
      }
    }
  });
  return function () {
    return hookSetter(target, key, original || {}, true);
  };
}
function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod', 'iPad'];
  var flag = true;

  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) >= 0) {
      flag = false;
      break;
    }
  }

  return flag;
}
function getWindowHeight() {
  var currentHeight = window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  return currentHeight;
}
function getScreenHeight() {
  var _window$screen, _window$screen2;

  return window.screen && (((_window$screen = window.screen) === null || _window$screen === void 0 ? void 0 : _window$screen.availHeight) || ((_window$screen2 = window.screen) === null || _window$screen2 === void 0 ? void 0 : _window$screen2.height)) || getWindowHeight();
}
function getWindowWidth() {
  var currentWidth = window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
  return currentWidth;
}
function getScreenWidth() {
  var _window$screen3, _window$screen4;

  return window.screen && (((_window$screen3 = window.screen) === null || _window$screen3 === void 0 ? void 0 : _window$screen3.availWidth) || ((_window$screen4 = window.screen) === null || _window$screen4 === void 0 ? void 0 : _window$screen4.width)) || getWindowWidth();
}
function setCurFullWindowWH() {
  var curSW = getScreenWidth();
  var curSH = getScreenHeight();
  var w = getWindowWidth();
  var h = getWindowHeight();

  if (curSW > curSH) {
    // 横屏
    if (w > window.record.orect.h[0]) {
      window.record.orect.h[0] = w;
      window.record.orect.v[1] = w;
    }

    if (h > window.record.orect.h[1]) {
      window.record.orect.h[1] = h;
      window.record.orect.v[0] = h;
    }
  } else {
    // 竖屏
    if (w > window.record.orect.v[0]) {
      window.record.orect.v[0] = w;
      window.record.orect.h[1] = w;
    }

    if (h > window.record.orect.v[1]) {
      window.record.orect.v[1] = h;
      window.record.orect.h[0] = h;
    }
  }
}
function getCurFullWindowWH() {
  var curSW = getScreenWidth();
  var curSH = getScreenHeight();

  if (curSW > curSH) {
    // heng
    return window.record.orect.h;
  } else {
    // v
    return window.record.orect.v;
  }
}
function isBlocked(node, blockClass, blockElements) {
  if (!node) {
    return false;
  }

  if (node.nodeType === node.ELEMENT_NODE) {
    var needBlock = false;

    if (typeof blockClass === 'string') {
      needBlock = node.classList && node.classList.contains(blockClass);
    } else {
      Array.from(node.classList || []).forEach(function (className) {
        if (blockClass.test(className)) {
          needBlock = true;
        }
      });
    }

    if (isUnusefulElement(node)) {
      needBlock = true;
    } // if (node.tagName.toLowerCase() === 'script') {
    //   needBlock = true
    // }


    if (blockElements && blockElements.length) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = blockElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var blockElement = _step.value;

          if (!node.parentNode || !node.parentNode.tagName) {
            break;
          }

          var parentTagName = node.parentNode.tagName;

          if (blockElement.tagName === parentTagName.toLowerCase()) {
            needBlock = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return needBlock || isBlocked(node.parentNode, blockClass, blockElements);
  }

  return isBlocked(node.parentNode, blockClass, blockElements);
}
function isParentPDF(node) {
  var pdfAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'isee_pdf';
  if (!node || !node.parentNode) return false;
  var parentN = node.parentNode;

  if (!parentN) {
    return false;
  }

  if (parentN.nodeType === node.ELEMENT_NODE && parentN.attributes.hasOwnProperty(pdfAttr)) {
    return true;
  }

  if (parentN.tagName && parentN.tagName.toLowerCase() === 'body') {
    return false;
  }

  return isParentPDF(parentN);
}
function removeChildren(node) {
  if (node && node.childNodes.length > 0) {
    node.removeChild(node.lastChild);
    removeChildren(node);
  }
}
function isSecret(node) {
  if (!node) {
    return false;
  }

  if (node.nodeType === node.ELEMENT_NODE || node.nodeType === node.TEXT_NODE) {
    var needSecret = node.classList && node.classList.contains('isee-secret');
    return needSecret || isSecret(node.parentNode);
  }

  return isSecret(node.parentNode);
}
function isSignCanvas(node) {
  if (!node) {
    return false;
  }

  if (node.nodeType === node.ELEMENT_NODE && node.tagName.toLowerCase() === 'canvas') {
    if (node.attributes.hasOwnProperty('isee_sign')) {
      return true;
    }
  }

  return isSignCanvas(node.parentNode);
}
function isUnusefulElement(n) {
  if (n.tagName.toLowerCase() === 'img' && n.getAttribute('src') && n.getAttribute('src').indexOf('static.zhongan.com/sdk_app.gif') >= 0) {
    return true;
  }

  return false;
}
function isOnceElement(node, onceClass) {
  if (!node) {
    return false;
  }

  if (node.nodeType === node.ELEMENT_NODE) {
    var isOnce = false;

    if (typeof onceClass === 'string') {
      isOnce = node.classList && node.classList.contains(onceClass);
    } else {
      Array.from(node.classList || []).forEach(function (className) {
        if (onceClass.test(className)) {
          isOnce = true;
        }
      });
    }

    return isOnce || isOnceElement(node.parentNode, onceClass);
  }

  return isOnceElement(node.parentNode, onceClass);
}
function isAncestorRemoved(target) {
  var id = mirror.getId(target);

  if (!mirror.has(id)) {
    return true;
  }

  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  } // if the root is not document, it means the node is not in the DOM tree anymore


  if (!target.parentNode) {
    return true;
  }

  return isAncestorRemoved(target.parentNode);
}
function isShouldScrollNode(target) {
  var containerHeight = target.clientHeight;
  var containerScrollHeight = target.scrollHeight;
  return containerScrollHeight > containerHeight;
}
function findScrollNode(target) {
  if (!target) return false;
  if (target.tagName.toLowerCase() === 'html') return false;
  var style = window.getComputedStyle(target);

  if ((style.overflowX === 'scroll' || style.overflowX === 'auto' || style.overflowY === 'scroll' || style.overflowY === 'auto') && isShouldScrollNode(target)) {
    return target;
  }

  if (target.parentElement) {
    return findScrollNode(target.parentElement);
  }
}
function getSearchParamValues() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;
  return url.slice(1).split('&').map(function (item) {
    return item.split('=')[1];
  }).filter(function (item) {
    return item;
  }).map(function (item) {
    var absoluteUrl = absoluteToDoc(document, window.decodeURIComponent(item).trim());
    return absoluteUrl.replace(/https?:/, '');
  });
} // 获取url上query的集合

function getSearchParams() {
  return window.location.search.slice(1).split('&').map(function (item) {
    var arr = item.split('=');
    return defineProperty_default()({}, arr[0], arr[1]);
  }).reduce(function (result, item) {
    return objectSpread_default()({}, result, {}, item);
  }, {});
}
function intersection(arr1, arr2) {
  var arr = arr2.map(function (item) {
    return item.replace(/https?:/, '');
  });
  return arr1.filter(function (item) {
    return arr.includes(item);
  });
} // 如果返回值不会空，表示当前页面是pdf页面，此时返回值代表当前pdf的链接地址

function getPdfPageLink() {
  // const searchValues = getSearchParamValues()
  // let pdfLink = ''
  // if (searchValues && searchValues.length) {
  //   for (let i = 0; i < searchValues.length; i++) {
  //     if (/.*\.pdf(\?.*)?$/.test(searchValues[i])) {
  //       pdfLink = searchValues[i]
  //       break
  //     }
  //   }
  // }
  return getFilePdfFromSearch();
}
function getFilePdfFromSearch() {
  // return getQueryString('file')
  var filename = getQueryString('file');

  if (filename && filename.indexOf('pdf') >= 0) {
    return absoluteToDoc(document, window.decodeURIComponent(filename).trim()); // return absoluteToDoc(document, filename)
  }

  return '';
}

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return r[2];
  }

  return '';
}

function getPdfResourceLinkFromPdfLink(pdfLink) {
  if (pdfLink) {
    var reg = /(http|https):\/\/(.*)pdf(\?.*)?$/;
    var matchResult = pdfLink.match(reg);

    if (matchResult && matchResult.length > 0) {
      return matchResult[0];
    }
  }

  return pdfLink;
}
function getPlatform() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  var isPc = true;

  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > -1) {
      isPc = false;
      break;
    }
  }

  return isPc ? 'pc' : 'mobile';
}
function isIOS() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['iPhone', 'iPad', 'iPod'];
  var isIOS = false;

  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > -1) {
      isIOS = true;
      break;
    }
  }

  return isIOS;
}
function getCORSUri(uri) {
  var str = uri.replace(/^((https?):\/\/)(.+)/, '$2/$3');
  return "".concat(CORS_API, "/api/getResource/").concat(str);
}
function isInIframe() {
  return Boolean(window.parent && window.parent !== window || window.parent && window.frames.length !== window.parent.frames.length);
}
function isWeixin() {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') !== -1;
}
function isWebView() {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('webview') !== -1;
} // function tilingCompress (img, quality, ext = 'webp', innerWidth) {
//   const rate = innerWidth && innerWidth < img.naturalWidth ? innerWidth * 1.0 / img.naturalWidth : 1
//   const imgWidth = img.naturalWidth * rate
//   const imgHeight = img.naturalHeight * rate
//   if (!(imgWidth + imgHeight)) return
//   const canvas = document.createElement('canvas')
//   const ctx = canvas.getContext('2d')
//   canvas.width = imgWidth
//   canvas.height = imgHeight
//   ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
//   const dataURL = canvas.toDataURL(`image/${ext}`, quality || 0.8)
//   return dataURL
//   // const d = 1024 // size of tiling canvas
//   // let tmpCanvas = document.createElement('canvas')
//   // tmpCanvas.width = tmpCanvas.height = d
//   // let tmpCtx = tmpCanvas.getContext('2d')
//   // let sy = 0
//   // let dy = 0
//   // while (sy < imgHeight) {
//   //   let sx = 0
//   //   let dx = 0
//   //   while (sx < imgWidth) {
//   //     tmpCtx.clearRect(0, 0, d, d)
//   //     tmpCtx.drawImage(img, -sx, -sy)
//   //     ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, d, d)
//   //     sx += d
//   //     dx += d
//   //   }
//   //   sy += d
//   //   dy += d
//   // }
//   // ctx.restore()
//   // tmpCanvas = tmpCtx = null
//   // return canvas.toDataURL(`image/${ext}`, quality || 0.8)
// }
// function tilingCompress2 (img, quality, ext = 'webp') {
//   const sWidth = getScreenWidth()
//   const imgWidth = Math.min(img.naturalWidth, sWidth)
//   const imgHeight = img.naturalHeight * (imgWidth / img.naturalWidth)
//   if (!(imgWidth + imgHeight)) return
//   const canvas = document.createElement('canvas')
//   const ctx = canvas.getContext('2d')
//   ctx.save()
//   canvas.width = imgWidth
//   canvas.height = imgHeight
//   const d = 1024 // size of tiling canvas
//   let tmpCanvas = document.createElement('canvas')
//   tmpCanvas.width = tmpCanvas.height = d
//   let tmpCtx = tmpCanvas.getContext('2d')
//   let sy = 0
//   let dy = 0
//   while (sy < imgHeight) {
//     let sx = 0
//     let dx = 0
//     while (sx < imgWidth) {
//       tmpCtx.clearRect(0, 0, d, d)
//       tmpCtx.drawImage(img, -sx, -sy)
//       ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, d, d)
//       sx += d
//       dx += d
//     }
//     sy += d
//     dy += d
//   }
//   ctx.restore()
//   tmpCanvas = tmpCtx = null
//   return canvas.toDataURL(`image/${ext}`, quality || 0.8)
// }
// const dealBase64 = (base64img, img, ext, canvas, innerWidth) => {
//   const curCanvas = canvas || document.createElement('canvas')
//   const imgSize = base64img.length / (3 / 4.0) / 1024
//   const rate = innerWidth && innerWidth < img.naturalWidth ? innerWidth * 1.0 / img.naturalWidth : 1
//   if ((rate < 1 || imgSize > MAX_SIZE) && curCanvas) {
//     const imgWidth = img.width
//     const imgHeight = img.height
//     const ctx = curCanvas.getContext('2d')
//     curCanvas.width = imgWidth * rate
//     curCanvas.height = imgHeight * rate
//     ctx.clearRect(0, 0, curCanvas.width, curCanvas.height)
//     ctx.drawImage(img, 0, 0, curCanvas.width, curCanvas.height)
//     return curCanvas.toDataURL(`image/${ext}`, 0.8)
//   }
//   return base64img
// }
// 测试代码

function getBase64FromImgUrlWithOrientation(url, quality) {
  if (!url) return;

  var _quality = quality || 1;

  var ext = 'webp';
  var isBase64 = false;
  url = url.trim();

  if (/data:image([a-zA-Z0-9/;,:+=]+)/.test(url)) {
    isBase64 = true;
    ext = url.match(/^data:image\/(\w+);base64,/);
    ext = ext && ext[1] && ext[1].toLowerCase();

    if (ext !== 'gif' && ext !== 'png' && ext !== 'webp') {
      ext = 'jpeg';
    }

    if (!quality && url.length > 300) {
      _quality = +Math.sqrt(1 / url.length * 200).toFixed(2);
      _quality = _quality > 0.9 ? 1 : _quality === 0 ? 0.01 : _quality;
    }
  } else {
    ext = url.match(/^.+\.(\w+)([^/]*)$/);
    ext = ext && ext[1] && ext[1].toLowerCase();

    if (ext !== 'gif' && ext !== 'png' && ext !== 'webp') {
      ext = 'jpeg';
    }
  }

  var getBase64Image = function getBase64Image(img, cb) {
    var getOrImage = function getOrImage(or) {
      var canvas = document.createElement('canvas');
      var sWidth = getPlatform() === 'pc' ? Math.min(getScreenWidth(), 800) : Math.min(getScreenWidth(), 460);
      var imgW = Math.min(img.naturalWidth, sWidth);
      var imgH = img.naturalHeight * (imgW / img.naturalWidth);
      var ctx = canvas.getContext('2d');
      canvas.width = imgW;
      canvas.height = imgH;
      console.log("[ISEE] get image Orientation = ", or, ",width = ".concat(imgW, ", height=").concat(imgH));

      if (or) {
        // if (Number(or) === 1 || Number(or) === 3) {
        //   canvas.width = imgH
        //   canvas.height = imgW
        // } else {
        //   canvas.width = imgW
        //   canvas.height = imgH
        // }
        switch (Number(or)) {
          case 3:
            // 左恒
            // ctx.rotate(-Math.PI / 2)
            // ctx.drawImage(img, 0, 0, imgW, imgH, -imgW, 0, imgW, imgH)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            break;

          case 8:
            // 手机倒着
            // ctx.rotate(Math.PI)
            // ctx.drawImage(img, 0, 0, imgW, imgH, -imgW, -imgH, imgW, imgH)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            break;

          case 1:
            // 右横
            // ctx.rotate(-Math.PI / 2)
            // ctx.drawImage(img, 0, 0, imgW, imgH, 0, -imgH, imgW, imgH)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            break;

          case 6:
            // 正常 、、
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            break;

          default:
            break;
        }
      }

      var dataURL = canvas.toDataURL("image/".concat(ext));
      var imgDom = document.createElement('IMG');
      imgDom.src = dataURL;
      imgDom.setAttribute('isee-block', '');
      imgDom.style = "width:".concat(canvas.width, "px; height: ").concat(canvas.height, "px");
      document.body.appendChild(imgDom);
      return dataURL;
    }; // cb(getOrImage(1))
    // return


    if (!window.EXIF) {
      cb(getOrImage(1));
    } else {
      try {
        EXIF.getData(img, function () {
          var or = EXIF.getTag(this, 'Orientation') || 1;
          cb(getOrImage(or));
        });
      } catch (err) {
        cb(getOrImage(1));
      }
    }
  };

  return new Promise(function (resolve, reject) {
    var img = document.createElement('img');
    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = function () {
      if (ext !== 'jpeg' && ext !== 'webp') {
        // resolve(isBase64 ? dealBase64(url, this, ext, null, innerWidth) : getBase64Image(img, innerWidth))
        getBase64Image(img, function (res) {
          resolve(res);
        }); // resolve(getBase64Image(img))
      } else {
        // resolve(tilingCompress2(img, _quality, ext))
        // resolve(getBase64Image(img))
        getBase64Image(img, function (res) {
          resolve(res);
        });
      }

      window.sendMessage('images compress params', {
        img: img,
        _quality: _quality,
        ext: ext
      });
    };

    img.onerror = function (err) {
      reject(err);
    };

    img.src = url;
  });
}
function getBase64FromImgUrl(url, quality) {
  if (!url) return;

  var _quality = quality || 1;

  var ext = 'webp';
  var isBase64 = false;
  url = url.trim();

  if (/data:image([a-zA-Z0-9/;,:+=]+)/.test(url)) {
    isBase64 = true;
    ext = url.match(/^data:image\/(\w+);base64,/);
    ext = ext && ext[1] && ext[1].toLowerCase();

    if (ext !== 'gif' && ext !== 'png' && ext !== 'webp') {
      ext = 'jpeg';
    }

    if (!quality && url.length > 300) {
      _quality = +Math.sqrt(1 / url.length * 200).toFixed(2);
      _quality = _quality > 0.9 ? 1 : _quality === 0 ? 0.01 : _quality;
    }
  } else {
    ext = url.match(/^.+\.(\w+)([^/]*)$/);
    ext = ext && ext[1] && ext[1].toLowerCase();

    if (ext !== 'gif' && ext !== 'png' && ext !== 'webp') {
      ext = 'jpeg';
    }
  }

  var getBase64Image = function getBase64Image(img) {
    var canvas = document.createElement('canvas');
    var sWidth = getScreenWidth();
    canvas.width = Math.min(img.naturalWidth, sWidth);
    canvas.height = img.naturalHeight * (canvas.width / img.naturalWidth);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL("image/".concat(ext));
    return dataURL;
  };

  return new Promise(function (resolve, reject) {
    var img = document.createElement('img');
    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = function () {
      if (ext !== 'jpeg' && ext !== 'webp') {
        // resolve(isBase64 ? dealBase64(url, this, ext, null, innerWidth) : getBase64Image(img, innerWidth))
        resolve(getBase64Image(img));
      } else {
        // resolve(tilingCompress2(img, _quality, ext))
        resolve(getBase64Image(img));
      }

      window.sendMessage('images compress params', {
        img: img,
        _quality: _quality,
        ext: ext
      });
    };

    img.onerror = function (err) {
      reject(err);
    };

    img.src = url;
  });
} // 检测传入的url是否匹配特殊url规则

function isSpecialImgRegListMatched(url) {
  var specContentList = JSON.parse(window.localStorage.getItem('specContentList') || '[]');
  window.SpecialImgRegList = specContentList.map(function (item) {
    return new RegExp(item.xpath);
  });

  if (window.SpecialImgRegList && window.SpecialImgRegList.length > 0) {
    return window.SpecialImgRegList.some(function (item) {
      return item.test(url);
    });
  }

  return false;
}
function isTouchEvent(event) {
  return Boolean(event.changedTouches);
}
function arrayFromSet(s) {
  var ans = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = s.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var v = _step2.value;
      ans.push(v);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return ans;
}

function polyArrayFrom() {
  if (!Array.from) {
    Array.from = function () {
      var toStr = Object.prototype.toString;

      var isCallable = function isCallable(fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      }; // The length property of the from method is 1.


      return function from(arrayLike
      /*, mapFn, thisArg */
      ) {
        // 1. Let C be the this value.
        var C = this; // 2. Let items be ToObject(arrayLike).

        var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

        if (arrayLike == null) {
          throw new TypeError("Array.from requires an array-like object - not null or undefined");
        } // 4. If mapfn is undefined, then let mapping be false.


        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;

        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          }
        } // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).


        var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method 
        // of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).

        var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

        var k = 0; // 17. Repeat, while k < len… (also steps a - h)

        var kValue;

        while (k < len) {
          kValue = items[k];

          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }

          k += 1;
        } // 18. Let putStatus be Put(A, "length", len, true).


        A.length = len; // 20. Return A.

        return A;
      };
    }();
  }
}

function polyfill() {
  if ('NodeList' in window && !window.NodeList.prototype.forEach) {
    window.NodeList.prototype.forEach = function (callback) {
      for (var i = 0; i < this.length; i++) {
        callback.call(this[i], this[i], i);
      }
    };
  } // array from 兼容


  if (!Array.from) {
    // Array.from = function (iterable) {
    //   // IE(包括IE11)没有这个方法,用[].slice.call(new Uint8Array..代替
    //   return [].slice.call(new Uint8Array(iterable))
    // }
    polyArrayFrom();
  } // isNaN兼容


  if (!Number.isNaN) {
    Number.isNaN = function (num) {
      var iNum = parseInt(num);
      return this.isNaN(iNum);
    };
  } // find兼容


  if (!Array.prototype.find) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.find = function (predicate) {
      'use strict';

      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];

        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }

      return undefined;
    };
  }
}
function getMD5(sMessage, bit) {
  function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }

  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;

    if (lX4 | lY4) {
      if (lResult & 0x40000000) return lResult ^ 0xC0000000 ^ lX8 ^ lY8;else return lResult ^ 0x40000000 ^ lX8 ^ lY8;
    } else return lResult ^ lX8 ^ lY8;
  }

  function F(x, y, z) {
    return x & y | ~x & z;
  }

  function G(x, y, z) {
    return x & z | y & ~z;
  }

  function H(x, y, z) {
    return x ^ y ^ z;
  }

  function I(x, y, z) {
    return y ^ (x | ~z);
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function ConvertToWordArray(sMessage) {
    var lWordCount;
    var lMessageLength = sMessage.length;
    var lNumberOfWordsTemp1 = lMessageLength + 8;
    var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - lNumberOfWordsTemp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;

    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | sMessage.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }

    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  function WordToHex(lValue) {
    var WordToHexValue = '';
    var WordToHexValueTemp = '';
    var lByte;
    var lCount;

    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValueTemp = '0' + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
    }

    return WordToHexValue;
  }

  var x = [];
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7;
  var S12 = 12;
  var S13 = 17;
  var S14 = 22;
  var S21 = 5;
  var S22 = 9;
  var S23 = 14;
  var S24 = 20;
  var S31 = 4;
  var S32 = 11;
  var S33 = 16;
  var S34 = 23;
  var S41 = 6;
  var S42 = 10;
  var S43 = 15;
  var S44 = 21; // Steps 1 and 2. Append padding bits and length and convert to words

  x = ConvertToWordArray(sMessage); // Step 3. Initialise

  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476; // Step 4. Process the message in 16-word blocks

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  if (bit == 32) {
    return WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  } else {
    return WordToHex(b) + WordToHex(c);
  }
}
function canvasFingerprint() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var txt = 'I-love-isee';
  ctx.textBaseline = 'top';
  ctx.font = "16px 'Arial'";
  ctx.textBaseline = 'alphabetic';
  ctx.rotate(0.05);
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = 'rgba(102, 200, 0, 0.7)';
  ctx.fillText(txt, 4, 17);
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'blue';
  ctx.fillRect(-20, 10, 234, 5);
  var strng = canvas.toDataURL();
  var UA = navigator.userAgent || '';
  if (strng.length == 0 && UA.length == 0) return '';
  var hash = getMD5(strng + UA, 32);
  return hash;
}
function getFingerPrint() {
  return new Promise(function (resolve, reject) {
    try {
      if (window.requestIdleCallback) {
        window.requestIdleCallback(function () {
          fingerprint2_default.a.get(function (components) {
            var values = components.map(function (component) {
              return component.value;
            });
            var murmur = fingerprint2_default.a.x64hash128(values.join(''), 31);
            resolve(murmur);
          });
        });
      } else {
        setTimeout(function () {
          fingerprint2_default.a.get(function (components) {
            var values = components.map(function (component) {
              return component.value;
            });
            var murmur = fingerprint2_default.a.x64hash128(values.join(''), 31);
            resolve(murmur);
          });
        }, 500);
      }
    } catch (error) {
      console.error('【pingerprint】: fperror: ', error);
      var canvasPrint = canvasFingerprint() || '';
      resolve(canvasPrint);
    }
  });
}
function injectJS(src) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var queryStr = '';
  Object.keys(query).forEach(function (k) {
    if (!queryStr) {
      queryStr += '?';
    } else {
      queryStr += '&';
    }

    queryStr += "".concat(k, "=").concat(query[k]);
  });
  return new Promise(function (resolve, reject) {
    try {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');

      if (async) {
        script.setAttribute('async', true);
      }

      script.src = src + queryStr;

      script.onload = function (v) {
        window.sendMessage('inject', src);
        script.parentNode.removeChild(script);
        resolve(v);
      };

      script.onerror = function () {
        window.sendMessage('error', "\u7EC4\u4EF6".concat(src, "\u8F7D\u5165\u5931\u8D25"));
        reject(new Error("\u7EC4\u4EF6".concat(src, "\u8F7D\u5165\u5931\u8D25")));
      };

      document.getElementsByTagName('head')[0].appendChild(script);
    } catch (error) {
      window.sendMessage('error', "\u7EC4\u4EF6".concat(src, "\u8F7D\u5165\u5931\u8D25"));
      reject(new Error("\u7EC4\u4EF6".concat(src, "\u8F7D\u5165\u5931\u8D25")));
    }
  });
}
function getSearchParamsFromHref(name) {
  // eslint-disable-next-line no-useless-escape
  var transName = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  var regex = new RegExp('[\\?&]' + transName + '=([^&#]*)');
  var results = regex.exec(window.location.href);
  return results == null ? '' : decodeURIComponent(results[1]);
}
function getIframeParams(iframe, name) {
  if (iframe) {
    // eslint-disable-next-line no-useless-escape
    var transName = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regex = new RegExp('[\\?&]' + transName + '=([^&#]*)');
    var results = regex.exec(window.location.href);
    return results == null ? '' : results[1];
  }

  return null;
}
/**
 *
 * @param {*} Ctor
 */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
/**
 * 获取当前时间(毫秒)
 */


function getCurrentTimestamp() {
  if (!Date || !isNative(Date.now)) {
    return parseInt(window.performance.timing.navigationStart + window.performance.now());
  }

  return Date.now();
}
function getCurrentTimeHours() {
  var d = new Date(getCurrentTimestamp());
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hour = d.getHours();
  return "".concat(year).concat(month).concat(day).concat(hour);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(129);

// CONCATENATED MODULE: ./src/MutationObserverInject.min.js


var MutationObserverInject = function MutationObserverInject() {
  window.MutationObserver || (window.MutationObserver = function (y) {
    function z(a) {
      this.i = [];
      this.m = a;
    }

    function K(a) {
      (function c() {
        var d = a.takeRecords();
        d.length && a.m(d, a);
        a.h = setTimeout(c, z._period);
      })();
    }

    function r(a) {
      var b = {
        type: null,
        target: null,
        addedNodes: [],
        removedNodes: [],
        previousSibling: null,
        nextSibling: null,
        attributeName: null,
        attributeNamespace: null,
        oldValue: null
      },
          c;

      for (c in a) {
        b[c] !== y && a[c] !== y && (b[c] = a[c]);
      }

      return b;
    }

    function L(a, b) {
      var c = E(a, b);
      return function (d) {
        var f = d.length;
        b.a && 3 === a.nodeType && a.nodeValue !== c.a && d.push(new r({
          type: "characterData",
          target: a,
          oldValue: c.a
        }));
        b.b && c.b && C(d, a, c.b, b.f);
        if (b.c || b.g) var m = M(d, a, c, b);
        if (m || d.length !== f) c = E(a, b);
      };
    }

    function N(a, b) {
      return b.value;
    }

    function O(a, b) {
      return "style" !== b.name ? b.value : a.style.cssText;
    }

    function C(a, b, c, d) {
      for (var f = {}, m = b.attributes, k, g, p = m.length; p--;) {
        k = m[p], g = k.name, d && d[g] === y || (F(b, k) !== c[g] && a.push(r({
          type: "attributes",
          target: b,
          attributeName: g,
          oldValue: c[g],
          attributeNamespace: k.namespaceURI
        })), f[g] = !0);
      }

      for (g in c) {
        f[g] || a.push(r({
          target: b,
          type: "attributes",
          attributeName: g,
          oldValue: c[g]
        }));
      }
    }

    function M(a, b, c, d) {
      function f(g, p, t, q, x) {
        var A = g.length - 1;
        x = -~((A - x) / 2);

        for (var h, l, e; e = g.pop();) {
          h = t[e.j], l = q[e.l], d.c && x && Math.abs(e.j - e.l) >= A && (a.push(r({
            type: "childList",
            target: p,
            addedNodes: [h],
            removedNodes: [h],
            nextSibling: h.nextSibling,
            previousSibling: h.previousSibling
          })), x--), d.b && l.b && C(a, h, l.b, d.f), d.a && 3 === h.nodeType && h.nodeValue !== l.a && a.push(r({
            type: "characterData",
            target: h,
            oldValue: l.a
          })), d.g && m(h, l);
        }
      }

      function m(g, p) {
        for (var t = g.childNodes, q = p.c, x = t.length, A = q ? q.length : 0, h, l, e, n, v, B = 0, w = 0, u = 0; w < x || u < A;) {
          n = t[w], v = (e = q[u]) && e.node, n === v ? (d.b && e.b && C(a, n, e.b, d.f), d.a && e.a !== y && n.nodeValue !== e.a && a.push(r({
            type: "characterData",
            target: n,
            oldValue: e.a
          })), l && f(l, g, t, q, B), d.g && (n.childNodes.length || e.c && e.c.length) && m(n, e), w++, u++) : (k = !0, h || (h = {}, l = []), n && (h[e = G(n)] || (h[e] = !0, -1 === (e = H(q, n, u, "node")) ? d.c && (a.push(r({
            type: "childList",
            target: g,
            addedNodes: [n],
            nextSibling: n.nextSibling,
            previousSibling: n.previousSibling
          })), B++) : l.push({
            j: w,
            l: e
          })), w++), v && v !== t[w] && (h[e = G(v)] || (h[e] = !0, -1 === (e = H(t, v, w)) ? d.c && (a.push(r({
            type: "childList",
            target: p.node,
            removedNodes: [v],
            nextSibling: q[u + 1],
            previousSibling: q[u - 1]
          })), B--) : l.push({
            j: e,
            l: u
          })), u++));
        }

        l && f(l, g, t, q, B);
      }

      var k;
      m(b, c);
      return k;
    }

    function E(a, b) {
      var c = !0;
      return function m(f) {
        var k = {
          node: f
        };
        !b.a || 3 !== f.nodeType && 8 !== f.nodeType ? (b.b && c && 1 === f.nodeType && (k.b = I(f.attributes, function (g, p) {
          if (!b.f || b.f[p.name]) g[p.name] = F(f, p);
          return g;
        }, {})), c && (b.c || b.a || b.b && b.g) && (k.c = P(f.childNodes, m)), c = b.g) : k.a = f.nodeValue;
        return k;
      }(a);
    }

    function G(a) {
      try {
        return a.id || (a.mo_id = a.mo_id || J++);
      } catch (b) {
        try {
          return a.nodeValue;
        } catch (c) {
          return J++;
        }
      }
    }

    function P(a, b) {
      for (var c = [], d = 0; d < a.length; d++) {
        c[d] = b(a[d], d, a);
      }

      return c;
    }

    function I(a, b, c) {
      for (var d = 0; d < a.length; d++) {
        c = b(c, a[d], d, a);
      }

      return c;
    }

    function H(a, b, c, d) {
      for (; c < a.length; c++) {
        if ((d ? a[c][d] : a[c]) === b) return c;
      }

      return -1;
    }

    z._period = 30;
    z.prototype = {
      observe: function observe(a, b) {
        for (var c = {
          b: !!(b.attributes || b.attributeFilter || b.attributeOldValue),
          c: !!b.childList,
          g: !!b.subtree,
          a: !(!b.characterData && !b.characterDataOldValue)
        }, d = this.i, f = 0; f < d.length; f++) {
          d[f].s === a && d.splice(f, 1);
        }

        b.attributeFilter && (c.f = I(b.attributeFilter, function (m, k) {
          m[k] = !0;
          return m;
        }, {}));
        d.push({
          s: a,
          o: L(a, c)
        });
        this.h || K(this);
      },
      takeRecords: function takeRecords() {
        for (var a = [], b = this.i, c = 0; c < b.length; c++) {
          b[c].o(a);
        }

        return a;
      },
      disconnect: function disconnect() {
        this.i = [];
        clearTimeout(this.h);
        this.h = null;
      }
    };
    var D = document.createElement("i");
    D.style.top = 0;
    var F = (D = "null" != D.attributes.style.value) ? N : O,
        J = 1;
    return z;
  }(void 0));
};

/* harmony default export */ var MutationObserverInject_min = (MutationObserverInject);
// CONCATENATED MODULE: ./src/eye/index.js





 // import LogWorker from './log.worker'




var worker, socketStatus, webSocket;
var isLog = true;
var reconnect = 0;

function createSocket(uniqId) {
  // if (window.Worker && !/msie|trident|firefox/.test(navigator.userAgent.toLowerCase())) {
  //   worker = new LogWorker()
  //   if (worker) {
  //     worker.onmessage = data => {
  //       const message = JSON.parse(data.data)
  //       if (message.status === 'open') {
  //         socketStatus = message.status
  //         reconnect = 0
  //       } else if (message.status === 'close') {
  //         socketStatus = message.status
  //         isLog && connet(uniqId)
  //       } else if (data.status === 'error') {
  //         if (socketStatus === 'close' && isLog) {
  //           connet(uniqId)
  //         } else {
  //           console.log('worker error', message.event)
  //         }
  //       }
  //     }
  //   }
  // }
  connet(uniqId);
}

function connet(uniqId) {
  // 不需要log
  return;

  if (reconnect > MAX_RECONNECT) {}

  reconnect++;
  var sessionid = src_cookie.getCookie('juuid') || src_cookie.getCookie('JSESSIONID') || '';
  var socketUrl = "".concat(LOG_SOCKET, "?uniqId=").concat(uniqId, "&jsessionid=").concat(sessionid);

  if (window.Worker && worker && !/msie|trident|firefox/.test(navigator.userAgent.toLowerCase())) {
    var message = JSON.stringify({
      event: 'connect',
      data: socketUrl
    });
    worker.postMessage(message);
  } else {
    webSocket = new window.WebSocket(socketUrl);
    var events = ['open', 'close', 'message', 'error'];
    events.forEach(function (evtName) {
      webSocket.addEventListener(evtName, function (ev) {
        if (evtName === 'open') {
          socketStatus = evtName;
          reconnect = 0;
        } else if (evtName === 'close') {
          socketStatus = evtName;
          isLog && connet(uniqId);
        } else if (evtName === 'error') {
          if (socketStatus === 'close' && isLog) {
            connet(uniqId);
          } else {
            console.log('webSocket error', ev);
          }
        }
      });
    });
    sendMessage('error', "\u6B64\u7528\u6237(".concat(uniqId, ")\u6D4F\u89C8\u5668\u4E0D\u652F\u6301worker"));
  }
}

function disconnect() {
  return;
  sendMessage('enableLog', 'false');
  setTimeout(function () {
    if (worker) {
      worker.postMessage(JSON.stringify({
        event: 'close',
        data: null
      }));
      setTimeout(function () {
        worker.terminate();
      }, 500);
    } else {
      webSocket.close();
    }

    window.sendMessage = function () {
      return false;
    };
  }, 500);
} // function dateFtt (fmt, date) {
//   var o = {
//     'M+': date.getMonth() + 1, // 月份
//     'd+': date.getDate(), // 日
//     'h+': date.getHours(), // 小时
//     'm+': date.getMinutes(), // 分
//     's+': date.getSeconds(), // 秒
//     'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
//     S: date.getMilliseconds() // 毫秒
//   }
//   if (/(y+)/.test(fmt)) {
//     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
//   }
//   for (var k in o) {
//     if (new RegExp('(' + k + ')').test(fmt)) {
//       fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
//     }
//   }
//   return fmt
// }


function sendMessage(type, _value) {
  return;
  var value = typeof _value === 'string' ? _value : JSON.stringify(_value); // const nowDate = new Date()

  var nowDate = getCurrentTimestamp();
  var msg = {
    type: type,
    value: value,
    // time: `${dateFtt('yyyy-MM-dd hh:mm:ss:S', nowDate)}`
    time: nowDate
  };

  if (window.Worker && worker && !/msie|trident|firefox/.test(navigator.userAgent.toLowerCase())) {
    if (socketStatus !== 'open') {
      msg['socketOpen'] = false;
      var data = JSON.stringify(msg);
      setTimeout(function () {
        worker.postMessage(JSON.stringify({
          event: 'send',
          data: data
        }));
      }, 600);
    } else {
      var _data = JSON.stringify(msg);

      worker.postMessage(JSON.stringify({
        event: 'send',
        data: _data
      }));
    }
  } else {
    if (socketStatus !== 'open') {
      msg['socketOpen'] = false;

      var _data2 = JSON.stringify(msg);

      setTimeout(function () {
        if (webSocket.readyState !== 1) return;
        webSocket.send(_data2);
      }, 600);
    } else {
      var _data3 = JSON.stringify(msg);

      webSocket.send(_data3);
    }
  }
}

window.sendMessage = sendMessage;

function getMessage(api) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var deviceId = header.deviceId,
      ifStable = header.ifStable;
  return new Promise(function (resolve, reject) {
    if (!api) {
      resolve();
    }

    var xmlhttp = new window.XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // receiveTime = new Date().getTime()
        // duringTime = Math.round((receiveTime - sendTime) / 2)
        // const serverTime = new Date(xmlhttp.getResponseHeader('Date')).getTime()
        // if (window.iseeOffset === undefined && duringTime < 300) {
        //   window.iseeOffset = Math.round(serverTime + duringTime - receiveTime)
        // }
        // const headers = xmlhttp.getResponseHeader('Finger-Print-Inject')
        // console.log(xmlhttp.getAllResponseHeaders())
        var responseText = xmlhttp.responseText;
        var response = {};

        if (responseText) {
          response = JSON.parse(responseText);
        }

        resolve(response);
      }
    };

    xmlhttp.addEventListener('error', function (e) {
      console.error("\u63A5\u53E3\u9519\u8BEF: ".concat(e));
      reject(new Error("".concat(api, "\u63A5\u53E3\u9519\u8BEF: ").concat(e)));
    });
    xmlhttp.addEventListener('timeout', function () {
      console.error("\u63A5\u53E3\u54CD\u5E94\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      reject(new Error("".concat(api, "\u63A5\u53E3\u54CD\u5E94\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")));
    }); // xmlhttp.open('GET', api + `?t=${Date.now()}`, true)

    xmlhttp.open('GET', api + "?t=".concat(getCurrentTimestamp()), true);
    xmlhttp.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    if (deviceId) {
      xmlhttp.setRequestHeader('isee-deviceId', deviceId);
    }

    if (ifStable) {
      xmlhttp.setRequestHeader('isee-ifStable', ifStable);
    }

    xmlhttp.timeout = 10000;
    xmlhttp.send();
  });
}

window.iseeInit =
/*#__PURE__*/
asyncToGenerator_default()(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var uniqId, eyeScriptElement, iseeManualApp;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          MutationObserverInject_min();

          if (window.MutationObserver) {
            _context.next = 5;
            break;
          }

          console.error(new Error('当前浏览器不支持节点变化观察器'));
          window.sendMessage('error', '当前浏览器不支持节点变化观察器');
          return _context.abrupt("return");

        case 5:
          window.isLocalFile = window.location.href.indexOf('file:/') >= 0;
          uniqId = window.ISEE_DEVICE_ID || src_cookie.getCookie(ISEE_DEVICE_ID) || getCurrentTimestamp();
          createSocket(uniqId);
          window.iseeServerTime = getCurrentTimestamp();

          if (!window.performance) {
            window.performance = {};
          }

          if (!window.performance.now) {
            window.performance.now = function () {
              return getCurrentTimestamp();
            };

            window.iseePerformanceDuring = window.iseeServerTime;
          } else {
            window.iseePerformanceDuring = window.performance.now();
          }

          eyeScriptElement = window.document.getElementById('isee-app');

          if (eyeScriptElement) {
            window.iseeAppId = eyeScriptElement.getAttribute('isee_app_id');
            iseeManualApp = eyeScriptElement.getAttribute('isee_app_type');
            window.iseeManualApp = iseeManualApp === 'manual' || false;
          } // const sendTime = window.performance.now()
          // window.iseeServerTime = Date.now()
          // await getMessage(SERVER_TIME_API).then(response => {
          //   if (response && response.returnFlag) {
          //     console.log('[test]: response header: ', response)
          //     const receiveTime = window.performance.now()
          //     window.iseeServerTime = response.resultContent
          //     window.iseePerformanceDuring = window.performance.now() || 0
          //     // window.ip = response.resultContent.ip
          //     window.sendMessage('receive serverTime', `sendPerformance: ${sendTime}, receivePerformance: ${receiveTime}, serverTime: ${window.iseeServerTime}`)
          //   } else {
          //     console.error(`error: ${response.resultMsg}`)
          //     window.sendMessage('error', `response.resultMsg ${response.resultMsg}`)
          //   }
          // }).catch(e => {
          //   window.sendMessage('error', e)
          // })


          try {
            injectJS("".concat(BASE_URL, "/launch.js?t=").concat(getCurrentTimeHours()));
            disconnect();
          } catch (error) {
            console.error(new Error('组件launch.js载入失败'));
            window.sendMessage('error', '组件launch.js载入失败');
          } // getMessage(VERSION_API, { deviceId: uniqId, ifStable: IS_STABLE_VERSION }).then(response => {
          //   if (response && response.returnFlag) {
          //     const { versionNo, enableLog } = response.resultContent
          //     if (versionNo) {
          //       window.iseeVersion = versionNo
          //     }
          //     try {
          //       isLog = enableLog
          //       if (!enableLog) {
          //         disconnect()
          //       }
          //       let src = versionNo ? `${BASE_URL}/${versionNo}/launch.js` : `${BASE_URL}/launch.js`
          //       if (process.env.CK_ENV === 'development') {
          //         src = `${BASE_URL}/launch.js`
          //       }
          //       injectJS(src)
          //     } catch (error) {
          //       console.error(new Error('组件launch.js载入失败'))
          //       window.sendMessage('error', '组件launch.js载入失败')
          //     }
          //   } else {
          //     injectJS(`${BASE_URL}/launch.js`)
          //     console.error(`error: ${response.resultMsg}`)
          //     window.sendMessage('error', `response.resultMsg ${response.resultMsg}`)
          //   }
          // }).catch(e => {
          //   injectJS(`${BASE_URL}/launch.js`)
          //   window.sendMessage('error', e)
          // })


        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
window.iseeInit();
injectOtherScripts(); // eslint-disable-next-line no-unexpected-multiline

function injectOtherScripts() {// injectJS('https://cdn.jsdelivr.net/npm/exif-js', {}, true) // 用于上传图片时，获取图片的Orientation属性
}

window.addEventListener('message', function (e) {
  var data = e.data,
      source = e.source,
      origin = e.origin;
  var type = data.type,
      value = data.value;
  if (source === window) return;

  switch (type) {
    case 'parent-eye':
      if (source) {
        source.postMessage({
          type: 'parent-eye-o',
          value: BASE_URL
        }, origin);
      }

      break;

    default:
      break;
  }
});

/***/ })
/******/ ])["default"];