import React, { useState } from 'react';
import { 
	Grid,
	Typography,
	Paper,
	Icon,
	Collapse
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	accordionWrapper:{
		margin: theme.spacing(0.75,0),
		cursor: 'pointer'
	},
	accordion: {
		padding: theme.spacing(2, 2.6),
		border: '1px solid #eaf0f6'
	},
	accordionExpandBtn: {
		transition: '0.2s ease-in-out',
		color: '#00A4bd',
	},
	accordionBtnExpanded: {
		transform: 'rotate(180deg)'
	},
	accordionText: {
		margin: theme.spacing(2.5,0,0),
	}
})

function SimpleAccordion(props) {
	
	const { classes } = props;
	
	const [ expanded, setExpanded ] = useState(false);
	
	const handleClick = (() => setExpanded((expanded) => !expanded));	
	
	return(
		<React.Fragment>
			<Grid onClick={handleClick} container direction="column" item xs={12} className={classes.accordionWrapper}>
				<Paper elevation={0} className={classes.accordion}>
					<Grid container justify="space-between" alignItems="center">
						<Typography variant="body1" className={classes.accordionHeader}>
							{props.header}
						</Typography>
						<Icon color="inherit" className={expanded ? `fas fa-minus ${classes.accordionExpandBtn} ${classes.accordionBtnExpanded}` : `fas fa-plus ${classes.accordionExpandBtn}`}/>
					</Grid>
					<Grid container >
						<Collapse in={expanded}>
							<Typography variant="body2" className={classes.accordionText}>
								{props.body}
							</Typography>
							{props.option1 ? 
								<Typography variant="body2"> {props.option1} </Typography>
								: null
							}
							{props.option2 ? 
								<Typography variant="body2"> {props.option2} </Typography>
								: null
							}
							{props.option3 ? 
								<Typography variant="body2"> {props.option3} </Typography>
								: null
							}
						</Collapse>
					</Grid>
				</Paper>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(SimpleAccordion);