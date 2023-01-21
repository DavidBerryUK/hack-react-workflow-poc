import Origin from './Origin';
import Size from './Size';

export default class Rectangle {
	readonly origin: Origin;

	readonly size: Size;

	//
	// getters
	//

	get centerX(): number {
		return this.origin.x + this.size.halfWidth;
	}

	get centerY(): number {
		return this.origin.y + this.size.halfHeight;
	}

	get top(): number {
		return this.origin.y;
	}

	get bottom(): number {
		return this.origin.y + this.size.height;
	}

	get left(): number {
		return this.origin.x;
	}

	get right(): number {
		return this.origin.x + this.size.width;
	}

	get x(): number {
		return this.origin.x;
	}

	get y(): number {
		return this.origin.y;
	}

	get width(): number {
		return this.size.width;
	}

	get height(): number {
		return this.size.height;
	}

	get halfWidth(): number {
		return this.size.halfWidth;
	}

	get halfHeight(): number {
		return this.size.halfHeight;
	}

	//
	// Constructors
	//

	constructor(origin: Origin, size: Size) {
		this.origin = origin;
		this.size = size;
	}

	static get zero(): Rectangle {
		return new Rectangle(Origin.zero, Size.zero);
	}

	//
	// Clone helpers
	//

	clone() {
		return new Rectangle(this.origin.clone(), this.size.clone());
	}

	cloneWithSize(size: Size) {
		return new Rectangle(this.origin.clone(), size);
	}

	cloneWithOrigin(origin: Origin) {
		return new Rectangle(origin, this.size.clone());
	}

	cloneWithX(x: number) {
		return new Rectangle(this.origin.cloneWithX(x), this.size.clone());
	}

	cloneWithY(y: number) {
		return new Rectangle(this.origin.cloneWithY(y), this.size.clone());
	}

	cloneWithWidth(width: number) {
		return new Rectangle(this.origin.clone(), this.size.cloneWithWidth(width));
	}

	cloneWithHeight(height: number) {
		return new Rectangle(this.origin.clone(), this.size.cloneWithHeight(height));
	}

	//
	// To String
	//

	toString(): string {
		return `x:${this.x} y:${this.y} width:${this.width} height:${this.height} left:${this.left} right:${this.right} top:${this.top} bottom:${this.bottom}`;
	}
}
