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
		padding: theme.spacing(13,4),
		background: '#eaf0f6',
		color: '#33475b'
	},	
	container: {
		width: '802px',
		margin: '0px auto',
		maxWidth: '100%',
		padding: theme.spacing(0,2),
	},
	headerWrapper: {
		margin: theme.spacing(2,0)
	},
	header: {
		fontWeight: '700',
		[theme.breakpoints.down('xs')] : {
			fontSize: '2.0rem',
		}
	},
	paragraphWrapper: {
		margin: theme.spacing(2, 'auto'),
		maxWidth: '600px',
	},
	paragraph: {
		[theme.breakpoints.down('xs')] : {
			textAlign: 'left'
		}
	},
	buttonContainer: {
		padding: theme.spacing(2,0),	
	},
	buttonWrapper: {
		transition: '0.3s ease-in-out',
		margin: theme.spacing(0, 2),
		width: '100%',
		maxWidth: '185px',
		[theme.breakpoints.down('xs')] : {
			maxWidth: '100%',
			margin: theme.spacing(1,0),
		}
	},
	primary: {
		textTransform: 'none',
		width: '100%',
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	},
	primaryContrast: {
		textTransform: 'none',
		width: '100%',
		borderColor: '#ff7a59',
		backgroundColor: 'white',
		color: '#ff7a59',
		'&:hover' : {
			backgroundColor: '#fff3f0'
		}
	},
	link: {
		textDecoration: 'none'
	},
})

function ServicesSectionOne(props) {
	
	const { classes } = props;
	
	return(
		<Grid container justify="center" className={classes.main}>
			<Grid container direction="column" alignItems="center" className={classes.container}>
				<Grid container justify="center" className={classes.headerWrapper}>
					<Typography variant="h2" align="center" className={classes.header}>
						Get Started With CodeVanda
					</Typography>
				</Grid>
				<Grid className={classes.paragraphWrapper}>
					<Typography variant="body1" align="center" className={classes.paragraph}>
						CodeVanda is a complete mobile and web application development agency with all the tools you need to grow a dynamic application - whether you want to setup API, reduce recurring cost, or own the source code for your idea.
					</Typography>
				</Grid>
				<Grid container justify="center" className={classes.buttonContainer}>
					<Grid className={classes.buttonWrapper}>
						<Link to="/contact" className={classes.link}>
							<Button variant="outlined" className={classes.primaryContrast}>
								View rates
							</Button>
						</Link>
					</Grid>
					<Grid className={classes.buttonWrapper}>
						<Link to="/prices" className={classes.link}>
							<Button variant="contained" className={classes.primary} disableElevation>
								Free consultation
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(ServicesSectionOne);