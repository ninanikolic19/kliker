$(document).ready(function () {
	let nizLokacija = [
		[
			'Beograd',
			'U srcu Beograda nalaze se naše učionice, dizajnirane da budu savršeno mesto za učenje predškolaca, osnovaca i srednjoškolaca. ' +
				'Udobne, prostrane i osvetljene, ove učionice pružaju prijatno okruženje koje inspiriše na rad i kreativnost. Lokacija blizu centra grada ' +
				'omogućava jednostavan dolazak, dok moderna oprema – računari, roboti i 3D štampači – pružaju mogućnost savladavanja programiranja, robotike i 3D modelovanja. ' +
				'Naš ergonomski nameštaj i pažljivo osmišljeni raspored prostora dodatno doprinose ugodnosti tokom rada. Sa ciljem da deci omogućimo najbolje uslove za učenje, ' +
				'naše učionice u Beogradu su mesto gde svaka ideja može postati stvarnost.',
			['bg1.webp', 'bg2.webp', 'bg3.webp'],
		],

		[
			'Novi Sad',
			'Naše učionice u Novom Sadu predstavljaju savršeno mesto za učenje i razvoj predškolaca, osnovaca i srednjoškolaca. ' +
				'Smeštene u srcu grada, lako su dostupne i omogućavaju brz pristup svim delovima Novog Sada. Prostori su savremeno opremljeni, sa ' +
				'modernom tehnologijom za programiranje, robotiku i 3D modelovanje. Učionice su prostrane, osvetljene prirodnim svetlom i dizajnirane ' +
				'tako da pružaju maksimalan komfor tokom rada. Svaka učionica ima ergonomski nameštaj prilagođen uzrastu dece, čime osiguravamo prijatnu i ' +
				'produktivnu atmosferu za učenje. Uz profesionalno osoblje i vrhunsku opremu, naše učionice su mesto gde se deca motivišu da istražuju, ' +
				'stvaraju i razvijaju svoje potencijale',
			['ns1.jpeg', 'ns2.webp', 'ns3.jpeg'],
		],

		[
			'Niš',
			'Naše učionice u Nišu su sinonim za savremeni prostor za učenje, osmišljen tako da deci svih uzrasta pruža inspirativno i podsticajno okruženje. ' +
				'Nalaze se na atraktivnoj lokaciji u blizini centra grada, što ih čini lako dostupnim kako učenicima, tako i roditeljima. Prostor je moderno opremljen ' +
				'računarima, robotima i 3D štampačima, prilagođen za radionice iz programiranja, robotike i 3D modelovanja. Velika pažnja posvećena je osvetljenju, ' +
				'ventilaciji i udobnosti, što čini rad u ovim učionicama prijatnim i produktivnim. Svaka učionica je uređena s ciljem da podstakne kreativnost i radoznalost, ' +
				'omogućavajući deci da kroz inovativan pristup učenju savladaju nove veštine.',
			['nis1.webp', 'nis2.jpeg', 'nis3.webp'],
		],
	];

	let najmladji = [
		[
			'Programiranje za predškolce',
			'Kurs osnova programiranja sa Bee Bot-om namenjen deci predškolskog uzrasta.',
			'5 - 6 godina',
			'predskolci-370x290-1.jpg',
		],
		[
			'Početno programiranje',
			'Upoznavanje principa kompjuterske nauke i programiranja.',
			'6 - 7 godina',
			'POCETNO-PROGRAMIRANJE-370x290-1.png',
		],
		[
			'Scratch Start',
			'Programiranje kroz pravljenje igrica i animacija na Scratch platformi.',
			'5 - 7 godina',
			'Scratch-Start-Feature-Image-1024x683px-370x290-1.png',
		],
	];

	let osnovci = [
		[
			'Scratch 1',
			'Programiranje kroz pravljenje igrica i animacija na Scratch platformi.',
			'III - V razred',
			'scr-370x290-1.png',
		],
		[
			'Scratch 2',
			'Programiranje kroz pravljenje igrica i animacija na Scratch platformi. ',
			'V - VII razred',
			's2-370x290-1.png',
		],
		[
			'Elektronika',
			'Od sijalice do robota – elektronika i programiranje Arduina.',
			'V - VII razred',
			'Elektronika_Feature-image-logo-370x290-1.png',
		],
		[
			'Robotika 1',
			'Programiranje robota i njegovih funkcija. Uvod u robotiku.',
			'III - V razred',
			'rob-370x290-1.png',
		],
		[
			'Robotika 2',
			'Nastavak Robotika 1 kursa – prelaz sa blokovskog na pisano kodiranje.',
			'IV - VII razred',
			'robotika-2-kurs-370x290-1.png',
		],
		[
			'3D štampa i modelovanje',
			'Uz pomoć 3D olovke i 3D štampača otkrivamo jedan predivan svet.',
			'III - VI razred',
			'3d-370x290-1.png',
		],
	];

	let srednjoskolci = [
		[
			'Web programiranje',
			'Učimo da napravimo prvi veb-sajt na zabavan način.',
			'srednja škola',
			'wp1-370x290-1.png',
		],
		[
			'C# programiranje',
			'Uvod u objektno orijentisano programiranje aplikacija za PC.',
			'srednja škola',
			'C-370x290-1.png',
		],
		[
			'JavaScript',
			'JavaScript programiranje – kreiranje dinamičnih veb-stranica (aplikacija).',
			'srednja škola',
			'JavaScript_Feature-Image_1024x683px-1-370x290-1.png',
		],
	];

	var nizPrograma = [najmladji, osnovci, srednjoskolci];

	drustvreneMreze();
	meniFuter();
	meniNav();

	let stranica = window.location.pathname;

	if (stranica == '/' || stranica == '/index.html') {
		ispisDizajnera();
	}

	if (stranica.indexOf('projekti') != -1) {
		ispisProjekata();
	}

	if (stranica.indexOf('program') != -1) {
		ispisPrograma();
		ispisForme();
		var modal = document.getElementById('myModal');

		function closeModal() {
			document.body.style.overflowY = 'auto';
			modal.style.display = 'none';
		}

		$('.modalButton').click(function () {
			document.body.style.overflowY = 'hidden';
			modal.style.display = 'block';
		});
		$('.closeModal').click(function () {
			resetovanjeForme();
			closeModal();
		});
		$('#myModal').click(function (ev) {
			if (ev.target.id !== 'myModal') return;

			resetovanjeForme();
			closeModal();
		});
	}

	if (stranica.indexOf('blog') != -1) {
		ispisNovosti();
	}

	//********************************************* */

	//KOD ZA RESPONSIVE MENI
	$('.navbar-toggler').click(function () {
		console.log('navbar-toggler');
		$('#responsive-meni')
			.css({
				left: '0',
				top: `${$('.navbar').height()}px`,
			})
			.toggle();
	});

	function drustvreneMreze() {
		let nizMreza = [
			'facebook',
			'twitter',
			'linkedin',
			'instagram',
			'pinterest',
			'youtube',
		];

		let mreze = document.querySelector('#drustveneMreze');

		for (let i = 0; i < nizMreza.length; i++) {
			mreze.innerHTML += `
        <li class="p-0 d-inline col-4 col-sm-2 col-md-6 col-lg-2 text-center mt-4">
            <a href="https://${nizMreza[i]}.com" target="_blanc">
                <i class="text-secondary text-center m-2 fab fa-${nizMreza[i]}"></i>
            </a>
        </li>
        `;
		}
	}
	function meniFuter() {
		let meniNiz = [
			['index.html', 'Početna'],
			['program.html', 'Program'],
			['projekti.html', 'Projekti'],
			['blog.html', 'Blog'],
			['autor.html', 'Autor'],
		];

		let meniFuter = document.querySelector('#meniFuter');

		for (let i = 0; i < meniNiz.length; i++) {
			meniFuter.innerHTML += `<li><a href="${meniNiz[i][0]}" class="text-green">${meniNiz[i][1]}</a></li>`;
		}
	}
	function meniNav() {
		let meniNiz = [
			['index.html', 'Početna'],
			['program.html', 'Program'],
			['projekti.html', 'Projekti'],
			['blog.html', 'Blog'],
			['autor.html', 'Autor'],
		];

		let meniNavR = document.querySelector('#responsive-meni-ul');

		meniNavR.innerHTML = '';
		for (let i = 0; i < meniNiz.length; i++) {
			meniNavR.innerHTML += `<li class="text-center"><a href="${meniNiz[i][0]}" class="text-secondary nav-link">${meniNiz[i][1]}</a></li>
        `;
		}

		let meniNav = document.querySelector('#navbarMenu-ul');

		meniNav.innerHTML = '';
		for (let i = 0; i < meniNiz.length; i++) {
			meniNav.innerHTML += `<li class="nav-item"><a href="${meniNiz[i][0]}" class="nav-link text-secondary">${meniNiz[i][1]}</a></li>
        `;
		}
	}

	function ispisNovosti() {
		let nizNovosti = [
			[
				'VEST',
				'blog4.webp',
				'Tim',
				'Emocionalna inteligencija',
				'Sigurno ste čuli za mnogobrojne prednosti učenja programiranja za decu. Ali, da li znate da programiranje može pomoći vašem detetu da razvije i emocionalnu inteligenciju?',
			],
			[
				'EDUKACIJA',
				'blog3.jpg',
				'Mit',
				'Mitovi o programiranju za decu',
				'Pogledajmo neke od najčešćih mitova i razbijmo ih, otkrivši pritom kako programiranje može biti zabavno i korisno za svako dete.',
			],
			[
				'EDUKACIJA',
				'blog2.jpg',
				'Svet',
				'5 razloga zašto vaše dete treba da uči programiranje',
				'Živimo u digitalnom dobu, u kom tehnologija oblikuje naš svakodnevni život.Jedna od najvažnijih veština koju vaše dete može da nauči jeste programiranje.',
			],
			[
				'VEST',
				'blog5.webp',
				'Razvoj',
				'Kako programiranje razvija kreativnost kod dece',
				'Programiranje nije samo tehnička veština – ono otvara vrata za razvoj kreativnosti, logičkog razmišljanja i sposobnosti rešavanja problema.',
			],
			[
				'EDUKACIJA',
				'blog6.webp',
				'Budućnost',
				'Zašto je programiranje ključno za budućnost',
				'U svetu koji se sve više oslanja na tehnologiju, programiranje postaje osnovna veština koja može otvoriti vrata ka brojnim zanimljivim i dinamičnim karijerama.',
			],
			[
				'ZANIMLJIVOST',
				'blog7.webp',
				'Igra',
				'Kako se deca mogu igrati dok uče programiranje',
				'Kroz kreativne igre i projekte, deca mogu naučiti osnove programiranja na zabavan i interaktivan način, razvijajući ljubav prema učenju.',
			],
		];

		let novosti = document.querySelector('#novosti');

		for (let i = 0; i < nizNovosti.length; i++) {
			novosti.innerHTML += `
        <div class="card brd-none text-center col-md-6 col-xl-4 mb-3">
            <img class="card-img-top pt-3" src="img/${nizNovosti[i][1]}" alt="${nizNovosti[i][3]}">
            <div class="card-body border">
                <p class="text-green">${nizNovosti[i][0]}</p>
                <h3 class="card-title">${nizNovosti[i][3]}</h3>
                <p id="p-vest" class="card-text text-dark mb-5">${nizNovosti[i][4]}</p>
            </div>
        </div>
        `;
		}
	}

	function ispisDizajnera() {
		let nizProfesora = [
			['Nikola Arsić', 'Software Inženjer', 'nikola_profesor.jpg'],
			['Maša Belić', 'Grafički dizajner', 'masa_dizajner.jpg'],
			['Igor Savić', 'Profesor Programiranja', 'igor_profesor.jpg'],
		];

		let profesoriElement = document.querySelector('.profesori');

		let html = `<div class="justify-content-center row">`;
		for (let i = 0; i < nizProfesora.length; i++) {
			html += `
        <div class="col-12 col-sm-6 col-md-4 text-center my-4 profesor-card">
            <img class="card-img-top rounded-circle mx-auto" src="img/${nizProfesora[i][2]}" alt="${nizProfesora[i][0]}">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">${nizProfesora[i][0]}</h5>
                <p class="card-text text-secondary">${nizProfesora[i][1]}</p>
            </div>
        </div>
        `;
		}
		html += '</div>';

		profesoriElement.innerHTML = html;
	}

	function ispisProjekata() {
		let projekti = document.querySelector('#projekti');

		for (let i = 0; i < nizLokacija.length; i++) {
			let images = ``;
			if (nizLokacija[i][2].length) {
				for (let j = 0; j < nizLokacija[i][2].length; j++) {
					images += `<div class="col-12 col-md-4 p-0 mb-5 container">
                    <img src="img/${nizLokacija[i][2][j]}" class="mw-100 col-12" alt="lokacija ${nizLokacija[i][0]} skola programiranja" />
                </div>`;
				}
			}
			projekti.innerHTML +=
				`
        <h2 class="text-green mt-5 mb-3">${nizLokacija[i][0]}</h2>
        <p class="d-inline">${nizLokacija[i][1]}</p>
        <div class="container d-flex flex-wrap col-12 p-0 mt-4">
            <div class="col d-flex flex-wrap align-items-between col-12 p-0 ">` +
				images +
				`</div>
        </div>
        `;
		}
	}

	function ispisForme() {
		let gradoviElement = document.querySelector('#radioGradovi');

		for (let i = 0; i < nizLokacija.length; i++) {
			gradoviElement.innerHTML += `
            <div class="form-check col-12">
                <input class="form-check-input" type="radio" name="radioGradovi" id="${nizLokacija[i][0]}">
                <label class="form-check-label" for="${nizLokacija[i][0]}">
                    ${nizLokacija[i][0]}
                </label>
            </div>`;
		}

		let programiElement = document.querySelector('#selectProgrami');
		for (let i = 0; i < nizPrograma.length; i++) {
			for (let j = 0; j < nizPrograma[i].length; j++) {
				programiElement.innerHTML += `<option value="${i + j}">${
					nizPrograma[i][j][0]
				}</option>`;
			}
		}
	}
	function ispisPrograma() {
		var nizProgramaString = ['Najmladji', 'Osnovci', 'Srednjoskolci'];

		let programi = document.querySelector('#programi');

		programi.innerHTML += `<h1 class="text-center col-12 text-secondary">Programi</h1>`;

		for (let i = 0; i < nizPrograma.length; i++) {
			programi.innerHTML += `
            <h2 class=" text-secondary pl-2 mt-5 mb-3 pt-2 pb-2 border-bottom col-12">${nizProgramaString[i]}</h2>
            <div id="${nizProgramaString[i]}" class="container-fluid mw-100 d-flex justify-between flex-wrap">`;
			for (let j = 0; j < nizPrograma[i].length; j++) {
				programi.innerHTML += `
                <div class="card brd-none text-center col-sm-6 col-md-4 mb-3">
                    <img class="card-img-top pt-3" src="img/${nizPrograma[i][j][3]}" alt="${nizPrograma[i][j][0]}" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${nizPrograma[i][j][0]}</h5>
                        <p class="card-text text-dark">${nizPrograma[i][j][1]}</p>
                        <p class="text-muted">${nizPrograma[i][j][2]}</p>
                        <button type="button" class="modalButton btn btn-green btn-lg">Upiši kurs</button>
                    </div>
                </div>
            `;
			}
			programi.innerHTML += `</div>`;
		}
	}

	//Validacija forme
	function resetovanjeForme() {
		$('.forma-greska').remove();
		$('.forma-uspeh').remove();
	}
	function greska(element, poruka) {
		$(`<span class="forma-greska w-100">${poruka}</span>`).insertAfter(
			$(element)
		);
	}
	function uspesno(forma, element, poruka) {
		$(`<span class="forma-uspeh">${poruka}</span>`).insertAfter($(element));
		forma.reset();
	}
	function inputPrazno(element, naziv) {
		if (element.value.length == 0) {
			greska(element, `Polje za ${naziv} ne sme biti prazno.`);
			return true;
		}
		return false;
	}
	let regImePrezime =
		/^[A-ZŠĐŽĆČ][a-zšđžćč]{2,15}(\s[A-ZŠĐŽĆČ][a-zšđžćč]{2,15}){0,2}$/;
	let regEmail =
		/^[a-z0-9]+([._+-]?[a-z0-9]+)*@[a-z0-9]+([.-]?[a-z0-9]+)*\.[a-z]{2,}$/i;

	//Forma za programe
	$('#btnSubmit').click(validirajPorucivanje);
	function validirajPorucivanje() {
		resetovanjeForme();

		const regBroj = /^6\d{7,8}$/;

		let indikatorGreske = false;

		//Ime
		if (inputPrazno(document.porucivanje.ime, 'ime')) {
			indikatorGreske = true;
		} else {
			if (!regImePrezime.test(document.porucivanje.ime.value)) {
				greska(document.porucivanje.ime, 'Ime nije dobro napisano.');
				indikatorGreske = true;
			}
		}
		//Prezime
		if (inputPrazno(document.porucivanje.prezime, 'prezime')) {
			indikatorGreske = true;
		} else {
			if (!regImePrezime.test(document.porucivanje.prezime.value)) {
				greska(document.porucivanje.prezime, 'Prezime nije dobro napisano.');
				indikatorGreske = true;
			}
		}

		//Broj
		if (inputPrazno(document.porucivanje.broj, 'broj')) {
			indikatorGreske = true;
		} else {
			console.log(document.porucivanje.broj.value);
			if (!regBroj.test(document.porucivanje.broj.value)) {
				greska(document.porucivanje.broj, 'Broj nije dobro napisan.');
				indikatorGreske = true;
			}
		}

		// Datum
		if ($('#date').val()) {
			const inputDate = new Date($('#date').val());
			const today = new Date();
			today.setHours(0, 0, 0, 0);

			if (inputDate < today) {
				greska($('#date'), 'Uneti datum je u prošlosti.');
				indikatorGreske = true;
			}
		} else {
			greska($('#date'), 'Morate odabrati datum.');
			indikatorGreske = true;
		}

		// Programi select
		if ($('#selectProgrami').val() === '0') {
			greska($('#selectProgrami'), 'Morate odabrati program.');
			indikatorGreske = true;
		}

		//Uslovi radios
		if (!($('input[name=radioGradovi]:checked').length > 0)) {
			greska($('#radioGradovi'), 'Morate odabrati grad.');
			indikatorGreske = true;
		}

		//Uslovi checkbox
		if (!$('#defaultChecked2').is(':checked')) {
			greska(
				$('#defaultChecked2').parent(),
				'Morate prihvatiti uslove korišćenja.'
			);
			indikatorGreske = true;
		}

		if (!indikatorGreske) {
			uspesno(document.porucivanje, $('#btnSubmit'), 'Uspešno prosledjeno.');
		}
	}

	//Forma za kontakt
	$(document.kontakt).on('submit', function (event) {
		validirajKontakt(event);
	});

	function validirajKontakt(event) {
		event.preventDefault();
		resetovanjeForme();

		let indikatorGreske = false;

		//Ime i Prezime
		if (inputPrazno(document.kontakt.name, 'ime i prezime')) {
			indikatorGreske = true;
		} else {
			if (!regImePrezime.test(document.kontakt.name.value)) {
				greska(document.kontakt.name, 'Ime i prezime nisu dobro napisani.');
				indikatorGreske = true;
			}
		}

		//Email
		if (inputPrazno(document.kontakt.mail, 'imejl adresu')) {
			indikatorGreske = true;
		} else {
			if (!regEmail.test(document.kontakt.mail.value)) {
				greska(document.kontakt.mail, 'Imejl adresa nije dobro napisana.');
				indikatorGreske = true;
			}
		}

		//Poruka
		if (inputPrazno(document.kontakt.text, 'poruku')) {
			indikatorGreske = true;
		} else {
			if (document.kontakt.text.value.length < 25) {
				greska(document.kontakt.text, 'Poruka mora sadržati bar 25 karaktera.');
				indikatorGreske = true;
			}
		}
		if (!indikatorGreske) {
			uspesno(document.kontakt, $('#button'), 'Uspešno ste poslali poruku.');
		}
	}
});
