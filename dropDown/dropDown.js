o2.dropDown =
{
	open(dropDown)
	{
		dropDown.classList.add('dropdown--opened')
	},
	close(input)
	{
		const dropDowns = document.querySelectorAll('._dropdown');
		dropDowns.forEach(el => el.classList.remove('dropdown--opened'))
		if(!input.value.trim())
			input.classList.add('error');
		else
			input.classList.remove('error');
		input.value = '';
	},
	toggle(instance)
	{
		let dropDown = instance.parentNode;
		if (!dropDown.classList.contains('dropdown--opened'))
			this.open(dropDown);
		else
			this.close(instance);
	},
}


