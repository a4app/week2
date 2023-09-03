function passwordEye(field)
{
	if(field == "pass")
	{
		let type = document.getElementById('pass').type;
		if(type == "password")
		{
			document.getElementById('pass').type = "text";
			document.getElementById('eye1').src = "./assets/signup_form/eye_open.png";
		}
		else if(type == "text")
		{
			document.getElementById('pass').type = "password";
			document.getElementById('eye1').src = "./assets/signup_form/eye_close.png";
		}
	}
	else if(field == "confm")
	{
		let type = document.getElementById('confm').type;
		if(type == "password")
		{
			document.getElementById('confm').type = "text";
			document.getElementById('eye2').src = "./assets/signup_form/eye_open.png";
		}
		else if(type == "text")
		{	
			document.getElementById('confm').type = "password";
			document.getElementById('eye2').src = "./assets/signup_form/eye_close.png";
		}
	}
}