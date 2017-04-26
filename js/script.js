console.log("teste de liaison js et html");

$(document).ready(function() {

	var resultat = true;

	$('#form').submit(function() {

		resultat = true;

		if ($('#nom').val() == "") {
			$('#nom').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpNom').text('Ce champ est requis');
			resultat = false;
		}

		if ($('#prenom').val() == "") {
			$('#prenom').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpPrenom').text('Ce champ est requis');
			resultat = false;
		}


		if ($('#email').val() == "") {
			$('#email').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpEmail').text('Ce champ est requis');
			resultat = false;
		}

		if ($('#password').val() == "") {
			$('#password').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpPassword').text('Ce champ est requis');

			resultat = false;
		}

		if ($('#password2').val() == "") {
			$('#password2').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpPassword2').text('Ce champ est requis');

			resultat = false;
		}


		if ($('#password').val().length < 6) {
			resultat = false;
		}

		if ($('#password').val() != $('#password2').val()) {
			resultat = false;
		}

		if (resultat == true) {
			alert("Demande d'inscription envoyer");
		}

		return resultat;

	});

	$('#nom').keyup(function() {

		if ($('#nom').val() == "") {
			$('#nom').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpNom').text('Ce champ est requis');
		} else {
			$('#nom').parent().removeClass('has-error');
			$('#nom').parent().addClass('has-success');
			$('#helpNom').text('');
		}

	});

	$('#prenom').keyup(function() {

		if ($('#prenom').val() == "") {
			$('#prenom').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpPrenom').text('Ce champ est requis');
		} else {
			$('#prenom').parent().removeClass('has-error');
			$('#prenom').parent().addClass('has-success');
			$('#helpPrenom').text('');
		}

	});

	$('#email').keyup(function() {

		if ($('#email').val() == "") {
			$('#email').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpEmail').text('Ce champ est requis');
		} else {
			$('#email').parent().removeClass('has-error');
			$('#email').parent().addClass('has-success');
			$('#helpEmail').text('');
		}

	});

	$('#password').keyup(function() {
		if ($('#password').val() == "") {
			$('#password').attr('placeholder', 'ne peu pas etre vide ...').parent().addClass('has-error');
			$('#helpPassword').text('Ce champ est requis');
		} else {
			$('#password').parent().removeClass('has-error');
			$('#password').parent().addClass('has-success');
			$('#helpPassword').text('');
		}

		if ($('#password').val().length < 6) {

			$('#password').parent().addClass('has-error');
			$('#helpPassword').text('Mot de passe trop court !');
		}
	});

	$('#password2').keyup(function() {
		if (($('#password').val() != $('#password2').val())) {
			$('#password2').parent().addClass('has-error');
			$('#helpPassword2').text('Mot de passe different !');
		} else {
			$('#password2').parent().removeClass('has-error');
			$('#password2').parent().addClass('has-success');
			$('#helpPassword2').text('');
		}


	});


});
