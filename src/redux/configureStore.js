import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greeting'
import { composeWithDevTools } from 'redux-devtools-extension'  
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: { greeting: greetingReducer, }},
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store; 