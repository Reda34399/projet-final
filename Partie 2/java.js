var imageButton = document.getElementById('imgCon');

imageButton.addEventListener('click', function() { //Ajoute un événements pour détecter le clic sur le bouton "Image" et exécuter une fonction.
    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML = ''; // Vide le contenu précédent
    
    var image = document.createElement('img');
    image.src = "basso.jpg";

    contentDiv.appendChild(image);
});




var cvButton = document.getElementById('cv');

cvButton.addEventListener('click', function() {

    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML = ''; // Vide le contenu précédent
    
    var image = document.createElement('img');
    image.src = "cvvv.png";

    contentDiv.appendChild(image);
});





var videoButton = document.getElementById('VideoCon');

videoButton.addEventListener('click', function() {
    
    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML = ''; // Vide le contenu précédent
    
    var video = document.createElement('video');
    video.src = "silkala.mp4";
    video.setAttribute('controls',true);// cela active l'affichage des contrôles de lecture (lecture, pause, avance rapide, retour arrière, etc.)

    contentDiv.appendChild(video);//cela signifie que la vidéo créée dynamiquement est ajoutée à l'intérieur du div avec l'identifiant
});




var formButton = document.getElementById('formulaireCon');

formButton.addEventListener('click', function() {

    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML=''; //pour eviter la repitition

    var a = document.createElement('h2');
    a.innerHTML ="<legend>Mon Formulaire</legend>";


    var b = document.createElement('h2');
    b.innerHTML="<label>Prénom:</label>  <input placeholder=Required>";


    var c = document.createElement('h2');
    c.innerHTML="<label>Nom:</label>  <input placeholder=Required>";


    var d = document.createElement('h2');
    d.innerHTML="<label>Courriel:</label>  <input placeholder=Required>";

    
    var e = document.createElement('h2');
    e.innerHTML="<label>Telephone:</label>  <input placeholder=Required>";


    var f = document.createElement('h2');
    f.innerHTML = "<input type=submit value=Envoyer>";
    
    

    contentDiv.appendChild(a);
    contentDiv.appendChild(b);
    contentDiv.appendChild(c);
    contentDiv.appendChild(d);
    contentDiv.appendChild(e);
    contentDiv.appendChild(f);
});