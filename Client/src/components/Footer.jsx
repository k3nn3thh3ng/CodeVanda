import React, { useState, useEffect } from 'react';
import { Typography, Icon, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';

const styles = (theme) => ({
	root: {
		padding: `${theme.spacing(4)}px 0px`,
		color: '#7c98b6',
		backgroundColor: '#2d3e50' 
	},
	socialsContainer: {
	},
	socialIcon: {
		margin: theme.spacing(2),
		
	},
	textContainer: {
		marginTop: theme.spacing(4),
		color: '#fff'
	}
})

function Footer(props) {
	const {classes} = props;
	
	const [date, setDate] = useState('');
	
	useEffect(() => {
		const node = loadCSS(
			'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
			document.querySelector('#font-awesome-css'),
		);
		
		if (date === '') {
			setDate(new Date().getFullYear())
		}
		
		return () => {
			node.parentNode.removeChild(node);
		};
	}, [date]);

	return (
		<Grid container direction="column" align="center" className={classes.root}>
			<Grid container justify="center" className={classes.socialsContainer}>
				<Icon className={`fab fa-twitter ${classes.socialIcon}`} fontSize="large" color="inherit"/>
				<Icon className={`fab fa-facebook ${classes.socialIcon}`} fontSize="large" color="inherit"/>
				<Icon className={`fab fa-instagram ${classes.socialIcon}`} fontSize="large" color="inherit"/>
				<Icon className={`fab fa-github ${classes.socialIcon}`} fontSize="large" color="inherit"/>
				<Icon className={`far fa-envelope ${classes.socialIcon}`} fontSize="large" color="inherit"/>
			</Grid>
			<Grid container justify="center" className={classes.textContainer}>
				<Typography variant="subtitle2" align="center">
					© Worken {date}
				</Typography>
				<Divider orientation="vertical" flexItem variant="middle"/>
				<Typography variant="subtitle2" align="center">
					Design: Kenneth.
				</Typography>
				<Divider orientation="vertical" flexItem variant="middle"/>
				<Typography variant="subtitle2" align="center">
					Images: Unsplash.
				</Typography>
			</Grid>
		</Grid>
	)

};

export default withStyles(styles)(Footer);