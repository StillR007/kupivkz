const userDataUrl = `someUrl`;

// eslint-disable-next-line consistent-return
export default async function sendUserDataFetch() {
	const userData = new FormData();
	userData.set('name', `${name}`);
	userData.set('phone', `${phone}`);
	userData.set('email', `${email}`);
	if (comment) {
		userData.set('comment', `${comment}`);
	}

	/* console.log('---data start ---');
	for (let pair of userData.entries()) {
		console.log(`${pair[0]}: ${pair[1]}`);
	}
	console.log('---data end---'); */

	try {
		const response = await fetch(userDataUrl, {
			method: 'POST',
			body: userData,
		});
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
}
