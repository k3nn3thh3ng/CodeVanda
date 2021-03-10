import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'

import Appbar from './Appbar';
import Footer from './Footer';


const styles = (theme) => ({
	root: {
		minHeight: '90vh'
	}
})

function TopAndBottom(props){
	const {classes} = props
	
	return(
		<React.Fragment>
			<Box className={classes.root}>
				<Appbar />
					{props.children}
			</Box>
			<Footer />
		</React.Fragment>
	)
}

export default withStyles(styles)(TopAndBottom);