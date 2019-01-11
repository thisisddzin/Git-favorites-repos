export const addFavorite = () => ({
  type: 'ADD_FAVORITE',
});

export const removeFavorite = id => ({
  type: 'REMOVE_FAVORITE',
  payload: { id },
});
