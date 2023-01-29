interface IProperties {
	className?: string;
}

const UIIconWrite: React.FC<IProperties> = (props) => {
	const className = `bi bi-database-down ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconWrite;
