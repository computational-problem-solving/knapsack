import {decreasing} from '@total-order/primitive';
import {key} from '@total-order/key';

const utility = (x) => x.v / x.w;
const orderedByDecreasingUtility = key(decreasing, utility);

export default orderedByDecreasingUtility;
