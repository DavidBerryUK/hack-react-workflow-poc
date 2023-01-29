import { ApplicationContextProps, IApplicationContextDispatchCommand } from '../ApplicationContext';

export default class CommandSetDrawerRightIsOpen implements IApplicationContextDispatchCommand {
	private readonly isOpen: boolean;

	constructor(isOpen: boolean) {
		this.isOpen = isOpen;
	}

	execute(state: ApplicationContextProps): ApplicationContextProps {
		return {
			...state,
			drawerRightIsOpen: this.isOpen,
		};
	}
}
