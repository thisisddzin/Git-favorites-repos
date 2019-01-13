/*
 * Types
 */

export const Types = {
  ADD_REQUEST: 'ADD_FAVORITE_REQUEST',
  ADD_SUCCESS: 'ADD_FAVORITE_SUCCESS',
  ADD_FAILURE: 'ADD_FAVORITE_FAILURE',
  ADD_REMOVE: 'ADD_FAVORITE_REMOVE',
};

/*
 * ACTIONS
 */

export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),
  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeFavorite: id => ({
    type: Types.ADD_REMOVE,
    payload: { id },
  }),
};

/*
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.ADD_REMOVE:
      return { data: state.data.filter(favorite => favorite.id !== action.payload.id) };
    default:
      return state;
  }
}
