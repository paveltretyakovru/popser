import {
  SET_PAGE_TITLE,
} from '../constants/page'

const initialState = {
  title: '',
  serials: [],
}

export default function page (state = initialState, action) {
  switch(action.type) {

    // Устанавливаем заголовок в меню
    case SET_PAGE_TITLE:
      console.log('SET PAGE TITLE :)')
      return {...state, title: action.payload}

    default:
      return state
  }
}
