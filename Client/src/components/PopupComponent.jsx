import React, { useState } from 'react';
import { 
	Grid,
	Button,
	Typography,
	Paper
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PopupCard from './PopupCard';

const styles = (theme) => ({
	main: {
		background: '#f5f8fa',
		color: '#33475b',
		padding: theme.spacing(0,2,8),
		margin: '0px auto',
		boxSizing: 'border-box'
		
	},
	mainContainer: {
		width: '1080px',
		boxSizing: 'border-box'
	}
})

function HPSectionTwo(props) {
	
	const { classes } = props;
	
	const cardInput1 = {
		id: "frontendwebdevelopment",
		title: "USP 1",
		logo: "fa-pencil-alt",
		description: 'The website we will build for you, will offer your visitors a seamless navigation journey that is completely user-friendly and secured.', 
		feature1: "Wireframe Prototyping", 
		feature2: "PSD to HTML conversion", 
		feature3: "Responsive Design"
	}
	
	const cardInput2 = {
		id: "backendwebdevelopment",
		title: "USP 2", 
		logo: "fa-terminal",
		description: 'APIs helps create depth in the customer experience by persisting information and builds trust with your customer when your application request information', 
		feature1: "CRUD Routing", 
		feature2: "Social Authentication", 
		feature3: "Database API"
	}
	
	return(
		<React.Fragment>
			<Grid container justify="center" className={classes.main}>
				<Grid container justify="space-between" className={classes.mainContainer}>
					<HPSectionTwoCard textInput={cardInput1} />
					<HPSectionTwoCard textInput={cardInput2} />
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(HPSectionTwo);