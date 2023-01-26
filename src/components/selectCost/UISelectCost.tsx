import { useState } from 'react';

const UISelectCost = () => {
	// generate a list of numbers , 0 to 500 in steps of 50
	const [options] = useState(Array.from({ length: 11 }, (_, i) => i * 50));

	return (
		<select className="form-select">
			{options.map((item) => (
				<option value={`${item}`}>{`${item}`}</option>
			))}
		</select>
	);
};

export default UISelectCost;
