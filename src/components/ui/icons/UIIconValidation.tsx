interface IProperties {
	className?: string;
}

const UIIconValidation: React.FC<IProperties> = (props) => {
	const className = `bi bi-clipboard2-check- ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconValidation;
