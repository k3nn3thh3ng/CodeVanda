import React from 'react';
import { 
	Grid,
	Button,
	Typography,
	CardMedia,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import SimpleAccordion from './SimpleAccordion';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(0, 4),
		color: '#33475b'
	},
	mainWrapper: {
		maxWidth: '1080px',
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(8, 0)
	},
	imageWrapper: {
		padding: theme.spacing(2)
	},
	image: {
		minWidth: '400px',
		maxWidth: '450px',
		maxHeight: '390px'
	},
	infoWrapper:{
		
	},
	headerWrapper: {
		
	},
	subHeaderWrapper: {
		marginBottom: theme.spacing(2)
	},
	subHeader: {
	},
	mainHeaderWrapper: {
	},
	mainHeader: {
	},
	buttonContainer: {
	},
	buttonWrapper: {
		transition: '0.3s ease-in-out',	
		padding: theme.spacing(3,0),
	},
	button: {
		textTransform: 'none',
		padding: theme.spacing(1.25, 0)
	},
	accordionContainer: {
		
	},
	accordionWrapper:{
		
	},
	accordion: {
		padding: theme.spacing(2, 2.6),
	},
	accordionExpandBtn: {
		transition: '0.2s ease-in-out',
	},
	accordionBtnExpanded: {
		transform: 'rotate(180deg)'
	},
	primary: {
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
})

function FrontEndSectionOne(props) {
	
	const { classes } = props;
	
	
	return(
		<React.Fragment>
			<Grid className={classes.main}>
				<Grid container justify="space-evenly" className={classes.mainWrapper}>
					<Grid container justify="center" item xs={12} md={6} className={classes.imageWrapper}>
						<CardMedia 
							component="img"
							image="https://f.hubspotusercontent00.net/hubfs/53/Marketing%20Hub%20-%20Featured%20Image.png"
							alt="dummy infographic"
							className={classes.image}
						/>
					</Grid>
					<Grid container direction="column" alignItems="flex-start" item xs={12} md={6} className={classes.infoWrapper}>
						<Grid className={classes.headerWrapper}>
							<Grid className={classes.subHeaderWrapper}>
								<Typography variant="h5" className={classes.subHeader}>
									Web Application
								</Typography>
							</Grid>
							<Grid className={classes.mainHeaderWrapper}>
								<Typography variant="h3" className={classes.mainHeader}>
									Front-End Coding
								</Typography>
							</Grid>
						</Grid>
						<Grid container className={classes.buttonContainer}>
							<Grid item xs={12} sm={4} className={classes.buttonWrapper}>
								<Link to="/contact" className={classes.link}>
									<Button size="large" disableElevation fullWidth variant="contained" className={`${classes.button} ${classes.primary}`}>
										Get started
									</Button>
								</Link>
							</Grid>
						</Grid>
						<Grid container className={classes.accordionContainer}>
							<SimpleAccordion 
								header="Product Description" 
								body="Front end development refers to 'client-side' development, where the focus is on what users visually see first in their browser or application. Front end development is responsible for the look and feel of a site."
							/>
							<SimpleAccordion 
								header="Pricing Overview" 
								body="Basic and premium options that grow with you. Options starting at:"
								option1="- $140/page (Basic)"
								option2="- $420/page (Premium)"
							/>
							<SimpleAccordion 
								header="Features" 
								body="Attract visitors through interactivity and seamless movement on your site. Convert visitors into customer by using landing pages, curated user journey and more. All powered by facebook REACT to enable interactivity at scale."
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(FrontEndSectionOne);