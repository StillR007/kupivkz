<template>
	<section id="faq">
		<h2>Ответы на вопросы</h2>

		<div id="faq-container">
			<div class="menu-item">
				<div class="menu-title" :class="{ active: isActive1 }" @click="isActive1 = !isActive1">
					Вы работаете с физическими или юридическими лицами?
				</div>
				<div class="menu-content">
					<div class="item">
						Мы работаем с физическими лицами и с некоммерческими партиями товаров.
						Если вам необходима оптовая перевозка от юридического лица, вы можете воспользоваться услугами нашего
						партнера ООО <a href="https://finexportural.ru/" target="_blank">“ФинЭкспортУрал”</a>.</div>
				</div>
			</div>

			<div class="menu-item">
				<div class="menu-title" :class="{ active: isActive2 }" @click="isActive2 = !isActive2">
					Что входит в итоговую стоимость товара?
				</div>
				<div class="menu-content">
					<div class="item">
						Итоговая стоимость товара складывается из: стоимости самого товара, затрат на конвертацию,
						упаковки, страховки и доставки.
					</div>
				</div>
			</div>

			<div class="menu-item">
				<div class="menu-title" :class="{ active: isActive3 }" @click="isActive3 = !isActive3">
					Какие товары я могу заказать?
				</div>
				<div class="menu-content">
					<div class="item">
						Вы можете заказать товары для личного пользования. Обратите внимание, товары на должны входить в
						<a href="/Перечень_грузов,_не_принимаемых_к_перевозке_и_хранению.pdf" download>список грузов, не принимаемых
							к перевозке</a>.
						Коммерческие партии товаров вы можете заказать
						у нашего партнера ООО <a href="https://finexportural.ru/" target="_blank">“ФинЭкспортУрал”</a>.
					</div>
				</div>
			</div>

			<div class="menu-item">
				<div class="menu-title" :class="{ active: isActive4 }" @click="isActive4 = !isActive4">
					Где я могу посмотреть ассортимент товаров?
				</div>
				<div class="menu-content">
					<div class="item">
						Вы можете выбрать любой товар в интернет-магазинах Нур-Султана (или любого другого города Казахстана, при
						условии, что продавец сможет осуществить доставку в Нур-Султан). Отправьте ссылку на товар через форму
						заказа.
					</div>
				</div>
			</div>

			<div class="menu-item">
				<div class="menu-title" :class="{ active: isActive5 }" @click="isActive5 = !isActive5">
					Какие вы даете гарантии?
				</div>
				<div class="menu-content">
					<div class="item">Отправляя заявку, вы подтверждаете, что вы ознакомились и согласны с условиями
						договора-оферты. Согласно этого договора, мы гарантируем, что доставим вам выбранный вами товар.
						В случае, если у вас возникнут претензии к его качеству, вы можете воспользоваться нашими
						услугами для возврата товара продавцу.</div>
				</div>
			</div>

			<div class="menu-item">
				<div class="menu-title" :class="{ active: isActive6 }" @click="isActive6 = !isActive6">
					Как подобрать подходящую упаковку для товаров?
				</div>
				<div class="menu-content">
					<div class="item">
						<p>Если ваш товар небольшого размера, вы можете отправить его по фиксированным ценам в специальных коробках.
							Цена зависит только от размера коробки, но не от расстояния. Стоимость: XS – 400 руб., S – 500 руб., M –
							600 руб., L – 700 руб.</p>

						<p>Если ваш товар большого размера, укажите в форме заявки характер груза, и система автоматически подберет
							и рассчитает подходящую упаковку.</p>

						<p>Шины не нуждаются в специальной упаковке. Воспользуйтесь акцией – перевозка каждой 4-ой или 5-й Шины в
							подарок!</p>
					</div>
				</div>
			</div>

			<div class="menu-item">
				<div class="menu-title" :class="{ active: isActive7 }" @click="isActive7 = !isActive7">
					В какие города России возможна доставка?
				</div>
				<div class="menu-content">
					<div class="item">Доставка возможна более чем в 500 городов России. Дополнительную информацию уточняйте у
						нашего специалиста по телефону:
						<a href="tel:+79126300970" class="tel-num">+7 (912) 630-09-70</a>
						или email: <a href="mailto:info@kupi-v-kz.ru" target="_blank" class="mail">info@kupi-v-kz.ru</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isActive1: false,
			isActive2: false,
			isActive3: false,
			isActive4: false,
			isActive5: false,
			isActive6: false,
			isActive7: false,
		};
	},
};
</script>

<style scoped lang="scss">
#faq {
	margin-top: 90px;
	padding: 60px 160px;
	background: #F7F7F7;
	border-radius: 30px;

	&-container {
		margin-top: 16px;
	}
}

h2 {
	font-weight: 500;
	font-size: 48px;
	text-align: center;
}

.menu-title {
	position: relative;
	cursor: pointer;
	width: 100%;
	transition: all 0.4s;
	padding-right: 24px;

	&:after {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
		transition: 0.4s;
		content: url(@/assets/svg/plus.svg);
	}

	&.active {
		&::after {
			transform: rotate(45deg) translateY(-50%) translateX(-10px);
			transition: 0.4s;
			top: calc(50% + 3px);
		}

		&~.menu-content {
			max-height: 500vh;
			opacity: 1;
			transition: border-bottom 0.2s, max-height 0.4s, opacity 0.2s;

			&:not(:last-child) {
				border-bottom: 1px solid #999999;
			}
		}
	}
}

.menu-title,
.item {
	color: #000;
	font-size: 18px;
	padding-top: 24px;
	padding-bottom: 24px;

	p:not(:first-of-type) {
		margin-top: 16px;
	}

	a {
		font-weight: 600;

		&.tel-num,
		&.mail {
			font-weight: 400;
		}
	}
}

.menu-content {
	overflow: hidden;
	opacity: 0.5;
	max-height: 0;
	transition: border-bottom 0.1s, max-height 0.2s, opacity 0.1s;
	border-bottom: 1px solid #999999;
}

.menu-item:last-child {

	.menu-title,
	.menu-content {
		border-bottom: 1px solid transparent;
	}
}

@media (max-width: 992px) {
	#faq {
		padding: 40px 16px;
	}

	h2 {
		font-size: 32px;
	}
}

@media (max-width: 768px) {
	#faq {
		margin-top: 50px;
	}
}

@media (max-width: 576px) {
	h2 {
		font-size: 24px;
	}

	.menu-title,
	.item {
		font-size: 14px;
		padding-top: 16px;
		padding-bottom: 16px;
	}
}
</style>
