interface IProperties {
	className?: string;
}

const UIIconEmail: React.FC<IProperties> = (props) => {
	const className = `bi bi-envelope-at ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconEmail;
