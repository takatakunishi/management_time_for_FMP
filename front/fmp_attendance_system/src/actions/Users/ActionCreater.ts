import { UsersActionTypes } from './ActionType'
import { createAction } from 'typesafe-actions'
import { UserData } from '../../states/User'

export const addUserAction = createAction(
    UsersActionTypes.ADD_USER,
    (user: UserData) => user,
)();

export const setMainUserAction = createAction(
    UsersActionTypes.SET_MAIN_USER,
    (user: UserData) => user,
)();

export const setPrasedUserAction = createAction(
    UsersActionTypes.SET_PRASED_USER,
    (user: UserData) => user,
)();
