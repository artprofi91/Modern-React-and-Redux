import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM || CREATE_STREAM || EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') };
    case DELETE_STREAM:
      return _.omit(state, payload);
    default:
      return state;
  }
};
