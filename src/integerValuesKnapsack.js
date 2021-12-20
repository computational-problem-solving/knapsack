import assert from 'assert';

import {sum} from '@iterable-iterator/reduce';

/**
 * Exact DP solution to the 0-1 knapsack problem with integer values given a known
 * upper bound V on OPT. Runs in O(nV) time.
 *
 * @param {Array} v Values.
 * @param {Array} w Weights.
 * @param {Number} n Size of the problem.
 * @param {Number} W Size of the knapsack.
 * @param {Number} V Any upper bound on OPT >= 0.
 * @param {Array} m Memory buffer.
 * @return {Number} Objective value of the optimum.
 */
const integerValuesKnapsack = (
	v,
	w,
	n,
	W,
	V = sum(v),
	m = new w.constructor(V + 1).fill(W + 1),
) => {
	assert(v.length === n);
	assert(w.length === n);
	assert(Number.isInteger(V) && V >= 0);
	assert(m.length >= V + 1);
	m[V] = 0;
	for (let i = 0; i < n; ++i) {
		const wi = w[i];
		const vi = v[i];
		assert(Number.isInteger(vi) && vi >= 0);
		const k = V - vi + 1;
		for (let j = 0; j < k; ++j) {
			m[j] = Math.min(m[j], m[j + vi] + wi);
		}
	}

	for (let j = 0; j < V; ++j) {
		if (m[j] <= W) return V - j;
	}

	return 0;
};

export default integerValuesKnapsack;
