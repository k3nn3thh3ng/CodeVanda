import React, { useState } from 'react';
import { 
	Grid,
	Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import FrontEndSectionFourPage from './FrontEndSectionFourPage';

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
		borderBottom: '3px solid #516f90',
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

function FrontEndSectionFour(props) {
	
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
				<FrontEndSectionFourPage 
					sideHeader={PageOne.sideHeader} 
					image={PageOne.image} 
					infoCards={PageOne.cards}
				/>
			)
		} else if (state.option2 === true) {
			return (
				<FrontEndSectionFourPage 
					sideHeader={PageTwo.sideHeader} 
					image={PageTwo.image} 
					infoCards={PageTwo.cards}
				/>
			)
		} else if(state.option3 === true) {
			return (
				<FrontEndSectionFourPage 
					sideHeader={PageThree.sideHeader} 
					image={PageThree.image} 
					infoCards={PageThree.cards}
				/>
			)
		}
		console.log('Something broke in section 4 handleRender function')
		return <FrontEndSectionFourPage />
	}
	
	return(
		<React.Fragment>
			<Grid className={classes.main}>
				<Grid container direction="column" className={classes.mainWrapper}>
					<Grid container justify="center" className={classes.headerWrapper}>
						<Typography variant="h3" align="center">
							Where All Your Ideas Becomes Reality
						</Typography>
					</Grid>
					<Grid container direction="column" className={classes.toggleWrapper}>
						<Grid container justify="space-evenly" wrap="nowrap" className={classes.toggleBarWrapper}>
							<Grid item xs={4} md={2} container justify="center" alignItems="center" className={state.option1 ?`${classes.toggleButton} ${classes.active}` : `${classes.toggleButton}`} onClick={handleClick} id="option1">
								<Typography variant="body1" className={classes.toggleText}>
									Professional Look 
								</Typography>
							</Grid>
							<Grid item xs={4} md={2} container justify="center" alignItems="center" className={`${classes.toggleButton} ${state.option2 ? classes.active : null}`} onClick={handleClick} id="option2">
								<Typography variant="body1" className={classes.toggleText}>
									Strengthen Trust
								</Typography>
							</Grid>
							<Grid item xs={4} md={2} container justify="center" alignItems="center" className={`${classes.toggleButton} ${state.option3 ? classes.active : null}`} onClick={handleClick} id="option3">
								<Typography variant="body1" className={classes.toggleText}>
									Customize &amp; Differentiate
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

export default withStyles(styles)(FrontEndSectionFour);



const PageOne = {
	sideHeader: "Create a site your visitors enjoy, and make it impossible to miss.",
	image: "https://f.hubspotusercontent00.net/hubfs/53/MH1_Attract%20Attention.png",
	cards:[
		{
			header: "Color",
			body: "You can use colors to stir your visitors emotions or respond to a call-to-action on your website. Color helps us to process and store images more efficiently than colorless (black and white) images, this can help increase brand recognition and help prompt visitors to your sight to take action."
		},
		{
			header: "Font",
			body: "You can use colors to stir your visitors emotions or respond to a call-to-action on your website. Color helps us to process and store images more efficiently than colorless (black and white) images, this can help increase brand recognition and help prompt visitors to your sight to take action."
		},
		{
			header: "Layout",
			body: "Using the best-in-class technology and the latest html5 flex-box functionality to design a website for consistency and balance."
		},
		{
			header: "Spacing",
			body: "Spacing is a key element in web design. It can keep things separated or together, and acts as an indicator for a start or an end. In web design, perhaps the most important thing spacing does is grab attention. A big blob of body copy can be dull to read and visually unappealing."
		},
		{
			header: "Texture",
			body: "Texture may be used in a work of art to: create visual interest or a focal point in a compostion. to create contrast within a design compostion. to help visually balance a design compostion."
		},
	]
}

const PageTwo = {
	sideHeader: "Turn more visitors into leads with trust builders",
	image: "https://f.hubspotusercontent00.net/hubfs/53/MH1_Attract%20Attention.png",
	cards:[
		{
			header: "Social Login",
			body: "Social sign-in provides a recognizable, uniform method of logging in. Users feel more at ease sharing their data with new and unknown sites and apps via social networking platforms they already trust."
		},
		{
			header: "Blog",
			body: "One of the advantages of blogs is that it allows you to build and control your online identity. Aside from social network profiles, people who are searching for your name can find your blog or your author page on other blogs. That information will help people to get to know you better by reading your work."
		},
		{
			header: "Dynamic Content",
			body: "Increased Relevancy - Customers judge your webpage in less than a second. Presenting relevant offers is crucial to decreasing bounce rate and increasing conversions. Personalized Experiences - Similar to relevancy, dynamic content allows you to create personal experiences."
		},
		{
			header: "Input Feedback",
			body: "Visual feedback is extremely important in User Interface Design. It tells the user what's happening, or what's going to happen next, and without it the user is left guessing or frustrated. In reality buttons, controls and objects react to our interaction, so this is how people expect things to work."
		}
	]
}

const PageThree = {
	sideHeader: "Full creative control with no design boundaries to differentiate your website",
	image: "https://f.hubspotusercontent00.net/hubfs/53/MH1_Attract%20Attention.png",
	cards:[
		{
			header: "E-Payment/Donation",
			body: "Receive monies from your customer in real-time from your website. It's more efficient, saves time and generate more revenue in the long run. (Requires Backend Support)"
		},
		{
			header: "E-commerce",
			body: "Increase productivity without adding exorbitant additional overheads. Hassle free inventory management with an operational an e-commerce store front. (Requires Backend Support)"
		},
		{
			header: "Chat Bot",
			body: "Chatbot streamline interactions between people and services, enhancing customer experience. At the same time, they offer you new opportunities to improve operational efficiency by reducing the typical cost of customer service. (Requires Backend Support)"
		},
		{
			header: "Email Automation",
			body: "Email automation makes retention and loyalty strategies a breeze, increasing customer lifetime value like it's child's play. It allows you to automate requests for feedback, send exclusive offers to high spending customers and trigger re-engagement campaigns if subscribers are straying. (Requires Backend Support)"
		},
		{
			header: "Forms",
			body: "Form powers the conversion process. Forms collect information and add to your Contacts database. Either a new lead is created, or if it's a lead or customer that already exists, any new information that is collected will be added to the existing contact information. (Requires Backend Support)"
		},
		{
			header: "Custom Component",
			body: "We custom build components within your website to completely avoid unnecessary functionality and bloatware. In addition to avoiding unnecessary functionality."
		},
	]
}