o2.dropDown =
{
	open()
	{
		const drop = event.target.closest('.drop');
		const boxHelp = drop.querySelector('.drop__box');
		const text = drop.querySelectorAll('.drop__p');
		const labelHelper = drop.querySelector('.drop__input-help');
		boxHelp.classList.remove('_hidden');
		labelHelper.classList.add('_hidden');
		text.forEach(el => el.classList.remove('_hidden'))

	},
	close(event)
	{

		const drop = event.target.closest('.drop');
		const boxHelp = drop.querySelector('.drop__box');
		const labelHelper = drop.querySelector('.drop__input-help');
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
			addOptions.classList.add('drop__p', '_hidden');
			boxHelp.appendChild(addp);
			event.target.classList.remove('_error');
			event.target.value = '';
		}

	}
}


