import { useState } from 'react';

import EnumToArray from '../../utilities/EnumToArray';
import EnumOrderStatus from '../../workflowContext/enums/EnumOrderStatus';

const UISelectOrderStatus = () => {
	const [options] = useState(EnumToArray.createListArray(EnumOrderStatus));

	return (
		<select className="form-select">
			{options.map((item) => (
				<option value={`${item.key}`}>{item.value}</option>
			))}
		</select>
	);
};

export default UISelectOrderStatus;
