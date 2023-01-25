import './styles/Styles.scss';

import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
	className?: string;
	selectable?: boolean;
}
const UIListItem: React.FC<IProperties> = (props) => {
	const className = `ui-list-item ${props.className} ${props.selectable ? 'selectable' : ''}`;

	return <div className={className}>{props.children}</div>;
};

export default UIListItem;
