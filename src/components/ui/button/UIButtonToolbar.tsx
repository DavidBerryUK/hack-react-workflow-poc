import './styles/Styles.scss';

import { ReactNode } from 'react';

interface IProperties {
	children?: ReactNode;
	onClick?: () => void;
}

const UIButtonToolbar: React.FC<IProperties> = (props) => {
	const handleOnButtonClickedEvent = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	return (
		<button type="button" className="ui-toolbar-btn" onClick={handleOnButtonClickedEvent}>
			{props.children}
		</button>
	);
};

export default UIButtonToolbar;
