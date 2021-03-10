import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';
// import BackEndBreadCrumbNav from '../BackEndBreadCrumbNav';
import BackEndSectionOne from '../BackEndSectionOne';
import BackEndSectionTwo from '../BackEndSectionTwo';
import BackEndSectionThree from '../BackEndSectionThree';
import BackEndSectionFour from '../BackEndSectionFour';
import BackEndSectionFive from '../BackEndSectionFive';
import BackEndSectionSix from '../BackEndSectionSix';

const styles = {
	background: {
		display: 'flex',
		flexDirection: 'column',
		color: 'black',
		backgroundColor: 'white'
	}
}

function BackendWebDevelopment(props) {
	const {classes} = props;
	
	return (
		<Box className={classes.background}>
			<Appbar />
			
			<BackEndSectionOne />
			<BackEndSectionTwo />
			<BackEndSectionThree />
			<BackEndSectionFour />
			<BackEndSectionFive />
			<BackEndSectionSix />
			<Footer />
		</Box>
	);
	
// 	<BackEndBreadCrumbNav />
}

export default withStyles(styles)(BackendWebDevelopment);