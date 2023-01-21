import EnumOrderStatus from '../enums/EnumOrderStatus';
//
// A model of an order to be stored in the context
//
export default class OrderModel {
	readonly orderRef: string;
	readonly status: EnumOrderStatus;
	readonly cost: number;

	constructor(orderRef: string, status: EnumOrderStatus, cost: number) {
		this.orderRef = orderRef;
		this.status = status;
		this.cost = cost;
	}

	clone(): OrderModel {
		return new OrderModel(this.orderRef, this.status, this.cost);
	}
}
