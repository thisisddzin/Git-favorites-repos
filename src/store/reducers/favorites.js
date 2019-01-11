const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, {
        id: Math.random(),
        name: 'facebook/react',
        description: 'Facebook the best framework for everybody',
        url: 'http://github.com/facebook/react',
      }];
    case 'REMOVE_FAVORITE':
      return state.filter(favorite => favorite.id !== action.payload.id);
    default:
      return state;
  }
}
