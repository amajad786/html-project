            const scriptURL = 'https://script.google.com/macros/s/AKfycbw4fQFIbs6AoNy224P97cbsRfje4Hh4NbSzGqmTiqfygyJd_2PCWGogP4G-r3I0m69azg/exec'
			const form = document.forms['conactForm']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})