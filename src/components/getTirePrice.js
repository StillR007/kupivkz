const token = `cL2Jgn11nJjw5EGsniUFuAj8JnD5q5Zy`;
const urlTirePrice = `https://capi.tk-kit.com/underground/tires/calculate?token=${token}`;

const nursultanCityCode = 163;

// eslint-disable-next-line consistent-return
export default async function getTirePrice(cityTo, amount, type) {
	const formDataTirePrice = new FormData();
	formDataTirePrice.set('autocomplete_city_code_from', `${nursultanCityCode}`);

	formDataTirePrice.set('autocomplete_city_code_to', `${cityTo}`);
	formDataTirePrice.set('amount', `${amount}`);
	formDataTirePrice.set('type', `${type}`);

	/* console.log('---data start---');
	for (let pair of formDataTirePrice.entries()) {
		console.log(`${pair[0]}: ${pair[1]}`);
	}
	console.log('---data end---'); */
	try {
		const response = await fetch(urlTirePrice, {
			method: 'POST',
			body: formDataTirePrice,
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}
