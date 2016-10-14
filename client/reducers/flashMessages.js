import shortid from 'shortid'

import { ADD_FLASH_MESSAGE } from '../actions/types.js'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      console.log('action received: ', state)
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ]
    default:
      return state
  }
}
