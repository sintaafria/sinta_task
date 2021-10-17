import Table from './myLib/table.js'
import Card from './myLib/card.js'

const tabel = new Table({
	columns: ["Name", "Email", "Phone Number"],
	data: [
	  ["John", "john@example.com", "(353) 01 222 3333"],
	  ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
	  ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
	  ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
	  ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
	]
	});
tabel.render(document.getElementById("mytable"));

const card = new Card([
	["src/img1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
	["src/img2.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
	["src/img3.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
	["src/img1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
	]);
card.render(document.getElementById("list-item"));