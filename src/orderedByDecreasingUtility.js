import {key} from '@total-order/key';
import {decreasing} from '@total-order/primitive';

const utility = (x) => x.v / x.w;
const orderedByDecreasingUtility = key(decreasing, utility);

export default orderedByDecreasingUtility;
