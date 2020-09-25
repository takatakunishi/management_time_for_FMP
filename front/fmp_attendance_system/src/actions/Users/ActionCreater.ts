import { UsersActionTypes } from './ActionType'
import { createAsyncAction } from 'typesafe-actions'
import { UserData } from '../../states/User'
import { GetUserParam } from '../../api/User/GetUserApi'

export const getUserAction = createAsyncAction(
    UsersActionTypes.GET_USER_REQUEST,
    UsersActionTypes.GET_USER_SUCCESS,
    UsersActionTypes.GET_USER_FAIL
)<GetUserParam, UserData, Error>()
