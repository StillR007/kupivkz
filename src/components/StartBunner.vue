<template>
	<section id="banner">
		<VueAgile :options="myOptions">
			<div class="slide">
				<h2>Доставим любой товар из дружественных стран!</h2>
				<p>Оплата за товар в рублях по выгодному курсу, доставка в любой город России!</p>
			</div>

			<div class="slide">
				<h2>Получайте посылки уже через 5 дней после заказа</h2>
				<p>Быстрая доставка по выгодной цене</p>
			</div>

			<div class="slide">
				<h2>Перевозка каждой 4-й или 5-й шины – в подарок!</h2>
				<p>Перевози шины выгодно!</p>
			</div>

			<div class="slide">
				<h2>Доставка мелких грузов по FIX цене!</h2>
				<p>до 1 кг – 400 руб., до 3 кг – 500 руб., до 6 кг – 600 руб., до 12 кг – 700 руб.</p>
			</div>
		</VueAgile>

		<section id="forms">
			<template v-if="finalForm === false">
				<template v-if="countOfForms > 1">
					<section id="forms-titles">
						<template v-for="(item, index) in countOfForms" :key="index">
							<button @click="switchForm(index, $event.target)">{{  index + 1  }}-й товар</button>
						</template>
					</section>
				</template>

				<section id="forms-container">
					<form class="form form-1" @change="this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1)"
						onsubmit="return false">
						<div class="form-item">
							<div class="form-mini-item">
								<label for="costs-1">Стоимость товара, ₸</label>
								<input v-model="price1" type="number" id="costs-1" min="1" step="1" placeholder="100 000" />
							</div>
							<div class="form-mini-item">
								<label for="type">Характер груза</label>
								<v-select v-model="selected" @option:selected="tileSelected1(this, 1)" :autocomplete="'true'"
									:options="types" :clearable=false>
								</v-select>
							</div>
						</div>

						<template v-if="isNotTile1 === false">
							<div class="form-item form-package">
								<label for="package">Упаковка товара</label>
								<div class="package package-1" :class="{ 'active': this.opened1 }">
									<span @click="this.opened1 = !this.opened1" :class="{ 'error': this.pack1error }">{{
										 this.packSelectedValue1 
										}}</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation"
										class="vs__open-indicator">
										<path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247
							0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7
							5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008
							1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
										</path>
									</svg>

									<div class="package-block package-block-1" v-show="this.opened1">
										<div class="titles">
											<div :class="['title', { 'active': !toggled1 }]" @click="toggleTitle(1)">Посылка</div>
											<div :class="['title', { 'active': toggled1 }]" @click="toggleTitle(1)">Точный размер</div>
										</div>

										<div class="package-items package-items-1" :class="{ 'toggled': toggled1 }">
											<div class="pack pack-1">
												<div :class="['pack-item', { 'active': this.activeIndex1 === 1 }]"
													@click="packSelected1(1, $event.target)">
													<h5>Посылка XS, 1 кг</h5>
													<h6>Размер 37x28x38 см</h6>
													<p>Для перевозки книг, одежды и обуви, автомобильных запчастей, средней бытовой техники,
														постельного
														белья, одеял и подушек</p>
													<img src="@/assets/img/pack-xs.png" alt="pack-xs" />
													<div class="notRadio"><span></span></div>
												</div>
												<div :class="['pack-item', { 'active': this.activeIndex1 === 2 }]"
													@click="packSelected1(2, $event.target)">
													<h5>Посылка S, 3 кг</h5>
													<h6>Размер 37x28x19 см</h6>
													<p>Для перевозки книг, небольших сувениров, настольных игр, бижутерии, одежды, запчастей,
														мелкой
														бытовой
														техники</p>
													<img src="@/assets/img/pack-s.png" alt="pack-s" />
													<div class="notRadio"><span></span></div>
												</div>
												<div :class="['pack-item', { 'active': this.activeIndex1 === 3 }]"
													@click="packSelected1(3, $event.target)">
													<h5>Посылка М, 6 кг</h5>
													<h6>Размер 28x18x19 см</h6>
													<p>Для перевозки книг, одежды, обуви, посуды, автомобильных запчастей, мелкой и средней
														бытовой
														техники,
														постельного белья</p>

													<img src="@/assets/img/pack-m.png" alt="pack-m" />
													<div class="notRadio"><span></span></div>
												</div>
												<div :class="['pack-item', { 'active': this.activeIndex1 === 4 }]"
													@click="packSelected1(4, $event.target)">
													<h5>Посылка L, 12 кг</h5>
													<h6>Размер 30x21x5 см</h6>
													<p>Для перевозки документов формата А4, журналов, книг, бижутерии, одежды, мелких запчастей,
														настольных
														игр</p>

													<img src="@/assets/img/pack-l.png" alt="pack-l" />
													<div class="notRadio"><span></span></div>
												</div>
											</div>

											<div class="size size-1">
												<div>
													<div class="size-item">
														<label for="weight-1">Вес, кг</label>
														<input v-model="weight1" :class="{ 'error': !this.weight1 }" type="number" id="weight-1"
															min="0.1" step="0.1" />
													</div>
													<div class="size-item">
														<label for="count-1">Количество мест</label>
														<input v-model="count1" :class="{ 'error': !this.count1 }" type="number" id="count-1"
															min="1" step="1" />
													</div>
												</div>

												<div>
													<div class="size-item">
														<label for="length-1">Длина, см</label>
														<input v-model="length1" :class="{ 'error': !this.length1 }" type="number" id="length-1"
															min="1" step="1" />
													</div>
													<div class="size-item">
														<label for="width-1">Ширина, см</label>
														<input v-model="width1" :class="{ 'error': !this.width1 }" type="number" id="width-1"
															min="1" step="1" />
													</div>
													<div class="size-item">
														<label for="hight-1">Высота, см</label>
														<input v-model="height1" :class="{ 'error': !this.height1 }" type="number" id="height-1"
															min="1" step="1" />
													</div>
												</div>

												<div>
													<button id="useSize" @click.prevent="useSize1()">Применить</button>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</template>

						<div :class="['form-item', 'count', { active: isNotTile1 === false }]">
							<label for="count">Количество товаров</label>
							<div>
								<button class="minus" :class="{ active: this.resultCount1 > 1 }"
									@click.prevent="this.resultCount1 > 1 ? this.resultCount1-- : this.resultCount1">-</button>
								<p id="count-result">{{  this.resultCount1  }}</p>
								<button class="plus" :class="{ active: this.resultCount1 < 10 }"
									@click.prevent="this.resultCount1 < 10 ? this.resultCount1++ : this.resultCount1">+</button>
							</div>
						</div>

						<div class="form-item city">
							<label for="city">Город получения</label>
							<v-select v-model="selectedCity1" label="label" @option:selected="citySelected1(this)" :options="cities"
								:autocomplete="'true'" :clearable=false>
							</v-select>
						</div>

						<div class="form-item link">
							<label for="link-1">Ссылка на товар</label>
							<input v-model="link1" type="text" id="link-1" placeholder="http://" />
						</div>

						<template v-if="this.isNotTile1 === true">
							<div class="form-item tile">
								<div :class="{ 'error': activeTileSizeIndex1 === -1 }">
									<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex1 === 1 }"
										@click="tile1sizeSelected(1)">R
										13-14</button>
									<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex1 === 2 }"
										@click="tile1sizeSelected(2)">R
										15-16</button>
									<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex1 === 3 }"
										@click="tile1sizeSelected(3)">R
										17-18</button>
								</div>

								<div>
									<label>Количество шин</label>

									<div :class="{ 'error': activeTileCountIndex1 === -1 }">
										<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex1 === 1 }"
											@click="tile1countSelected(1)">1</button>
										<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex1 === 2 }"
											@click="tile1countSelected(2)">2</button>
										<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex1 === 3 }"
											@click="tile1countSelected(3)">3</button>
										<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex1 === 4 }"
											@click="tile1countSelected(4)">4</button>
										<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex1 === 5 }"
											@click="tile1countSelected(5)">5</button>
										<img src="@/assets/img/radio-info.png" alt="info" />
										<p>Воспользуйтесь акцией: перевозка каждой 4-й или 5-й шины в подарок!</p>
									</div>
								</div>
							</div>
						</template>

						<template v-if="this.form1calculated">
							<div class="form-item total-count">
								<label>Итоговая стоимость товара</label>
								<label :class="{ 'loaded': this.loading1 }">{{  this.price1rub * this.resultCount1  }} ₽</label>
							</div>
						</template>

						<template v-if="!this.form1calculated">
							<div class="form-item calculate">
								<button @click="this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1)">Рассчитать</button>
							</div>
						</template>

						<template v-else>
							<div class="form-item leave-request">
								<button :disabled="this.loading1" @click="showFinalForm()">Оставить заявку</button>
							</div>
						</template>

						<div v-if="this.showAddNew1 && this.countOfForms < 3" class="form-item addNew">
							<button @click="addNewItem(2)">+ Добавить еще один товар</button>
						</div>
					</form>

					<template v-if="countOfForms >= 2">
						<form class="form form-2" @change="this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2)"
							onsubmit="return false">

							<div class="form-item">
								<div class="form-mini-item">
									<label for="costs-2">Стоимость товара, ₸</label>
									<input v-model="price2" type="number" id="costs-2" min="1" step="1" placeholder="100 000" />
								</div>
								<div class="form-mini-item">
									<label for="type-2">Характер груза</label>
									<v-select v-model="selected2" @option:selected="tileSelected2(this, 2)" :autocomplete="'true'"
										:options="types" :clearable=false>
									</v-select>
								</div>
							</div>
							<template v-if="isNotTile2 === false">
								<div class="form-item form-package">
									<label for="package">Упаковка товара</label>
									<div class="package package-2" :class="{ 'active': this.opened2 }">
										<span @click="this.opened2 = !this.opened2" :class="{ 'error': this.pack2error }">{{
											 this.packSelectedValue2 
											}}</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation"
											class="vs__open-indicator">
											<path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247
							0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7
							5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008
							1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
											</path>
										</svg>

										<div class="package-block package-block-2" v-show="this.opened2">
											<div class="titles">
												<div :class="['title', { 'active': !toggled2 }]" @click="toggleTitle(2)">Посылка</div>
												<div :class="['title', { 'active': toggled2 }]" @click="toggleTitle(2)">Точный размер</div>
											</div>

											<div class="package-items package-items-2" :class="{ 'toggled': toggled2 }">
												<div class="pack pack-2">
													<div :class="['pack-item', { 'active': this.activeIndex2 === 1 }]"
														@click="packSelected2(1, $event.target)">
														<h5>Посылка XS, 1 кг</h5>
														<h6>Размер 37x28x38 см</h6>
														<p>Для перевозки книг, одежды и обуви, автомобильных запчастей, средней бытовой техники,
															постельного
															белья, одеял и подушек</p>
														<img src="@/assets/img/pack-xs.png" alt="pack-xs" />
														<div class="notRadio"><span></span></div>
													</div>
													<div :class="['pack-item', { 'active': activeIndex2 === 2 }]"
														@click="packSelected2(2, $event.target)">
														<h5>Посылка S, 3 кг</h5>
														<h6>Размер 37x28x19 см</h6>
														<p>Для перевозки книг, небольших сувениров, настольных игр, бижутерии, одежды, запчастей,
															мелкой
															бытовой
															техники</p>
														<img src="@/assets/img/pack-s.png" alt="pack-s" />
														<div class="notRadio"><span></span></div>
													</div>
													<div :class="['pack-item', { 'active': activeIndex2 === 3 }]"
														@click="packSelected2(3, $event.target)">
														<h5>Посылка М, 6 кг</h5>
														<h6>Размер 28x18x19 см</h6>
														<p>Для перевозки книг, одежды, обуви, посуды, автомобильных запчастей, мелкой и средней
															бытовой
															техники,
															постельного белья</p>

														<img src="@/assets/img/pack-m.png" alt="pack-m" />
														<div class="notRadio"><span></span></div>
													</div>
													<div :class="['pack-item', { 'active': activeIndex2 === 4 }]"
														@click="packSelected2(4, $event.target)">
														<h5>Посылка L, 12 кг</h5>
														<h6>Размер 30x21x5 см</h6>
														<p>Для перевозки документов формата А4, журналов, книг, бижутерии, одежды, мелких запчастей,
															настольных
															игр</p>

														<img src="@/assets/img/pack-l.png" alt="pack-l" />
														<div class="notRadio"><span></span></div>
													</div>
												</div>

												<div class="size size-2">
													<div>
														<div class="size-item">
															<label for="weight-2">Вес, кг</label>
															<input v-model="weight2" :class="{ 'error': !this.weight2 }" type="number" id="weight-2"
																min="0.1" step="0.1" />
														</div>
														<div class="size-item">
															<label for="count-2">Количество мест</label>
															<input v-model="count2" :class="{ 'error': !this.count2 }" type="number" id="count-2"
																min="1" step="1" />
														</div>
													</div>

													<div>
														<div class="size-item">
															<label for="length-2">Длина, см</label>
															<input v-model="length2" :class="{ 'error': !this.length2 }" type="number" id="length-2"
																min="1" step="1" />
														</div>
														<div class="size-item">
															<label for="width-2">Ширина, см</label>
															<input v-model="width2" :class="{ 'error': !this.width2 }" type="number" id="width-2"
																min="1" step="1" />
														</div>
														<div class="size-item">
															<label for="hight-2">Высота, см</label>
															<input v-model="height2" :class="{ 'error': !this.height2 }" type="number" id="height-2"
																min="1" step="1" />
														</div>
													</div>

													<div>
														<button id="useSize-2" @click.prevent="useSize2()">Применить</button>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</template>
							<div :class="['form-item', 'count', { active: isNotTile2 === false }]">
								<label for="count">Количество товаров</label>
								<div>
									<button class="minus" :class="{ active: this.resultCount2 > 1 }"
										@click.prevent="this.resultCount2 > 1 ? this.resultCount2-- : this.resultCount2">-</button>
									<p id="count-result">{{  this.resultCount2  }}</p>
									<button class="plus" :class="{ active: this.resultCount2 < 10 }"
										@click.prevent="this.resultCount2 < 10 ? this.resultCount2++ : this.resultCount2">+</button>
								</div>
							</div>

							<div class="form-item city">
								<label for="city">Город получения</label>
								<v-select v-model="selectedCity2" label="label" @option:selected="citySelected2(this)" :options="cities"
									:autocomplete="'true'" :clearable=false>
								</v-select>
							</div>

							<div class="form-item link">
								<label for="link-2">Ссылка на товар</label>
								<input v-model="link2" type="text" id="link-2" placeholder="http://" />
							</div>

							<template v-if="this.isNotTile2 === true">
								<div class="form-item tile">
									<div :class="{ 'error': activeTileSizeIndex2 === -1 }">
										<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex2 === 1 }"
											@click="tile2sizeSelected(1)">R
											13-14</button>
										<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex2 === 2 }"
											@click="tile2sizeSelected(2)">R
											15-16</button>
										<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex2 === 3 }"
											@click="tile2sizeSelected(3)">R
											17-18</button>
									</div>

									<div>
										<label>Количество шин</label>

										<div :class="{ 'error': activeTileCountIndex2 === -1 }">
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex2 === 1 }"
												@click="tile2countSelected(1)">1</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex2 === 2 }"
												@click="tile2countSelected(2)">2</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex2 === 3 }"
												@click="tile2countSelected(3)">3</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex2 === 4 }"
												@click="tile2countSelected(4)">4</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex2 === 5 }"
												@click="tile2countSelected(5)">5</button>
											<img src="@/assets/img/radio-info.png" alt="info" />
											<p>Воспользуйтесь акцией: перевозка каждой 4-й или 5-й шины в подарок!</p>
										</div>
									</div>
								</div>
							</template>

							<template v-if="this.form2calculated">
								<div class="form-item total-count">
									<label>Итоговая стоимость товара</label>
									<label :class="{ 'loaded': this.loading2 }">{{  this.price2rub * this.resultCount2  }} ₽</label>
								</div>
							</template>

							<template v-if="!this.form2calculated">
								<div class="form-item calculate">
									<button
										@click="this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2)">Рассчитать</button>
								</div>
							</template>

							<template v-else>
								<div class="form-item leave-request">
									<button :disabled="this.loading2" @click="showFinalForm()">Оставить заявку</button>
								</div>
							</template>

							<div v-if="this.showAddNew2 && this.countOfForms < 3" class="form-item addNew">
								<button @click="addNewItem(3)">+ Добавить еще один товар</button>
							</div>
						</form>
					</template>

					<template v-if="countOfForms === 3">
						<form class="form form-3" @change="this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3)"
							onsubmit="return false">

							<div class="form-item">
								<div class="form-mini-item">
									<label for="costs-3">Стоимость товара, ₸</label>
									<input v-model="price3" type="number" id="costs-3" min="1" step="1" placeholder="100 000" />
								</div>
								<div class="form-mini-item">
									<label for="type-3">Характер груза</label>
									<v-select v-model="selected3" @option:selected="tileSelected3(this, 3)" :autocomplete="'true'"
										:options="types" :clearable=false>
									</v-select>
								</div>
							</div>

							<template v-if="isNotTile3 === false">
								<div class="form-item form-package">
									<label for="package">Упаковка товара</label>
									<div class="package package-3" :class="{ 'active': this.opened3 }">
										<span @click="this.opened3 = !this.opened3" :class="{ 'error': this.pack3error }">{{
											 this.packSelectedValue3 
											}}</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation"
											class="vs__open-indicator">
											<path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247
							0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7
							5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008
							1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
											</path>
										</svg>

										<div class="package-block package-block-3" v-show="this.opened3">
											<div class="titles">
												<div :class="['title', { 'active': !toggled3 }]" @click="toggleTitle(3)">Посылка</div>
												<div :class="['title', { 'active': toggled3 }]" @click="toggleTitle(3)">Точный размер</div>
											</div>

											<div class="package-items package-items-3" :class="{ 'toggled': toggled3 }">
												<div class="pack pack-3">
													<div :class="['pack-item', { 'active': activeIndex3 === 1 }]"
														@click="packSelected3(1, $event.target)">
														<h5>Посылка XS, 1 кг</h5>
														<h6>Размер 37x28x38 см</h6>
														<p>Для перевозки книг, одежды и обуви, автомобильных запчастей, средней бытовой техники,
															постельного
															белья, одеял и подушек</p>
														<img src="@/assets/img/pack-xs.png" alt="pack-xs" />
														<div class="notRadio"><span></span></div>
													</div>
													<div :class="['pack-item', { 'active': activeIndex3 === 2 }]"
														@click="packSelected3(2, $event.target)">
														<h5>Посылка S, 3 кг</h5>
														<h6>Размер 37x28x19 см</h6>
														<p>Для перевозки книг, небольших сувениров, настольных игр, бижутерии, одежды, запчастей,
															мелкой
															бытовой
															техники</p>
														<img src="@/assets/img/pack-s.png" alt="pack-s" />
														<div class="notRadio"><span></span></div>
													</div>
													<div :class="['pack-item', { 'active': activeIndex3 === 3 }]"
														@click="packSelected3(3, $event.target)">
														<h5>Посылка М, 6 кг</h5>
														<h6>Размер 28x18x19 см</h6>
														<p>Для перевозки книг, одежды, обуви, посуды, автомобильных запчастей, мелкой и средней
															бытовой
															техники,
															постельного белья</p>

														<img src="@/assets/img/pack-m.png" alt="pack-m" />
														<div class="notRadio"><span></span></div>
													</div>
													<div :class="['pack-item', { 'active': activeIndex3 === 4 }]"
														@click="packSelected3(4, $event.target)">
														<h5>Посылка L, 12 кг</h5>
														<h6>Размер 30x21x5 см</h6>
														<p>Для перевозки документов формата А4, журналов, книг, бижутерии, одежды, мелких запчастей,
															настольных
															игр</p>

														<img src="@/assets/img/pack-l.png" alt="pack-l" />
														<div class="notRadio"><span></span></div>
													</div>
												</div>

												<div class="size size-3">
													<div>
														<div class="size-item">
															<label for="weight-3">Вес, кг</label>
															<input v-model="weight3" :class="{ 'error': !this.weight3 }" type="number" id="weight-3"
																min="0.1" step="0.1" />
														</div>
														<div class="size-item">
															<label for="count-3">Количество мест</label>
															<input v-model="count3" :class="{ 'error': !this.count3 }" type="number" id="count-3"
																min="1" step="1" />
														</div>
													</div>

													<div>
														<div class="size-item">
															<label for="length-3">Длина, см</label>
															<input v-model="length3" :class="{ 'error': !this.length3 }" type="number" id="length-3"
																min="1" step="1" />
														</div>
														<div class="size-item">
															<label for="width-3">Ширина, см</label>
															<input v-model="width3" :class="{ 'error': !this.width3 }" type="number" id="width-3"
																min="1" step="1" />
														</div>
														<div class="size-item">
															<label for="hight-3">Высота, см</label>
															<input v-model="height3" :class="{ 'error': !this.height3 }" type="number" id="height-3"
																min="1" step="1" />
														</div>
													</div>

													<div>
														<button id="useSize-3" @click.prevent="useSize3()">Применить</button>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</template>

							<div :class="['form-item', 'count', { active: isNotTile3 === false }]">
								<label for="count">Количество товаров</label>
								<div>
									<button class="minus" :class="{ active: this.resultCount3 > 1 }"
										@click.prevent="this.resultCount3 > 1 ? this.resultCount3-- : this.resultCount3">-</button>
									<p id="count-result">{{  this.resultCount3  }}</p>
									<button class="plus" :class="{ active: this.resultCount3 < 10 }"
										@click.prevent="this.resultCount3 < 10 ? this.resultCount3++ : this.resultCount3">+</button>
								</div>
							</div>

							<div class="form-item city">
								<label for="city">Город получения</label>
								<v-select v-model="selectedCity3" label="label" @option:selected="citySelected3(this)" :options="cities"
									:autocomplete="'true'" :clearable=false>
								</v-select>
							</div>

							<div class="form-item link">
								<label for="link-3">Ссылка на товар</label>
								<input v-model="link3" type="text" id="link-3" placeholder="http://" />
							</div>

							<template v-if="this.isNotTile3 === true">
								<div class="form-item tile">
									<div :class="{ 'error': activeTileSizeIndex3 === -1 }">
										<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex3 === 1 }"
											@click="tile3sizeSelected(1)">R
											13-14</button>
										<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex3 === 2 }"
											@click="tile3sizeSelected(2)">R
											15-16</button>
										<button :disabled="isButtonSizeDisabled" :class="{ active: activeTileSizeIndex3 === 3 }"
											@click="tile3sizeSelected(3)">R
											17-18</button>
									</div>

									<div>
										<label>Количество шин</label>

										<div :class="{ 'error': activeTileCountIndex3 === -1 }">
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex3 === 1 }"
												@click="tile3countSelected(1)">1</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex3 === 2 }"
												@click="tile3countSelected(2)">2</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex3 === 3 }"
												@click="tile3countSelected(3)">3</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex3 === 4 }"
												@click="tile3countSelected(4)">4</button>
											<button :disabled="isButtonDisabled" :class="{ active: activeTileCountIndex3 === 5 }"
												@click="tile3countSelected(5)">5</button>
											<img src="@/assets/img/radio-info.png" alt="info" />
											<p>Воспользуйтесь акцией: перевозка каждой 4-й или 5-й шины в подарок!</p>
										</div>
									</div>
								</div>
							</template>

							<template v-if="this.form3calculated">
								<div class="form-item total-count">
									<label>Итоговая стоимость товара</label>
									<label :class="{ 'loaded': this.loading3 }">{{  this.price3rub * this.resultCount3  }} ₽</label>
								</div>
							</template>

							<template v-if="!this.form3calculated">
								<div class="form-item calculate">
									<button
										@click="this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3)">Рассчитать</button>
								</div>
							</template>

							<template v-else>
								<div class="form-item leave-request">
									<button :disabled="this.loading3" @click="showFinalForm()">Оставить заявку</button>
								</div>
							</template>
						</form>
					</template>
				</section>
			</template>

			<form v-if="finalForm === true" @change="this.checkFinalForm()" onsubmit="return false">
				<div class="form-item backToForm">
					<button @click="hideFinalForm()">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation"
							class="vs__open-indicator">
							<path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247
							0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7
							5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008
							1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
							</path>
						</svg>
						Информация о заказе
					</button>
				</div>
				<div class="form-item">
					<h3>Контактные данные</h3>
				</div>

				<div class="form-item name">
					<label for="name">ФИО</label>
					<input v-model="nameValue" type="text" id="name" :class="{ 'error': this.nameError }" placeholder="ФИО" />
				</div>

				<div class="form-item form-tel" :class="{ 'confirm': this.phoneConfirm }">
					<label for="form-tel">Телефон</label>
					<input v-model.trim="phoneValue" type="tel" id="form-tel" :class="{ 'error': this.phoneError }"
						placeholder="Номер телефона" />
				</div>

				<div class="form-item email">
					<label for="form-email">Email</label>
					<input v-model="emailValue" type="text" id="form-email" :class="{ 'error': this.emailError }"
						placeholder="example@gmail.com" />
				</div>

				<div class="form-item comment">
					<label for="form-comment">Комментарий</label>
					<textarea v-model="commentValue" id="form-comment" placeholder="Комментарий"></textarea>
				</div>

				<p>Отправляя заявку, Вы подтверждаете, что ознакомились и согласны с условиями
					<a href="/Правила_о_договоре_комиссии_на_приобритение_товара.pdf" download>Договора оферты</a>
				</p>

				<div class="form-item sendForm">
					<button id="send-form" @click="this.sendFinalForm()">Отправить заявку</button>
				</div>
			</form>
		</section>

		<section id="imgs">
			<img id="right-top--line" src="@/assets/img/right-top__line.png" alt="stupid-line" />
			<img id="left-top--line" src="@/assets/img/top-left__line.png" alt="stupid-line" />
			<img id="bottom-left--line" src="@/assets/img/bottom-left__line.png" alt="stupid-line" />
			<img id="bottom-right--line" src="@/assets/img/bottom-right__line.png" alt="stupid-line" />
		</section>
	</section>
</template>

<script>
import { VueAgile } from 'vue-agile';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import getCityFetch from './getCities';
import getTirePrice from './getTirePrice';
import getSizePrice from './getSizePrice';
import sendUserDataFetch from './sendUserDataFetch';
import sendFormDataFetch from './sendFormDataFetch';

import getCourse from './getCourse';

// eslint-disable-next-line no-useless-escape
const regMail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
const regPhone = /^\d{10}$/;
const regPhoneDone = /^((\+7|7|8)+([0-9]){10})$/;
// eslint-disable-next-line no-useless-escape
const regLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export default {
	components: {
		VueAgile,
		vSelect,
	},
	data() {
		return {
			myOptions: {
				navButtons: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 4000,
				timing: 'ease-in-out',
				speed: 400,
				infinite: true,
				responsive: [
					{
						breakpoint: 600,
					},

					{
						breakpoint: 900,
					},
				],
			},
			types: ['Мобильные телефоны', 'Планшеты', 'Компьютерная и оргтехника', 'Аудио техника',
				'Видео техника', 'Бытовая техника', 'Покрышки и шины', 'Косметика', 'Парфюмерия',
				'Бытовая химия', 'БАДы', 'Спортивное питание', 'Детские товары', 'Спорттовары',
				'Товары для животных', 'Мебель', 'Стройматериалы', 'Сантехника', 'Авто/Мототехника',
				'Автозапчасти', 'Автоаксессуары', 'Водные мотоциклы', 'Моторные катера/лодки',
				'Электрооборудование', 'Музыкальные инструменты', 'Другое'],
			typesWithZtt: ['Компьютерная и оргтехника', 'Аудио техника',
				'Видео техника', 'Бытовая техника', 'Детские товары', 'Спорттовары',
				'Товары для животных', 'Мебель', 'Стройматериалы', 'Сантехника', 'Авто/Мототехника',
				'Автозапчасти', 'Автоаксессуары', 'Водные мотоциклы', 'Моторные катера/лодки',
				'Электрооборудование', 'Музыкальные инструменты'],
			// "T001" - по умолчанию или "S089" - typesWithZtt
			cities: [],
			finalForm: false,
			course: 0,
			// course: 7.75,
			countOfForms: 1,
			selected: undefined,
			isButtonDisabled: false,
			loading1: false,
			loading2: false,
			loading3: false,

			form1calculated: false,
			type1: false,
			city1Code: undefined,
			city1longCode: undefined,
			showAddNew1: false,
			activeIndex1: -1,
			toggled1: false,
			opened1: false,
			isNotTile1: undefined,
			resultCount1: 1,
			activeTileSizeIndex1: -1,
			activeTileCountIndex1: -1,
			price1: false,
			price1rub: false,
			packSelectedValue1: '',
			ztt1: false,
			size1deliveryPrice: false,
			length1: false,
			width1: false,
			height1: false,
			weight1: false,
			count1: false,
			pack1error: true,

			form2calculated: false,
			type2: false,
			city2Code: undefined,
			city2longCode: undefined,
			showAddNew2: false,
			activeIndex2: -1,
			toggled2: false,
			opened2: false,
			isNotTile2: undefined,
			resultCount2: 1,
			activeTileSizeIndex2: -1,
			activeTileCountIndex2: -1,
			price2: false,
			price2rub: false,
			packSelectedValue2: '',
			ztt2: false,
			size2deliveryPrice: false,
			length2: false,
			width2: false,
			height2: false,
			weight2: false,
			count2: false,
			pack2error: true,

			form3calculated: false,
			type3: false,
			city3Code: undefined,
			city3longCode: undefined,
			showAddNew3: false,
			activeIndex3: -1,
			toggled3: false,
			opened3: false,
			isNotTile3: undefined,
			resultCount3: 1,
			activeTileSizeIndex3: -1,
			activeTileCountIndex3: -1,
			price3: false,
			price3rub: false,
			packSelectedValue3: '',
			ztt3: false,
			size3deliveryPrice: false,
			length3: false,
			width3: false,
			height3: false,
			weight3: false,
			count3: false,
			pack3error: true,

			// v-models
			link1: undefined,
			link2: undefined,
			link3: undefined,
			selectedCity1: undefined,
			selectedCity2: undefined,
			selectedCity3: undefined,

			// final form
			nameValue: undefined,
			phoneValue: undefined,
			emailValue: undefined,
			commentValue: undefined,

			nameError: undefined,
			phoneError: undefined,
			emailError: undefined,

			phoneConfirm: false,
		};
	},
	async mounted() {
		this.course = await getCourse();

		const getCitiesObject = await getCityFetch();
		// eslint-disable-next-line no-unused-vars
		for (let [code, city] of Object.entries(getCitiesObject)) {
			this.cities.push({
				label: city.name,
				id: city.id,
				code: city.tdd_city_code,
			});
		}
	},
	methods: {
		// eslint-disable-next-line consistent-return
		toggleTitle(num) {
			switch (num) {
				case 1:
					this.toggled1 = !this.toggled1;
					break;
				case 2:
					this.toggled2 = !this.toggled2;
					break;
				case 3:
					this.toggled3 = !this.toggled3;
					break;
				default:
					return false;
			}
		},
		async getTireDeliveryPrice(cityCode, count, size) {
			const res = await getTirePrice(cityCode, count, size);

			return res.price;
		},
		async useSizePrice(cityTo, height, width, length, countPlace, weight, ztt) {
			const res = await getSizePrice(cityTo, height, width, length, countPlace, weight, ztt);

			// eslint-disable-next-line dot-notation
			return res[0]['standart'].cost;
		},
		async sendUserData(name, phone, email, comment) {
			const res = await sendUserDataFetch(name, phone, email, comment);

			console.log('res is ', res);
		},
		async sendFormData() {
			const res = await sendFormDataFetch();

			console.log('res is ', res);
		},

		switchForm(index, el) {
			if (document.querySelector('#forms-titles>button.active')) {
				document.querySelector('#forms-titles>button.active').classList.remove('active');
			}
			el.classList.add('active');
			if (window.innerWidth > 1600) {
				document.querySelector('#forms-container').style.transform = `translate(-${600 * index}px)`;
			} else if (window.innerWidth > 1232) {
				document.querySelector('#forms-container').style.transform = `translate(-${480 * index}px)`;
			} else if (window.innerWidth > 576) {
				document.querySelector('#forms-container').style.transform = `translate(-${400 * index}px)`;
			} else {
				document.querySelector('#forms-container').style.transform = `translate(calc(-100% * ${index} - 80px * ${index}))`;
			}
		},
		colorForm(num) {
			setTimeout(() => {
				document.querySelector(`#forms-titles button:nth-child(${num})`).click();
			}, 50);

			return true;
		},
		addNewItem(num) {
			this.countOfForms++;
			this.colorForm(num);
		},
		showFinalForm() {
			this.finalForm = true;
		},
		hideFinalForm() {
			this.finalForm = false;
			this.colorForm(1);
		},
		// eslint-disable-next-line consistent-return
		async checkValidForm(num, type, city, isItTile) {
			let cost = document.querySelector(`#costs-${num}`);
			let link = document.querySelector(`#link-${num}`);

			if (cost.value) {
				if (cost.classList.contains('error')) {
					cost.classList.remove('error');
				}
			} else {
				cost.classList.add('error');
				this.$forceUpdate();
			}

			if (!type) {
				document.querySelector(`.form-${num}>.form-item>.form-mini-item:last-child>div`).classList.add('error');
			} else {
				// eslint-disable-next-line no-lonely-if
				if (document.querySelector(`.form-${num}>.form-item>.form-mini-item:last-child>div`).classList.contains('error')) {
					document.querySelector(`.form-${num}>.form-item>.form-mini-item:last-child>div`).classList.remove('error');
				}
			}

			if (regLink.test(link.value) === true) {
				if (link.classList.contains('error')) {
					link.classList.remove('error');
				}
			} else {
				link.classList.add('error');
			}

			if (!city) {
				document.querySelector(`.form-${num}>.form-item.city>div`).classList.add('error');
			} else {
				// eslint-disable-next-line no-lonely-if
				if (document.querySelector(`.form-${num}>.form-item.city>div`).classList.contains('error')) {
					document.querySelector(`.form-${num}>.form-item.city>div`).classList.remove('error');
				}
			}

			if (!isItTile) {
				if (type) {
					switch (num) {
						case 1:
							if (this.packSelectedValue1) {
								this.pack1error = false;
							} else {
								this.pack1error = true;

								return false;
							}
							this.$forceUpdate();
							break;
						case 2:
							if (this.packSelectedValue2) {
								this.pack2error = false;
							} else {
								this.pack2error = true;

								return false;
							}
							this.$forceUpdate();
							break;
						case 3:
							if (this.packSelectedValue3) {
								this.pack3error = false;
							} else {
								this.pack3error = true;

								return false;
							}
							this.$forceUpdate();
							break;
						default:
							return false;
					}
				}
			}

			switch (num) {
				case 1:
					if (cost.value && type && regLink.test(link.value) === true && city &&
						(this.activeTileSizeIndex1 !== -1 && this.activeTileCountIndex1 !== -1)) {
						this.loading1 = true;
						await this.getTireDeliveryPrice(
							this.city1Code, this.activeTileCountIndex1, this.activeTileSizeIndex1)
							.then((res) => {
								this.form1price();
								this.price1rub += res;
								this.isButtonSizeDisabled = false;
								this.isButtonDisabled = false;
								this.loading1 = false;
							});

						break;
					} else if (cost.value && type && regLink.test(link.value) === true && city && this.packSelectedValue1) {
						switch (this.packSelectedValue1) {
							case 'Посылка XS, 1 кг':
								this.form1price();
								this.price1rub += 400;
								this.loading1 = false;
								break;
							case 'Посылка S, 3 кг':
								this.form1price();
								this.price1rub += 500;
								this.loading1 = false;
								break;
							case 'Посылка М, 6 кг':
								this.form1price();
								this.price1rub += 600;
								this.loading1 = false;
								break;
							case 'Посылка L, 12 кг':
								this.form1price();
								this.price1rub += 700;
								this.loading1 = false;
								break;
							default:
								if (this.city1longCode && this.height1 && this.width1 && this.length1 &&
									this.count1 && this.weight1) {
									this.loading1 = true;
									await this.useSizePrice(this.city1longCode, this.height1, this.width1, this.length1,
										this.count1, this.weight1, this.ztt1)
										.then((res) => {
											this.form1price();
											this.price1rub += res;
											this.loading1 = false;
										});
								}
						}
						break;
					}
					this.$forceUpdate();
					break;
				case 2:
					if (cost.value && type && regLink.test(link.value) === true && city &&
						(this.activeTileSizeIndex2 !== -1 && this.activeTileCountIndex2 !== -1)) {
						this.loading2 = true;
						await this.getTireDeliveryPrice(
							this.city2Code, this.activeTileCountIndex2, this.activeTileSizeIndex2)
							.then((res) => {
								this.form2price();
								this.price2rub += res;
								this.isButtonSizeDisabled = false;
								this.isButtonDisabled = false;
								this.loading2 = false;
							});

						break;
					} else if (cost.value && type && regLink.test(link.value) === true && city && this.packSelectedValue2) {
						switch (this.packSelectedValue2) {
							case 'Посылка XS, 1 кг':
								this.form2price();
								this.price2rub += 400;
								this.loading2 = false;
								break;
							case 'Посылка S, 3 кг':
								this.form2price();
								this.price2rub += 500;
								this.loading2 = false;
								break;
							case 'Посылка М, 6 кг':
								this.form2price();
								this.price2rub += 600;
								this.loading2 = false;
								break;
							case 'Посылка L, 12 кг':
								this.form2price();
								this.price2rub += 700;
								this.loading2 = false;
								break;
							default:
								if (this.city2longCode && this.height2 && this.width2 && this.length2 &&
									this.count2 && this.weight2) {
									this.loading2 = true;
									await this.useSizePrice(this.city2longCode, this.height2, this.width2, this.length2,
										this.count2, this.weight2, this.ztt2)
										.then((res) => {
											this.form2price();
											this.price2rub += res;
											this.loading2 = false;
										});
								}
						}
						break;
					}
					this.$forceUpdate();
					break;
				case 3:
					if (cost.value && type && regLink.test(link.value) === true && city &&
						(this.activeTileSizeIndex3 !== -1 && this.activeTileCountIndex3 !== -1)) {
						this.loading3 = true;
						await this.getTireDeliveryPrice(
							this.city3Code, this.activeTileCountIndex3, this.activeTileSizeIndex3)
							.then((res) => {
								this.form3price();
								this.price3rub += res;
								this.isButtonSizeDisabled = false;
								this.isButtonDisabled = false;
								this.loading3 = false;
							});

						break;
					} else if (cost.value && type && regLink.test(link.value) === true && city && this.packSelectedValue3) {
						switch (this.packSelectedValue3) {
							case 'Посылка XS, 1 кг':
								this.form3price();
								this.price3rub += 400;
								this.loading3 = false;
								break;
							case 'Посылка S, 3 кг':
								this.form3price();
								this.price3rub += 500;
								this.loading3 = false;
								break;
							case 'Посылка М, 6 кг':
								this.form3price();
								this.price3rub += 600;
								this.loading3 = false;
								break;
							case 'Посылка L, 12 кг':
								this.form3price();
								this.price3rub += 700;
								this.loading3 = false;
								break;
							default:
								if (this.city3longCode && this.height3 && this.width3 && this.length3 &&
									this.count3 && this.weight3) {
									this.loading3 = true;
									await this.useSizePrice(this.city3longCode, this.height3, this.width3, this.length3,
										this.count3, this.weight3, this.ztt3)
										.then((res) => {
											this.form3price();
											this.price3rub += res;
											this.loading3 = false;
										});
								}
						}
						break;
					}
					this.$forceUpdate();
					break;
				default:
					return false;
			}
		},
		checkFinalForm() {
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
		sendFinalForm() {
			if (this.checkFinalForm()) {
				this.sendUserData(this.nameValue, this.phoneValue, this.emailValue, this.commentValue);
				this.sendFormData();
			}

			return false;
		},

		form1price() {
			this.price1rub = this.price1 / this.course;
			this.price1rub *= 1.002;
			this.price1rub = Math.ceil(this.price1rub);

			let count = 1000;
			// до 25 000 руб. - 25 %, до 50 000 руб. - 20 %, свыше 50 000 - 15 %., но не менее 1000 руб.
			if (this.price1rub <= 25000) {
				if (count > 1000) {
					count = this.price1rub / 4; // 25%
				}
			} else if (this.price1rub > 25000 && this.price1rub <= 50000) {
				count = this.price1rub / 5; // 20%
			} else {
				count = this.price1rub / 20 * 3; // 15%
			}

			this.price1rub += count;
			this.price1rub = Math.ceil(this.price1rub);

			this.showAddNew1 = true;
			this.form1calculated = true;
		},
		form2price() {
			this.price2rub = this.price2 / this.course;
			this.price2rub *= 1.002;
			this.price2rub = Math.ceil(this.price2rub);

			let count = 1000;
			// до 25 000 руб. - 25 %, до 50 000 руб. - 20 %, свыше 50 000 - 15 %., но не менее 1000 руб.
			if (this.price2rub <= 25000) {
				if (count > 1000) {
					count = this.price2rub / 4; // 25%
				}
			} else if (this.price2rub > 25000 && this.price2rub <= 50000) {
				count = this.price2rub / 5; // 20%
			} else {
				count = this.price2rub / 20 * 3; // 15%
			}

			this.price2rub += count;
			this.price2rub = Math.ceil(this.price2rub);

			this.showAddNew2 = true;
			this.form2calculated = true;
		},
		form3price() {
			this.price3rub = this.price3 / this.course;
			this.price3rub *= 1.002;
			this.price3rub = Math.ceil(this.price3rub);

			let count = 1000;
			// до 25 000 руб. - 25 %, до 50 000 руб. - 20 %, свыше 50 000 - 15 %., но не менее 1000 руб.
			if (this.price3rub <= 25000) {
				if (count > 1000) {
					count = this.price3rub / 4; // 25%
				}
			} else if (this.price3rub > 25000 && this.price3rub <= 50000) {
				count = this.price3rub / 5; // 20%
			} else {
				count = this.price3rub / 20 * 3; // 15%
			}

			this.price3rub += count;
			this.price3rub = Math.ceil(this.price3rub);

			this.form3calculated = true;
		},
		// eslint-disable-next-line consistent-return
		doesItNeedZtt(category, formNum) {
			switch (formNum) {
				case 1:
					if (this.typesWithZtt.indexOf(category) !== -1) {
						this.ztt1 = true;
					} else {
						this.ztt1 = false;
					}
					break;
				case 2:
					if (this.typesWithZtt.indexOf(category) !== -1) {
						this.ztt2 = true;
					} else {
						this.ztt2 = false;
					}
					break;
				case 3:
					if (this.typesWithZtt.indexOf(category) !== -1) {
						this.ztt3 = true;
					} else {
						this.ztt3 = false;
					}
					break;
				default:
					return false;
			}
		},
		tileSelected1(type, formNum) {
			this.type1 = type.selected;
			this.loading1 = true;
			this.price1rub = undefined;
			if (type.selected === 'Покрышки и шины') {
				this.isNotTile1 = true;
			} else {
				this.isNotTile1 = false;
			}
			this.doesItNeedZtt(type.selected, formNum);
			this.activeTileSizeIndex1 = -1;
			this.activeTileCountIndex1 = -1;
			this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1);
		},
		tile1sizeSelected(index) {
			this.isButtonSizeDisabled = true;
			this.activeTileSizeIndex1 = index;
			this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1);
		},
		tile1countSelected(index) {
			this.isButtonDisabled = true;
			this.activeTileCountIndex1 = index;
			this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1);
		},
		citySelected1(city) {
			this.city1Code = city.selectedCity1.id;
			this.city1longCode = city.selectedCity1.code;
			this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1);
		},
		packSelected1(index, el) {
			this.activeIndex1 = index;
			this.pack1error = false;
			if (el.classList.contains('pack-item')) {
				this.packSelectedValue1 = el.querySelector('h5').innerText;
			} else {
				let closest = el.closest('.pack-item');
				let text = closest.querySelector('h5').innerText;
				this.packSelectedValue1 = text;
			}

			this.opened1 = false;
			this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1);

			this.$forceUpdate();
		},
		showPackage1(e) {
			const packageNode = document.querySelector('.package-1');
			const packageBlock = document.querySelector('.package-block-1');
			let target = e.target;
			try {
				let itsPackage = target === packageNode || packageNode.contains(target);
				let itsPackageBlock = target === packageBlock || packageBlock.contains(target);

				if (!itsPackage && !itsPackageBlock) {
					this.opened1 = false;
				}
			} catch (err) {
				console.error = null;
			}
		},
		useSize1() {
			if (this.length1 && this.width1 && this.height1 && this.weight1 && this.count1) {
				this.packSelectedValue1 = 'Точный размер';
				this.pack1error = false;
				this.opened1 = false;
				this.activeIndex1 = -1;
			} else {
				this.pack1error = true;
			}

			this.checkValidForm(1, this.type1, this.city1Code, this.isNotTile1);

			this.$forceUpdate();
		},

		tileSelected2(type, formNum) {
			this.type2 = type.selected;
			this.loading2 = true;
			this.price2rub = undefined;
			if (type.selected2 === 'Покрышки и шины') {
				this.isNotTile2 = true;
			} else {
				this.isNotTile2 = false;
			}
			this.doesItNeedZtt(type.selected, formNum);
			this.activeTileSizeIndex2 = -1;
			this.activeTileCountIndex2 = -1;
			this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2);
		},
		tile2sizeSelected(index) {
			this.isButtonSizeDisabled = true;
			this.activeTileSizeIndex2 = index;
			this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2);
		},
		tile2countSelected(index) {
			this.isButtonDisabled = true;
			this.activeTileCountIndex2 = index;
			this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2);
		},
		citySelected2(city) {
			this.city2Code = city.selectedCity2.id;
			this.city2longCode = city.selectedCity2.code;
			this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2);
		},
		packSelected2(index, el) {
			this.activeIndex2 = index;
			this.pack2error = false;

			if (el.classList.contains('pack-item')) {
				this.packSelectedValue2 = el.querySelector('h5').innerText;
			} else {
				let closest = el.closest('.pack-item');
				let text = closest.querySelector('h5').innerText;
				this.packSelectedValue2 = text;
			}

			this.opened2 = false;
			this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2);

			this.$forceUpdate();
		},
		showPackage2(e) {
			const packageNode = document.querySelector('.package-2');
			const packageBlock = document.querySelector('.package-block-2');
			let target = e.target;
			try {
				let itsPackage = target === packageNode || packageNode.contains(target);
				let itsPackageBlock = target === packageBlock || packageBlock.contains(target);

				if (!itsPackage && !itsPackageBlock) {
					this.opened2 = false;
				}
			} catch (err) {
				console.error = null;
			}
		},
		useSize2() {
			if (this.length2 && this.width2 && this.height2 && this.weight2 && this.count2) {
				this.packSelectedValue2 = 'Точный размер';
				this.pack2error = false;
				this.opened2 = false;
				this.activeIndex2 = -1;
			} else {
				this.pack2error = true;
			}

			this.checkValidForm(2, this.type2, this.city2Code, this.isNotTile2);

			this.$forceUpdate();
		},

		tileSelected3(type, formNum) {
			this.type3 = type.selected;
			this.loading3 = true;
			this.price3rub = undefined;
			if (type.selected3 === 'Покрышки и шины') {
				this.isNotTile3 = true;
			} else {
				this.isNotTile3 = false;
			}
			this.doesItNeedZtt(type.selected, formNum);
			this.activeTileSizeIndex3 = -1;
			this.activeTileCountIndex3 = -1;
			this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3);
		},
		tile3sizeSelected(index) {
			this.isButtonSizeDisabled = true;
			this.activeTileSizeIndex3 = index;
			this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3);
		},
		tile3countSelected(index) {
			this.isButtonDisabled = true;
			this.activeTileCountIndex3 = index;
			this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3);
		},
		citySelected3(city) {
			this.city3Code = city.selectedCity3.id;
			this.city3longCode = city.selectedCity3.code;
			this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3);
		},
		packSelected3(index, el) {
			this.activeIndex3 = index;
			this.pack3error = false;

			if (el.classList.contains('pack-item')) {
				this.packSelectedValue3 = el.querySelector('h5').innerText;
			} else {
				let closest = el.closest('.pack-item');
				let text = closest.querySelector('h5').innerText;
				this.packSelectedValue3 = text;
			}

			this.opened3 = false;
			this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3);

			this.$forceUpdate();
		},
		showPackage3(e) {
			const packageNode = document.querySelector('.package-3');
			const packageBlock = document.querySelector('.package-block-3');
			let target = e.target;
			try {
				let itsPackage = target === packageNode || packageNode.contains(target);
				let itsPackageBlock = target === packageBlock || packageBlock.contains(target);

				if (!itsPackage && !itsPackageBlock) {
					this.opened3 = false;
				}
			} catch (err) {
				console.error = null;
			}
		},
		useSize3() {
			if (this.length3 && this.width3 && this.height3 && this.weight3 && this.count3) {
				this.packSelectedValue3 = 'Точный размер';
				this.pack3error = false;
				this.opened3 = false;
				this.activeIndex3 = -1;
			} else {
				this.pack3error = true;
			}

			this.checkValidForm(3, this.type3, this.city3Code, this.isNotTile3);

			this.$forceUpdate();
		},
	},
};
</script>

<style scoped lang="scss">
@keyframes spinner-border {
	100% {
		transform: rotate(360deg);
	}
}

.form-item.total-count>label:nth-child(2) {
	&.loaded {
		color: transparent;
		display: inline-block;
		width: 1rem;
		height: 1rem;
		vertical-align: -0.125em;
		border: 0.2em solid #4EBFF3;
		border-right-color: transparent;
		border-radius: 50%;
		-webkit-animation: .75s linear infinite spinner-border;
		animation: .75s linear infinite spinner-border;
	}
}

.form-item.form-tel:not(.confirm) {

	&:focus,
	&:focus-visible,
	&:focus-within {
		#form-tel {
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

#right-top--line {
	position: absolute;
	top: 0;
	right: 0;
}

#left-top--line {
	position: absolute;
	top: 0;
	left: 0;
}

#bottom-left--line {
	position: absolute;
	bottom: 0;
	left: 0;
}

#bottom-right--line {
	position: absolute;
	bottom: 0;
	right: 0;
}

#forms {
	position: relative;
	overflow: hidden;
	padding: var(--grid-form-gap);
	background: #fff;
	box-shadow: 0px 4px 25px 3px rgb(0 0 0 / 7%);
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	width: 100%;
	z-index: 5;

	&-titles {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		overflow-x: auto;
		scrollbar-color: rgba(43, 169, 230, 0.4) #fff;
		padding-bottom: 5px;

		&::-webkit-scrollbar {
			height: 4px;
			border-radius: 5px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(43, 169, 230, 0.4);
			height: 4px;
			border-radius: 5px;
		}

		button {
			padding: 12px 16px;
			color: #000;
			background: #fff;
			border-radius: 45px;
			flex-shrink: 0;
			border: 1px solid rgba(153, 153, 153, 0.4);
			transition: 0.15s;

			&.active {
				transition: 0.3s;
				color: #fff;
				background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);
				border: 1px solid transparent;
			}

			&:not(:first-child) {
				margin-left: 8px;
			}
		}
	}

	&-container {
		transition: 0.3s;
		position: relative;
		display: inline-flex;
	}
}

.minus,
.plus {
	font-size: 22px;
	font-weight: 500;

	&:not(.active) {
		cursor: not-allowed;
	}
}

.titles {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background: #FFFFFF;
	height: 46px;
	border-left: 1px solid rgba(0, 0, 0, 0.07);
	border-right: 1px solid rgba(0, 0, 0, 0.07);
}

.pack,
.size {
	background: #fff;
	border: 1px solid rgba(0, 0, 0, 0.07);
	height: fit-content;
	scrollbar-width: thin;
	scrollbar-color: rgba(43, 169, 230, 0.4) #fff;
	height: 270px;
	margin-bottom: 40px;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 4px;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(43, 169, 230, 0.4);
		width: 4px;
		border-radius: 5px;
	}
}

input[disabled] {
	filter: opacity(0.5);
	pointer-events: none;
}

.size {
	&>div:nth-child(1) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 24px;
		padding: 16px 40px 0;
	}

	&>div:nth-child(2) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 24px;
		padding: 0 40px;
		margin-top: 24px;
	}

	&>div:nth-child(3) {
		display: flex;
		flex-direction: row-reverse;
		justify-content: left;
		align-items: center;
		padding: 0 40px;
		margin-top: 24px;
		width: 100%;

		input {
			order: 1;
			height: 24px;
			width: 24px;
			margin-top: 0;
		}

		label {
			margin-bottom: 0;
			margin-left: 8px;
		}
	}

	&-item {
		label {
			margin-bottom: 8px;
		}
	}

	&>div:last-child {
		padding: 0 40px 40px;
	}
}

.pack-item {
	position: relative;
	padding: 16px 40px;
	transition: 0.15s;
	z-index: 10;

	img {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 100px;
		width: 100px;
	}

	h5,
	h6,
	p {
		max-width: 230px;
		z-index: -1;
	}

	h5 {
		color: #000;
		font-size: 14px;
	}

	h6 {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.8);
	}

	p {
		font-size: 10px;
		color: rgba(0, 0, 0, 0.6);
	}

	&:hover,
	&.active {
		transition: 0.3s;
		background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);

		h5 {
			color: #fff;
		}

		h6 {
			color: rgba(255, 255, 255, 0.8);
		}

		p {
			color: rgba(255, 255, 255, 0.6);
		}
	}

	&.active {
		&>.notRadio {
			span {
				opacity: 1;
				visibility: visible;
				transition: 0.2s;
			}
		}
	}

	.notRadio {
		position: absolute;
		top: 16px;
		right: 40px;
	}
}

.title {
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	line-height: 1;
	padding: 12px;
	border-bottom: 1px solid transparent;

	&.active {
		transition: 0.2s;
		color: #2BA9E6;
		border-bottom: 1px solid #2BA9E6;
	}
}

#banner {
	position: relative;
	width: 100%;
	background: #4EBFF3;
	border-radius: 30px;
	padding: 80px;
	display: grid;
	grid-template-columns: repeat(2, 600px);
	grid-column-gap: 80px;
}

#useSize,
#useSize-2,
#useSize-3 {
	margin-top: 16px;
	width: 100%;

	display: flex;
	justify-content: center;
	text-align: center;

	font-size: 14px;
	padding: 16px 0;
	background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);
	border-radius: 10px;
	color: #FFFFFF;
}

.package {
	position: relative;
	order: 2;
	border: 1px solid rgba(153, 153, 153, 0.4);
	border-radius: 10px;
	height: 46px;
	padding: 0 16px;
	cursor: pointer;
	margin-top: 8px;

	&>span {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding: 13px 30px 12px 16px;
		border-radius: 10px;
		height: 46px;
	}

	svg {
		position: absolute;
		right: 16px;
		top: 20px;
		transition: 0.3s;
	}

	&.active {
		svg {
			transform: rotate(180deg);
			transition: 0.3s;
		}
	}

	&-items {
		width: 200%;
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(2, 50%);
		transition: 0.3s;

		&.toggled {
			transition: 0.3s;
			transform: translateX(-50%);
		}
	}

	&-block {
		position: absolute;
		top: 46px;
		left: 0;
		right: 0;

		z-index: 8;
		background: transparent;

		overflow: hidden;
		object-fit: cover;
	}
}

h2 {
	font-weight: 500;
	font-size: 48px;
}

.form {
	width: 100%;
	height: 100%;
	flex-shrink: 0;

	&:not(:first-child) {
		margin-left: calc(var(--grid-form-gap) * 2);
	}

	&-item {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 24px;

		label,
		input,
		select,
		textarea {
			width: 100%;
		}

		label {
			font-size: 16px;
		}

		input,
		select,
		textarea {
			order: 2;
			border: 1px solid rgba(153, 153, 153, 0.4);
			border-radius: 10px;
			height: 46px;
			padding: 0 16px;
			margin-top: 8px;

			&:focus-visible {
				outline: none;
			}

			&.error {
				transition: 0.05s;
				border: 2px solid red;
			}
		}

		textarea {
			height: 90px;
			padding: 12px 16px;
			resize: none;
		}

		&:first-of-type {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 24px;
		}

		&.calculate,
		&.leave-request,
		&.sendForm {
			margin-top: 32px;

			button {
				padding: 12px 16px;
				color: #fff;
				background: linear-gradient(91.76deg, #F15EBB 1.86%, #F05DB9 68.65%);
				border-radius: 10px;

				&:not(:first-child) {
					margin-left: 8px;
				}
			}
		}

		&:nth-of-type(1) {
			div {
				order: 2;
				z-index: 3;
			}

			label {
				order: 1;
			}
		}

		&.backToForm {
			padding: 12px 16px;
			height: 46px;
			background: #FFFFFF;
			box-shadow: 0px 4px 25px 3px rgba(0, 0, 0, 0.07);
			border-radius: 10px;

			button {
				display: inline-flex;
				align-items: center;
				justify-content: left;
				font-size: 18px;

				svg {
					transform: rotate(90deg);
					margin-right: 8px;
				}
			}
		}

		&.addNew {
			button {
				background: #2BA9E6;
				font-size: 16px;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
			}
		}

		&.count {
			display: none;

			&>div {
				display: inline-flex;
				align-items: center;
				margin-top: 8px;

				p {
					width: 50px;
					text-align: center;
					font-size: 17px;
					font-weight: 500;
					line-height: 1;
				}
			}

			&.active {
				display: flex;
			}
		}

		&.tile {
			&>div {
				&:nth-child(1) {
					display: inline-flex;
					border: 2px solid transparent;
					border-radius: 10px;

					&.error {
						border: 2px solid red;
						transition: 0.05s;
					}

					button {
						padding: 12px 16px;
						color: #000;
						box-shadow: 0px 4px 25px 3px rgba(0, 0, 0, 0.07);
						border-radius: 10px;
						background: #fff;

						&.active {
							background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);
							color: #fff;
						}

						&:not(:first-child) {
							margin-left: 8px;
						}
					}
				}

				&:nth-child(2) {
					position: relative;
					margin-top: 24px;

					&>div {
						position: relative;
						margin-top: 8px;
						border: 2px solid transparent;

						&.error {
							border: 2px solid red;
							transition: 0.05s;
						}
					}

					button {
						position: relative;
						width: 46px;
						height: 46px;
						display: inline-flex;
						align-items: center;
						justify-content: center;
						color: #000;
						box-shadow: 0px 4px 25px 3px rgba(0, 0, 0, 0.07);
						border-radius: 50%;
						background: #fff;

						&:not(:first-child) {
							margin-left: 16px;
						}

						&.active {
							background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);
							color: #fff;
						}

						&:nth-child(4),
						&:nth-child(5) {
							&::before {
								content: url('@/assets/img/Gift.png');
								position: absolute;
								top: -33px;
								left: 50%;
								transform: translateX(-50%);
								pointer-events: none;
							}
						}
					}

					img {
						pointer-events: initial;
						cursor: pointer;
						position: relative;
						width: 16px;
						height: 16px;
						margin: 0 0 0 8px;
						display: inline-flex;
						padding: 0;

						&:hover~p {
							opacity: 1;
							visibility: visible;
							transition: 0.15s;
						}
					}

					p {
						width: 100%;
						position: absolute;
						top: -50px;
						background: #FFFFFF;
						padding: 10px;
						box-shadow: 0px 4px 25px 3px rgba(0, 0, 0, 0.07);
						border-radius: 10px;
						z-index: 5;
						opacity: 0;
						visibility: hidden;
						transition: 0.05s;
					}
				}
			}
		}

		&.total-count {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			label {
				position: relative;
				width: fit-content;
			}
		}
	}

	&-mini-item {
		display: flex;
		flex-direction: column;
	}
}

.notRadio {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: 24px;
	height: 24px;
	border: 1px solid #2BA9E6;
	border-radius: 100%;
	background: #FFFFFF;
	box-shadow: 0px 4px 25px 3px rgba(0, 0, 0, 0.07);
	cursor: pointer;
	user-select: none;

	span {
		width: 16px;
		height: 16px;
		border-radius: 100%;
		opacity: 0;
		visibility: hidden;
		background: linear-gradient(91.76deg, #2BA9E6 0%, #70D4FF 100%);
		transition: 0.1s;
	}

	&.active {
		span {
			opacity: 1;
			visibility: visible;
			transition: 0.2s;
		}
	}
}

@media (max-width: 1600px) {
	#banner {
		grid-template-columns: repeat(2, 480px);
	}

	.pack-item img {
		right: 53px;
		width: 74px;
	}

	.size>div:nth-child(2) {
		grid-template-columns: 100%;
		grid-template-rows: repeat(3, auto);
		grid-column-gap: 0;
		grid-row-gap: 24px;
	}
}

@media (max-width: 1232px) {
	#banner {
		grid-template-columns: calc(100% - 400px - 80px) 400px;
		padding: 30px;
	}

	#forms {
		width: 400px;
	}

	.form-item:first-of-type,
	.size>div:nth-child(1) {
		grid-template-columns: 100%;
		grid-column-gap: 0;
		grid-template-rows: repeat(2, 1fr);
		grid-row-gap: 24px;
	}

	.size>div:nth-child(n) {
		padding: 0 16px;
	}

	.size>div:nth-child(3) {
		margin-bottom: 16px;
	}

	.pack-item {
		padding: 16px;

		img {
			right: 5px;
		}
	}
}

@media (max-width: 992px) {
	#banner {
		grid-template-columns: 100%;
		grid-column-gap: 0;
		grid-template-rows: repeat(2, auto);
		grid-row-gap: 50px;
	}

	#forms {
		margin: 0 auto;
		border-radius: 10px;
		grid-row: 2;
	}

	#imgs {
		grid-row: 2;
	}

	#forms-titles {
		margin-bottom: 16px;
	}

	.form-item:first-child {
		margin-top: 0;
	}

	.form-item:not(:first-child) {
		margin-top: 16px;
	}

	.form-item:first-of-type,
	.size>div:nth-child(1) {
		grid-row-gap: 16px;
	}
}

@media (max-width: 576px) {
	#banner {
		padding: 8px;
		border-radius: 10px;
	}

	#forms {
		width: 100%;
		padding: 16px 8px;
	}

	.form-item.total-count {
		label:nth-child(2) {
			flex-shrink: 0;
			white-space: nowrap;
		}
	}

	.pack-item h5,
	.pack-item h6,
	.pack-item p {
		max-width: calc(100% - 80px);
	}
}
</style>

<style lang="scss">
:root {
	--grid-form-gap: 40px;
}

.agile {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.agile__list {
	max-width: 600px;
}

.agile__slide {
	width: 100%;
	height: 100%;
	cursor: grab;
}

.agile__slide h2,
.agile__slide p {
	max-width: 600px;
	color: #fff;
	user-select: none;
}

.agile__slide p {
	margin-top: 10px;
}

.agile--no-nav-buttons .agile__actions {
	justify-content: left;
}

.agile__dot {
	width: 12px;
	height: 12px;
	background: rgba(255, 255, 255, 0.4);
	border-radius: 50%;
	transition: 0.1s;
}

.agile__dot--current {
	width: 30px;
	height: 12px;

	background: #FFFFFF;
	border-radius: 45px;
	transition: 0.3s;
}

.agile__dot:not(:first-child) {
	margin-left: 8px;
}

.agile__actions {
	justify-content: left;
	margin-top: 30px;
	height: 30px;
}

.v-select {
	order: 2;
	border-radius: 10px;
	height: 46px;
	margin-top: 8px;
	border: 1px solid rgba(153, 153, 153, 0.4);
}

.error {
	transition: 0.05s;
	border: 2px solid red;
}

.vs__selected {
	margin: 0;
}

.vs__dropdown-toggle {
	padding: 0;
	border-radius: 10px;
	border: none;
}

.vs__actions {
	padding-right: 16px;
}

.vs__selected-options {
	padding: 0 0 0 16px;
	height: 44px;
}

.vs__dropdown-menu {
	scrollbar-width: thin;
	scrollbar-color: rgba(43, 169, 230, 0.4) #fff;
	max-height: 250px !important;
	z-index: 2000;

	&::-webkit-scrollbar {
		width: 4px;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(43, 169, 230, 0.4);
		width: 4px;
		border-radius: 5px;
	}

	&>li {
		padding: 12px 16px;

		&:hover {
			background: rgba(43, 169, 230, 0.1);
			color: #000;
		}
	}
}

.vs__open-indicator {
	fill: #2BA9E6;
}

.vs--single.vs--open .vs__selected {
	display: none;
}

@media (max-width: 1600px) {

	.agile__slide h2,
	.agile__slide p {
		max-width: 480px;
	}
}

@media (max-width: 1232px) {

	.agile__slide h2,
	.agile__slide p {
		max-width: 100%;
	}
}

@media (max-width: 992px) {

	.agile__slide h2 {
		font-size: 20px;
	}

	.agile__slide p {
		font-size: 14px;
	}

	.agile--no-nav-buttons .agile__actions {
		justify-content: center;
	}
}
</style>
