import React from 'react';
import { Grid, Typography, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
	main: {
		backgroundImage: 
		// 'url("https://images.pexels.com/photos/1126384/pexels-photo-1126384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
		'linear-gradient(45deg, #EEAA78, #E37222)',
		backgroundColor: '#cccccc',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height: '75vh',
		minHeight: '30rem',
		maxHeight: '50rem',
		backgroundAttachment: 'fixed',
		backgroundPosition: '50% -55px',
		width: '100vw'
	},
	mainWrapper: {
		width: 'calc(100% - 6rem)',
		maxWidth: '65rem',
		margin: '0px auto',
		height: '90%',
		color: 'rgb(255, 255, 255)',
	},
	headerContainer: {
		minWidth: '100%',
		borderBottom: 'solid 2.5px',
	},
	textContainer: {
	},
	text: {
		maxWidth: '30rem',
		marginTop: theme.spacing(1.5),
		marginRight: theme.spacing(1),
		fontWeight: '700'
	},
	icon: {
		paddingLeft: theme.spacing(1),
	},
	button: {
		height: '3.5rem',
		marginTop: theme.spacing(1.5)
	},
	link: {
		color: 'inherit',
		textDecoration: 'none',
		height: '100%',
		
	},
});

function HeroBanner(props) {
	const {classes} = props;
	
	React.useEffect(() => {
		const node = loadCSS(
			'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
			document.querySelector('#font-awesome-css'),
		);

		return () => {
			node.parentNode.removeChild(node);
		};
	}, []);
	
	const headerText= "A team of geeks dedicated to building customised web applications that are flexible and scalable"
	
	return (
		<Grid container className={classes.main}>
			<Grid container direction="column" justify="center" className={classes.mainWrapper}>
				<Grid className={classes.headerContainer}>
					<Typography variant="h3" align="left" paragraph>
						We are CodeVanda
					</Typography>
				</Grid>
				<Grid container className={classes.textContainer}>
					<Typography variant="subtitle1" align="left" className={classes.text}>
						{headerText.toUpperCase()}
					</Typography>
					<Link to="/services" className={classes.link}>
						<Button color="inherit" variant="outlined" className={classes.button}>
							<Typography>
								View Services
							</Typography>
							<Icon className={`fas fa-angle-right ${classes.icon}`} color="inherit"/>
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(HeroBanner);


