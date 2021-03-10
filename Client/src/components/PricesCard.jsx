import React from 'react';
import { Grid, Typography, Button, Icon, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
	pricingCardWrapper: {
		padding: theme.spacing(4,3)
	},
	pricingCard: {
		border: '1px solid rgb(203,214,226)',
		padding: theme.spacing(3),
		borderRadius: theme.spacing(0.6, 0.6, 0, 0),
		flexGrow: '1'
	},
	priceText: {
		color: '#00BDA5',
	},
	pricingHeaderSubtitleWrapper: {
		margin: theme.spacing(1, 0, 2)
	},
	pricingButtonWrapper: {
		
	},
	infoContainer: {
		padding: theme.spacing(4, 0, 0)
	},
	infoWrapper: {
		padding: theme.spacing(2, 0, 0)
	},
	infoBodyWrapper: {
		padding: theme.spacing(0.3, 0)
	},
	infoHeader: {
		fontWeight: '700',
		color: '#0091AE',
	},
	
	allFeaturesButtonWrapper: {
		border: '1px solid rgb(203,214,226)',
		borderTop: '0px solid rgb(203,214,226)',
		borderRadius: theme.spacing(0, 0, 0.6, 0.6),

	},
	allFeaturesButton: {
		borderRadius: theme.spacing(0, 0, 0.6, 0.6),
		border: 'none',
		color: '#0091AE',
		fontWeight: '700'
	},
	icon: {
		margin: theme.spacing(0, 0.8, 0, 0),
	},
	normalFont: {
		fontWeight: '400'
	},
	strongFont: {
		fontWeight: '700'
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
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
})

function PricesCard(props) {
	const {classes, details} = props;
	
	const handleRender = (features) => {
		return features.map( (feature, count) => {
			return (
				<Grid container direction="column" className={classes.infoWrapper} key={feature.featureHeader}>
					<Grid container className={classes.infoHeaderWrapper} >
						<Typography variant="subtitle2" className={classes.infoHeader} >
							{feature.featureHeader}
						</Typography>
					</Grid>
					{feature.featureBody.map(text => {
						return (
							<Grid container className={classes.infoBodyWrapper} alignItems="center" key={text} wrap="nowrap">
								<Grid>
									<Icon fontSize="inherit" color="inherit" className={`fas fa-check ${classes.icon}`}  />
								</Grid>
								<Grid container>
									<Typography variant="subtitle2">
										{text}
									</Typography>
								</Grid>
							</Grid>
						)
					})}
				</Grid>
			)
		})
	}
	
	return (
		<React.Fragment>
			<Grid container direction="column" alignItems="center" className={classes.pricingCardWrapper}>
				<Grid container direction="column" className={classes.pricingCard}>
					<Grid container className={classes.pricingHeaderContainer}>
						<Grid item xs={6} direction="column" justify="flex-end" container className={classes.pricingHeaderLeftWrapper}>
							<Typography variant="h5" className={classes.normalFont}>
								{details.type}
							</Typography>
						</Grid>
						<Grid item xs={6} direction="column" alignItems="flex-end" justify="flex-end" container className={classes.pricingHeaderRightWrapper}>
							<Typography variant="subtitle2">
								Starts at
							</Typography>
							<Typography variant="h6" className={`${classes.priceText} ${classes.strongFont}`}>
								S$ {details.price}/ {details.pricingUnit}
							</Typography>
						</Grid>
					</Grid>
					<Grid container className={classes.pricingHeaderSubtitleWrapper}>
						<Grid container>
							<Tooltip title="Specified duration in contract before the start date" placement="top">
								<Typography variant="subtitle2" className={classes.strongFont}>
									{details.preBuildRev ? "Pre-build phase"  : null}
								</Typography>
							</Tooltip>
							<Typography variant="subtitle2" display="inline">
								{details.preBuildRev ? `${": "} ${details.preBuildRev} Revision` : null}
							</Typography>
						</Grid>
						<Grid container>
							<Tooltip title="Specified duration in contract after completion" placement="top">
								<Typography variant="subtitle2" className={classes.strongFont}>
									{details.postBuildRev ? "Post-build phase" : null}
									{details.eligibility ? "Maintenance support for CodeVanda products or others with similar technology only" : null}
								</Typography>
							</Tooltip>
							<Typography variant="subtitle2" display="inline">
								{details.postBuildRev ? `${": "} ${details.postBuildRev} Revision` : null}
							</Typography>
						</Grid>
					</Grid>
					<Link to="/contact" className={classes.link}>
						<Grid container className={classes.pricingButtonWrapper}>
							<Button variant="contained" disableElevation fullWidth className={`${classes.button} ${classes.primary}`}>
								Talk to Sales
							</Button>
						</Grid>
					</Link>
					<Grid container direction="column" className={classes.infoContainer}>
						<Grid container className={classes.infoSubheaderWrapper}>
							<Typography variant="subtitle2">
								{details.type} Includes:
							</Typography>
						</Grid>
						{handleRender(details.features)}
					</Grid>
				</Grid>
				<Grid container className={classes.allFeaturesButtonWrapper}>
					<Button variant="outlined" fullWidth className={`${classes.button} ${classes.allFeaturesButton}`}>
						See all customisations
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	
}

export default withStyles(styles)(PricesCard);