import React from 'react';
import { 
	Grid,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import FAQAccordion from './FAQAccordion';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(12, 0),
		background: '#f5f8fa',
		color: '#33475b'
	},	
	mainWrapper: {
		maxWidth: '1080px',
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(0, 4),
	},
	headerWrapper: {
		padding: theme.spacing(2, 0)
	},
	accordionLeftContainer: {
		display: 'block',
		paddingRight: theme.spacing(1.5),
		[theme.breakpoints.down('sm')] : {
			paddingRight: theme.spacing(0),
		}
	},
	accordionRightContainer: {
		display: 'block',
		paddingLeft: theme.spacing(1.5),
		[theme.breakpoints.down('sm')] : {
			paddingLeft: theme.spacing(0),
		}
	},
})

function FrontEndSectionSix(props) {
	
	const render = (list) => {
		return list.map((item) => {
			return (
				<FAQAccordion question={item.question} answer={item.answer} key={item.question} />
			)
		})
	}
	
	const { classes } = props;
	
	return(
		<Grid container justify="center" className={classes.main}>
			<Grid container direction="column" className={classes.mainWrapper}>
				<Grid container justify="center" className={classes.headerWrapper}>
					<Typography variant="h5" align="center">
						Frequently Asked Questions
					</Typography>
				</Grid>
				<Grid container className={classes.accordionContainer}>
					<Grid item xs={12} md={6} className={classes.accordionLeftContainer}>
						{render(questionLeftList)}
					</Grid>
					<Grid item xs={12} md={6} className={classes.accordionRightContainer}>
						{render(questionRightList)}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(FrontEndSectionSix);

const questionLeftList= [
	{
		question: "How long does it take for the project to be delivered?",
		answer: "Usually each page will take 1-3 days of development to complete, depending on the requirements."
	},
	{
		question: "Do I have to pay for maintenance after the project is done?",
		answer: "Maintenance is optional, we will be able to help you setup and teach you the basics, should you decide to maintain the website on your own."
	},
	{
		question: "Are there any additional charges after confirmation?",
		answer: "There are no hidden charges."
	},
	{
		question: "How many revisions do your provide?",
		answer: "We allow unlimited major revisions before project build phase and 3 minor revisions altogether for during/after project build phase."
	}
];

const questionRightList= [
	{
		question: "How do I know, you understand what I have in mind?",
		answer: "As part of our quality assurance, we will design a wireframe free of charge. You would be able to see a draft prototype of how the end project will look like."
	},
	{
		question: "What happens if I decide to stop the project mid-way through?",
		answer: "There will be no penalty but all work done up to that point will be billed accordingly."
	},
	{
		question: "Will I have access to source code?",
		answer: "Yes, you will have full access to the source code and you can deploy it anywhere."
	},
	{
		question: "If I want to update the website in the future, do you do it for free as well?",
		answer: "If it is a bug, we will fix it at no additional cost (Within 5 year warranty period). However, all structural updates to the website requires a maintenance package. If you are looking for content update like pictures or text, we would recommend a premium web build where you have an admin panel to self-update."
	}
]