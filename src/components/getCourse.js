const token = `cL2Jgn11nJjw5EGsniUFuAj8JnD5q5Zy`;
const url = `https://back.kupi-v-kz.ru/api/kz/kz/rate?token=${token}`;

// eslint-disable-next-line consistent-return
export default async function getCourse() {
	try {
		const response = await fetch(url);
		const result = await response.json();

		return Number(result[0].rate);
	} catch (error) {
		console.error(error);
	}
}
