import EnumConnectionType from '../connections/EnumConnectionType';

export default class ActionExecutionResult {
	successful: boolean;

	message: string;

	exitConnection: EnumConnectionType;

	private constructor(successful: boolean, message: string, exitConnection: EnumConnectionType) {
		this.successful = successful;
		this.message = message;
		this.exitConnection = exitConnection;
	}

	static success(): ActionExecutionResult {
		return new ActionExecutionResult(true, '', EnumConnectionType.onSuccess);
	}

	static fail(message: string): ActionExecutionResult {
		return new ActionExecutionResult(false, message, EnumConnectionType.onFail);
	}

	static yes(message?: string): ActionExecutionResult {
		return new ActionExecutionResult(true, message ?? '', EnumConnectionType.onYes);
	}

	static no(message?: string): ActionExecutionResult {
		return new ActionExecutionResult(true, message ?? '', EnumConnectionType.onNo);
	}
}
