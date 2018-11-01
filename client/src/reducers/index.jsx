import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import search from "./reducer_search"
import chat from "./reducer_chat"
import sign_up from "./reducer_sign_up"
import edit_profile from "./reducer_edit_profile"

const rootReducer = combineReducers({
  search: search,
  chat: chat,
  sign_up: sign_up,
  edit_profile: edit_profile
})

export default rootReducer
