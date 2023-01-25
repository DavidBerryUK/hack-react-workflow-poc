/* eslint-disable import/no-cycle */
import OrderEntity from '../../repositories/entities/OrderEntity';
import UserEntity from '../../repositories/entities/UserEntity';
import VehicleEntity from '../../repositories/entities/VehicleEntity';
import IAction from '../../workflow/actions/interfaces/IAction';
import WorkflowAuditLog from '../../workflow/model/WorkflowAuditLog';
import ContextModel from './ContextModel';
import ContextSnapshotModel from './ContextSnapshotModel';

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

	auditLog: WorkflowAuditLog;

	constructor() {
		this.snapshots = new Array<ContextSnapshotModel>();
		this.data = new ContextModel();
		this.auditLog = new WorkflowAuditLog();
	}

	updateUser(action: IAction, user: UserEntity, transactionId: string) {
		this.data = this.data.cloneWithUser(user);
		this.takeSnapshot(action, transactionId);
	}

	updateVehicle(action: IAction, vehicle: VehicleEntity, transactionId: string) {
		this.data = this.data.cloneWithVehicle(vehicle);
		this.takeSnapshot(action, transactionId);
	}

	updateOrder(action: IAction, order: OrderEntity, transactionId: string) {
		this.data = this.data.cloneWithOrder(order);
		this.takeSnapshot(action, transactionId);
	}

	takeSnapshot(action: IAction, transactionId: string) {
		const snapshot = new ContextSnapshotModel(this.data.clone(), action, transactionId);
		this.snapshots.push(snapshot);
	}

	getSnapShotForTransaction(transactionId: string): ContextSnapshotModel | undefined {
		const snapshot = this.snapshots.filter((item) => item.transactionId === transactionId);
		if (snapshot.length > 0) {
			return snapshot[0];
		}
		return undefined;
	}
}
