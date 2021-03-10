import React, { useState } from 'react';
import { 
	Grid,
	Button,
	Typography,
	Paper,
	CardMedia
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	sideHeaderWrapper: {
	},
	toggleCanvasWrapper: {
		padding: theme.spacing(2, 2.5)
	},
	infoWrapper: {

	},
	image: {
		width: '100%',
		margin: theme.spacing(0, 0, 6),
	},
	infoCardContainer: {
		margin: theme.spacing(2, 0),
	},
	infoCardWrapper: {
		padding: theme.spacing(0, 4, 0, 0)
	}
})

function BackEndSectionFourPageOne(props) {
	
	const { classes } = props;
	
	return(
		<React.Fragment>
			<Grid container className={classes.toggleCanvasWrapper}>
				<Grid item xs={12} md={2} container className={classes.sideHeaderWrapper}>
					<Typography varian="h3">
						Professional look - Create content your prospects identify with and display professionalism through design
					</Typography>
				</Grid>
				<Grid item xs={12} md={10} container direction="column" className={classes.infoWrapper}>
					<Grid className={classes.snapshotWrapper}>
						<CardMedia
							component="img"
							image="https://f.hubspotusercontent00.net/hubfs/53/MH1_Attract%20Attention.png"
							alt="dummy infographic"
							className={classes.image}
						/>
					</Grid>
					<Grid container className={classes.infoHeader}>
						<Typography variant="h6">
							POPULAR FEATURES:
						</Typography>
					</Grid>
					<Grid container className={classes.infoCardContainer}>
						<Grid item xs={6} md={4} className={classes.infoCardWrapper}>
							<Grid className={classes.infoCardHeader}>
								<Typography gutterBottom variant="body1">
									Blog
								</Typography>
							</Grid>
							<Grid className={classes.infoCardText}>
								<Typography gutterBottom variant="body2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={6} md={4} className={classes.infoCardWrapper}>
							<Grid className={classes.infoCardHeader}>
								<Typography gutterBottom variant="body1">
									Blog
								</Typography>
							</Grid>
							<Grid className={classes.infoCardText}>
								<Typography gutterBottom variant="body2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={6} md={4} className={classes.infoCardWrapper}>
							<Grid className={classes.infoCardHeader}>
								<Typography gutterBottom variant="body1">
									Blog
								</Typography>
							</Grid>
							<Grid className={classes.infoCardText}>
								<Typography gutterBottom variant="body2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(BackEndSectionFourPageOne);

