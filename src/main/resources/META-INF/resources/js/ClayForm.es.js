import React from 'react';

import ClayForm, {ClayInput} from '@clayui/form';

const spritemap = themeDisplay.getPathThemeImages() + '/lexicon/icons.svg';

export default () => {
	return (
		<ClayForm>
			<ClayForm.Group className="has-success">
				<label htmlFor="basicInput">Name</label>
				<ClayInput placeholder="Name" type="text" />
				<ClayForm.FeedbackGroup>
					<ClayForm.FeedbackItem>
						{"This is a form-feedback-item."}
					</ClayForm.FeedbackItem>
					<ClayForm.FeedbackItem>
						<ClayForm.FeedbackIndicator
							spritemap={spritemap}
							symbol="check-circle-full"
						/>
						{"This is a form-feedback-item with a check feedback indicator."}
					</ClayForm.FeedbackItem>
				</ClayForm.FeedbackGroup>
			</ClayForm.Group>
			<ClayForm.Group className="has-warning">
				<label htmlFor="basicInput">Description</label>
				<textarea className="form-control" placeholder="Description" />
				<ClayForm.FeedbackGroup>
					<ClayForm.FeedbackItem>
						{"This is a form-feedback-item."}
					</ClayForm.FeedbackItem>
					<ClayForm.FeedbackItem>
						<ClayForm.FeedbackIndicator
							spritemap={spritemap}
							symbol="warning-full"
						/>
						{"This is a form-feedback-item with a warning feedback indicator."}
					</ClayForm.FeedbackItem>
				</ClayForm.FeedbackGroup>
			</ClayForm.Group>
			<ClayForm.Group className="has-error">
				<label htmlFor="basicInput">Password</label>
				<ClayInput placeholder="Name" type="password" />
				<ClayForm.FeedbackGroup>
					<ClayForm.FeedbackItem>
						{"This is a form-feedback-item."}
					</ClayForm.FeedbackItem>
					<ClayForm.FeedbackItem>
						<ClayForm.FeedbackIndicator
							spritemap={spritemap}
							symbol="exclamation-full"
						/>
						{"This is a form-feedback-item with a error feedback indicator."}
					</ClayForm.FeedbackItem>
				</ClayForm.FeedbackGroup>
			</ClayForm.Group>
		</ClayForm>
	);
};