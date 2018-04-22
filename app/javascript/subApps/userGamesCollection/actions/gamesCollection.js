export const FETCH_GAMES_COLLECTION_BEGIN   = 'FETCH_GAMES_COLLECTION_BEGIN';
export const FETCH_GAMES_COLLECTION_SUCCESS = 'FETCH_GAMES_COLLECTION_SUCCESS';
export const FETCH_GAMES_COLLECTION_FAILURE = 'FETCH_GAMES_COLLECTION_FAILURE';

export const fetchGamesCollectionBegin = () => ({
  type: FETCH_GAMES_COLLECTION_BEGIN
});

export const fetchGamesCollectionSuccess = games => ({
  type: FETCH_GAMES_COLLECTION_SUCCESS,
  games: games
})

export const fetchGamesCollectionFailure = error => ({
  type: FETCH_GAMES_COLLECTION_FAILURE,
  errorMessage: error
})



export const fetchGamesCollection = (id) => (dispatch) => {
    dispatch(fetchGamesCollectionBegin());
    fetch(`/api/v1/users/${id}/games`,{
      credentials: 'same-origin'
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
          dispatch(fetchGamesCollectionSuccess(json)) })
      .catch(error => {
        console.log(error)
        dispatch(fetchGamesCollectionFailure(error))
      }
      );
  }


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}