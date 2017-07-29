import React from 'react';
import ReactDOM from 'react-dom';
import ImageLoader from './Image';

var imgUrl = 'http://wallpapercave.com/wp/ZZivyLy.jpg';

ReactDOM.render(
	<ImageLoader imageUrl={imgUrl} />,
	document.querySelector('#root')
);
