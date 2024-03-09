/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    flex-direction: column;
    --tea-green: #C9E4CA;
    --cambridge-blue: #87BBA2;
    --blue-munsell: #55828B;
    --dark-slate-gray: #3B6064;
    --charcoal: #364958;
    box-sizing: border-box;
}


header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 2em;
    padding: 20px;
    background-color: var(--charcoal);
    color: white;
    font-weight: bold;
}


main {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .winningMessage{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.6em;
    }
}

/* SHIP PLACING SECTION */
.shipPlacingArea {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
    gap: 32px;
    position: absolute;
    background-color: white;
    flex: 1;
    width: 100%;

    .desc{
        font-size: 1.8em;
    }

    .boardGrid {
        display: grid;
        height: 400px;
        width: 400px;
        grid-template-columns: repeat(10, 1fr);
        border-left: 1px solid var(--dark-slate-gray);
        border-top: 1px solid var(--dark-slate-gray);
    }

    .boardGrid>div,
    .boardGrid>div[event="mouseout"] {
        background-color: var(--tea-green);
    }

    .boardGrid>div[event="mouseover"] {
        background-color: var(--cambridge-blue);
    }

    .boardGrid>div[type="ship"] {
        background-color: var(--blue-munsell);
    }

    .boardGrid>* {
        border-right: 1px solid var(--dark-slate-gray);
        border-bottom: 1px solid var(--dark-slate-gray);
    }
}

.shipPlacingArea .carrierSelectionArea {
    display: flex;
    gap: 16px;
}

.shipPlacingArea .currentShip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 200px;
}

.currentShipIcon {
    display: flex;
    border: 1px solid var(--charcoal);
}

.currentShipIcon[orientation="horizontal"]{
    flex-direction: row;
}

.currentShipIcon[orientation="vertical"]{
    flex-direction: column;
}

.currentShipIcon>div {
    height: 30px;
    width: 30px;
    background-color: var(--cambridge-blue);
}

.currentShipIcon[orientation="horizontal"]>div+div {
    border-left: 1px solid var(--charcoal);
}

.currentShipIcon[orientation="vertical"]>div+div {
    border-top: 1px solid var(--charcoal);
}

.startGameBtn,
.restartGameBtn {
    background-color: var(--dark-slate-gray);
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    /* height: 50px;
    width: 150px; */
    color: white;
    font-size: 1.4rem;
}

.restartGameBtn{
    display: none;
    align-self: center;
    align-items: center;
    gap: 4px;
}

.startGameBtn:disabled {
    background-color: var(--cambridge-blue);
    cursor: not-allowed;
}

.restartGameBtn:hover,
.startGameBtn:enabled:hover {
    background-color: var(--charcoal);
    cursor: pointer;
}

.startGameBtn:enabled:active {
    background-color: var(--dark-slate-gray);
}

/* MAIN GAME SECTION */
main .container {
    display: none;
    justify-content: space-evenly;
    align-items: center;
    gap: 16px;
    padding: 16px;

    .opponentScore,
    .playerScore{
        font-size: 1.2em;
    }
}

.container>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.container .gridDesc {
    font-size: 1.6rem;
}


.container .opponentGrid,
.container .playerGrid {
    display: grid;
    height: 380px;
    width: 380px;
    grid-template-columns: repeat(10, 1fr);
    border-left: 1px solid var(--charcoal);
    border-top: 1px solid var(--charcoal);

    div,
    div[event="mouseout"] {
        background-color: #C9E4CA;
        border-right: 1px solid var(--charcoal);
        border-bottom: 1px solid var(--charcoal);
    }

    div[event="mouseover"] {
        background-color: var(--cambridge-blue);
    }

    div[type="ship"][shot="true"]{
        background-color:crimson;
    }

    div[shot="true"]{
        background-color: var(--blue-munsell);
    }

}

.container .playerGrid>div[type="ship"] {
    background-color: var(--dark-slate-gray);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,sBAAsB;IACtB,oBAAoB;IACpB,yBAAyB;IACzB,uBAAuB;IACvB,0BAA0B;IAC1B,mBAAmB;IACnB,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,cAAc;IACd,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,gBAAgB;IACpB;AACJ;;AAEA,yBAAyB;AACzB;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,uBAAuB;IACvB,OAAO;IACP,WAAW;;IAEX;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;QACb,aAAa;QACb,YAAY;QACZ,sCAAsC;QACtC,6CAA6C;QAC7C,4CAA4C;IAChD;;IAEA;;QAEI,kCAAkC;IACtC;;IAEA;QACI,uCAAuC;IAC3C;;IAEA;QACI,qCAAqC;IACzC;;IAEA;QACI,8CAA8C;QAC9C,+CAA+C;IACnD;AACJ;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;IAEI,wCAAwC;IACxC,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB;mBACe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;;IAEI,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,aAAa;;IAEb;;QAEI,gBAAgB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;;IAEI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,sCAAsC;IACtC,qCAAqC;;IAErC;;QAEI,yBAAyB;QACzB,uCAAuC;QACvC,wCAAwC;IAC5C;;IAEA;QACI,uCAAuC;IAC3C;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,qCAAqC;IACzC;;AAEJ;;AAEA;IACI,wCAAwC;AAC5C","sourcesContent":["html,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    flex-direction: column;\n    --tea-green: #C9E4CA;\n    --cambridge-blue: #87BBA2;\n    --blue-munsell: #55828B;\n    --dark-slate-gray: #3B6064;\n    --charcoal: #364958;\n    box-sizing: border-box;\n}\n\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    font-size: 2em;\n    padding: 20px;\n    background-color: var(--charcoal);\n    color: white;\n    font-weight: bold;\n}\n\n\nmain {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n\n    .winningMessage{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-size: 1.6em;\n    }\n}\n\n/* SHIP PLACING SECTION */\n.shipPlacingArea {\n    display: flex;\n    flex-direction: column;\n    padding-top: 50px;\n    align-items: center;\n    gap: 32px;\n    position: absolute;\n    background-color: white;\n    flex: 1;\n    width: 100%;\n\n    .desc{\n        font-size: 1.8em;\n    }\n\n    .boardGrid {\n        display: grid;\n        height: 400px;\n        width: 400px;\n        grid-template-columns: repeat(10, 1fr);\n        border-left: 1px solid var(--dark-slate-gray);\n        border-top: 1px solid var(--dark-slate-gray);\n    }\n\n    .boardGrid>div,\n    .boardGrid>div[event=\"mouseout\"] {\n        background-color: var(--tea-green);\n    }\n\n    .boardGrid>div[event=\"mouseover\"] {\n        background-color: var(--cambridge-blue);\n    }\n\n    .boardGrid>div[type=\"ship\"] {\n        background-color: var(--blue-munsell);\n    }\n\n    .boardGrid>* {\n        border-right: 1px solid var(--dark-slate-gray);\n        border-bottom: 1px solid var(--dark-slate-gray);\n    }\n}\n\n.shipPlacingArea .carrierSelectionArea {\n    display: flex;\n    gap: 16px;\n}\n\n.shipPlacingArea .currentShip {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n    width: 200px;\n}\n\n.currentShipIcon {\n    display: flex;\n    border: 1px solid var(--charcoal);\n}\n\n.currentShipIcon[orientation=\"horizontal\"]{\n    flex-direction: row;\n}\n\n.currentShipIcon[orientation=\"vertical\"]{\n    flex-direction: column;\n}\n\n.currentShipIcon>div {\n    height: 30px;\n    width: 30px;\n    background-color: var(--cambridge-blue);\n}\n\n.currentShipIcon[orientation=\"horizontal\"]>div+div {\n    border-left: 1px solid var(--charcoal);\n}\n\n.currentShipIcon[orientation=\"vertical\"]>div+div {\n    border-top: 1px solid var(--charcoal);\n}\n\n.startGameBtn,\n.restartGameBtn {\n    background-color: var(--dark-slate-gray);\n    border-radius: 5px;\n    border: none;\n    padding: 10px 20px;\n    /* height: 50px;\n    width: 150px; */\n    color: white;\n    font-size: 1.4rem;\n}\n\n.restartGameBtn{\n    display: none;\n    align-self: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.startGameBtn:disabled {\n    background-color: var(--cambridge-blue);\n    cursor: not-allowed;\n}\n\n.restartGameBtn:hover,\n.startGameBtn:enabled:hover {\n    background-color: var(--charcoal);\n    cursor: pointer;\n}\n\n.startGameBtn:enabled:active {\n    background-color: var(--dark-slate-gray);\n}\n\n/* MAIN GAME SECTION */\nmain .container {\n    display: none;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n\n    .opponentScore,\n    .playerScore{\n        font-size: 1.2em;\n    }\n}\n\n.container>div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n}\n\n.container .gridDesc {\n    font-size: 1.6rem;\n}\n\n\n.container .opponentGrid,\n.container .playerGrid {\n    display: grid;\n    height: 380px;\n    width: 380px;\n    grid-template-columns: repeat(10, 1fr);\n    border-left: 1px solid var(--charcoal);\n    border-top: 1px solid var(--charcoal);\n\n    div,\n    div[event=\"mouseout\"] {\n        background-color: #C9E4CA;\n        border-right: 1px solid var(--charcoal);\n        border-bottom: 1px solid var(--charcoal);\n    }\n\n    div[event=\"mouseover\"] {\n        background-color: var(--cambridge-blue);\n    }\n\n    div[type=\"ship\"][shot=\"true\"]{\n        background-color:crimson;\n    }\n\n    div[shot=\"true\"]{\n        background-color: var(--blue-munsell);\n    }\n\n}\n\n.container .playerGrid>div[type=\"ship\"] {\n    background-color: var(--dark-slate-gray);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");


class Gameboard {
    constructor() {
        this.board = [
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
        ]
    }


    resetBoard(){
        let newBoard = [];
        for(let i = 0; i < 10; i++){
            let row = [];
            for(let j = 10; j < 10; j++){
                row.push("");
            }
            newBoard.push(row);
        }
        this.board = newBoard;
    }

    
    getBoard() {
        return this.board;
    }


    isEmpty() {
        return this.board.every((row) => {
            return row.every((cell) => typeof cell === "string")
        })
    }

    //  headCoords is the coordinates of the head of the ship.
    //  orientation is either horizontal or vertical.
    placeShip(ship, coordinates) {
        coordinates.forEach(([row, col]) => {
            this.board[row][col] = ship;
        })
    }

    receiveAttack([x, y]) {
        let shipObj = this.board[x][y];
        if (typeof shipObj === "object") shipObj.hit();
    }

    randomlyPlaceShips() {
        // Wasted a lot of time to think on how to make it a purely random placement.
        // Therefore, assigning a section in the grid for each ship.
        // Since I don't want to deal with overlaps ;-;
        // So it is somewhat random atleast in its own section.
        const ships = [
            [new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship("carrier", 5), [[0, 0], [4, 4]]],
            [new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship("battleship", 4), [[0, 6], [4, 9]]],
            [new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship("destroyer", 3), [[6, 0], [9, 2]]],
            [new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship("submarine", 3), [[6, 4], [9, 6]]],
            [new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship("patrolBoat", 2), [[6, 8], [9, 9]]]
        ]

        ships.forEach(([ship, [sectionStart, sectionEnd]]) => {
            const orientation = Math.floor(Math.random() * 2);
            const [startX, startY] = sectionStart;
            const [endX, endY] = sectionEnd;
            let shipCoords = [];
            if (orientation === 0) {  // Horizontal
                let shipHeadRow = Math.floor(Math.random() * (endX - startX + 1)) + startX;
                let shipHeadCol = Math.floor(Math.random() * (endY - startY + 1 - ship.length)) + startY;
                for (let i = 0; i < ship.length; i++) {
                    shipCoords.push([shipHeadRow, shipHeadCol + i])
                }
            } else if (orientation === 1) {  // Vertical
                let shipHeadRow = Math.floor(Math.random() * (endX - startX + 1 - ship.length)) + startX;
                let shipHeadCol = Math.floor(Math.random() * (endY - startY + 1)) + startY;
                for (let i = 0; i < ship.length; i++) {
                    shipCoords.push([shipHeadRow + i, shipHeadCol])
                }
            }
            shipCoords.forEach(([x, y]) => {
                this.board[x][y] = ship;
            });
        });
    }
}



/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.notShooted = this.totalCoords();
    }


    totalCoords() {
        let temp = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                temp.push([i, j]);
            }
        }
        return temp;
    }


    // For Computer to pick a random coordinate to shoot
    chooseRandomCoordinate() {
        const index = Math.floor(Math.random() * this.notShooted.length);
        const randomCoordinate = this.notShooted[index];
        this.notShooted.splice(index, 1);
        return randomCoordinate;
    }
}



/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.timesHit = 0;
    }

    hit() {
        this.timesHit += 1;
    }

    isSunk() {
        return this.length === this.timesHit;
    }

    getName() {
        return this.name;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ "./src/Player.js");






class DOM {
    constructor() {
        this.shipPlacingGrid = this.createBoardGrid(document.querySelector(".shipPlacingArea .boardGrid"));
        this.currentShipIcon = document.querySelector(".shipPlacingArea .currentShipIcon");

        // Visual grids on screen
        this.playerGrid = this.createBoardGrid(document.querySelector(".container .playerGrid"));
        this.opponentGrid = this.createBoardGrid(document.querySelector(".container .opponentGrid"));

        // Gridboard objects
        this.playerGameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard();
        this.opponentGameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard(); // computer Board

        // Players
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_3__.Player("Player");
        this.opponent = new _Player__WEBPACK_IMPORTED_MODULE_3__.Player("Opponent");

        this.winMsg = document.querySelector(".winningMessage");

        // Score Displays
        this.playerScore = document.querySelector(".container .playerScore");
        this.opponentScore = document.querySelector(".container .opponentScore");

        // Ships which are to be placed in the board itself.
        this.shipstoPlace = [
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("carrier", 5),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("battleship", 4),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("destroyer", 3),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("submarine", 3),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("patrolBoat", 2)
        ]
    }


    // Creates a 10x10 grid
    createBoardGrid(shipPlacingGrid) {
        let boardGrid = shipPlacingGrid;
        boardGrid.textContent = "";
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const gridItem = document.createElement("div");
                gridItem.setAttribute("row", `${i}`);
                gridItem.setAttribute("col", `${j}`);
                boardGrid.appendChild(gridItem);
            }
        }
        return boardGrid;
    }


    shipPlacement() {
        const boardGridCells = this.shipPlacingGrid.querySelectorAll("div");

        // Event Listeners for each cell to check hover and click events
        // and change Background colors accordingly.
        boardGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", (e) => this.shipPlacingHandler(e, boardGridCells));
            gridCell.addEventListener("mouseout", (e) => this.shipPlacingHandler(e, boardGridCells));
            gridCell.addEventListener("click", (e) => this.shipPlacingHandler(e, boardGridCells));
        });
        this.currentShipIcon.addEventListener("click", this.orientationHandler);
    }

    orientationHandler(e) {
        let icon = e.target.parentElement;
        if (icon.getAttribute("orientation") == "horizontal") {
            icon.setAttribute("orientation", "vertical");
        } else {
            icon.setAttribute("orientation", "horizontal");
        }
    }


    shipPlacingHandler(event, boardGridCells) {
        const orientation = this.currentShipIcon.getAttribute("orientation");
        const currentGridCell = event.target;
        currentGridCell.parentElement.style.cursor = "default";
        const row = currentGridCell.getAttribute("row");
        const col = currentGridCell.getAttribute("col");
        const gapCoords = [[-1, -1], [-1, 1], [1, -1], [1, 1], [0, -1], [-1, 0], [0, 1], [1, 0]];

        let nextCells = [];
        let shipGapCells = [];
        let coordinates = [];
        let cellAvailability = true;
        let currentShip = this.shipstoPlace[0];
        let length = currentShip.length;

        // Creating an array of cells to be modified.
        // Also getting their coordinates in other array.
        for (let i = 0; i < length; i++) {
            let currentCell;
            if (orientation === "horizontal") {
                currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${row}"][col="${+col + i}"]`);
                coordinates.push([row, +col + i]);

                gapCoords.forEach((coord) => {
                    const gapCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + coord[0]}"][col="${+col + i + coord[1]}"]`);
                    shipGapCells.push(gapCell);
                })

            } else if (orientation === "vertical") {
                currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i}"][col="${col}"]`);
                coordinates.push([+row + i, col]);

                gapCoords.forEach((coord) => {
                    const gapCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i + coord[0]}"][col="${+col + coord[1]}"]`);
                    shipGapCells.push(gapCell);
                })
            }
            nextCells.push(currentCell);
        }

        nextCells.forEach((cell) => {
            if ((!cell) || cell.getAttribute("type") === "ship" || cell.getAttribute("type") === "gap") {
                cellAvailability = false;
                currentGridCell.parentElement.style.cursor = "not-allowed";
            }
        })

        if (cellAvailability) {
            nextCells.forEach((cell) => {
                cell.setAttribute("event", event.type);
            })

            if (event.type === "click") {
                nextCells.forEach((cell) => cell.setAttribute("type", "ship"));
                // console.log(shipGapCells);

                shipGapCells.forEach((cell) => {
                    if (cell && cell.getAttribute("type") !== "ship") {
                        cell.setAttribute("type", "gap");
                    }
                })

                // Placing Ship Object in the actual 10x10 Gameboard array.
                this.playerGameboard.placeShip(currentShip, coordinates);

                // Removing the first ship after being placed.
                this.shipstoPlace.shift();


                if (this.shipstoPlace[0]) {
                    // changes the ship icon according to the length of the ship to be placed.
                    this.updateCurrentShipIcon(this.shipstoPlace[0].length);
                } else {
                    // Creates a clone of each cell and replaces with original one
                    // to remove all the event Listeners from it
                    // when no ships are left to be placed. 
                    // (Thanks to ChatGPT for helping :p)
                    boardGridCells.forEach((cell) => {
                        cell.style.cursor = "default";
                        let clone = cell.cloneNode(true);
                        cell.parentNode.replaceChild(clone, cell);
                    })
                    this.activateStartGameButton();
                }
            }
        }
    }


    updateCurrentShipIcon(length) {
        this.currentShipIcon.textContent = "";
        for (let i = 0; i < length; i++) {
            const div = document.createElement("div");
            this.currentShipIcon.appendChild(div);
        }
    }


    activateStartGameButton() {
        const shipPlacingArea = document.querySelector(".shipPlacingArea");
        const startGameBtn = document.querySelector(".startGameBtn");
        const mainGameSection = document.querySelector("main .container");
        startGameBtn.removeAttribute("disabled");
        startGameBtn.addEventListener("click", () => {
            shipPlacingArea.style.display = "none";
            mainGameSection.style.display = "flex";
            this.populatePlayerGrid();    // To place ships on the Player Grid
            this.opponentGameboard.randomlyPlaceShips();
            this.shootOpponentBoard();
        }, { once: true });
    }


    populatePlayerGrid() {
        const playerGridCells = this.playerGrid.querySelectorAll("div");
        const board = this.playerGameboard.getBoard();
        playerGridCells.forEach((cell) => {
            let row = cell.getAttribute("row");
            let col = cell.getAttribute("col");
            let currentElement = board[row][col];
            if (typeof currentElement === "object") {
                cell.setAttribute("type", "ship");
                cell.setAttribute("shipname", `${currentElement.getName()}`)
            }
        })
    }


    shootOpponentBoard() {
        const opponentGridCells = this.opponentGrid.querySelectorAll("div");
        opponentGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", (e) => this.playerShootingHandler(e));
            gridCell.addEventListener("mouseout", (e) => this.playerShootingHandler(e));
            gridCell.addEventListener("click", (e) => this.playerShootingHandler(e));
        });
    }


    playerShootingHandler(event) {
        const board = this.opponentGameboard.getBoard();

        if (!event.target.getAttribute("shot")) {
            if (event.type === "click") {
                event.target.setAttribute("shot", "true");
                let row = event.target.getAttribute("row");
                let col = event.target.getAttribute("col");
                let currentElement = board[row][col];
                if(typeof currentElement === "object"){
                    event.target.setAttribute("type", "ship");
                    event.target.setAttribute("shipname", `${currentElement.getName()}`);
                    this.updateScore(this.opponentGameboard, this.player, this.playerScore, [row, col]);
                }
                this.shootPlayerBoard();
            }
            else event.target.setAttribute("event", event.type);
        }
    }


    shootPlayerBoard() {
        const playerGridCells = this.playerGrid.querySelectorAll("div");
        const [x, y] = this.opponent.chooseRandomCoordinate();
        const board = this.playerGameboard.getBoard();

        playerGridCells.forEach((cell) => {
            if (cell.getAttribute("row") === `${x}` && cell.getAttribute("col") === `${y}`) {
                cell.setAttribute("shot", "true");
                if (cell.getAttribute("type") === "ship") {
                    this.updateScore(this.playerGameboard, this.opponent, this.opponentScore, [x, y]);
                }
            }
        })
    }


    updateScore(currentGameboard, currentPlayer, scoreBoard, [row, col]){
        let board = currentGameboard.getBoard();

        board[row][col].hit();
        if (board[row][col].isSunk()) {
            // Updating Score on board
            currentPlayer.score += 1;
            scoreBoard.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`
        }
    
        board[row][col] = "";
        // End Game
        if (currentGameboard.isEmpty()) {
            this.winMsg.textContent = `Game Over! ${currentPlayer.name} Win.`;

            const opponentGridCells = this.opponentGrid.querySelectorAll("div");
            opponentGridCells.forEach((cell) => {
                cell.style.cursor = "default";
                let clone = cell.cloneNode(true);
                cell.parentNode.replaceChild(clone, cell);
            })
            this.activateRestartGameButton();
        }
    }


    activateRestartGameButton(){
        const shipPlacingArea = document.querySelector(".shipPlacingArea");
        const mainGameSection = document.querySelector("main .container");
        const restartGameBtn = document.querySelector(".restartGameBtn");
        const startGameBtn = document.querySelector(".startGameBtn");

        restartGameBtn.style.display = 'flex';
        restartGameBtn.addEventListener("click", () => {
            shipPlacingArea.style.display = "flex";
            mainGameSection.style.display = "none";
            restartGameBtn.style.display = "none";
            startGameBtn.disabled = "true";
            this.restart();
        });
    }


    restart(){
        this.shipPlacingGrid = this.createBoardGrid(document.querySelector(".shipPlacingArea .boardGrid"));
        this.currentShipIcon.textContent = "";
        for (let i = 0; i < 5; i++) {
            const div = document.createElement("div");
            this.currentShipIcon.appendChild(div);
        }

        // Visual grids on screen
        this.playerGrid = this.createBoardGrid(document.querySelector(".container .playerGrid"));
        this.opponentGrid = this.createBoardGrid(document.querySelector(".container .opponentGrid"));

        // Gridboard objects
        this.playerGameboard.resetBoard();
        this.opponentGameboard.resetBoard(); // computer Board

        // Players
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_3__.Player("Player");
        this.opponent = new _Player__WEBPACK_IMPORTED_MODULE_3__.Player("Opponent");

        this.winMsg.textContent = "";

        // Score Displays
        this.playerScore.textContent = "Player Score: 0";
        this.opponentScore.textContent = "Oppoenent Score: 0";

        // Ships which are to be placed in the board itself.
        this.shipstoPlace = [
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("carrier", 5),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("battleship", 4),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("destroyer", 3),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("submarine", 3),
            new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship("patrolBoat", 2)
        ]

        this.shipPlacement();
    }
}

const dom = new DOM();
dom.shipPlacement();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FB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QXFDLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQkFBbUIsWUFBWSxvQkFBb0I7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxvQkFBb0I7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0EsMEJBQTBCLDJDQUFNO0FBQ2hDLDRCQUE0QiwyQ0FBTTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQUk7QUFDcEIsZ0JBQWdCLHVDQUFJO0FBQ3BCLGdCQUFnQix1Q0FBSTtBQUNwQixnQkFBZ0IsdUNBQUk7QUFDcEIsZ0JBQWdCLHVDQUFJO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtLXRlYS1ncmVlbjogI0M5RTRDQTtcbiAgICAtLWNhbWJyaWRnZS1ibHVlOiAjODdCQkEyO1xuICAgIC0tYmx1ZS1tdW5zZWxsOiAjNTU4MjhCO1xuICAgIC0tZGFyay1zbGF0ZS1ncmF5OiAjM0I2MDY0O1xuICAgIC0tY2hhcmNvYWw6ICMzNjQ5NTg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxubWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMycHg7XG5cbiAgICAud2lubmluZ01lc3NhZ2V7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgfVxufVxuXG4vKiBTSElQIFBMQUNJTkcgU0VDVElPTiAqL1xuLnNoaXBQbGFjaW5nQXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmRlc2N7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgfVxuXG4gICAgLmJvYXJkR3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XG4gICAgfVxuXG4gICAgLmJvYXJkR3JpZD5kaXYsXG4gICAgLmJvYXJkR3JpZD5kaXZbZXZlbnQ9XCJtb3VzZW91dFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYS1ncmVlbik7XG4gICAgfVxuXG4gICAgLmJvYXJkR3JpZD5kaXZbZXZlbnQ9XCJtb3VzZW92ZXJcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XG4gICAgfVxuXG4gICAgLmJvYXJkR3JpZD5kaXZbdHlwZT1cInNoaXBcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW11bnNlbGwpO1xuICAgIH1cblxuICAgIC5ib2FyZEdyaWQ+KiB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xuICAgIH1cbn1cblxuLnNoaXBQbGFjaW5nQXJlYSAuY2FycmllclNlbGVjdGlvbkFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4uc2hpcFBsYWNpbmdBcmVhIC5jdXJyZW50U2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLmN1cnJlbnRTaGlwSWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG59XG5cbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJde1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXXtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY3VycmVudFNoaXBJY29uPmRpdiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbWJyaWRnZS1ibHVlKTtcbn1cblxuLmN1cnJlbnRTaGlwSWNvbltvcmllbnRhdGlvbj1cImhvcml6b250YWxcIl0+ZGl2K2RpdiB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG59XG5cbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXT5kaXYrZGl2IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xufVxuXG4uc3RhcnRHYW1lQnRuLFxuLnJlc3RhcnRHYW1lQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIC8qIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTUwcHg7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4ucmVzdGFydEdhbWVCdG57XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnN0YXJ0R2FtZUJ0bjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5yZXN0YXJ0R2FtZUJ0bjpob3Zlcixcbi5zdGFydEdhbWVCdG46ZW5hYmxlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN0YXJ0R2FtZUJ0bjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbn1cblxuLyogTUFJTiBHQU1FIFNFQ1RJT04gKi9cbm1haW4gLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLm9wcG9uZW50U2NvcmUsXG4gICAgLnBsYXllclNjb3Jle1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLmNvbnRhaW5lcj5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbn1cblxuLmNvbnRhaW5lciAuZ3JpZERlc2Mge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG5cbi5jb250YWluZXIgLm9wcG9uZW50R3JpZCxcbi5jb250YWluZXIgLnBsYXllckdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcblxuICAgIGRpdixcbiAgICBkaXZbZXZlbnQ9XCJtb3VzZW91dFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOUU0Q0E7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcbiAgICB9XG5cbiAgICBkaXZbZXZlbnQ9XCJtb3VzZW92ZXJcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XG4gICAgfVxuXG4gICAgZGl2W3R5cGU9XCJzaGlwXCJdW3Nob3Q9XCJ0cnVlXCJde1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmNyaW1zb247XG4gICAgfVxuXG4gICAgZGl2W3Nob3Q9XCJ0cnVlXCJde1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW11bnNlbGwpO1xuICAgIH1cblxufVxuXG4uY29udGFpbmVyIC5wbGF5ZXJHcmlkPmRpdlt0eXBlPVwic2hpcFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQ7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFdBQVc7O0lBRVg7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsNkNBQTZDO1FBQzdDLDRDQUE0QztJQUNoRDs7SUFFQTs7UUFFSSxrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSx1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxxQ0FBcUM7SUFDekM7O0lBRUE7UUFDSSw4Q0FBOEM7UUFDOUMsK0NBQStDO0lBQ25EO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBOztJQUVJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjttQkFDZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhOztJQUViOztRQUVJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHFDQUFxQzs7SUFFckM7O1FBRUkseUJBQXlCO1FBQ3pCLHVDQUF1QztRQUN2Qyx3Q0FBd0M7SUFDNUM7O0lBRUE7UUFDSSx1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxxQ0FBcUM7SUFDekM7O0FBRUo7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAtLXRlYS1ncmVlbjogI0M5RTRDQTtcXG4gICAgLS1jYW1icmlkZ2UtYmx1ZTogIzg3QkJBMjtcXG4gICAgLS1ibHVlLW11bnNlbGw6ICM1NTgyOEI7XFxuICAgIC0tZGFyay1zbGF0ZS1ncmF5OiAjM0I2MDY0O1xcbiAgICAtLWNoYXJjb2FsOiAjMzY0OTU4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzJweDtcXG5cXG4gICAgLndpbm5pbmdNZXNzYWdle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBTSElQIFBMQUNJTkcgU0VDVElPTiAqL1xcbi5zaGlwUGxhY2luZ0FyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLmRlc2N7XFxuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGhlaWdodDogNDAwcHg7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQ+ZGl2LFxcbiAgICAuYm9hcmRHcmlkPmRpdltldmVudD1cXFwibW91c2VvdXRcXFwiXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWEtZ3JlZW4pO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQ+ZGl2W2V2ZW50PVxcXCJtb3VzZW92ZXJcXFwiXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkR3JpZD5kaXZbdHlwZT1cXFwic2hpcFxcXCJdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbXVuc2VsbCk7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkR3JpZD4qIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG4gICAgfVxcbn1cXG5cXG4uc2hpcFBsYWNpbmdBcmVhIC5jYXJyaWVyU2VsZWN0aW9uQXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnNoaXBQbGFjaW5nQXJlYSAuY3VycmVudFNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5jdXJyZW50U2hpcEljb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxufVxcblxcbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiXXtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmN1cnJlbnRTaGlwSWNvbltvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiXXtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmN1cnJlbnRTaGlwSWNvbj5kaXYge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XFxufVxcblxcbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiXT5kaXYrZGl2IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxufVxcblxcbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIl0+ZGl2K2RpdiB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxufVxcblxcbi5zdGFydEdhbWVCdG4sXFxuLnJlc3RhcnRHYW1lQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgLyogaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7ICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5yZXN0YXJ0R2FtZUJ0bntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnN0YXJ0R2FtZUJ0bjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbWJyaWRnZS1ibHVlKTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnJlc3RhcnRHYW1lQnRuOmhvdmVyLFxcbi5zdGFydEdhbWVCdG46ZW5hYmxlZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhcnRHYW1lQnRuOmVuYWJsZWQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG59XFxuXFxuLyogTUFJTiBHQU1FIFNFQ1RJT04gKi9cXG5tYWluIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgICAub3Bwb25lbnRTY29yZSxcXG4gICAgLnBsYXllclNjb3Jle1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcbn1cXG5cXG4uY29udGFpbmVyPmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuZ3JpZERlc2Mge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkLFxcbi5jb250YWluZXIgLnBsYXllckdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDM4MHB4O1xcbiAgICB3aWR0aDogMzgwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXG5cXG4gICAgZGl2LFxcbiAgICBkaXZbZXZlbnQ9XFxcIm1vdXNlb3V0XFxcIl0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M5RTRDQTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxuICAgIH1cXG5cXG4gICAgZGl2W2V2ZW50PVxcXCJtb3VzZW92ZXJcXFwiXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XFxuICAgIH1cXG5cXG4gICAgZGl2W3R5cGU9XFxcInNoaXBcXFwiXVtzaG90PVxcXCJ0cnVlXFxcIl17XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmNyaW1zb247XFxuICAgIH1cXG5cXG4gICAgZGl2W3Nob3Q9XFxcInRydWVcXFwiXXtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbXVuc2VsbCk7XFxuICAgIH1cXG5cXG59XFxuXFxuLmNvbnRhaW5lciAucGxheWVyR3JpZD5kaXZbdHlwZT1cXFwic2hpcFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgIF1cbiAgICB9XG5cblxuICAgIHJlc2V0Qm9hcmQoKXtcbiAgICAgICAgbGV0IG5ld0JvYXJkID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDEwOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdCb2FyZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ld0JvYXJkO1xuICAgIH1cblxuICAgIFxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG5cblxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmV2ZXJ5KChyb3cpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByb3cuZXZlcnkoKGNlbGwpID0+IHR5cGVvZiBjZWxsID09PSBcInN0cmluZ1wiKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vICBoZWFkQ29vcmRzIGlzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICAvLyAgb3JpZW50YXRpb24gaXMgZWl0aGVyIGhvcml6b250YWwgb3IgdmVydGljYWwuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKFtyb3csIGNvbF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKFt4LCB5XSkge1xuICAgICAgICBsZXQgc2hpcE9iaiA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgICAgIGlmICh0eXBlb2Ygc2hpcE9iaiA9PT0gXCJvYmplY3RcIikgc2hpcE9iai5oaXQoKTtcbiAgICB9XG5cbiAgICByYW5kb21seVBsYWNlU2hpcHMoKSB7XG4gICAgICAgIC8vIFdhc3RlZCBhIGxvdCBvZiB0aW1lIHRvIHRoaW5rIG9uIGhvdyB0byBtYWtlIGl0IGEgcHVyZWx5IHJhbmRvbSBwbGFjZW1lbnQuXG4gICAgICAgIC8vIFRoZXJlZm9yZSwgYXNzaWduaW5nIGEgc2VjdGlvbiBpbiB0aGUgZ3JpZCBmb3IgZWFjaCBzaGlwLlxuICAgICAgICAvLyBTaW5jZSBJIGRvbid0IHdhbnQgdG8gZGVhbCB3aXRoIG92ZXJsYXBzIDstO1xuICAgICAgICAvLyBTbyBpdCBpcyBzb21ld2hhdCByYW5kb20gYXRsZWFzdCBpbiBpdHMgb3duIHNlY3Rpb24uXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICAgICAgW25ldyBTaGlwKFwiY2FycmllclwiLCA1KSwgW1swLCAwXSwgWzQsIDRdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLCBbWzAsIDZdLCBbNCwgOV1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSwgW1s2LCAwXSwgWzksIDJdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksIFtbNiwgNF0sIFs5LCA2XV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKSwgW1s2LCA4XSwgWzksIDldXV1cbiAgICAgICAgXVxuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKFtzaGlwLCBbc2VjdGlvblN0YXJ0LCBzZWN0aW9uRW5kXV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICBjb25zdCBbc3RhcnRYLCBzdGFydFldID0gc2VjdGlvblN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgW2VuZFgsIGVuZFldID0gc2VjdGlvbkVuZDtcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRzID0gW107XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IDApIHsgIC8vIEhvcml6b250YWxcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWCAtIHN0YXJ0WCArIDEpKSArIHN0YXJ0WDtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWSAtIHN0YXJ0WSArIDEgLSBzaGlwLmxlbmd0aCkpICsgc3RhcnRZO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3NoaXBIZWFkUm93LCBzaGlwSGVhZENvbCArIGldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IDEpIHsgIC8vIFZlcnRpY2FsXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFggKyAxIC0gc2hpcC5sZW5ndGgpKSArIHN0YXJ0WDtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWSAtIHN0YXJ0WSArIDEpKSArIHN0YXJ0WTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtzaGlwSGVhZFJvdyArIGksIHNoaXBIZWFkQ29sXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwQ29vcmRzLmZvckVhY2goKFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH0iLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMudG90YWxDb29yZHMoKTtcbiAgICB9XG5cblxuICAgIHRvdGFsQ29vcmRzKCkge1xuICAgICAgICBsZXQgdGVtcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuXG4gICAgLy8gRm9yIENvbXB1dGVyIHRvIHBpY2sgYSByYW5kb20gY29vcmRpbmF0ZSB0byBzaG9vdFxuICAgIGNob29zZVJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ub3RTaG9vdGVkLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSB0aGlzLm5vdFNob290ZWRbaW5kZXhdO1xuICAgICAgICB0aGlzLm5vdFNob290ZWQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfSIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IHRoaXMudGltZXNIaXQ7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcCc7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5cblxuY2xhc3MgRE9NIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaGlwUGxhY2luZ0dyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYSAuY3VycmVudFNoaXBJY29uXCIpO1xuXG4gICAgICAgIC8vIFZpc3VhbCBncmlkcyBvbiBzY3JlZW5cbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIgLnBsYXllckdyaWRcIikpO1xuICAgICAgICB0aGlzLm9wcG9uZW50R3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5vcHBvbmVudEdyaWRcIikpO1xuXG4gICAgICAgIC8vIEdyaWRib2FyZCBvYmplY3RzXG4gICAgICAgIHRoaXMucGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpOyAvLyBjb21wdXRlciBCb2FyZFxuXG4gICAgICAgIC8vIFBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiUGxheWVyXCIpO1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbmV3IFBsYXllcihcIk9wcG9uZW50XCIpO1xuXG4gICAgICAgIHRoaXMud2luTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uaW5nTWVzc2FnZVwiKTtcblxuICAgICAgICAvLyBTY29yZSBEaXNwbGF5c1xuICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIgLnBsYXllclNjb3JlXCIpO1xuICAgICAgICB0aGlzLm9wcG9uZW50U2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRTY29yZVwiKTtcblxuICAgICAgICAvLyBTaGlwcyB3aGljaCBhcmUgdG8gYmUgcGxhY2VkIGluIHRoZSBib2FyZCBpdHNlbGYuXG4gICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKVxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICAvLyBDcmVhdGVzIGEgMTB4MTAgZ3JpZFxuICAgIGNyZWF0ZUJvYXJkR3JpZChzaGlwUGxhY2luZ0dyaWQpIHtcbiAgICAgICAgbGV0IGJvYXJkR3JpZCA9IHNoaXBQbGFjaW5nR3JpZDtcbiAgICAgICAgYm9hcmRHcmlkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwicm93XCIsIGAke2l9YCk7XG4gICAgICAgICAgICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwiY29sXCIsIGAke2p9YCk7XG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmRHcmlkO1xuICAgIH1cblxuXG4gICAgc2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgYm9hcmRHcmlkQ2VsbHMgPSB0aGlzLnNoaXBQbGFjaW5nR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuXG4gICAgICAgIC8vIEV2ZW50IExpc3RlbmVycyBmb3IgZWFjaCBjZWxsIHRvIGNoZWNrIGhvdmVyIGFuZCBjbGljayBldmVudHNcbiAgICAgICAgLy8gYW5kIGNoYW5nZSBCYWNrZ3JvdW5kIGNvbG9ycyBhY2NvcmRpbmdseS5cbiAgICAgICAgYm9hcmRHcmlkQ2VsbHMuZm9yRWFjaCgoZ3JpZENlbGwpID0+IHtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHRoaXMuc2hpcFBsYWNpbmdIYW5kbGVyKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHRoaXMuc2hpcFBsYWNpbmdIYW5kbGVyKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuc2hpcFBsYWNpbmdIYW5kbGVyKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vcmllbnRhdGlvbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9yaWVudGF0aW9uSGFuZGxlcihlKSB7XG4gICAgICAgIGxldCBpY29uID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKGljb24uZ2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIikgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzaGlwUGxhY2luZ0hhbmRsZXIoZXZlbnQsIGJvYXJkR3JpZENlbGxzKSB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5jdXJyZW50U2hpcEljb24uZ2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRHcmlkQ2VsbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY3VycmVudEdyaWRDZWxsLnBhcmVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIGNvbnN0IHJvdyA9IGN1cnJlbnRHcmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgIGNvbnN0IGNvbCA9IGN1cnJlbnRHcmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGNvbnN0IGdhcENvb3JkcyA9IFtbLTEsIC0xXSwgWy0xLCAxXSwgWzEsIC0xXSwgWzEsIDFdLCBbMCwgLTFdLCBbLTEsIDBdLCBbMCwgMV0sIFsxLCAwXV07XG5cbiAgICAgICAgbGV0IG5leHRDZWxscyA9IFtdO1xuICAgICAgICBsZXQgc2hpcEdhcENlbGxzID0gW107XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBsZXQgY2VsbEF2YWlsYWJpbGl0eSA9IHRydWU7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IHRoaXMuc2hpcHN0b1BsYWNlWzBdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gY3VycmVudFNoaXAubGVuZ3RoO1xuXG4gICAgICAgIC8vIENyZWF0aW5nIGFuIGFycmF5IG9mIGNlbGxzIHRvIGJlIG1vZGlmaWVkLlxuICAgICAgICAvLyBBbHNvIGdldHRpbmcgdGhlaXIgY29vcmRpbmF0ZXMgaW4gb3RoZXIgYXJyYXkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2VsbDtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHtyb3d9XCJdW2NvbD1cIiR7K2NvbCArIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbcm93LCArY29sICsgaV0pO1xuXG4gICAgICAgICAgICAgICAgZ2FwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGNvb3JkWzBdfVwiXVtjb2w9XCIkeytjb2wgKyBpICsgY29vcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5wdXNoKGdhcENlbGwpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFsrcm93ICsgaSwgY29sXSk7XG5cbiAgICAgICAgICAgICAgICBnYXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHsrcm93ICsgaSArIGNvb3JkWzBdfVwiXVtjb2w9XCIkeytjb2wgKyBjb29yZFsxXX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEdhcENlbGxzLnB1c2goZ2FwQ2VsbCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHRDZWxscy5wdXNoKGN1cnJlbnRDZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoKCFjZWxsKSB8fCBjZWxsLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwic2hpcFwiIHx8IGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJnYXBcIikge1xuICAgICAgICAgICAgICAgIGNlbGxBdmFpbGFiaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JpZENlbGwucGFyZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGNlbGxBdmFpbGFiaWxpdHkpIHtcbiAgICAgICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJldmVudFwiLCBldmVudC50eXBlKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2hpcFwiKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcEdhcENlbGxzKTtcblxuICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsICYmIGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSAhPT0gXCJzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImdhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBQbGFjaW5nIFNoaXAgT2JqZWN0IGluIHRoZSBhY3R1YWwgMTB4MTAgR2FtZWJvYXJkIGFycmF5LlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGZpcnN0IHNoaXAgYWZ0ZXIgYmVpbmcgcGxhY2VkLlxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlLnNoaWZ0KCk7XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzdG9QbGFjZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2VzIHRoZSBzaGlwIGljb24gYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTaGlwSWNvbih0aGlzLnNoaXBzdG9QbGFjZVswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBjbG9uZSBvZiBlYWNoIGNlbGwgYW5kIHJlcGxhY2VzIHdpdGggb3JpZ2luYWwgb25lXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHJlbW92ZSBhbGwgdGhlIGV2ZW50IExpc3RlbmVycyBmcm9tIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gbm8gc2hpcHMgYXJlIGxlZnQgdG8gYmUgcGxhY2VkLiBcbiAgICAgICAgICAgICAgICAgICAgLy8gKFRoYW5rcyB0byBDaGF0R1BUIGZvciBoZWxwaW5nIDpwKVxuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsb25lID0gY2VsbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVN0YXJ0R2FtZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdXBkYXRlQ3VycmVudFNoaXBJY29uKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhY3RpdmF0ZVN0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNpbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWFcIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRHYW1lQnRuXCIpO1xuICAgICAgICBjb25zdCBtYWluR2FtZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiAuY29udGFpbmVyXCIpO1xuICAgICAgICBzdGFydEdhbWVCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcFBsYWNpbmdBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1haW5HYW1lU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlUGxheWVyR3JpZCgpOyAgICAvLyBUbyBwbGFjZSBzaGlwcyBvbiB0aGUgUGxheWVyIEdyaWRcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKCk7XG4gICAgICAgICAgICB0aGlzLnNob290T3Bwb25lbnRCb2FyZCgpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuXG5cbiAgICBwb3B1bGF0ZVBsYXllckdyaWQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckdyaWRDZWxscyA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMucGxheWVyR2FtZWJvYXJkLmdldEJvYXJkKCk7XG4gICAgICAgIHBsYXllckdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY2VsbC5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgICAgICBsZXQgY29sID0gY2VsbC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBib2FyZFtyb3ddW2NvbF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRFbGVtZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInNoaXBuYW1lXCIsIGAke2N1cnJlbnRFbGVtZW50LmdldE5hbWUoKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgc2hvb3RPcHBvbmVudEJvYXJkKCkge1xuICAgICAgICBjb25zdCBvcHBvbmVudEdyaWRDZWxscyA9IHRoaXMub3Bwb25lbnRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIG9wcG9uZW50R3JpZENlbGxzLmZvckVhY2goKGdyaWRDZWxsKSA9PiB7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB0aGlzLnBsYXllclNob290aW5nSGFuZGxlcihlKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHRoaXMucGxheWVyU2hvb3RpbmdIYW5kbGVyKGUpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHBsYXllclNob290aW5nSGFuZGxlcihldmVudCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMub3Bwb25lbnRHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJzaG90XCIpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcInNob3RcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgY3VycmVudEVsZW1lbnQgPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJzaGlwbmFtZVwiLCBgJHtjdXJyZW50RWxlbWVudC5nZXROYW1lKCl9YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUodGhpcy5vcHBvbmVudEdhbWVib2FyZCwgdGhpcy5wbGF5ZXIsIHRoaXMucGxheWVyU2NvcmUsIFtyb3csIGNvbF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob290UGxheWVyQm9hcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzaG9vdFBsYXllckJvYXJkKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkQ2VsbHMgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcHBvbmVudC5jaG9vc2VSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5wbGF5ZXJHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgICAgICBwbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpID09PSBgJHt4fWAgJiYgY2VsbC5nZXRBdHRyaWJ1dGUoXCJjb2xcIikgPT09IGAke3l9YCkge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2hvdFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSh0aGlzLnBsYXllckdhbWVib2FyZCwgdGhpcy5vcHBvbmVudCwgdGhpcy5vcHBvbmVudFNjb3JlLCBbeCwgeV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHVwZGF0ZVNjb3JlKGN1cnJlbnRHYW1lYm9hcmQsIGN1cnJlbnRQbGF5ZXIsIHNjb3JlQm9hcmQsIFtyb3csIGNvbF0pe1xuICAgICAgICBsZXQgYm9hcmQgPSBjdXJyZW50R2FtZWJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICAgICAgYm9hcmRbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGluZyBTY29yZSBvbiBib2FyZFxuICAgICAgICAgICAgY3VycmVudFBsYXllci5zY29yZSArPSAxO1xuICAgICAgICAgICAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQbGF5ZXIubmFtZX0ncyBTY29yZTogJHtjdXJyZW50UGxheWVyLnNjb3JlfWBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSBcIlwiO1xuICAgICAgICAvLyBFbmQgR2FtZVxuICAgICAgICBpZiAoY3VycmVudEdhbWVib2FyZC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMud2luTXNnLnRleHRDb250ZW50ID0gYEdhbWUgT3ZlciEgJHtjdXJyZW50UGxheWVyLm5hbWV9IFdpbi5gO1xuXG4gICAgICAgICAgICBjb25zdCBvcHBvbmVudEdyaWRDZWxscyA9IHRoaXMub3Bwb25lbnRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgICAgICBvcHBvbmVudEdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICBsZXQgY2xvbmUgPSBjZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBjZWxsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBjZWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlUmVzdGFydEdhbWVCdXR0b24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWN0aXZhdGVSZXN0YXJ0R2FtZUJ1dHRvbigpe1xuICAgICAgICBjb25zdCBzaGlwUGxhY2luZ0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYVwiKTtcbiAgICAgICAgY29uc3QgbWFpbkdhbWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gLmNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcmVzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnRHYW1lQnRuXCIpO1xuICAgICAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0R2FtZUJ0blwiKTtcblxuICAgICAgICByZXN0YXJ0R2FtZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICByZXN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcFBsYWNpbmdBcmVhLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIG1haW5HYW1lU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXN0YXJ0R2FtZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBzdGFydEdhbWVCdG4uZGlzYWJsZWQgPSBcInRydWVcIjtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHJlc3RhcnQoKXtcbiAgICAgICAgdGhpcy5zaGlwUGxhY2luZ0dyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBWaXN1YWwgZ3JpZHMgb24gc2NyZWVuXG4gICAgICAgIHRoaXMucGxheWVyR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkXCIpKTtcblxuICAgICAgICAvLyBHcmlkYm9hcmQgb2JqZWN0c1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQucmVzZXRCb2FyZCgpOyAvLyBjb21wdXRlciBCb2FyZFxuXG4gICAgICAgIC8vIFBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiUGxheWVyXCIpO1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbmV3IFBsYXllcihcIk9wcG9uZW50XCIpO1xuXG4gICAgICAgIHRoaXMud2luTXNnLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBTY29yZSBEaXNwbGF5c1xuICAgICAgICB0aGlzLnBsYXllclNjb3JlLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgU2NvcmU6IDBcIjtcbiAgICAgICAgdGhpcy5vcHBvbmVudFNjb3JlLnRleHRDb250ZW50ID0gXCJPcHBvZW5lbnQgU2NvcmU6IDBcIjtcblxuICAgICAgICAvLyBTaGlwcyB3aGljaCBhcmUgdG8gYmUgcGxhY2VkIGluIHRoZSBib2FyZCBpdHNlbGYuXG4gICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKVxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5zaGlwUGxhY2VtZW50KCk7XG4gICAgfVxufVxuXG5jb25zdCBkb20gPSBuZXcgRE9NKCk7XG5kb20uc2hpcFBsYWNlbWVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==