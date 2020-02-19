import React, {useReducer} from 'react';

import ClayButton from '@clayui/button';

function init(initialCount) {
	return {count: initialCount};
}

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {count: state.count + 1};
		case 'decrement':
			return {count: state.count - 1};
		case 'reset':
			return init(action.payload);
		default:
			throw new Error();
	}
}

export default () => {
	const [state, dispatch] = useReducer(reducer, 0, init);

	return (
		<>
			<h1>Count: {state.count}</h1>

			<ClayButton.Group>
				<ClayButton onClick={() => dispatch({type: 'decrement'})}>{"-"}</ClayButton>
				<ClayButton displayType="secondary" onClick={() => dispatch({type: 'reset', payload: 0})}>{"Reset"}</ClayButton>
				<ClayButton onClick={() => dispatch({type: 'increment'})}>{"+"}</ClayButton>
			</ClayButton.Group>
		</>
	);
}