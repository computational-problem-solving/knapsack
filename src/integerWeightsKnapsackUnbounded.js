import assert from 'assert';

const integerWeightsKnapsackUnbounded = (
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
	for (let j = 1; j <= W; ++j) {
		let temporary = m[j];
		for (let i = 0; i < n; ++i) {
			const wi = w[i];
			const vi = v[i];
			assert(Number.isInteger(wi) && wi >= 0 && wi <= W);
			const k = j - wi;
			// TODO sort by weight to avoid branching
			// from larger to smaller so that m is scanned
			// from left to right
			if (k >= 0) temporary = Math.max(temporary, m[k] + vi);
		}

		m[j] = temporary;
	}

	return m[W];
};

export default integerWeightsKnapsackUnbounded;
