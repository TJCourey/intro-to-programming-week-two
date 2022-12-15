import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { CountData } from "../models";


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
export const SelectCountBy = createSelector(SelectCountBranch, b => b.by);

export const selectCountData = createSelector(SelectCountBranch, b => b as CountData);