import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(devToolsEnhancer(
));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);



