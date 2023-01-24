import EnumUserType from '../enums/EnumUserType';
//
// model of a user to be stored in the context
//
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
