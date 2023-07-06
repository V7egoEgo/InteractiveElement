o2.drop =
{
	dropDown()
	{
		const drop = event.target.closest('.drop');
		const boxHelp = drop.querySelector('.drop__box');
		const text = drop.querySelectorAll('.drop__p');
		const labelHelper = drop.querySelector('.drop__input-help');
		boxHelp.classList.remove('_hidden');
		labelHelper.classList.add('_hidden');

	},
	dropDownNone(event)
	{

		const drop = event.target.closest('.drop');
		const boxHelp = drop.querySelector('.drop__box');
		const labelHelper = drop.querySelector('.drop__input-help');
		const addp = document.createElement('p');
		boxHelp.classList.add('_hidden');
		labelHelper.classList.remove('_hidden');
		if(event.target.value.trim() === "" || event.target.value.trim() === " " )
		{
			event.target.classList.add('_error');
			event.target.value ='';
		}
		else
		{
			addp.textContent = event.target.value;
			addp.classList.add('drop__p', '_hidde');
			console.log(boxHelp)
			boxHelp.appendChild(addp);
			event.target.classList.remove('_error');
			event.target.value = '';
		}

	}
}


