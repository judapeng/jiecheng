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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"></div>"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">    <div class=\"headbox\">        <div class=\"logo\">            <img src=\"./imgess/logo.jpg\" alt=\"\">            <span>诚洁网</span>        </div>        <div class=\"mobil\">            <span></span>            <i>400-000-9898</i>        </div>        <div class=\"nav\">            <ul>                <li class=\"active\">首页</li>                <li>家庭服务</li>                <li>关于我们</li>                <li>                    <span class=\"login\">                       <a href=\"http://localhost:8001/login.html\">登录</a>                     </span>                    /                    <span class=\"logon\">                      <a href=\"http://localhost:8001/logon.html\"> 注册</a>                     </span>                </li>            </ul>        </div>            </div></header>"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<footer> <div class=\"foots\">    <div class=\"leftcopy\">        &copy;诚洁网 京ICP备13032113<span></span>京公网安备11010802013311    </div>    <div class=\"rightnav\">        <div class=\"jiating\">            <a href=\"\">家庭服务</a>        </div>        <div class=\"richang\">            <a href=\"\">日常保洁</a>        </div>        <div class=\"guanyu\">            <a href=\"\">关于我们</a>        </div>    </div> </div></footer>"

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(1)
const footerTpl = __webpack_require__(2)
const logonTpl = __webpack_require__(7)


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(logonTpl)




/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<main>    <div class=\"logon\">        <div class=\"logon1\">            <h3>邮箱注册</h3>            <div class=\"mail\">                <span>邮箱账号：</span>                <input type=\"text\" placeholder=\"请输入邮箱账号\" id=\"\">            </div>            <div class=\"pwd\">                <span>密码：</span>                <input type=\"text\" placeholder=\"请设置6 - 16位登录密码（不能为纯数字）\" id=\"\">            </div>            <div class=\"Rpwd\">                <span>确认密码：</span>                <input type=\"text\" placeholder=\"请设置6 - 16位登录密码（不能为纯数字）\" id=\"\">            </div>            <div class=\"name\">                <span>用户昵称：</span>                <input type=\"text\" placeholder=\"请输入邮箱账号\" id=\"\">            </div>            <div class=\"yanzheng\">                <span>验证码：</span>                <input type=\"text\" placeholder=\"请输入邮箱账号\" id=\"\">                <i>发送验证码</i>            </div>            <div class=\"tiaokuan\">                <span></span>                <p>我已阅读并同意相关服务条款</p>            </div>            <button class=\"btn\">注册</button>        </div>    </div></main>"

/***/ })
/******/ ]);