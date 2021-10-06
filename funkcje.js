function rejestracja()
		{
			var login = document.getElementById("login").value;
			var haslo = document.getElementById("haslo").value;
			
			window.alert(login);
			document.location='logowanie.html';
		}
		
function logowanie()
		{
			var login_podany = document.getElementById("login").value;
			var haslo_podane = document.getElementById("haslo").value;
			
			
			if(login_podany==login && haslo_podane==haslo)
			{
				document.location='menu.html'
			}
			else 
			{
				window.alert(login);
			}
		}