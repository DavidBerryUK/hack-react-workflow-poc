interface IProperties {
	className?: string;
}

const UIIconEdit: React.FC<IProperties> = (props) => {
	const className = `bi bi-pencil-square ${props.className ?? ''}`;

	return <i className={className} />;
};

export default UIIconEdit;
