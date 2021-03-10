import React from 'react';
import { AppBar, Toolbar, Button, Typography, Hidden, Icon, Grid, useScrollTrigger } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { loadCSS } from 'fg-loadcss';


import SwipeableRightDrawer from './SwipeableRightDrawer';
import AppbarRight from './AppbarRight';

const styles = (theme) => ({
	root: {
		padding: theme.spacing(0, 1),
		color: '#33475b',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	},
	text: {
		marginLeft: theme.spacing(0.5),
		marginTop: theme.spacing(0.3),
	},
	icon: {
		width: 'auto'
	},
	link: {
		color: 'inherit',
		textDecoration: 'none',
		height: '100%'
	},
	container: {
		minHeight: '64px',
		[theme.breakpoints.down('xs')] : {
			minHeight: '56px'
		}
	},
	barRightContainer: {
		marginLeft: '7.5vw'
	},
	rfqContainer: {
		margin: theme.spacing(0, 2),
		[theme.breakpoints.down('md')] : {
			margin: theme.spacing(0),
		}
	},
	offset: theme.mixins.toolbar,
	toolbarContainer : {
		display: 'flex',
		justifyContent: 'center'
	},
	maxWidth: {
		maxWidth: '1080px'
	},
	paperButton: {
		textTransform: 'none'
	},
	primary: {
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	}
});

function Appbar(props) {
	const { classes } = props;
	
	React.useEffect(() => {
		const node = loadCSS(
			'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
			document.querySelector('#font-awesome-css'),
		);
		
		return () => {
			node.parentNode.removeChild(node);
		};
	}, []);
	
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar position="sticky" color="inherit" className={classes.root}>
					<Toolbar className={classes.toolbarContainer}>
						<Grid container justify="flex-start" alignItems="center" wrap="nowrap" className={classes.maxWidth}>
							<Grid container justify="flex-start" alignItems="center" wrap="nowrap" className={classes.container} item xs={3} md={8}>
								<Link to="/" className={classes.link}>
									<Grid container justify="center" alignItems="center" wrap="nowrap" className={classes.container}>
										<Icon fontSize="large" color="inherit" className={`fas fa-home ${classes.icon}`}  />
										<Hidden xsDown>
											<Typography variant="body1" className={classes.text}>
												CodeVanda
											</Typography>
										</Hidden>
									</Grid>
								</Link>
								<Hidden smDown>
									<Grid container justify="flex-start" alignItems="center" wrap="nowrap" className={`${classes.container} ${classes.barRightContainer}`}>
										<AppbarRight />
									</Grid>
								</Hidden>
							</Grid>

							<Grid container justify="flex-end" alignItems="center" item xs={9} md={4} className={classes.rfqContainer}>
								<Hidden xsDown>
									<Link to="/contact" className={classes.link}>
										<Button
											variant="contained"
											color="secondary"
											className={`${classes.paperButton} ${classes.primary}`}
											disableElevation
										>
											Book A Meeting
										</Button>
									</Link>
								</Hidden>
								<Hidden mdUp>
									<SwipeableRightDrawer />
								</Hidden>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</React.Fragment>
  	);
}

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
	

};

export default withStyles(styles)(Appbar);