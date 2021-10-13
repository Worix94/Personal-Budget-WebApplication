var login;
var haslo;

function rejestracja()
{
		login=document.getElementById('login').value;
		haslo=document.getElementById('haslo').value;
		//alert(login);
		document.location="logowanie.html";
}
function logowanie()
{
		var login1=document.getElementById('login1').value;
		var haslo1=document.getElementById('haslo1').value;
		if( login == login1 && haslo == haslo1)
			{
				alert(login);
				document.location='menu.html';
			}
		else 
			{
				alert(login);
				alert("Niepoprawny login lub hasło");
			}
}
