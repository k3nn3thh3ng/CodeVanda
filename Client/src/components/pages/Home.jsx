import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Boiler from '../Boiler';
import HeroBanner from '../HeroBannerHomeP';
import HPSectionOne from '../HPSectionOne';
import HPSectionTwo from '../HPSectionTwo';
import HPSectionThree from '../HPSectionThree';
import HPSectionFour from '../HPSectionFour';
import HPSectionFive from '../HPSectionFive';

const styles = (theme) => ({
	root: {
	}
})

function Home(props){
	
	return(
		<Boiler>
			<HeroBanner message="Home"/>
			<HPSectionOne />
			<HPSectionTwo />
			<HPSectionThree />
			<HPSectionFour />
			<HPSectionFive />
		</Boiler>
	)
}

export default withStyles(styles)(Home);

// <StandardSection message={sectionMessage} primaryButtonLink="/contact" primaryButton="Request Quotation"/>
// <ThumbNails />
// <ContactUs />