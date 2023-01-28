import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
}
const UITextCardTitle: React.FC<IProperties> = (props) => {
	return <div className="ui-card-title">{props.children}</div>;
};

export default UITextCardTitle;
