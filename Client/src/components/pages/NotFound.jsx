import React from 'react';
import { withStyles } from '@material-ui/styles';

import Boiler from '../Boiler';


const styles = {
}

function BackendWebDevelopment(props) {
	// const {classes} = props;
	
	return (
		<Boiler>
			<h1>
				Hello World!
			</h1>
		</Boiler>
	);
}

export default withStyles(styles)(BackendWebDevelopment);