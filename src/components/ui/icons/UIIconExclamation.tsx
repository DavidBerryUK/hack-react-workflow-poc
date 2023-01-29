interface IProperties {
	className?: string;
}

const UIIconExclamation: React.FC<IProperties> = (props) => {
	const className = `bi bi-exclamation-circle-fill ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconExclamation;
