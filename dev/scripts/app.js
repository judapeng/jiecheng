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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(1)
const footerTpl = __webpack_require__(2)
const homeTpl = __webpack_require__(4)
const homeTpl2 = __webpack_require__(5)


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(homeTpl+homeTpl2)




/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\"></div><div id=\"job-nav\">    <div class=\"joblogo\">        <h3>轻触屏幕 家务事无忧</h3>        <span>全方位的家庭服务，一键下单，尽享清闲生活</span>    </div>    <div class=\"cleanbox\">        <div class=\"blueball\">            <div>保洁服务</div>        </div>        <div class=\"clean-list\">            <div class=\"yuan1\"></div>            <div class=\"shuxian1\">                <div class=\"hengxian1\">                    <p>日 常 保 洁</p>                        <span></span>                      </div>                <div class=\"hengxian2\">                    <p>深 度 保 洁</p>                        <span></span>                 </div>                <div class=\"hengxian3\">                    <p>长 期 保 洁</p>                        <span></span>                 </div>                <div class=\"hengxian4\">                    <p>擦 玻 璃</p>                        <span></span>                 </div>                <div class=\"hengxian5\">                    <p>新 居 开 荒</p>                        <span></span>                 </div>                <div class=\"hengxian6\">                    <p>厨 房 保 养</p>                        <span></span>                 </div>            </div>            <div class=\"yuan2\"></div>            <div class=\"yuan3\"></div>            <div class=\"shuxian2\">                <div class=\"leftxian1\">                    <p>卫生间保养</p>                        <span></span>                 </div>                <div class=\"leftxian2\">                    <p>地板打蜡</p>                        <span></span>                 </div>                <div class=\"leftxian3\">                    <p>厨皮沙发保养</p>                        <span></span>                 </div>            </div>            <div class=\"yuan4\"></div>        </div>    </div></div>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div id=\"spe\">    <div class=\"spebox\">        <div class=\"joblogo\">            <h3>轻触屏幕 家务事无忧</h3>            <span>全方位的家庭服务，一键下单，尽享清闲生活</span>        </div>    <div class=\"yuantu\">        <div class=\"zhuanye\">            <img src=\"../imgess/zhuanye.png\" alt=\"\">            <h4>专业</h4>            <p>服务人员严格筛选、择优录取；</p>            <i>系统培训、专业工具、标准化流程</i>        </div>        <div class=\"bianjie\">            <img src=\"../imgess/bianjie.png\" alt=\"\">            <h4>便捷</h4>            <p>随时随地一键下单；个性化需求智能匹配；</p>            <i>无需现金、轻松支付</i>        </div>        <div class=\"anquan\">             <img src=\"../imgess/anquan.png\" alt=\"\">            <h4>安全</h4>            <p>职务人员100%实名认证</p>            <i>上门服务家政保驾护航</i>        </div>    </div></div></div>"

/***/ })
/******/ ]);