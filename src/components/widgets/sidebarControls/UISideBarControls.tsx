import CommandSetDrawerLeftIsOpen from '../../../contexts/applicationContext/actions/CommandSetDrawerLeftIsOpen';
import CommandSetDrawerRightIsOpen from '../../../contexts/applicationContext/actions/CommandSetDrawerRightIsOpen';
import { useApplicationContext } from '../../../contexts/applicationContext/ApplicationContext';
import UIButtonToolbar from '../../ui/button/UIButtonToolbar';
import UIIconSideBarLeft from '../../ui/icons/UIIconSideBarLeft';
import UIIconSideBarRight from '../../ui/icons/UIIconSideBarRight';

const UISideBarControls: React.FC = () => {
	const { state, dispatch } = useApplicationContext();

	const handleOnLeftButtonClicked = () => {
		dispatch(new CommandSetDrawerLeftIsOpen(!state.drawerLeftIsOpen));
	};

	const handleOnRightButtonClicked = () => {
		dispatch(new CommandSetDrawerRightIsOpen(!state.drawerRightIsOpen));
	};

	return (
		<div>
			<UIButtonToolbar onClick={handleOnLeftButtonClicked}>
				<UIIconSideBarLeft />
			</UIButtonToolbar>
			<UIButtonToolbar onClick={handleOnRightButtonClicked}>
				<UIIconSideBarRight />
			</UIButtonToolbar>
		</div>
	);
};

export default UISideBarControls;
