export const FLASH_MESSAGE_ADD = "FLASH_MESSAGE_ADD"
export const FLASH_MESSAGE_REMOVE = "FLASH_MESSAGE_REMOVE"

export const addMessage = (level, message) => ({
  type: FLASH_MESSAGE_ADD,
  level,
  message
})

export const removeMessage = (id) => ({
  type: FLASH_MESSAGE_REMOVE,
  id
})
