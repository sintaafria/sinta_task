let main = true;
let jawaban;
const ronde = 3;
let rondeKe = 0;

let player = [
				{name: "Player 1", tebakan: '', score: 0},
				{name: "Player 2", tebakan: '', score: 0}
			];

while (main) {
	if (ronde-rondeKe > 0) {
		alertRonde(rondeKe);
		jawaban = Math.floor(Math.random()*3)+1
		alert(jawaban);
		tebakanPlayer1 = prompt('Masukkan tabakan Player 1');
		validasi(tebakanPlayer1, 1);
		tebakanPlayer2 = prompt('Masukkan tabakan Player 2');
		validasi(tebakanPlayer2, 2);
		cetakSkor();
		rondeKe++;
	} else {
		pemenangAkhir();
		main = confirm('mau main lagi?');
		rondeKe = 0;
		player[0].score = 0;
		player[1].score = 0;
	}
}

function alertRonde(round) {
	switch(round) {
		case 0:
			alert('Ayo main tebak angka 1-3 dalam 3 babak')
			alert('Main babak 1');
			break;
		case 1:
			alert('Main babak 2');
			break;
		case 2:
			alert('Main babak 3');
	}
}

function validasi(tebakan1, player_) {
	if (tebakan1 <= 3 && tebakan1 > 0 && tebakan1 % 1 == 0) {
		player[player_-1].tebakan = tebakan1;
	} else {
		alert('Tebakan Harus bilangan bulat 1-3');
		tebakanBaru = prompt(`Masukkan tabakan player ${player[player_-1].name}`);
		// player[player_-1].tebakan = tebakanBaru;
		validasi(tebakanBaru, player_)
	}
}

function cetakSkor() {
	if (jawaban == player[0].tebakan && jawaban != player[1].tebakan) {
		player[0].score++;
		alert('Player 1 Menang pada babak ini');
		alert(`Skor Babak ${rondeKe+1}  \n Player 1 = ${player[0].score} \n Player 2 = ${player[1].score}`)
	} else if (jawaban == player[1].tebakan && jawaban != player[0].tebakan) {
		alert('Player 2 Menang pada babak ini');
		player[1].score++;
		alert(`Skor Babak ${rondeKe+1} \n Player 1 = ${player[0].score} \n Player 2 = ${player[1].score}`)
	} else if (jawaban == player[0].tebakan && jawaban == player[1].tebakan) {
		alert('Permainan Seri pada babak ini');
		player[0].score++;
		player[1].score++;
		alert(`Skor Babak ${rondeKe+1} \n Player 1 = ${player[0].score} \n Player 2 = ${player[1].score}`)
	} else {
		alert('Tidak ada yang Menang pada babak ini');
		alert(`Skor Babak ${rondeKe+1} \n Player 1 = ${player[0].score} \n Player 2 = ${player[1].score}`)
	}
}

function pemenangAkhir() {
	if (player[0].score > player[1].score) {
		alert('Selamat Player 1 Menang')
	} else if (player[0].score < player[1].score) {
		alert('Selamat Player 2 Menang')
	} else {
		alert('Permainan Seri')
	}
}

