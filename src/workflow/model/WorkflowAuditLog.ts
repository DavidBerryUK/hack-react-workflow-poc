/* eslint-disable import/no-cycle */
import WorkflowAuditItem from './WorkflowAuditItem';

export default class WorkflowAuditLog {
	items: Array<WorkflowAuditItem>;

	count: number;

	constructor() {
		this.count = 0;
		this.items = new Array<WorkflowAuditItem>();
	}

	add(audit: WorkflowAuditItem) {
		this.count += 1;
		audit.step = this.count;
		this.items.push(audit);
	}
}
