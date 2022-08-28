const token = `cL2Jgn11nJjw5EGsniUFuAj8JnD5q5Zy`;
const urlSizePrice = `https://capi.tk-kit.com/underground/order/calculate?token=${token}`;

const nursultanCityCode = '040000000000';

// eslint-disable-next-line consistent-return
export default async function getTirePrice(cityTo, height, width, length, countPlace, weight, ztt) {
	const formDataSizePrice = new FormData();
	formDataSizePrice.set('city_pickup_code', `${nursultanCityCode}`);

	formDataSizePrice.set('city_delivery_code', `${cityTo}`);

	formDataSizePrice.set('places[0][height]', `${height}`);
	formDataSizePrice.set('places[0][width]', `${width}`);
	formDataSizePrice.set('places[0][length]', `${length}`);
	formDataSizePrice.set('places[0][weight]', `${weight}`);
	formDataSizePrice.set('places[0][count_place]', `${countPlace}`);
	ztt ? formDataSizePrice.set('service[0]', 'S089') : formDataSizePrice.set('service[0]', 'T001');

	formDataSizePrice.set('declared_price', 100);
	formDataSizePrice.set('have_doc', 0);
	formDataSizePrice.set('insurance', 0);
	formDataSizePrice.set('pick_up', 0);
	formDataSizePrice.set('delivery', 0);

	/* console.log('---data start ---');
	for (let pair of formDataSizePrice.entries()) {
		console.log(`${pair[0]}: ${pair[1]}`);
	}
	console.log('---data end---'); */

	try {
		const response = await fetch(urlSizePrice, {
			method: 'POST',
			body: formDataSizePrice,
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}
