import UserEntity from '../../../repositories/entities/UserEntity';
import EnumUserType from '../../../workflowContext/enums/EnumUserType';
import UISelectUserType from '../../selectUserType/UISelectUserType';
import UITextKeyValue from '../../text/UITextKeyValue';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemUser = (props: IEntityListItemProperties<UserEntity>) => {
	return (
		<div>
			<UITextKeyValue label="Name" value={props.entity.name} />
			<UITextKeyValue label="User Type" value={EnumUserType[props.entity.userType]} />
			<UISelectUserType />
		</div>
	);
};

export default UIEntityListItemUser;
