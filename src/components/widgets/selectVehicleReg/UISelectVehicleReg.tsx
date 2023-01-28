import { useState } from 'react';

import EnumToArray from '../../../utilities/EnumToArray';
import EnumVehicleReg from '../../../workflowContext/enums/EnumVehicleReg';
import UISelect from '../../ui/select/UISelect';

interface IProperties {
	vehicleReg: EnumVehicleReg;
	onChange: (value: EnumVehicleReg) => void;
}

const UISelectVehicleReg: React.FC<IProperties> = (props) => {
	const [options] = useState(EnumToArray.createListArray(EnumVehicleReg));

	const handleOnChangeEvent = (value: string) => {
		const vehicleReg = value as unknown as EnumVehicleReg;
		props.onChange(vehicleReg);
	};

	return <UISelect options={options} value={`${props.vehicleReg}`} onChange={handleOnChangeEvent} />;
};

export default UISelectVehicleReg;
