<!-- eslint-disable max-len -->
<template>
	<section id="payment">
		<h2>Оплата заказа</h2>

		<p>Номер заказа</p>
		<div>
			<div>
				<span></span>
				<input type="number" min='1' placeholder="123456789" />

				<button>Перейти к оплате</button>
			</div>

			<div>
				<img src="@/assets/img/spb.png" alt="spb" />
				<img src="@/assets/img/mastercard.png" alt="mastercard" />
				<img src="@/assets/img/visa.png" alt="visa" />
				<img src="@/assets/img/mir.png" alt="mir" />
			</div>
		</div>

		<p>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с
			платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования
			SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa,
			MasterCard SecureCode, MIR Accept для проведения платежа также может потребоваться ввод специального пароля.
			Способы и возможность получения паролей для совершения интернет-платежей Вы можете уточнить в банке, выпустившем
			карту. Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации
			обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев,
			предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом
			соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl. Если у Вас возникли проблемы
			с оплатой, пожалуйста, обратитесь в СБЕРБАНК по телефону: +7 495 500-55-50 (круглосуточно). Или на горячую линию
			“Купи в КЗ” по телефону: +7 (912) 630-09-70 (ПН-ПТ – 09:00-21:00, СБ-ВС –10:00-20:00). Для выбора оплаты услуг с
			помощью банковской карты на странице оплаты в специальном поле необходимо нажать кнопку «Оплата заказа банковской
			картой». Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платежных систем: МИР,
			Visa Int., MasterCard Europe Sprl, JCB. В случае обоснованного отказа от услуги возврат денежных средств
			производится на ваш банковский счет в течение 5-30 рабочих дней (срок зависит от банка, который выдал вашу
			банковскую карту).</p>
	</section>
</template>

<style scoped lang="scss">
h2 {
	font-weight: 500;
	font-size: 48px;
	text-align: center;
}

button {
	background: linear-gradient(91.76deg, #F15EBB 1.86%, #F05DB9 68.65%);
	border-radius: 10px;
	padding: 15px 60px;
	color: #fff;
	white-space: nowrap;
	margin-left: 24px;
	height: 46px;
}

input {
	width: 670px;
	background: #FFFFFF;
	border: 1px solid rgba(153, 153, 153, 0.4);
	border-radius: 10px;
	padding: 12px 20px 12px 44px;
	outline: none;
	font-size: 16px;

	&::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
}

#payment {
	position: relative;
	margin-top: 90px;
	padding: 60px 40px;
	border-radius: 30px;

	&::after {
		background: linear-gradient(to bottom, rgba(43, 169, 230, 0.7) 0%, rgb(112, 212, 255, 0.1) 100%);
		content: "";
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		opacity: 0.7;
		border-radius: 30px;
		z-index: -1;
	}

	p:first-of-type {
		margin-top: 40px;
		font-size: 16px;
		margin-bottom: 8px;
	}

	p:nth-of-type(2) {
		margin-top: 30px;
		font-weight: 500;
		font-size: 10px;
		line-height: 12px;
		text-align: justify;
		letter-spacing: 0.015em;
		color: #999999;
	}
}

div {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	div:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;

		span {
			position: absolute;
			top: 0;
			left: 0;

			&::after {
				content: "";
				display: block;
				left: 16px;
				position: absolute;
				top: 13px;
				height: 20px;
				width: 20px;
				background-image: url(@/assets/svg/search.svg);
			}
		}
	}

	div:nth-child(2) {
		display: flex;
		flex-direction: row;
		justify-content: right;

		img {
			max-height: 40px;

			&:not(:first-of-type) {
				margin-left: 15px;
			}
		}
	}
}

@media (max-width: 1600px) {
	input {
		width: 500px;
	}

	button {
		margin-left: 12px;
	}
}

@media (max-width: 1232px) {
	input {
		width: 100%;
	}

	#payment {
		&>div {
			display: grid;
			grid-template-columns: 100%;
			grid-template-rows: repeat(2, 40px);
			grid-row-gap: 32px;

			div:nth-child(2) {
				justify-content: space-evenly;
			}
		}
	}
}

@media (max-width: 992px) {
	#payment {
		padding: 40px 16px;

		p:first-of-type {
			margin-top: 24px;
		}
	}

	h2 {
		font-size: 32px;
	}
}

@media (max-width: 768px) {
	#payment {
		margin-top: 50px;
	}
}

@media (max-width: 576px) {
	h2 {
		font-size: 24px;
	}

	#payment {
		&>div {
			grid-template-rows: repeat(2, auto);

			div:nth-child(1) {
				flex-direction: column;
				justify-content: center;
			}

			div:nth-child(2) {

				img {
					max-height: 30px;

					&:not(:first-of-type) {
						margin-left: 6px;
					}
				}
			}
		}
	}

	button {
		width: 100%;
		margin-top: 16px;
		margin-left: 0;
	}
}
</style>
