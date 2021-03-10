import React from 'react';
import { Box, Typography, Button, CardMedia, Grid } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => createStyles({
	root: {
		padding: theme.spacing(12.5, 0),
		backgroundColor: '#66B9BF',
	},
	textContainer: {
		order: '2',
		margin: theme.spacing(2),
		padding: theme.spacing(2, 0),
		boxSizing: 'border-box',
	},
	header: {
	},
	paragraph: {
	},
	divider: {
		borderBottom: '2px solid rgba(0, 0, 0, 0.25)',
		width: '40%',
		margin: theme.spacing(3, 0),
	},
	button: {
		margin: theme.spacing(1, 1 , 0, 0)
	},
	imgContainer: {
		order: '1',
		margin: theme.spacing(2),
	},
	img: {
		borderStyle: 'solid',
		borderColor: 'rgba(255, 255, 255, 0.75)',
		borderRadius: theme.spacing(0.5)
	},
	background: {
		backgroundColor: 'rgba(255,255,255,0.2)'
	},
	link: {
		display: 'flex',
		color: 'black',
		textDecoration: 'none',
		marginTop: theme.spacing(2)
	},
})

function StandardSection(props) {
	const {classes} = props;
	
	var secondaryButton = () => {
		if (props.secondaryButton) {
			return (
				<Link to={props.secondaryButtonLink} className={classes.link}>
					<Button color="default" variant="outlined" className={`${classes.button} + ${classes.background}`} size="large">
						<Typography variant="button">
							{props.secondaryButton}
						</Typography>
					</Button>
				</Link>
			)
		}
	}
	
	var primaryButton = () => {
		if (props.primaryButton) {
			return (
				<Link to={props.primaryButtonLink} className={classes.link}>
					<Button color="primary" variant="contained" className={classes.button} size="large">
						<Typography variant="button">
							{props.primaryButton}
						</Typography>
					</Button>
				</Link>
			)
		}
		return;
	}
	

	return ( 
		<Grid container direction="row-reverse" justify="center" className={classes.root}>
			<Grid container item direction="column" alignItems="flex-start" xs={10} md={4} className={classes.textContainer}>
				<Typography variant="h5" className={classes.header}>
					{props.message.title}
				</Typography>
				<Box className={classes.divider}/>
				<Typography variant="subtitle1" className={classes.paragraph}>
					{props.message.paragraph}
				</Typography>
				<Box>
					{secondaryButton()}
					{primaryButton()}
				</Box>
			</Grid>
			<Grid container item md={4} xs={10} className={classes.imgContainer}>
				<CardMedia component="img" src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" className={classes.img}/>
			</Grid>
		</Grid>
	)

};

export default withStyles(styles)(StandardSection);