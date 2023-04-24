import axios from 'axios';

const swapiPath = '/api/';

const getSwapiBaseUrl = () => {
	if (window.location.hostname === 'localhost') {
		return `https://swapi.dev${swapiPath}`;
	}

	return `https://swapi.dev${swapiPath}`;
};

const swapiInstance = axios.create({
	baseURL: getSwapiBaseUrl(),
});

swapiInstance.defaults.headers.common['Accept'] = 'application/json';
swapiInstance.defaults.headers.post['Content-Type'] = 'application/json';

export default swapiInstance;