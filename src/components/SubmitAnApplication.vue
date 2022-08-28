<template>
	<section id="submit-an-application">
		<h2>Оставить заявку</h2>

		<form onsubmit="return false" @change="this.checkValidForm()">
			<div class="form-item">
				<input v-model="nameValue" :class="{ 'error': this.nameError }" type="text" id="name" placeholder="Сергей" />
				<label for="name">Имя</label>
			</div>

			<div class="form-item form-tel" :class="{ 'confirm': this.phoneConfirm }">
				<input v-model.trim="phoneValue" type="tel" :class="{ 'error': this.phoneError }" id="tel"
					placeholder="Номер телефона" />
				<label for="tel">Номер телефона</label>
			</div>

			<div class="form-item">
				<input v-model.trim="emailValue" :class="{ 'error': this.emailError }" type="text" id="mail"
					placeholder="Example@mail.ru" />
				<label for="mail">Email</label>
			</div>

			<div class="form-item">
				<button @click="this.sendForm()">Оставить заявку</button>
			</div>
		</form>
	</section>
</template>

<script>
import sendUserDataFetch from './sendUserDataFetch';

// eslint-disable-next-line no-useless-escape
const regMail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
const regPhone = /^\d{10}$/;
const regPhoneDone = /^((\+7|7|8)+([0-9]){10})$/;

export default {
	data() {
		return {
			nameValue: undefined,
			phoneValue: undefined,
			emailValue: undefined,

			nameError: undefined,
			phoneError: undefined,
			emailError: undefined,

			phoneConfirm: false,
		};
	},
	methods: {
		async sendUserData(name, phone, email) {
			const res = await sendUserDataFetch(name, phone, email);

			console.log('res is ', res);
		},
		checkValidForm() {
			if (this.nameValue) {
				if (this.nameValue.length < 2 && this.nameValue.length > 60) {
					this.nameError = true;
				} else {
					this.nameError = false;
				}
			} else {
				this.nameError = true;
			}

			if (this.emailValue) {
				if (regMail.test(this.emailValue) === false) {
					this.emailError = true;
				} else {
					this.emailError = false;
				}
			} else {
				this.emailError = true;
			}

			if (this.phoneValue) {
				if (regPhone.test(this.phoneValue) === false) {
					if (regPhoneDone.test(this.phoneValue) === false) {
						this.phoneConfirm = false;
						this.phoneError = true;
						this.phoneValue = this.phoneValue.replace('+7', '');
					}
				} else {
					this.phoneError = false;
					this.phoneConfirm = true;
					this.phoneValue = `+7${this.phoneValue}`;
				}
			} else {
				this.phoneError = true;
				this.phoneConfirm = false;
			}

			if (!this.nameError && !this.phoneError && !this.emailError) {
				return true;
			}

			return false;
		},
		sendForm() {
			if (this.checkValidForm()) {
				this.sendUserData(this.nameValue, this.phoneValue, this.emailValue);
			}
		},
	},
};
</script>
<style scoped lang="scss">
#submit-an-application {
	width: 400px;
	margin: 90px auto;
}

h2 {
	font-weight: 500;
	font-size: 48px;
	line-height: 58px;
	text-align: center;
}

.form-item {
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 24px;

	label,
	input {
		width: 100%;
	}

	label {
		order: 1;
		font-size: 16px;
		line-height: 160%;
		margin-bottom: 8px;
	}

	input {
		order: 2;
		border: 1px solid rgba(153, 153, 153, 0.4);
		border-radius: 10px;
		height: 46px;
		padding: 0 16px;
		outline: none;

		&.error {
			transition: 0.05s;
			border: 2px solid red;
		}
	}

	&.form-tel:not(.confirm) {

		&:focus,
		&:focus-visible,
		&:focus-within {
			#tel {
				transition: 0.1s;
				padding-left: 26px;
			}

			&::before {
				transition: 0.1s;
				display: flex;
				align-items: center;
				width: 26px;
				justify-content: center;
				background: rgba(0, 0, 0, 0.1);
				border-radius: 10px 0 0 10px;
				content: '+7';
				position: absolute;
				left: 0;
				bottom: 0;
				height: 46px;
			}
		}
	}

	&:first-child {
		margin-top: 40px;
	}

	&:last-child {
		margin-top: 32px;
	}
}

button {
	width: 100%;
	font-size: 14px;
	line-height: 17px;
	color: #FFFFFF;
	padding: 15px 0;
	background: linear-gradient(91.76deg, #F15EBB 1.86%, #F05DB9 68.65%);
	border-radius: 10px;
}

@media (max-width: 992px) {
	h2 {
		font-size: 32px;
	}

	.form-item:first-child {
		margin-top: 24px;
	}
}

@media (max-width: 768px) {
	#submit-an-application {
		margin: 50px auto;
	}
}

@media (max-width: 576px) {
	#submit-an-application {
		width: 100%;
	}

	h2 {
		font-size: 24px;
	}
}
</style>
