import './styles/Styles.scss';

import { ReactNode } from 'react';

import UISideBarControls from '../../widgets/sidebarControls/UISideBarControls';

interface IProperties {
	children?: ReactNode;
}
const UIToolbar: React.FC<IProperties> = (props) => {
	return (
		<nav className="ui-toolbar navbar fixed-top navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<div className="navbar-brand">Navbar</div>
				<div className="d-flex">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li>
								<UISideBarControls />
							</li>
						</ul>
						{props.children}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default UIToolbar;
