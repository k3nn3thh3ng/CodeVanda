import React from 'react';
import {
	Router,
	Switch,
	Route
	// Link
} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { createBrowserHistory } from 'history';

import './styles/Appfont.css';

import BackendWebDevelopment from './pages/BackendWebDevelopment';
import FrontendWebDevelopment from './pages/FrontendWebDevelopment';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Prices from './pages/Prices';
import ProBono from './pages/ProBono';
import ScrollToTop from './ScrollToTop';

const history = createBrowserHistory();

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Nunito',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		].join(','),
		fontSize: 14,
		h1:{
			fontSize: '5rem',
			fontWeight: 600
		},
		h2:{
			fontSize: '4rem',
			fontWeight: 600
		},
		h3:{
			fontWeight: 600
		},
		h4:{
			fontWeight: 600
		},
		h5:{
			fontWeight: 600
		},
		h6:{
			fontWeight: 600
		},

	},
	
})


function App(props) {	
	return (

			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router history={history}>
					<ScrollToTop />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/services/backendwebdevelopment">
							<BackendWebDevelopment />
						</Route>
						<Route exact path="/services/frontendwebdevelopment">
							<FrontendWebDevelopment />
						</Route>
						<Route exact path="/services">
							<Services />
						</Route>
						<Route exact path="/prices">
							<Prices />
						</Route>
						<Route exact path="/probono">
							<ProBono />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route component={NotFound} />
					</Switch>
				</Router>
			</ThemeProvider>

  );
}

export default App;
