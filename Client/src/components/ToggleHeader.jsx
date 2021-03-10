import React from 'react';
import { Grid, Typography, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	headerContainer: {
		padding: theme.spacing(2, 0)
	},
	headerWrapper: {
		padding: theme.spacing(1, 0)
	},
	subHeaderWrapper: {
		padding: theme.spacing(1, 0)
	},
	toggleBarWrapper: {
		padding: theme.spacing(0,1)
	},
	rightButtonWrapperInactive: {
		width: '50%',
		maxWidth: '280px',
		padding: theme.spacing(2.5, 0),
		backgroundColor: 'rgb(245, 248, 250)',
		color: 'rgb(51, 71, 91)',
		borderLeft: '1px solid rgb(203, 214, 226)',
		borderBottom: '1px solid rgb(203, 214, 226)',
		borderTopRightRadius: theme.spacing(1),
		cursor: 'default'
	},
	rightButtonWrapperActive: {
		width: '50%',
		maxWidth: '280px',
		padding: theme.spacing(2.5, 0),
		backgroundColor: 'white',
		color: 'rgb(51, 71, 91)',
		borderTopRightRadius: theme.spacing(1),
		borderLeft: '1px solid rgba(0, 0, 0, 0)',
		borderBottom: '1px solid rgba(0, 0, 0, 0)'
	},
	leftButtonWrapperInactive: {
		width: '50%',
		maxWidth: '280px',
		padding: theme.spacing(2.5, 0),
		backgroundColor: 'rgb(245, 248, 250)',
		color: 'rgb(51, 71, 91)',
		borderRight: '1px solid rgb(203, 214, 226)',
		borderBottom: '1px solid rgb(203, 214, 226)',
		borderTopLeftRadius: theme.spacing(1),
		cursor: 'pointer'
	},
	leftButtonWrapperActive: {
		width: '50%',
		maxWidth: '280px',
		padding: theme.spacing(2.5, 0),
		backgroundColor: 'white',
		color: 'rgb(51, 71, 91)',
		borderTopLeftRadius: theme.spacing(1),
		borderRight: '1px solid rgba(0, 0, 0, 0)',
		borderBottom: '1px solid rgba(0, 0, 0, 0)',
		cursor: 'default'
	},
})

function ToggleHeader(props) {
	const {classes, state} = props
	
	return (
		<React.Fragment>
					<Grid container direction="column" alignItems="center" className={classes.headerContainer}>
						<Grid container justify="center" className={classes.headerWrapper}>
							<Typography variant="h4" align="center">
								Grow better with the right plan.
							</Typography>
						</Grid>
						<Grid container justify="center" className={classes.subHeaderWrapper}>
							<Typography variant="body1" align="center">
								Pay for what you need (when you need it).
							</Typography>
						</Grid>
					</Grid>
					<Grid container justify="center" className={classes.toggleBarWrapper}>
						<Grid container justify="center" alignItems="center" onClick={props.handleClick} className={state.option1.show ? classes.leftButtonWrapperActive : classes.leftButtonWrapperInactive} id="option1">
							<Typography variant="body1" id="option1">
								Web Application
							</Typography>
						</Grid>
						<Tooltip title="Coming Soon" placement="right">
							<Grid container justify="center" alignItems="center" className={state.option2.show ? classes.rightButtonWrapperActive : classes.rightButtonWrapperInactive} id="option2">
								<Typography variant="body1" id="option2">
									Mobile Application
								</Typography>
							</Grid>
						</Tooltip>
					</Grid>
		</React.Fragment>
	);
	
}

export default withStyles(styles)(ToggleHeader);