import test from 'ava';

import {all, map} from '@aureooms/js-itertools';

import {
	integerValuesKnapsack,
	integerWeightsKnapsack,
	knapsackApprox,
} from '../../src';

const macro = (t, solve, _name, v, w, n, W, opt, approx) => {
	t.is(n, v.length);
	t.is(n, w.length);
	const result = solve(v, w, n, W);
	if (approx === undefined) {
		t.is(opt, result);
	} else {
		t.true(result >= approx * opt);
	}
};

macro.title = (title, solve, name, v, w, n, W, opt, approx) =>
	title
		? `${title} (${name || solve.name})`
		: approx === undefined
		? `${name || solve.name}(${JSON.stringify(v)}, ${JSON.stringify(
				w,
		  )}, ${n}, ${W}) = ${opt}`
		: `${name || solve.name}(${JSON.stringify(v)}, ${JSON.stringify(
				w,
		  )}, ${n}, ${W}) >= ${approx} * ${opt}`;

const approx = (ratio) => {
	const eps = 1 - ratio;
	const name = `${knapsackApprox.name}(eps=${eps})`;
	const solve = (v, w, n, W) => knapsackApprox(eps, v, w, n, W);

	return {
		solve,
		name,
		approx: ratio,
	};
};

const solvers = [
	{
		solve: integerValuesKnapsack,
		hypothesis: (v) => all(map((x) => Number.isInteger(x), v)),
	},
	{
		solve: integerWeightsKnapsack,
		hypothesis: (_, w) => all(map((x) => Number.isInteger(x), w)),
	},
	approx(1 / 2),
	approx(2 / 3),
	approx(3 / 4),
];

const instances = [
	{
		title: 'wikipedia 0-1 knapsack example',
		v: [505, 352, 458, 220, 354, 414, 498, 545, 473, 543],
		w: [23, 26, 20, 18, 32, 27, 29, 26, 30, 27],
		n: 10,
		W: 67,
		opt: 1270,
	},
	{
		title: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10',
		v: [60, 100, 120],
		w: [10, 20, 30],
		n: 3,
		W: 50,
		opt: 220,
	},
];

for (const {title, v, w, n, W, opt} of instances) {
	for (const {solve, name, hypothesis, approx} of solvers) {
		if (!hypothesis || hypothesis(v, w, n, W)) {
			test(title, macro, solve, name, v, w, n, W, opt, approx);
		}
	}
}
