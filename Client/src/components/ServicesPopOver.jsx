import React from 'react';
import { Typography, Icon, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';
import PopupState, { bindHover, bindPopover } from 'material-ui-popup-state';
import Popover from 'material-ui-popup-state/HoverPopover';


import ServicesPopOverMenu from './ServicesPopOverMenu';

const styles = (theme) => ({
	paper: {
		marginTop: '2px',
		pointerEvents: 'none',
	},
	container: {
		margin: theme.spacing(0, 1),
		display: 'flex',
		minHeight: '64px',
		overflow: 'auto',
		[theme.breakpoints.down('xs')] : {
			minHeight: '56px'
		}
	},
	icon: {
		width: 'auto',
		marginLeft: theme.spacing(0.5)
	}
});

function ServicesPopOver(props) {
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
	
	const containerRef = React.useRef();

	return (
		<PopupState variant="popover" popupId="servicePopover">
			{popupState =>(
				<React.Fragment>
					<Grid
						{...bindHover(popupState)}
						className={classes.container}
						
					>
						<Grid container justify="center" alignItems="center" ref={containerRef}>
							<Typography variant="body1" >
								Services
							</Typography>
							<Icon fontSize="small" color="inherit" className={`fas fa-chevron-down ${classes.icon}`}/>
							<Popover
								{...bindPopover(popupState)}
								classes={{
									paper: classes.paper
								}}
								id="services-menu"
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
								container={containerRef.current}
							>
								<ServicesPopOverMenu />
							</Popover>
						</Grid>
					</Grid>

				</React.Fragment>
			)}
		</PopupState>
	);
}

export default withStyles(styles)(ServicesPopOver);