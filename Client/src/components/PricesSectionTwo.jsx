import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PricesCard from './PricesCard';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(0,0, 6)
	},
	mainWrapper: {	
		color: '#33475b',
		padding: theme.spacing(1, 0)
	},
	headerContainer: {
		padding: theme.spacing(5)
	},
	headerWrapper: {
		padding: theme.spacing(2)
	},
	subheaderWrapper: {
	},
	pricingCardContainer: {
		maxWidth: '1020px'
	},
})

function PricesSectionTwo(props) {
	const {classes, pageDetails} = props;
	
	const renderCards = (cards) => {
		return cards.map( (card, count) => {
			return (
				<Grid container justify="center" item xs={12} sm={10} md={6} key={count}>
					<PricesCard 
						details={card}
					/>
				</Grid>
			)
		})
	}
	
	return (
		<React.Fragment>
			<Grid container justify="space-evenly" className={classes.main}>
				<Grid container direction="column" alignItems="center" className={classes.mainWrapper}>
					<Grid container direction="column" className={classes.headerContainer}>
						<Grid container justify="center" className={classes.headerWrapper}>
							<Typography variant="h4" align="center">
								{pageDetails.header}
							</Typography>
						</Grid>
						<Grid container justify="center" className={classes.subheaderWrapper}>
							<Typography variant="body1" align="center">
								{pageDetails.subHeader}
							</Typography>
						</Grid>
					</Grid>
					<Grid container justify="space-evenly" className={classes.pricingCardContainer}>
						{renderCards(pageDetails.cards)}
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	
}

export default withStyles(styles)(PricesSectionTwo);