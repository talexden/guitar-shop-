import {createAction} from '@reduxjs/toolkit';
import {SortDirect, SortKey} from '../common/const';
import {ActionType} from '../types/actionType';
import {GuitarType} from '../types/stateType';


export const setGuitars = createAction(
  ActionType.SetGuitars,
  (guitars: GuitarType[])=>(
    {payload: {guitars}}
  ));

export const setSortedGuitars = createAction(
  ActionType.SetSortedGuitars,
  (guitars: GuitarType[])=>(
    {payload: {guitars}}
  ));

export const setSearchedGuitars = createAction(
  ActionType.SetSearchedGuitars,
  (guitars: GuitarType[])=>(
    {payload: {guitars}}
  ));

export const setGuitarById = createAction(
  ActionType.SetGuitarById,
  (guitar: GuitarType)=>(
    {payload: {guitar}}
  ));

export const setSortKey = createAction(
  ActionType.SetSortKey,
  (sortKey: SortKey)=>(
    {payload: sortKey}
  ));

export const setSortDirect = createAction(
  ActionType.SetSortDirect,
  (sortDirect: SortDirect)=>(
    {payload: sortDirect}
  ));

export const setIsLoading = createAction(ActionType.SetIsLoading);
export const setIsLoaded = createAction(ActionType.SetIsLoaded);
