import { useState } from 'react';

import EnumToArray from '../../../utilities/EnumToArray';
import EnumOrderStatus from '../../../workflowContext/enums/EnumOrderStatus';
import UISelect from '../../ui/select/UISelect';

interface IProperties {
	orderStatus: EnumOrderStatus;
}

const UISelectOrderStatus: React.FC<IProperties> = (props) => {
	const [options] = useState(EnumToArray.createListArray(EnumOrderStatus));

	return <UISelect options={options} value={`${props.orderStatus}`} />;
};

export default UISelectOrderStatus;
