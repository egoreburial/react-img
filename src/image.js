import React from 'react';
import PropTypes from 'prop-types';

function imagesLoaded(parent) {
	var imgElements = parent.querySelectorAll('img');
	for (const img of imgElements) {
		if (!img.complete) {
			return false;
		}
	}
	return true;
}

class ImageLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	renderPreloader() {
		if (!this.state.loading) {
			return null;
		}
		return (
			<p> Loading </p>
		);
	}

	renderImage() {
		return (
			<img
				src={this.props.imageUrl}
				onLoad={this.handleStateChange.bind(this)}
				onError={this.handleStateChange.bind(this)}
			/>
		);
	}

	handleStateChange() {
		var imgElement = this.refs.imageContainer;
		this.setState({
			loading: !imagesLoaded(imgElement)
		})
	}

	render() {
		console.log(this.state)
		return (
			<div ref='imageContainer'>
				{this.renderPreloader()}
				{this.renderImage()}
			</div>
		);
	}
}

ImageLoader.propTypes = {
	imageUrl: PropTypes.string
};

export default ImageLoader;
