function checkPassword(){

	if(document.getElementById("pass").value !=document.getElementById("rpass").value){
	
	alert("password are mismatched ! !");
	return false;


	}
	else{

		alert("password matched!!");
		return true;
	
	}

}