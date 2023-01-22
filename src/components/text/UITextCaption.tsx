import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
}
const UITextCaption: React.FC<IProperties> = (props) => {
	return <span className="ui-caption">{props.children}</span>;
};

export default UITextCaption;
