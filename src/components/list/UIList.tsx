import './styles/Styles.scss';

import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
	className?: string;
}
const UIList: React.FC<IProperties> = (props) => {
	const className = `ui-list-container ${props.className}`;

	return <div className={className}>{props.children}</div>;
};

export default UIList;
