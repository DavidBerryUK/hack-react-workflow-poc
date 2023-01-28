import './style/Style.scss';

import KeyValueModel from '../../../utilities/KeyValueModel';
import UIOption from './UIOption';

interface IProperties {
	options: Array<KeyValueModel>;
	value: string;
}

const UISelect: React.FC<IProperties> = (props) => {
	return (
		<select className="form-select ui-select" value={props.value}>
			{props.options.map((item) => (
				<UIOption key={`${item.key}`} item={item} />
			))}
		</select>
	);
};

export default UISelect;
