import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Boiler from '../Boiler';
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
	// const {classes} = props;
	
	return (
		<Boiler>
			<FrontEndSectionOne />
			<FrontEndSectionTwo />
			<FrontEndSectionThree />
			<FrontEndSectionFour />
			<FrontEndSectionFive />
			<FrontEndSectionSix />
		</Boiler>
	);
	
// 	<FrontEndBreadCrumbNav />
}

export default withStyles(styles)(FrontendWebDevelopment);