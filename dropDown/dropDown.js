o2.dropDown =
{
	open(event)
	{
		const dropDown = event.target.closest('.dropDown');
		const boxHelp = dropDown.querySelector('.dropDown__box');
		const text = dropDown.querySelectorAll('.dropDown__p');
		const labelHelper = dropDown.querySelector('.dropDown__input-help');
		boxHelp.classList.remove('_hidden');
		labelHelper.classList.add('_hidden');
		text.forEach(el => el.classList.remove('_hidden'))

	},
	close(event)
	{

		const dropDown = event.target.closest('.dropDown');
		const boxHelp = dropDown.querySelector('.dropDown__box');
		const labelHelper = dropDown.querySelector('.dropDown__input-help');
		const addOptions = document.createElement('p');
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
			addOptions.classList.add('dropDown__p', '_hidden');
			boxHelp.appendChild(addOptions);
			event.target.classList.remove('_error');
			event.target.value = '';
		}

	}
}


