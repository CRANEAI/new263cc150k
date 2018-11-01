import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import edit_profile from "./reducer_edit_profile"
import search from "./reducer_search"
import chat from "./reducer_chat"
import sign_up from "./reducer_sign_up"

const rootReducer = combineReducers({
  edit_profile: edit_profile,
  search: search,
  chat: chat,
  sign_up: sign_up
})

export default rootReducer
