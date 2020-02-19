
import React, {useState} from 'react';

import ClayTabs from '@clayui/tabs';

import ClayAutocompleteDropdown from './ClayAutocompleteDropdown.es';
import ClayForm from './ClayForm.es';
import ReducerCounter from './ReducerCounter.es';

export default (props) => {
	const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);

	const tabs = [
		['Clay Autocomplete Dropdown', <ClayAutocompleteDropdown />],
		['Clay Form', <ClayForm />],
		['Reducer Counter', <ReducerCounter />]
	];

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
							{tabs.map((tab, i) => (
								<ClayTabs.Item
									active={activeTabKeyValue == i}
									innerProps={{
										"aria-controls": `tabpanel-${i + 1}`
									}}
									onClick={() => setActiveTabKeyValue(i)}
								>
									{tab[0]}
								</ClayTabs.Item>
							))}
						</ClayTabs>
					</div>
					<div className="col-md-8">
						<ClayTabs.Content activeIndex={activeTabKeyValue}>
							{tabs.map((tab, i) => (
								<ClayTabs.TabPane aria-labelledby={`tab-${i + 1}`}>
									{tab[1]}
								</ClayTabs.TabPane>
							))}
						</ClayTabs.Content>
					</div>
				</div>
			</div>
		</>
	);
}