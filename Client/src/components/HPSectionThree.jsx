import React from 'react';
import { 
	Grid,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from './HPSectionThreeCard';

const styles = (theme) => ({
	main: {
		padding: theme.spacing(14,0),
		backgroundImage: 'linear-gradient(45deg, #00a4bd, #00bda5)',
		color: '#fff'
	},	
	container: {
	},
	textContainer: {
		maxWidth: '710px',
		margin: '0px auto'
	},
	header: {
		padding: theme.spacing(3,0),
	},
	paragraph: {
		padding: theme.spacing(2,0),	
	},
	cardsContainer: {
		maxWidth: '1080px',
		margin: '0px auto',
		padding: theme.spacing(0, 2),
		boxSizing: 'border-box'	
	},
	cardsGrid: {
		margin: '80px 0px 0px',
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
	}
})

function HPSectionThree(props) {
	
	const { classes } = props;
	
	return(
		<Grid container justify="center" className={classes.main}>
			<Grid container direction="column" alignItems="center" className={classes.container}>
				<Grid container direction="column" alignItems="center" className={classes.textContainer}>
					<Typography variant="h4" color="inherit" align="center" className={classes.header}>
						Grow and scale with a dedicated team of programmers behind you
					</Typography>
					<Typography variant="body1" component="p" color="inherit" align="center" className={classes.paragraph}>
						You don't have to go it alone. We at CodeVanda has both the expertise and experience to work with you and build your dream application.
					</Typography>
				</Grid>
				<Grid container className={classes.cardsContainer}>
					<Grid container direction="row" className={classes.cardsGrid}>
						<Card 
							header="fas fa-memory" 
							figure="28" 
							subheader="technologies used"
						/>
						<Card 
							header="fas fa-code" 
							figure="900+" 
							subheader="coding hours"
						/>
						<Card 
							header="fas fa-user-tie" 
							figure="2" 
							subheader="certified professionals"
						/>
						<Card 
							header="fas fa-hammer" 
							figure="3" 
							subheader="successful projects"
						/>
						<Card 
							header="fab fa-github" 
							figure="288" 
							subheader="github pulls"
						/>
						<Card 
							header="fab fa-stack-overflow" 
							figure="700+" 
							subheader="stackoverflow replies"
						/>
						<Card 
							header="fas fa-mug-hot" 
							figure="2K+" 
							subheader="coffee drank"
						/>
						<Card 
							header="fas fa-thumbs-up" 
							figure="100%" 
							subheader="customer satisfaction"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(HPSectionThree);