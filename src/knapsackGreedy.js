import assert from 'assert';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {sorted} from '@iterable-iterator/sorted';
import {filter} from '@iterable-iterator/filter';

import Item from './Item';
import orderedByDecreasingUtility from './orderedByDecreasingUtility';

/**
 * 1/2-approximation to the 0-1 knapsack problem.
 * Runs in O(n log n) time.
 *
 * Let OPT' be the value of the LP relaxation.
 * Let v_i be the values of the items ordered by utility.
 * Let k be the largest k such that sum(v[:k]) <= W.
 * Let t = (W-sum(w[:k])) / w_{k+1},
 * we have t < 1 and OPT' = sum(v[:k]) + t * v_{k+1}.
 * Hence sum(v[:k+1]) > OPT' >= OPT.
 * By partition one of { sum(v[:k]) , v_{k+1} } is at least OPT / 2.
 * Assuming w_i <= W for all i in [N] each of these is feasible.
 *
 * @param {Array} v Values.
 * @param {Array} w Weights.
 * @param {Number} n Size of the problem.
 * @param {Number} W Size of the knapsack.
 */
const knapsackGreedy = (v, w, n, W) => {
	assert(v.length === n);
	assert(w.length === n);
	assert(W >= 0);

	const items = sorted(
		orderedByDecreasingUtility,
		filter(
			(item) => item.w <= W,
			map((i) => new Item(w[i], v[i]), range(n)),
		),
	);
	return subroutine(W, items);
};

const subroutine = (W, items) => {
	let value = 0;
	let capacity = W;
	for (const {v, w} of items) {
		if (capacity < w) return Math.max(v, value);
		capacity -= w;
		value += v;
	}

	return value;
};

export default knapsackGreedy;
