interface IProperties {
	className?: string;
}

const UIIconBranch: React.FC<IProperties> = (props) => {
	const className = `bi bi-arrow-left-right ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconBranch;
