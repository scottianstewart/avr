module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "5NG/":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./utils/contentfulEntries.js
const space = "78502feruk7h";
const accessToken = "iqT-rcjbgXGHS2gbx3awxAavd-SRInlMxKaLshN5Tb4";

const client = __webpack_require__("5NG/").createClient({
  space: space,
  accessToken: accessToken
});

async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
/* harmony default export */ var contentfulEntries = ({
  fetchEntries
});
// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: "jsx-2770333678",
      children: "footer"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "2770333678",
      children: ["footer.jsx-2770333678{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]
    })]
  });
}
// CONCATENATED MODULE: ./components/RecipeCard.js




function RecipeCard({
  date,
  image,
  title
}) {
  let {
    file,
    description
  } = image;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "jsx-3811281701" + " " + "recipe-card",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      alt: description,
      src: `https:${file.url}`,
      className: "jsx-3811281701"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "jsx-3811281701",
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "jsx-3811281701",
      children: description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "3811281701",
      children: [".recipe-card.jsx-3811281701{margin:10px;width:300px;cursor:pointer;}", "img.jsx-3811281701{height:300px;width:300px;object-fit:cover;}"]
    })]
  });
}

/* harmony default export */ var components_RecipeCard = (RecipeCard);
// CONCATENATED MODULE: ./pages/index.js







function Home({
  recipes
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "jsx-2696295362" + " " + "container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        className: "jsx-2696295362",
        children: "A.V.R"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-2696295362"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: "jsx-2696295362",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "jsx-2696295362" + " " + "recipe-grid",
        children: recipes.map(p => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_RecipeCard, {
            image: p.recipeImage.fields,
            title: p.title
          }, p.title);
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "331317765",
      children: [".container.jsx-2696295362{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "main.jsx-2696295362{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".recipe-grid.jsx-2696295362{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "2422562094",
      children: ["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu, Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}", "*{box-sizing:border-box;}"]
    })]
  });
}
async function getStaticProps() {
  const res = await fetchEntries();
  const recipes = await res.map(p => {
    return p.fields;
  });
  return {
    props: {
      recipes
    }
  };
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });