import React from 'react';
import { 
	Grid,
	Typography,
	Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	cardHeaderWrapper: {
		height: '40px',
		marginBottom: '15px'
	},
	cardStatWrapper: {
	},
	stat: {
		margin: '0px 0px 5px'
	},
	statText: {
		margin: '0px'
	},
	card: {
		flexGrow: '1',
		flexShrink: '1',
		padding: '30px',
		borderBottom: '1px solid #fff',
		borderRight: '1px solid #fff',
		[theme.breakpoints.up('md')] : {
			'&:nth-child(4n)': {
				borderRight: 'none'
			},
			'&:nth-child(n+5)': {
				borderBottom: 'none'
			}
		},
		[theme.breakpoints.down('sm')] : {
			'&:nth-child(2n)': {
				borderRight: 'none'
			},
			'&:nth-child(n+7)': {
				borderBottom: 'none'
			}
		},
	},
	icon: {
		width: 'auto',
		height: 'auto',
	},
})

function HPSectionThreeCard(props) {
	
	const { classes, header, subheader, figure } = props;
	
	return(
		<React.Fragment>
			<Grid item xs={6} md={3} className={classes.card}>
				<Grid container justify="center" className={classes.cardHeaderWrapper}>
					<Icon fontSize="large" color="inherit" className={`${header} ${classes.icon}`}  />
				</Grid>
				<Grid className={classes.cardStatWrapper}>
					<Typography  variant="h2" align="center" className={classes.stat}>
						{figure}
					</Typography>
					<Typography variant="body1" align="center" className={classes.statText}>
						{subheader}
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(HPSectionThreeCard);