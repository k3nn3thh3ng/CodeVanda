import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { 
	SwipeableDrawer,
	Button,
	List,
	ListItem,
	ListItemIcon,
	ListItemText, 
	Icon
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { loadCSS } from 'fg-loadcss';


const styles = (theme) => ({
	root: {
		margin: theme.spacing(0, 0, 0, 1),
		"&:hover" : {
			backgroundColor: 'transparent'
		}
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	link: {
		display: 'flex',
		color: 'black',
		textDecoration: 'none',
	},
	icon: {
		width: 'auto',
		height: 'auto',
		padding: theme.spacing(2)
	}
});

function SwipeableTemporaryDrawer(props) {
	const {classes} = props;
	const [state, setState] = useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
	}
		setState({ ...state, [anchor]: open });
	};

	React.useEffect(() => {
		const node = loadCSS(
			'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
			document.querySelector('#font-awesome-css'),
		);

		return () => {
			node.parentNode.removeChild(node);
		};
	}, []);

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<Link to="/services" className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.iconWrapper}>
							<Icon fontSize="Medium" color="inherit" className={`fas fa-coffee ${classes.icon}`}  />
						</ListItemIcon>
						<ListItemText primary="Services" />
					</ListItem>
				</Link>

				<Link to="/prices" className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<Icon fontSize="Medium" color="inherit" className={`fas fa-tags ${classes.icon}`}  />
						</ListItemIcon>
						<ListItemText primary="Prices" />
					</ListItem>
				</Link>

				<Link to="/probono" className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<Icon fontSize="Medium" color="inherit" className={`fas fa-hand-holding-heart ${classes.icon}`}  />
						</ListItemIcon>
						<ListItemText primary="Pro Bono" />
					</ListItem>
				</Link>


				<Link to="/contact" className={classes.link}>
				<ListItem button>
					<ListItemIcon>
						<Icon fontSize="Medium" color="inherit" className={`fas fa-envelope ${classes.icon}`}  />
					</ListItemIcon>
					<ListItemText primary="Contact" />
					</ListItem>
				</Link> 
			</List>
		</div>
	)

	return (
		<React.Fragment>
			<Button onClick={toggleDrawer('right', true)} className={classes.root} disableFocusRipple disableRipple disableElevation>
				<Icon color="inherit" className={`fas fa-bars ${classes.icon}`}  />
			</Button>
			<SwipeableDrawer
				anchor={'right'}
				open={state['right']}
				onClose={toggleDrawer('right', false)}
				onOpen={toggleDrawer('right', true)}
			>
			{list('right')}
			</SwipeableDrawer>
		</React.Fragment>
	);
}

export default withStyles(styles)(SwipeableTemporaryDrawer);