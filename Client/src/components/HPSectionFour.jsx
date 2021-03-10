import React from 'react';
import { 
	Grid,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	main: {
		padding: '100px 0px 0px'
	},
	container: {
		maxWidth: '1080px',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
	},
	textWrapper: {
		width: '33%',
		margin: theme.spacing(0, 2, 0, 0),
		[theme.breakpoints.down('sm')] : {
			width: '100%',
			textAlign: 'center',
			margin: theme.spacing(0, 0, 2, 0),
		}
	},
	header: {
		
	},
	paragraph: {
		letterSpacing: '0.2rem'
	},
	logoGrid: {
		maxWidth: '600px'
	},
	logo: {
		flexGrow: '1',
		flexShrink: '1',
		padding: '20px'
	},
	logoImg: {
		maxHeight: '100%',
		width: '100%',
	}
})

function HPSectionFour(props) {
	
	const { classes } = props;
	
	return(
		<Grid container className={classes.main}>
			<Grid container justify="center" alignItems="center" className={classes.container}>
				<Grid className={classes.textWrapper}>
					<Typography variant="h3" className={classes.header} gutterBottom>
						8,000
					</Typography>
					<Typography variant="body1" className={classes.paragraph}>
						companies around the world trust the <b>same technology</b> CodeVanda uses for mobile and web apps
					</Typography>
				</Grid>
				<Grid container justify="center" alignItems="center" className={classes.logoGrid}>
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="Instagram-logo" 
							src="https://cdn.worldvectorlogo.com/logos/instagram-1.svg" 
							className={classes.logoImg}
						/>
					</Grid>	
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="Facebook-logo" 
							src="https://cdn.worldvectorlogo.com/logos/facebook-1.svg" 
							className={classes.logoImg}
						/>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="Whatsapp-logo" 
							src="https://cdn.worldvectorlogo.com/logos/whatsapp.svg" 
							className={classes.logoImg}
						/>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="Yahoo-logo" 
							src="https://cdn.worldvectorlogo.com/logos/yahoo-7.svg" 
							className={classes.logoImg}
						/>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="NYTimes-logo" 
							src="https://cdn.worldvectorlogo.com/logos/new-york-times.svg" 
							className={classes.logoImg}
						/>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="Netflix-logo" 
							src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" 
							className={classes.logoImg}
						/>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="AirBnB-logo" 
							src="https://cdn.worldvectorlogo.com/logos/airbnb.svg" 
							className={classes.logoImg}
						/>
					</Grid>
					<Grid item sm={3} xs={6} className={classes.logo}>
						<img 
							alt="Discord-logo" 
							src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg" 
							className={classes.logoImg}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(HPSectionFour);