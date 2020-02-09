import React from 'react';

import MVCReactApp from './MVCReactApp.es';

export default function(props) {
	console.log('props', props);

	return (
		<MVCReactApp data={props} />
	);
}