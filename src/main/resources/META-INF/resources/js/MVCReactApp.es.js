
import React from 'react';

import ClayForm from './ClayForm.es';
import ClayFormHook from './ClayFormHook.es';
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
							Clay Form
						</button>
					</li>
					<li className="nav-item">
						<button 
							className={'btn btn-unstyled nav-link' + (tabIndex == 2 ? ' active' : '')}
							onClick={() => this.setState({tabIndex: 2})}
							role="tab"
						>
							Clay Form with Hooks
						</button>
					</li>
					<li className="nav-item">
						<button 
							className={'btn btn-unstyled nav-link' + (tabIndex == 3 ? ' active' : '')}
							onClick={() => this.setState({tabIndex: 3})}
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