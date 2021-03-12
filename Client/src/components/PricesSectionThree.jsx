import React from 'react';
import { Grid, Typography, Paper, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = (theme) => ({
	main: {
		color: '#33475b',
	},
	mainWrapper: {
		maxWidth: '1020px',
		padding: theme.spacing(0,3,10),
		margin: theme.spacing(0, 'auto'),
	},
	headerWrapper: {
		padding: theme.spacing(4, 0)
	},
	highlightWrapper: {
		padding: theme.spacing(2, 4),
		backgroundColor: 'rgb(229, 245, 248)',
	},
	priceHeader: {
		fontWeight: '700',
		color: '#00BDA5'
	},
	cTAWrapper: {
		padding: theme.spacing(4, 4),
	},
	cTABodyWrapper: {
		padding: theme.spacing(2, 0),
	},
	infoWrapper: {
		padding: theme.spacing(1.5,0,0)
	},
	infoHeaderWrapper: {
		padding: theme.spacing(0,0,1.2)
	},
	infoBodyWrapper: {
		padding: theme.spacing(0.2,0)
	},
	buttonContainer: {
		padding: theme.spacing(4,0)
	},
	buttonSubtitleWrapper: {
		margin: theme.spacing(1, 0, 0)
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
	strong: {
		fontWeight: '700'
	},
	icon: {
		marginRight: theme.spacing(0.8)
	},
	infoColor: {
		color: '#0091AE',
	}
})

function PricesSectionThree(props) {
	const {classes} = props;
	
	return (
		<Grid container justify="center" className={classes.main}>
			<Grid item xs={12} sm={10} md={12} container direction="column" className={classes.mainWrapper}>
				<Grid container justify="center" className={classes.headerWrapper}>
					<Typography variant="h4">
						Recommended Bundle
					</Typography>
				</Grid>
				<Paper elevation={1} className={classes.packageContainer}>
					<Grid container direction="column" alignItems="center" className={classes.packageWrapper}>
						<Grid container className={classes.highlightWrapper}>
							<Typography variant="body2" className={classes.highlight}>
								To support small businesses through this uncertain time, we're reducing the cost of our Startup Growth Suite from S$15,500/project to S$9,300/project with unlimited revision within 7 days of completion.
							</Typography>
						</Grid>
						<Grid justify="space-between" container className={classes.cTAWrapper}>
							<Grid item xs={12} md={9} container direction="column" className={classes.cTAInfoWrapper}>
								<Grid container className={classes.cTAHeaderWrapper}>
									<Typography variant="h6">
										Startup Growth Suite
									</Typography>
								</Grid>
								<Grid container className={classes.cTABodyWrapper}>
									<Typography variant="body2">
										Our Growth Suite bundle includes all the front-end and back-end software development your growing business needs - fully integrated and discounted on our standalone prices.
									</Typography>
								</Grid>
								<Grid container direction="column" className={classes.priceWrapper}>
									<Grid container className={classes.priceSubHeaderWrapper}>
										<Typography variant="subtitle2">
											Starts at <strike>S$15,500</strike>
										</Typography>
									</Grid>
									<Grid container className={classes.priceHeaderWrapper}>
										<Typography gutterBottom variant="h6" className={classes.priceHeader}>
											S$9,300/ proj
										</Typography>
									</Grid>
								</Grid>
								<Grid container direction="column" className={classes.infoWrapper}>
									<Grid container className={classes.infoHeaderWrapper} >
										<Typography variant="subtitle1" className={`${classes.infoHeader} ${classes.strong} ${classes.infoColor}`} >
											Ideal for:
										</Typography>
									</Grid>
									<Grid container className={classes.infoBodyWrapper} wrap="nowrap">
										<Grid>
											<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.icon}`}  />
										</Grid>
										<Grid container>
											<Typography variant="subtitle2">
												Startups looking for alternative solutions to web-building platform
											</Typography>
										</Grid>
									</Grid>
									<Grid container className={classes.infoBodyWrapper} wrap="nowrap">
										<Grid>
											<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.icon}`}  />
										</Grid>
										<Grid container>
											<Typography variant="subtitle2">
												Businesses with existing subscription with CMS and looking for data flexibility
											</Typography>
										</Grid>
									</Grid>
									<Grid container className={classes.infoBodyWrapper} wrap="nowrap">
										<Grid>
											<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.icon}`}  />
										</Grid>
										<Grid container>
											<Typography variant="subtitle2">
												Growing business looking to scale and outsource non-critical components of the web application
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid container direction="column" className={classes.infoWrapper}>
									<Grid container className={classes.infoHeaderWrapper} >
										<Typography variant="subtitle1" className={`${classes.infoHeader} ${classes.infoColor} ${classes.strong}`} >
											Includes:
										</Typography>
									</Grid>
									<Grid container className={classes.infoBodyWrapper} wrap="nowrap">
										<Grid>
											<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.icon}`}  />
										</Grid>
										<Grid container>
											<Typography variant="subtitle2">
												5 Basic web pages
											</Typography>
										</Grid>
									</Grid>
									<Grid container className={classes.infoBodyWrapper} wrap="nowrap">
										<Grid>
											<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.icon}`}  />
										</Grid>
										<Grid container>
											<Typography variant="subtitle2">
												5 Premium web pages
											</Typography>
										</Grid>
									</Grid>
									<Grid container className={classes.infoBodyWrapper} wrap="nowrap">
										<Grid>
											<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.icon}`}  />
										</Grid>
										<Grid container>
											<Typography variant="subtitle2">
												1 Set of premium back end coding
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={3} container direction="column" className={classes.buttonContainer}>
								<Link to="/contact" className={classes.link}>
									<Grid container className={classes.cTAButtonWrapper}>
										<Button fullWidth variant="contained" className={classes.primary}>
											Buy now
										</Button>
									</Grid>
								</Link>
								<Grid container justify="center" className={classes.buttonSubtitleWrapper}>
									<Typography variant="caption">
										Looking for funding.&nbsp;
										<Link to="/probono" className={classes.link}>
											<Typography variant="caption" display="initial">
												<u>Learn more</u>
											</Typography>
										</Link>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
	
}

export default withStyles(styles)(PricesSectionThree);