import assert from 'assert';

import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {sorted} from '@iterable-iterator/sorted';

import Item from './Item.js';
import orderedByDecreasingUtility from './orderedByDecreasingUtility.js';

/**
 * 1/2-approximation to the unbounded knapsack problem.
 * Runs in O(n log n) time.
 *
 * @param {Array} v Values.
 * @param {Array} w Weights.
 * @param {Number} n Size of the problem.
 * @param {Number} W Size of the knapsack.
 * @return {Number} Lower bound on the objective value of a solution, that is
 * at least half the objective value of the optimum.
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

export default knapsackUnboundedGreedy;
