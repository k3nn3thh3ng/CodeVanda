import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Boiler from '../Boiler';
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
	// const {classes} = props;
	
	return (
		<Boiler>			
			<BackEndSectionOne />
			<BackEndSectionTwo />
			<BackEndSectionThree />
			<BackEndSectionFour />
			<BackEndSectionFive />
			<BackEndSectionSix />
		</Boiler>
	);
	
// 	<BackEndBreadCrumbNav />
}

export default withStyles(styles)(BackendWebDevelopment);