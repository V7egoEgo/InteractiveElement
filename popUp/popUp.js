import { event } from "jquery"

o2.popUp =
{
	closerPopup(event)
	{
		const popUp = event.target.closest('.pop-up');
		const box = popUp.querySelector('.pop-up__box');
		box.classList.add('_pop-up__none');
	},
	openPopup(event)
	{
		const popUp = event.target.closest('.pop-up');
		const box = popUp.querySelector('.pop-up__box');
		box.classList.remove('_pop-up__none');
		const boxItems = [...box.querySelectorAll('.pop-up__item-box')];
		const summText = box.querySelector('._summ');
		const countProduct = box.querySelector('._count-product');
		const priceMap = boxItems.map(el=>
			{
				const counter = el.querySelector('._count').textContent;
				const priceText = el.querySelector('._price').textContent;
				const price = parseInt(priceText, 10);
				if (counter == 0){el.classList.add('_pop-up__item-hiden')}
				let summ =+ price *counter;
				return summ;
			})
		const countMap = boxItems.map(el =>
			{
				const counter = el.querySelector('._count').textContent;
				let summ =+ counter;
				return summ;
			})
		let counterGenerate = 0;
		let text = 0;
		for(let elem of countMap){counterGenerate += elem;}
		for(let elem of priceMap){text += elem;}
		countProduct.textContent = (+counterGenerate)+ ' Товаров'
		summText.textContent = +text + ' ₽';
	},
	counterMin(event)
	{
		const boxItem = event.target.closest('.pop-up__item-box');
		if (boxItem)
		{
			const counter = boxItem.querySelector('._count');
			counter.textContent -= 1;
			this.openPopup(event);
		}
	},
	counterPlus(event)
	{
		const boxItem = event.target.closest('.pop-up__item-box');
		if (boxItem)
		{
			const counter = boxItem.querySelector('._count');
			counter.textContent = parseInt(counter.textContent)+1;
			this.openPopup(event)
		}
	}
}