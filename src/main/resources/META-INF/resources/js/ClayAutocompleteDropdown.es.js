import React, {useMemo, useState} from 'react';
import ClayAutocomplete from '@clayui/autocomplete';
import {useResource} from '@clayui/data-provider';
import ClayDropDown from '@clayui/drop-down';

export default () => {
	const [value, setValue] = useState('');
	const [selected, setSelected] = useState(false);

	const [networkStatus, setNetworkStatus] = useState(4);

	const { resource } = useResource({
		fetchPolicy: 'cache-first',
		link: `${window.location.origin}/api/jsonws/country/get-countries`,
		onNetworkStatusChange: setNetworkStatus
	});

	const insensitiveIncludes = (str, val) => str.toLowerCase().includes(val.toLowerCase());

	const filteredResource = useMemo(
		() => !resource ? [] : resource.filter(item => insensitiveIncludes(item.nameCurrentValue, value)),
		[resource, value]
	);

	const initialLoading = networkStatus === 1;
	const loading = networkStatus < 4;
	const error = networkStatus === 5;

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={event => {
					setValue(event.target.value);
					setSelected(false);
				}}
				placeholder="Type here"
				value={value}
			/>
			<ClayAutocomplete.DropDown
				active={(!!filteredResource && !!value && !selected)}
			>
				<ClayDropDown.ItemList>
					{(error || (!initialLoading && filteredResource.length == 0)) && (
						<ClayDropDown.Item className="disabled">
							{"No Results Found"}
						</ClayDropDown.Item>
					)}
					{!error &&
						filteredResource &&
						filteredResource.map(item => (
							<ClayAutocomplete.Item
								key={item.countryId}
								match={value}
								value={item.nameCurrentValue}
								onClick={() => {
									setValue(item.nameCurrentValue);
									setSelected(true);
								}}
							/>
						))}
				</ClayDropDown.ItemList>
			</ClayAutocomplete.DropDown>
			{loading && <ClayAutocomplete.LoadingIndicator />}
		</ClayAutocomplete>
	);
};
