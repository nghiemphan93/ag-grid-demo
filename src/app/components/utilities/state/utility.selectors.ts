import { createSelector } from '@ngxs/store';
import { UTILITY_STATE } from './utility.state';

export namespace UtilitySelectors {
  export const getUtilities = () =>
    createSelector([UTILITY_STATE], (state) => state.utilities);
}
