import { getUserAction } from "../../actions/Users/ActionCreater"
import { PromiseGenericType } from "../PromiseGenericType"
import { getUserApi } from "../../api/User/GetUserApi"
import { call, put } from "redux-saga/effects"

export function* getUserSaga(action: ReturnType<typeof getUserAction.request>) {
    try {
        const response: PromiseGenericType<ReturnType<typeof getUserApi>> = yield call(
            getUserApi,
            action.payload
        )
        if (response.status === 200 && response.data) {
            const userData = {
                name: response.data.GetAngrySpot,
                token: response.data.GetDislikeSpot,
                startTimeYear: 0,
                startTimeHour: 0,
                startTimeMinute: 0,
                status: "rest"
            }
            yield put(getUserAction.success(userData))
        } else {
            yield put(getUserAction.failure(new Error('fail get user in api')))
        }
    } catch (e) {
        yield put(getUserAction.failure(new Error('fail get user in api')))
    }
}