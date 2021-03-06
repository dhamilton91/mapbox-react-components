'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omitBy = require('../../node_modules/lodash/omitBy');

var _omitBy2 = _interopRequireDefault(_omitBy);

var _isUndefined = require('../../node_modules/lodash/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _assert = require('../utils/assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feature = function () {
	function Feature(_ref) {
		var coordinates = _ref.coordinates;

		_classCallCheck(this, Feature);

		(0, _assert2.default)(coordinates).isNotEmpty('Missing Coordinates');
		this.coordinates = coordinates;
	}

	_createClass(Feature, [{
		key: 'getType',
		value: function getType() {
			throw new Error('Function must be overridden.');
		}
	}, {
		key: 'toGeoJson',
		value: function toGeoJson() {
			var properties = (0, _omitBy2.default)(this.getProperties(), _isUndefined2.default);

			return {
				type: 'Feature',
				geometry: {
					type: this.getType(),
					coordinates: this.coordinates
				},
				properties: properties
			};
		}
	}, {
		key: 'getProperties',
		value: function getProperties() {
			throw new Error('Function must be overridden.');
		}
	}]);

	return Feature;
}();

exports.default = Feature;