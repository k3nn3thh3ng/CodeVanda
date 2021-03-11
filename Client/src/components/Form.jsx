import React, {useState} from 'react';
import { TextField, Paper, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'


const styles = (theme) => createStyles({
	main: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '100%',
		color: '#33475b'
	},
	form: {
		transition: '0.3s ease-in-out',
		display: 'flex',
		width: '100%',
		padding: theme.spacing(0, 4),
		flexDirection: 'column',
		alignItems: 'center',
		boxSizing: 'border-box',
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(0,8)
		}
	},
	formInput: {
		margin: theme.spacing(2),
		width: '100%'
	},
	headerWrapper: {
		padding: theme.spacing(3),
		margin: theme.spacing(0, 'auto')
	},
	header: {
		padding: theme.spacing(2)
	},
	subheader: {
		padding: theme.spacing(2,3)
	},
	button: {
		margin: theme.spacing(4.5),
		padding: theme.spacing(1.5, 7.5)
	},
	primary: {
		backgroundColor: '#ff7a59',
		color: 'white',
		'&:hover' : {
			backgroundColor: '#ff957a'
		}
	},
})

function Form(props){
	
	const initialValues = {
		fullName : '',
		email: '',
		message: '',
		type: ''
	}
	
	const { classes } = props
	
	const [values, setValues] = useState(initialValues);
	
	const handleInputChange = e => {
		const { name, value } = e.target;
		console.log(name);
		console.log(value);
		console.log(values);
		setValues({
			...values,
			[name]:value
		})
	}
	
	const preventDefault = (event) => event.preventDefault();
	
	const handleSubmit = () => {
		//should add axios function to export enquiry
		setValues(initialValues);
		props.history.push('/')
	}
	
	return(
		<React.Fragment>
			<Paper className={classes.main}>
				<Grid container direction="column" alignItems="center" className={classes.headerWrapper}>
					<Typography variant="h4" className={classes.header}>
						{props.title}
					</Typography>
					<Typography variant="body1" className={classes.subheader} align="center">
						All enquiries will be replied within the next 24 hours
					</Typography>
				</Grid>
				<form className={classes.form} onSubmit={preventDefault}>
					<FormControl variant="outlined" className={classes.formInput}>
						<InputLabel id="type">Enquiry Type</InputLabel>
						<Select
							name="type"
							labelId="type"
							id="type"
							value={values.type}
							onChange={handleInputChange}
							label="Enquiry Type"
						>
							<MenuItem value="General Enquiry">
								<em>General Enquiry</em>
							</MenuItem>
							<MenuItem value="Consultation">Consultation</MenuItem>
							<MenuItem value="RFQ">Request For Quote</MenuItem>
							<MenuItem value="Pro Bono">Pro Bono</MenuItem>
							<MenuItem value="Others">Others</MenuItem>
						</Select>
					</FormControl>
					<TextField
						name="fullName"
						id="fullName"
						label="Name"
						value={values.fullName}
						variant="outlined"
						onChange={handleInputChange}
						className={classes.formInput}
					/>
					<TextField
						name="email"
						id="email"
						label="Email"
						value={values.email}
						variant="outlined"
						onChange={handleInputChange}
						className={classes.formInput}
					/>
					<TextField
						name="message"
						id="message"
						label="Message"
						multiline
						rows={4}
						value={values.message}
						variant="outlined"
						onChange={handleInputChange}
						className={classes.formInput}
					/>	
					<Button variant="contained" disableElevation className={`${classes.button} ${classes.primary}`} onClick={handleSubmit}>
						Submit
					</Button>
				</form>
			</Paper>
		</React.Fragment>	
	)
}

export default withStyles(styles)(withRouter(Form));