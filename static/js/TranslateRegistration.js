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
  function replaceButtonNameText(buttonName, text){
      if (document.getElementById){
        var button=document.getElementsByName(buttonName)[0];
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
        replaceButtonText('1Semaine', '1 Week');
        replaceButtonText('ToutLesMois', 'Every Month');
        replaceButtonText('DebitIllimité', 'Unlimited data');
        replaceButtonText('DebitIllimité2', 'Unlimited data');
        replaceButtonText('AucunSupport', 'No support');
        replaceButtonText('SupportCompris', 'Full support');
        replaceButtonText('IdealPourTester', 'Good to test');
        replaceButtonText('IdealPourLongueDurée', 'Good for long term use');
        replaceButtonNameText('ChoisirSemaine', 'Choose');
        replaceButtonNameText('ChoisirMois', 'Choose');
        replaceButtonText('UneErreurEstSurvenue', 'An error has occurred');

      }
      if (language === 'French'){
        replaceButtonText('1Semaine', '1 Semaine');
        replaceButtonText('ToutLesMois', 'Tout les mois');
        replaceButtonText('DebitIllimité', 'Data illimité');
        replaceButtonText('DebitIllimité2', 'Data illimité');
        replaceButtonText('AucunSupport', 'Aucun support');
        replaceButtonText('SupportCompris', 'Support compris');
        replaceButtonText('IdealPourTester', 'Ideal pour tester');
        replaceButtonText('IdealPourLongueDurée', 'Ideal pour les longues durée');
        replaceButtonNameText('ChoisirSemaine', 'Choisir');
        replaceButtonNameText('ChoisirMois', 'Choisir');
        replaceButtonText('UneErreurEstSurvenue', 'Une erreur est survenue');
      }
      if (language === 'Spanish'){
        replaceButtonText('1Semaine', '1 Semana');
        replaceButtonText('ToutLesMois', 'Mensualmente');
        replaceButtonText('DebitIllimité', 'Datos ilimitados');
        replaceButtonText('DebitIllimité2', 'Datos ilimitados');
        replaceButtonText('AucunSupport', 'Ninguna ayuda');
        replaceButtonText('SupportCompris', 'Asistencia incluida');
        replaceButtonText('IdealPourTester', 'Ideal para pruebas');
        replaceButtonText('IdealPourLongueDurée', 'Ideal para largos periodos de tiempo');
        replaceButtonNameText('ChoisirSemaine', 'Elegir');
        replaceButtonNameText('ChoisirMois', 'Elegir');
        replaceButtonText('UneErreurEstSurvenue', 'Se ha producido un error');
      }
    }