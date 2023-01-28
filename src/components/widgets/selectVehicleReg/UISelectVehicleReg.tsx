import { useState } from 'react';

import EnumToArray from '../../../utilities/EnumToArray';
import EnumVehicleReg from '../../../workflowContext/enums/EnumVehicleReg';
import UISelect from '../../ui/select/UISelect';

interface IProperties {
	vehicleReg: EnumVehicleReg;
}

const UISelectVehicleReg: React.FC<IProperties> = (props) => {
	const [options] = useState(EnumToArray.createListArray(EnumVehicleReg));
	return <UISelect options={options} value={`${props.vehicleReg}`} />;
};

export default UISelectVehicleReg;
