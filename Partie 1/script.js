var lalampeOff = false; //pour représenter l'état de la lampe

function Lamp() {  //Définit une fonction nommée "Lamp" qui est appelée lorsqu'on clique sur le bouton.


    
    var lmp = document.getElementById('lampeof'); //Récupère l'élément image de lampe par son identifiant.


    

    lalampeOff =! lalampeOff;  //permet le changement del'état de la lampe.
    

    if (lalampeOff) {
       
        lmp.src = 'lamp.png';
    } 
    

    else {
    
        lmp.src = 'lampon.png';
    }
    

    var audio = document.getElementById("audio");
    audio.play(); //Joue le fichier audio chargé précédemment.
    
}