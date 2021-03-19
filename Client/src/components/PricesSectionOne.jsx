import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ToggleSubheader1 from './ToggleSubheader1';
import ToggleSubheader2 from './ToggleSubheader2';
import PricesSectionTwo from './PricesSectionTwo';
import ToggleHeader from './ToggleHeader';

const styles = (theme) => ({
	main: {
		backgroundColor: 'rgb(0, 189, 165)',
		backgroundImage: 'linear-gradient(-303deg, rgb(0, 164, 189), 0%, rgb(0, 175, 178) 56%, rgb(0, 189, 165) 100%)',
		color: 'white',
	},
	mainWrapper: {
	},
})

function PricesSectionOne(props) {

	const {classes} = props;
// Logic handling from this point	
	const [state, setState] = useState({option1: {show: true}, option2: {show: false}})
	const [subheader1, setSubheader1] = useState({optionA: true, optionB: false, optionC: false})
	const [subheader2, setSubheader2] = useState({optionG: true, optionH: false, optionI: false})
	
	
	const handleClick = (e) => {
		const reset = {option1: {show: false}, option2: {show: false}};
		console.log(e.target.id);
		setState({
			...reset,
			[e.target.id]: {show: true}
		})
	};
	
	const handleClick1 = (e) => {
		const reset = {optionA: false, optionB: false, optionC: false};
		setSubheader1({
			...reset,
			[e.target.id]: true
		});
	};
	
	const handleClick2 = (e) => {
		const reset = {optionG: false, optionH: false, optionI: false};
		setSubheader2({
			...reset,
			[e.target.id]: true
		});
	};
	
// Toggling Logic
	const renderSubheader = () => {
		if (state.option1.show) {
			return (
				<ToggleSubheader1 
					optionA="Front-End" 
					optionB="Back-End" 
					optionC="Maintenance" 
					subheader1={subheader1} 
					handleClick={handleClick1}
				/>
			)
		} else if(state.option2.show) {
			return (
				<ToggleSubheader2 
					optionG="Coming Soon" 
					optionH="Coming Soon" 
					optionI="Coming Soon" 
					subheader2={subheader2} 
					handleClick={handleClick2}
				/>
			)
		}
	}
	
	const renderSectionTwoOption1 = () => {
		if (subheader1.optionA === true) {
			return (
				<PricesSectionTwo pageDetails={webFrontEnd}/>
			)
		} else if (subheader1.optionB === true) {
			return (
				<PricesSectionTwo pageDetails={webBackEnd}/>
			)
		} else if (subheader1.optionC === true) {
			return (
				<PricesSectionTwo pageDetails={webMaintenance}/>
			)
		}
		console.log("renderSectionTwoOption has error")
		return null
	}
	
	const renderSectionTwo = () => {
		if (state.option1.show) {
			return renderSectionTwoOption1()
		}
		return console.log("error")
	}
// End of logic handling
	
	return (
		<React.Fragment>
			<Grid className={classes.main}>
				<Grid container direction="column" alignItems="center" className={classes.mainWrapper}>
					<ToggleHeader handleClick={handleClick} state={state}/>
					{renderSubheader()}
				</Grid>
			</Grid>
			{renderSectionTwo()}
		</React.Fragment>
	);
	
}

export default withStyles(styles)(PricesSectionOne);

// Information for each tab as specified in the logic
const webFrontEnd = {
	header: "Front-End Coding",
	subHeader: "We will build a aesthetically appealing website for you.",
	cards: [
		{
			type: "Web Builder  (Shoppify & Wix)",
			price: "540",
			pricingUnit: "section*",
			preBuildRev: "Unlimited",
			postBuildRev: "1",
			features: [
				{
					featureHeader: "Key features",
					featureBody: [
						"Copy Writing",
						"Up to 3 content pieces per section",
						"Complimentary 1 month front-end maintenance package",
					]
				},
				{
					featureHeader: "Delivery time",
					featureBody: [
						"Up to 3 days"
					]
				},
				{
					featureHeader: "Customisation possibility",
					featureBody: [
						"App bar",
						"Button",
						"Search input",
						"Image",
						"Transitions"
					]
				},
				{
					featureHeader: "*Does not include prevailing monthly subscription of CMS",
					featureBody: [
					]
				},
			]
		},
		{
			type: "Premium",
			price: "1080",
			pricingUnit: "page",
			preBuildRev: "Unlimited",
			postBuildRev: "3",
			features: [
				{
					featureHeader: "Key features",
					featureBody: [
						"Reactive components to communicate with API",
						"Responsive design supporting all device",
						"Content/Image upload assistance",
						"Source code ownership",
						"Complimentary 7 days front-end maintenance package"
					]
				},
				{
					featureHeader: "CodeVanda's commitment",
					featureBody: [
						"Includes inter-page user journey sketch",
						"Includes web page sketch (Wireframe)",
						"Access to development sandbox",
						"Collaboration rights to Figma project",
					]
				},
				{
					featureHeader: "Delivery time",
					featureBody: [
						"Up to 7 days"
					]
				},
				{
					featureHeader: "Customisation possibility",
					featureBody: [
						"Chatbox",
						"Shopping cart",
						"Admin panel",
						"E-commerce store",
						"Social login"
					]
				},
			]
		}
	]
};

const webBackEnd = {
	header: "Back-End Coding",
	subHeader: "Essentials in making your website interactive and personalise for your customers.",
	cards: [
		{
			type: "Basic",
			price: "4,400",
			pricingUnit: "set of routes",
			preBuildRev: "2",
			postBuildRev: "1",
			features: [
				{
					featureHeader: "Key features",
					featureBody: [
						"Create routes for creating, reading, updating and deleting database information",
						"Setup database + connection with routes",
						"Source code ownership",
						"Essential code encryption"
					]
				},
				{
					featureHeader: "CodeVanda's commitment",
					featureBody: [
						"Includes inter-page user journey sketch",
						"Access to development sandbox",
					]
				},
				{
					featureHeader: "Delivery time",
					featureBody: [
						"Up to 14 days"
					]
				},
				{
					featureHeader: "Popular customisation purpose",
					featureBody: [
						"Blog posts",
						"Comments",
						"User sign-up",
						"Chatbot"
					]
				},
			]
		},
		{
			type: "Premium",
			price: "6,600",
			pricingUnit: "set of routes",
			preBuildRev: "2",
			postBuildRev: "1",
			features: [
				{
					featureHeader: "Key features",
					featureBody: [
						"All basic key features",
						"Implementation of business logic",
						"Functional components within server that communicates with external API",
						"External API integration support for web application",
						"Source code ownership",
					]
				},
				{
					featureHeader: "CodeVanda's commitment",
					featureBody: [
						"Includes inter-page user journey sketch",
						"Access to development sandbox",
					]
				},
				{
					featureHeader: "Delivery time",
					featureBody: [
						"Up to 28 days"
					]
				},
				{
					featureHeader: "Popular customisation purpose",
					featureBody: [
						"Back-end integration",
						"Search algorithm",
						"Business logic",
						"Social login"
					]
				},
			]
		}
	]
};

const webMaintenance = {
	header: "Maintenance Package",
	subHeader: "Keeping your web application up-to-date with live tech support",
	cards: [
		{
			type: "Front-End Maintenance",
			price: "300",
			pricingUnit: "month",
			eligibility: true,
			features: [
				{
					featureHeader: "Key Features",
					featureBody: [
						"Technical support 24/7",
						"Configuration, setup & hosting of front-end",
					]
				},
				{
					featureHeader: "Customisation",
					featureBody: [
						"Uploading of visuals and change of text",
						"Component resizing",
						"Changing component animation & transition",
					]
				}
			]
		},
		{
			type: "Back-End Maintenance",
			price: "450",
			pricingUnit: "month",
			eligibility: true,
			features: [
				{
					featureHeader: "Key features",
					featureBody: [
						"Technical support 24/7",
						"Configuration, setup & hosting of Back-end",
					]
				},
				{
					featureHeader: "Product Visualisation",
					featureBody: [
						"Reconfiguring routes",
						"Troubleshooting of new routes"
					]
				}
			]
		}
	]
}

// In case want to change the CMS front-end option to Basic
// type: "Basic",
// 			price: "700",
// 			pricingUnit: "page",
// 			preBuildRev: "Unlimited",
// 			postBuildRev: "4",
// 			features: [
// 				{
// 					featureHeader: "Key features",
// 					featureBody: [
// 						"Responsive design supporting all device",
// 						"Content/Image upload assistance",
// 						"Source code ownership",
// 						"Complimentary 7 days front-end maintenance package",
// 					]
// 				},
// 				{
// 					featureHeader: "CodeVanda's commitment",
// 					featureBody: [
// 						"Includes web page sketch (Wireframe) ",
// 						"Access to development sandbox",
// 						"Collaboration rights to Figma project",
// 					]
// 				},
// 				{
// 					featureHeader: "Delivery time",
// 					featureBody: [
// 						"Up to 3 days"
// 					]
// 				},
// 				{
// 					featureHeader: "Customisation possibility",
// 					featureBody: [
// 						"App bar",
// 						"Button",
// 						"Search input",
// 						"Image",
// 						"Transitions"
// 					]
// 				},
// 			]