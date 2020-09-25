import { takeLatest } from "redux-saga/effects"
import { UsersActionTypes } from "../../actions/Users/ActionType"
import { getUserSaga } from "./GetUserSaga"

export const userSaga = [
    takeLatest(UsersActionTypes.GET_USER_REQUEST, getUserSaga),
]