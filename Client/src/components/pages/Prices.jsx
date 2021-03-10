import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Appbar from '../Appbar';
import Footer from '../Footer';
import PricesSectionOne from '../PricesSectionOne';
import PricesSectionThree from '../PricesSectionThree';
import PricesSectionFour from '../PricesSectionFour';

const styles = {
	main: {
		display: 'flex',
		flexDirection: 'column',
		color: 'black',
		backgroundColor: 'white'
	}
}

function Prices(props) {
	const {classes} = props;
	
	return (
		<Grid className={classes.main}>
			<Appbar />
			<PricesSectionOne />
			<PricesSectionThree />
			<PricesSectionFour />
			<Footer />
		</Grid>
	);
	
}

export default withStyles(styles)(Prices);