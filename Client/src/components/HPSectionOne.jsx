import React from 'react';
import { 
	Grid,
	Button,
	Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(5,0),
		color: '#33475b'
	},	
	container: {
		width: '802px',
		margin: '0px auto',
		maxWidth: '100%',
		padding: theme.spacing(0,2),
	},
	header: {
		padding: theme.spacing(5,0),
	},
	paragraph: {
		padding: theme.spacing(2,0),	
	},
	buttonWrapper: {
		padding: theme.spacing(5, 1.2),	
	},
	button: {
		minWidth: theme.spacing(25),
		height: '100%'
	},
	link: {
		textDecoration: 'none'
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
	}
})

function HPSectionOne(props) {
	
	const { classes } = props;
	
	return(
		<Grid container justify="center" className={classes.main}>
			<Grid container direction="column" alignItems="center" className={classes.container}>
				<Typography variant="h4" color="inherit" className={classes.header}>
					Build Today. Scale Tommorrow.
				</Typography>
				<Typography variant="body1" component="p" color="inherit" className={classes.paragraph}>
					CodeVanda develops web applications for all purposes. We can help you start an e-commerce business, setup website funnels, or build a powerful website. With CodeVanda you can start building your website today and scale up for tomorrow.
				</Typography>
				<Grid container justify="center" className={classes.buttonContainer}>
					<Grid item xs={6} container justify="flex-end" className={classes.buttonWrapper}>
						<Link to="/prices" className={classes.link}>
							<Button variant="outlined" className={`${classes.button} ${classes.primaryContrast}`}>
								View Rates
							</Button>
						</Link>
					</Grid>
					<Grid item xs={6} container justify="flex-start" className={classes.buttonWrapper} >
						<Link to="/contact" className={classes.link}>
							<Button variant="contained" className={`${classes.button} ${classes.primary}`} disableElevation>
								Schedule Consultation
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(HPSectionOne);