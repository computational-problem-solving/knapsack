import assert from 'assert';
import {increasing} from '@aureooms/js-compare';
import {max, map, range} from '@aureooms/js-itertools';

/**
 * Exact DP solution to the unbounded knapsack problem with integer values
 * given a known upper bound V on OPT. Runs in O(nV) time.
 *
 * @param {Array} v Values.
 * @param {Array} w Weights.
 * @param {Number} n Size of the problem.
 * @param {Number} W Size of the knapsack.
 * @param {Number|BigInt} zero The number 0.
 * @param {Number} V Any upper bound on OPT >= 0.
 * @param {Array} m Memory buffer.
 */
const integerValuesKnapsackUnbounded = (
	v,
	w,
	n,
	W,
	zero = 0,
	V = Math.floor(
		W *
			max(
				increasing,
				map((i) => v[i] / w[i], range(n)),
				zero,
			),
	),
	m = new w.constructor(V + 1).fill(W + 1),
) => {
	assert(v.length === n);
	assert(w.length === n);
	assert(Number.isInteger(V) && V >= 0);
	assert(m.length >= V + 1);
	m[0] = 0;
	for (let j = 1; j <= V; ++j) {
		let temporary = m[j];
		for (let i = 0; i < n; ++i) {
			const wi = w[i];
			const vi = v[i];
			assert(Number.isInteger(vi) && vi >= 0);
			const k = j - vi;
			// TODO sort by value to avoid branching
			// from larger to smaller so that m is scanned
			// from left to right
			if (k >= 0) temporary = Math.min(temporary, m[k] + wi);
		}

		m[j] = temporary;
	}

	for (let j = V; j > 0; --j) {
		if (m[j] <= W) return j;
	}

	return 0;
};

export default integerValuesKnapsackUnbounded;
