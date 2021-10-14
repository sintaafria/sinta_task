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
