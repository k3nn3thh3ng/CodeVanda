import React from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
	root: {
		backgroundColor: '#07889B',
		padding: theme.spacing(8, 0),
		color: 'white',
	},
	header: {
		padding: theme.spacing(3, 0)
	},
	subHeader: {
		padding: theme.spacing(3, 0)
	},
	dividerContainer: {
		width: '100%',
		margin: theme.spacing(1, 0),
	},
	divider: {
		borderBottom: '2px solid rgba(0, 0, 0, 0.25)',
		width: '10%'
	},
	buttonContainer: {
	},
	buttonContain: {
		margin: theme.spacing(0, 1.5),
		backgroundColor: '#EEAA78',
		color: 'black'
	},
	buttonOutline: {
		margin: theme.spacing(0, 1.5),
		color: 'white',
		borderColor: 'white'
	}
})

function ContactUs(props) {
	const { classes } = props
	
	
	return(
		<Grid container direction="column" alignItems="center" className={classes.root}>
			<Typography variant="h5" align="center" className={classes.header}>
				Browsing some possibilities?
			</Typography>
			<Grid container justify="center" className={classes.dividerContainer}>
				<Box className={classes.divider} />
			</Grid>
			<Typography variant="subtitle1" align="center" className={classes.subHeader}>
				Look at some of my pet projects showcasing different functionalities
			</Typography>
			<Grid container justify="center" className={classes.buttonContainer}>
				<Button variant="contained" size="large" className={classes.buttonContain}>
					Contact Us
				</Button>
				<Button variant="outlined" size="large" className={classes.buttonOutline}>
					View Demos
				</Button>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(ContactUs);