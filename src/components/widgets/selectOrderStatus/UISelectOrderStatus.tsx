import { useState } from 'react';

import EnumToArray from '../../../utilities/EnumToArray';
import EnumOrderStatus from '../../../workflowContext/enums/EnumOrderStatus';
import UISelect from '../../ui/select/UISelect';

interface IProperties {
	orderStatus: EnumOrderStatus;
	onChange: (value: EnumOrderStatus) => void;
}

const UISelectOrderStatus: React.FC<IProperties> = (props) => {
	const [options] = useState(EnumToArray.createListArray(EnumOrderStatus));

	const handleOnChangeEvent = (value: string) => {
		const vehicleReg = value as unknown as EnumOrderStatus;
		props.onChange(vehicleReg);
	};

	return <UISelect options={options} value={`${props.orderStatus}`} onChange={handleOnChangeEvent} />;
};

export default UISelectOrderStatus;
