require('mapbox.js/theme/style.css');
require('./styles.css');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';
import isUndefined from 'lodash/isUndefined';
import difference from 'lodash/difference';
import L from 'mapbox.js';


export default class Map extends Component {

	static propTypes = {
		accessToken: PropTypes.string.isRequired,
		center: PropTypes.array.isRequired,
		children: PropTypes.any,
		layer: PropTypes.string,
		maxZoom: PropTypes.number,
		minZoom: PropTypes.number,
		zoom: PropTypes.number.isRequired,
		zoomControl: PropTypes.bool
	};

	static defaultProps = {
		layer: 'mapbox.streets',
		zoomControl: true
	};

	componentWillMount() {
		L.mapbox.accessToken = this.props.accessToken;
	}

	componentDidMount() {
		const { layer, center } = this.props;

		this.center = center;

		const options = omit(omitBy(this.props, isUndefined), ['accessToken', 'layer', 'children']);

		this.map = L.mapbox.map(ReactDOM.findDOMNode(this), layer, options);

		this.forceUpdate();
	}

	componentWillReceiveProps(props) {
		const { center } = props;

		if (difference(this.center, center).length > 0) {
			this.center = center;
			this.map.setView(this.center, 9);
		}
	}

	render() {
		const { children } = this.props;

		const childrenWithProps = React.Children.map(children, (child) => {
			return child ? React.cloneElement(child, {map: this.map}) : null;
		});

		return (
			<div id='map'>
				{childrenWithProps}
			</div>
		);
	}

}
