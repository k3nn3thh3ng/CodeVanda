import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-evenly',
		flexWrap: 'wrap'
	},
	container: {
		padding: `0px ${theme.spacing(4)}px`
	},
	headerContainer: {
		maxWidth: '40vw',
		marginBottom: theme.spacing(1.5),
		[theme.breakpoints.down('sm')] : {
			width: '90vw',
		}
		
	},
	textContainer: {
		width: '40vw',
		[theme.breakpoints.down('sm')] : {
			width: '90vw',
			marginBottom: theme.spacing(6)
		}
	},
});

function DoubleText(props){
	const {classes} = props;
	return(
		<Box className={classes.root}>
			<Box className={classes.container}>
				<Typography variant="h3" className={classes.headerContainer}>
					{props.message.header1}
				</Typography>
				<Typography variant="body1" className={classes.textContainer}>
					{props.message.text1}
				</Typography>
			</Box>
			<Box className={classes.container}>
				<Typography variant="h3" className={classes.headerContainer}>
					{props.message.header2}
				</Typography>
				<Typography variant="body1" className={classes.textContainer}>
					{props.message.text2}
				</Typography>
			</Box>
		</Box>
	)
}

export default withStyles(styles)(DoubleText);