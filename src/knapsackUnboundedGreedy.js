import assert from 'assert';
import {fn, decreasing} from '@aureooms/js-compare';
import {map, range, sorted} from '@aureooms/js-itertools';

/**
 * 1/2-approximation to the unbounded knapsack problem.
 * Runs in O(n log n) time.
 *
 * @param {Array} v Values.
 * @param {Array} w Weights.
 * @param {Number} n Size of the problem.
 * @param {Number} W Size of the knapsack.
 */
const knapsackUnboundedGreedy = (v, w, n, W) => {
	assert(v.length === n);
	assert(w.length === n);
	assert(W >= 0);

	const items = sorted(
		orderedByDecreasingUtility,
		map((i) => new Item(w[i], v[i]), range(n)),
	);
	return subroutine(W, items);
};

const subroutine = (W, items) => {
	let value = 0;
	let capacity = W;
	for (const {v, w} of items) {
		const copies = Math.floor(capacity / w);
		capacity -= copies * w;
		value += copies * v;
	}

	return value;
};

function Item(weight, value) {
	assert(weight > 0);
	this.w = weight;
	this.v = value;
}

const utility = (x) => x.v / x.w;
const orderedByDecreasingUtility = fn(decreasing, utility);

export default knapsackUnboundedGreedy;
