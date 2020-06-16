 let nome, apelido, password, email, sexo, ilha;

 // Arrow function
 pegarDados = () => {
		nome = formulario.nome.value;
		apelido = formulario.apelido.value;
		password = formulario.password.value;
		email = formulario.email.value;
		sexo = formulario.sexo.value;
		ilha = formulario.ilha.value;

		if(nome == "" || apelido == "" || password == "" || email == "" || sexo == "" || ilha == "" ){
			 alert('campos vazios');
			
		} 
	 return true;

	}

	validarPassword = () => {
		if(password.length <= 6 ){
			alert('password fraca');
			return false
			// Maiusculas
		} else if (!/[A-Z]/gm.test(password)){
			alert('password fraca');
			return false
		    // Carateres Especiais
		} else if (!/[!@#$%*()_+^&{}}:;?.]/gm.test(password)) {
			alert('password fraca');
			return false
			// Numeros
		} else if (!/[0-9]/gm.test(password)) {
			alert('password fraca');
			return false
		}
		return true
	}

	// Validar Email
	validarEmail = () => {
		let er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
		if (!er.test(email)) {
			alert('email incorreto');
			return false
		}
		return true;
	}

	validarCampos = () => {	
		if(!pegarDados() && !validarPassword() && !validarEmail()){
			return false;
		}
	 // criar Objeto 
	 let person = {nome: nome, apelido: apelido, email: email, senha: 
	 				password, sexo: sexo, ilha: ilha}
	 // criar Array de objeto

	 let listaP = [person]
	 
	 return console.log(listaP[0]);
		
	}

