import React from 'react';
import { 
	Grid,
	Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe';

const styles = (theme) => ({
	main: {

	},
	mainWrapper: {
		maxWidth: '1080px',
		padding: theme.spacing(2, 4, 8),
		margin: theme.spacing(0, 'auto'),
	},
	textWrapper: {
		order: '2',
		marginRight: '8.3%',
		[theme.breakpoints.down('sm')] : {
			marginRight: '0%',
			textAlign: 'justify',
		}
	},
	videoWrapper: {
		order: '1',
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(4)
		},
		height: 'auto',
		overflow: 'hidden',
	},
	video: {
		transition: '0.3s ease-in-out',
		height: '238px',
		width: '560px',
		border: 'none',
		[theme.breakpoints.down('sm')]: {
			height: '357px',
			width: '840px',
		},
		[theme.breakpoints.down('xs')]: {
			height: '200px',
			width: '560px',
		},
	}
})

function BackEndSectionThree(props) {
	
	const { classes } = props;
	
	
	return(
		<React.Fragment>
			<Grid container justify="center" className={classes.main}>
				<Grid container justify="space-between"  direction="row-reverse" className={classes.mainWrapper}>
					<Grid item xs={12} md={6} container direction="column" className={classes.textWrapper}>
						<Grid container className={classes.headerWrapper}>
							<Typography gutterBottom variant="h4">
								Building capabilities without constraint
							</Typography>
						</Grid>
						<Grid container className={classes.paraWrapper}>
							<Typography gutterBottom variant="body1">
								Looking at creating a web application with lots of feature but existing platforms are not able to replicate your expectations, despite multiple attempts? 
							</Typography>
							<br />
							<Typography variant="body1">
								CodeVanda offers a customised code development with integration support. You'll save valuable time and get all the context you need to implement and scale your idea
							</Typography>
						</Grid>
					</Grid>
					<Grid container alignItems="center" item xs={12} md={5} justify="center" className={classes.videoWrapper}>
						<Iframe
							url="https://play.vidyard.com/UNS5Wg4tj59YcDjPNK6V9L?disable_popouts=1&autoplay=0"
							title="dummy video"
							className={classes.video}
							display="initial"
							position="relative"
							allowFullScreen
						/>	
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(BackEndSectionThree);