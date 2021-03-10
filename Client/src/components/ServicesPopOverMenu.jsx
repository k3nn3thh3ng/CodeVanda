import React from 'react';
import { Grid, Button, Icon, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { loadCSS } from 'fg-loadcss';

const styles = (theme) => ({
	root: {
		padding: theme.spacing(2, 0),
		boxSizing: 'border-box',
	},
	link: {
		color: 'inherit',
		textDecoration: 'none',
		width: theme.spacing(30),
		margin: theme.spacing(1, 2)
	},
	button: {
		height: theme.spacing(5)
	},
	icon: {
		width: '15%',

	},
	buttonText: {
		width: '80%',
		paddingLeft: theme.spacing(2)
	}
});

function ServicesPopOverMenu(props){
	const { classes } = props

	React.useEffect(() => {
		const node = loadCSS(
			'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
			document.querySelector('#font-awesome-css'),
		);

		return () => {
			node.parentNode.removeChild(node);
		};
	}, []);
	
	return(
		<Grid container direction="column" className={classes.root}>
			<Link to="/services" className={classes.link}>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					fullWidth
				>
					<Icon fontSize="small" color="inherit" className={`fas fa-coffee ${classes.icon}`}  />
					<Typography variant="body2" className={classes.buttonText} align="left">
						Overview
					</Typography>
				</Button>
			</Link>
			<Link to="/services/frontendwebdevelopment" className={classes.link}>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					fullWidth
				>
					<Icon fontSize="small" color="inherit" className={`fas fa-pencil-alt ${classes.icon}`}  />
					<Typography variant="body2" className={classes.buttonText} align="left">
						Front-End Design
					</Typography>
				</Button>
			</Link>
			<Link to="/services/backendwebdevelopment" className={classes.link}>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					fullWidth
				>
					<Icon fontSize="small" color="inherit" className={`fas fa-terminal ${classes.icon}`}  />
					<Typography variant="body2" className={classes.buttonText} align="left">
						Server-Side API
					</Typography>
				</Button>
			</Link>
		</Grid>
	)
}

export default withStyles(styles)(ServicesPopOverMenu);
