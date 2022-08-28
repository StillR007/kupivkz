const shopsUrl = 'http://kupi-v-kz/api/shops/shops.json';

// eslint-disable-next-line consistent-return
export default async function getShops() {
	try {
		const response = await fetch(shopsUrl);
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}
