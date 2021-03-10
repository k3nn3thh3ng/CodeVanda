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

		margin: theme.spacing(1.25,0),
		cursor: 'pointer'
	},
	accordion: {
		width: '100%',
		padding: theme.spacing(2, 2.6),
		border: '1px solid rgba(0, 0, 0, 0.1)'
	},
	accordionExpandBtn: {
		transition: '0.2s ease-in-out',
	},
	accordionBtnExpanded: {
		transform: 'rotate(90deg)'
	},
	accordionText: {
		margin: theme.spacing(2.5,0,0),
	},
	iconWrapper: {
		padding: theme.spacing(0, 1)
	},
	textWrapper: {
		padding: theme.spacing(0, 1.5, 0, 1)
	}
})

function FAQAccordion(props) {
	
	const { classes } = props;
	
	const [ expanded, setExpanded ] = useState(false);
	
	const handleClick = (() => setExpanded((expanded) => !expanded));	
	
	return(
		<React.Fragment>
			<Grid onClick={handleClick} container item xs={12} className={classes.accordionWrapper}>
				<Paper elevation={0} className={classes.accordion}>
					<Grid container alignItems="center">
						<Grid item xs={2} sm={1} container className={classes.iconWrapper}>
							<Icon fontSize="small" color="inherit" className={expanded ? `fas fa-chevron-right ${classes.accordionExpandBtn} ${classes.accordionBtnExpanded}` : `fas fa-chevron-right ${classes.accordionExpandBtn}`}/>
						</Grid>
						<Grid item xs={10} sm={11} container className={classes.textWrapper}>
							<Typography variant="body2" className={classes.accordionHeader}>
								{props.question}
							</Typography>
						</Grid>
					</Grid>
					<Collapse in={expanded}>
						<Grid container justify="flex-end">
							<Grid item xs={12} sm={11} container className={classes.textWrapper} >
								<Typography variant="body2" className={classes.accordionText}>
									{props.answer}
								</Typography>
							</Grid>
						</Grid>
					</Collapse>
				</Paper>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(FAQAccordion);