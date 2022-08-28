<template>
	<section id="docs">
		<h2>Договор-оферта</h2>
		<a href="/Правила_о_договоре_комиссии_на_приобритение_товара.pdf" download>Скачать PDF</a>
	</section>
</template>

<style scoped lang="scss">
h2 {
	font-weight: 500;
}

#docs {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgba(44, 170, 230, 0.1);
	border-radius: 30px;
	padding: 32px 40px;
	margin-top: 90px;

	a {
		font-weight: 500;
		font-size: 24px;
		color: #6CA7FF;
	}
}

@media (max-width: 992px) {
	#docs {
		padding: 32px 24px;
	}
}

@media (max-width: 768px) {
	#docs {
		margin-top: 50px;
	}
}

@media (max-width: 576px) {
	h2 {
		font-size: 16px;
	}

	#docs {
		padding: 16px 24px;

		a {
			font-size: 16px;
		}
	}
}
</style>
