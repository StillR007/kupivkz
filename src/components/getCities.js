const token = `cL2Jgn11nJjw5EGsniUFuAj8JnD5q5Zy`;
const urlGetCities = `https://capi.tk-kit.com/underground/geography/cities?token=${token}`;

const formDataCities = new FormData();
formDataCities.append('country_code', 'RU');

// eslint-disable-next-line consistent-return
export default async function getCityFetch() {
	try {
		const response = await fetch(urlGetCities, {
			method: 'POST',
			body: formDataCities,
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}
