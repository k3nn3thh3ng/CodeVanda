import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Footer from '../Footer';
import HeroBanner from '../HeroBannerHomeP';
import Appbar from '../Appbar';
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
		<React.Fragment>
			<Appbar />
			<HeroBanner message="Home"/>
			<HPSectionOne />
			<HPSectionTwo />
			<HPSectionThree />
			<HPSectionFour />
			<HPSectionFive />
			<Footer />
		</React.Fragment>
	)
}

export default withStyles(styles)(Home);

// <StandardSection message={sectionMessage} primaryButtonLink="/contact" primaryButton="Request Quotation"/>
// <ThumbNails />
// <ContactUs />