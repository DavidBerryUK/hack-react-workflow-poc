import { ReactNode } from 'react';

interface IProperties {
	children: ReactNode;
}
const UITextSubTitle: React.FC<IProperties> = (props) => {
	return <h2>{props.children}</h2>;
};

export default UITextSubTitle;
