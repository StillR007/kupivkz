<template>
	<footer>
		<div class="container">
			<img class="logo" src="@/assets/img/logo.png" alt="logo" />

			<div>
				<a href="#how-it-works">Как заказать</a>
				<a href="#shops">Интернет-магазины</a>
				<a href="#payment">Оплатить</a>
				<a href="#faq">FAQ</a>
				<a href="#docs">Документы</a>
			</div>

			<a href="tel:+79126300970" class="tel-number">+7 (912) 630-09-70</a>

			<div>
				<a href="viber://chat?number=%2B79126300970" target="_blank">
					<img width="40" height="40" src="@/assets/img/Viber.png" alt="Viber" />
				</a>
				<a href="https://wa.clck.bar/79126300970" target="_blank">
					<img width="40" height="40" src="@/assets/img/WhatsApp.png" alt="WhatsApp" />
				</a>
				<a href="https://t.me/+79126300970" target="_blank">
					<img width="40" height="40" src="@/assets/img/Telegram.png" alt="Telegram" />
				</a>
			</div>

			<p>ИП "Парамонова", ИНН 123456789, ОГРНИП 322665800104161</p>
			<p>Адрес регистрации: 624134, Сердловская обл., г. Новоуральск, ул. Чурина, дом 12, корпус1, кв. 108</p>
			<p>Все права защищены 2022</p>
		</div>
	</footer>
</template>

<style scoped lang="scss">
a:not(.tel-number) {
	font-size: 16px;

	img {
		width: 40px;
		height: 40px;
	}
}

.tel-number {
	font-size: 18px;
}

footer {
	background: #FBFBFE;
	box-shadow: 0px -2px 25px rgba(0, 0, 0, 0.07);
	margin-top: 90px;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div {
			display: inline-flex;
			margin-top: 24px;

			&:nth-child(3) {
				margin-bottom: 24px;
			}

			a:not(:first-child) {
				margin-left: 32px;
			}
		}
	}

	.logo,
	.tel-number,
	p:first-of-type {
		margin-top: 24px;
	}

	p {
		display: inline-flex;
		justify-content: center;
		text-align: center;
	}

	p:nth-of-type(2) {
		color: #D8D8D8;
		margin-top: 8px;
	}

	p:last-child {
		margin-top: 16px;
		margin-bottom: 24px;
	}
}

@media (max-width: 768px) {
	a:not(.tel-number) {
		font-size: 14px;

		img {
			width: 40px;
			height: 40px;
		}
	}
}

@media (max-width: 576px) {
	footer {
		.container {
			div:first-of-type {
				display: flex;
				flex-direction: column;
				margin-top: 0;

				a:nth-child(n) {
					margin-top: 24px;
					margin-left: 0;
					text-align: center;
				}
			}

			.logo {
				width: 193px;
			}
		}
	}
}
</style>
