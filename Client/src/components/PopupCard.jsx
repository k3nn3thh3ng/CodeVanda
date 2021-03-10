import React, { useState } from 'react';
import { 
	Grid,
	Button,
	Typography,
	Paper,
	Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
	featureCard: {
		marginBottom: theme.spacing(2.6),
		padding: theme.spacing(4, 4, 4.6),
		boxSizing: 'border-box',
		[theme.breakpoints.up('md')] : {
			width: '49%',
		},
		[theme.breakpoints.up('lg')] : {
			padding: theme.spacing(4, 9, 4.6)
		},
		'&:hover': {
			transform: 'scale(1.03)',
		}
	},
	textContainer: {
		transition: '0.5s ease-in-out',
		margin: '0px',
		padding: '0px',
	},
	header: {
		margin: theme.spacing(1, 0)
	},
	logo: {
		marginRight: theme.spacing(2),
		width: 'auto',
		height: 'auto',
	},
	paragraph: {
		margin: theme.spacing(2, 0)
	},
	buttonContainer: {
		marginTop: theme.spacing(3, 0)
	},
	headerSecondary: {
		margin: theme.spacing(2, 0)
	},
	list: {
		listStyleType: 'none',
		paddingInlineStart: '0px',
		padding: theme.spacing(0,0,3.5)
	},
	listItem: {
		padding: theme.spacing(0.8,0)
	},
	icon: {
		marginRight: theme.spacing(1),
		width: 'auto',
		height: 'auto',
		color: '#ff7a59',
	},
	primary: {
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	},
	button: {
		transition: '0.5s ease-in-out',
		textTransform: 'none',
		width: '35%',
		minWidth: theme.spacing(20),
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
})

function HPSectionTwoCard(props) {
	
	const { classes, textInput } = props;
	
	const [count, setCount] = useState(0);
	
	const onMouseOver= () => {setCount(2)};
	const onMouseOut= () => {setCount(1)};
	
	
	return(
		<React.Fragment>
			<Paper elevation={count} onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={classes.featureCard}>
				<Grid className={classes.textContainer}>
					<Grid container justify="center" alignItems="center">
						<Icon fontSize="small" color="secondary" className={`fas ${textInput.logo} ${classes.logo}`}  />
						<Typography variant="h5" className={classes.header}>
							{textInput.title}
						</Typography>
					</Grid>
					<Grid container >
						<Typography variant="body1" align="center" className={classes.paragraph}>
							{textInput.description}
						</Typography>
					</Grid>
					<Grid container direction="column">
						<Grid container>
							<Typography variant="h5" className={classes.headerSecondary}>
								Popular Features
							</Typography>
						</Grid>
						<Grid container>
							<ul className={classes.list}>
								<Grid container alignItems="center" className={classes.listItem}>
									<Icon fontSize="small" color="inherit" className={`fas fa-check-circle ${classes.icon}`}  />
									{textInput.feature1}
								</Grid>
								<Grid container alignItems="center" className={classes.listItem}>
									<Icon fontSize="small" color="inherit" className={`fas fa-check-circle ${classes.icon}`}  />
									{textInput.feature2}
								</Grid>
								<Grid container alignItems="center" className={classes.listItem}>
									<Icon fontSize="small" color="inherit" className={`fas fa-check-circle ${classes.icon}`}  />
									{textInput.feature3}
								</Grid>
							</ul>
						</Grid>
						<Grid container justify="center">
							<Link to={`/services/${textInput.id}`} className={classes.link}>
								<Button variant="contained" className={`${classes.button} ${classes.primary}`}>
									Explore more
								</Button>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</React.Fragment>
	)
}

export default withStyles(styles)(HPSectionTwoCard);










