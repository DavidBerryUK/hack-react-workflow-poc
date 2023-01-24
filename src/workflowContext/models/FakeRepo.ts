import OrderModel from './OrderModel';
import UserModel from './UserModel';
import VehicleModel from './VehicleModel';

export default class FakeRepo {
	readonly users: Map<string, UserModel>;

	readonly vehicles: Map<string, VehicleModel>;

	readonly orders: Map<string, OrderModel>;

	constructor() {
		this.users = new Map<string, UserModel>();
		this.vehicles = new Map<string, VehicleModel>();
		this.orders = new Map<string, OrderModel>();
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
