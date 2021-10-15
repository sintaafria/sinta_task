class Table {
	constructor(content) {
		this.content = content;
	}

	render(element) {
		const columns = this.content.columns;
		const data = this.content.data;

		let th = "";
		for(let i=0; i<columns.length; i++) {
			th += `<th> ${columns[i]} </th>`;
		}

		let body = "";
		for(let i=0; i<data.length; i++) {
			let td = "";
			let col = data[i];
			for(let j=0; j<col.length; j++) {
				td += `<td> ${col[j]} </td>`;
			}
			body += `<tr> ${td} </tr>`;
		}

		let thead = `<thead> <tr> ${th} </tr> </thead>`;
		let tbody = `<tbody> ${body}  </tbody>`;

		element.innerHTML = thead + tbody;
	}
}

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
