o2.boxBlock =
{
	next(btn)
	{
		const box = btn.parentNode;
		const visionBlock = box.querySelector('.box-block__visiont');
		const sliderItem = box.querySelectorAll('.box-block__slider__item');
		const itemWidht = sliderItem[0].offsetWidth;
		const cout = visionBlock.dataset.count;
		if(cout >= sliderItem.length - 3)
		{
			visionBlock.dataset.count = sliderItem.length -2;
			visionBlock.style.transform =  `translateX(-${itemWidht*cout}px)`;
		}
		else
		{
			visionBlock.dataset.count ++
			visionBlock.style.transform =  `translateX(-${itemWidht*cout}px)`;
		}
	},
	prev(btn)
	{
		const box = btn.parentNode;
		const sliderItem = box.querySelectorAll('.box-block__slider__item');
		const visionBlock = box.querySelector('.box-block__visiont');
		const itemWidht = sliderItem[0].offsetWidth;
		const cout = visionBlock.dataset.count;
		visionBlock.dataset.count --

		if(cout <= 0)
		{
			visionBlock.dataset.count = 0;
			visionBlock.style.transform =  `translateX(-${itemWidht*cout}px)`;
		}
		else
		{
			visionBlock.dataset.count --
			visionBlock.style.transform =  `translateX(-${itemWidht*cout}px)`;
		}
	},
	create()
	{
		const visionBlock = document.querySelector('.box-block__visiont');
		const sliderItem = document.querySelectorAll('.box-block__slider__item');
		const itemWidht = sliderItem[0].offsetWidth;
		visionBlock.style.width = itemWidht*sliderItem.length + 'px';
		document.addEventListener('keypress', (e) =>
		{
			if(e.code=== 'KeyW' )
			{
				console
				this.keyboard('vpered');
			}
			if (e.code=== 'KeyS' )
			{
				this.keyboard('nazad');
			}
			if(e.code=== 'KeyA' )
			{
				this.keyboard('levo');
			}
			if(e.code=== 'KeyD')
			{
				this.keyboard('pravo');
			}

		})
	},
	left(mashin, shag)
	{
		mashin.dataset.axisy --
		const coount = mashin.dataset.axisy;
		mashin.style.left = `${shag*coount}px`;
	},
	right(mashin, shag)
	{

		mashin.dataset.axisy ++
		const coount = mashin.dataset.axisy;
		mashin.style.left = `${+shag* coount}px`;
	},
	back(mashin, shag)
	{
		mashin.dataset.axisx ++;
		const coount = mashin.dataset.axisx;
		mashin.style.top = `${shag*coount}px`;
	},
	forward(mashin, shag)
	{
		mashin.dataset.axisx --;
		const coount = mashin.dataset.axisx;
		mashin.style.top = `${shag*coount}px`;
	},
	keyboard(storona)
	{
		const shag = 10;
		const mashin = document.querySelector('.box-block__mashina')
		if(storona === 'vpered')
		{
			this.forward(mashin, shag)
		}
		if(storona ===  'nazad')
		{
			this.back(mashin, shag)
		}
		if(storona === 'levo')
		{
			this.left(mashin, shag)
		}
		if(storona === 'pravo')
		{
			this.right(mashin, shag)
		}
	},
	move(event)
	{
		const shag = 10;
		const box = event.target.closest('.box-block');
		const mashin = box.querySelector('.box-block__mashina')
		if(event.target.classList.contains('next'))
		{
			this.forward(mashin, shag)
		}
		if(event.target.classList.contains('back'))
		{
			this.back(mashin, shag)
		}
		if(event.target.classList.contains('left'))
		{
			this.left(mashin, shag)
		}
		if(event.target.classList.contains('right'))
		{
			this.right(mashin, shag)
		}

	},
	createBox(btn)
	{
		const box = btn.parentNode;
		const xbox = box.querySelector('.boox__xbox');
		const div = document.createElement('div');
		const widht = 70;
		const height = Math.floor(Math.random() * 100);
		div.classList.add('xbox-item');

		const letters = '0123456789ABCDEF';
		let randomColor = '#';
		for (var i = 0; i < 6; i++) {
			randomColor += letters[Math.floor(Math.random() * 16)];
		}
		div.style.width = `${widht}px`;
		div.style.height = `${height}px`;
		div.style.background = randomColor;
		xbox.append(div);
	},

}