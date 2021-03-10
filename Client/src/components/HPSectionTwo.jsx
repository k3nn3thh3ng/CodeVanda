import React from 'react';
import { 
	Grid,
	Button,
	Typography,
	CardMedia,
	Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = (theme) => ({
	main: {
		color: '#33475b',
		background: '#f5f8fa',
	},
	mainWrapper: {
		maxWidth: '1080px',
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(6, 4, 14)
	},
	headerWrapper: {
		padding: theme.spacing(4,0)
	},
	list: {
		listStyleType: 'none',
		paddingInlineStart: '0px',
	},
	listItem: {
		padding: theme.spacing(0.8,0,2)
	},
	uspHeader: {
		fontWeight: '700'
	},
	icon: {
		width: 'auto',
		height: 'auto',
		transition: '0.2s ease-in-out',
		marginRight: theme.spacing(1),
		color: '#00A4BD'
	},
	image: {
		width: '100%',
		maxWidth: theme.spacing(60),
		margin: theme.spacing(2),
		objectFit: 'contain'
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
		textDecoration: 'none',
		[theme.breakpoints.down('sm')] : {
			padding: theme.spacing(0,2),
			width: '100%'
		}
	},
	button: {
		transition: '0.3s ease-in-out',
		textTransform: 'none',
		margin: theme.spacing(1,0,2),
		width: theme.spacing(30),
		height: theme.spacing(6),
		[theme.breakpoints.down('sm')] : {
			padding: theme.spacing(0,2),
			width: '100%'
		}
	},
	buttonText: {
		fontWeight: '400'
	}
})

function HPSectionTwo(props) {
	
	const { classes } = props;
	
	const renderList = (uspList) => {
		return uspList.map((list, order) => {
			return (
				<Grid container alignItems="flex-start" wrap="nowrap" className={classes.listItem} key={order}>
					<Grid>
						<Icon color="inherit" className={`fas fa-check ${classes.icon}`}  />
					</Grid>
					<Grid container direction="column" alignItems="flex-start">
						<Typography variant="body1" className={classes.uspHeader}>
							{list.header}
						</Typography>
						<Typography variant="body1" className={classes.uspBody}>
							{list.body}
						</Typography>
					</Grid>
				</Grid>
			)
		})
	}
	
	return(
		<React.Fragment>
			<Grid className={classes.main}>
				<Grid container direction="column" alignItems="center" className={classes.mainWrapper}>
					<Grid container justify="center" className={classes.headerWrapper}>
						<Typography variant="h4" align="center">
							Here's how CodeVanda can benefit your business
						</Typography>
					</Grid>
					<Grid container justify="space-between" className={classes.bodyWrapper}>
						<Grid item xs={12} md={6} container direction="column" className={classes.uspListWrapper}>
							{renderList(listOfUSP)}
							<Grid container>
								<Link to="/contact" className={classes.link}>
									<Button variant="contained" className={`${classes.button} ${classes.primary}`}>
										<Typography variant="h6" className={classes.buttonText}>
											Free Consultation
										</Typography>
									</Button>
								</Link>
							</Grid>
						</Grid>
						<Grid item xs={12} md={6} container justify="center" className={classes.imageWrapper}>
							<CardMedia
								component="img"
								image="//www.salesforce.com/content/dam/web/en_au/www/images/home/img_hp_sf_macbook_hero_v6.png"
								alt="USP Image"
								className={classes.image}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(HPSectionTwo);


const listOfUSP = [
	{
		header: "Custom Web Building",
		body: "We build and customise web application which provides for seamless navigation and easy user interface"
	},
	{
		header: "Single Source of Truth",
		body: "We provide on-demand turn key full-stack web development services"
	},
	{
		header: "Fast Time to Market",
		body: "We prototype and implement at speed with high quality"
	},
	{
		header: "Scalable and Flexible",
		body: "We develop applications that can scale with your company's growth"
	},
	{
		header: "Listening Ear",
		body: "We understand our clients and always have our fingers on the pulse of the market"
	}
]