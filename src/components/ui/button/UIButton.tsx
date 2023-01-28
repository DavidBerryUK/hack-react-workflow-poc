import { ReactNode } from 'react';

interface IProperties {
	children?: ReactNode;
	onClick?: () => void;
}

const UIButton: React.FC<IProperties> = (props) => {
	const handleOnButtonClickedEvent = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	return (
		<button type="button" className="btn btn-light" onClick={handleOnButtonClickedEvent}>
			{props.children}
		</button>
	);
};

export default UIButton;
