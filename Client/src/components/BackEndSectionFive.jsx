import React from 'react';
import { 
	Grid,
	Button,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(5,0),
		color: '#33475b'
	},	
	container: {
		width: '802px',
		margin: '0px auto',
		maxWidth: '100%',
		padding: theme.spacing(0,4),
	},
	header: {
		padding: theme.spacing(3,0),
	},
	paragraph: {
		padding: theme.spacing(2,0),	
	},
	buttonContainer: {
		padding: theme.spacing(2,0),	
	},
	buttonWrapper: {
		margin: theme.spacing(0,1),
		minWidth: theme.spacing(20),
		[theme.breakpoints.down('xs')] : {
			width: '100%',
			margin: theme.spacing(2,1,0)
		}
	},
	button: {
		textTransform: 'none',

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

function BackEndSectionFive(props) {
	
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
					<Grid container justify="flex-end" item xs={12} sm={6}>
						<Link to="/prices" className={`${classes.link} ${classes.buttonWrapper}`}>
							<Button variant="outlined" className={`${classes.button} ${classes.primaryContrast}`} fullWidth>
								View Rates
							</Button>
						</Link>
					</Grid>
					<Grid container justify="flex-start" item xs={12} sm={6}>
						<Link to="/contact" className={`${classes.link} ${classes.buttonWrapper}`}>
							<Button variant="contained" className={`${classes.button} ${classes.primary}`} fullWidth>
								Book A Meeting
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(BackEndSectionFive);