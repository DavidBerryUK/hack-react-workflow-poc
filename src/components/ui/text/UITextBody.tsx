import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
	inset?: boolean;
}
const UITextBody: React.FC<IProperties> = (props) => {
	const className = `ui-text-body ${props.inset ? 'inset' : ''}`;

	return <div className={className}>{props.children}</div>;
};

export default UITextBody;
