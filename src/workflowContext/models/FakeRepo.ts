import OrderEntity from '../../repositories/entities/OrderEntity';
import UserEntity from '../../repositories/entities/UserEntity';
import VehicleEntity from '../../repositories/entities/VehicleEntity';

export default class FakeRepo {
	readonly users: Map<string, UserEntity>;

	readonly vehicles: Map<string, VehicleEntity>;

	readonly orders: Map<string, OrderEntity>;

	constructor() {
		this.users = new Map<string, UserEntity>();
		this.vehicles = new Map<string, VehicleEntity>();
		this.orders = new Map<string, OrderEntity>();
	}

	getUser(id: string) {
		return this.users.get(id);
	}

	getOrder(id: string) {
		return this.orders.get(id);
	}

	getVehicle(id: string) {
		return this.vehicles.get(id);
	}
}
