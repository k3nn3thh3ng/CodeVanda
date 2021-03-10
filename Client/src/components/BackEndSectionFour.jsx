import React, { useState } from 'react';
import { 
	Grid,
	Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BackEndSectionFourPage from './FrontEndSectionFourPage';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(6, 0, 0),
		background: '#f5f8fa',
		color: '#33475b',
	},
	mainWrapper: {
		maxWidth: '1080px',
		padding: theme.spacing(2, 4),
		margin: theme.spacing(0, 'auto'),
	},
	headerWrapper: {
		margin: theme.spacing(4, 0)
	},
	toggleWrapper: {

	},
	toggleBarWrapper: {
		borderBottom: '1px solid #33475b'
	},
	toggleButton: {
		cursor: 'pointer',
		height: theme.spacing(6),
		zIndex: '50',
		minWidth: theme.spacing(25),
		[theme.breakpoints.down('xs')] : {
			minWidth: theme.spacing(0),
			textAlign: 'center',
			padding: theme.spacing(0,1)
		}
	},
	active: {
		borderBottom: '3px solid #33475b',
	},
	toggleText: {
		zIndex: '0'
	},
	sideHeaderWrapper: {
	},
	toggleCanvasWrapper: {
		padding: theme.spacing(2, 2.5)
	},
	infoWrapper: {

	},
	image: {
		width: '100%',
		margin: theme.spacing(0, 0, 6),
	},
	infoCardContainer: {
		margin: theme.spacing(2, 0),
	},
	infoCardWrapper: {
		padding: theme.spacing(0, 4, 0, 0)
	}
})

function BackEndSectionFour(props) {
	
	const { classes } = props;
	
	const [state, setState] = useState({ option1: true, option2: false, option3: false });
	
	const reset = { option1: false, option2: false, option3: false }
	const handleClick = (e) => {
		
		const value = e.target.parentNode.id;
		setState({
			...reset,
			[value]: true,
			[e.target.id]: true
		})
	}
	
	const handleRender = () => {
		if (state.option1 === true) {
			return (
				<BackEndSectionFourPage 
					sideHeader={PageOne.sideHeader} 
					image={PageOne.image} 
					infoCards={PageOne.cards}
				/>
			)
		} else if (state.option2 === true) {
			return (
				<BackEndSectionFourPage 
					sideHeader={PageTwo.sideHeader} 
					image={PageTwo.image} 
					infoCards={PageTwo.cards}
				/>
			)
		} 
		console.log('Something broke in section 4 handleRender function')
		return <BackEndSectionFourPage />
	}
	
	return(
		<React.Fragment>
			<Grid className={classes.main}>
				<Grid container direction="column" className={classes.mainWrapper}>
					<Grid container justify="center" className={classes.headerWrapper}>
						<Typography variant="h3" align="center">
							Power to Customise Experiences at Scale
						</Typography>
					</Grid>
					<Grid container direction="column" className={classes.toggleWrapper}>
						<Grid container justify="space-evenly" wrap="nowrap" className={classes.toggleBarWrapper}>
							<Grid item xs={6} md={4} container justify="center" alignItems="center" className={state.option1 ?`${classes.toggleButton} ${classes.active}` : `${classes.toggleButton}`} onClick={handleClick} id="option1">
								<Typography variant="body1" className={classes.toggleText}>
									User Interaction
								</Typography>
							</Grid>
							<Grid item xs={6} md={4} container justify="center" alignItems="center" className={`${classes.toggleButton} ${state.option2 ? classes.active : null}`} onClick={handleClick} id="option2">
								<Typography variant="body1" className={classes.toggleText}>
									Capture Information
								</Typography>
							</Grid>
						</Grid>
						{handleRender()}
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(BackEndSectionFour);


const PageOne = {
	sideHeader: "Engage the user meaningfully that leads to retention.",
	image: "https://f.hubspotusercontent00.net/hubfs/53/MH1_Attract%20Attention.png",
	cards:[
		{
			header: "Chat Bot",
			body: "Chatbot streamline interactions between people and services, enhancing customer experience. At the same time, they offer you new opportunities to improve operational efficiency by reducing the typical cost of customer service. (Requires Frontend Support)"
		},
		{
			header: "Personalise Feed",
			body: "Based on captured information, your users will be able to view content that is meant for a particular target audience. Serving relevant advertisement and increasing conversion. (Requires Frontend Support)"
		},
		{
			header: "E-Payment/Donation",
			body: "Receive monies from your customer in real-time from your website. It's more efficient, saves time and generate more revenue in the long run. (Requires Frontend Support)"
		},
		{
			header: "E-commerce",
			body: "Increase productivity without adding exorbitant additional overheads. Hassle free inventory management with an operational an e-commerce store front. (Requires Frontend Support)"
		},
		{
			header: "Email Automation",
			body: "Email automation makes retention and loyalty strategies a breeze, increasing customer lifetime value like it's child's play. It allows you to automate requests for feedback, send exclusive offers to high spending customers and trigger re-engagement campaigns if subscribers are straying. (Requires Frontend Support)"
		},
		{
			header: "Forms",
			body: "Form powers the conversion process. Forms collect information and add to your Contacts database. Either a new lead is created, or if it's a lead or customer that already exists, any new information that is collected will be added to the existing contact information. (Requires Frontend Support)"
		},

	]
}

const PageTwo = {
	sideHeader: "Retain critical customer information, and make their journey with you seamless",
	image: "https://f.hubspotusercontent00.net/hubfs/53/MH1_Attract%20Attention.png",
	cards:[
		{
			header: "Social Login",
			body: "Social sign-in provides a recognizable, uniform method of logging in. Users feel more at ease sharing their data with new and unknown sites and apps via social networking platforms they already trust."
		},
		{
			header: "Cookies",
			body: "One of the advantages of cookies is that it stores how has the user interaction with the website, allowing you to show relevant material when they return to the website at a later time."
		},
		{
			header: "Sign-up",
			body: "If you want to build a following, a sign-up form is a must-have as part of your strategy for acquisition and retention. Sign-up forms allow customers to 'sign up' to receive more information about your business and stay up-to-date on your company's latest products and services. (Requires Frontend Support)"
		},
	]
}