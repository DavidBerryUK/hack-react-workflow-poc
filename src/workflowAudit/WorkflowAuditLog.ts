import WorkflowAuditItem from './WorkflowAuditItem';

export default class WorkflowAuditLog {
	items: Array<WorkflowAuditItem>;

	constructor() {
		this.items = new Array<WorkflowAuditItem>();
	}

	add(audit: WorkflowAuditItem) {
		this.items.push(audit);
	}
}
