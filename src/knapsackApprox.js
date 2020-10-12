import assert from 'assert';
import {increasing} from '@aureooms/js-compare';
import {max, map, filter, range} from '@aureooms/js-itertools';

import integerValuesKnapsack from './integerValuesKnapsack';

/**
 * (1-eps)-approx for the knapsack problem. Runs in O(N^3/eps) time.
 *
 * @param {Array} v Values.
 * @param {Array} w Weights.
 * @param {Array} n Size of the problem.
 * @param {Array} W Size of the knapsack.
 * @param {Array} eps Approximation constant.
 * @param {Number} P Any lower bound on OPT > 0.
 */
const knapsackApprox = (
	eps,
	v,
	w,
	n,
	W,
	P = max(
		increasing,
		map(
			(i) => v[i],
			filter((i) => w[i] <= W, range(n)),
		),
	),
) => {
	assert(eps > 0 && eps < 1);
	assert(P > 0);
	assert(v.length === n);
	assert(w.length === n);
	const K = (eps * P) / n;
	const u = Uint32Array.from(v, (vi) => Math.floor(vi / K));
	// TODO reconstruct solution
	return K * integerValuesKnapsack(u, w, n, W);
};

export default knapsackApprox;
