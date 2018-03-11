<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      rootReducer,
      applyMiddleware(
        thunkMiddleware
      )
    )
  } else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) : compose;

    const store = createStore(
      rootReducer,
      composeEnhancers(
        applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
        )
      )      
    );

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer);
      })
    }

    return store;
  }
=======
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from '../reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  )
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
}
