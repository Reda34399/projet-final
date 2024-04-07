       // Génération aléatoire du nombre à deviner entre 1 et 100
       var randomNumber = Math.floor(Math.random() * 100) + 1;

       // Fonction pour vérifier la proposition de l'utilisateur
       function checkGuess() {
           // Récupérer la proposition de l'utilisateur depuis le champ de texte
           var userGuess = parseInt(document.getElementById('userGuess').value);
       
           // Vérifier si la proposition est un nombre valide
           if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
               document.getElementById('feedback').innerText = "Veuillez entrer un nombre entre 1 et 100.";
               return;
           }
       
           // Comparer la proposition de l'utilisateur avec le nombre généré aléatoirement
           if (userGuess === randomNumber) {
               document.getElementById('feedback').innerText = "Bravo, vous avez deviné le nombre correctement !";
           } else if (userGuess < randomNumber) {
               document.getElementById('feedback').innerText = "Trop petit. Essayez à nouveau !";
           } else {
               document.getElementById('feedback').innerText = "Trop grand. Essayez à nouveau !";
           }
       }
       