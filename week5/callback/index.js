const head = `<thead><tr>
					<th>ID</th>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Address</th>
					<th>Company</th>
				</tr></thead>`;
let body = '';
const element = document.getElementById("list-item");

function getData(url, success, error) {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success(xhr.response);
			} else if( xhr.status === 404) {
			error();
			}
		} 
	}

	xhr.open('get', url);
	xhr.send();
}

getData('https://jsonplaceholder.typicode.com/users', res => {
	const datas = JSON.parse(res);
	datas.forEach(i => {
		body += ` <tr>
						<td>${i.id}</td>
						<td>${i.name}</td>
						<td>${i.username}</td>
						<td>${i.email}</td>
						<td>${(i.address)['street']}, ${(i.address)['suite']}, ${(i.address)['city']}</td>
						<td>${i.company['name']}</td>
					</tr>`
		let table = `${head}<tbody>${body}</tbody>`;
		element.innerHTML = table;

	});
}, () => {
	element.innerHTML = '<h1>Not Found</h1>';
});

element.innerHTML = `${head}<tbody><tr><td colspan="6" class="border-bottom-0"><div class="d-flex justify-content-center">
					<div class="spinner-border" role="status">
					<span class="visually-hidden">Loading...</span>
					</div></div></td></tr></tbody>`