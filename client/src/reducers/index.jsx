import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import sign_up from "./reducer_sign_up"
import edit_profile from "./reducer_edit_profile"

const rootReducer = combineReducers({
  sign_up: sign_up,
  edit_profile: edit_profile
})

export default rootReducer
