import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
}
const UITextBody: React.FC<IProperties> = (props) => {
	return <div className="ui-body">{props.children}</div>;
};

export default UITextBody;
