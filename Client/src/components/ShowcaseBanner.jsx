import React from 'react';
import { Box, CardMedia, Typography, Hidden } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	header: {
		paddingTop: theme.spacing(3),
		[theme.breakpoints.down('sm')] : {
			paddingTop: theme.spacing(1.5)
		}
	},
	containerShowcase: {
		width: '100%',
		overflow: 'hidden',
	},
	containerContainerShowcase: {
		display:'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingBottom: theme.spacing(1),
		maxHeight: '20vh',
		minHeight: '5vh',
		maxWidth: '100%',
	},
	img: {
		flexGrow: '1',
		maxHeight: '18vh',
		maxWidth: '15vw',
		objectFit: 'scale-down',
	},
})

function ShowcaseBanner(props) {
	const { classes } = props;
	
	var logos = props.listOfLogos.logos;
	
	var logosList = logos.map( 
		(name, index) => {
			return (<CardMedia
						component="img"
						className={classes.img}
						image={name}
						key={index}
			/>);
		})
	
	
	return ( 
		<Box className={classes.container}>
			<Hidden mdUp>
				<Typography variant="h5" className={classes.header}>
					{props.headertext}
				</Typography>
			</Hidden>
			<Hidden smDown>
				<Typography variant="h3" className={classes.header}>
					{props.headertext}
				</Typography>
			</Hidden>
			<Box className={classes.containerShowcase}>
				<Box className={classes.containerContainerShowcase}>
					{logosList}
				</Box>
			</Box>
		</Box>
	)

};

export default withStyles(styles)(ShowcaseBanner);