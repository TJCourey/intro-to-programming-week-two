import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";


import * as fromCount from './reducers/count-reducer'
export const featureName = "counter";

export interface CounterState {
    count: fromCount.CountState
}

export const reducers: ActionReducerMap<CounterState> = {
    count: fromCount.reducer
};

const selectFeature = createFeatureSelector<CounterState>(featureName);
const SelectCountBranch = createSelector(selectFeature, f => f.count);

export const SelectCountCurrent = createSelector(SelectCountBranch, b=> b.current);
export const SelectCountBy = createSelector(SelectCountBranch, b => b.by)