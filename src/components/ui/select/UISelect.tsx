import './style/Style.scss';

import { ChangeEvent } from 'react';

import KeyValueModel from '../../../utilities/KeyValueModel';
import UIOption from './UIOption';

interface IProperties {
	options: Array<KeyValueModel>;
	value: string;
	onChange: (value: string) => void;
}

const UISelect: React.FC<IProperties> = (props) => {
	const handleOnChangeEventHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		props.onChange(event.target.value);
	};
	return (
		<select className="form-select ui-select" value={props.value} onChange={handleOnChangeEventHandler}>
			{props.options.map((item) => (
				<UIOption key={`${item.key}`} item={item} />
			))}
		</select>
	);
};

export default UISelect;
