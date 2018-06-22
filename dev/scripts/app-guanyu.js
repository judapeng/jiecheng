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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const headerTpl = __webpack_require__(1)
const footerTpl = __webpack_require__(2)
const guanyuTpl = __webpack_require__(17)


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(guanyuTpl)




/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = "<main>    <div class=\"banner\">        <img src=\"../imgess/banner06.png\" alt=\"\">    </div>    <div class=\"guanyu\">        <div class=\"tittle\">            关于诚洁网        </div>        <p class=\"jieshao1\">            诚洁是一家是一家典型的“互联网+生活服务”平台，在成立之前就获得了雷军/顺为资本的天使投资，提供优质家庭生活服务和企业后勤服务，用户可以在线预约保洁服务。        </p>        <p class=\"jieshao2\">            公司通过高频的保洁服务为入口打品牌，建立标准化的业务研究体系、培训体系和品控体系，并不断在供给侧进行创新改革，获得了良好的市场口碑和地位。随着互联网家装及互联网公寓的兴起，公司正式进入企业服务市场，并陆续搭建了基于企业保洁为入口，企业养护服务、企业送水、绿植养护、企业用车等为辅的企业后勤一站式服务平台。公司技术团队实力雄厚，通过自主开发的智能调度系统有效的提高了阿姨及第三方商家的服务效率，阿姨的平均收入较传统方式提高30%以上。        </p>        <div class=\"shiming\">            使命:        </div>        <p class=\"shiming1\">            让家庭生活更美好        </p>        <p class=\"shiming2\">            我们专注地服务于注重生活品质的中高端人群，帮他们从繁杂的家务中解放出来，让他们有更多的时间去打拼事业，去陪伴家人。        </p>        <p class=\"shiming3\">            让企业办公更愉悦        </p>        <p class=\"shiming4\">                我们致力于提高中小企业的后勤服务体验，提高高品质、高效率、低成本的一站式整体服务，让企业后勤更高效，办公更愉悦。        </p>        <div class=\"yuanjing\">            愿景：        </div>        <p class=\"yuanjing1\">            成为家庭生活服务第一品牌        </p>        <p class=\"yuanjing1\">            成为企业后勤服务第一品牌        </p>        <div class=\"jzguan\">            价值观：        </div>        <p class=\"jzguan1\">            必胜、激情、担当、坚持、团队合作、拥抱变化        </p>    </div></main>"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<footer> <div class=\"foots\">    <div class=\"leftcopy\">        &copy;诚洁网 京ICP备13032113<span></span>京公网安备11010802013311    </div>    <div class=\"rightnav\">        <div class=\"jiating\">            <a href=\"\">家庭服务</a>        </div>        <div class=\"richang\">            <a href=\"\">日常保洁</a>        </div>        <div class=\"guanyu\">            <a href=\"\">关于我们</a>        </div>    </div> </div></footer>"

/***/ })

/******/ });