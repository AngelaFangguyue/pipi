// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"bClY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cssstring = "/*\u8FD9\u4E2A\u5C0Fdemo\u662F\u5C55\u793A\u4E00\u53EA\u76AE\u5361\u4E18\u7684\u5236\u4F5C\u8FC7\u7A0B*/\n/*\u9996\u5148\u76AE\u5361\u4E18\u662F\u9EC4\u8272\u7684\uFF0C\u51C6\u5907\u4E00\u4E2A\u9EC4\u8272\u7684\u80CC\u666F*/\n.skin {\n    position:relative;\n    height:50vh;\n    background-color: rgba(255, 230, 0);\n  }\n/*\u5F00\u59CB\u753B\u76AE\u5361\u4E18\u7684\u5C0F\u9F3B\u5B50*/\n/*\u5148\u753B\u4E00\u4E2A\u4E09\u89D2\u5F62\u300B\u53D8\u4E3A\u6247\u5F62\u300B\u8C03\u6574\u4F4D\u7F6E*/\n  .nose {\n    border: 18px solid black;\n    width: 0;\n    height: 0;  /*\u8FD9\u91CC\u8BBE\u7F6E\u7684\u76D2\u5B50\u6A21\u578B\uFF0C\u8FB9\u6846\u662F\u7B97\u5728\u5BBD\u9AD8\u91CC\u9762\u7684*/\n    border-bottom: none;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-radius: 50%;\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -18px;\n    z-index: 5;\n  }\n/*\u4EE5\u9F3B\u5B50\u4E3A\u57FA\u51C6\uFF0C\u753B\u4E00\u53CC\u840C\u840C\u7684\u5927\u773C\u775B*/\n/*\u5148\u753B\u5706\u300B\u8C03\u6574\u4F4D\u7F6E*/\n  .eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    background-color: rgba(46, 46, 46);\n    position: absolute;\n    top: 40px;\n    left: 50%;\n    margin-left: -32px;\n  }\n/*\u8FD9\u662F\u5DE6\u773C\u775B*/\n  .left_eye {\n    transform: translateX(-120px);\n  }\n/*\u8FD9\u662F\u53F3\u773C\u775B*/\n  .right_eye {\n    transform: translateX(120px);\n  }\n/*\u7ED9\u4E24\u4E2A\u773C\u775B\u52A0\u4E1C\u897F\uFF0C\u8BA9\u4E24\u4E2A\u773C\u775B\u66F4\u6709\u795E\uFF0C\u4F1A\u8BF4\u8BDD*/\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid black;\n    width: 35px;\n    height: 35px;\n    background-color: white;\n    border-radius: 50%;\n    position: absolute;\n    top: -2px;\n    left: 6px;\n  }\n  .mouth {\n    /* outline: 3px solid red; */\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 130px;\n    left: 50%;\n    margin-left: -100px;\n  }\n  .mouth_up {\n    position: relative;\n    top: -20px;\n  }\n/*\u4FCF\u76AE\u7684\u5634\u5DF4,\u5206\u4E3A\u4E24\u7247*/\n  .lips {\n    border: 3px solid black;\n    width: 100px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    margin-left: -50px;\n    border-top-color: transparent;\n    z-index: 3;\n    background-color: rgba(255, 230, 0);\n  }\n/*\u901A\u8FC7\u65CB\u8F6C\u79FB\u52A8\u5706\u89D2\u8BA9\u5DE6\u53F3\u8FB9\u7684\u5C0F\u5634\u5507\u7FD8\u8D77\u6765\uFF0C\u5148\u8BBE\u7F6E\u5DE6\u8FB9\u7684\u5C0F\u5634\u5DF4*/\n  .left_lip {\n    border-radius: 0 0 0 50%;\n    transform: rotate(-15deg) translateX(-50px);\n  }\n/*\u63A5\u4E0B\u6765\u662F\u53F3\u8FB9\u7684\u5C0F\u5634\u5DF4*/\n  .right_lip {\n    border-radius: 0 0 50% 0;\n    transform: rotate(15deg) translateX(50px);\n  }\n  .lips::before {\n    content: \"\";\n    display: block;\n    /* border: 1px solid rgb(24, 250, 3); */\n    width: 5px;\n    height: 20px;\n    position: absolute;\n    top: -6px;\n    background-color: rgba(255, 230, 0);\n  }\n  .left_lip::before {\n    right: -4px;\n  }\n  .right_lip::before {\n    left: -4px;\n  }\n  .mouth_down {\n    /* border: 3px solid blue; */\n    width: 160px;\n    height: 170px;\n    position: absolute;\n    left: 50%;\n    margin-left: -80px;\n    overflow: hidden;\n  }\n/*\u8FD9\u6837\u5DE6\u53F3\u4E24\u8FB9\u5C31\u5404\u6709\u4E00\u4E2A\u7FD8\u8D77\u6765\u7684\u5634\u5DF4\u5566*/\n/*\u63A5\u7740\u5F00\u59CB\u753B\u820C\u5934\u55BD*/\n  .yuan1 {\n    border: 3px solid black;\n    width: 186px;\n    height: 810px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -93px;\n    border-radius: 50%;\n    background-color: #9b000a;\n    overflow: hidden;\n  }\n/*\u4E0B\u9762\u7684\u820C\u5934\u989C\u8272\u4E0D\u4E00\u6837\u54DF\uFF0C\u518D\u8BBE\u7F6E\u4E00\u4E2Adiv\u6765\u753B*/\n  .yuan2 {\n    /* border: 3px solid green; */\n    width: 180px;\n    height: 170px;\n    position: absolute;\n    bottom: -30px;\n    left: 50%;\n    margin-left: -90px;\n    border-radius: 50%/50%;\n    background-color: #ff485f;\n  }\n/*\u53EF\u7231\u7684\u8138\u86CB\u6765\u5566*/\n/*\u8138\u86CB\u7684\u753B\u6CD5\u548C\u773C\u775B\u7684\u753B\u6CD5\u5982\u51FA\u4E00\u8F99\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u591A\u52A0\u8D58\u8FF0\u4E86*/\n  .face {\n    border: 3px solid black;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n    position: absolute;\n    top: 145px;\n    left: 50%;\n    margin-left: -45px;\n    background-color: rgba(255, 0, 0);\n  }\n  .left_face {\n    transform: translateX(-180px);\n  }\n  .right_face {\n    transform: translateX(180px);\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n  \n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0);\n    }\n  }\n/*\u9F20\u6807\u653E\u5728\u9F3B\u5B50\u4E0A\uFF0C\u9F3B\u5B50\u4F1A\u52A8\u54E6*/\n  .nose:hover {\n    transform-origin: center;\n    animation: wave 250ms infinite linear;\n  }";
var _default = cssstring;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _showCss = _interopRequireDefault(require("./showCss.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//let i = 1;
//let styin = document.querySelector(".styin");
//let text = document.querySelector("#text");
//let time = 1;
//let id;
//let flg = true;
// function run() {
//   text.innerText = string.substr(0, i);
//   text.scrollTop = text.scrollHeight;
//   styin.innerHTML = string.substr(0, i);
//   i++;
//   if (i > string.length) {
//     window.clearInterval(id);
//     return;
//   }
// }
// function play() {
//   return setInterval(run, time);
// }
// function pause() {
//   clearInterval(id);
// }
// function slow() {
//   pause();
//   time = 500;
//   id = play();
// }
// function normal() {
//   pause();
//   time = 200;
//   id = play();
// }
// function fast() {
//   pause();
//   time = 0; //这里即使是0，也依然是异步函数
//   id = play();
// }
var player = {
  i: 1,
  time: 1,
  id: undefined,
  flg: true,
  ui: {
    styin: document.querySelector(".styin"),
    text: document.querySelector("#text")
  },
  init: function init() {
    player.bindEvents();
    player.play();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  bindEvents: function bindEvents() {
    var hashData = {
      "#btnPause": player.pause,
      "#btnPlay": player.play,
      "#btnSlow": player.slow,
      "#btnNormal": player.normal,
      "#btnFast": player.fast
    };

    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        //检查每一个是不是自身的属性
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    } // btnPause.onclick = player.pause;
    // btnPlay.onclick = () => {
    //   player.pause();
    //   player.play();
    // };
    // btnSlow.onclick = player.slow;
    // btnNormal.onclick = player.normal;
    // btnFast.onclick = player.fast;

  },
  run: function run() {
    player.ui.text.innerText = _showCss.default.substr(0, player.i);
    player.ui.text.scrollTop = player.ui.text.scrollHeight;
    player.ui.styin.innerHTML = _showCss.default.substr(0, player.i);
    player.i++;

    if (player.i > _showCss.default.length) {
      window.clearInterval(player.id);
      return;
    }
  },
  play: function play() {
    //return setInterval(player.run, time);
    if (player.flg) {
      player.id = setInterval(player.run, player.time);
      player.flg = false;
    }
  },
  pause: function pause() {
    clearInterval(player.id);
    player.flg = true;
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 80;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0; //这里即使是0，也依然是异步函数

    player.play();
  }
}; /////////////////////////////////////
// player.play();
// btnPause.onclick = player.pause;
// btnPlay.onclick = () => {
//   player.pause();
//   player.play();
// };
// btnSlow.onclick = player.slow;
// btnNormal.onclick = player.normal;
// btnFast.onclick = player.fast;
////////////////////////////////////
//将上面的变为一句话，即player对象的初始化方法
////////////////////////////////////

player.init();
},{"./showCss.js":"bClY"}]},{},["epB2"], null)
//# sourceMappingURL=main.5e7df8bb.js.map