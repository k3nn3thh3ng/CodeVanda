import React from 'react';
import { Box, Typography, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ThumbNail from './ThumbNail';

const styles = (theme) => ({
	root: {
		padding: theme.spacing(12.5, 0),
		// backgroundImage: 'url("https://images.unsplash.com/photo-1514858881756-dc3beb76481c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80")',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'cover',
		// backgroundAttachment: 'fixed',
		// backgroundPosition: 'top',
		backgroundColor: '#EEAA78',
	},
	thumbNailsContainer: {
		padding: theme.spacing(3, 0),
	},
	grow: {
	},
	header: {
		padding: theme.spacing(3, 0),
	},
	subHeader: {
		padding: theme.spacing(3, 0),
	},
	dividerContainer: {
		margin: theme.spacing(1, 0),
	},
	divider: {
		borderBottom: '2px solid rgba(0, 0, 0, 0.25)',
		width: '10%'
	}
})

function ThumbNails(props) {
	const { classes } = props;
	
	const thumbNailList = [
			{
			header: ['Responsive Front-End Webpages'],
			body: ['Static and dynamic webpages, complete with UI/UX journey using Figma & React'],
			imageURL: ['https://images.unsplash.com/photo-1585834377437-fa674763ad3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80'],
			imageTitle: ['nail1']
		},
			{
			header: ['Server-Side API and MongoDB'],
			body: ['CRUD routing with authentication using NodeJS and Express.JS'],
			imageURL: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'],
			imageTitle: ['nail2']
		},
			{
			header: ['Maintenace and Code Refactoring'],
			body: ['Updating and streamlining Javascript codes with latest ES6 syntax'],
			imageURL: ['https://images.unsplash.com/photo-1611581029317-4e15787082f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80'],
			imageTitle: ['nail3']
		},
	]
	
	const list = thumbNailList.map((nail, key) => {
		return (
				<ThumbNail header={nail.header[0]} body={nail.body[0]} imageURL={nail.imageURL[0]} imageTitle={nail.imageTitle[0]} key={nail.imageTitle[0]} />
		)
	})
	
	return(
		<Grid container direction="column" className={classes.root}>
			<Typography variant="h3" align="center" className={classes.header}>
				My services
			</Typography>
			<Grid container justify="center" className={classes.dividerContainer}>
				<Box className={classes.divider} />
			</Grid>
			<Typography variant="subtitle1" align="center" className={classes.subHeader}>
				Offering web application development in both front-end and back-end programming
			</Typography>
			<Grid container justify="center" className={classes.thumbNailsContainer}>
				{list}
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(ThumbNails);