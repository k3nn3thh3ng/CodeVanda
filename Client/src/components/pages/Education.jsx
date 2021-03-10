import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';
import HeroBanner from '../HeroBannerTemplate';
import StandardSection from '../StandardSection';

const styles = {
	background: {
		display: 'flex',
		flexDirection: 'column',
		color: 'black',
		backgroundColor: 'white'
	}
}

const message1 = {
	title: ["Colt Steele - General Assembly"],
	paragraph: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.']
}

const message2 = {
	title: ["Angela Yu - App Brewery"],
	paragraph: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]
}

function Education(props) {
	const {classes} = props;
	
  return (
    <Box className={classes.background}>
		<Appbar />
		<HeroBanner message="Education"/>
		<StandardSection message={message1} primaryButton="Learn More" primaryButtonLink="#"/>
		<StandardSection message={message2} primaryButton="Learn More" primaryButtonLink="#"/>
		<Footer position="relative"/>
    </Box>
  );
}

export default withStyles(styles)(Education);