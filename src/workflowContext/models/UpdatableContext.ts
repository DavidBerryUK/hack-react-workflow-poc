import ContextModel from './ContextModel';
import ContextSnapshotModel from './ContextSnapshotModel';
import IAction from '../../workflow/actions/interfaces/IAction';
import OrderModel from './OrderModel';
import UserModel from './UserModel';
import VehicleModel from './VehicleModel';
//
// Context for holding data when executing workflows.
//  Snapshots are taken whenever data is updated
//
// data can only by update via actions
//
//
export default class UpdatableContext {
	private snapshots: Array<ContextSnapshotModel>;
	data: ContextModel;

	constructor() {
		this.snapshots = new Array<ContextSnapshotModel>();
		this.data = new ContextModel();
	}

	updateUser(action: IAction, user: UserModel) {
		this.data = this.data.cloneWithUser(user);
		this.takeSnapshot(action);
	}

	updateVehicle(action: IAction, vehicle: VehicleModel) {
		this.data = this.data.cloneWithVehicle(vehicle);
		this.takeSnapshot(action);
	}

	updateOrder(action: IAction, order: OrderModel) {
		this.data = this.data.cloneWithOrder(order);
		this.takeSnapshot(action);
	}

	takeSnapshot(action: IAction) {
		const snapshot = new ContextSnapshotModel(this.data.clone(), action);
		this.snapshots.push(snapshot);
	}
}
