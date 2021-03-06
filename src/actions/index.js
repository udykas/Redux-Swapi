import axios from 'axios' // we'll need axios
export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middleware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchChars = chars => {
    const getChars = axios.get('https://swapi.co/api/people/');
    return function(dispatch) {
      dispatch({ type: FETCHING });
      getChars
        .then( response => {
            console.log("response:", response)
            dispatch({ type: FETCHED, payload: response.data.results });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
};