import { ApplicationContextProps, IApplicationContextDispatchCommand } from '../ApplicationContext';

export default class CommandSetDrawerLeftIsOpen implements IApplicationContextDispatchCommand {
	private readonly isOpen: boolean;

	constructor(isOpen: boolean) {
		this.isOpen = isOpen;
	}

	execute(state: ApplicationContextProps): ApplicationContextProps {
		return {
			...state,
			drawerLeftIsOpen: this.isOpen,
		};
	}
}
