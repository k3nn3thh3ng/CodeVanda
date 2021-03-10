import React from 'react';
import { 
	Grid,
	Button,
	Typography,
	Paper,
	Icon,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	mainWrapper: {
	},
	headerContainer: {
		color:'white',
		backgroundImage:'linear-gradient(45deg, #EEAA78, #E37222)',
		padding: theme.spacing(15, 0, 25),
		margin: theme.spacing(0, 'auto'),
	},
	headerWrapper: {
		maxWidth: theme.spacing(80),
	},
	subtitleWrapper: {
		maxWidth: theme.spacing(80)
	},
	cardSetContainer: {
		maxWidth: '1040px',
		margin: theme.spacing(0, 'auto'),
		top: theme.spacing(-12),
		position: 'relative',
		
	},
	cardWrapper: {
		padding: theme.spacing(4,4),
		color: '#33475b'
	},
	cardContainer: {
		margin: theme.spacing(4,4),
		maxHeight: theme.spacing(50),
		border: '1px solid #EAF0F6'
	},
	cardLogoWrapper: {
		padding: theme.spacing(2)
	},
	icon: {
	},
	cardHeaderWrapper: {
		padding: theme.spacing(4,0)
	},
	cTAWrapper: {
		padding: theme.spacing(1),
		height: '100%',
		minHeight: theme.spacing(12)
	},
	button: {
		margin: theme.spacing(1.5),
		padding: theme.spacing(1.5),
		width: theme.spacing(35)
	},
	primary: {
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	},
	textColor: {
		color: '#0091AE'
	},
	underline: {
		cursor: 'pointer'
	}
})

function ContactSectionOne(props) {
	
	const { classes } = props;
	
	
	return(
		<React.Fragment>
				<Grid container direction="column" alignItems="center" className={classes.headerContainer}>
					<Grid container justify="center" className={classes.headerWrapper}>
						<Typography gutterBottom variant="h3" align="center">
							Get in touch
						</Typography>
					</Grid>
					<Grid container justify="center" className={classes.subtitleWrapper}>
						<Typography variant="body1" align="center">
							Want to get in touch? We'd love to hear from you. Here's how you can reach us...
						</Typography>
					</Grid>
				</Grid>
				<Grid container justify="space-evenly" className={classes.cardSetContainer}>
					<Grid item xs={12} sm={6} md={5}>
						<Paper elevation={0} className={classes.cardContainer}>
							<Grid container direction="column" alignItems="center" className={classes.cardWrapper}>
								<Grid container justify="center" className={classes.cardLogoWrapper}>
									<Icon fontSize="large" color="inherit" className={`fas fa-phone-alt ${classes.icon}`}  />
								</Grid>
								<Grid container justify="center" className={classes.cardHeaderWrapper}>
									<Typography variant="h5">
										Call us directly
									</Typography>
								</Grid>
								<Grid container>
									<Grid container justify="center" className={`${classes.cTAWrapper} ${classes.textColor}`}>
										<Grid container justify="center">
											<Typography gutterBottom variant="h5" align="center">
												+65 9000 9000
											</Typography>
										</Grid>
										<Grid container justify="center">
											<Typography variant="subtitle2" align="center">
												Connect using Whatsapp <u className={classes.underline}>here</u>
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<Paper elevation={0} className={classes.cardContainer}>
							<Grid container direction="column" alignItems="center" className={classes.cardWrapper}>
								<Grid container justify="center" className={classes.cardLogoWrapper}>
									<Icon fontSize="large" color="inherit" className={`fas fa-calendar-check ${classes.icon}`}  />
								</Grid>
								<Grid container justify="center" className={classes.cardHeaderWrapper}>
									<Typography variant="h5">
										Book a meeting
									</Typography>
								</Grid>
								<Grid container justify="center" className={classes.cTAWrapper}>
									<Button disableElevation variant="contained" className={`${classes.button} ${classes.primary}`}>
										Choose a date &amp; time
									</Button>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(ContactSectionOne);