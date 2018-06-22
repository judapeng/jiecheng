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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"></div>"

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">    <div class=\"headbox\">        <div class=\"logo\">            <img src=\"./imgess/logo.jpg\" alt=\"\">            <span>诚洁网</span>        </div>        <div class=\"mobil\">            <span></span>            <i>400-000-9898</i>        </div>        <div class=\"nav\">            <ul>                <li class=\"active\">首页</li>                <li>家庭服务</li>                <li>关于我们</li>                <li>                    <span class=\"login\">                       <a href=\"http://localhost:8001/login.html\">登录</a>                     </span>                    /                    <span class=\"logon\">                      <a href=\"http://localhost:8001/logon.html\"> 注册</a>                     </span>                </li>            </ul>        </div>            </div></header>"

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(1)
const footerTpl = __webpack_require__(2)
const shoplistTpl = __webpack_require__(19)


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(shoplistTpl)




/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = "<main>    <div class=\"banner\">                <img src=\"./imges/ef98.jpg\" alt=\"\">    </div>    <div class=\"shoplist\">        <div class=\"baojiefuwu\">            保洁服务        </div>        <div class=\"listbox\">            <div class=\"dypai\">                <div class=\"baojie\">                    <span></span>                    <div class=\"xiaoright\">                        <h4>日常保洁</h4>                        <p>专业工具，擦洗托扫</p>                    </div>                </div>                <div class=\"baojie\">                    <span class=\"wuzi\"></span>                    <div class=\"xiaoright\">                        <h4>新居开荒</h4>                        <p>专新居入住开荒，清扫装修痕迹</p>                    </div>                </div>                <div class=\"baojie\">                    <span class=\"changqi\"></span>                    <div class=\"xiaoright\">                        <h4>家庭长期保洁</h4>                        <p>摆脱繁琐家务，重新生活自由</p>                    </div>                </div>            </div>            <div class=\"depai\">                <div class=\"baojie\">                    <span></span>                    <div class=\"xiaoright\">                        <h4>擦玻璃</h4>                        <p>专业喷剂，洁净玻璃</p>                    </div>                </div>                <div class=\"baojie\">                    <span class=\"wuzi\"></span>                    <div class=\"xiaoright\">                        <h4>厨房保养</h4>                        <p>厨房保养，感受敞亮空间</p>                    </div>                </div>                <div class=\"baojie\">                    <span class=\"changqi\"></span>                    <div class=\"xiaoright\">                        <h4>地板打蜡</h4>                        <p>天然蜂蜡，温和护养</p>                    </div>                </div>            </div>            <div class=\"dspai\">                    <div class=\"baojie\">                        <span></span>                        <div class=\"xiaoright\">                            <h4>深度保洁</h4>                            <p>诚洁明星服务，洁净超乎想象</p>                        </div>                    </div>                    <div class=\"baojie\">                        <span class=\"wuzi\"></span>                        <div class=\"xiaoright\">                            <h4>卫生间保养</h4>                            <p>卫生间保养，换发闪亮光洁</p>                        </div>                    </div>                    <div class=\"baojie\">                        <span class=\"changqi\"></span>                        <div class=\"xiaoright\">                            <h4>皮质沙发保养</h4>                            <p>无风清洁，滋润养护</p>                        </div>                    </div>                            </div>        </div>    </div></main>"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<footer> <div class=\"foots\">    <div class=\"leftcopy\">        &copy;诚洁网 京ICP备13032113<span></span>京公网安备11010802013311    </div>    <div class=\"rightnav\">        <div class=\"jiating\">            <a href=\"\">家庭服务</a>        </div>        <div class=\"richang\">            <a href=\"\">日常保洁</a>        </div>        <div class=\"guanyu\">            <a href=\"\">关于我们</a>        </div>    </div> </div></footer>"

/***/ })

/******/ });