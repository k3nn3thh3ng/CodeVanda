import React from 'react';
import { 
	Grid,
	Typography,
	CardMedia
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	main: {
		color: '#33475b'
	},
	mainWrapper: {
		maxWidth: '1080px',
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(1, 0)
	},
	headerWrapper: {
		margin: theme.spacing(5, 0, 3),
		[theme.breakpoints.down('xs')]: {
			margin: theme.spacing(0,0,4),
		}
	},
	brandsContainer: {
		margin: theme.spacing(0, 0, 14),
		[theme.breakpoints.down('xs')]: {
			margin: theme.spacing(0, 0, 8),
		}
	},
	brandsWrapper: {
		
	},
	brandsLogo: {
		transition: '0.3s ease-in-out',
		padding: theme.spacing(0, 1.5),
		width: '100%',
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(3, 3.5),
		}
	}
})

function FrontEndSectionTwo(props) {
	
	const { classes } = props;
	
	
	return(
		<React.Fragment>
			<Grid className={classes.main}>
				<Grid container direction="column" alignItems="center" className={classes.mainWrapper}>
					<Grid container justify="center" className={classes.headerWrapper}>
						<Typography variant="h6">
							Technology Used By
						</Typography>
					</Grid>
					<Grid className={classes.brandsContainer}>
						<Grid container justify="space-evenly" alignItems="center" className={classes.brandsWrapper}>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
									alt="LinkedIn-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/pinterest.svg"
									alt="Pinterest-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/slack-2.svg"
									alt="Slack-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia 
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/shopify-2.svg"
									alt="Shopify-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/udemy-2.svg"
									alt="Udemy-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/uber.svg"
									alt="Uber-logo"
									className={classes.image}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(FrontEndSectionTwo);