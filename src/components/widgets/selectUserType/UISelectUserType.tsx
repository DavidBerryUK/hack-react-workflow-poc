import { useState } from 'react';

import EnumToArray from '../../../utilities/EnumToArray';
import EnumUserType from '../../../workflowContext/enums/EnumUserType';
import UISelect from '../../ui/select/UISelect';

interface IProperties {
	userType: EnumUserType;
}

const UISelectUserType: React.FC<IProperties> = (props) => {
	const [options] = useState(EnumToArray.createListArray(EnumUserType));

	return <UISelect options={options} value={`${props.userType}`} />;
};

export default UISelectUserType;
