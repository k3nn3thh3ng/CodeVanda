import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import ServicesPopOver from './ServicesPopOver';

const styles = (theme) => ({
	text: {
		margin: theme.spacing(0, 1),
		padding: theme.spacing(0, 1),
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
});

function AppbarRight(props) {
	const { classes } = props;
	
	const list = [
		{
			linkto : "/probono",
			id: "Pro Bono"
		},
		{
			linkto : "/prices",
			id: "Prices"
		},
	];
	
	const createList = list.map((li) => {
		return(
			<Link to={li.linkto} className={classes.link} key={li.id}>
				<Typography variant="body1" className={classes.text}>
					{li.id}
				</Typography>
			</Link>
		)
	});
		
	
	return (
		<React.Fragment>
			<ServicesPopOver />
			{createList}
		</React.Fragment>
  	);
}

export default withStyles(styles)(AppbarRight);