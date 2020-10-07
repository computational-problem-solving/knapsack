import test from 'ava';

import {integerKnapsack} from '../../src';

const macro = (t, v, w, n, W, expected) => {
	t.is(n, v.length);
	t.is(n, w.length);
	const result = integerKnapsack(v, w, n, W);
	t.is(expected, result);
};

macro.title = (title, v, w, n, W, expected) =>
	title ||
	`integerKnapsack(${JSON.stringify(v)}, ${JSON.stringify(
		w,
	)}, ${n}, ${W}) = ${expected}`;

test(
	'wikipedia 0-1 knapsack example',
	macro,
	[505, 352, 458, 220, 354, 414, 498, 545, 473, 543],
	[23, 26, 20, 18, 32, 27, 29, 26, 30, 27],
	10,
	67,
	505,
);

test(
	'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10',
	macro,
	[60, 100, 120],
	[10, 20, 30],
	3,
	50,
	220,
);
