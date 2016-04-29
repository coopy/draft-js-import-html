'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateFromHTML;

var _draftJsImportElement = require('draft-js-import-element');

var _parseHTML = require('./parseHTML');

var _parseHTML2 = _interopRequireDefault(_parseHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stateFromHTML(html, options) {
  var element = (0, _parseHTML2.default)(html);
  return (0, _draftJsImportElement.stateFromElement)(element, options);
}