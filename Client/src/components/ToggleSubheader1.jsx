import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	toggleBarContainer: {
		backgroundColor: 'white',
		color: 'rgb(51, 71, 91)',
		boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
		borderBottom: '1px solid rgb(203, 214, 226)',
	},
	toggleBarWrapper: {
		maxWidth: theme.spacing(110),
	},
	buttonWrapperInactive: {
		minWidth: theme.spacing(30),
		height: theme.spacing(9),
		padding: theme.spacing(2.5, 0),
		borderBottom: '3px solid rgba(51, 71, 91, 0)',
		cursor: 'pointer'
	},
	buttonWrapperActive: {
		minWidth: theme.spacing(30),
		height: theme.spacing(9),
		padding: theme.spacing(2.5, 0),
		backgroundColor: 'rgb(229, 245, 248)',
		borderBottom: '3px solid rgba(51, 71, 91, 1)',
		cursor: 'pointer'
	},
});

function ToggleSubheader1(props) {
	const {classes} = props;
	
	// const [subheader1, setSubheader1] = useState({optionA: true, optionB: false, optionC: false})
	
	// const handleClick = (e) => {
	// 	const reset = {optionA: false, optionB: false, optionC: false};
	// 	setSubheader1({
	// 		...reset,
	// 		[e.target.id]: true
	// 	});
	// };
	
	return (
		<React.Fragment>
			<Grid container justify="center" className={classes.toggleBarContainer}>
				<Grid container justify="center" className={classes.toggleBarWrapper}>
					<Grid item xs={12} md={4} container justify="center" alignItems="center" className={props.subheader1.optionA ? classes.buttonWrapperActive : classes.buttonWrapperInactive} onClick={props.handleClick} id="optionA">
						<Typography variant="body1" id="optionA">
							{props.optionA}
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} container justify="center" alignItems="center" className={props.subheader1.optionB ? classes.buttonWrapperActive : classes.buttonWrapperInactive} onClick={props.handleClick} id="optionB">
						<Typography variant="body1" id="optionB">
							{props.optionB}
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} container justify="center" alignItems="center" className={props.subheader1.optionC ? classes.buttonWrapperActive : classes.buttonWrapperInactive} onClick={props.handleClick} id="optionC">
						<Typography variant="body1" id="optionC">
							{props.optionC}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	
}

export default withStyles(styles)(ToggleSubheader1);