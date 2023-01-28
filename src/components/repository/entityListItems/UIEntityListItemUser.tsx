import UserEntity from '../../../repositories/entities/UserEntity';
import EnumUserType from '../../../workflowContext/enums/EnumUserType';
import UITextCaption from '../../ui/text/UITextCaption';
import UITextKeyValue from '../../ui/text/UITextKeyValue';
import UISelectUserType from '../../widgets/selectUserType/UISelectUserType';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemUser = (props: IEntityListItemProperties<UserEntity>) => {
	const handleOnUserTypeChangeEvent = (value: EnumUserType) => {
		props.onUpdated(props.entity.cloneWithUserType(value));
	};

	return (
		<div>
			<UITextKeyValue label="Name" value={props.entity.name} />
			<UITextCaption>User Type</UITextCaption>
			<UISelectUserType userType={props.entity.userType} onChange={handleOnUserTypeChangeEvent} />
		</div>
	);
};

export default UIEntityListItemUser;
