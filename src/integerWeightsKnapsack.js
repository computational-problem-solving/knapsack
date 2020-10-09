import assert from 'assert';

const integerWeightsKnapsack = (
	v,
	w,
	n,
	W,
	m = new v.constructor(W + 1).fill(0),
) => {
	assert(v.length === n);
	assert(w.length === n);
	assert(Number.isInteger(W) && W >= 0);
	assert(m.length >= W + 1);
	for (let i = 0; i < n; ++i) {
		const wi = w[i];
		const vi = v[i];
		assert(Number.isInteger(wi) && wi >= 0 && wi <= W);
		const k = W - wi + 1;
		for (let j = 0; j < k; ++j) {
			m[j] = Math.max(m[j], m[j + wi] + vi);
		}
	}

	return m[0];
};

export default integerWeightsKnapsack;
