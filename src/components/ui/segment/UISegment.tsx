import React from 'react';

import KeyValueModel from '../../../utilities/KeyValueModel';
import UISegmentItem from './UISegmentItem';

interface IProperties {
	value: KeyValueModel;
	collection: Array<KeyValueModel>;
	onChange: (item: KeyValueModel) => void;
}

const UISegment: React.FC<IProperties> = (props) => {
	const handleOnClickEvent = (item: KeyValueModel) => {
		if (props.onChange) {
			props.onChange(item);
		}
	};

	const isSelected = (item: KeyValueModel): boolean => {
		return item.key === props.value.key;
	};

	return (
		<div className="btn-group" role="group">
			{props.collection.map((item) => (
				<UISegmentItem
					item={item}
					selected={isSelected(item)}
					key={item.key}
					onSelected={() => {
						handleOnClickEvent(item);
					}}
				/>
			))}
		</div>
	);
};

export default UISegment;
