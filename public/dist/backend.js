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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(1);

var _router2 = _interopRequireDefault(_router);

var _myMenus = __webpack_require__(110);

var _myMenus2 = _interopRequireDefault(_myMenus);

var _myAccount = __webpack_require__(111);

var _myAccount2 = _interopRequireDefault(_myAccount);

var _message = __webpack_require__(112);

var _message2 = _interopRequireDefault(_message);

var _api = __webpack_require__(113);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new Vue({
    router: _router2.default,
    components: {
        MyMenus: _myMenus2.default,
        MyAccount: _myAccount2.default
    }
}).$mount('.body');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _create = __webpack_require__(81);

var _create2 = _interopRequireDefault(_create);

var _edit = __webpack_require__(82);

var _edit2 = _interopRequireDefault(_edit);

var _assign_role = __webpack_require__(83);

var _assign_role2 = _interopRequireDefault(_assign_role);

var _index3 = __webpack_require__(84);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(85);

var _index6 = _interopRequireDefault(_index5);

var _create3 = __webpack_require__(86);

var _create4 = _interopRequireDefault(_create3);

var _edit3 = __webpack_require__(87);

var _edit4 = _interopRequireDefault(_edit3);

var _index7 = __webpack_require__(88);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(89);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(90);

var _index12 = _interopRequireDefault(_index11);

var _create5 = __webpack_require__(91);

var _create6 = _interopRequireDefault(_create5);

var _edit5 = __webpack_require__(92);

var _edit6 = _interopRequireDefault(_edit5);

var _index13 = __webpack_require__(93);

var _index14 = _interopRequireDefault(_index13);

var _create7 = __webpack_require__(94);

var _create8 = _interopRequireDefault(_create7);

var _edit7 = __webpack_require__(95);

var _edit8 = _interopRequireDefault(_edit7);

var _index15 = __webpack_require__(96);

var _index16 = _interopRequireDefault(_index15);

var _create9 = __webpack_require__(97);

var _create10 = _interopRequireDefault(_create9);

var _edit9 = __webpack_require__(98);

var _edit10 = _interopRequireDefault(_edit9);

var _index17 = __webpack_require__(99);

var _index18 = _interopRequireDefault(_index17);

var _create11 = __webpack_require__(100);

var _create12 = _interopRequireDefault(_create11);

var _edit11 = __webpack_require__(101);

var _edit12 = _interopRequireDefault(_edit11);

var _assign_menu = __webpack_require__(102);

var _assign_menu2 = _interopRequireDefault(_assign_menu);

var _assign_resource = __webpack_require__(103);

var _assign_resource2 = _interopRequireDefault(_assign_resource);

var _index19 = __webpack_require__(104);

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__(105);

var _index22 = _interopRequireDefault(_index21);

var _create13 = __webpack_require__(106);

var _create14 = _interopRequireDefault(_create13);

var _edit13 = __webpack_require__(107);

var _edit14 = _interopRequireDefault(_edit13);

var _index23 = __webpack_require__(108);

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__(109);

var _index26 = _interopRequireDefault(_index25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import pageIndex from './component/page/index.js'
//import pageCreate from './component/page/create.js'
//import pageEdit from './component/page/edit.js'

//import githubCreate from './component/github/create.js'
//import githubEdit from './component/github/edit.js'

var routes = [{
    "path": "/login",
    "component": _index26.default,
    "meta": {
        "title": "登录"
    }
}, {
    "path": "/",
    "meta": {
        "title": "后台首页"
    }
}, {
    "path": "/account",
    "component": _index2.default,
    "meta": {
        "title": "用户列表"
    }
}, {
    "path": "/account/create",
    "component": _create2.default,
    "meta": {
        "title": "创建用户"
    }
}, {
    "path": "/account/edit",
    "component": _edit2.default,
    "meta": {
        "title": "修改用户"
    }
}, {
    "path": "/account/assign_role",
    "component": _assign_role2.default,
    "meta": {
        "title": "分配角色"
    }
}, {
    "path": "/article",
    "component": _index4.default,
    "meta": {
        "title": "文章列表"
    }
}, {
    "path": "/banner",
    "component": _index6.default,
    "meta": {
        "title": "广告位列表"
    }
}, {
    "path": "/banner/create",
    "component": _create4.default,
    "meta": {
        "title": "创建广告位"
    }
}, {
    "path": "/banner/edit",
    "component": _edit4.default,
    "meta": {
        "title": "修改广告位"
    }
}, {
    "path": "/comment",
    "component": _index8.default,
    "meta": {
        "title": "评论列表"
    }
}, {
    "path": "/github",
    "component": _index10.default,
    "meta": {
        "title": "Github"
    }
}, {
    "path": "/mail",
    "component": _index12.default,
    "meta": {
        "title": "邮件模板列表"
    }
}, {
    "path": "/mail/create",
    "component": _create6.default,
    "meta": {
        "title": "创建邮件模板"
    }
}, {
    "path": "/mail/edit",
    "component": _edit6.default,
    "meta": {
        "title": "修改邮件模板"
    }
}, {
    "path": "/menu",
    "component": _index14.default,
    "meta": {
        "title": "菜单列表"
    }
}, {
    "path": "/menu/create",
    "component": _create8.default,
    "meta": {
        "title": "创建菜单"
    }
}, {
    "path": "/menu/edit",
    "component": _edit8.default,
    "meta": {
        "title": "修改菜单"
    }
}, {
    "path": "/resource",
    "component": _index16.default,
    "meta": {
        "title": "资源列表"
    }
}, {
    "path": "/resource/create",
    "component": _create10.default,
    "meta": {
        "title": "创建资源"
    }
}, {
    "path": "/resource/edit",
    "component": _edit10.default,
    "meta": {
        "title": "修改资源"
    }
}, {
    "path": "/role",
    "component": _index18.default,
    "meta": {
        "title": "角色列表"
    }
}, {
    "path": "/role/create",
    "component": _create12.default,
    "meta": {
        "title": "创建角色"
    }
}, {
    "path": "/role/edit",
    "component": _edit12.default,
    "meta": {
        "title": "修改角色"
    }
}, {
    "path": "/role/assign_menu",
    "component": _assign_menu2.default,
    "meta": {
        "title": "分配菜单"
    }
},, {
    "path": "/role/assign_resource",
    "component": _assign_resource2.default,
    "meta": {
        "title": "分配资源"
    }
}, {
    "path": "/social",
    "component": _index20.default,
    "meta": {
        "title": ""
    }
}, {
    "path": "/tag",
    "component": _index22.default,
    "meta": {
        "title": "标签列表"
    }
}, {
    "path": "/tag/create",
    "component": _create14.default,
    "meta": {
        "title": "创建标签"
    }
}, {
    "path": "/tag/edit",
    "component": _edit14.default,
    "meta": {
        "title": "修改标签"
    }
}, {
    "path": "/topic",
    "component": _index24.default,
    "meta": {
        "title": "主题列表"
    }
}];
//import topicCreate from './component/topic/create.js'
//import topicEdit from './component/topic/edit.js'

//import socialCreate from './component/social/create.js'
//import socialEdit from './component/social/edit.js'

// import commentCreate from './component/comment/create.js'
// import commentEdit from './component/comment/edit.js'

// import contentIndex from './component/content/index.js'
//import contentCreate from './component/content/create.js'
//import contentEdit from './component/content/edit.js'

//import articleCreate from './component/article/create.js'
//import articleEdit from './component/article/edit.js'

var router = new VueRouter({
    mode: 'history',
    base: '/portal',
    routes: routes,
    linkActiveClass: 'active'
});

router.beforeEach(function (to, from, next) {
    document.title = to.meta.title || document.title;
    next();
});
exports.default = router;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
				template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u8D26\u53F7\u5217\u8868\n\t\t<router-link to="/account/create" class="btn">\u6DFB\u52A0\u65B0\u8D26\u53F7</router-link>\n\t</header>\n\t<div class="widget">\n\t\t<ul class="list">\n\t\t\t<li class="line">\n\t\t\t\t<div class="col col-2">\u7528\u6237\u540D</div>\n\t\t\t\t<div class="col col-2">\u90AE\u7BB1</div>\n\t\t\t\t<div class="col col-2">\u72B6\u6001</div>\n\t\t\t\t<div class="col col-4">\u64CD\u4F5C</div>\n\t\t\t</li>\n\t\t\t<li v-for="account in accounts.rows">\n\t\t\t\t<div class="col col-2">\n\t\t\t\t\t<router-link :to="\'/account/edit?id=\' + account.id">{{account.name}}</router-link>\n\t\t\t\t</div>\n\t\t\t\t<div class="col col-2">\n\t\t\t\t\t<router-link :to="\'/account/edit?id=\' + account.id">{{account.email}}</router-link>\n\t\t\t\t</div>\n\t\t\t\t<div class="col col-2">\n\t\t\t\t\t{{account.active?\'\u6B63\u5E38\':\'\u5DF2\u7981\u7528\'}}\n\t\t\t\t</div>\n\t\t\t\t<div class="col col-4 operation">\n\t\t\t\t\t<a v-if="account.active" @click="setActive(account, false)">\u7981\u7528</a>\n\t\t\t\t\t<a v-if="!account.active" @click="setActive(account, true)">\u542F\u7528</a>\n\t\t\t\t\t<router-link :to="\'/account/assign_role?id=\' + account.id">\u5206\u914D\u89D2\u8272</router-link>\n\t\t\t\t\t<router-link :to="\'/account/edit?id=\' + account.id">\u7F16\u8F91</router-link>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<pagination :change="handlePageChange" :data="accounts"></pagination>\n\t</div>\n</div>',
				data: function data() {
								return {
												accounts: {
																rows: [],
																count: 5
												},
												page: this.$route.query.page | 0
								};
				},
				components: {
								Pagination: _pagination2.default
				},
				mounted: function mounted() {
								this.load();
				},

				methods: {
								handlePageChange: function handlePageChange(page) {
												this.page = page;
												this.load();
								},
								load: function () {
												var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
																return _regenerator2.default.wrap(function _callee$(_context) {
																				while (1) {
																								switch (_context.prev = _context.next) {
																												case 0:
																																_context.next = 2;
																																return this.$api.account.list(this.page, {});

																												case 2:
																																this.accounts = _context.sent;

																												case 3:
																												case 'end':
																																return _context.stop();
																								}
																				}
																}, _callee, this);
												}));

												function load() {
																return _ref.apply(this, arguments);
												}

												return load;
								}(),
								setActive: function () {
												var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(account, active) {
																return _regenerator2.default.wrap(function _callee2$(_context2) {
																				while (1) {
																								switch (_context2.prev = _context2.next) {
																												case 0:
																																_context2.next = 2;
																																return this.$api.account.update(account.id, {
																																				active: active
																																});

																												case 2:
																																this.load();

																												case 3:
																												case 'end':
																																return _context2.stop();
																								}
																				}
																}, _callee2, this);
												}));

												function setActive(_x, _x2) {
																return _ref2.apply(this, arguments);
												}

												return setActive;
								}()
				}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(5);

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
/* 5 */
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
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
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
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
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
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(54);
__webpack_require__(58);
__webpack_require__(76);
__webpack_require__(77);
module.exports = __webpack_require__(18).Promise;


/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(11)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(14)(String, 'String', function (iterated) {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var defined = __webpack_require__(13);
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
/* 12 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(32);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(33);
var $iterCreate = __webpack_require__(34);
var setToStringTag = __webpack_require__(50);
var getPrototypeOf = __webpack_require__(52);
var ITERATOR = __webpack_require__(51)('iterator');
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
/* 15 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(18);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(21);
var has = __webpack_require__(31);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
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
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(22);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(26) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(25);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(26) && !__webpack_require__(27)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(27)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(24);
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(30);
var setToStringTag = __webpack_require__(50);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(51)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(23);
var dPs = __webpack_require__(36);
var enumBugKeys = __webpack_require__(48);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(49).appendChild(iframe);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(22);
var anObject = __webpack_require__(23);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(26) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(38);
var enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(31);
var toIObject = __webpack_require__(39);
var arrayIndexOf = __webpack_require__(42)(false);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(40);
var defined = __webpack_require__(13);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(41);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(39);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(44);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(12);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(46)('keys');
var uid = __webpack_require__(47);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(18);
var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(15) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(17).document;
module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(22).f;
var has = __webpack_require__(31);
var TAG = __webpack_require__(51)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(46)('wks');
var uid = __webpack_require__(47);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(31);
var toObject = __webpack_require__(53);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
var global = __webpack_require__(17);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(33);
var TO_STRING_TAG = __webpack_require__(51)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(56);
var step = __webpack_require__(57);
var Iterators = __webpack_require__(33);
var toIObject = __webpack_require__(39);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(14)(Array, 'Array', function (iterated, kind) {
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
/* 56 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var global = __webpack_require__(17);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(59);
var $export = __webpack_require__(16);
var isObject = __webpack_require__(24);
var aFunction = __webpack_require__(20);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(61);
var speciesConstructor = __webpack_require__(65);
var task = __webpack_require__(66).set;
var microtask = __webpack_require__(68)();
var newPromiseCapabilityModule = __webpack_require__(69);
var perform = __webpack_require__(70);
var userAgent = __webpack_require__(71);
var promiseResolve = __webpack_require__(72);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(51)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(73)($Promise.prototype, {
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
__webpack_require__(50)($Promise, PROMISE);
__webpack_require__(74)(PROMISE);
Wrapper = __webpack_require__(18)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(75)(function (iter) {
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(41);
var TAG = __webpack_require__(51)('toStringTag');
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
/* 60 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(62);
var isArrayIter = __webpack_require__(63);
var anObject = __webpack_require__(23);
var toLength = __webpack_require__(43);
var getIterFn = __webpack_require__(64);
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(23);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(33);
var ITERATOR = __webpack_require__(51)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(51)('iterator');
var Iterators = __webpack_require__(33);
module.exports = __webpack_require__(18).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(23);
var aFunction = __webpack_require__(20);
var SPECIES = __webpack_require__(51)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(67);
var html = __webpack_require__(49);
var cel = __webpack_require__(28);
var global = __webpack_require__(17);
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
  if (__webpack_require__(41)(process) == 'process') {
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
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var macrotask = __webpack_require__(66).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(41)(process) == 'process';

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(20);

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
/* 70 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var isObject = __webpack_require__(24);
var newPromiseCapability = __webpack_require__(69);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(21);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(17);
var core = __webpack_require__(18);
var dP = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(26);
var SPECIES = __webpack_require__(51)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(51)('iterator');
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(16);
var core = __webpack_require__(18);
var global = __webpack_require__(17);
var speciesConstructor = __webpack_require__(65);
var promiseResolve = __webpack_require__(72);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(16);
var newPromiseCapability = __webpack_require__(69);
var perform = __webpack_require__(70);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(79);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: "<ul class=\"pagination\">\n    <li>\n        <a @click=\"go(1)\">\n            \u9996\u9875\n        </a>\n    </li>\n    <li v-for=\"pageNum in pages\" :class=\"{active: pageNum == page}\">\n        <a @click=\"go(pageNum)\">{{pageNum}}</a>\n    </li>\n    <li>\n        <a @click=\"go(pageTotal)\">\n            \u5C3E\u9875\n        </a>\n    </li>\n</ul>\n",
    props: {
        data: {
            type: Object,
            required: true
        },
        change: {
            type: Function
        }
    },
    data: function data() {
        return {
            pageSize: 10,
            path: undefined,
            page: 1
        };
    },
    computed: {
        pageTotal: function pageTotal() {
            return Math.ceil(this.data.count / this.pageSize);
        },
        pages: function pages() {
            var currentPage = this.page | 0;
            var pageTotal = this.pageTotal;
            var pages = [];
            for (var i = -5; i < 5; i++) {
                var page = currentPage + i;
                if (page > 0 && page <= pageTotal) {
                    pages.push(page);
                }
            }
            return pages;
        }
    },
    created: function created() {
        this.page = this.$route.query.page || 1;
    },

    methods: {
        go: function go(page) {
            if (this.page == page) {
                return;
            }
            var query = JSON.parse((0, _stringify2.default)(this.$route.query));
            query.page = page;
            this.page = page;
            this.$router.push({
                path: this.path || this.$route.path,
                query: query
            });
            if (this.change) {
                this.change(page);
            }
        }
    }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(18);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u521B\u5EFA\u8D26\u53F7\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u7528\u6237\u540D</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="email" class="control-label">\u90AE\u7BB1</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.email" type="text" class="form-control" name="email">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="password" class="control-label">\u5BC6\u7801</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.password" type="password" class="form-control" name="password">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn">\u521B\u5EFA</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			account: {
				name: '',
				email: '',
				password: ''
			}
		};
	},
	methods: {
		add: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var account;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.account.create(this.account);

							case 2:
								account = _context.sent;

								this.$message.info('创建账号成功', 10000);
								this.$router.go(-1);

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add() {
				return _ref.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u4FEE\u6539\u8D26\u53F7\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="update">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u7528\u6237\u540D</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="email" class="control-label">\u90AE\u7BB1</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.email" type="text" class="form-control" name="email">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--<div class="form-group">\n\t\t\t\t<label for="password" class="control-label">\u5BC6\u7801</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.password" type="password" class="form-control" name="password">\n\t\t\t\t</div>\n\t\t\t</div>-->\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn">\u63D0\u4EA4</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			account: {},
			id: this.$route.query.id
		};
	},
	mounted: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.$api.account.getById(this.id);

						case 2:
							this.account = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function mounted() {
			return _ref.apply(this, arguments);
		}

		return mounted;
	}(),

	methods: {
		update: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.$api.account.update(this.account.id, {
									name: this.account.name,
									email: this.account.email
								});

							case 2:
								this.$message.info('修改账号成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function update() {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<section class="panel">\n    <header class="title">\n        \u5206\u914D\u89D2\u8272\n    </header>\n    <div class="widget">\n        <form class="form" novalidate v-on:submit.prevent="setRoles">\n            <div class="form-group">\n                <label class="control-label">\u7528\u6237</label>\n                <label class="control-label">{{account.name}}</label>\n            </div>\n            <div class="form-group">\n                <ul>\n                    <li v-for="role in roles">\n                        <input v-model="selectedRoleId" :id="\'role-\'+role.id" type="checkbox" :value="role.id"/>\n                        <label :for="\'role-\'+role.id">{{role.name}}</label>\n                    </li>\n                </ul>\n            </div>\n            <div class="form-group">\n                <button class="btn" type="submit">\u63D0\u4EA4</button>\n            </div>\n        </form>\n    </div>\n</section>',
    data: function data() {
        return {
            roles: [],
            account: {},
            selectedRoleId: []
        };
    },
    mounted: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var id, loadAccount, loadRole, loadAccountRole, roles, accounts_roles, accountRoleMap, selectedRoleId;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            id = this.$route.query.id;
                            loadAccount = this.$api.account.findOne({
                                id: id
                            });
                            loadRole = this.$api.role.all({});
                            loadAccountRole = this.$api.accounts_roles.all({
                                account_id: id
                            });
                            _context.next = 6;
                            return loadRole;

                        case 6:
                            roles = _context.sent;
                            _context.next = 9;
                            return loadAccountRole;

                        case 9:
                            accounts_roles = _context.sent;
                            accountRoleMap = {};
                            selectedRoleId = [];

                            accounts_roles.forEach(function (account_role) {
                                accountRoleMap[account_role.role_id] = account_role;
                                selectedRoleId.push(account_role.role_id);
                            });
                            this.selectedRoleId = selectedRoleId;

                            roles.forEach(function (role) {
                                role.accountRole = accountRoleMap[role.id];
                            });
                            this.roles = roles;
                            _context.next = 18;
                            return loadAccount;

                        case 18:
                            this.account = _context.sent;

                        case 19:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function mounted() {
            return _ref.apply(this, arguments);
        }

        return mounted;
    }(),

    methods: {
        setRoles: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (this.account.id) {
                                    _context2.next = 2;
                                    break;
                                }

                                return _context2.abrupt('return');

                            case 2:
                                _context2.next = 4;
                                return this.$api.account.setRoles(this.account.id, this.selectedRoleId);

                            case 4:
                                this.$message.info('分配角色成功', 10000);
                                this.$router.go(-1);

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function setRoles() {
                return _ref2.apply(this, arguments);
            }

            return setRoles;
        }()
    }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n    <header class="title">\n        \u6587\u7AE0\u5217\u8868\n    </header>\n    <div class="widget">\n        <ul class="list">\n            <li>\n                <div class="col col-7">\u6807\u9898</div>\n                <div class="col col-3">\u64CD\u4F5C</div>\n            </li>\n            <li v-for="article in articles.rows">\n                <div class="col col-7">{{article.title}}</div>\n                <div class="col col-3 operation">\n                    <!--<router-link :to="\'/article/edit?id=\' + article.id">\u67E5\u770B</router-link>\n                    <router-link :to="\'/article/delete?id=\' + article.id">\u5220\u9664</router-link>-->\n                </div>\n            </li>\n        </ul>\n        <pagination :change="handlePageChange" :data="articles"></pagination>\n    </div>\n</div>',
    data: function data() {
        return {
            articles: {
                rows: [],
                count: 5
            },
            page: this.$route.query.page | 0
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },

    methods: {
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$api.article.list(this.page, {});

                            case 2:
                                this.articles = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }(),
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.load();
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n\t<header class="title">\n\t\tBanner\u5217\u8868\n\t\t<router-link class="btn" :to="\'/banner/create\'">\u6DFB\u52A0\u65B0Banner</router-link>\n\t</header>\n\t<div class="widget">\n\t\t<ul class="list">\n\t\t\t<li>\n\t\t\t\t<div class="col col-2">ID</div>\n\t\t\t\t<div class="col col-5">\u540D\u79F0</div>\n\t\t\t\t<div class="col col-3">\u64CD\u4F5C</div>\n\t\t\t</li>\n\t\t\t<li v-for="banner in banners.rows">\n\t\t\t\t<div class="col col-2">{{banner.id}}</div>\n\t\t\t\t<div class="col col-5">{{banner.name}}</div>\n\t\t\t\t<div class="col col-3 operation">\n\t\t\t\t\t<router-link :to="\'/banner/edit?id=\' + banner.id">\u67E5\u770B</router-link>\n\t\t\t\t\t<a @click="remove(banner)">\u5220\u9664</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<pagination :change="handlePageChange" :data="banners"></pagination>\n\t</div>\n</div>',
    data: function data() {
        return {
            banners: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },

    methods: {
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.load();
        },
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$api.banner.list(this.page, {});

                            case 2:
                                this.banners = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }(),
        remove: function remove(banner) {}
    }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u521B\u5EFABanner\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="banner.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="text" class="control-label">\u5185\u5BB9</label>\n\t\t\t\t<div class="control-item control-textarea">\n\t\t\t\t\t<textarea v-model="banner.text" class="form-control" name="text"></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="banner.title" type="text" class="form-control" name="title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="hash" class="control-label">\u6807\u8BC6</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="banner.hash" type="text" class="form-control" name="hash">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u521B\u5EFA</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			banner: {
				name: '',
				text: '',
				title: '',
				hash: ''
			}
		};
	},
	methods: {
		add: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var banner;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.banner.create(this.banner);

							case 2:
								banner = _context.sent;

								this.$message.info('创建Banner成功', 10000);
								this.$router.go(-1);

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add() {
				return _ref.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u4FEE\u6539Banner\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="update">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="banner.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="text" class="control-label">\u5185\u5BB9</label>\n\t\t\t\t<div class="control-item control-textarea">\n\t\t\t\t\t<textarea v-model="banner.text" class="form-control" name="text"></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="banner.title" type="text" class="form-control" name="title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="hash" class="control-label">\u6807\u8BC6</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="banner.hash" type="text" class="form-control" name="hash">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u63D0\u4EA4</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			banner: {},
			id: this.$route.query.id
		};
	},
	mounted: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.$api.banner.getById(this.id);

						case 2:
							this.banner = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function mounted() {
			return _ref.apply(this, arguments);
		}

		return mounted;
	}(),

	methods: {
		update: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.$api.banner.update(this.banner.id, this.banner);

							case 2:
								this.$message.info('编辑Banner成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function update() {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u8BC4\u8BBA\u5217\u8868\n\t</header>\n\t<div class="widget">\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<label>\n\t\t\t\t<input type="checkbox" class="select_all" target="item"> \u5168\u9009</label>\n\t\t\t\t<button class="btn approve">\n\t\t\t\t\t\u901A\u8FC7\u5BA1\u6838\n\t\t\t\t</button>\n\t\t\t\t<button class="btn reject">\n\t\t\t\t\t\u8BBE\u4E3A\u4E0D\u901A\u8FC7\n\t\t\t\t</button>\n\t\t\t\t<button class="btn delete">\n\t\t\t\t\t\u5220\u9664\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li class="comment" v-for="comment in comments.rows">\n\t\t\t\t<p>\n\t\t\t\t\t<label class="msg">\n\t\t\t\t\t\t<input type="checkbox" name="item" class="comment_checkbox">\n\t\t\t\t\t\tID: {{comment.id}}\n\t\t\t\t\t</label>\n\t\t\t\t\t<span @class="{active: comment.status}" class="label">\n\t\t\t\t\t\t\u5DF2\u901A\u8FC7\u5BA1\u6838\n\t\t\t\t\t</span>\n\t\t\t\t\t<span @class="{none: comment.status > 0}" class="label">\n\t\t\t\t\t\t\u672A\u901A\u8FC7\u5BA1\u6838\n\t\t\t\t\t</span>\n\t\t\t\t\t<button @class="{none: comment.status <= 0}" class="btn reject">\n\t\t\t\t\t\t\u8BBE\u4E3A\u4E0D\u901A\u8FC7\n\t\t\t\t\t</button>\n\t\t\t\t\t<button @class="{none: comment.status > 0}" class="btn approve <%=(comment.status<=0?\'\':\'none\')%>">\n\t\t\t\t\t\t\u901A\u8FC7\u5BA1\u6838\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class="btn delete">\n\t\t\t\t\t\t\u5220\u9664\n\t\t\t\t\t</button>\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t</ul>\n\t\t<pagination :change="handlePageChange" :data="comments"></pagination>\n\t</div>\n</div>',
	data: function data() {
		return {
			comments: {
				rows: [],
				count: 0
			},
			page: this.$route.query.id | 0
		};
	},
	components: {
		Pagination: _pagination2.default
	},
	mounted: function mounted() {
		this.load();
	},

	methods: {
		handlePageChange: function handlePageChange(page) {
			this.page = page;
			this.load();
		},
		load: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.comment.list(this.page, {});

							case 2:
								this.comments = _context.sent;

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function load() {
				return _ref.apply(this, arguments);
			}

			return load;
		}()
	}
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n    <header class="title">\n        \u90AE\u4EF6\u6A21\u677F\u5217\u8868\n        <router-link class="btn" to="/mail/create">\u6DFB\u52A0\u65B0\u6A21\u7248</router-link>\n    </header>\n    <div class="widget">\n        <ul class="list">\n            <li>\n                <div class="col col-4">\u6807\u8BC6\u7801</div>\n                <div class="col col-4">\u6807\u9898</div>\n                <div class="col col-2">\u64CD\u4F5C</div>\n            </li>\n            <li v-for="mail in mails.rows">\n                <div class="col col-4">{{mail.code}}</div>\n                <div class="col col-4">{{mail.title}}</div>\n                <div class="col col-2 operation">\n                    <router-link to="\'/mail/edit?id=\' + mail.id">\u7F16\u8F91</router-link>\n                    <router-link to="\'/mail/delete?id=\' + mail.id">\u5220\u9664</router-link>\n                </div>\n            </li>\n        </ul>\n        <pagination :change="handlePageChange" :data="mails"></pagination>\n    </div>\n</div>',
    data: function data() {
        return {
            mails: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page | 0
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },

    methods: {
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.load();
        },
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$api.mail.list(this.page, {});

                            case 2:
                                this.mails = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }()
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u521B\u5EFA\u90AE\u4EF6\u6A21\u677F\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="code" class="control-label">\u6807\u8BC6\u7801</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input type="text" class="form-control" name="code" v-model="mail.code">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input type="text" class="form-control" name="title" v-model="mail.title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title_en" class="control-label">\u5185\u5BB9</label>\n\t\t\t\t<div class="control-item control-textarea">\n\t\t\t\t\t<textarea name="content" class="form-control" cols="30" rows="10" v-model="mail.content"></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u63D0\u4EA4</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			mail: {}
		};
	},
	methods: {
		add: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.mail.create(this.mail);

							case 2:
								this.$message.info('创建邮件模板成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add() {
				return _ref.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u7F16\u8F91\u90AE\u4EF6\u6A21\u677F\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="update">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="code" class="control-label">\u6807\u8BC6\u7801</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input type="text" class="form-control" name="code" v-model="mail.code">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input type="text" class="form-control" name="title" v-model="mail.title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title_en" class="control-label">\u5185\u5BB9</label>\n\t\t\t\t<div class="control-item control-textarea">\n\t\t\t\t\t<textarea name="content" class="form-control" cols="30" rows="10" v-model="mail.content"></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u63D0\u4EA4</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			mail: {},
			id: this.$route.query.id
		};
	},
	mounted: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.$api.mail.getById(this.id);

						case 2:
							this.mail = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function mounted() {
			return _ref.apply(this, arguments);
		}

		return mounted;
	}(),

	methods: {
		update: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.$api.mail.update(this.mail.id, this.mail);

							case 2:
								this.$message.info('编辑邮件模板成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function update() {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u83DC\u5355\u5217\u8868\n\t\t<!--<a class="btn" :href="\'/portal/menu/create?parent_id=\' + (parent && parent.id || \'\')">\u6DFB\u52A0\u65B0\u83DC\u5355</a>-->\n\t\t<router-link class="btn" :to="\'/menu/create?parent_id=\' + (parent && parent.id || \'\')">\u6DFB\u52A0\u65B0\u83DC\u5355</router-link>\n\t</header>\n\t<div class="widget">\n\t\t<ul class="list">\n\t\t\t<li v-if="parent">\n\t\t\t\t<b>{{parent.name}}</b>\u7684\u4E0B\u7EA7\u83DC\u5355\n\t\t\t\t<router-link class="btn" :to="\'/menu?parent_id=\' + (parent && parent.parent_id || \'\')">\u8FD4\u56DE\u4E0A\u7EA7</router-link>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<div class="col col-4">\u540D\u79F0</div>\n\t\t\t\t<div class="col col-4">\u6807\u9898</div>\n\t\t\t\t<div class="col col-2">\u64CD\u4F5C</div>\n\t\t\t</li>\n\t\t\t<li v-for="menu in menus.rows">\n\t\t\t\t<div class="col col-4">{{menu.name}}</div>\n\t\t\t\t<div class="col col-4">{{menu.title}}</div>\n\t\t\t\t<div class="col col-2 operation">\n\t\t\t\t\t<router-link class="btn" :to="\'/menu?parent_id=\' + menu.id">\u4E0B\u7EA7\u83DC\u5355</router-link>\n\t\t\t\t\t<router-link class="btn" :to="\'/menu/edit?id=\' + menu.id">\u7F16\u8F91</router-link>\n\t\t\t\t\t<router-link class="btn" :to="\'/menu/delete?id=\' + menu.id">\u5220\u9664</router-link>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<pagination :change="handlePageChange" :data="menus"></pagination>\n\t</div>\n</div>',
    data: function data() {
        return {
            parent: null,
            menus: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page | 0,
            parent_id: this.$route.query.parent_id || 0
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },


    watch: {
        $route: function $route(to, from) {
            this.parent_id = to.query.parent_id;
            this.page = to.query.page;
            this.load();
        }
    },
    methods: {
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.parent_id = this.$route.query.parent_id || 0;
            this.load();
        },
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$api.menu.list(this.page, {
                                    parent_id: this.parent_id
                                });

                            case 2:
                                this.menus = _context.sent;

                                if (!this.parent_id) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 6;
                                return this.$api.menu.findOne({
                                    id: this.parent_id
                                });

                            case 6:
                                this.parent = _context.sent;

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }()
    }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u521B\u5EFA\u83DC\u5355\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name_en" class="control-label">\u82F1\u6587\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.name_en" type="text" class="form-control" name="name_en">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="url" class="control-label">URL</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.url" type="text" class="form-control" name="url">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u63CF\u8FF0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.title" type="text" class="form-control" name="title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title_en" class="control-label">\u82F1\u6587\u63CF\u8FF0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.title_en" type="text" class="form-control" name="title_en">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u521B\u5EFA</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			menu: {
				name: '',
				name_en: '',
				url: '',
				title: '',
				title_en: '',
				parent_id: this.$route.query.parent_id
			}
		};
	},
	methods: {
		add: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var menu;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.menu.create(this.menu);

							case 2:
								menu = _context.sent;

								this.$message.info('创建菜单成功', 10000);
								this.$router.go(-1);

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add() {
				return _ref.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u7F16\u8F91\u83DC\u5355\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="update">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name_en" class="control-label">\u82F1\u6587\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.name_en" type="text" class="form-control" name="name_en">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="url" class="control-label">URL</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.url" type="text" class="form-control" name="url">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u63CF\u8FF0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.title" type="text" class="form-control" name="title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title_en" class="control-label">\u82F1\u6587\u63CF\u8FF0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="menu.title_en" type="text" class="form-control" name="title_en">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u63D0\u4EA4</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			menu: {
				name: '',
				name_en: '',
				url: '',
				title: '',
				title_en: ''
			},
			id: this.$route.query.id
		};
	},
	mounted: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.$api.menu.getById(this.id);

						case 2:
							this.menu = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function mounted() {
			return _ref.apply(this, arguments);
		}

		return mounted;
	}(),

	methods: {
		update: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var menu;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.$api.menu.update(this.menu.id, this.menu);

							case 2:
								menu = _context2.sent;

								this.$message.info('编辑菜单成功', 10000);
								this.$router.go(-1);

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function update() {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u8D44\u6E90\u5217\u8868\n        <router-link class="btn" to="/resource/create">\u6DFB\u52A0\u65B0\u8D44\u6E90</router-link>\n\t</header>\n\t<div class="widget">\n\t\t<ul class="list">\n\t\t\t<li>\n\t\t\t\t<div class="col col-3">\u540D\u79F0</div>\n\t\t\t\t<div class="col col-3">URL</div>\n\t\t\t\t<div class="col col-2">\u8BBF\u95EE\u65B9\u6CD5</div>\n\t\t\t\t<div class="col col-2">\u64CD\u4F5C</div>\n\t\t\t</li>\n\t\t\t<li v-for="resource in resources.rows">\n\t\t\t\t<div class="col col-3">{{resource.name}}</div>\n\t\t\t\t<div class="col col-3">{{resource.url}}</div>\n\t\t\t\t<div class="col col-2">{{resource.method}}</div>\n\t\t\t\t<div class="col col-2 operation">\n                    <router-link :to="\'/resource/edit?id=\'+ resource.id">\u7F16\u8F91</router-link>\n\t\t\t\t\t<a @click="remove(resource)">\u5220\u9664</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<pagination :change="handlePageChange" :data="resources"></pagination>\n\t</div>\n</div>',
    data: function data() {
        return {
            resources: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page | 0
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },

    methods: {
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.load();
        },
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$api.resource.list(this.page, {});

                            case 2:
                                this.resources = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }(),

        remove: function remove(resource) {
            // this.$api.resource.remove(resource)
        }
    }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u521B\u5EFA\u8D44\u6E90\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u8D44\u6E90\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="resource.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="url" class="control-label">URL</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="resource.url" type="text" class="form-control" name="url">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="method" class="control-label">\u8BBF\u95EE\u65B9\u6CD5</label>\n\t\t\t\t<div class="control-item control-select">\n\t\t\t\t\t<select v-model="resource.method" name="method" class="form-control">\n\t\t\t\t\t\t<option value="GET">GET</option>\n\t\t\t\t\t\t<option value="POST">POST</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u521B\u5EFA</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			resource: {
				name: '',
				url: '',
				method: ''
			}
		};
	},
	methods: {
		add: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.resource.create(this.resource);

							case 2:
								this.$message.info('创建资源成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add() {
				return _ref.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u4FEE\u6539\u8D44\u6E90\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="update">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u8D44\u6E90\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="resource.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="url" class="control-label">URL</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="resource.url" type="text" class="form-control" name="url">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="method" class="control-label">\u8BBF\u95EE\u65B9\u6CD5</label>\n\t\t\t\t<div class="control-item control-select">\n\t\t\t\t\t<select v-model="resource.method" name="method" class="form-control">\n\t\t\t\t\t\t<option value="GET">GET</option>\n\t\t\t\t\t\t<option value="POST">POST</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u66F4\u65B0</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			resource: {
				name: '',
				url: '',
				method: ''
			},
			id: this.$route.query.id
		};
	},
	mounted: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.$api.resource.getById(this.id);

						case 2:
							this.resource = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function mounted() {
			return _ref.apply(this, arguments);
		}

		return mounted;
	}(),

	methods: {
		update: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.$api.resource.update(this.resource.id, this.resource);

							case 2:
								this.$message.info('修改菜单成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function update() {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u89D2\u8272\u5217\u8868\n\t\t<router-link class="btn" :to="\'/role/create\'">\u6DFB\u52A0\u65B0\u89D2\u8272</router-link>\n\t</header>\n\t<div class="widget">\n\t\t<ul class="list">\n\t\t\t<li>\n\t\t\t\t<div class="col col-6">\u540D\u79F0</div>\n\t\t\t\t<div class="col col-4">\u64CD\u4F5C</div>\n\t\t\t</li>\n\t\t\t<li v-for="role in roles.rows">\n\t\t\t\t<div class="col col-6">{{role.name}}</div>\n\t\t\t\t<div class="col col-4 operation">\n\t\t\t\t\t<router-link :to="\'/role/assign_resource?id=\' + role.id">\u5206\u914D\u8D44\u6E90</router-link>\n\t\t\t\t\t<router-link :to="\'/role/assign_menu?id=\' + role.id">\u5206\u914D\u83DC\u5355</router-link>\n\t\t\t\t\t<router-link :to="\'/role/edit?id=\' + role.id">\u7F16\u8F91</router-link>\n\t\t\t\t\t<router-link :to="\'/role/delete?id=\' + role.id">\u5220\u9664</router-link>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<pagination :change="handlePageChange" :data="roles"></pagination>\n\t</div>\n</div>',
    data: function data() {
        return {
            roles: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page | 0
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },

    methods: {
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.load();
        },
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$api.role.list(this.page, {});

                            case 2:
                                this.roles = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }()
    }
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u521B\u5EFA\u89D2\u8272\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u89D2\u8272\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="role.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="description" class="control-label">\u89D2\u8272\u63CF\u8FF0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="role.description" type="text" class="form-control" name="description">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u521B\u5EFA</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			role: {
				name: '',
				description: ''
			}
		};
	},
	methods: {
		add: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.role.create(this.role);

							case 2:
								this.$message.info('创建角色成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add() {
				return _ref.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u4FEE\u6539\u89D2\u8272\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="name" class="control-label">\u89D2\u8272\u540D\u79F0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="role.name" type="text" class="form-control" name="name">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="description" class="control-label">\u89D2\u8272\u63CF\u8FF0</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="role.description" type="text" class="form-control" name="description">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u63D0\u4EA4</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			role: {
				name: '',
				description: ''
			},
			id: this.$route.query.id
		};
	},
	mounted: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.$api.role.getById(this.id);

						case 2:
							this.role = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function mounted() {
			return _ref.apply(this, arguments);
		}

		return mounted;
	}(),

	methods: {
		add: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.$api.role.update(this.role.id, this.role);

							case 2:
								this.$message.info('修改角色成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function add() {
				return _ref2.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<section class="panel">\n    <header class="title">\n        \u5206\u914D\u83DC\u5355\n    </header>\n    <div class="widget">\n        <form class="form" novalidate v-on:submit.prevent="setMenus">\n            <div class="form-group">\n                <label class="control-label">\u89D2\u8272</label>\n                <label class="control-label">{{role.name}}</label>\n            </div>\n            <div class="form-group">\n                <ul>\n                    <li v-for="menu in menus">\n                        <input v-model="selectedMenuId" :id="\'menu-\'+menu.id" type="checkbox" :value="menu.id"/>\n                        <label :for="\'menu-\'+menu.id">{{menu.name}} {{menu.url}}</label>\n                        <ul v-if="menu.children.length">\n                            <li v-for="child in menu.children">\n                                <input v-model="selectedMenuId" :id="\'menu-\'+child.id" type="checkbox" :value="child.id"/>\n                                <label :for="\'menu-\'+child.id">{{child.name}} {{child.url}}</label>\n                                <ul v-if="child.children.length">\n                                    <li v-for="gchild in child.children">\n                                        <input v-model="selectedMenuId" :id="\'menu-\'+gchild.id" type="checkbox" :value="gchild.id"/>\n                                        <label :for="\'menu-\'+gchild.id">{{gchild.name}} {{gchild.url}}</label>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n            <div class="form-group">\n                <button class="btn" type="submit">\u63D0\u4EA4</button>\n            </div>\n        </form>\n    </div>\n</section>',
    data: function data() {
        return {
            menus: [],
            role: {},
            selectedMenuId: [],
            role_id: this.$route.query.id | 0
        };
    },
    mounted: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var loadRole, loadMenu, loadRoleMenu, menus, menuMap, roles_menus, roleMenuMap, selectedMenuId, topMenus;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            loadRole = this.$api.role.findOne({
                                id: this.role_id
                            });
                            loadMenu = this.$api.menu.all({});
                            loadRoleMenu = this.$api.roles_menus.all({
                                role_id: this.role_id
                            });
                            _context.next = 5;
                            return loadMenu;

                        case 5:
                            menus = _context.sent;
                            menuMap = {};

                            menus.forEach(function (menu) {
                                menu.children = [];
                                menuMap[menu.id] = menu;
                            });

                            _context.next = 10;
                            return loadRoleMenu;

                        case 10:
                            roles_menus = _context.sent;
                            roleMenuMap = {};
                            selectedMenuId = [];

                            roles_menus.forEach(function (role_menu) {
                                roleMenuMap[role_menu.menu_id] = role_menu;
                                selectedMenuId.push(role_menu.menu_id);
                            });
                            this.selectedMenuId = selectedMenuId;

                            topMenus = [];

                            menus.forEach(function (menu) {
                                menu.roleMenu = roleMenuMap[menu.id];
                                if (menu.parent_id) {
                                    var parent = menuMap[menu.parent_id];
                                    if (parent) {
                                        parent.children.push(menu);
                                    }
                                } else {
                                    topMenus.push(menu);
                                }
                            });
                            this.menus = topMenus;
                            _context.next = 20;
                            return loadRole;

                        case 20:
                            this.role = _context.sent;

                        case 21:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function mounted() {
            return _ref.apply(this, arguments);
        }

        return mounted;
    }(),

    methods: {
        setMenus: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.$api.role.setMenus(this.role_id, this.selectedMenuId);

                            case 2:
                                this.$message.info('分配菜单成功', 10000);
                                this.$router.go(-1);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function setMenus() {
                return _ref2.apply(this, arguments);
            }

            return setMenus;
        }()
    }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<section class="panel">\n    <header class="title">\n        \u5206\u914D\u8D44\u6E90\n    </header>\n    <div class="widget">\n        <form class="form" novalidate v-on:submit.prevent="setResources">\n            <div class="form-group">\n                <label class="control-label">\u89D2\u8272</label>\n                <label class="control-label">{{role.name}}</label>\n            </div>\n            <div class="form-group">\n                <ul>\n                    <li v-for="resource in resources">\n                        <input :id="\'resource\'+resource.id" type="checkbox" v-model="selectedResourceId" :value="resource.id"/>\n                        <label :for="\'resource\'+resource.id">{{resource.name}}</label>\n                        <label>{{resource.method}}</label>\n                    </li>\n                </ul>\n            </div>\n            <div class="form-group">\n                <button class="btn" type="submit">\u63D0\u4EA4</button>\n            </div>\n        </form>\n    </div>\n</section>',
    data: function data() {
        return {
            resources: [],
            role: {},
            selectedResourceId: [],
            role_id: this.$route.query.id | 0
        };
    },
    mounted: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var loadRole, loadResource, loadRoleResource, resources, roles_resources, roleResourceMap, selectedResourceId;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            loadRole = this.$api.role.findOne({
                                id: this.role_id
                            });
                            loadResource = this.$api.resource.all({});
                            loadRoleResource = this.$api.roles_resources.all({
                                role_id: this.role_id
                            });
                            _context.next = 5;
                            return loadResource;

                        case 5:
                            resources = _context.sent;
                            _context.next = 8;
                            return loadRoleResource;

                        case 8:
                            roles_resources = _context.sent;
                            roleResourceMap = {};
                            selectedResourceId = [];

                            roles_resources.forEach(function (role_resource) {
                                roleResourceMap[role_resource.resource_id] = role_resource;
                                selectedResourceId.push(role_resource.resource_id);
                            });
                            this.selectedResourceId = selectedResourceId;

                            resources.forEach(function (resource) {
                                resource.roleResource = roleResourceMap[resource.id];
                            });
                            this.resources = resources;
                            _context.next = 17;
                            return loadRole;

                        case 17:
                            this.role = _context.sent;

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function mounted() {
            return _ref.apply(this, arguments);
        }

        return mounted;
    }(),

    methods: {
        setResources: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.$api.role.setResources(this.role_id, this.selectedResourceId);

                            case 2:
                                this.$message.info('分配资源成功', 10000);
                                this.$router.go(-1);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function setResources() {
                return _ref2.apply(this, arguments);
            }

            return setResources;
        }()
    }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n    <header class="title">\n        \u6807\u7B7E\u5217\u8868\n        <router-link class="btn" :to="\'/tag/create\'">\u6DFB\u52A0\u65B0\u6807\u7B7E</router-link>\n    </header>\n    <div class="widget">\n        <ul class="list">\n            <li>\n                <div class="col col-4">\u6807\u9898</div>\n                <div class="col col-4">\u82F1\u6587\u6807\u9898</div>\n                <div class="col col-2">\u64CD\u4F5C</div>\n            </li>\n            <li v-for="tag in tags.rows">\n                <div class="col col-4">{{tag.title}}</div>\n                <div class="col col-4">{{tag.title_en}}</div>\n                <div class="col col-2 operation">\n                    <router-link class="btn" :to="\'/edit?id=\' + tag.id">\u7F16\u8F91</router-link>\n                    <router-link class="btn" :to="\'/tag/delete?id=\' + tag.id">\u5220\u9664</router-link>\n                </div>\n            </li>\n        </ul>\n        <pagination :change="handlePageChange" :data="tags"></pagination>\n    </div>\n</div>',
    data: function data() {
        return {
            tags: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page | 0
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },

    methods: {
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.load();
        },
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$api.tag.list(this.page, {});

                            case 2:
                                this.tags = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }()
    }
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u521B\u5EFA\u6807\u7B7E\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="add">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="tag.title" type="text" class="form-control" name="title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title_en" class="control-label">\u82F1\u6587\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="tag.title_en" type="text" class="form-control" name="title_en">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="url" class="control-label">URL</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="tag.url" type="text" class="form-control" name="url">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u521B\u5EFA</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			tag: {
				title: '',
				title_en: '',
				url: ''
			}
		};
	},
	methods: {
		add: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.tag.create(this.tag);

							case 2:
								this.tag = _context.sent;

								this.$message.info('创建标签成功', 10000);
								this.$router.go(-1);

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add() {
				return _ref.apply(this, arguments);
			}

			return add;
		}()
	}
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u4FEE\u6539\u6807\u7B7E\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="update">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title" class="control-label">\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="tag.title" type="text" class="form-control" name="title">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="title_en" class="control-label">\u82F1\u6587\u6807\u9898</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="tag.title_en" type="text" class="form-control" name="title_en">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="url" class="control-label">URL</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="tag.url" type="text" class="form-control" name="url">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u4FEE\u6539</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			tag: {
				title: '',
				title_en: '',
				url: ''
			}
		};
	},
	mounted: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.$api.tag.getById(this.$route.query.id);

						case 2:
							this.tag = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function mounted() {
			return _ref.apply(this, arguments);
		}

		return mounted;
	}(),

	methods: {
		update: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.$api.tag.update(this.tag.id, this.tag);

							case 2:
								this.$message.info('修改标签成功', 10000);
								this.$router.go(-1);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function update() {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pagination = __webpack_require__(78);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u4E3B\u9898\u5217\u8868\n\t\t<!--<router-link class="btn" :to="\'/topic/create?parent_id=\'+ (parent && parent.id || \'\')">\u6DFB\u52A0\u65B0\u4E3B\u9898</router-link>-->\n\t</header>\n\t<div class="widget">\n\t\t<ul class="list">\n\t\t\t<li v-if="parent">\n\t\t\t\t<b>{{parent.name}}</b>\u7684\u4E0B\u7EA7\u4E3B\u9898\n\t\t\t\t<router-link class="btn" :to="\'/topic?parent_id=\'+ (parent && parent.parent_id || \'\')">\u8FD4\u56DE\u4E0A\u7EA7</router-link>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<div class="col col-3">\u6807\u9898</div>\n\t\t\t\t<div class="col col-3">\u82F1\u6587\u6807\u9898</div>\n\t\t\t\t<div class="col col-4">\u64CD\u4F5C</div>\n\t\t\t</li>\n\t\t\t<li v-for="topic in topics.rows">\n\t\t\t\t<div class="col col-3">{{topic.name}}</div>\n\t\t\t\t<div class="col col-3">{{topic.name_en}}</div>\n\t\t\t\t<div class="col col-4 operation">\n\t\t\t\t\t<router-link class="btn" :to="\'/topic?parent_id=\' + topic.id">\u4E0B\u7EA7\u4E3B\u9898</router-link>\n\t\t\t\t\t<!--<router-link class="btn" :to="\'/topic/edit?parent_id=\' + topic.id">\u7F16\u8F91</router-link>-->\n\t\t\t\t\t<router-link class="btn" :to="\'/topic/delete?parent_id=\' + topic.id">\u5220\u9664</router-link>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<pagination :change="handlePageChange" :data="topics"></pagination>\n\t</div>\n</div>',
    data: function data() {
        return {
            topics: {
                rows: [],
                count: 0
            },
            parent: null,
            page: this.$route.query.page | 0,
            parent_id: this.$route.query.parent_id | 0
        };
    },
    components: {
        Pagination: _pagination2.default
    },
    mounted: function mounted() {
        this.load();
    },

    methods: {
        handlePageChange: function handlePageChange(page) {
            this.page = page;
            this.parent_id = this.$route.query.parent_id;
            this.load();
        },
        load: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var parent_id;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                parent_id = this.parent_id;
                                _context.next = 3;
                                return this.$api.topic.list(this.page, {
                                    parent_id: parent_id
                                });

                            case 3:
                                this.topics = _context.sent;

                                if (!parent_id) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 7;
                                return this.$api.topic.findOne({
                                    id: parent_id
                                });

                            case 7:
                                this.parent = _context.sent;

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function load() {
                return _ref.apply(this, arguments);
            }

            return load;
        }()
    }
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: '\n<div class="panel">\n\t<header class="title">\n\t\t\u7BA1\u7406\u5458\u767B\u5F55\n\t</header>\n\t<div class="widget">\n\t\t<form class="form" novalidate v-on:submit.prevent="login">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="email" class="control-label">\u90AE\u7BB1</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.email" type="text" class="form-control" name="email">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="password" class="control-label">\u5BC6\u7801</label>\n\t\t\t\t<div class="control-item control-input">\n\t\t\t\t\t<input v-model="account.password" type="password" class="form-control" name="password">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<button type="submit" class="btn btn-primary">\u767B\u5F55</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>',
	data: function data() {
		return {
			account: {
				email: '',
				password: ''
			}
		};
	},
	methods: {
		login: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var account;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.$api.admin.login(this.account);

							case 2:
								account = _context.sent;

								if (account) {
									// this.$message.info('登录成功', 10000)
									location.href = '/portal';
								}

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function login() {
				return _ref.apply(this, arguments);
			}

			return login;
		}()
	}
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '\n    <ul class="nav">\n        <li v-for="menu in menus">\n            <router-link :to="menu.url" :class="{active: menu.active}">{{menu.name}}</router-link>\n            <ul v-if="menu.children.length">\n                <li v-for="child in menu.children">\n                    <router-link :to="child.url" :class="{active: menu.active}">{{child.name}}</router-link>\n                </li>\n            </ul>\n        </li>\n    </ul>\n',
    data: function data() {
        return {
            menus: []
        };
    },
    mounted: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var currentPath, menus, menuMap, topMenus, activeMenu;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            currentPath = location.pathname;
                            _context.next = 3;
                            return this.$api.get('/service/admin/menus');

                        case 3:
                            menus = _context.sent;
                            menuMap = {};
                            topMenus = [];
                            activeMenu = void 0;

                            menus.forEach(function (menu) {
                                if (!menu.parent_id) {
                                    topMenus.push(menu);
                                }
                                menu.url = menu.url;
                                menu.children = [];
                                menu.id && (menuMap[menu.id] = menu);
                                if (menu.url == currentPath) {
                                    activeMenu = menu;
                                }
                            });
                            while (activeMenu) {
                                activeMenu.active = true;
                                activeMenu = menuMap[activeMenu.parent_id];
                            }
                            menus.forEach(function (menu) {
                                if (menu.parent_id) {
                                    var parent = menuMap[menu.parent_id];
                                    if (parent) {
                                        parent.children.push(menu);
                                    }
                                }
                            });
                            this.menus = topMenus;

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function mounted() {
            return _ref.apply(this, arguments);
        }

        return mounted;
    }(),

    methods: {}
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(6);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    template: '<span> {{account.name|| account.email}}</span>',
    data: function data() {
        return {
            account: {}
        };
    },
    mounted: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.$api.get('/service/admin/account');

                        case 2:
                            this.account = _context.sent;

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function mounted() {
            return _ref.apply(this, arguments);
        }

        return mounted;
    }(),

    methods: {}
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Container = Vue.extend({
    template: '<div class="toast-container">\n<transition-group name="toast" tag="div">\n    <div class="toast" :key="message.id" :class="message.type" v-for="message in messages">\n        <div v-html="message.text"></div>\n        <span class="toast-close" @click="remove(message)">\n            &#xd7;\n        </span>\n    </div>\n</transition-group>\n    </div>',
    components: {},
    data: function data() {
        return {
            messages: []
        };
    },
    mounted: function mounted() {
        document.body.appendChild(this.$el);
    },
    methods: {
        remove: function remove(toast) {
            this.messages.splice(this.messages.indexOf(toast), 1);
        }
    }
});
var container = void 0;

function addMessage(type, text, timeout) {
    if (!container) {
        container = new Container();
        container.$mount();
    }
    var message = {
        type: type,
        text: text,
        id: container.messages.length
    };
    container.messages.push(message);
    setTimeout(function () {
        container.remove(message);
    }, timeout || 5000);
}

var MessageUtil = {};

var types = ['success', 'warning', 'info', 'error'];
types.forEach(function (type) {
    MessageUtil[type] = function (text) {
        addMessage(type, text);
    };
});

Vue.prototype.$message = MessageUtil;
exports.default = MessageUtil;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(79);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var names = ['account', 'article', 'banner', 'comment', 'content', 'github', 'mail', 'menu', 'resource', 'role', 'social', 'tag', 'topic', 'roles_menus', 'roles_resources', 'accounts_roles'];
var api = {
    admin: {
        login: function login(account) {
            return api.post('/portal/admin_login', account);
        }
    }
};

names.forEach(function (name) {
    api[name] = {
        create: function create(data) {
            return api.post('/service/' + name, data);
        },
        getById: function getById(id) {
            return api.get('/service/' + name + '/' + id);
        },
        list: function list(page, data) {
            return api.post('/service/' + name + '/list/' + page, data);
        },
        all: function all(data) {
            return api.post('/service/' + name + '/all', data);
        },
        findOne: function findOne(data) {
            return api.post('/service/' + name + '/findOne', data);
        },
        update: function update(id, data) {
            return api.post('/service/' + name + '/' + id, data);
        },
        remove: function remove(data) {}
    };
});

api.role.setMenus = function (id, menu_ids) {
    return api.post('/service/role_menu', {
        id: id,
        menu_ids: menu_ids
    });
};

api.role.setResources = function (id, resource_ids) {
    return api.post('/service/role_resource', {
        id: id,
        resource_ids: resource_ids
    });
};

api.account.setRoles = function (id, role_ids) {
    return api.post('/service/account_role', {
        id: id,
        role_ids: role_ids
    });
};

function debounce(fn, idle) {
    var timeout = void 0;
    return function () {
        var ctx = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(ctx, args);
        }, idle);
    };
}
var vue = new Vue();

var loginError = debounce(function () {
    if (location.pathname == '/portal/login') {
        return;
    }
    vue.$message.error('请先<a href="/portal/login">登录</a>', 30000);
}, 300);
var noPermissionError = debounce(function () {
    vue.$message.error('您无访问该资源的权限', 30000);
}, 300);

function ajax(url, method, data) {
    return new _promise2.default(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText).result);
                } else {
                    errorHandler(this);
                }
            }
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xhr.send(data ? (0, _stringify2.default)(data) : null);
    });
}

function errorHandler(xhr) {
    switch (xhr.status) {
        case 401:
            loginError();
            break;
        case 403:
            noPermissionError();
            break;
        case 404:
            break;
        default:
            vue.$message.error(JSON.parse(xhr.responseText).result, 30000);
            break;
    }
}

api.post = function (url, data) {
    return ajax(url, 'POST', data);
};

api.get = function (url) {
    return ajax(url, 'GET');
};

api.delete = function (url) {
    return ajax(url, 'DELETE');
};

Vue.prototype.$api = api;
exports.default = api;

/***/ })
/******/ ]);