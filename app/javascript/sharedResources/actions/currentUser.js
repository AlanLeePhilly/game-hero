export const FETCH_CURRENT_USER_BEGIN   = 'FETCH_CURRENT_USER_BEGIN';
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';

export const fetchCurrentUserBegin = () => ({
  type: FETCH_CURRENT_USER_BEGIN
});

export const fetchCurrentUserSuccess = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  currentUser: user 
})

export const fetchCurrentUserFailure = error => ({
  type: FETCH_CURRENT_USER_FAILURE,
  payload: error 
})

export const fetchCurrentUser = () => (dispatch) => {
    dispatch(fetchCurrentUserBegin());
    fetch('/api/v1/users/getCurrentUser',{
      credentials: 'same-origin'
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCurrentUserSuccess(json));
        json;
      })
      .catch(error => dispatch(fetchCurrentUserFailure(error)));
  }


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}