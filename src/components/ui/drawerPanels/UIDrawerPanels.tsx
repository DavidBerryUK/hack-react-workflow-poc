import './styles/Styles.scss';

import { ReactNode } from 'react';

import { useApplicationContext } from '../../../contexts/applicationContext/ApplicationContext';

interface IProperties {
	children: ReactNode;
}
const UIDrawerPanels: React.FC<IProperties> = (props) => {
	const { state } = useApplicationContext();

	let classNameLeft = 'ui-panel-left';
	let classNameBody = 'ui-body';
	let classNameRight = 'ui-panel-right';

	if (state.drawerLeftIsOpen) {
		classNameLeft = `${classNameLeft} open`;
		classNameBody = `${classNameBody} left-open`;
	}

	if (state.drawerRightIsOpen) {
		classNameRight = `${classNameRight} open`;
		classNameBody = `${classNameBody} right-open`;
	}

	return (
		<div className="ui-drawer-panels">
			<div className={classNameLeft} />
			<div className={classNameBody}>{props.children}</div>
			<div className={classNameRight} />
		</div>
	);
};

export default UIDrawerPanels;
