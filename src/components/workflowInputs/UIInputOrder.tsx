import React from 'react';

const UIInputOrder: React.FC = (props) => {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Order</h5>
					<p>Select order to feed into workflow</p>
					<select className="form-select" aria-label="Default select example">
						<option value="0">draft order - low value - vehicle DN01 4FN</option>
						<option value="0">draft order - low value - vehicle LS12 4NQ</option>
						<option value="0">draft order - high value - vehicle DN01 4FN </option>
						<option value="0">completed order - low value - vehicle DN01 4FN</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default UIInputOrder;
