import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Appbar from './Appbar';
import Footer from './Footer';

import PlainAppbar from './PlainAppbar';
import PlainFooter from './PlainFooter';

const styles = (theme) => ({
	root: {
		minHeight: '90vh'
	}
})

function TopAndBottom(props){
	// const {classes} = props
	
	const renderAppbar = (condition) => {
		if (condition) {
			return <PlainAppbar />
		} return <Appbar />
	}
	
	const renderFooter = (condition) => {
		if (condition) {
			return <PlainFooter />
		} return <Footer />
	}
	
	return(
		<React.Fragment>
			{renderAppbar(props.plainAppbar)}
				{props.children}
			{renderFooter(props.plainFooter)}
		</React.Fragment>
	)
}

export default withStyles(styles)(TopAndBottom);