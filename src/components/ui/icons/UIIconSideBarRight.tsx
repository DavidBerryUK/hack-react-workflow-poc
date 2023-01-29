interface IProperties {
	className?: string;
}

const UIIconSideBarRight: React.FC<IProperties> = (props) => {
	const className = `bi bi-layout-sidebar-reverse ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconSideBarRight;
