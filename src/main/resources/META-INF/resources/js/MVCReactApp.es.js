
import React from 'react';

import FunctionalComponent from './FunctionalComponent.es';
import FunctionalCounter from './FunctionalCounter.es';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {tabIndex: 0};
	}

	renderTabPanel(i) {
		switch(i) {
			case 0:
				return <FunctionalComponent />;
			default:
				return <FunctionalCounter />;
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
					<li className="nav-item">
						<button 
							className={'btn btn-unstyled nav-link' + (tabIndex == 0 ? ' active' : '')}
							onClick={() => this.setState({tabIndex: 0})}
							role="tab"
						>
							Functional Component
						</button>
					</li>
					<li className="nav-item">
						<button 
							className={'btn btn-unstyled nav-link' + (tabIndex == 1 ? ' active' : '')}
							onClick={() => this.setState({tabIndex: 1})}
							role="tab"
						>
							Functional Counter
						</button>
					</li>
				</ul>

				{this.renderTabPanel(tabIndex)}
			</>
		);
	}
}