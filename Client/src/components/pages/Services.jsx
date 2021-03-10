import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PlainAppbar from '../PlainAppbar';
import PlainFooter from '../PlainFooter';
import ServicesSectionOne from '../ServicesSectionOne';
import ServicesSectionTwo from '../ServicesSectionTwo';

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
		<PlainAppbar />
		<ServicesSectionOne />
		<ServicesSectionTwo />
		<PlainFooter />
    </Box>
  );
}

export default withStyles(styles)(BackendWebDevelopment);