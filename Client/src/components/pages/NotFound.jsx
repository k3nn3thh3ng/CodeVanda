import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';


const styles = {
}

function BackendWebDevelopment(props) {
	const {classes} = props;
	
  return (
    <Box className={classes.background}>
		<Appbar />
		  <h1>
			  Hello World!
		  </h1>
		<Footer position="fixed"/>
    </Box>
  );
}

export default withStyles(styles)(BackendWebDevelopment);