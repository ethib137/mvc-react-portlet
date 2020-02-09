
import React from 'react';

import ClayForm from './ClayForm.es';
import ClayFormHook from './ClayFormHook.es';
import FunctionalComponent from './FunctionalComponent.es';
import FunctionalCounter from './FunctionalCounter.es';

const TABS = [
	'Functional Component',
	'Clay Form',
	'Clay Form with Hooks',
	'Functional Counter with Hooks'
];

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {tabIndex: 0};
	}

	renderTabPanel(i) {
		switch(i) {
			case 0:
				return <FunctionalComponent />;
			case 1:
				return <ClayForm />;
			case 2:
				return <ClayFormHook />;
			case 3:
				return <FunctionalCounter />;
			default:
				return <FunctionalComponent />;
		}
	}

	render() {
		const {tabIndex} = this.state;

		return (
			<>
				<div>
					<h1>{'MVC React App'}</h1>
				</div>

				<div>ApiKey passed from portlet.java: {this.props.data.apiKey}</div>

				<ul className="nav nav-underline mb-4" role="tablist">
					{TABS.map((tab, i) => (
						<li className="nav-item" key={tab}>
							<button 
								className={'btn btn-unstyled nav-link' + (tabIndex == i ? ' active' : '')}
								onClick={() => this.setState({tabIndex: i})}
								role="tab"
							>
								{tab}
							</button>
						</li>
					))}
				</ul>

				{this.renderTabPanel(tabIndex)}
			</>
		);
	}
}