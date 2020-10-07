import assert from 'assert';

const integerKnapsack = (v, w, n, W) => {
	assert(v.length === n);
	assert(w.length === n);
	assert(Number.isInteger(W) && W >= 0);
	return 0;
};

export default integerKnapsack;
