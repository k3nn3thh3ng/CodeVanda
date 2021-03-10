import React from 'react';
import { 
	Grid,
	Typography,
	CardMedia
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	toggleCanvasWrapper: {
		padding: theme.spacing(4, 2, 4, 0)
	},
	sideHeaderWrapper: {
		padding: theme.spacing(2,2,2,0)
	},
	sideHeader: {
		fontWeight: '400'
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
		transition: '0.3s ease-in-out',
		padding: theme.spacing(0, 3, 2, 0),
		[theme.breakpoints.down('sm')] : {
			padding: theme.spacing(2,4,2,0)
		},
		[theme.breakpoints.down('xs')] : {
			padding: theme.spacing(2,0)
		}
	},
	infoCardHeader: {
		fontWeight: '700',
		color: '#0091AE'
	}
})

function FrontEndSectionFourPageOne(props) {
	const { classes } = props;
	
	const renderCards = (cards) => {
		return cards.map((card, count) => {
			return (
				<Grid item xs={12} sm={6} md={4} className={classes.infoCardWrapper} key={count}>
					<Grid className={classes.infoCardHeaderWrapper}>
						<Typography gutterBottom variant="body1" className={classes.infoCardHeader}>
							{card.header}
						</Typography>
					</Grid>
					<Grid className={classes.infoCardText}>
						<Typography gutterBottom variant="body1">
							{card.body}
						</Typography>
					</Grid>
				</Grid>
			)
		})
	}
	
	return(
		<React.Fragment>
			<Grid container className={classes.toggleCanvasWrapper}>
				<Grid item xs={12} md={3} container className={classes.sideHeaderWrapper}>
					<Typography variant="h5" className={classes.sideHeader}>
						{props.sideHeader}
					</Typography>
				</Grid>
				<Grid item xs={12} md={9} container direction="column" className={classes.infoWrapper}>
					<Grid className={classes.snapshotWrapper}>
						<CardMedia
							component="img"
							image={props.image}
							alt="Infographic"
							className={classes.image}
						/>
					</Grid>
					<Grid container className={classes.infoHeader}>
						<Typography variant="h6">
							POPULAR FEATURES:
						</Typography>
					</Grid>
					<Grid container className={classes.infoCardContainer}>
						{renderCards(props.infoCards)}
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(FrontEndSectionFourPageOne);

