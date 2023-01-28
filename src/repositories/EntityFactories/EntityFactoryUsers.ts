import EnumUserType from '../../workflowContext/enums/EnumUserType';
import UserEntity from '../entities/UserEntity';
import IEntityFactory from '../interfaces/IEntityFactory';

export default class EntityFactoryUsers implements IEntityFactory<UserEntity> {
	// eslint-disable-next-line class-methods-use-this
	title = 'Users';

	// eslint-disable-next-line class-methods-use-this
	getDemoSample(): Array<UserEntity> {
		return [
			new UserEntity('U01', 'Barry Smith', EnumUserType.Garage),
			new UserEntity('U02', 'Claire Green', EnumUserType.Garage),
			new UserEntity('U03', 'Diane West', EnumUserType.Staff),
			new UserEntity('U04', 'Gavin Murphy', EnumUserType.Customer),
			new UserEntity('U05', 'Peter Williams', EnumUserType.Staff),
		];
	}
}
