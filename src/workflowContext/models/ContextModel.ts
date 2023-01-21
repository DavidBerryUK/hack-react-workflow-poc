import OrderModel from './OrderModel';
import UserModel from './UserModel';
import VehicleModel from './VehicleModel';

//
// immutable context - holds all data
//

export default class ContextModel {
	readonly user: UserModel | undefined;
	readonly vehicle: VehicleModel | undefined;
	readonly order: OrderModel | undefined;

	constructor(user?: UserModel | undefined, vehicle?: VehicleModel | undefined, order?: OrderModel | undefined) {
		this.user = user;
		this.vehicle = vehicle;
		this.order = order;
	}

	clone(): ContextModel {
		return new ContextModel(this.user, this.vehicle, this.order);
	}

	cloneWithUser(user: UserModel): ContextModel {
		return new ContextModel(user, this.vehicle, this.order);
	}

	cloneWithOrder(order: OrderModel): ContextModel {
		return new ContextModel(this.user, this.vehicle, order);
	}

	cloneWithVehicle(vehicle: VehicleModel): ContextModel {
		return new ContextModel(this.user, vehicle, this.order);
	}
}
