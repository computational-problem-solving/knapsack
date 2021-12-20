import Item from './Item.js';
import integerValuesKnapsack from './integerValuesKnapsack.js';
import integerValuesKnapsackUnbounded from './integerValuesKnapsackUnbounded.js';
import integerWeightsKnapsack from './integerWeightsKnapsack.js';
import integerWeightsKnapsackUnbounded from './integerWeightsKnapsackUnbounded.js';
import knapsackApprox from './knapsackApprox.js';
import knapsackGreedy from './knapsackGreedy.js';
import knapsackUnboundedGreedy from './knapsackUnboundedGreedy.js';
import orderedByDecreasingUtility from './orderedByDecreasingUtility.js';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	Item,
	integerValuesKnapsack,
	integerValuesKnapsackUnbounded,
	integerWeightsKnapsack,
	integerWeightsKnapsackUnbounded,
	knapsackApprox,
	knapsackGreedy,
	knapsackUnboundedGreedy,
	orderedByDecreasingUtility,
};

export {default as Item} from './Item.js';
export {default as integerValuesKnapsackUnbounded} from './integerValuesKnapsackUnbounded.js';
export {default as integerValuesKnapsack} from './integerValuesKnapsack.js';
export {default as integerWeightsKnapsackUnbounded} from './integerWeightsKnapsackUnbounded.js';
export {default as integerWeightsKnapsack} from './integerWeightsKnapsack.js';
export {default as knapsackGreedy} from './knapsackGreedy.js';
export {default as knapsackApprox} from './knapsackApprox.js';
export {default as orderedByDecreasingUtility} from './orderedByDecreasingUtility.js';
export {default as knapsackUnboundedGreedy} from './knapsackUnboundedGreedy.js';
