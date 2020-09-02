import { UserData } from '../states/User'
import { UsersActionTypes } from '../actions/Users/ActionType'
import { UserAction } from '../actions/Users/Action'

const initialState: UserData = {}

export default (state = initialState, action: UserAction): UserData => {
    switch (action.type) {
        // case PraseActionTypes.SEND_PRASE_MESSAGE:

        //     result = [...state]

        //     result.push(action.payload)
        //     result.sort((a, b) => {
        //         return a.praseActionID - b.praseActionID
        //     })

        //     return result
        default:
            return state
    }
}