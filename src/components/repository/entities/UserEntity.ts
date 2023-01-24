import EnumUserType from '../../../workflowContext/enums/EnumUserType';

export default class UserEntity {
	readonly id: string;

	readonly name: string;

	readonly userType: EnumUserType;

	constructor(id: string, name: string, userType: EnumUserType) {
		this.id = id;
		this.name = name;
		this.userType = userType;
	}

	clone(): UserEntity {
		return new UserEntity(this.id, this.name, this.userType);
	}
}
