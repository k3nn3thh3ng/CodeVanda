import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';

import Boiler from '../Boiler';

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
	
	// const { classes } = props
	
	
	return (
		<Boiler>
			<ContactSectionOne />
			<ContactSectionTwo />
		</Boiler>
	)
}

export default withStyles(styles)(Contact);