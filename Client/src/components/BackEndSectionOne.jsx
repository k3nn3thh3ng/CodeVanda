import React from 'react';
import { 
	Grid,
	Button,
	Typography,
	CardMedia,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SimpleAccordion from './SimpleAccordion';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(0, 4)
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

function BackEndSectionOne(props) {
	
	const { classes } = props;
	
	// ==For image zoom==
	// const [ expanded, setExpanded ] = useState(false);	
	// const handleClick = (() => setExpanded((expanded) => !expanded));
	// ==================
	
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
									Back-End Coding
								</Typography>
							</Grid>
						</Grid>
						<Grid container className={classes.buttonContainer}>
							<Grid item xs={12} sm={4} className={classes.buttonWrapper}>
								<Button size="large" disableElevation fullWidth variant="contained" className={`${classes.button} ${classes.primary}`}>
									Get started
								</Button>
							</Grid>
						</Grid>
						<Grid container className={classes.accordionContainer}>
							<SimpleAccordion 
								header="Product Description" 
								body="A back-end developer is someone who builds and maintains the technology needed to power the components which enable the user-facing side of the website to be personalise for the user. This includes the core application logic, databases, data and application integration, API and other back end processes."
							/>
							<SimpleAccordion 
								header="Pricing Overview" 
								body="Basic and premium routing options that grow with you. Options starting at:"
								option1="- $1,000/setup (Basic)"
								option2="- $2,500/setup (Premium)"
							/>
							<SimpleAccordion 
								header="Features" 
								body="It's the machinery that works behind the scenes to power those fancy features. Creating personalise user experience for your visitors or allowing user generated content to be retained. All powered by nodeJS and MongoDB to enable interactivity at scale."
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(BackEndSectionOne);