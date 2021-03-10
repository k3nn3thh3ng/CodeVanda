import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
	main: {
		color: '#33475b',
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(8, 0)
	},
	mainWrapper: {
		maxWidth: theme.spacing(80),
		padding: theme.spacing(0,4)
	},
	headerWrapper: {
		padding: theme.spacing(1,0,10)
	},
	header: {
		padding: theme.spacing(1,0),
	},
	headerBody: {

		padding: theme.spacing(1,0)
	},
	subheaderWrapper: {
		padding: theme.spacing(1,0)
	},
	subheader: {
		fontWeight: '400'
	},
	featureWrapper: {
		padding: theme.spacing(4,0,6)
	},
	featureHeader: {
		fontWeight: '700',
		color: '#0091AE',
	}
})

function ProBonoSectionTwo(props){
	
	const { classes } = props
	
	
	return (
		<Grid container justify="center" className={classes.main}>
			<Grid container direction="column" justify="center" alignItems="center" className={classes.mainWrapper}>
				<Grid direction="column" alignItems="center"container className={classes.headerWrapper}>
					<Typography variant="h4" className={classes.header}>
						Our Belief
					</Typography>
					<Typography variant="body1" className={classes.headerBody} align="center">
						At CodeVanda we believe that digitalisation should be a collective global effort and the best way to help the community is by helping those that are commited to serving communities.
					</Typography>
				</Grid>
				<Grid container justify="center" className={classes.subheaderWrapper}>
					<Typography variant="h4" align="center">
						How We're Helping
					</Typography>
				</Grid>
				<Grid container justify="center" className={classes.subheaderWrapper}>
					<Typography variant="h5" align="center" className={classes.subheader}>
						Free Coding &amp; Consultation
					</Typography>
				</Grid>

				<Grid direction="column" container className={classes.featureWrapper}>
					<Typography variant="body1" className={classes.featureHeader}>
						<u>Eligibility</u>
					</Typography>
					<Typography variant="body1" className={classes.featureBody}>
						- Entity must be a registered non-profit organisation
					</Typography>
					<Typography variant="body1" className={classes.featureBody}>
						- Entity must not have an existing web application
					</Typography>
					<Typography variant="body1" className={classes.featureBody}>
						- Intended development should be used to serve their own audience
					</Typography>
					<Typography variant="body1" className={classes.featureBody}>
						- A love for the coomunity 
					</Typography>
				</Grid>

			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(ProBonoSectionTwo);