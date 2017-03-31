'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonLink = function (_Component) {
  _inherits(ButtonLink, _Component);

  function ButtonLink() {
    _classCallCheck(this, ButtonLink);

    return _possibleConstructorReturn(this, (ButtonLink.__proto__ || Object.getPrototypeOf(ButtonLink)).apply(this, arguments));
  }

  _createClass(ButtonLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        {
          href: this.props.href,
          onClick: this.props.onClickAction,
          className: (0, _classnames2.default)('c-btn', this.props.color && 'c-btn--' + this.props.color, this.props.size && 'c-btn--' + this.props.size, this.props.display && 'c-btn--' + this.props.display, this.props.classes) },
        this.props.children
      );
    }
  }]);

  return ButtonLink;
}(_react.Component);

exports.default = ButtonLink;