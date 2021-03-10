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
	accordionContainer: {
		display: 'block',
		padding: theme.spacing(0,1.5),
	},
})

function PricesSectionFour(props) {
	
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
				<Grid container>
					<Grid item xs={12} className={classes.accordionContainer}>
						{render(questionList)}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(PricesSectionFour);

const questionList= [
	{
		question: "How long does it take for the project to be delivered?",
		answer: "Please do refer to the individual components you have requested on the estimated time for delivery."
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
		question: "What happens if I decide to stop the project mid-way through?",
		answer: "There will be no penalty but all work done up to that point will be billed accordingly."
	}
];
