import uuid from "uuid/v4"
import { FLASH_MESSAGE_ADD, FLASH_MESSAGE_REMOVE } from "./actions"

const flash = (state = [], action) => {
  switch (action.type) {
  case FLASH_MESSAGE_ADD:
    return [...state, {id: uuid(), level: action.level, message: action.message}]
  case FLASH_MESSAGE_REMOVE:
    return state.filter(message => message.id !== action.id)
  default:
    return state
  }
}

export const getFlashMessages = (state) => (state.flash)

export default flash
