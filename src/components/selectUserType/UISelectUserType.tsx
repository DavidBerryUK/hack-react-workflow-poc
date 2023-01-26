import { useState } from 'react';

import EnumToArray from '../../utilities/EnumToArray';
import EnumUserType from '../../workflowContext/enums/EnumUserType';

const UISelectUserType = () => {
	const [options] = useState(EnumToArray.createListArray(EnumUserType));

	return (
		<select className="form-select">
			{options.map((item) => (
				<option value={`${item.key}`}>{item.value}</option>
			))}
		</select>
	);
};

export default UISelectUserType;
