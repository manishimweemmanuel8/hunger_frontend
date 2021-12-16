import { createStore, applyMiddleware, Action } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const configureStore = () => {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(rootReducer, {}, middlewareEnhancer);
  return store;
};
