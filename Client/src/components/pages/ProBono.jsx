import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';

import ProBonoSectionOne from '../ProBonoSectionOne';
import ProBonoSectionTwo from '../ProBonoSectionTwo';
import ProBonoSectionThree from '../ProBonoSectionThree';

const styles = (theme) => createStyles({
	main: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

function ProBono(props){
	
	const { classes } = props
	
	
	return (
		<Grid className={classes.main}>
			<Appbar />
			<ProBonoSectionOne />
			<ProBonoSectionTwo />
			<ProBonoSectionThree />
			<Footer position="relative"/>
		</Grid>
	)
}

export default withStyles(styles)(ProBono);