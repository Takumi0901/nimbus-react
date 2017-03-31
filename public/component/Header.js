"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "c-bar c-bar--medium c-bar--shadow-bottom c-bar--fixed-top js-header" },
        _react2.default.createElement(
          "div",
          { className: "c-bar__inner" },
          _react2.default.createElement(
            "div",
            { className: "c-grid c-grid--gutters c-grid--between" },
            _react2.default.createElement(
              "div",
              { className: "c-grid__col" },
              _react2.default.createElement(
                "h1",
                null,
                _react2.default.createElement("img", { src: "image/logo.png", alt: "", width: "140" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "c-grid__col u-d-pc" },
              _react2.default.createElement(
                "ul",
                { className: "c-nav c-nav--medium" },
                _react2.default.createElement(
                  "li",
                  { className: "c-nav__item" },
                  _react2.default.createElement(
                    "a",
                    { href: "index.html" },
                    "Home"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "c-nav__item" },
                  _react2.default.createElement(
                    "a",
                    { href: "start.html" },
                    "Getting started"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "c-nav__item" },
                  _react2.default.createElement(
                    "a",
                    { href: "base.html" },
                    "Base"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "c-nav__item" },
                  _react2.default.createElement(
                    "a",
                    { href: "component.html" },
                    "Component"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "c-nav__item" },
                  _react2.default.createElement(
                    "a",
                    { href: "javascript.html" },
                    "JavaScript"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "c-nav__item" },
                  _react2.default.createElement(
                    "a",
                    { href: "utility.html" },
                    "Utility"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;