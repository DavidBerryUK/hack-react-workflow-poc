export default class Origin {
	readonly x: number;

	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	static get zero(): Origin {
		return new Origin(0, 0);
	}

	clone(): Origin {
		return new Origin(this.x, this.y);
	}

	cloneWithX(x: number): Origin {
		return new Origin(x, this.y);
	}

	cloneWithY(y: number): Origin {
		return new Origin(this.x, y);
	}

	toString(): string {
		return `x:${this.x} y:${this.y}`;
	}
}
