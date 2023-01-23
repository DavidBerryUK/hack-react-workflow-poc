export default class ActionExecutionResult {
	successful: boolean;
	message: string;

	private constructor(successful: boolean, message?: string) {
		this.successful = successful;
		this.message = message ?? '';
	}

	static success(): ActionExecutionResult {
		const result = new ActionExecutionResult(true);
		return result;
	}

	static fail(message: string): ActionExecutionResult {
		const result = new ActionExecutionResult(false, message);
		return result;
	}
}
