<template>
	<header>
		<div class="container">
			<img src="@/assets/img/logo.png" alt="logo" />

			<a class="fullscreen" href="#how-it-works">Как заказать</a>
			<a class="fullscreen" href="#shops">Интернет-магазины</a>
			<a class="fullscreen" href="#payment">Оплатить</a>
			<a class="fullscreen" href="#faq">FAQ</a>
			<a class="fullscreen" href="#docs">Документы</a>

			<a href="tel:+79126300970" class="tel-number">+7 (912) 630-09-70</a>

			<a href="#submit-an-application" class="fullscreen">Оставить заявку</a>

			<div class="hamburger-menu">
				<div :class="[{ active: isActive }, 'menu__btn']" @click="toggleBurger">
					<span></span>
				</div>

				<div class="menu__box">
					<div class="menu__box--inner">
						<img src="@/assets/img/logo.png" alt="logo" />

						<a href="#how-it-works" @click="closeBurger">Как заказать</a>
						<a href="#shops" @click="closeBurger">Интернет-магазины</a>
						<a href="#payment" @click="closeBurger">Оплатить</a>
						<a href="#faq" @click="closeBurger">FAQ</a>
						<a href="#docs" @click="closeBurger">Документы</a>

						<a href="tel:+79126300970" class="tel-number">+7 (912) 630-09-70</a>

						<a href="#submit-an-application" @click="closeBurger">Оставить заявку</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		toggleBurger() {
			this.isActive = !this.isActive;
			document.querySelector('body').classList.toggle('lock');
		},
		closeBurger() {
			this.isActive = false;
			document.querySelector('body').classList.remove('lock');
		},
	},
};
</script>

<style scoped lang="scss">
header {
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40px 0;

		img {
			width: auto;
			height: 68px;
		}

		a {
			font-size: 18px;
		}
	}
}

.hamburger-menu {
	display: none;
}

.tel-number {
	font-size: 18px;
	color: #2BA9E6;
	background-clip: text;
}

header>.container>a:last-of-type,
.menu__box--inner>a:last-of-type {
	background: linear-gradient(91.76deg, #F15EBB 1.86%, #F05DB9 68.65%);
	border-radius: 10px;
	padding: 15px 60px;
	color: #fff;
	font-size: 14px;
	color: #FFFFFF;
}

@media (max-width: 1600px) {
	header>.container {

		img {
			width: auto;
			height: 54px;
		}

		&>a:last-of-type {
			padding: 15px 30px;
		}
	}
}

@media (max-width: 1232px) {
	header {
		.container {
			padding: 24px 0;

			img {
				width: 125px;
				height: auto;
			}
		}
	}

	.hamburger-menu {
		position: relative;
		display: flex;
		width: 26px;
		height: 26px;

		a:last-of-type {
			width: 100%;
		}
	}

	.fullscreen {
		display: none;
	}

	.menu__btn {
		display: flex;
		align-items: center;
		position: relative;
		width: 26px;
		height: 26px;
		cursor: pointer;
		z-index: 101;

		span,
		span::before,
		span::after {
			display: block;
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: #2BA9E6;
			user-select: none;
			transition: 0.3s;
		}

		span::before {
			content: '';
			top: -8px;
		}

		span::after {
			content: '';
			top: 8px;
		}

		&.active {
			position: fixed;
			top: 26px;
			right: 17px;

			span {
				transition: .3s;
				transform: rotate(45deg);

				&::before {
					transition: .3s;
					top: 0;
					transform: rotate(0);
				}

				&::after {
					transition: .3s;
					top: 0;
					transform: rotate(90deg);
				}
			}

			&~.menu__box {
				visibility: visible;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 100;
				background: #fff;
				transition: .5s;
				overflow-y: auto;
			}
		}
	}

	.menu__box {
		display: flex;
		flex-direction: column;
		position: fixed;
		visibility: hidden;
		padding: 24px 0;
		left: -100%;
		width: 100vw;
		min-height: 100vh;
		text-align: center;
		background-color: #ECEFF1;
		box-shadow: 1px rgba(0, 0, 0, .2);
		transition: .4s;

		&--inner {
			width: 320px;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			padding-bottom: 24px;

			a {
				margin-top: 24px;

				&:nth-of-type(1) {
					margin-top: 32px;
				}

				&:last-of-type {
					margin-top: 0;
				}
			}

			.tel-number {
				margin: 40px 0;
			}
		}
	}
}

@media (max-width: 576px) {
	.menu__box--inner {
		width: 300px;
	}

	header {
		.container {
			.tel-number {
				font-size: 13px;
			}
		}
	}

}
</style>
