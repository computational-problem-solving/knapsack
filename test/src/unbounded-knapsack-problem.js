import test from 'ava';

import {all, map} from '@aureooms/js-itertools';

import {
	integerValuesKnapsackUnbounded,
	integerWeightsKnapsackUnbounded,
	knapsackUnboundedGreedy,
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

const solvers = [
	{
		solve: integerValuesKnapsackUnbounded,
		hypothesis: (v) => all(map((x) => Number.isInteger(x), v)),
	},
	{
		solve: integerWeightsKnapsackUnbounded,
		hypothesis: (_, w) => all(map((x) => Number.isInteger(x), w)),
	},
	{
		solve: knapsackUnboundedGreedy,
		approx: 1 / 2,
	},
];

const instances = [
	{
		title: 'wikipedia illustration',
		v: [4, 2, 2, 1, 10],
		w: [12, 2, 1, 1, 4],
		n: 5,
		W: 15,
		opt: 36,
	},
];

for (const {title, v, w, n, W, opt} of instances) {
	for (const {solve, name, hypothesis, approx} of solvers) {
		if (!hypothesis || hypothesis(v, w, n, W)) {
			test(title, macro, solve, name, v, w, n, W, opt, approx);
		}
	}
}
