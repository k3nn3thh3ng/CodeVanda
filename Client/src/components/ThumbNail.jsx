import React from 'react';
import { 
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	root: {
		margin: theme.spacing(2),
	},
	card: {
	}
})

function ThumbNail(props) {
	
	const { classes } = props;
	
	return(
		<Grid container justify="center" item md={3} sm={8} xs={10} className={classes.root}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia 
						component="img"
						alt={props.imageTitle}
						height="200"
						image={props.imageURL}
						title={props.imageTitle}	
					/>
					<CardContent>
						<Typography gutterBottom variant="h5">
							{props.header}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{props.body}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	)
}

export default withStyles(styles)(ThumbNail);