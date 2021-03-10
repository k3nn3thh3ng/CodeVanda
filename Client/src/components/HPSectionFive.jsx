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
		padding: theme.spacing(12, 0)
	},
	container: {
		maxWidth: '1080px',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.down('sm')] : {
			flexDirection: 'column',
			maxWidth: '525px'
		}
	},
	textWrapper: {
		order: '2',
		padding: theme.spacing(0, 2, 0, 0),
		textAlign: 'left',
		[theme.breakpoints.down('sm')] : {
			textAlign: 'center',
			margin: theme.spacing(2, 2, 0),
		}
	},
	headerWrapper: {
		margin: theme.spacing(0, 0, 2.5)
	},
	header: {
	},
	paragraphWrapper: {
		margin: theme.spacing(1.6, 0)
	},
	paragraph: {
	},
	buttonWrapper: {
		padding: theme.spacing(2.5, 0),
		width: '100%',
	},
	primary: {
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	},
	button: {
		padding: theme.spacing(2.8, 4),	
		textTransform: 'none',
		[theme.breakpoints.down('sm')] : {
			width: '100%'
		},
	},
	buttonSubText: {
	},
	imgWrapper: {
		order: '1',
	},
	img: {
		maxHeight: '350px',
		width: '350px',
		[theme.breakpoints.down('sm')] : {
			maxHeight: '200px',
			width: '200px',
			marginBottom: theme.spacing(2)
		}
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
})

function HPSectionFive(props) {
	
	const { classes } = props;
	
	return(
		<Grid className={classes.main}>
			<Grid container direction="row-reverse" justify="center" alignItems="center" className={classes.container}>
				<Grid item xs={12} md={9} container direction="column" className={classes.textWrapper}>
					<Grid className={classes.headerWrapper}>
						<Typography variant="h3">
							Start Scaling With CodeVanda Today
						</Typography>
					</Grid>
					<Grid className={classes.paragraphWrapper}>
						<Typography variant="h6">
							With tools to make every part of your journey more efficient and a development team excited to help you, getting started with a digital application has never been easier
						</Typography>
					</Grid>
					<Grid className={classes.buttonWrapper}>
						<Link to="/contact" className={classes.link}>
							<Button size="large" variant="contained" className={`${classes.button} ${classes.primary}`}>
								<Typography variant="body1">
									Free Consultation
								</Typography>
							</Button>
						</Link>
					</Grid>
					<Typography variant="body1" className={classes.buttonSubText}>
						Get started with a FREE consult and understand if you require custom coding
					</Typography>
				</Grid>
				<Grid item xs={12} md={3} className={classes.imgWrapper}>
					<img data-src="https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png" alt="1200px-WWF_logo_svg (1)" src="https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png" data-was-processed="true" className={classes.img}/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(HPSectionFive);