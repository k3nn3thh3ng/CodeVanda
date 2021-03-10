import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	toggleBarWrapper: {
		backgroundColor: 'white',
		color: 'rgb(51, 71, 91)',
		boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
		borderBottom: '1px solid rgb(203, 214, 226)',
		padding: theme.spacing(0,6),
		[theme.breakpoints.down('xs')] : {
			padding: theme.spacing(0,1)
		}
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

function ToggleSubheader2(props) {
	const {classes} = props;
	
	// const [subheader2, setSubheader2] = useState({optionA: true, optionB: false, optionC: false})
	
	// const handleClick = (e) => {
	// 	const reset = {optionA: false, optionB: false, optionC: false};
	// 	setSubheader2({
	// 		...reset,
	// 		[e.target.id]: true
	// 	});
	// };
	
	
	return (
		<React.Fragment>
			<Grid container justify="center" className={classes.toggleBarWrapper}>
				<Grid item xs={12} md={4} container justify="center" alignItems="center" className={props.subheader2.optionG ? classes.buttonWrapperActive : classes.buttonWrapperInactive} onClick={props.handleClick} id="optionG">
					<Typography variant="body1" id="optionG">
						{props.optionG}
					</Typography>
				</Grid>
				<Grid item xs={12} md={4} container justify="center" alignItems="center" className={props.subheader2.optionH ? classes.buttonWrapperActive : classes.buttonWrapperInactive} onClick={props.handleClick} id="optionH">
					<Typography variant="body1" id="optionH">
						{props.optionH}
					</Typography>
				</Grid>
				<Grid item xs={12} md={4} container justify="center" alignItems="center" className={props.subheader2.optionI ? classes.buttonWrapperActive : classes.buttonWrapperInactive} onClick={props.handleClick} id="optionI">
					<Typography variant="body1" id="optionI">
						{props.optionI}
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	
}

export default withStyles(styles)(ToggleSubheader2);