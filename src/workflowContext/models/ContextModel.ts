import OrderEntity from '../../repositories/entities/OrderEntity';
import UserEntity from '../../repositories/entities/UserEntity';
import VehicleEntity from '../../repositories/entities/VehicleEntity';

//
// immutable context - holds all data
//

export default class ContextModel {
	readonly user: UserEntity | undefined;

	readonly vehicle: VehicleEntity | undefined;

	readonly order: OrderEntity | undefined;

	constructor(user?: UserEntity | undefined, vehicle?: VehicleEntity | undefined, order?: OrderEntity | undefined) {
		this.user = user;
		this.vehicle = vehicle;
		this.order = order;
	}

	clone(): ContextModel {
		return new ContextModel(this.user, this.vehicle, this.order);
	}

	cloneWithUser(user: UserEntity): ContextModel {
		return new ContextModel(user, this.vehicle, this.order);
	}

	cloneWithOrder(order: OrderEntity): ContextModel {
		return new ContextModel(this.user, this.vehicle, order);
	}

	cloneWithVehicle(vehicle: VehicleEntity): ContextModel {
		return new ContextModel(this.user, vehicle, this.order);
	}
}
