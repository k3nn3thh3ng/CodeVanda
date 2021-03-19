import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Boiler from '../Boiler';

import ServicesSectionOne from '../ServicesSectionOne';
import ServicesSectionTwo from '../ServicesSectionTwo';

const styles = {
}


function BackendWebDevelopment(props) {
	// const {classes} = props;
	
	return (
		<Boiler plainAppbar plainFooter>
			<ServicesSectionOne />
			<ServicesSectionTwo />
		</Boiler>
	);
}

export default withStyles(styles)(BackendWebDevelopment);