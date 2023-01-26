import { useState } from 'react';

import RepositoryProvider from '../../repositories/RepositoryProvider';

const UISelectVehicleReg = () => {
	const [options] = useState(RepositoryProvider.vehicleRepository.list());

	return (
		<select className="form-select">
			{options.map((item) => (
				<option value={item.vehicleReg}>{item.vehicleReg}</option>
			))}
		</select>
	);
};

export default UISelectVehicleReg;
