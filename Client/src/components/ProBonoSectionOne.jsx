import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
	mainWrapper: {
		backgroundImage: 
		// 'url("https://images.pexels.com/photos/1126384/pexels-photo-1126384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
		'linear-gradient(45deg, #EEAA78, #E37222)',
		height: theme.spacing(50),
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(10, 0),
		color: '#33475b',
	},
	headerContainer: {
		width: theme.spacing(80)
	},
	header: {
		margin: theme.spacing(3)
	},
	subheader: {
		margin: theme.spacing(3, 'auto')
	}
})

function ProBonoSectionOne(props){
	
	const { classes } = props
	
	
	return (
		<Grid container justify="center" className={classes.mainWrapper}>
			<Grid container direction="column" justify="center" alignItems="center" className={classes.headerContainer}>
				<Grid container justify="center" className={classes.headerWrapper}>
					<Typography variant="h3" align="center" className={classes.header}>
						CodeVanda Commitment
					</Typography>
				</Grid>
				<Grid container justify="center" className={classes.subheaderWrapper}>
					<Typography variant="body1" align="center" className={classes.subheader}>
						Helping non-profit organisation digitalise
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(ProBonoSectionOne);