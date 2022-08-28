<template>
	<AppHeader />

	<main class="container">
		<StartBunner />

		<HowItWorks />

		<!-- <HowItWorksButton /> -->

		<AppDocs />

		<KazahShops />

		<AppPayment />

		<AppFaq />

		<SubmitAnApplication />
	</main>

	<AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import HowItWorks from './components/HowItWorks.vue';
import KazahShops from '@/components/KazahShops.vue';
import AppPayment from './components/AppPayment.vue';
import SubmitAnApplication from './components/SubmitAnApplication.vue';
import StartBunner from './components/StartBunner.vue';
import AppFooter from './components/AppFooter.vue';
import AppDocs from './components/AppDocs.vue';
import AppFaq from './components/AppFaq.vue';
// import HowItWorksButton from './components/HowItWorksButton.vue';

/* let installButton = document.createElement('button');
installButton.classList.add('installButton');
document.body.append(installButton);

let prompt;
window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent the mini-infobar from appearing on mobile
	e.preventDefault();
	// Stash the event so it can be triggered later.
	prompt = e;
});

installButton.addEventListener('click', () => {
	prompt.prompt();
})

let installed = false;
installButton.addEventListener('click', async () => {
	prompt.prompt();
	let result = await this.prompt.userChoice;
	if (result && result.outcome === 'accepted') {
		installed = true;
	}
});
window.addEventListener('appinstalled', async () => {
	installButton.style.display = 'none';
}); */

export default {
	name: 'App',
	components: {
		AppHeader,
		AppFooter,
		HowItWorks,
		KazahShops,
		AppPayment,
		SubmitAnApplication,
		StartBunner,
		AppDocs,
		AppFaq,
		// HowItWorksButton,
	},
};
</script>

<style lang="scss">
/* .installButton {
	height: 40px;
	width: 40px;
	background: red;
} */

/* null style */
*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	border: 0;
	font-family: inherit;
	font-style: normal;
	font-weight: normal;
	box-sizing: border-box;
}

body {
	color: #000;
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	line-height: 1.25;
	font-style: normal;
	max-width: 100vw;
	overflow-x: hidden;

	&.lock {
		overflow: hidden;
	}
}

body,
html {
	overflow-x: hidden;
}

img {
	display: block;
	border-style: none;
	pointer-events: none;
}

ol,
ul {
	list-style: none;
}

a,
button {
	position: relative;
	color: currentColor;
	font-size: inherit;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	transition: .2s;
	background: none;
	user-select: none;

	&:hover {
		text-decoration: none;
		transition: .3s;
	}

	&:visited,
	:focus,
	:active {
		text-decoration: none;
		outline: none;
	}
}

html {
	// overflow-anchor: none; отключить запоминание места скрола
	scroll-behavior: smooth;
}

/* null style */

/* fonts */
@font-face {
	font-family: Inter;
	font-display: swap;
	src: url("@/assets/fonts/Inter-Medium.woff2") format("woff2"),
		url("@/assets/fonts/Inter-Medium.woff") format("woff");
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: Inter;
	font-display: swap;
	src: url("@/assets/fonts/Inter-Regular.woff2") format("woff2"),
		url("@/assets/fonts/Inter-Regular.woff") format("woff");
	font-weight: 400;
	font-style: normal;
}

/* fonts */

#app {
	position: relative;
}

.container {
	width: 1400px;
	margin: 0 auto;
}

@media (max-width: 1600px) {
	.container {
		width: 1200px;
	}
}

@media (max-width: 1232px) {
	.container {
		width: calc(100vw - 16px * 2);
	}
}
</style>
