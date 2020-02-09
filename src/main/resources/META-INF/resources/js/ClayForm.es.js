import ClayForm, {ClayInput} from '@clayui/form';
import React from 'react';

const spritemap = themeDisplay.getPathThemeImages() + '/lexicon/icons.svg';	

export default () => {
	return (
		<ClayForm>
			<ClayForm.Group className="has-success">
				<label htmlFor="basicInput">Name</label>
				<ClayInput placeholder="Name" type="text" />
			</ClayForm.Group>
			<ClayForm.Group className="has-warning">
				<label htmlFor="basicInput">Description</label>
				<textarea className="form-control" placeholder="Description" />
			</ClayForm.Group>
			<ClayForm.Group className="has-error">
				<label htmlFor="basicInput">Password</label>
				<ClayInput placeholder="Name" type="password" />
			</ClayForm.Group>
		</ClayForm>
	);
};