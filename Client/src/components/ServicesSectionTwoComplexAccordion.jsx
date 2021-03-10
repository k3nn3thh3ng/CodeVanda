import React, { useState } from 'react';
import { 
	Grid,
	Button,
	Typography,
	Paper,
	Divider,
	Icon,
	Collapse
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = (theme) => ({
	featureCardWrapper: {
		transition: '0.3s ease-in-out',
	},
	featureCard: {
		transition: '0.3s ease-in-out',
		margin: theme.spacing(0, 2, 2.6),
		padding: theme.spacing(2, 0, 0),
		'&:nth-child(2n)' : {
			margin: theme.spacing(0, 0, 2.6, 2),
		},
		[theme.breakpoints.down('sm')] : {
			'&:nth-child(n)' : {
				margin: theme.spacing(0, 2, 2.6, 2),
			},	
		},

	},
	headerWrapper: {
		margin: '0px',
		padding: '0px',
	},
	header: {
		margin: theme.spacing(0, 0, 2.5),
		padding: theme.spacing(2.5, 0, 0),
		[theme.breakpoints.up('lg')] : {
			paddingTop: theme.spacing(4)
		},
	},
	contentContainer: {
		
	},
	contentWrapper: {
		transition: '0.3s ease-in-out',
		width: '49.8%'
	},

	keyFeatureWrapper: {
		height: theme.spacing(10),
		marginBottom: theme.spacing(4),
		padding: theme.spacing(0, 4),
	},
	buttonWrapper: {
		width: '100%',
		padding: theme.spacing(0, 2),
	},
	button: {
		transition: '0.3s ease-in-out',
		textTransform: 'none',
		minWidth: '100%',
	},
	accordionWrapper: {
		padding: theme.spacing(3.3, 0, 2.3),
		cursor: 'pointer',
		color: '#00A4bd',
	},
	allFeatureContainer: {
		flexGrow: '1'
	},
	allFeatureWrapper: {
		padding: theme.spacing(0, 3),
	},
	allFeatureHeaderWrapper: {
		paddingTop: theme.spacing(2.5),
	},
	list: {
		listStyleType: 'none',
		paddingInlineStart: '0px',
	},
	listItem: {
		padding: theme.spacing(0.8,0)
	},
	featureIcon: {
		width: 'auto',
		height: 'auto',
		transition: '0.2s ease-in-out',
		marginRight: theme.spacing(1)
	},
	icon: {
		width: 'auto',
		height: 'auto',
		transition: '0.2s ease-in-out',
	},
	iconExpanded: {
		transform: 'rotate(180deg)'
	},
	background: {
		backgroundColor: '#f5f8fa'
	},
	primary: {
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	},
	primaryContrast: {
		borderColor: '#ff7a59',
		backgroundColor: 'white',
		color: '#ff7a59',
		'&:hover' : {
			backgroundColor: '#fff3f0'
		}
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
})

function ServicesSectionTwoComplexAccordion(props) {
	
	const { classes, info } = props;
	
	const [clicked, setClicked] = useState(false);
	
	const handleClick = () => {
		setClicked((clicked) => !clicked)
	}	

	const renderList = (items) => {
		return items.map(item => {
			return (
				<Grid container alignItems="flex-start" wrap="nowrap" className={classes.listItem} key={item}>
					<Grid>
						<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.featureIcon}`}  />
					</Grid>
					<Grid container>
						<Typography variant="body2">
							{item}
						</Typography>
					</Grid>
				</Grid>
			)
		})
	}
	
	return(
		<React.Fragment>
			<Grid item xs={12} md={6} className={classes.featureCardWrapper}>
				<Paper elevation={0} className={classes.featureCard}>
					<Grid className={classes.headerWrapper}>
						<Grid container justify="center" alignItems="center">
							<Typography variant="h5" className={classes.header}>
								{info.header}
							</Typography>
						</Grid>
					</Grid>

					<Grid container className={classes.contentContainer}>
						<Grid container direction="column" className={classes.contentWrapper}>
							<Grid className={classes.keyFeatureWrapper}>
								<Typography align="center" variant="body1">
									{info.basicSubheader}
								</Typography>
							</Grid>
							
							<Grid container direction="column" justify="space-between" className={clicked ? `${classes.background} ${classes.allFeatureContainer}` : classes.allFeatureContainer}>
								<Collapse in={clicked} className={classes.allFeatureWrapper}>
									
									<Grid container justify="center" className={classes.allFeatureHeaderWrapper}>
										<Typography variant="body1" align="center">
											Basic features
										</Typography>
									</Grid>
									
									<ul className={classes.list}>
										{renderList(info.basicListOfItems)}
									</ul>
								</Collapse>

								<Grid container justify="center">
									<Link to={`${info.basicLink}`} className={`${classes.link} ${classes.buttonWrapper}`}>
										<Button variant="outlined" className={`${classes.button} ${classes.primaryContrast}`}>
											Learn more
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>

						<Divider light orientation="vertical" variant="fullWidth" flexItem/>

						<Grid container direction="column" className={classes.contentWrapper}>
							<Grid className={classes.keyFeatureWrapper}>
								<Typography align="center" variant="body1">
									{info.premiumSubheader}
								</Typography>
							</Grid>

							<Grid container direction="column" justify="space-between" className={clicked ? `${classes.background} ${classes.allFeatureContainer}` : classes.allFeatureContainer}>
								<Collapse in={clicked} className={classes.allFeatureWrapper}>
									
									<Grid container justify="center" className={classes.allFeatureHeaderWrapper}>
										<Typography variant="body1" align="center">
											Premium features   
										</Typography>
									</Grid>
									
									<ul className={classes.list}>
										{renderList(info.premiumListOfItems)}
									</ul>
								</Collapse>

								<Grid container justify="center">
									<Link to={`${info.premiumLink}`} className={`${classes.link} ${classes.buttonWrapper}`}>
										<Button disableElevation variant="contained" className={`${classes.button} ${classes.primary}`}>
											Get started
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Grid container direction="column" alignItems="center" onClick={handleClick} className={ clicked ? `${classes.accordionWrapper} ${classes.background}` : `${classes.accordionWrapper}`}>
						<Grid className={classes.accordionText}>
							<Typography variant="body1" align="center">
								{clicked ? 'Hide features' : 'See all features'}
							</Typography>
						</Grid>
						<Grid className={classes.accordionLogo}>
							<Icon fontSize="small" color="inherit" className={clicked ? `fas fa-chevron-down ${classes.icon} ${classes.iconExpanded}` : `fas fa-chevron-down ${classes.icon}`} />
						</Grid>
					</Grid>

				</Paper>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(ServicesSectionTwoComplexAccordion);

