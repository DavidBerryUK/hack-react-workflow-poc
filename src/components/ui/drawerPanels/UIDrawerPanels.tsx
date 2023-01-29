import './styles/Styles.scss';

import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
}
const UIDrawerPanels: React.FC<IProperties> = (props) => {
	return (
		<div className="ui-drawer-panels">
			<div className="ui-panel-left" />
			<div className="ui-body">{props.children}</div>
			<div className="ui-panel-right" />
		</div>
	);
};

export default UIDrawerPanels;
