import { useState } from 'react';

import EnumToArray from '../../../utilities/EnumToArray';
import EnumUserType from '../../../workflowContext/enums/EnumUserType';
import UISelect from '../../ui/select/UISelect';

interface IProperties {
	userType: EnumUserType;
	onChange: (value: EnumUserType) => void;
}

const UISelectUserType: React.FC<IProperties> = (props) => {
	const [options] = useState(EnumToArray.createListArray(EnumUserType));

	const handleOnChangeEvent = (value: string) => {
		const vehicleReg = value as unknown as EnumUserType;
		props.onChange(vehicleReg);
	};

	return <UISelect options={options} value={`${props.userType}`} onChange={handleOnChangeEvent} />;
};

export default UISelectUserType;
