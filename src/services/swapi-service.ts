import swapiInstance from "./config/swapiConfig";

export const getFilms = async () =>
	await swapiInstance.get(`films`);