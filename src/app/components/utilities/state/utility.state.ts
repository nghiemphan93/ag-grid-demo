import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { UtilityActions } from './utlity.actions';
import { Utility } from '../models/utility';
import { mockedUtilities } from '../constants/mockedUtilities';

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface UtilityStateModel {
  utilities: Utility[];
}

export const UTILITY_STATE: StateToken<UtilityStateModel> = new StateToken(
  'utilityState',
);
export const UTILITY_STATE_DEFAULT_VALUE: UtilityStateModel = {
  utilities: JSON.parse(JSON.stringify(mockedUtilities)),
};

@State<UtilityStateModel>({
  name: UTILITY_STATE,
  defaults: UTILITY_STATE_DEFAULT_VALUE,
})
@Injectable()
export class UtilityState {
  @Action(UtilityActions.GetUtilities)
  async getUtilities(ctx: StateContext<UtilityStateModel>) {
    const state = ctx.getState();
    return ctx.patchState({
      ...state,
      utilities: JSON.parse(JSON.stringify(mockedUtilities)),
    });
  }

  @Action(UtilityActions.UpdateUtility)
  async updateUtility(
    ctx: StateContext<UtilityStateModel>,
    action: UtilityActions.UpdateUtility,
  ) {
    const state = ctx.getState();
    await delay(1000);
    if (action.utility.id === '3') {
      throw new Error('Network error occurred. Please try again.');
    }
    const toUpdateUtilities = state.utilities;
    const toUpdateIndex = toUpdateUtilities.findIndex(
      (utility) => utility.id === action.utility.id,
    );
    toUpdateUtilities[toUpdateIndex] = action.utility;

    return ctx.patchState({ ...state, utilities: toUpdateUtilities });
  }

  @Action(UtilityActions.DeleteUtility)
  async deleteUtility(
    ctx: StateContext<UtilityStateModel>,
    action: UtilityActions.DeleteUtility,
  ) {
    const state = ctx.getState();
    await delay(1000);
    return ctx.patchState({
      ...state,
      utilities: state.utilities.filter(
        (utility) => utility.id !== action.utility.id,
      ),
    });
  }
}
