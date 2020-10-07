import test from 'ava';

import {integerKnapsack} from '../../src';

test('0-1 knapsack example', (t) => {
	const v = [505, 352, 458, 220, 354, 414, 498, 545, 473, 543];
	const w = [23, 26, 20, 18, 32, 27, 29, 26, 30, 27];
	const n = 10;
	const W = 67;
	const expected = 505;
	t.is(n, v.length);
	t.is(n, w.length);
	const result = integerKnapsack(v, w, n, W);
	t.is(expected, result);
});
