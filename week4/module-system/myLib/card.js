class Card {
	constructor(content) {
		this.content = content;
	}

	render(element) {
		let item = "";
		for(let i=0; i<this.content.length; i++) {
			let col = this.content[i];
			item += `
					<div class="col my-3">
		          		<div class="card">
		            		<img src=${col[0]} class="card-img-top" alt="...">
		            		<div class="card-body">
		              			<p class="card-text">${col[1]}</p>
		            		</div>
		          		</div>
		        	</div>`;
		}

		element.innerHTML = `<div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
								${item} </div>`
	}
}

export default Card;
