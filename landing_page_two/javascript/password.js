function passwordEye()
{
	let type = document.getElementById('pass').type;
	if(type == "password")
	{
		document.getElementById('pass').type = "text";
		document.getElementById('eye').src = "./assets/signup_form/eye_open.png";
	}
	else if(type == "text")
	{
		document.getElementById('pass').type = "password";
		document.getElementById('eye').src = "./assets/signup_form/eye_close.png";
	}
}