import R from 'ramda'

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONE,
  SELECT_BY_PRICE
} from '../actionTypes'

const initialState = {
  ids: [],
  search: '',
  minPrice: 0,
  maxPrice: 10000,
  offset: 0
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload),
        offset: 0
      })
    case LOAD_MORE_PHONES_SUCCESS:
      const id = R.pluck('id', payload)
      const ids = R.slice(state.offset,(state.offset+3),id)
      return R.merge(state, {
        ids: R.concat(ids, state.ids),
        offset: state.offset + 3
      })
    case SEARCH_PHONE:
      return R.merge(state, {
        search:  payload
      })
    case SELECT_BY_PRICE:
     const min = R.prop('min', payload)
     const max = R.prop('max', payload)
      return R.merge(state, {
        minPrice:  min,
        maxPrice:  max
      })

    default:
      return state
  }
}