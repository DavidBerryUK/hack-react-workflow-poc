interface IProperties {
	className?: string;
}

const UIIconMutate: React.FC<IProperties> = (props) => {
	const className = `bi bi-pencil-fill ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconMutate;
