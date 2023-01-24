import React from 'react';

const UIInputUser: React.FC = () => {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">User</h5>
					<p>Select the user type</p>
					<select className="form-select" aria-label="Default select example">
						<option value="s">Staff</option>
						<option value="g">Garage</option>
						<option value="c">Customer</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default UIInputUser;
