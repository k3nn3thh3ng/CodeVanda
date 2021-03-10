import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';
// import FrontEndBreadCrumbNav from '../FrontEndBreadCrumbNav';
import FrontEndSectionOne from '../FrontEndSectionOne';
import FrontEndSectionTwo from '../FrontEndSectionTwo';
import FrontEndSectionThree from '../FrontEndSectionThree';
import FrontEndSectionFour from '../FrontEndSectionFour';
import FrontEndSectionFive from '../FrontEndSectionFive';
import FrontEndSectionSix from '../FrontEndSectionSix';

const styles = {
	background: {
		display: 'flex',
		flexDirection: 'column',
		color: 'black',
		backgroundColor: 'white'
	}
}

function FrontendWebDevelopment(props) {
	const {classes} = props;
	
	return (
		<Box className={classes.background}>
			<Appbar />
			<FrontEndSectionOne />
			<FrontEndSectionTwo />
			<FrontEndSectionThree />
			<FrontEndSectionFour />
			<FrontEndSectionFive />
			<FrontEndSectionSix />
			<Footer />
		</Box>
	);
	
// 	<FrontEndBreadCrumbNav />
}

export default withStyles(styles)(FrontendWebDevelopment);