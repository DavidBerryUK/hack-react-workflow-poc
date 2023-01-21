import EnumUserType from '../enums/EnumUserType';

export default class UserModel {
	readonly name: string;
	readonly userType: EnumUserType;

	constructor(name: string, userType: EnumUserType) {
		this.name = name;
		this.userType = userType;
	}

	clone(): UserModel {
		return new UserModel(this.name, this.userType);
	}
}
