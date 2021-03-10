import React from 'react';
import { 
	Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Form from './Form';


const styles = (theme) => ({
	mainWrapper: {
		maxWidth: theme.spacing(80),
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(0,4,8)
	},
})

function ProBonoSectionThree(props) {
	
	const { classes } = props;
		
	return(
		<React.Fragment>
			<Grid container className={classes.mainWrapper}>
				<Form title="Register Interest"/>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(ProBonoSectionThree);