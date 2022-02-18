import st from './submitForm.module.css';
import { useContext, useRef, useState } from 'react';
import { TextareaAutosize, Checkbox, TextField, Button, Box, InputAdornment, InputLabel, FormControl, OutlinedInput, FormHelperText, FormGroup, FormControlLabel } from '@mui/material';
import { CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Context } from '../../_app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { toJS } from "mobx";
import { observer } from 'mobx-react-lite'

const theme = createTheme({
	components: {
		MuiFormControl: {
			styleOverrides: {
				root: {
					'&': {
						marginTop: '15px',
						width: '100%'
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					'&': {
						borderColor: 'var(--color-second-blue)'
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					'&': {
						border: '1px solid var(--color-second-blue)',
						color: 'var(--color-second-blue)'
					},
					'&:hover': {
						color: 'white',
						borderColor: 'var(--color-second-blue)',
						backgroundColor: 'var(--color-second-blue)'
					},
				},
			},
		},
	},
});

function SubmitFrom() {
	const { store } = useContext(Context)
	const table = useRef(null)
	const user = toJS(store.user)
	const mail = useRef(null)

	const [isImo, setIsImo] = useState(true)
	const [phone, setPhone] = useState('')
	const [name, setName] = useState('')
	const [company, setCompany] = useState('')
	const [request, setRequest] = useState('')
	const [vessel, setVessel] = useState('')
	const [imo, setImo] = useState('')

	const [errorMessagePhone, setErrorMessagePhone] = useState('')
	const [errorMessageName, setErrorMessageName] = useState('')
	const [errorMessageCompany, setErrorMessageCompany] = useState('')
	const [errorMessageRequest, setErrorMessageRequest] = useState('')
	const [errorMessageVessel, setErrorMessageVessel] = useState('')
	const [errorMessageImo, setErrorMessageImo] = useState('')

	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);

	function validate() {
		setErrorMessagePhone('')
		setErrorMessageName('')
		setErrorMessageCompany('')
		setErrorMessageRequest('')
		setErrorMessageVessel('')
		setErrorMessageImo('')
		if (!phone) {
			setErrorMessagePhone('The Phone field cannot be empty!')
			return false
		}
		if (!name) {
			setErrorMessageName('The Name field cannot be empty!')
			return false
		}
		if (!company) {
			setErrorMessageCompany('The Company Name field cannot be empty!')
			return false
		}
		if (!request) {
			setErrorMessageRequest('The Request field cannot be empty!')
			return false
		}
		if (!isImo) {
			if (!vessel) {
				setErrorMessageVessel('The Vessel\'s Name field cannot be empty!')
				return false
			}
		} else {
			if (!imo) {
				setErrorMessageImo('The IMO field cannot be empty!')
				return false
			}
			if (imo.length < 7) {
				setErrorMessageImo('The IMO Number cannot be less then 7 digits!')
				return false
			}
		}
		return true
	}

	async function sendMail() {
		let fields = '';
		const data = [{ mail: mail.current.value }, { phone: phone }, { name: name }, { company: company }, { request: request }, { vessel: vessel }, { imo: imo }].filter(key => !!Object.values(key)[0])
		data.map(field => {
			const key = Object.keys(field)[0]
			const value = Object.values(field)[0]
			return fields += `
			<tr>
				<td
					style='text-transform: uppercase;border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;font-weight:bold;text-align:left;vertical-align:middle;'>
					${key} :
				</td>
				<td
					style='border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:10px 5px;word-break:normal;background-color:#efefef;color:#003d63;text-align:left;vertical-align:top;'>
					${value}
				</td>
			</tr>
			`
		})
		const mailBody = `
		<table style='min-width: 400px;border-collapse: collapse;border-spacing: 0;'>
			<thead>
				<tr>
					<th colspan='2'
						style='border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:10px 5px;word-break:normal;text-align:center;vertical-align:top;'>
					CUSTOMER DATA:
					</th>
				</tr>
			</thead>
			<tbody>
			${fields}
			</tbody>
		</table>
		`
		if (validate()) {
			if (!loading) {
				setLoading(true);
			}
			const result = await store.sendMail(mailBody)
			setTimeout(() => {
				setSuccessMessage(result)
				setLoading(false);
				setTimeout(() => {
					setSuccessMessage('')
				}, 2000)
			}, 1000)
		}
	}

	return (
		<>
			<div className={st.wrapper}>
				<div ref={table} className={st.table}>
					<h3>Send Data Form</h3>
					<ThemeProvider theme={theme}>
						<TextField
							inputRef={mail}
							required={true}
							disabled={true}
							helperText="Your E-mail"
							defaultValue={user.email}
							size='small' label="E-mail" />
						<TextField
							onInput={e => {
								e.target.value = e.target.value.replace(/[^\d\+\(\)\-]/g, '');
								setPhone(e.target.value)
							}}
							required={true}
							error={!!errorMessagePhone}
							helperText={errorMessagePhone ? errorMessagePhone : "Your Phone Number"}
							size='small' label="Phone" />
						<TextField
							onInput={e => setName(e.target.value)}
							required={true}
							error={!!errorMessageName}
							helperText={errorMessageName ? errorMessageName : "Your Name"}
							size='small' label="Name" />
						<TextField
							onInput={e => setCompany(e.target.value)}
							required={true}
							error={!!errorMessageCompany}
							helperText={errorMessageCompany ? errorMessageCompany : "Your company name"}
							size='small' label="Company" />
						<FormControl
							error={!!errorMessageRequest}
							size='small'>
							<TextareaAutosize
								onInput={e => setRequest(e.target.value)}
								placeholder="Request*"
								className={st.request}
							/>
							<FormHelperText>Enter your request</FormHelperText>
						</FormControl>
						<TextField
							onInput={e => setVessel(e.target.value)}
							helperText="Your vessel's name"
							error={!!errorMessageVessel}
							required={!isImo}
							size='small' label={errorMessageVessel ? errorMessageVessel : "Vessel's Name"} />
						<TextField onInput={e => {
							e.target.value = e.target.value.replace(/[^\d.]/g, '')
							setImo(e.target.value)
						}}
							error={!!errorMessageImo}
							helperText={errorMessageImo ? errorMessageImo : "Your IMO Number"}
							value={imo}
							inputProps={{ maxLength: 7 }}
							required={isImo}
							disabled={!isImo}
							size='small' label={!isImo ? "I don't have an IMO number" : "IMO Number"} />
						<FormGroup>
							<FormControlLabel control={<Checkbox onChange={() => {
								if (isImo) {
									setIsImo(false)
									setImo('')
									setErrorMessageImo('')
								} else {
									setIsImo(true)
									setErrorMessageVessel('')
								}
							}} />}
								label="I don't have an IMO number" />
						</FormGroup>
						<Box sx={{
							position: 'relative',
							width: '143px',
							m: '20px auto 0',
							textAlign: 'center'
						}}>
							<Button
								sx={{
									m: '0 auto',
									display: 'flex',
									alignItems: 'center',
									paddingBottom: '4px',
									width: '105px'
								}}
								endIcon={!loading && <SendIcon
									sx={{
										m: '0 0 2px 6px'
									}}
								/>}
								disabled={loading}
								onClick={sendMail}
							>
								Send
								{loading && <CircularProgress size={20}
									sx={{
										m: '0 0 2px 10px',
										color: 'var(--color-second-blue)'
									}}
								/>
								}
							</Button>
						</Box>
						{successMessage && <p className={st.success}>{successMessage}</p>}
					</ThemeProvider>
				</div>
			</div>
		</>
	)
}

export default observer(SubmitFrom)
