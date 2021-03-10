import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ThumbNail from './ThumbNail';

const styles = (theme) => ({
	root: {
		padding: theme.spacing(6, 0),
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
	
	const list = thumbNailList.map(function(nail, key){
		return (
				<ThumbNail header={nail.header} body={nail.body} imageURL={nail.imageURL} imageTitle={nail.imageTitle} key={nail.imageTitle} />
		)
	})
	
	return(
		<Grid container direction="column" className={classes.root}>
			<Grid container justify="center" className={classes.thumbNailsContainer}>
				{list}
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(ThumbNails);