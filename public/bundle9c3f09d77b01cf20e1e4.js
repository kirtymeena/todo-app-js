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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

header {
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.5rem;
  padding-block: 0.5rem;
  border-bottom: 2px solid #dfe0e1;
  background-color: white;
  z-index: 100;
}

.logo {
  color: rgb(119, 119, 119);
}

.nav__search {
  width: 30%;
  height: 3rem;
}

#search {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  padding-inline: 1rem;
  font-size: 1.2rem;
  background-color: #f5f5f5;
  color: #737373;
}

#search:focus {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid rgba(212, 212, 212, 0.941);
  outline: none;
  background-color: white;
}

main {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding-top: 6rem;
}

aside {
  flex: 1;
  height: 20rem;
  position: fixed;
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 1rem;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
}
aside > section {
  cursor: pointer;
}

.task__list {
  flex: 4;
  margin-left: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-block: 1rem;
}

.selected__nav {
  background-color: #feefc3;
  width: 100%;
  text-align: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 1rem;
}
#Notes,
#Trash {
  width: 100%;
  text-align: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 1rem;
  transition: 0.2s background ease-in;
  text-decoration: none;
  color: #292524;
}
#Notes:hover,
#Trash:hover {
  background-color: rgb(230, 230, 230);
}

#Notes.selected__nav:hover,
#Trash.selected__nav:hover {
  background-color: #feefc3;
}

.add__wrapper {
  border: 2px solid rgb(212, 212, 212);
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.5rem;
}

#title {
  height: 2.2rem;
  font-size: 17px;
  border: none;
  outline: none;
  padding-inline: 0.5rem;
  display: none;
}

#task__text {
  font-size: 17px;
  resize: none;
  border: none;
  outline: none;
  padding-inline: 0.5rem;
  white-space: pre-wrap;

  padding-block: 0.5rem;
  overflow: hidden;
  resize: none;
}

.add__note {
  width: 100%;
  border-top: 1px solid #dfe0e1;
}
#addNote {
  position: relative;
  float: left;
  width: 6rem;
  padding: 1rem;
  background-color: #feefc3;
  border: 2px solid #feefc3;
  outline: none;
  cursor: pointer;
  margin-top: 0.5rem;
  border-radius: 8px;
  font-size: 17;
}

#addNote:hover {
  background-color: #ffe8a2;
}
.notes {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  padding-inline: 4rem;
  /* justify-content: center; */
}
.trash {
  display: none;
}

.trash__notes {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-inline: 4rem;
}

.msg {
  display: block;
  padding-block: 1rem;
  padding-inline: 4rem;
  text-align: center;
}

.msg > button {
  cursor: pointer;
  border: 2px solid red;
}

.notesContainer {
  border: 1px solid #dfe0e1;
  height: 0%;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 8px;
  cursor: default;
  user-select: none;
}
.notesContainer:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.title {
  color: #292524;
  font-size: 17px;
  font-weight: bold;
  opacity: 0.9;
}

.description {
  font-size: 17px;
  color: #292524;
  opacity: 0.8;
  white-space: pre-wrap;
  width: 100%;
}

.footer {
  width: 30px;
  height: 30px;
  cursor: default;
}

/* .overlay,header, main{
  background-color: #dfe0e1;
  opacity: 0.5;
  border:2px solid red;
  
} */

.overlay {
  position: absolute;
  width: 100%;
  /* border: 2px solid yellow; */
  height: 100%;
}
.notes__container {
  width: 100%;
  min-height: 100vh;
  max-height:100%;
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
}
.notes__modal {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  padding: 1rem;
  width: 30rem;
  height: 30rem;
  overflow: auto;
  margin: 0 auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 2rem;
}

.note__title {
  font-size: 17px;
  font-weight: 500;
}

.note__description {
  font-size: 16px;
  color: #292524;
  opacity: 0.8;
  white-space: pre-wrap;
  width: 100%;
}

.notes__option{
  float:right;
  bottom:0;
  /* border:2px solid red; */
  height:100%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1.5rem;\r\n  padding-block: 0.5rem;\r\n  border-bottom: 2px solid #dfe0e1;\r\n  background-color: white;\r\n  z-index: 100;\r\n}\r\n\r\n.logo {\r\n  color: rgb(119, 119, 119);\r\n}\r\n\r\n.nav__search {\r\n  width: 30%;\r\n  height: 3rem;\r\n}\r\n\r\n#search {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 8px;\r\n  border: 1px solid #f5f5f5;\r\n  padding-inline: 1rem;\r\n  font-size: 1.2rem;\r\n  background-color: #f5f5f5;\r\n  color: #737373;\r\n}\r\n\r\n#search:focus {\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  border: 1px solid rgba(212, 212, 212, 0.941);\r\n  outline: none;\r\n  background-color: white;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 3rem;\r\n  padding-top: 6rem;\r\n}\r\n\r\naside {\r\n  flex: 1;\r\n  height: 20rem;\r\n  position: fixed;\r\n  width: 15rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  padding-block: 1rem;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\naside > section {\r\n  cursor: pointer;\r\n}\r\n\r\n.task__list {\r\n  flex: 4;\r\n  margin-left: 16rem;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  padding-block: 1rem;\r\n}\r\n\r\n.selected__nav {\r\n  background-color: #feefc3;\r\n  width: 100%;\r\n  text-align: center;\r\n  border-top-right-radius: 25px;\r\n  border-bottom-right-radius: 25px;\r\n  padding: 1rem;\r\n}\r\n#Notes,\r\n#Trash {\r\n  width: 100%;\r\n  text-align: center;\r\n  border-top-right-radius: 25px;\r\n  border-bottom-right-radius: 25px;\r\n  padding: 1rem;\r\n  transition: 0.2s background ease-in;\r\n  text-decoration: none;\r\n  color: #292524;\r\n}\r\n#Notes:hover,\r\n#Trash:hover {\r\n  background-color: rgb(230, 230, 230);\r\n}\r\n\r\n#Notes.selected__nav:hover,\r\n#Trash.selected__nav:hover {\r\n  background-color: #feefc3;\r\n}\r\n\r\n.add__wrapper {\r\n  border: 2px solid rgb(212, 212, 212);\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 8px;\r\n  gap: 1rem;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#title {\r\n  height: 2.2rem;\r\n  font-size: 17px;\r\n  border: none;\r\n  outline: none;\r\n  padding-inline: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n#task__text {\r\n  font-size: 17px;\r\n  resize: none;\r\n  border: none;\r\n  outline: none;\r\n  padding-inline: 0.5rem;\r\n  white-space: pre-wrap;\r\n\r\n  padding-block: 0.5rem;\r\n  overflow: hidden;\r\n  resize: none;\r\n}\r\n\r\n.add__note {\r\n  width: 100%;\r\n  border-top: 1px solid #dfe0e1;\r\n}\r\n#addNote {\r\n  position: relative;\r\n  float: left;\r\n  width: 6rem;\r\n  padding: 1rem;\r\n  background-color: #feefc3;\r\n  border: 2px solid #feefc3;\r\n  outline: none;\r\n  cursor: pointer;\r\n  margin-top: 0.5rem;\r\n  border-radius: 8px;\r\n  font-size: 17;\r\n}\r\n\r\n#addNote:hover {\r\n  background-color: #ffe8a2;\r\n}\r\n.notes {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  padding-inline: 4rem;\r\n  /* justify-content: center; */\r\n}\r\n.trash {\r\n  display: none;\r\n}\r\n\r\n.trash__notes {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  padding-inline: 4rem;\r\n}\r\n\r\n.msg {\r\n  display: block;\r\n  padding-block: 1rem;\r\n  padding-inline: 4rem;\r\n  text-align: center;\r\n}\r\n\r\n.msg > button {\r\n  cursor: pointer;\r\n  border: 2px solid red;\r\n}\r\n\r\n.notesContainer {\r\n  border: 1px solid #dfe0e1;\r\n  height: 0%;\r\n  width: 15rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding-inline: 1rem;\r\n  padding-block: 0.5rem;\r\n  border-radius: 8px;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n.notesContainer:hover {\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n.title {\r\n  color: #292524;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  opacity: 0.9;\r\n}\r\n\r\n.description {\r\n  font-size: 17px;\r\n  color: #292524;\r\n  opacity: 0.8;\r\n  white-space: pre-wrap;\r\n  width: 100%;\r\n}\r\n\r\n.footer {\r\n  width: 30px;\r\n  height: 30px;\r\n  cursor: default;\r\n}\r\n\r\n/* .overlay,header, main{\r\n  background-color: #dfe0e1;\r\n  opacity: 0.5;\r\n  border:2px solid red;\r\n  \r\n} */\r\n\r\n.overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  /* border: 2px solid yellow; */\r\n  height: 100%;\r\n}\r\n.notes__container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  max-height:100%;\r\n  position: absolute;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.notes__modal {\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  border-radius: 8px;\r\n  padding: 1rem;\r\n  width: 30rem;\r\n  height: 30rem;\r\n  overflow: auto;\r\n  margin: 0 auto;\r\n  z-index: 1000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: white;\r\n  gap: 2rem;\r\n}\r\n\r\n.note__title {\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n}\r\n\r\n.note__description {\r\n  font-size: 16px;\r\n  color: #292524;\r\n  opacity: 0.8;\r\n  white-space: pre-wrap;\r\n  width: 100%;\r\n}\r\n\r\n.notes__option{\r\n  float:right;\r\n  bottom:0;\r\n  /* border:2px solid red; */\r\n  height:100%;\r\n}"],"sourceRoot":""}]);
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


// render all notes
(function () {
  var addTitle = document.getElementById("title");
  var addText = document.getElementById("task__text");
  var addNoteBtn = document.getElementById("addNote");
  var notes = document.querySelector(".notes");
  var main = document.querySelector('main');
  var addWrapper = document.querySelector(".add__wrapper");
  var sideNav = document.querySelector("aside");
  var navItemNotes = document.getElementById("Notes");
  var navItemTrash = document.getElementById("Trash");
  var trashDiv = document.querySelector(".trash");
  var msg = document.querySelector(".msg");
  var trashNotes = document.querySelector(".trash__notes");
  var notedModal = document.querySelector(".notes__modal");
  var notesContainer = document.querySelector(".notes__container");
  var overlay = document.querySelector(".overlay");
  var container = document.querySelector(".container");
  var selectedNoteId = '';
  var selectedNote;
  var notesArr = [];
  var trash = [];

  // auto resize textbox
  addText.addEventListener("keydown", function () {
    autoResize();
  });
  var autoResize = function autoResize() {
    addText.style.height = "auto";
    addText.style.height = addText.scrollHeight + 'px';
  };

  // display title input on click
  addWrapper.addEventListener("click", function () {
    addTitle.style.display = "block";
    addText.style.minHeight = "10rem";
  });

  // hide title input box when clicked away
  main.addEventListener("click", function (e) {
    console.log(e.target);
    addTitle.style.minHeight = "auto";
  });

  // render All notes
  var renderNotes = function renderNotes() {
    var getNotes = localStorage.getItem("notes");
    notesContainer.style.display = "none";
    overlay.style.overflow = "auto";
    overlay.style.backgroundColor = "white";
    container.style.opacity = "1";
    var data = JSON.parse(getNotes);
    console.log(data);
    notes.innerHTML = "";
    if (notesArr.length === 0 && data.length > 0) {
      notesArr = data;
      console.log(notesArr);
    }
    data.forEach(function (note) {
      var notesWrapper = document.createElement("div");
      var title = document.createElement("p");
      var description = document.createElement("div");
      var footer = document.createElement("div");
      notesWrapper.classList.add("notesContainer");
      title.classList.add("title");
      footer.classList.add("footer");
      description.classList.add("description");
      title.innerHTML = note.title;
      console.log(JSON.parse(note.description).length);
      description.innerHTML = JSON.parse(note.description).length > 300 ? "<p> ".concat(JSON.parse(note.description).slice(0, 300), "... </p>") : "<p>".concat(JSON.parse(note.description), "</p>");
      footer.style.opacity = "0.7";
      footer.style.width = "100%";
      footer.innerHTML = "<div>\n                <lord-icon\n                src=\"https://cdn.lordicon.com/gsqxdxog.json\"\n                trigger=\"hover\"\n                colors=\"primary:black,secondary:black\"\n                class=\"delete\"\n                id=".concat(note.id, "\n                style=\"width:25px;height:25px;cursor:pointer\">\n                </lord-icon>\n               \n                </div>\n                <div>").concat(new Date(note.id).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }), "</div>\n                ");
      footer.style.display = "flex";
      footer.style.fontSize = "12px";
      footer.style.alignItems = "center";
      footer.style.justifyContent = "space-between";
      footer.setAttribute("id", note.id);
      notesWrapper.setAttribute('id', note.id);
      notesWrapper.appendChild(title);
      notesWrapper.appendChild(description);
      notesWrapper.appendChild(footer);
      notes.append(notesWrapper);
    });
  };

  // add notes logic
  var addNotes = function addNotes(e) {
    var title = addTitle.value;
    var text = addText.value;
    console.log(text);
    if (localStorage.getItem("notes") !== null) {
      notesArr = JSON.parse(localStorage.getItem("notes"));
    }
    if (text.length > 0 || title.length > 0) {
      notesArr.push({
        id: new Date().toISOString(),
        title: title,
        description: JSON.stringify(text)
      });
    } else {
      alert("Cannot add empty note");
      return;
    }
    localStorage.setItem("notes", JSON.stringify(notesArr));
    addTitle.value = "";
    addText.value = "";
    console.log();
    if (localStorage.getItem("notes")) {
      renderNotes();
    }
  };
  addNoteBtn.addEventListener('click', addNotes);

  // select sidenav options
  sideNav.addEventListener('click', function (e) {
    var item = document.getElementById(e.target.id);
    if (e.target.id === "Notes") {
      item.setAttribute("class", "selected__nav");
      navItemTrash.removeAttribute("class");
      notes.style.display = "flex";
      addWrapper.style.display = "flex";
      trashDiv.style.display = "none";
      navItemNotes.setAttribute("href", "#Notes");
    }
    if (e.target.id === "Trash") {
      item.setAttribute("class", "selected__nav");
      navItemNotes.removeAttribute("class");
      notes.style.display = "none";
      addWrapper.style.display = "none";
      trashDiv.style.display = "block";
      navItemTrash.setAttribute("href", "#Trash");
      renderTrash();
    }
  });
  // delete logic

  notes.addEventListener("click", function (e) {
    var oldTrash = JSON.parse(localStorage.getItem("trash"));
    if (oldTrash !== null && oldTrash.length > 0) {
      trash = oldTrash;
    }
    console.log(e.target);
    if (e.target.tagName === "P") {
      if (e.target.className === "title") {
        selectedNoteId = e.target.parentElement.id;
      } else {
        selectedNoteId = e.target.parentElement.parentElement.id;
      }
    } else if (e.target.className === "notesContainer") {
      selectedNoteId = e.target.id;
    } else if (e.target.tagName === "DIV") {
      selectedNoteId = e.target.parentElement.id;
    } else {
      selectedNoteId = e.target.id;
    }
    if (selectedNoteId && e.target.className !== "delete") {
      viewNote();
    }
    if (e.target.className === "delete") {
      var getNotes = localStorage.getItem("notes");
      var data = JSON.parse(getNotes);
      deleteNote(data, e);
    }
  });
  var deleteNote = function deleteNote(data, e) {
    var Id;
    var newData = data.filter(function (note) {
      console.log(e);
      if (e.target !== undefined) {
        Id = e.target.id;
      } else {
        Id = e.id;
      }
      if (note.id === Id) {
        console.log("from delete");
        trash.push(note);
      }
      if (note.id !== Id) {
        return note;
      }
    });
    localStorage.setItem("notes", JSON.stringify(newData));
    localStorage.setItem("trash", JSON.stringify(trash));
    console.log(trash);
    renderNotes();
  };
  var viewNote = function viewNote() {
    var data = JSON.parse(localStorage.getItem("notes"));
    var noteTitle = document.querySelector(".note__title");
    var noteDesc = document.querySelector(".note__description");
    var noteOption = document.querySelector(".notes__option");
    var deleteBtn = document.querySelector(".delete");
    selectedNote = data.filter(function (note) {
      return note.id === selectedNoteId;
    });
    console.log(selectedNote);
    if (selectedNote) {
      notesContainer.style.display = "flex";
      overlay.style.backgroundColor = "#f3f4f6";
      overlay.style.overflow = "hidden";
      container.style.opacity = "0.5";
      noteTitle.innerHTML = "<p>".concat(selectedNote[0].title, "</p>");
      noteDesc.innerHTML = "<p>".concat(JSON.parse(selectedNote[0].description), "</p>");
      noteOption.setAttribute("id", selectedNote[0].id);
    }
  };
  notesContainer.addEventListener("click", function (e) {
    if (e.target.className === "notes__container") {
      notesContainer.style.display = "none";
      overlay.style.overflow = "auto";
      overlay.style.backgroundColor = "white";
      container.style.opacity = "1";
    }
    if (e.target.className === "delete") {
      console.log(e.target);
      deleteNote(JSON.parse(localStorage.getItem("notes")), e.target.parentElement.parentElement);
    }
  });

  // display deleted notes
  var renderTrash = function renderTrash() {
    trashDiv.innerHTML = "";
    trashNotes.innerHTML = "";
    msg.innerHTML = '<i>Notes in Trash will be deleted after 24 hour</i> <button style="margin-left:2rem;padding:0.5rem;background:none;border:none;outline:none;color:#1e3a8a;cursor:pointer">Clear trash</button>';
    trashDiv.append(msg);
    var trashArr = JSON.parse(localStorage.getItem("trash"));
    trashArr !== null && trashArr.forEach(function (note) {
      var notesWrapper = document.createElement("div");
      var title = document.createElement("p");
      var description = document.createElement("div");
      notesWrapper.classList.add("notesContainer");
      title.classList.add("title");
      description.classList.add("description");
      title.innerHTML = note.title;
      console.log(JSON.parse(note.description).length);
      description.innerHTML = JSON.parse(note.description).length > 300 ? "<p> ".concat(JSON.parse(note.description).slice(0, 300), "... </p>") : "<p>".concat(JSON.parse(note.description), "</p>");
      notesWrapper.setAttribute('id', note.id);
      notesWrapper.appendChild(title);
      notesWrapper.appendChild(description);
      trashNotes.append(notesWrapper);
      trashDiv.append(trashNotes);
    });
  };
  msg.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      var response = confirm("Are you sure you want to do clear trash?");
      if (response) {
        localStorage.removeItem("trash");
        renderTrash();
        e.preventDefault();
      }
    }
  });
  if (JSON.parse(localStorage.getItem("notes") !== null && localStorage.getItem("notes")).length > 0) {
    renderNotes();
  }
  if (new Date() === new Date(new Date().getTime() + 24 * 60 * 60 * 1000)) {
    localStorage.removeItem("trash");
  }
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle9c3f09d77b01cf20e1e4.js.map