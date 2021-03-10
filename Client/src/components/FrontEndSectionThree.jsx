import React from 'react';
import { 
	Grid,
	Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe';

const styles = (theme) => ({
	main: {
		color: '#33475b'
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

function FrontEndSectionThree(props) {
	
	const { classes } = props;
	
	
	return(
		<React.Fragment>
			<Grid container justify="center" className={classes.main}>
				<Grid container justify="space-between"  direction="row-reverse" className={classes.mainWrapper}>
					<Grid item xs={12} md={6} container direction="column" className={classes.textWrapper}>
						<Grid container className={classes.headerWrapper}>
							<Typography gutterBottom variant="h4">
								All your ideas implemented under one roof
							</Typography>
						</Grid>
						<Grid container className={classes.paraWrapper}>
							<Typography gutterBottom variant="body1">
								The job is tough for modern entrepreneurs. Either you're juggling various point solutions, or you're stuck with web builders that are powerful but impossible to use. This means opportunity cost, lackluster development, and too much time fussing with software. But it doesn't have to be that way.
							</Typography>
							<br />
							<Typography variant="body1">
								CodeVanda handles all your web application development on both front-end and back-end. You'll save valuable time and the help you need to implement and scale your idea.
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

export default withStyles(styles)(FrontEndSectionThree);