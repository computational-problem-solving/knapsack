import assert from 'assert';
import {sum} from '@aureooms/js-itertools';

const integerValuesKnapsack = (
	v,
	w,
	n,
	W,
	V = sum(v),
	m = new w.constructor(V + 1).fill(Number(Infinity)),
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
