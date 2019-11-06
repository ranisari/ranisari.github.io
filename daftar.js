function validasi() {
		var password = document.getElementById("password").value;
		var konfirmasipassword = document.getElementById("konfirmasipassword").value;
		if (password =="rani" && konfirmasipassword =="rani"){
			return true;
		}else{
			alert('Maaf password anda tidak sesuai');
		}
	}