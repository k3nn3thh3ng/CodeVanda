import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';

import Boiler from '../Boiler';

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
	
	// const { classes } = props
	
	
	return (
		<Boiler>
			<ProBonoSectionOne />
			<ProBonoSectionTwo />
			<ProBonoSectionThree />
		</Boiler>
	)
}

export default withStyles(styles)(ProBono);