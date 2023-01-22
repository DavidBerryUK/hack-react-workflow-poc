import { ReactNode } from 'react';
import EnumIcon from './enum/EnumIcon';
import UIIconBranch from './UIIconBranch';
import UIIconCross from './UIIconCross';
import UIIconRead from './UIIconRead';
import UIIconWrite from './UIIconWrite';
import UIIconEmail from './UIIconEmail';
import UIIconExclamation from './UIIconExclamation';
import UIIconMutate from './UIIconMutate';
import UIIconStart from './UIIconStart';
import UIIconStop from './UIIconStop';
import UIIconTick from './UIIconTick';
import UIIconValidation from './UIIconValidation';

interface IProperties {
	icon: EnumIcon;
}

const UIIcon: React.FC<IProperties> = (props) => {
	const getIcon = (): ReactNode => {
		switch (props.icon) {
			case EnumIcon.branch:
				return <UIIconBranch />;
			case EnumIcon.cross:
				return <UIIconCross />;
			case EnumIcon.Write:
				return <UIIconWrite />;
			case EnumIcon.Read:
				return <UIIconRead />;
			case EnumIcon.email:
				return <UIIconEmail />;
			case EnumIcon.exclamation:
				return <UIIconExclamation />;
			case EnumIcon.tick:
				return <UIIconTick />;
			case EnumIcon.validation:
				return <UIIconValidation />;
			case EnumIcon.start:
				return <UIIconStart />;
			case EnumIcon.stop:
				return <UIIconStop />;
			case EnumIcon.mutate:
				return <UIIconMutate />;
		}
	};

	return <>{getIcon()}</>;
};

export default UIIcon;
