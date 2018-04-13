export const FETCH_EVENT_SHOW_BEGIN   = 'FETCH_EVENT_SHOW_BEGIN';
export const FETCH_EVENT_SHOW_SUCCESS = 'FETCH_EVENT_SHOW_SUCCESS';
export const FETCH_EVENT_SHOW_FAILURE = 'FETCH_EVENT_SHOW_FAILURE';

export const fetchEventShowBegin = () => ({
  type: FETCH_EVENT_SHOW_BEGIN
});

export const fetchEventShowSuccess = event => ({
  type: FETCH_EVENT_SHOW_SUCCESS,
  event: event 
})

export const fetchEventShowFailure = error => ({
  type: FETCH_EVENT_SHOW_FAILURE,
  payload: error 
})

export const fetchEventShow = (id) => (dispatch) => {
    dispatch(fetchEventShowBegin());
    fetch(`/api/v1/events/${id}`,{
      credentials: 'same-origin'
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchEventShowSuccess(json));
        json;
      })
      .catch(error => dispatch(fetchEventShowFailure(error)));
  }


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}