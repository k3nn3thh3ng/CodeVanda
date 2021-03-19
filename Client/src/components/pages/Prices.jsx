import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Boiler from '../Boiler';
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
	// const {classes} = props;
	
	return (
		<Boiler>
			<PricesSectionOne />
			<PricesSectionThree />
			<PricesSectionFour />
		</Boiler>
	);
	
}

export default withStyles(styles)(Prices);