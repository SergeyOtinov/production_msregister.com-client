import axios from 'axios'

const $api = axios.create({
	headers: {
		"X-Token": "5c1f3a34-d69e-48a0-a6b7-25a9eff4a2475c1f3a34-d69e-48a0-a6b7-25a9eff4a247",
		"Content-Type": "application/json"
	},
	withCredentials: true,
	baseURL: "https://195.64.240.218/pub/v1/bpm/template/ships/registration_of_survey_work/run"
})

export default class RequestService {
	static async requestElma(requestBody) {
		return $api.post('/', { requestBody })
	}
}
