import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';

import ContactSectionOne from '../ContactSectionOne';
import ContactSectionTwo from '../ContactSectionTwo';

const styles = (theme) => createStyles({
	main: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

function Contact(props){
	
	const { classes } = props
	
	
	return (
		<Grid className={classes.main}>
			<Appbar />
			<ContactSectionOne />
			<ContactSectionTwo />
			<Footer position="relative"/>
		</Grid>
	)
}

export default withStyles(styles)(Contact);