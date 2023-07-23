o2.dz =
{
	next(btn) {
	const sliderBlock = btn.parentNode;
	const sliderVision = sliderBlock.querySelector('.slider__visible');
	const sliderItem = sliderBlock.querySelectorAll('.slider__item');
	const sliderBox = sliderBlock.querySelector('.slider__box');
	const widthItem = sliderItem[0].offsetWidth;
	let currentTranslation = parseInt(sliderVision.dataset.translation || 0);
	//  количество шагов ф
	currentTranslation -= Math.round(widthItem * 2);
	sliderVision.style.transform = `translateX(${currentTranslation}px)`;
	sliderVision.dataset.translation = currentTranslation;
	if ( currentTranslation < -widthItem * (sliderItem.length-6))
	{
		console.log(1)
		sliderVision.style.transform = `translateX(-${widthItem * (sliderItem.length-6)})`;
		sliderVision.dataset.translation = -widthItem * (sliderItem.length-6);
	}

},

prev(btn) {
	const sliderBlock = btn.parentNode;
	const sliderVision = sliderBlock.querySelector('.slider__visible');
	const sliderItem = sliderBlock.querySelectorAll('.slider__item');
	const sliderBox = sliderBlock.querySelector('.slider__box');
	const widthItem = sliderItem[0].offsetWidth;
	let currentTranslation = parseInt(sliderVision.dataset.translation || 0);
	console.log(sliderVision.dataset.shag)
	// Количество шагов
	currentTranslation += Math.round(widthItem * 2);

	if (currentTranslation <= 0)
	{
		sliderVision.style.transform = `translateX(${currentTranslation}px)`;
		sliderVision.dataset.translation = currentTranslation;
	}
	else
	{
		sliderVision.style.transform = `translateX(0px)`;
		sliderVision.dataset.translation = 0;
	}

	},
	create()
	{
		const sliderVision = document.querySelector('.slider__visible');
		const sliderItem = document.querySelectorAll('.slider__item');
		// слайдер подхватит ширину в зависимости от кол-ва слайдов
		sliderVision.dataset.shag = 4;
		sliderVision.style.width = 100/sliderVision.dataset.shag * sliderItem.length + '%';
	}

}


// настройки слика
//тут указать класс $('.slider').slick({
// Бесконечный ли слайдер  infinite: false,
// Сколько слайдев показать  slidesToShow: 4,
// Сколько слайдов перелистывать slidesToScroll: 2
// });
