import { useState } from 'react';

import KeyValueModel from '../../../utilities/KeyValueModel';
import UISelect from '../../ui/select/UISelect';

interface IProperties {
	cost: number;
}

const UISelectCost: React.FC<IProperties> = (props) => {
	// generate a list of numbers , 0 to 500 in steps of 50
	const [options] = useState(Array.from({ length: 11 }, (_, i) => i * 50).map((value) => new KeyValueModel(`${value}`, `${value}`)));

	return <UISelect options={options} value={`${props.cost}`} />;
};

export default UISelectCost;
