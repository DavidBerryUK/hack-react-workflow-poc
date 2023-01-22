import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
}
const UITextTitle: React.FC<IProperties> = (props) => {
	return <h1>{props.children}</h1>;
};

export default UITextTitle;
