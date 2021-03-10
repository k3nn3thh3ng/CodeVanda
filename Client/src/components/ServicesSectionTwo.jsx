import React from 'react';
import { 
	Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ServicesSectionTwoComplexAccordion from './ServicesSectionTwoComplexAccordion'

const styles = (theme) => ({
	main: {
		background: '#eaf0f6',
		color: '#33475b',
		padding: theme.spacing(0, 2, 10),
		margin: theme.spacing(0,'auto'),
	},
	mainWrapper: {
		maxWidth: '920px',
	},
})

const frontEndCard = {
	header: "Front-End Web Design",
	basicSubheader: "Basic Web Design",
	basicLink: "/services/frontendwebdevelopment",
	premiumSubheader: "Premium web design for increase user interaction",
	premiumLink: "/prices",
	basicListOfItems: [
		"Grid layout",
		"Flexbox layout",
		"Custom buttons",
		"Custom forms",
		"Navigation",
		"Animations and transitions",
		"Font size and color control",
	],
	premiumListOfItems: [
		"Premium versions of all basic features, plus ...",
		"API interaction",
		"Dynamic content display",
		"Pagination",
		"Authentication",
		"Email automation",
		"In-browser admin panel",
		"Nested interaction",
		"Blog & content creation tools",
		"Over 30 additional features"
	]
}

const backEndCard = {
	header: "Server-Side API",
	basicSubheader: "Basic server routing",
	basicLink: "/services/backendwebdevelopment",
	premiumSubheader: "Advance server routing to deliver more solutions",
	premiumLink: "/prices",
	basicListOfItems: [
		"RESTful API Design",
		"Casting, validation & query building with MongoDB",
	],
	premiumListOfItems: [
		"All basic features, plus ...",
		"Local & social authentication",
		"Stateless cookie sessions",
		"Relevant business logic"
	]
}

function ServicesSectionTwo(props) {
	
	const { classes } = props;
	
	return(
		<React.Fragment>
			<Grid container justify="center" className={classes.main}>
				<Grid container justify="center" className={classes.mainWrapper}>
					<ServicesSectionTwoComplexAccordion info={frontEndCard}/>
					<ServicesSectionTwoComplexAccordion info={backEndCard}/>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(ServicesSectionTwo);

