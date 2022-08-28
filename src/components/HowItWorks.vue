<template>
	<section id="how-it-works">
		<h2>Как это работает</h2>

		<div id="cards">
			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<h3>Как заказать товар</h3>
						<button v-on:click="flipped = true" class="open">Подробнее</button>
						<img src="@/assets/img/card-1.png" alt="корзина" />
					</div>
					<div class="card-back">
						<p>Найдите товар в интернет-магазине. В форме заказа введите сумму в тенге,
							добавьте ссылку на товар из интернет-магазина, выберите подходящую упаковку,
							характер груза и нажмите “рассчитать стоимость”. Вы получите стоимость выбранного
							товара в рублях с учетом доставки. Если цена вас устроит, нажмите “оформить заказ”,
							введите требуемые данные и ожидайте звонка персонального менеджера. Письмо с
							номером заказ поступит на указанный вами в заявке Email.
						</p>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<h3>Как оплатить товар</h3>
						<button v-on:click="flipped = true" class="open">Подробнее</button>
						<img src="@/assets/img/card-2.png" alt="карта" />
					</div>
					<div class="card-back">
						<p>После проверки деталей заказа персональным менеджеером вам поступит код для оплаты.
							Введите код на этой странице в поле оплаты, следуйте инструкциям. Обращаем ваше внимание
							на то, что оплата возможна с банковских карт и по системе быстрых платежей, а также
							электронными деньгами. Чек за наши услуги поступит на вашу электронную почту.
						</p>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-inner">
					<div class="card-front">
						<h3>Как получить товар</h3>
						<button class="open" v-on:click="flipped = true">Подробнее</button>
						<img src="@/assets/img/card-3.png" alt="коробки" />
					</div>
					<div class="card-back">
						<p>В течение 3-7 дней после оплаты мы доставим ваш товар в пункт выдачи в
							г. Екатеринбург ул. 8 марта 269. Режим работы: ПН-ПТ 09:00-21:00, СБ-ВС
							10:00-20:00. Для получения товара назовите его номер оператору.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

</script>

<style scoped lang="scss">
#how-it-works {
	margin-top: 90px;
}

h2 {
	font-weight: 500;
	font-size: 48px;
	text-align: center;
}

h3 {
	font-weight: 500;
	font-size: 40px;
}

.close {
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background: #D9D9D9;
	margin: 0 auto;
}

.open {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 125px;
	height: 33px;
	font-size: 14px;
	text-align: center;
	background: #fff;
	border-radius: 92px;
	color: #999999;
	margin-top: 24px;

	&::before {
		content: "";
		position: absolute;
		top: -2px;
		bottom: -2px;
		left: -2px;
		right: -2px;
		background: linear-gradient(92deg, #2BA9E6 0%, #70D4FF 100%);
		border-radius: 92px;
		z-index: -1;
	}
}

#cards {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 24px;
	width: 100%;
	margin-top: 40px;
	overflow-x: auto;
	overflow-y: hidden;
	padding: 20px 5px;

	scrollbar-color: rgba(43, 169, 230, 0.4) #fff;

	&::-webkit-scrollbar {
		height: 4px;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(43, 169, 230, 0.4);
		height: 4px;
		border-radius: 5px;
	}
}

.card {
	position: relative;
	min-height: 470px;
	perspective: 1500px;
	cursor: help;
	border-radius: 30px;

	&-inner {
		border-radius: 30px;
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 1s;
		transform-style: preserve-3d;
	}

	&:nth-child(1) {
		z-index: 3;
	}

	&:nth-child(2) {
		z-index: 2;
	}

	&:nth-child(3) {
		z-index: 1;
	}

	img {
		position: absolute;
		bottom: 0;
		right: 0;
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
		z-index: -2;
		border-radius: 30px;
	}
}

.card-front,
.card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	padding: 40px;
	border-radius: 30px;
	box-shadow: 0px 4px 25px 3px rgba(0, 0, 0, 0.07);
}

.card-back {
	transform: rotateY(180deg);
}

.card:hover .card-inner {
	transform: rotateY(180deg);
}

@media (max-width: 1232px) {
	#cards {
		grid-template-columns: repeat(3, 384px);
		overflow-x: scroll;
	}
}

@media (max-width: 992px) {
	h2 {
		font-size: 32px;
	}
}

@media (max-width: 768px) {
	#cards {
		margin-top: 24px;
		grid-template-columns: repeat(3, 308px);
		overflow-x: scroll;
	}

	#how-it-works {
		margin-top: 50px;
	}

	.card {
		position: relative;
		min-height: 375px;

		&:nth-child(1) {
			img {
				right: 53px;
				height: 300px;
			}
		}

		&:nth-child(2) {
			img {
				right: -45px;
				height: 419px;
				z-index: -2;
			}
		}

		&:nth-child(3) {
			img {
				height: 360px;
				z-index: -2;
			}
		}
	}

	h3 {
		font-size: 18px;
		text-align: center;
	}

	.open {
		margin: 16px auto 0;
	}
}

@media (max-width: 576px) {
	h2 {
		font-size: 24px;
	}
}
</style>
