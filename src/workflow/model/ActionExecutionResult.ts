export default class ActionExecutionResult {
	successful: boolean;

	private constructor(successful: boolean) {
		this.successful = successful;
	}

	static get success(): ActionExecutionResult {
		const result = new ActionExecutionResult(true);
		return result;
	}

	static get failed(): ActionExecutionResult {
		const result = new ActionExecutionResult(false);
		return result;
	}
}
