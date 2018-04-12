export const FETCH_USER_BEGIN   = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: { user }
})

export const fetchUserError = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error }
})

export const fetchUser = () => (dispatch) => {
    dispatch(fetchUserBegin());
    fetch('/api/v1/users')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchUserSuccess(json.user));
        json.user;
      })
      .catch(error => dispatch(fetchUserFailure(error)));
  }


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}