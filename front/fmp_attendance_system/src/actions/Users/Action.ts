import { ActionType } from 'typesafe-actions'
import * as ActionCreater from './ActionCreater'

export type UserAction = ActionType<typeof ActionCreater>
