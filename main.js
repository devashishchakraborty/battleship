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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,sBAAsB;IACtB,oBAAoB;IACpB,yBAAyB;IACzB,uBAAuB;IACvB,0BAA0B;IAC1B,mBAAmB;IACnB,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,cAAc;IACd,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,gBAAgB;IACpB;AACJ;;AAEA,yBAAyB;AACzB;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,uBAAuB;IACvB,OAAO;IACP,WAAW;;IAEX;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;QACb,aAAa;QACb,YAAY;QACZ,sCAAsC;QACtC,6CAA6C;QAC7C,4CAA4C;IAChD;;IAEA;;QAEI,kCAAkC;IACtC;;IAEA;QACI,uCAAuC;IAC3C;;IAEA;QACI,qCAAqC;IACzC;;IAEA;QACI,8CAA8C;QAC9C,+CAA+C;IACnD;AACJ;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;IAEI,wCAAwC;IACxC,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB;mBACe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;;IAEI,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,aAAa;;IAEb;;QAEI,gBAAgB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;;IAEI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,sCAAsC;IACtC,qCAAqC;;IAErC;;QAEI,yBAAyB;QACzB,uCAAuC;QACvC,wCAAwC;IAC5C;;IAEA;QACI,uCAAuC;IAC3C;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,qCAAqC;IACzC;;AAEJ;;AAEA;IACI,wCAAwC;AAC5C","sourcesContent":["html,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    flex-direction: column;\n    --tea-green: #C9E4CA;\n    --cambridge-blue: #87BBA2;\n    --blue-munsell: #55828B;\n    --dark-slate-gray: #3B6064;\n    --charcoal: #364958;\n    box-sizing: border-box;\n}\n\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    font-size: 2em;\n    padding: 20px;\n    background-color: var(--charcoal);\n    color: white;\n    font-weight: bold;\n}\n\n\nmain {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n\n    .winningMessage{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-size: 1.6em;\n    }\n}\n\n/* SHIP PLACING SECTION */\n.shipPlacingArea {\n    display: flex;\n    flex-direction: column;\n    padding-top: 50px;\n    align-items: center;\n    gap: 32px;\n    position: absolute;\n    background-color: white;\n    flex: 1;\n    width: 100%;\n\n    .desc{\n        font-size: 1.8em;\n    }\n\n    .boardGrid {\n        display: grid;\n        height: 400px;\n        width: 400px;\n        grid-template-columns: repeat(10, 1fr);\n        border-left: 1px solid var(--dark-slate-gray);\n        border-top: 1px solid var(--dark-slate-gray);\n    }\n\n    .boardGrid>div,\n    .boardGrid>div[event=\"mouseout\"] {\n        background-color: var(--tea-green);\n    }\n\n    .boardGrid>div[event=\"mouseover\"] {\n        background-color: var(--cambridge-blue);\n    }\n\n    .boardGrid>div[type=\"ship\"] {\n        background-color: var(--blue-munsell);\n    }\n\n    .boardGrid>* {\n        border-right: 1px solid var(--dark-slate-gray);\n        border-bottom: 1px solid var(--dark-slate-gray);\n    }\n}\n\n.shipPlacingArea .carrierSelectionArea {\n    display: flex;\n    gap: 16px;\n}\n\n.shipPlacingArea .currentShip {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n    width: 200px;\n}\n\n.currentShipIcon {\n    display: flex;\n    border: 1px solid var(--charcoal);\n}\n\n.currentShipIcon>div {\n    height: 30px;\n    width: 30px;\n    background-color: var(--cambridge-blue);\n}\n\n.currentShipIcon[orientation=\"horizontal\"]>div+div {\n    border-left: 1px solid var(--charcoal);\n}\n\n.currentShipIcon[orientation=\"vertical\"]>div+div {\n    border-top: 1px solid var(--charcoal);\n}\n\n.startGameBtn,\n.restartGameBtn {\n    background-color: var(--dark-slate-gray);\n    border-radius: 5px;\n    border: none;\n    padding: 10px 20px;\n    /* height: 50px;\n    width: 150px; */\n    color: white;\n    font-size: 1.4rem;\n}\n\n.restartGameBtn{\n    display: none;\n    align-self: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.startGameBtn:disabled {\n    background-color: var(--cambridge-blue);\n    cursor: not-allowed;\n}\n\n.restartGameBtn:hover,\n.startGameBtn:enabled:hover {\n    background-color: var(--charcoal);\n    cursor: pointer;\n}\n\n.startGameBtn:enabled:active {\n    background-color: var(--dark-slate-gray);\n}\n\n/* MAIN GAME SECTION */\nmain .container {\n    display: none;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n\n    .opponentScore,\n    .playerScore{\n        font-size: 1.2em;\n    }\n}\n\n.container>div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n}\n\n.container .gridDesc {\n    font-size: 1.6rem;\n}\n\n\n.container .opponentGrid,\n.container .playerGrid {\n    display: grid;\n    height: 380px;\n    width: 380px;\n    grid-template-columns: repeat(10, 1fr);\n    border-left: 1px solid var(--charcoal);\n    border-top: 1px solid var(--charcoal);\n\n    div,\n    div[event=\"mouseout\"] {\n        background-color: #C9E4CA;\n        border-right: 1px solid var(--charcoal);\n        border-bottom: 1px solid var(--charcoal);\n    }\n\n    div[event=\"mouseover\"] {\n        background-color: var(--cambridge-blue);\n    }\n\n    div[type=\"ship\"][shot=\"true\"]{\n        background-color:crimson;\n    }\n\n    div[shot=\"true\"]{\n        background-color: var(--blue-munsell);\n    }\n\n}\n\n.container .playerGrid>div[type=\"ship\"] {\n    background-color: var(--dark-slate-gray);\n}"],"sourceRoot":""}]);
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

        this.changeCurrentShipIconOrientation();
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

                gapCoords.forEach((coord) => {
                    const gapCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + coord[0]}"][col="${+col + i + coord[1]}"]`);
                    shipGapCells.push(gapCell);
                })

            } else if (orientation === "vertical") {
                currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i}"][col="${col}"]`);

                gapCoords.forEach((coord) => {
                    const gapCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i + coord[0]}"][col="${+col + coord[1]}"]`);
                    shipGapCells.push(gapCell);
                })
            }
            coordinates.push([row, +col + i]);
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


    changeCurrentShipIconOrientation() {
        this.currentShipIcon.addEventListener("click", () => {
            if (this.currentShipIcon.getAttribute("orientation") == "horizontal") {
                this.currentShipIcon.style.flexDirection = "column";
                this.currentShipIcon.setAttribute("orientation", "vertical");
            } else {
                this.currentShipIcon.style.flexDirection = "row";
                this.currentShipIcon.setAttribute("orientation", "horizontal");
            }
        })
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
            this.startMainGame();
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


    populateOpponentGrid() {
        this.opponentGameboard.randomlyPlaceShips();

        const opponentGridCells = this.opponentGrid.querySelectorAll("div");
        const board = this.opponentGameboard.getBoard();

        opponentGridCells.forEach((cell) => {
            let row = cell.getAttribute("row");
            let col = cell.getAttribute("col");
            let currentElement = board[row][col];
            if (typeof currentElement === "object") {
                cell.setAttribute("type", "ship");
                cell.setAttribute("shipname", `${currentElement.getName()}`);
            }
        });
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
        if (!event.target.getAttribute("shot")) {
            if (event.type === "click") {
                event.target.setAttribute("shot", "true");
                if (event.target.getAttribute("type") === "ship") {
                    let row = event.target.getAttribute("row");
                    let col = event.target.getAttribute("col");
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
            this.shipPlacement();
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
    }


    startMainGame() {
        this.populatePlayerGrid();    // To place ships on the Player Grid
        this.populateOpponentGrid();  // To place ships on the Opponent Grid    
        this.shootOpponentBoard();
    }
}

const dom = new DOM();
dom.shipPlacement();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUs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UztBQUNUOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQixZQUFZLG9CQUFvQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG9CQUFvQjs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBLDBCQUEwQiwyQ0FBTTtBQUNoQyw0QkFBNEIsMkNBQU07O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUFJO0FBQ3BCLGdCQUFnQix1Q0FBSTtBQUNwQixnQkFBZ0IsdUNBQUk7QUFDcEIsZ0JBQWdCLHVDQUFJO0FBQ3BCLGdCQUFnQix1Q0FBSTtBQUNwQjtBQUNBOzs7QUFHQTtBQUNBLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC0tdGVhLWdyZWVuOiAjQzlFNENBO1xuICAgIC0tY2FtYnJpZGdlLWJsdWU6ICM4N0JCQTI7XG4gICAgLS1ibHVlLW11bnNlbGw6ICM1NTgyOEI7XG4gICAgLS1kYXJrLXNsYXRlLWdyYXk6ICMzQjYwNjQ7XG4gICAgLS1jaGFyY29hbDogIzM2NDk1ODtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzJweDtcblxuICAgIC53aW5uaW5nTWVzc2FnZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICB9XG59XG5cbi8qIFNISVAgUExBQ0lORyBTRUNUSU9OICovXG4uc2hpcFBsYWNpbmdBcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICB9XG5cbiAgICAuYm9hcmRHcmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbiAgICB9XG5cbiAgICAuYm9hcmRHcmlkPmRpdixcbiAgICAuYm9hcmRHcmlkPmRpdltldmVudD1cIm1vdXNlb3V0XCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhLWdyZWVuKTtcbiAgICB9XG5cbiAgICAuYm9hcmRHcmlkPmRpdltldmVudD1cIm1vdXNlb3ZlclwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbWJyaWRnZS1ibHVlKTtcbiAgICB9XG5cbiAgICAuYm9hcmRHcmlkPmRpdlt0eXBlPVwic2hpcFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbXVuc2VsbCk7XG4gICAgfVxuXG4gICAgLmJvYXJkR3JpZD4qIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XG4gICAgfVxufVxuXG4uc2hpcFBsYWNpbmdBcmVhIC5jYXJyaWVyU2VsZWN0aW9uQXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uY3VycmVudFNoaXBJY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcbn1cblxuLmN1cnJlbnRTaGlwSWNvbj5kaXYge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XG59XG5cbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJdPmRpditkaXYge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xufVxuXG4uY3VycmVudFNoaXBJY29uW29yaWVudGF0aW9uPVwidmVydGljYWxcIl0+ZGl2K2RpdiB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcbn1cblxuLnN0YXJ0R2FtZUJ0bixcbi5yZXN0YXJ0R2FtZUJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAvKiBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDE1MHB4OyAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLnJlc3RhcnRHYW1lQnRue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5zdGFydEdhbWVCdG46ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbWJyaWRnZS1ibHVlKTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucmVzdGFydEdhbWVCdG46aG92ZXIsXG4uc3RhcnRHYW1lQnRuOmVuYWJsZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGFydEdhbWVCdG46ZW5hYmxlZDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XG59XG5cbi8qIE1BSU4gR0FNRSBTRUNUSU9OICovXG5tYWluIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5vcHBvbmVudFNjb3JlLFxuICAgIC5wbGF5ZXJTY29yZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG5cbi5jb250YWluZXI+ZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi5jb250YWluZXIgLmdyaWREZXNjIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuXG4uY29udGFpbmVyIC5vcHBvbmVudEdyaWQsXG4uY29udGFpbmVyIC5wbGF5ZXJHcmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMzgwcHg7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG5cbiAgICBkaXYsXG4gICAgZGl2W2V2ZW50PVwibW91c2VvdXRcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlFNENBO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG4gICAgfVxuXG4gICAgZGl2W2V2ZW50PVwibW91c2VvdmVyXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xuICAgIH1cblxuICAgIGRpdlt0eXBlPVwic2hpcFwiXVtzaG90PVwidHJ1ZVwiXXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpjcmltc29uO1xuICAgIH1cblxuICAgIGRpdltzaG90PVwidHJ1ZVwiXXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tdW5zZWxsKTtcbiAgICB9XG5cbn1cblxuLmNvbnRhaW5lciAucGxheWVyR3JpZD5kaXZbdHlwZT1cInNoaXBcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsY0FBYztJQUNkLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztJQUVUO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxXQUFXOztJQUVYO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLDZDQUE2QztRQUM3Qyw0Q0FBNEM7SUFDaEQ7O0lBRUE7O1FBRUksa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0kscUNBQXFDO0lBQ3pDOztJQUVBO1FBQ0ksOENBQThDO1FBQzlDLCtDQUErQztJQUNuRDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTs7SUFFSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7bUJBQ2U7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTs7SUFFYjs7UUFFSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxxQ0FBcUM7O0lBRXJDOztRQUVJLHlCQUF5QjtRQUN6Qix1Q0FBdUM7UUFDdkMsd0NBQXdDO0lBQzVDOztJQUVBO1FBQ0ksdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0kscUNBQXFDO0lBQ3pDOztBQUVKOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLS10ZWEtZ3JlZW46ICNDOUU0Q0E7XFxuICAgIC0tY2FtYnJpZGdlLWJsdWU6ICM4N0JCQTI7XFxuICAgIC0tYmx1ZS1tdW5zZWxsOiAjNTU4MjhCO1xcbiAgICAtLWRhcmstc2xhdGUtZ3JheTogIzNCNjA2NDtcXG4gICAgLS1jaGFyY29hbDogIzM2NDk1ODtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMycHg7XFxuXFxuICAgIC53aW5uaW5nTWVzc2FnZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XFxuICAgIH1cXG59XFxuXFxuLyogU0hJUCBQTEFDSU5HIFNFQ1RJT04gKi9cXG4uc2hpcFBsYWNpbmdBcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC5kZXNje1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgfVxcblxcbiAgICAuYm9hcmRHcmlkIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG4gICAgfVxcblxcbiAgICAuYm9hcmRHcmlkPmRpdixcXG4gICAgLmJvYXJkR3JpZD5kaXZbZXZlbnQ9XFxcIm1vdXNlb3V0XFxcIl0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhLWdyZWVuKTtcXG4gICAgfVxcblxcbiAgICAuYm9hcmRHcmlkPmRpdltldmVudD1cXFwibW91c2VvdmVyXFxcIl0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQ+ZGl2W3R5cGU9XFxcInNoaXBcXFwiXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW11bnNlbGwpO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQ+KiB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XFxuICAgIH1cXG59XFxuXFxuLnNoaXBQbGFjaW5nQXJlYSAuY2FycmllclNlbGVjdGlvbkFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY3VycmVudFNoaXBJY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xcbn1cXG5cXG4uY3VycmVudFNoaXBJY29uPmRpdiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbWJyaWRnZS1ibHVlKTtcXG59XFxuXFxuLmN1cnJlbnRTaGlwSWNvbltvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCJdPmRpditkaXYge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXG59XFxuXFxuLmN1cnJlbnRTaGlwSWNvbltvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiXT5kaXYrZGl2IHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXG59XFxuXFxuLnN0YXJ0R2FtZUJ0bixcXG4ucmVzdGFydEdhbWVCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnJlc3RhcnRHYW1lQnRue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uc3RhcnRHYW1lQnRuOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ucmVzdGFydEdhbWVCdG46aG92ZXIsXFxuLnN0YXJ0R2FtZUJ0bjplbmFibGVkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdGFydEdhbWVCdG46ZW5hYmxlZDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xcbn1cXG5cXG4vKiBNQUlOIEdBTUUgU0VDVElPTiAqL1xcbm1haW4gLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuXFxuICAgIC5vcHBvbmVudFNjb3JlLFxcbiAgICAucGxheWVyU2NvcmV7XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxufVxcblxcbi5jb250YWluZXI+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ncmlkRGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIC5vcHBvbmVudEdyaWQsXFxuLmNvbnRhaW5lciAucGxheWVyR3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMzgwcHg7XFxuICAgIHdpZHRoOiAzODBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xcblxcbiAgICBkaXYsXFxuICAgIGRpdltldmVudD1cXFwibW91c2VvdXRcXFwiXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlFNENBO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXG4gICAgfVxcblxcbiAgICBkaXZbZXZlbnQ9XFxcIm1vdXNlb3ZlclxcXCJdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbWJyaWRnZS1ibHVlKTtcXG4gICAgfVxcblxcbiAgICBkaXZbdHlwZT1cXFwic2hpcFxcXCJdW3Nob3Q9XFxcInRydWVcXFwiXXtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjtcXG4gICAgfVxcblxcbiAgICBkaXZbc2hvdD1cXFwidHJ1ZVxcXCJde1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tdW5zZWxsKTtcXG4gICAgfVxcblxcbn1cXG5cXG4uY29udGFpbmVyIC5wbGF5ZXJHcmlkPmRpdlt0eXBlPVxcXCJzaGlwXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgXVxuICAgIH1cblxuXG4gICAgcmVzZXRCb2FyZCgpe1xuICAgICAgICBsZXQgbmV3Qm9hcmQgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMTA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICByb3cucHVzaChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0JvYXJkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3Qm9hcmQ7XG4gICAgfVxuXG4gICAgXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cblxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZXZlcnkoKHJvdykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJvdy5ldmVyeSgoY2VsbCkgPT4gdHlwZW9mIGNlbGwgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gIGhlYWRDb29yZHMgaXMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgIC8vICBvcmllbnRhdGlvbiBpcyBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbC5cbiAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoW3JvdywgY29sXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgICAgIGxldCBzaGlwT2JqID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaGlwT2JqID09PSBcIm9iamVjdFwiKSBzaGlwT2JqLmhpdCgpO1xuICAgIH1cblxuICAgIHJhbmRvbWx5UGxhY2VTaGlwcygpIHtcbiAgICAgICAgLy8gV2FzdGVkIGEgbG90IG9mIHRpbWUgdG8gdGhpbmsgb24gaG93IHRvIG1ha2UgaXQgYSBwdXJlbHkgcmFuZG9tIHBsYWNlbWVudC5cbiAgICAgICAgLy8gVGhlcmVmb3JlLCBhc3NpZ25pbmcgYSBzZWN0aW9uIGluIHRoZSBncmlkIGZvciBlYWNoIHNoaXAuXG4gICAgICAgIC8vIFNpbmNlIEkgZG9uJ3Qgd2FudCB0byBkZWFsIHdpdGggb3ZlcmxhcHMgOy07XG4gICAgICAgIC8vIFNvIGl0IGlzIHNvbWV3aGF0IHJhbmRvbSBhdGxlYXN0IGluIGl0cyBvd24gc2VjdGlvbi5cbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLCBbWzAsIDBdLCBbNCwgNF1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcImJhdHRsZXNoaXBcIiwgNCksIFtbMCwgNl0sIFs0LCA5XV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwiZGVzdHJveWVyXCIsIDMpLCBbWzYsIDBdLCBbOSwgMl1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSwgW1s2LCA0XSwgWzksIDZdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJwYXRyb2xCb2F0XCIsIDIpLCBbWzYsIDhdLCBbOSwgOV1dXVxuICAgICAgICBdXG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoW3NoaXAsIFtzZWN0aW9uU3RhcnQsIHNlY3Rpb25FbmRdXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgICAgIGNvbnN0IFtzdGFydFgsIHN0YXJ0WV0gPSBzZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICBjb25zdCBbZW5kWCwgZW5kWV0gPSBzZWN0aW9uRW5kO1xuICAgICAgICAgICAgbGV0IHNoaXBDb29yZHMgPSBbXTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gMCkgeyAgLy8gSG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGxldCBzaGlwSGVhZFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRYIC0gc3RhcnRYICsgMSkpICsgc3RhcnRYO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwSGVhZENvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRZIC0gc3RhcnRZICsgMSAtIHNoaXAubGVuZ3RoKSkgKyBzdGFydFk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbc2hpcEhlYWRSb3csIHNoaXBIZWFkQ29sICsgaV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gMSkgeyAgLy8gVmVydGljYWxcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWCAtIHN0YXJ0WCArIDEgLSBzaGlwLmxlbmd0aCkpICsgc3RhcnRYO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwSGVhZENvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRZIC0gc3RhcnRZICsgMSkpICsgc3RhcnRZO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3NoaXBIZWFkUm93ICsgaSwgc2hpcEhlYWRDb2xdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBDb29yZHMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IHNoaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBHYW1lYm9hcmQgfSIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy50b3RhbENvb3JkcygpO1xuICAgIH1cblxuXG4gICAgdG90YWxDb29yZHMoKSB7XG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG5cbiAgICAvLyBGb3IgQ29tcHV0ZXIgdG8gcGljayBhIHJhbmRvbSBjb29yZGluYXRlIHRvIHNob290XG4gICAgY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vdFNob290ZWQubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMubm90U2hvb3RlZFtpbmRleF07XG4gICAgICAgIHRoaXMubm90U2hvb3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9IiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwJztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcblxuXG5jbGFzcyBET00ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNoaXBQbGFjaW5nR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWRcIikpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhIC5jdXJyZW50U2hpcEljb25cIik7XG5cbiAgICAgICAgLy8gVmlzdWFsIGdyaWRzIG9uIHNjcmVlblxuICAgICAgICB0aGlzLnBsYXllckdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAucGxheWVyR3JpZFwiKSk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIgLm9wcG9uZW50R3JpZFwiKSk7XG5cbiAgICAgICAgLy8gR3JpZGJvYXJkIG9iamVjdHNcbiAgICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7IC8vIGNvbXB1dGVyIEJvYXJkXG5cbiAgICAgICAgLy8gUGxheWVyc1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIik7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBuZXcgUGxheWVyKFwiT3Bwb25lbnRcIik7XG5cbiAgICAgICAgdGhpcy53aW5Nc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5pbmdNZXNzYWdlXCIpO1xuXG4gICAgICAgIC8vIFNjb3JlIERpc3BsYXlzXG4gICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAucGxheWVyU2NvcmVcIik7XG4gICAgICAgIHRoaXMub3Bwb25lbnRTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5vcHBvbmVudFNjb3JlXCIpO1xuXG4gICAgICAgIC8vIFNoaXBzIHdoaWNoIGFyZSB0byBiZSBwbGFjZWQgaW4gdGhlIGJvYXJkIGl0c2VsZi5cbiAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2UgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcChcImNhcnJpZXJcIiwgNSksXG4gICAgICAgICAgICBuZXcgU2hpcChcImJhdHRsZXNoaXBcIiwgNCksXG4gICAgICAgICAgICBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJwYXRyb2xCb2F0XCIsIDIpXG4gICAgICAgIF1cbiAgICB9XG5cblxuICAgIC8vIENyZWF0ZXMgYSAxMHgxMCBncmlkXG4gICAgY3JlYXRlQm9hcmRHcmlkKHNoaXBQbGFjaW5nR3JpZCkge1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gc2hpcFBsYWNpbmdHcmlkO1xuICAgICAgICBib2FyZEdyaWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgYCR7aX1gKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgYCR7an1gKTtcbiAgICAgICAgICAgICAgICBib2FyZEdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZEdyaWQ7XG4gICAgfVxuXG5cbiAgICBzaGlwUGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBib2FyZEdyaWRDZWxscyA9IHRoaXMuc2hpcFBsYWNpbmdHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJzIGZvciBlYWNoIGNlbGwgdG8gY2hlY2sgaG92ZXIgYW5kIGNsaWNrIGV2ZW50c1xuICAgICAgICAvLyBhbmQgY2hhbmdlIEJhY2tncm91bmQgY29sb3JzIGFjY29yZGluZ2x5LlxuICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpO1xuICAgIH1cblxuXG4gICAgc2hpcFBsYWNpbmdIYW5kbGVyKGV2ZW50LCBib2FyZEdyaWRDZWxscykge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50R3JpZENlbGwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBjb25zdCByb3cgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBjb25zdCBnYXBDb29yZHMgPSBbWy0xLCAtMV0sIFstMSwgMV0sIFsxLCAtMV0sIFsxLCAxXSwgWzAsIC0xXSwgWy0xLCAwXSwgWzAsIDFdLCBbMSwgMF1dO1xuXG4gICAgICAgIGxldCBuZXh0Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IHNoaXBHYXBDZWxscyA9IFtdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IGNlbGxBdmFpbGFiaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzdG9QbGFjZVswXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aDtcblxuICAgICAgICAvLyBDcmVhdGluZyBhbiBhcnJheSBvZiBjZWxscyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgLy8gQWxzbyBnZXR0aW5nIHRoZWlyIGNvb3JkaW5hdGVzIGluIG90aGVyIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudENlbGw7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7cm93fVwiXVtjb2w9XCIkeytjb2wgKyBpfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgZ2FwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGNvb3JkWzBdfVwiXVtjb2w9XCIkeytjb2wgKyBpICsgY29vcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5wdXNoKGdhcENlbGwpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICAgICAgICAgIGdhcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpICsgY29vcmRbMF19XCJdW2NvbD1cIiR7K2NvbCArIGNvb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwR2FwQ2VsbHMucHVzaChnYXBDZWxsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbcm93LCArY29sICsgaV0pO1xuICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmICgoIWNlbGwpIHx8IGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJzaGlwXCIgfHwgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImdhcFwiKSB7XG4gICAgICAgICAgICAgICAgY2VsbEF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY2VsbEF2YWlsYWJpbGl0eSkge1xuICAgICAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwR2FwQ2VsbHMpO1xuXG4gICAgICAgICAgICAgICAgc2hpcEdhcENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBcInNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZ2FwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIFBsYWNpbmcgU2hpcCBPYmplY3QgaW4gdGhlIGFjdHVhbCAxMHgxMCBHYW1lYm9hcmQgYXJyYXkuXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyB0aGUgZmlyc3Qgc2hpcCBhZnRlciBiZWluZyBwbGFjZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2Uuc2hpZnQoKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHN0b1BsYWNlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZXMgdGhlIHNoaXAgaWNvbiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFNoaXBJY29uKHRoaXMuc2hpcHN0b1BsYWNlWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIGNsb25lIG9mIGVhY2ggY2VsbCBhbmQgcmVwbGFjZXMgd2l0aCBvcmlnaW5hbCBvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gcmVtb3ZlIGFsbCB0aGUgZXZlbnQgTGlzdGVuZXJzIGZyb20gaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBubyBzaGlwcyBhcmUgbGVmdCB0byBiZSBwbGFjZWQuIFxuICAgICAgICAgICAgICAgICAgICAvLyAoVGhhbmtzIHRvIENoYXRHUFQgZm9yIGhlbHBpbmcgOnApXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xvbmUgPSBjZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlU3RhcnRHYW1lQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKSA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnNldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIsIFwidmVydGljYWxcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnNldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHVwZGF0ZUN1cnJlbnRTaGlwSWNvbihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWN0aXZhdGVTdGFydEdhbWVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjaW5nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhXCIpO1xuICAgICAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0R2FtZUJ0blwiKTtcbiAgICAgICAgY29uc3QgbWFpbkdhbWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gLmNvbnRhaW5lclwiKTtcbiAgICAgICAgc3RhcnRHYW1lQnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBQbGFjaW5nQXJlYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBtYWluR2FtZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgdGhpcy5zdGFydE1haW5HYW1lKCk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG5cblxuICAgIHBvcHVsYXRlUGxheWVyR3JpZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZENlbGxzID0gdGhpcy5wbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5wbGF5ZXJHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVyR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEVsZW1lbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2hpcG5hbWVcIiwgYCR7Y3VycmVudEVsZW1lbnQuZ2V0TmFtZSgpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBwb3B1bGF0ZU9wcG9uZW50R3JpZCgpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZC5yYW5kb21seVBsYWNlU2hpcHMoKTtcblxuICAgICAgICBjb25zdCBvcHBvbmVudEdyaWRDZWxscyA9IHRoaXMub3Bwb25lbnRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5vcHBvbmVudEdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gICAgICAgIG9wcG9uZW50R3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEVsZW1lbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2hpcG5hbWVcIiwgYCR7Y3VycmVudEVsZW1lbnQuZ2V0TmFtZSgpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNob290T3Bwb25lbnRCb2FyZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRHcmlkQ2VsbHMgPSB0aGlzLm9wcG9uZW50R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICBvcHBvbmVudEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSkpO1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB0aGlzLnBsYXllclNob290aW5nSGFuZGxlcihlKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMucGxheWVyU2hvb3RpbmdIYW5kbGVyKGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwic2hvdFwiKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJzaG90XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwic2hpcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSh0aGlzLm9wcG9uZW50R2FtZWJvYXJkLCB0aGlzLnBsYXllciwgdGhpcy5wbGF5ZXJTY29yZSwgW3JvdywgY29sXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RQbGF5ZXJCb2FyZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwiZXZlbnRcIiwgZXZlbnQudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob290UGxheWVyQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckdyaWRDZWxscyA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9wcG9uZW50LmNob29zZVJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnBsYXllckdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gICAgICAgIHBsYXllckdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJyb3dcIikgPT09IGAke3h9YCAmJiBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKSA9PT0gYCR7eX1gKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzaG90XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKHRoaXMucGxheWVyR2FtZWJvYXJkLCB0aGlzLm9wcG9uZW50LCB0aGlzLm9wcG9uZW50U2NvcmUsIFt4LCB5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgdXBkYXRlU2NvcmUoY3VycmVudEdhbWVib2FyZCwgY3VycmVudFBsYXllciwgc2NvcmVCb2FyZCwgW3JvdywgY29sXSl7XG4gICAgICAgIGxldCBib2FyZCA9IGN1cnJlbnRHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgICAgICBib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0aW5nIFNjb3JlIG9uIGJvYXJkXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyLnNjb3JlICs9IDE7XG4gICAgICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllci5uYW1lfSdzIFNjb3JlOiAke2N1cnJlbnRQbGF5ZXIuc2NvcmV9YFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGJvYXJkW3Jvd11bY29sXSA9IFwiXCI7XG4gICAgICAgIC8vIEVuZCBHYW1lXG4gICAgICAgIGlmIChjdXJyZW50R2FtZWJvYXJkLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhpcy53aW5Nc2cudGV4dENvbnRlbnQgPSBgR2FtZSBPdmVyISAke2N1cnJlbnRQbGF5ZXIubmFtZX0gV2luLmA7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wcG9uZW50R3JpZENlbGxzID0gdGhpcy5vcHBvbmVudEdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wcG9uZW50R3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIGxldCBjbG9uZSA9IGNlbGwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGNlbGwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVSZXN0YXJ0R2FtZUJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhY3RpdmF0ZVJlc3RhcnRHYW1lQnV0dG9uKCl7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjaW5nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhXCIpO1xuICAgICAgICBjb25zdCBtYWluR2FtZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiAuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCByZXN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydEdhbWVCdG5cIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRHYW1lQnRuXCIpO1xuXG4gICAgICAgIHJlc3RhcnRHYW1lQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHJlc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwUGxhY2luZ0FyZWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgbWFpbkdhbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJlc3RhcnRHYW1lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXN0YXJ0KCl7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVmlzdWFsIGdyaWRzIG9uIHNjcmVlblxuICAgICAgICB0aGlzLnBsYXllckdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAucGxheWVyR3JpZFwiKSk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIgLm9wcG9uZW50R3JpZFwiKSk7XG5cbiAgICAgICAgLy8gR3JpZGJvYXJkIG9iamVjdHNcbiAgICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTsgLy8gY29tcHV0ZXIgQm9hcmRcblxuICAgICAgICAvLyBQbGF5ZXJzXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihcIlBsYXllclwiKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IG5ldyBQbGF5ZXIoXCJPcHBvbmVudFwiKTtcblxuICAgICAgICB0aGlzLndpbk1zZy50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgLy8gU2NvcmUgRGlzcGxheXNcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZS50ZXh0Q29udGVudCA9IFwiUGxheWVyIFNjb3JlOiAwXCI7XG4gICAgICAgIHRoaXMub3Bwb25lbnRTY29yZS50ZXh0Q29udGVudCA9IFwiT3Bwb2VuZW50IFNjb3JlOiAwXCI7XG5cbiAgICAgICAgLy8gU2hpcHMgd2hpY2ggYXJlIHRvIGJlIHBsYWNlZCBpbiB0aGUgYm9hcmQgaXRzZWxmLlxuICAgICAgICB0aGlzLnNoaXBzdG9QbGFjZSA9IFtcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiY2FycmllclwiLCA1KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiZGVzdHJveWVyXCIsIDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInBhdHJvbEJvYXRcIiwgMilcbiAgICAgICAgXVxuICAgIH1cblxuXG4gICAgc3RhcnRNYWluR2FtZSgpIHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVBsYXllckdyaWQoKTsgICAgLy8gVG8gcGxhY2Ugc2hpcHMgb24gdGhlIFBsYXllciBHcmlkXG4gICAgICAgIHRoaXMucG9wdWxhdGVPcHBvbmVudEdyaWQoKTsgIC8vIFRvIHBsYWNlIHNoaXBzIG9uIHRoZSBPcHBvbmVudCBHcmlkICAgIFxuICAgICAgICB0aGlzLnNob290T3Bwb25lbnRCb2FyZCgpO1xuICAgIH1cbn1cblxuY29uc3QgZG9tID0gbmV3IERPTSgpO1xuZG9tLnNoaXBQbGFjZW1lbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=