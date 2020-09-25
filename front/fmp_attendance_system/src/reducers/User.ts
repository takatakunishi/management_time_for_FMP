import { UserData } from '../states/User'
import { UserAction } from '../actions/Users/Action'
import { UsersActionTypes } from '../actions/Users/ActionType'

const initialState: UserData = {
    name: "",
    token: "",
    startTimeYear: 0,
    startTimeHour: 0,
    startTimeMinute: 0,
    status: ""
}

export default (state = initialState, action: UserAction): UserData => {
    switch (action.type) {
        case UsersActionTypes.GET_USER_SUCCESS:
            return action.payload
        default:
            return state
    }
}