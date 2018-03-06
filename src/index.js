import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './reducers'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reduxThunk))

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
