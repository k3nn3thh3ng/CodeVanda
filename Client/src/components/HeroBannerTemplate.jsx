import React from 'react';
import { Box, Typography, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '40vh',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundImage: 'url("https://images.unsplash.com/photo-1501791330673-603715379ded?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80")',
		backgroundPosition: 'fixed'
	},
	headerContainer: {
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: theme.spacing(2)
	},
});

function HeroBannerTemplate(props) {
	const {classes} = props;
	
	// const headerText= "Full-Time Geek in building custom web applications for full flexibility over design and data"
	
	return ( 
		<Box className={classes.root}>
			<Box className={classes.headerContainer}>
				<Typography variant="h3" align="center">
					{props.message}
				</Typography>
			</Box>
		</Box>

	)

};

export default withStyles(styles)(HeroBannerTemplate);