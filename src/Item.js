import assert from 'assert';

export default function Item(weight, value) {
	assert(weight > 0);
	this.w = weight;
	this.v = value;
}
