import React from 'react';

import KeyValueModel from '../../../utilities/KeyValueModel';
import UISegmentItem from './UISegmentItem';

interface IProperties {
	value: KeyValueModel;
	collection: Array<KeyValueModel>;
	className?: string;
	fullWidth?: boolean;
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

	let className = `btn-group ${props.className ?? ''}`;
	if (props.fullWidth) {
		className = `${className} w-100`;
	}

	return (
		<div className={className} role="group">
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

UISegment.defaultProps = {
	className: '',
	fullWidth: false,
};

export default UISegment;
