
import React, {useState} from 'react';

import ClayTabs from '@clayui/tabs';

import ClayAutocompleteDropdown from './ClayAutocompleteDropdown.es';
import ClayForm from './ClayForm.es';
import ClayFormHook from './ClayFormHook.es';
import FunctionalComponent from './FunctionalComponent.es';
import FunctionalCounter from './FunctionalCounter.es';

export default (props) => {
	const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);

	return (
		<>
			<div>
				<h1>{'MVC React App'}</h1>
			</div>

			<div>ApiKey passed from portlet.java: {props.data.apiKey}</div>

			<div className="container-fluid my-3">
				<div className="row">
					<div className="col-md-4">
						<ClayTabs className="d-flex flex-column">
							<ClayTabs.Item
								active={activeTabKeyValue == 0}
								innerProps={{
									"aria-controls": "tabpanel-1"
								}}
								onClick={() => setActiveTabKeyValue(0)}
							>
								{"Clay Autocomplete Dropdown"}
							</ClayTabs.Item>
							<ClayTabs.Item
								active={activeTabKeyValue == 1}
								innerProps={{
									"aria-controls": "tabpanel-2"
								}}
								onClick={() => setActiveTabKeyValue(1)}
							>
								{"Clay Form"}
							</ClayTabs.Item>
							<ClayTabs.Item
								active={activeTabKeyValue == 2}
								innerProps={{
									"aria-controls": "tabpanel-3"
								}}
								onClick={() => setActiveTabKeyValue(2)}
							>
								{"Clay Form with Hooks"}
							</ClayTabs.Item>
							<ClayTabs.Item
								active={activeTabKeyValue == 3}
								innerProps={{
									"aria-controls": "tabpanel-4"
								}}
								onClick={() => setActiveTabKeyValue(3)}
							>
								{"Functional Counter with Hooks"}
							</ClayTabs.Item>
							<ClayTabs.Item
								active={activeTabKeyValue == 4}
								innerProps={{
									"aria-controls": "tabpanel-5"
								}}
								onClick={() => setActiveTabKeyValue(4)}
							>
								{"Functional Component"}
							</ClayTabs.Item>
						</ClayTabs>
					</div>
					<div className="col-md-8">
						<ClayTabs.Content activeIndex={activeTabKeyValue}>
							<ClayTabs.TabPane aria-labelledby="tab-1">
								<ClayAutocompleteDropdown />
							</ClayTabs.TabPane>
							<ClayTabs.TabPane aria-labelledby="tab-2">
								<ClayForm />
							</ClayTabs.TabPane>
							<ClayTabs.TabPane aria-labelledby="tab-3">
								<ClayFormHook />
							</ClayTabs.TabPane>
							<ClayTabs.TabPane aria-labelledby="tab-4">
								<FunctionalCounter />
							</ClayTabs.TabPane>
							<ClayTabs.TabPane aria-labelledby="tab-5">
								<FunctionalComponent />
							</ClayTabs.TabPane>
						</ClayTabs.Content>
					</div>
				</div>
			</div>
		</>
	);
}