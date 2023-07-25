o2.slider =
{
	
o2.slider =

{
	next(btn)
	{
		const sliderBlock = btn.parentNode;
		const sliderVision = sliderBlock.querySelector('.slider__visible');
		const sliderItem = sliderBlock.querySelectorAll('.slider__item');
		const sliderBox = sliderBlock.querySelector('.slider__box');
		const widthItem = sliderItem[0].offsetWidth;
		let currentTranslation = parseInt(sliderVision.dataset.translation || 0);
		const vusionBlock = parseInt(sliderVision.dataset.visionbloc)
		//сколько слайдов перелистывается за один клик
		const shag = 2;
		const itog = vusionBlock + shag;
		currentTranslation -= Math.round(widthItem * shag);
		sliderVision.style.transform = `translateX(${currentTranslation}px)`;
		sliderVision.dataset.translation = currentTranslation;
		if ( currentTranslation < -widthItem * (sliderItem.length-itog))
		{
			sliderVision.style.transform = `translateX(-${widthItem * (sliderItem.length-itog)})`;
			sliderVision.dataset.translation = -widthItem * (sliderItem.length-itog);
		}

	},

	prev(btn)
	{
		const sliderBlock = btn.parentNode;
		const sliderVision = sliderBlock.querySelector('.slider__visible');
		const sliderItem = sliderBlock.querySelectorAll('.slider__item');
		const sliderBox = sliderBlock.querySelector('.slider__box');
		const widthItem = sliderItem[0].offsetWidth;
		let currentTranslation = parseInt(sliderVision.dataset.translation || 0);
		//сколько слайдов перелистывается за один клик
		const shag = 2;
		currentTranslation += Math.round(widthItem * shag);

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
		const sliderItem = [...document.querySelectorAll('.slider__item')];
		const sliderBox = document.querySelector('.slider__box')
		let widthItem = sliderItem[0].offsetWidth;
		// ниже указать сколько слайдов будет видимым
		sliderVision.dataset.visionbloc = 5;
		sliderItem.forEach(el =>
		{
			el.style.width = sliderBox.offsetWidth/sliderVision.dataset.visionbloc +'px';
		})
		sliderItem[0].style.width = sliderBox.offsetWidth/sliderVision.dataset.visionbloc ;
		sliderVision.style.width = 100/sliderVision.dataset.visionbloc * sliderItem.length + '%';
	}

}


// настройки слика
//тут указать класс $('.slider').slick({
// Бесконечный ли слайдер  infinite: false,
// Сколько слайдев показать  slidesToShow: 4,
// Сколько слайдов перелистывать slidesToScroll: 2
// });