const GET_GREETING = 'GET_GREETINGS';

const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  };
};

export default greetingReducer;

export const getMessage = (payload) => ({
  type: GET_GREETING,
  payload,
});

export const getGreeting = () => async (dispatch) => {
  const res = await fetch('http://localhost:3001/api/v1/greetings');
  const data = await res.json();
  dispatch(getMessage(data));
}; 




