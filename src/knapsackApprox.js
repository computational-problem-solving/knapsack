import assert from 'assert';

import {filter} from '@iterable-iterator/filter';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {max} from '@iterable-iterator/reduce';
import {increasing} from '@total-order/primitive';

import integerValuesKnapsack from './integerValuesKnapsack.js';

/**
 * (1-eps)-approx for the knapsack problem. Runs in O(N^3/eps) time.
 *
 * @param {Number} eps Approximation constant.
 * @param {Array} v Values.
 * @param {Array} w Weights.
 * @param {Number} n Size of the problem.
 * @param {Number} W Size of the knapsack.
 * @param {Number} P Any lower bound on OPT > 0.
 * @return {Number} Lower bound on the objective value of a solution, that is
 * at least 1-eps the objective value of the optimum.
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
