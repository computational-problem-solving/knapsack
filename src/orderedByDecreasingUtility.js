import {fn, decreasing} from '@aureooms/js-compare';

const utility = (x) => x.v / x.w;
const orderedByDecreasingUtility = fn(decreasing, utility);

export default orderedByDecreasingUtility;
