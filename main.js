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
    font-size: 2em;
    text-align: center;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,sBAAsB;IACtB,oBAAoB;IACpB,yBAAyB;IACzB,uBAAuB;IACvB,0BAA0B;IAC1B,mBAAmB;IACnB,sBAAsB;AAC1B;;;AAGA;IACI,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,gBAAgB;IACpB;AACJ;;AAEA,yBAAyB;AACzB;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,uBAAuB;IACvB,OAAO;IACP,WAAW;;IAEX;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;QACb,aAAa;QACb,YAAY;QACZ,sCAAsC;QACtC,6CAA6C;QAC7C,4CAA4C;IAChD;;IAEA;;QAEI,kCAAkC;IACtC;;IAEA;QACI,uCAAuC;IAC3C;;IAEA;QACI,qCAAqC;IACzC;;IAEA;QACI,8CAA8C;QAC9C,+CAA+C;IACnD;AACJ;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;IAEI,wCAAwC;IACxC,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB;mBACe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;;IAEI,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,aAAa;;IAEb;;QAEI,gBAAgB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;;IAEI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,sCAAsC;IACtC,qCAAqC;;IAErC;;QAEI,yBAAyB;QACzB,uCAAuC;QACvC,wCAAwC;IAC5C;;IAEA;QACI,uCAAuC;IAC3C;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,qCAAqC;IACzC;;AAEJ;;AAEA;IACI,wCAAwC;AAC5C","sourcesContent":["html,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    flex-direction: column;\n    --tea-green: #C9E4CA;\n    --cambridge-blue: #87BBA2;\n    --blue-munsell: #55828B;\n    --dark-slate-gray: #3B6064;\n    --charcoal: #364958;\n    box-sizing: border-box;\n}\n\n\nheader {\n    font-size: 2em;\n    text-align: center;\n    padding: 20px;\n    background-color: var(--charcoal);\n    color: white;\n    font-weight: bold;\n}\n\n\nmain {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n\n    .winningMessage{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-size: 1.6em;\n    }\n}\n\n/* SHIP PLACING SECTION */\n.shipPlacingArea {\n    display: flex;\n    flex-direction: column;\n    padding-top: 50px;\n    align-items: center;\n    gap: 32px;\n    position: absolute;\n    background-color: white;\n    flex: 1;\n    width: 100%;\n\n    .desc{\n        font-size: 1.8em;\n    }\n\n    .boardGrid {\n        display: grid;\n        height: 400px;\n        width: 400px;\n        grid-template-columns: repeat(10, 1fr);\n        border-left: 1px solid var(--dark-slate-gray);\n        border-top: 1px solid var(--dark-slate-gray);\n    }\n\n    .boardGrid>div,\n    .boardGrid>div[event=\"mouseout\"] {\n        background-color: var(--tea-green);\n    }\n\n    .boardGrid>div[event=\"mouseover\"] {\n        background-color: var(--cambridge-blue);\n    }\n\n    .boardGrid>div[type=\"ship\"] {\n        background-color: var(--blue-munsell);\n    }\n\n    .boardGrid>* {\n        border-right: 1px solid var(--dark-slate-gray);\n        border-bottom: 1px solid var(--dark-slate-gray);\n    }\n}\n\n.shipPlacingArea .carrierSelectionArea {\n    display: flex;\n    gap: 16px;\n}\n\n.shipPlacingArea .currentShip {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n    width: 200px;\n}\n\n.currentShipIcon {\n    display: flex;\n    border: 1px solid var(--charcoal);\n}\n\n.currentShipIcon>div {\n    height: 30px;\n    width: 30px;\n    background-color: var(--cambridge-blue);\n}\n\n.currentShipIcon[orientation=\"horizontal\"]>div+div {\n    border-left: 1px solid var(--charcoal);\n}\n\n.currentShipIcon[orientation=\"vertical\"]>div+div {\n    border-top: 1px solid var(--charcoal);\n}\n\n.startGameBtn,\n.restartGameBtn {\n    background-color: var(--dark-slate-gray);\n    border-radius: 5px;\n    border: none;\n    padding: 10px 20px;\n    /* height: 50px;\n    width: 150px; */\n    color: white;\n    font-size: 1.4rem;\n}\n\n.restartGameBtn{\n    display: none;\n    align-self: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.startGameBtn:disabled {\n    background-color: var(--cambridge-blue);\n    cursor: not-allowed;\n}\n\n.restartGameBtn:hover,\n.startGameBtn:enabled:hover {\n    background-color: var(--charcoal);\n    cursor: pointer;\n}\n\n.startGameBtn:enabled:active {\n    background-color: var(--dark-slate-gray);\n}\n\n/* MAIN GAME SECTION */\nmain .container {\n    display: none;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n\n    .opponentScore,\n    .playerScore{\n        font-size: 1.2em;\n    }\n}\n\n.container>div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n}\n\n.container .gridDesc {\n    font-size: 1.6rem;\n}\n\n\n.container .opponentGrid,\n.container .playerGrid {\n    display: grid;\n    height: 380px;\n    width: 380px;\n    grid-template-columns: repeat(10, 1fr);\n    border-left: 1px solid var(--charcoal);\n    border-top: 1px solid var(--charcoal);\n\n    div,\n    div[event=\"mouseout\"] {\n        background-color: #C9E4CA;\n        border-right: 1px solid var(--charcoal);\n        border-bottom: 1px solid var(--charcoal);\n    }\n\n    div[event=\"mouseover\"] {\n        background-color: var(--cambridge-blue);\n    }\n\n    div[type=\"ship\"][shot=\"true\"]{\n        background-color:crimson;\n    }\n\n    div[shot=\"true\"]{\n        background-color: var(--blue-munsell);\n    }\n\n}\n\n.container .playerGrid>div[type=\"ship\"] {\n    background-color: var(--dark-slate-gray);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxZQUFZLGFBQWEs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d0MsbUJBQW1CLFlBQVksb0JBQW9CO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsb0JBQW9COztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0EsMEJBQTBCLDJDQUFNO0FBQ2hDLDRCQUE0QiwyQ0FBTTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQUk7QUFDcEIsZ0JBQWdCLHVDQUFJO0FBQ3BCLGdCQUFnQix1Q0FBSTtBQUNwQixnQkFBZ0IsdUNBQUk7QUFDcEIsZ0JBQWdCLHVDQUFJO0FBQ3BCO0FBQ0E7OztBQUdBO0FBQ0Esc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLS10ZWEtZ3JlZW46ICNDOUU0Q0E7XG4gICAgLS1jYW1icmlkZ2UtYmx1ZTogIzg3QkJBMjtcbiAgICAtLWJsdWUtbXVuc2VsbDogIzU1ODI4QjtcbiAgICAtLWRhcmstc2xhdGUtZ3JheTogIzNCNjA2NDtcbiAgICAtLWNoYXJjb2FsOiAjMzY0OTU4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbm1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMnB4O1xuXG4gICAgLndpbm5pbmdNZXNzYWdle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIH1cbn1cblxuLyogU0hJUCBQTEFDSU5HIFNFQ1RJT04gKi9cbi5zaGlwUGxhY2luZ0FyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5kZXNje1xuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIH1cblxuICAgIC5ib2FyZEdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xuICAgIH1cblxuICAgIC5ib2FyZEdyaWQ+ZGl2LFxuICAgIC5ib2FyZEdyaWQ+ZGl2W2V2ZW50PVwibW91c2VvdXRcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWEtZ3JlZW4pO1xuICAgIH1cblxuICAgIC5ib2FyZEdyaWQ+ZGl2W2V2ZW50PVwibW91c2VvdmVyXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xuICAgIH1cblxuICAgIC5ib2FyZEdyaWQ+ZGl2W3R5cGU9XCJzaGlwXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tdW5zZWxsKTtcbiAgICB9XG5cbiAgICAuYm9hcmRHcmlkPioge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbiAgICB9XG59XG5cbi5zaGlwUGxhY2luZ0FyZWEgLmNhcnJpZXJTZWxlY3Rpb25BcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTZweDtcbn1cblxuLnNoaXBQbGFjaW5nQXJlYSAuY3VycmVudFNoaXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5jdXJyZW50U2hpcEljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xufVxuXG4uY3VycmVudFNoaXBJY29uPmRpdiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbWJyaWRnZS1ibHVlKTtcbn1cblxuLmN1cnJlbnRTaGlwSWNvbltvcmllbnRhdGlvbj1cImhvcml6b250YWxcIl0+ZGl2K2RpdiB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG59XG5cbi5jdXJyZW50U2hpcEljb25bb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXT5kaXYrZGl2IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xufVxuXG4uc3RhcnRHYW1lQnRuLFxuLnJlc3RhcnRHYW1lQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIC8qIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTUwcHg7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4ucmVzdGFydEdhbWVCdG57XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnN0YXJ0R2FtZUJ0bjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5yZXN0YXJ0R2FtZUJ0bjpob3Zlcixcbi5zdGFydEdhbWVCdG46ZW5hYmxlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN0YXJ0R2FtZUJ0bjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbn1cblxuLyogTUFJTiBHQU1FIFNFQ1RJT04gKi9cbm1haW4gLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLm9wcG9uZW50U2NvcmUsXG4gICAgLnBsYXllclNjb3Jle1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLmNvbnRhaW5lcj5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbn1cblxuLmNvbnRhaW5lciAuZ3JpZERlc2Mge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG5cbi5jb250YWluZXIgLm9wcG9uZW50R3JpZCxcbi5jb250YWluZXIgLnBsYXllckdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcblxuICAgIGRpdixcbiAgICBkaXZbZXZlbnQ9XCJtb3VzZW91dFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOUU0Q0E7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcbiAgICB9XG5cbiAgICBkaXZbZXZlbnQ9XCJtb3VzZW92ZXJcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XG4gICAgfVxuXG4gICAgZGl2W3R5cGU9XCJzaGlwXCJdW3Nob3Q9XCJ0cnVlXCJde1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmNyaW1zb247XG4gICAgfVxuXG4gICAgZGl2W3Nob3Q9XCJ0cnVlXCJde1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW11bnNlbGwpO1xuICAgIH1cblxufVxuXG4uY29udGFpbmVyIC5wbGF5ZXJHcmlkPmRpdlt0eXBlPVwic2hpcFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQ7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFdBQVc7O0lBRVg7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsNkNBQTZDO1FBQzdDLDRDQUE0QztJQUNoRDs7SUFFQTs7UUFFSSxrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSx1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxxQ0FBcUM7SUFDekM7O0lBRUE7UUFDSSw4Q0FBOEM7UUFDOUMsK0NBQStDO0lBQ25EO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBOztJQUVJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjttQkFDZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhOztJQUViOztRQUVJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHFDQUFxQzs7SUFFckM7O1FBRUkseUJBQXlCO1FBQ3pCLHVDQUF1QztRQUN2Qyx3Q0FBd0M7SUFDNUM7O0lBRUE7UUFDSSx1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxxQ0FBcUM7SUFDekM7O0FBRUo7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAtLXRlYS1ncmVlbjogI0M5RTRDQTtcXG4gICAgLS1jYW1icmlkZ2UtYmx1ZTogIzg3QkJBMjtcXG4gICAgLS1ibHVlLW11bnNlbGw6ICM1NTgyOEI7XFxuICAgIC0tZGFyay1zbGF0ZS1ncmF5OiAjM0I2MDY0O1xcbiAgICAtLWNoYXJjb2FsOiAjMzY0OTU4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzJweDtcXG5cXG4gICAgLndpbm5pbmdNZXNzYWdle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBTSElQIFBMQUNJTkcgU0VDVElPTiAqL1xcbi5zaGlwUGxhY2luZ0FyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLmRlc2N7XFxuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGhlaWdodDogNDAwcHg7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlLWdyYXkpO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQ+ZGl2LFxcbiAgICAuYm9hcmRHcmlkPmRpdltldmVudD1cXFwibW91c2VvdXRcXFwiXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWEtZ3JlZW4pO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZEdyaWQ+ZGl2W2V2ZW50PVxcXCJtb3VzZW92ZXJcXFwiXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkR3JpZD5kaXZbdHlwZT1cXFwic2hpcFxcXCJdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbXVuc2VsbCk7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkR3JpZD4qIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZS1ncmF5KTtcXG4gICAgfVxcbn1cXG5cXG4uc2hpcFBsYWNpbmdBcmVhIC5jYXJyaWVyU2VsZWN0aW9uQXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnNoaXBQbGFjaW5nQXJlYSAuY3VycmVudFNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5jdXJyZW50U2hpcEljb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxufVxcblxcbi5jdXJyZW50U2hpcEljb24+ZGl2IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xcbn1cXG5cXG4uY3VycmVudFNoaXBJY29uW29yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIl0+ZGl2K2RpdiB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xcbn1cXG5cXG4uY3VycmVudFNoaXBJY29uW29yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCJdPmRpditkaXYge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xcbn1cXG5cXG4uc3RhcnRHYW1lQnRuLFxcbi5yZXN0YXJ0R2FtZUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIC8qIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4OyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ucmVzdGFydEdhbWVCdG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5zdGFydEdhbWVCdG46ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW1icmlkZ2UtYmx1ZSk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5yZXN0YXJ0R2FtZUJ0bjpob3ZlcixcXG4uc3RhcnRHYW1lQnRuOmVuYWJsZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN0YXJ0R2FtZUJ0bjplbmFibGVkOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XFxufVxcblxcbi8qIE1BSU4gR0FNRSBTRUNUSU9OICovXFxubWFpbiAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG5cXG4gICAgLm9wcG9uZW50U2NvcmUsXFxuICAgIC5wbGF5ZXJTY29yZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG59XFxuXFxuLmNvbnRhaW5lcj5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5jb250YWluZXIgLmdyaWREZXNjIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcblxcbi5jb250YWluZXIgLm9wcG9uZW50R3JpZCxcXG4uY29udGFpbmVyIC5wbGF5ZXJHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAzODBweDtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxuXFxuICAgIGRpdixcXG4gICAgZGl2W2V2ZW50PVxcXCJtb3VzZW91dFxcXCJdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOUU0Q0E7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2hhcmNvYWwpO1xcbiAgICB9XFxuXFxuICAgIGRpdltldmVudD1cXFwibW91c2VvdmVyXFxcIl0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FtYnJpZGdlLWJsdWUpO1xcbiAgICB9XFxuXFxuICAgIGRpdlt0eXBlPVxcXCJzaGlwXFxcIl1bc2hvdD1cXFwidHJ1ZVxcXCJde1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpjcmltc29uO1xcbiAgICB9XFxuXFxuICAgIGRpdltzaG90PVxcXCJ0cnVlXFxcIl17XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW11bnNlbGwpO1xcbiAgICB9XFxuXFxufVxcblxcbi5jb250YWluZXIgLnBsYXllckdyaWQ+ZGl2W3R5cGU9XFxcInNoaXBcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUtZ3JheSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICByZXNldEJvYXJkKCl7XG4gICAgICAgIGxldCBuZXdCb2FyZCA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGogPSAxMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Qm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXdCb2FyZDtcbiAgICB9XG5cbiAgICBcbiAgICBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuXG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5ldmVyeSgocm93KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcm93LmV2ZXJ5KChjZWxsKSA9PiB0eXBlb2YgY2VsbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAgaGVhZENvb3JkcyBpcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGhlYWQgb2YgdGhlIHNoaXAuXG4gICAgLy8gIG9yaWVudGF0aW9uIGlzIGVpdGhlciBob3Jpem9udGFsIG9yIHZlcnRpY2FsLlxuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IHNoaXA7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICAgICAgbGV0IHNoaXBPYmogPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAodHlwZW9mIHNoaXBPYmogPT09IFwib2JqZWN0XCIpIHNoaXBPYmouaGl0KCk7XG4gICAgfVxuXG4gICAgcmFuZG9tbHlQbGFjZVNoaXBzKCkge1xuICAgICAgICAvLyBXYXN0ZWQgYSBsb3Qgb2YgdGltZSB0byB0aGluayBvbiBob3cgdG8gbWFrZSBpdCBhIHB1cmVseSByYW5kb20gcGxhY2VtZW50LlxuICAgICAgICAvLyBUaGVyZWZvcmUsIGFzc2lnbmluZyBhIHNlY3Rpb24gaW4gdGhlIGdyaWQgZm9yIGVhY2ggc2hpcC5cbiAgICAgICAgLy8gU2luY2UgSSBkb24ndCB3YW50IHRvIGRlYWwgd2l0aCBvdmVybGFwcyA7LTtcbiAgICAgICAgLy8gU28gaXQgaXMgc29tZXdoYXQgcmFuZG9tIGF0bGVhc3QgaW4gaXRzIG93biBzZWN0aW9uLlxuICAgICAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgICAgIFtuZXcgU2hpcChcImNhcnJpZXJcIiwgNSksIFtbMCwgMF0sIFs0LCA0XV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KSwgW1swLCA2XSwgWzQsIDldXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksIFtbNiwgMF0sIFs5LCAyXV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpLCBbWzYsIDRdLCBbOSwgNl1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcInBhdHJvbEJvYXRcIiwgMiksIFtbNiwgOF0sIFs5LCA5XV1dXG4gICAgICAgIF1cblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChbc2hpcCwgW3NlY3Rpb25TdGFydCwgc2VjdGlvbkVuZF1dKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IHNlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIGNvbnN0IFtlbmRYLCBlbmRZXSA9IHNlY3Rpb25FbmQ7XG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkcyA9IFtdO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7ICAvLyBIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFggKyAxKSkgKyBzdGFydFg7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFkgLSBzdGFydFkgKyAxIC0gc2hpcC5sZW5ndGgpKSArIHN0YXJ0WTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtzaGlwSGVhZFJvdywgc2hpcEhlYWRDb2wgKyBpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAxKSB7ICAvLyBWZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGxldCBzaGlwSGVhZFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRYIC0gc3RhcnRYICsgMSAtIHNoaXAubGVuZ3RoKSkgKyBzdGFydFg7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFkgLSBzdGFydFkgKyAxKSkgKyBzdGFydFk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbc2hpcEhlYWRSb3cgKyBpLCBzaGlwSGVhZENvbF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcENvb3Jkcy5mb3JFYWNoKChbeCwgeV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gc2hpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLm5vdFNob290ZWQgPSB0aGlzLnRvdGFsQ29vcmRzKCk7XG4gICAgfVxuXG5cbiAgICB0b3RhbENvb3JkcygpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cblxuICAgIC8vIEZvciBDb21wdXRlciB0byBwaWNrIGEgcmFuZG9tIGNvb3JkaW5hdGUgdG8gc2hvb3RcbiAgICBjaG9vc2VSYW5kb21Db29yZGluYXRlKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubm90U2hvb3RlZC5sZW5ndGgpO1xuICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5ub3RTaG9vdGVkW2luZGV4XTtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyIH0iLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSB0aGlzLnRpbWVzSGl0O1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuXG5cbmNsYXNzIERPTSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwSWNvblwiKTtcblxuICAgICAgICAvLyBWaXN1YWwgZ3JpZHMgb24gc2NyZWVuXG4gICAgICAgIHRoaXMucGxheWVyR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkXCIpKTtcblxuICAgICAgICAvLyBHcmlkYm9hcmQgb2JqZWN0c1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTsgLy8gY29tcHV0ZXIgQm9hcmRcblxuICAgICAgICAvLyBQbGF5ZXJzXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihcIlBsYXllclwiKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IG5ldyBQbGF5ZXIoXCJPcHBvbmVudFwiKTtcblxuICAgICAgICB0aGlzLndpbk1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmluZ01lc3NhZ2VcIik7XG5cbiAgICAgICAgLy8gU2NvcmUgRGlzcGxheXNcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJTY29yZVwiKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIgLm9wcG9uZW50U2NvcmVcIik7XG5cbiAgICAgICAgLy8gU2hpcHMgd2hpY2ggYXJlIHRvIGJlIHBsYWNlZCBpbiB0aGUgYm9hcmQgaXRzZWxmLlxuICAgICAgICB0aGlzLnNoaXBzdG9QbGFjZSA9IFtcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiY2FycmllclwiLCA1KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwiZGVzdHJveWVyXCIsIDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInBhdHJvbEJvYXRcIiwgMilcbiAgICAgICAgXVxuICAgIH1cblxuXG4gICAgLy8gQ3JlYXRlcyBhIDEweDEwIGdyaWRcbiAgICBjcmVhdGVCb2FyZEdyaWQoc2hpcFBsYWNpbmdHcmlkKSB7XG4gICAgICAgIGxldCBib2FyZEdyaWQgPSBzaGlwUGxhY2luZ0dyaWQ7XG4gICAgICAgIGJvYXJkR3JpZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcInJvd1wiLCBgJHtpfWApO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcImNvbFwiLCBgJHtqfWApO1xuICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkR3JpZDtcbiAgICB9XG5cblxuICAgIHNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkR3JpZENlbGxzID0gdGhpcy5zaGlwUGxhY2luZ0dyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcblxuICAgICAgICAvLyBFdmVudCBMaXN0ZW5lcnMgZm9yIGVhY2ggY2VsbCB0byBjaGVjayBob3ZlciBhbmQgY2xpY2sgZXZlbnRzXG4gICAgICAgIC8vIGFuZCBjaGFuZ2UgQmFja2dyb3VuZCBjb2xvcnMgYWNjb3JkaW5nbHkuXG4gICAgICAgIGJvYXJkR3JpZENlbGxzLmZvckVhY2goKGdyaWRDZWxsKSA9PiB7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB0aGlzLnNoaXBQbGFjaW5nSGFuZGxlcihlLCBib2FyZEdyaWRDZWxscykpO1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB0aGlzLnNoaXBQbGFjaW5nSGFuZGxlcihlLCBib2FyZEdyaWRDZWxscykpO1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLnNoaXBQbGFjaW5nSGFuZGxlcihlLCBib2FyZEdyaWRDZWxscykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRTaGlwSWNvbk9yaWVudGF0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBzaGlwUGxhY2luZ0hhbmRsZXIoZXZlbnQsIGJvYXJkR3JpZENlbGxzKSB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5jdXJyZW50U2hpcEljb24uZ2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRHcmlkQ2VsbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY3VycmVudEdyaWRDZWxsLnBhcmVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIGNvbnN0IHJvdyA9IGN1cnJlbnRHcmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgIGNvbnN0IGNvbCA9IGN1cnJlbnRHcmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGNvbnN0IGdhcENvb3JkcyA9IFtbLTEsIC0xXSwgWy0xLCAxXSwgWzEsIC0xXSwgWzEsIDFdLCBbMCwgLTFdLCBbLTEsIDBdLCBbMCwgMV0sIFsxLCAwXV07XG5cbiAgICAgICAgbGV0IG5leHRDZWxscyA9IFtdO1xuICAgICAgICBsZXQgc2hpcEdhcENlbGxzID0gW107XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBsZXQgY2VsbEF2YWlsYWJpbGl0eSA9IHRydWU7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IHRoaXMuc2hpcHN0b1BsYWNlWzBdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gY3VycmVudFNoaXAubGVuZ3RoO1xuXG4gICAgICAgIC8vIENyZWF0aW5nIGFuIGFycmF5IG9mIGNlbGxzIHRvIGJlIG1vZGlmaWVkLlxuICAgICAgICAvLyBBbHNvIGdldHRpbmcgdGhlaXIgY29vcmRpbmF0ZXMgaW4gb3RoZXIgYXJyYXkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2VsbDtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHtyb3d9XCJdW2NvbD1cIiR7K2NvbCArIGl9XCJdYCk7XG5cbiAgICAgICAgICAgICAgICBnYXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHsrcm93ICsgY29vcmRbMF19XCJdW2NvbD1cIiR7K2NvbCArIGkgKyBjb29yZFsxXX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEdhcENlbGxzLnB1c2goZ2FwQ2VsbCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGl9XCJdW2NvbD1cIiR7Y29sfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgZ2FwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGkgKyBjb29yZFswXX1cIl1bY29sPVwiJHsrY29sICsgY29vcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5wdXNoKGdhcENlbGwpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtyb3csICtjb2wgKyBpXSk7XG4gICAgICAgICAgICBuZXh0Q2VsbHMucHVzaChjdXJyZW50Q2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKCghY2VsbCkgfHwgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInNoaXBcIiB8fCBjZWxsLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwiZ2FwXCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsQXZhaWxhYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY3VycmVudEdyaWRDZWxsLnBhcmVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChjZWxsQXZhaWxhYmlsaXR5KSB7XG4gICAgICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZXZlbnRcIiwgZXZlbnQudHlwZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNoaXBcIikpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBHYXBDZWxscyk7XG5cbiAgICAgICAgICAgICAgICBzaGlwR2FwQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbCAmJiBjZWxsLmdldEF0dHJpYnV0ZShcInR5cGVcIikgIT09IFwic2hpcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJnYXBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gUGxhY2luZyBTaGlwIE9iamVjdCBpbiB0aGUgYWN0dWFsIDEweDEwIEdhbWVib2FyZCBhcnJheS5cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92aW5nIHRoZSBmaXJzdCBzaGlwIGFmdGVyIGJlaW5nIHBsYWNlZC5cbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzdG9QbGFjZS5zaGlmdCgpO1xuXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc3RvUGxhY2VbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlcyB0aGUgc2hpcCBpY29uIGFjY29yZGluZyB0byB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50U2hpcEljb24odGhpcy5zaGlwc3RvUGxhY2VbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGVzIGEgY2xvbmUgb2YgZWFjaCBjZWxsIGFuZCByZXBsYWNlcyB3aXRoIG9yaWdpbmFsIG9uZVxuICAgICAgICAgICAgICAgICAgICAvLyB0byByZW1vdmUgYWxsIHRoZSBldmVudCBMaXN0ZW5lcnMgZnJvbSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIG5vIHNoaXBzIGFyZSBsZWZ0IHRvIGJlIHBsYWNlZC4gXG4gICAgICAgICAgICAgICAgICAgIC8vIChUaGFua3MgdG8gQ2hhdEdQVCBmb3IgaGVscGluZyA6cClcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbG9uZSA9IGNlbGwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZSwgY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTdGFydEdhbWVCdXR0b24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoYW5nZUN1cnJlbnRTaGlwSWNvbk9yaWVudGF0aW9uKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgdXBkYXRlQ3VycmVudFNoaXBJY29uKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhY3RpdmF0ZVN0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNpbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWFcIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRHYW1lQnRuXCIpO1xuICAgICAgICBjb25zdCBtYWluR2FtZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiAuY29udGFpbmVyXCIpO1xuICAgICAgICBzdGFydEdhbWVCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcFBsYWNpbmdBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1haW5HYW1lU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TWFpbkdhbWUoKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cblxuXG4gICAgcG9wdWxhdGVQbGF5ZXJHcmlkKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkQ2VsbHMgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnBsYXllckdhbWVib2FyZC5nZXRCb2FyZCgpO1xuICAgICAgICBwbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzaGlwbmFtZVwiLCBgJHtjdXJyZW50RWxlbWVudC5nZXROYW1lKCl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHBvcHVsYXRlT3Bwb25lbnRHcmlkKCkge1xuICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcygpO1xuXG4gICAgICAgIGNvbnN0IG9wcG9uZW50R3JpZENlbGxzID0gdGhpcy5vcHBvbmVudEdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICAgICAgb3Bwb25lbnRHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzaGlwbmFtZVwiLCBgJHtjdXJyZW50RWxlbWVudC5nZXROYW1lKCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2hvb3RPcHBvbmVudEJvYXJkKCkge1xuICAgICAgICBjb25zdCBvcHBvbmVudEdyaWRDZWxscyA9IHRoaXMub3Bwb25lbnRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIG9wcG9uZW50R3JpZENlbGxzLmZvckVhY2goKGdyaWRDZWxsKSA9PiB7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB0aGlzLnBsYXllclNob290aW5nSGFuZGxlcihlKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHRoaXMucGxheWVyU2hvb3RpbmdIYW5kbGVyKGUpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHBsYXllclNob290aW5nSGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJzaG90XCIpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcInNob3RcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2wgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKHRoaXMub3Bwb25lbnRHYW1lYm9hcmQsIHRoaXMucGxheWVyLCB0aGlzLnBsYXllclNjb3JlLCBbcm93LCBjb2xdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdFBsYXllckJvYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJldmVudFwiLCBldmVudC50eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvb3RQbGF5ZXJCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZENlbGxzID0gdGhpcy5wbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3Bwb25lbnQuY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMucGxheWVyR2FtZWJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICAgICAgcGxheWVyR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKSA9PT0gYCR7eH1gICYmIGNlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpID09PSBgJHt5fWApIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInNob3RcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwic2hpcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUodGhpcy5wbGF5ZXJHYW1lYm9hcmQsIHRoaXMub3Bwb25lbnQsIHRoaXMub3Bwb25lbnRTY29yZSwgW3gsIHldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICB1cGRhdGVTY29yZShjdXJyZW50R2FtZWJvYXJkLCBjdXJyZW50UGxheWVyLCBzY29yZUJvYXJkLCBbcm93LCBjb2xdKXtcbiAgICAgICAgbGV0IGJvYXJkID0gY3VycmVudEdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gICAgICAgIGJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgLy8gVXBkYXRpbmcgU2NvcmUgb24gYm9hcmRcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIuc2NvcmUgKz0gMTtcbiAgICAgICAgICAgIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyLm5hbWV9J3MgU2NvcmU6ICR7Y3VycmVudFBsYXllci5zY29yZX1gXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gXCJcIjtcbiAgICAgICAgLy8gRW5kIEdhbWVcbiAgICAgICAgaWYgKGN1cnJlbnRHYW1lYm9hcmQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLndpbk1zZy50ZXh0Q29udGVudCA9IGBHYW1lIE92ZXIhICR7Y3VycmVudFBsYXllci5uYW1lfSBXaW4uYDtcblxuICAgICAgICAgICAgY29uc3Qgb3Bwb25lbnRHcmlkQ2VsbHMgPSB0aGlzLm9wcG9uZW50R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICAgICAgb3Bwb25lbnRHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgbGV0IGNsb25lID0gY2VsbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2VsbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZSwgY2VsbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVJlc3RhcnRHYW1lQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFjdGl2YXRlUmVzdGFydEdhbWVCdXR0b24oKXtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNpbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWFcIik7XG4gICAgICAgIGNvbnN0IG1haW5HYW1lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluIC5jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHJlc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0R2FtZUJ0blwiKTtcbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydEdhbWVCdG5cIik7XG5cbiAgICAgICAgcmVzdGFydEdhbWVCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgcmVzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBQbGFjaW5nQXJlYS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBtYWluR2FtZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmVzdGFydEdhbWVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgc3RhcnRHYW1lQnRuLmRpc2FibGVkID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFBsYWNlbWVudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHJlc3RhcnQoKXtcbiAgICAgICAgdGhpcy5zaGlwUGxhY2luZ0dyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBWaXN1YWwgZ3JpZHMgb24gc2NyZWVuXG4gICAgICAgIHRoaXMucGxheWVyR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkXCIpKTtcblxuICAgICAgICAvLyBHcmlkYm9hcmQgb2JqZWN0c1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQucmVzZXRCb2FyZCgpOyAvLyBjb21wdXRlciBCb2FyZFxuXG4gICAgICAgIC8vIFBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiUGxheWVyXCIpO1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbmV3IFBsYXllcihcIk9wcG9uZW50XCIpO1xuXG4gICAgICAgIHRoaXMud2luTXNnLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBTY29yZSBEaXNwbGF5c1xuICAgICAgICB0aGlzLnBsYXllclNjb3JlLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgU2NvcmU6IDBcIjtcbiAgICAgICAgdGhpcy5vcHBvbmVudFNjb3JlLnRleHRDb250ZW50ID0gXCJPcHBvZW5lbnQgU2NvcmU6IDBcIjtcblxuICAgICAgICAvLyBTaGlwcyB3aGljaCBhcmUgdG8gYmUgcGxhY2VkIGluIHRoZSBib2FyZCBpdHNlbGYuXG4gICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKVxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICBzdGFydE1haW5HYW1lKCkge1xuICAgICAgICB0aGlzLnBvcHVsYXRlUGxheWVyR3JpZCgpOyAgICAvLyBUbyBwbGFjZSBzaGlwcyBvbiB0aGUgUGxheWVyIEdyaWRcbiAgICAgICAgdGhpcy5wb3B1bGF0ZU9wcG9uZW50R3JpZCgpOyAgLy8gVG8gcGxhY2Ugc2hpcHMgb24gdGhlIE9wcG9uZW50IEdyaWQgICAgXG4gICAgICAgIHRoaXMuc2hvb3RPcHBvbmVudEJvYXJkKCk7XG4gICAgfVxufVxuXG5jb25zdCBkb20gPSBuZXcgRE9NKCk7XG5kb20uc2hpcFBsYWNlbWVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==