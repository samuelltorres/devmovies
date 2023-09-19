import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: 'd0316776adc585e6895d155fa4213abe',
		language: 'pt-BR',
		page: 1
	}
});

export default api;
