import React from 'react';
import { AppBar, Toolbar, Icon, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { loadCSS } from 'fg-loadcss';

const styles = (theme) => ({
	root: {
		padding: theme.spacing(0, 1),
		color: '#33475b',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center'
	},
	text: {
		marginLeft: theme.spacing(0.5),
		marginTop: theme.spacing(0.3),
	},
	icon: {
		padding: theme.spacing(0, 1.5),
		overflow: 'visible'
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
	}
});

function PlainAppbar(props) {
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
			<AppBar position="relative" color="inherit" elevation={0} className={classes.root}>
				<Toolbar className={classes.toolbarContainer}>
					<Grid container justify="flex-start" alignItems="center" wrap="nowrap" className={classes.maxWidth}>
						<Grid container justify="flex-start" alignItems="center" wrap="nowrap" className={classes.container}>
							<Link to="/" className={classes.link}>
								<Grid container justify="center" alignItems="center" wrap="nowrap" className={classes.container}>
									<Icon fontSize="large" color="inherit" className={`fas fa-home ${classes.icon}`}  />
								</Grid>
							</Link>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
  	);
}

export default withStyles(styles)(PlainAppbar);