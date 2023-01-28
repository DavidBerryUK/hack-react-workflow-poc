import React from 'react';

import UITextSubTitle from '../ui/text/UITextSubTitle';
import UIInputOrder from './UIInputOrder';
import UIInputUser from './UIInputUser';

interface IProperties {}

const UIWorkflowInputs: React.FC<IProperties> = () => {
	return (
		<div>
			<UITextSubTitle>Inputs</UITextSubTitle>
			<div className="d-flex flex-column gap-3">
				<UIInputUser />
				<UIInputOrder />
			</div>
		</div>
	);
};

export default UIWorkflowInputs;
