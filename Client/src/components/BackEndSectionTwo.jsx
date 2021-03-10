import React from 'react';
import { 
	Grid,
	Typography,
	CardMedia
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	main: {
	},
	mainWrapper: {
		maxWidth: '1080px',
		margin: theme.spacing(0, 'auto'),
		padding: theme.spacing(1, 0)
	},
	headerWrapper: {
		margin: theme.spacing(5, 0, 3)
	},
	brandsContainer: {
		margin: theme.spacing(0, 0, 14)
	},
	brandsWrapper: {
		
	},
	brandsLogo: {
		padding: theme.spacing(0, 1.5),
		width: '100%'
	}
})

function BackEndSectionTwo(props) {
	
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
						<Grid container justify="space-evenly" alignItems="center"  className={classes.brandsWrapper}>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/paypal-2.svg"
									alt="Paypal-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/ebay.svg"
									alt="Ebay-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/medium-2.svg"
									alt="Medium-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia 
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/godaddy-1.svg"
									alt="Godaddy-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/citibank-4.svg"
									alt="Citibank-logo"
									className={classes.image}
								/>
							</Grid>
							<Grid item sm={2} xs={6} className={classes.brandsLogo}>
								<CardMedia
									component="img"
									image="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
									alt="Netflix-logo"
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

export default withStyles(styles)(BackEndSectionTwo);