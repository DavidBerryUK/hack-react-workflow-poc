interface IProperties {
	className?: string;
}

const UIIconRead: React.FC<IProperties> = (props) => {
	const className = `bi bi-database-up ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconRead;
