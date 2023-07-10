o2.dropDown =
{
	open(event)
	{
		const dropDown = event.target.closest('.dropdown');
		const boxHelp = dropDown.querySelector('.dropdown__box');
		const text = dropDown.querySelectorAll('.dropdown__p');
		const labelHelper = dropDown.querySelector('.dropdown__input-help');
		const lable = dropDown.querySelector('.dropdown__lable')
		const dropdownArrow = dropDown.querySelector('.dropdown__arrow');
		dropdownArrow.classList.remove('dropdown__arrow-up');
		dropdownArrow.classList.add('dropdown__arrow-down');
		lable.classList.remove('_hidden');
		boxHelp.classList.remove('_hidden');
		labelHelper.classList.add('_hidden');
		text.forEach(el => el.classList.remove('_hidden'))
	},
	close(event)
	{

		const dropDown = event.target.closest('.dropdown');
		const boxHelp = dropDown.querySelector('.dropdown__box');
		const labelHelper = dropDown.querySelector('.dropdown__input-help');
		const addOptions = document.createElement('p');
		const lable = dropDown.querySelector('.dropdown__lable');
		const dropdownArrow = dropDown.querySelector('.dropdown__arrow');
		dropdownArrow.classList.add('dropdown__arrow-up');
		dropdownArrow.classList.remove('dropdown__arrow-down');
		lable.classList.add('_hidden');
		boxHelp.classList.add('_hidden');
		labelHelper.classList.remove('_hidden');
		if(event.target.value.trim() === "" || event.target.value.trim() === " " )
		{
			event.target.classList.add('_error');
			event.target.value ='';
		}
		else
		{
			addOptions.textContent = event.target.value;
			addOptions.classList.add('dropdown__p', '_hidden');
			boxHelp.appendChild(addOptions);
			event.target.classList.remove('_error');
			event.target.value = '';
		}

	}
}


