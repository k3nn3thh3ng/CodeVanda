import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
	root: {
		backgroundColor: '#07889B',
		padding: theme.spacing(8, 0),
	},
	dividerContainer: {
		margin: theme.spacing(1, 0),
	},
	divider: {
		borderBottom: '2px solid rgba(0, 0, 0, 0.25)',
		width: '10%'
	},
})

function SingleText(props) {
	const { classes } = props
	
	
	return(
		<Grid container direction="column" className={classes.root}>
			<Grid xs={8}>
				<Typography variant="h5" align="left">
					Money Back Guarantee
				</Typography>
			</Grid>
			<Grid container justify="center" className={classes.dividerContainer}>
				<Box className={classes.divider} />
			</Grid>
			<Typography variant="subtitle1" align="center">
				Look at some of my pet projects showcasing different functionalities
			</Typography>
		</Grid>
	)
};

export default withStyles(styles)(SingleText);