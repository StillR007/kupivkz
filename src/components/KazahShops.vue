<template>
	<section id="shops">
		<h2>Категории интернет-магазинов</h2>

		<aside class="aside">
			<template v-for="(types, category, index) in this.shopsJson.categories" :key="index">
				<div :class="['menu-item', { 'active': activeIndex !== -1 }]">
					<div class="menu-title" :class="{ 'active': activeIndex === index }"
						@click="makeItActive(index, $event.target)">
						{{  category  }}
					</div>
					<div class="menu-content">
						<div class="item" v-for="(type) in types" :key="type" @click="filterShops(type, $event.target)">
							{{  type  }}
						</div>
					</div>
				</div>
			</template>

			<template v-if="this.windowWidth >= 992">
				<p id="restore" @click="restoreShopsFilter()" :class="{ 'active': allActive }">Сбросить фильтры</p>
			</template>
			<template v-else>
				<p id="restore" @click="restoreShopsFilter()" :class="{ 'active': allActive }">Все</p>
			</template>

		</aside>

		<section>
			<template v-for="(store, storeName) in this.shopsJson.stores" :key="storeName">
				<template v-if="store.active === true && store.hidden === false">
					<div class="shop" :data-order="store.order">
						<p class="name">{{  storeName  }}</p>
						<i v-if="store.bestPrice" class="bestPrice"></i>
						<img :src="store.src" :alt="storeName" />
					</div>
				</template>
			</template>

			<template v-if="this.showBtn === true">
				<button id="showMore" @click="showMore()">Показать ещё</button>
			</template>

			<template v-if="this.nothingHere === true">
				<div class="no-results">
					<h3>Хммм... здесь ничего нет!</h3>
					<img width="300" src="@/assets/img/nothing-here.jpg" alt="no-results" />
				</div>
			</template>
		</section>
	</section>
</template>

<script>
import getShops from './getShops';
// import * as shopsJson from './shops.json';

export default {
	data() {
		return {
			shopsJson: {},
			// shopsJson,
			activeIndex: -1,
			windowWidth: 0,
			showBtn: true,
			nothingHere: false,
		};
	},
	async mounted() {
		this.shopsJson = await getShops();
		this.restoreShopsFilter();
	},
	methods: {
		updateWindowWidth() {
			this.windowWidth = window.innerWidth;
		},
		colorTypeButton(el) {
			let prevElement = document.querySelector('.item.active');
			if (prevElement) {
				prevElement.classList.remove('active');
			}
			if (el) {
				el.classList.add('active');
			}
		},
		filterShops(type, el) {
			this.colorTypeButton(el);

			this.nullFilter();

			let count = 0;
			// eslint-disable-next-line no-unused-vars
			for (let [storeName, store] of Object.entries(this.shopsJson.stores)) {
				if (store.type.indexOf(`${type}`) === -1) {
					store.active = false;
					store.hidden = true;
				} else {
					store.active = true;
					store.hidden = false;
					count++;
				}
			}

			// eslint-disable-next-line no-unused-expressions
			count === 0 ? this.nothingHere = true : this.nothingHere = false;

			this.$forceUpdate();
			this.showMore();
			this.$forceUpdate();
		},
		showMore() {
			let i = 0;
			// eslint-disable-next-line no-unused-vars
			for (let [storeName, store] of Object.entries(this.shopsJson.stores)) {
				if (i < 12 && store.hidden !== false) {
					store.hidden = false;
					i++;
				}
			}
			this.$forceUpdate();
			this.checkForElse();
			this.$forceUpdate();
		},
		checkForElse() {
			// eslint-disable-next-line no-unused-vars
			for (let [storeName, store] of Object.entries(this.shopsJson.stores)) {
				if (store.active && store.hidden) {
					this.showBtn = true;
				} else {
					this.showBtn = false;
				}
			}
			this.$forceUpdate();
		},
		nullFilter() {
			// eslint-disable-next-line no-unused-vars
			for (let [storeName, store] of Object.entries(this.shopsJson.stores)) {
				store.active = false;
				store.hidden = true;
			}
			this.nothingHere = false;
			this.showBtn = true;
			this.$forceUpdate();
		},
		restoreShopsFilter() {
			this.nothingHere = false;
			this.colorTypeButton();
			this.makeAnotherUnactive();

			if (window.innerWidth <= 768) {
				this.allActive = true;
			}
			// eslint-disable-next-line no-unused-vars
			for (let [storeName, store] of Object.entries(this.shopsJson.stores)) {
				store.active = true;
				store.hidden = true;
			}
			this.showMore();

			this.activeIndex = -1;
		},
		makeAnotherUnactive() {
			if (document.querySelector('.menu-item.active')) {
				document.querySelector('.menu-item.active').classList.remove('active');
			}
			if (document.querySelector('#restore.active')) {
				document.querySelector('#restore.active').classList.remove('active');
			}
		},
		makeItActive(index, el) {
			this.makeAnotherUnactive();
			this.activeIndex = index;
			this.allActive = false;
			if (window.innerWidth <= 768) {
				el.closest('.menu-item').classList.add('active');
			}
		},
	},
	created() {
		this.showBtn = true;
		this.allActive = true;
		this.updateWindowWidth();
		window.addEventListener('resize', this.updateWindowWidth);

		this.restoreShopsFilter();
	},
};
</script>

<style scoped lang="scss">
.no-results {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	img {
		width: 300px;
	}

	h3 {
		font-size: 20px;
	}
}

.shop {
	display: flex;
	position: relative;
	background: #FFFFFF;
	box-shadow: 0px 4px 25px 3px rgba(0, 0, 0, 0.07);
	border-radius: 10px;
	width: 250px;
	height: 267px;
	margin-left: 40px;
	margin-bottom: 40px;

	img {
		position: absolute;
		top: 60px;
		left: 50%;
		transform: translateX(-50%);
		width: 124px;
	}

	&.hidden {
		display: none;
	}
}

.name {
	width: 100%;
	display: flex;
	align-items: end;
	justify-content: center;
	padding: 0 20px 32px;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.bestPrice {
	position: absolute;
	top: 8px;
	left: 8px;
	background: #79FF8E;
	border-radius: 3px;

	&:hover {
		box-shadow: 0px 4px 40px 3px rgba(0, 0, 0, 0.1);
	}

	&::after {
		content: '%';
		padding: 4px 6px;
		font-size: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}
}

.aside {
	grid-column: 1;
	grid-row: 2;
}

h2 {
	grid-column: 1/3;
	grid-row: 1;
	text-align: center;
	font-weight: 500;
	font-size: 48px;
	margin-bottom: 40px;
}

section {
	grid-column: 2;
	grid-row: 2;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

#shops {
	margin-top: 90px;

	width: 100%;
	display: grid;
	grid-template-columns: 240px auto;
	grid-template-rows: repeat(2, auto);
}

.menu-title {
	position: relative;
	width: 100%;
	transition: 0.2s;

	&:after {
		position: absolute;
		height: 20px;
		top: 15px;
		right: 0;
		transition: 0.2s;
		content: url(@/assets/svg/arrow.svg);
	}

	&.active {
		&::after {
			transform: rotate(180deg);
			transition: 0.3s;
		}

		&~.menu-content {
			max-height: 100vh;
			transition: all 0.4s;

			/* &>.item {
				color: #2BA9E6;
			} */
		}
	}
}

.menu-title,
.item {
	padding: 16px 30px;
	border-bottom: 1px solid #EBEBEB;
	cursor: pointer;
	white-space: nowrap;

	&.active {
		color: #2BA9E6;
	}
}

.menu-content {
	background-color: white;
	overflow: hidden;
	max-height: 0;
	transition: all 0.4s;
}

#restore {
	width: 100%;
	margin-top: 32px;
	text-align: center;
	font-size: 16px;
	text-align: center;
	letter-spacing: 0.01em;
	color: #2BA9E6;
	cursor: pointer;
	white-space: nowrap;
}

#showMore {
	display: block;
	width: 100%;
	text-align: center;
	font-size: 16px;
	color: #2BA9E6;

	&.hidden {
		display: none;
	}
}

@media (max-width: 1232px) {
	.shop {
		margin-left: 20px;
		margin-bottom: 20px;
	}
}

@media (max-width: 992px) {
	h2 {
		font-size: 32px;
	}

	.shop {
		width: 168px;
		height: 108px;

		img {
			width: 80px;
			top: 20px;
		}
	}

	.name {
		padding: 0 10px 10px;
	}

	section {
		justify-content: left;
	}
}

@media (max-width: 768px) {
	#shops {
		position: relative;
		margin-top: 50px;
		grid-template-columns: 100%;
		grid-template-rows: repeat(3, auto);
	}

	h2,
	.aside,
	section {
		grid-column: 1;
	}

	section {
		grid-row: 3;
		margin-top: 116px;
	}

	.aside {
		position: absolute;
		left: 0;
		top: 0;
		display: inline-flex;
		overflow-x: auto;
		overflow-y: hidden;
		max-width: 100%;

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

	.menu-title {
		border: 1px solid rgba(60, 60, 67, 0.6);
		border-radius: 50px;
		padding: 12px;
		width: min-content;
		white-space: nowrap;
		color: rgba(60, 60, 67, 0.6);

		&::after {
			display: none;
		}

		&.active {
			color: #fff;
			background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);
			border: 1px solid;
			transition: none;

			&~.menu-content {
				transition: none;
			}
		}
	}

	.menu-item {
		padding-bottom: 5px;
		order: 2;

		&:not(:first-child) {
			margin-left: 8px;
		}

		&.active {
			padding-bottom: 50px;
		}
	}

	.menu-content {
		display: inline-flex;
		position: absolute;
		height: 50px;
		left: 0;
		transition: none;
	}

	.item {
		border: none;
	}

	#restore {
		margin: 0 8px 0 0;
		width: min-content;
		order: 1;
		border: 1px solid rgba(60, 60, 67, 0.6);
		border-radius: 50px;
		padding: 12px;
		height: 43px;
		color: rgba(60, 60, 67, 0.6);
		font-size: 14px;

		&.active {
			color: #fff;
			background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);
			border: 1px solid;
			transition: none;
		}
	}
}

@media (max-width: 576px) {
	.shop {
		width: 139px;
		height: 121px;
		margin-left: 5px;
		margin-bottom: 5px;

		img {
			top: 15px;
			width: 65px;
		}
	}

	h2 {
		font-size: 24px;
	}
}
</style>

