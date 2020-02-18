
import React, {useState} from 'react';

import ClayTabs from '@clayui/tabs';

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

			<ClayTabs modern className="my-3">
				<ClayTabs.Item
					active={activeTabKeyValue == 0}
					innerProps={{
						"aria-controls": "tabpanel-1"
					}}
					onClick={() => setActiveTabKeyValue(0)}
				>
					{"Functional Component"}
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
			</ClayTabs>
			<ClayTabs.Content activeIndex={activeTabKeyValue} fade>
				<ClayTabs.TabPane aria-labelledby="tab-1">
					<FunctionalComponent />
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
			</ClayTabs.Content>
		</>
	);
}