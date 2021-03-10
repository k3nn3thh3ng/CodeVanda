import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';
import HeroBanner from '../HeroBannerTemplate';
import DoubleText from '../DoubleText';

const styles = (theme) => createStyles({
	
})

function About(props) {
	// const { classes } = props;
	
	const DoubleTextmessage = {
		header1: ['Character'],
		header2: ['Motivation'],
		text1: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
		text2: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
	};
	
	// const Commitment = {
	// 	header: ['My commitment'],
	// 	text: ['Insert Graphic']
	// }
	
	// const Testimonials = {
	// 	header: ['Testimonials'],
	// 	text: ['Insert Testimonials']
	// }
	
	return (
		<Box>
			<Appbar />
			<HeroBanner message="About Me"/>
			<DoubleText message={DoubleTextmessage}/>
			<Footer position="relative" />
		</Box>
	)
}

export default withStyles(styles)(About)