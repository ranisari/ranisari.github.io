function validasi() {
		var password = document.getElementById("password").value;
		if (password =="rani"){
			return true;
		}else{
			alert('Maaf, anda lupa password?');
		}
	}