import UserEntity from '../../../repositories/entities/UserEntity';
import UITextCaption from '../../ui/text/UITextCaption';
import UITextKeyValue from '../../ui/text/UITextKeyValue';
import UISelectUserType from '../../widgets/selectUserType/UISelectUserType';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemUser = (props: IEntityListItemProperties<UserEntity>) => {
	return (
		<div>
			<UITextKeyValue label="Name" value={props.entity.name} />
			<UITextCaption>User Type</UITextCaption>
			<UISelectUserType userType={props.entity.userType} />
		</div>
	);
};

export default UIEntityListItemUser;
