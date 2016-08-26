import {
  TOGGLE_DRAWER,
  SET_PAGE_TITLE,
} from '../constants/page'

const initialState = {
  title: 'POPSER',
  serials: [],
  drawerOpen: false,
}

export default function page (state = initialState, action) {
  switch(action.type) {

    // Устанавливаем заголовок в меню
    case SET_PAGE_TITLE:
      return {...state, title: action.payload}

    case TOGGLE_DRAWER:
      return {...state, drawerOpen: !state.drawerOpen}

    default:
      return state
  }
}
