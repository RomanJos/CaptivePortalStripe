            	<!--
            		function replaceButtonText(buttonId, text)
            		{
            			if (document.getElementById)
            			{
            				var button=document.getElementById(buttonId);
            				if (button)
            				{
            					if (button.childNodes[0])
            					{
            						button.childNodes[0].nodeValue=text;
            					}
            					else if (button.value)
            					{
            						button.value=text;
            					}
      else //if (button.innerHTML)
      {
      	button.innerHTML=text;
      }
  }
}
}
//-->
function ChangeLanguage(language)
{
	if (language === 'English'){
		replaceButtonText('signin', 'Login');
		replaceButtonText('Acheter', 'Buy 🛒');
		replaceButtonText('Problème', 'Problem ⚠️');
		replaceButtonText('MotDePasse', 'Password');
		replaceButtonText('ID', '4 character code');
		replaceButtonText('TextBelowWifi', 'Enter your credentials to connect');
		if (document.getElementById("Error").textContent === "PasDeContact"){//j'ai besoin de mettre un commentaire ? lol
        replaceButtonText('errorMSGtext', "Failed to contact the server, are you connected to the WiFi ?");
       }
		if (document.getElementById("Error").textContent === "FailLogin"){//j'ai besoin de mettre un commentaire ? lol
        replaceButtonText('errorMSGtext', "The password or ID is incorrect");
       }
	}
	if (language === 'French'){
		replaceButtonText('signin', 'Se connecter');
		replaceButtonText('Acheter', "Acheter 🛒");
		replaceButtonText('Problème', "Probleme ⚠️");
		replaceButtonText('MotDePasse', 'Mot de passe');
		replaceButtonText('ID', 'Code à 4 caractères');
		replaceButtonText('TextBelowWifi', 'Entrez vos identifiants pour vous connecter');
		if (document.getElementById("Error").textContent === "PasDeContact"){//j'ai besoin de mettre un commentaire ? lol
        replaceButtonText('errorMSGtext', "Il y a un problème de communication êtes vous bien connecté en wifi ?");
       }
		if (document.getElementById("Error").textContent === "FailLogin"){//j'ai besoin de mettre un commentaire ? lol
        replaceButtonText('errorMSGtext', "Le mot de passe ou l'ID est incorrecte");
       }
	}
	if (language === 'Spanish'){
		replaceButtonText('signin', 'Conectarse');
		replaceButtonText('Acheter', 'Comprar 🛒');
		replaceButtonText('Problème', 'Problema ⚠️');
		replaceButtonText('MotDePasse', 'Contraseña');
		replaceButtonText('ID', 'Código de 4 caracteres');
		replaceButtonText('TextBelowWifi', 'Introduzca sus datos de acceso para conectarse');
		if (document.getElementById("Error").textContent === "PasDeContact"){//j'ai besoin de mettre un commentaire ? lol
        replaceButtonText('errorMSGtext', "Hay un problema de comunicación, ¿estás bien conectado en wifi?");
       }
		if (document.getElementById("Error").textContent === "FailLogin"){//j'ai besoin de mettre un commentaire ? lol
        replaceButtonText('errorMSGtext', "La contraseña o ID es incorrecta");
       }
	}
}