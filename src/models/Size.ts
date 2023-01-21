export default class Size {
	readonly width: number;

	readonly height: number;

	readonly halfWidth: number;

	readonly halfHeight: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.halfWidth = width / 2;
		this.halfHeight = height / 2;
	}

	static get zero(): Size {
		return new Size(0, 0);
	}

	clone(): Size {
		return new Size(this.width, this.height);
	}

	cloneWithWidth(width: number): Size {
		return new Size(width, this.height);
	}

	cloneWithHeight(height: number): Size {
		return new Size(this.width, height);
	}

	toString(): string {
		return `width:${this.width} height:${this.height}`;
	}
}
