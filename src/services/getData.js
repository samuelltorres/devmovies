import api from './api';

export async function getMovies() {
	const {
		data: { results }
	} = await api.get('/movie/popular');

	return results[1];
}
export async function getTopMovies() {
	const {
		data: { results }
	} = await api.get('/movie/top_rated');

	return results;
}
export async function getTopSeries() {
	const {
		data: { results }
	} = await api.get('/tv/top_rated');

	return results;
}
export async function getPopularSeries() {
	const {
		data: { results }
	} = await api.get('/tv/popular');

	return results;
}
export async function getPopularArtists() {
	const {
		data: { results }
	} = await api.get('/person/popular');

	return results;
}

// Busca um filme pelo ID
export async function getMovieVideos(movieId) {
	const {
		data: { results }
	} = await api.get(`/movie/${movieId}/videos`);

	return results;
}

export async function getMovieCredits(movieId) {
	const {
		data: { cast }
	} = await api.get(`/movie/${movieId}/credits`);

	return cast;
}
export async function getMovieSimilar(movieId) {
	const {
		data: { results }
	} = await api.get(`/movie/${movieId}/similar`);

	return results;
}
export async function getMovieById(movieId) {
	const { data } = await api.get(`/movie/${movieId}`);

	return data;
}

export async function getSerieCredit(movieId) {
	const {
		data: { cast }
	} = await api.get(`/tv/${movieId}/credits`);

	return cast;
}
export async function getSerieSimilar(movieId) {
	const {
		data: { results }
	} = await api.get(`/tv/${movieId}/similar`);

	return results;
}
export async function getSerieById(movieId) {
	const { data } = await api.get(`/tv/${movieId}`);

	return data;
}
export async function getSerieVideos(movieId) {
	const {
		data: { results }
	} = await api.get(`/tv/${movieId}/videos`);

	return results;
}
