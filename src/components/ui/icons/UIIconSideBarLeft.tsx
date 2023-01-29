interface IProperties {
	className?: string;
}

const UIIconSideBarLeft: React.FC<IProperties> = (props) => {
	const className = `bi bi-layout-sidebar ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconSideBarLeft;
