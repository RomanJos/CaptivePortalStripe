    function replaceButtonText(buttonId, text){
      if (document.getElementById){
        var button=document.getElementById(buttonId);
        if (button){
          if (button.childNodes[0]){
            button.childNodes[0].nodeValue=text;
          }
          else if (button.value){
            button.value=text;
          }
          else {//if (button.innerHTML)
            button.innerHTML=text;
          }
        }
      }
    }

    function ChangeLanguage(language)
    {
      if (language === 'English'){
               replaceButtonText('MotDePasse', 'Password : ');
        if (document.getElementById("VoucherID").textContent != "DELETED"){ 
         replaceButtonText('Merci', 'Thanks !');
       }
       if (document.getElementById("Info").textContent != ""){
        replaceButtonText('Info', 'Only one device can connect at a time if you share your code to someone else they will disconnect you 😃');
        document.getElementById("Info").classList.remove("hidden");
      }
        if (document.getElementById("Info2").textContent != ""){ //si c'est semaine
          replaceButtonText('Info2', 'If you want to cancel your subscription a link has been sent to your email address you just have to click on it !');
        document.getElementById("Info2").classList.remove("hidden");
      }
      if (document.getElementById("Info3").textContent != ""){
        replaceButtonText('Info3', 'Your plan has been deleted !');
        document.getElementById("Info3").classList.remove("hidden");
      }
    }
    if (language === 'French'){
   replaceButtonText('MotDePasse', 'Mot de passe : ');
      if (document.getElementById("VoucherID").textContent != "DELETED"){
        replaceButtonText('Merci', 'Merci !');
      }
      if (document.getElementById("Info").textContent != ""){
        replaceButtonText('Info', "Un seul appareil peut se connecter à la fois, si vous partagez votre code à quelqu'un il vous déconnectera 😃");
        document.getElementById("Info").classList.remove("hidden");
      }
        if (document.getElementById("Info2").textContent != ""){ //si c'est semaine
          replaceButtonText('Info2', "Si vous voulez annuler votre abonnement un lien vous a été envoyé sur votre adresse mail vous avez juste à cliquer dessu !");
        document.getElementById("Info2").classList.remove("hidden");
      }
      if (document.getElementById("Info3").textContent != ""){
        replaceButtonText('Info3', 'Votre forfait a été supprimé !');
        document.getElementById("Info3").classList.remove("hidden");
      }
    }
    if (language === 'Spanish'){
      replaceButtonText('MotDePasse', 'contraseña : ');
      if (document.getElementById("VoucherID").textContent != "DELETED"){
        replaceButtonText('Merci', '¡Gracias!');
      }
      if (document.getElementById("Info").textContent != ""){
        replaceButtonText('Info', 'Sólo un dispositivo puede conectarse a la vez, si compartes tu código con alguien te desconectará 😃');
        document.getElementById("Info").classList.remove("hidden");
      }
        if (document.getElementById("Info2").textContent != ""){ //si c'est semaine
          replaceButtonText('Info2', "Si desea cancelar su suscripción, se le ha enviado un enlace a su dirección de correo electrónico, sólo tiene que hacer clic en él.");
        document.getElementById("Info2").classList.remove("hidden");
      }
      if (document.getElementById("Info3").textContent != ""){
        replaceButtonText('Info3', 'Su paquete ha sido borrado !');
        document.getElementById("Info3").classList.remove("hidden");
      }
    }
  }
